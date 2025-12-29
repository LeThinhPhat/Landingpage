import api from "@/app/lib/api";
import { supabase } from "@/app/lib/supabase/client";

export const ROLES = {
  ADMIN: "ADMIN",
  MANAGER: "MANAGER",
  LEAD_SALE: "LEAD_SALE",
  STAFF_SALE: "STAFF_SALE",
  STAFF_PURCHASER: "STAFF_PURCHASER",
  STAFF_WAREHOUSE_FOREIGN: "STAFF_WAREHOUSE_FOREIGN",
  STAFF_WAREHOUSE_DOMESTIC: "STAFF_WAREHOUSE_DOMESTIC",
  CUSTOMER: "CUSTOMER",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

export interface User {
  id: string;
  accountId: string;
  username: string;
  email: string | null;
  role: Role;
  name: string;
  phone: string | null;
  staffCode: string | null;
  department: string | null;
  location?: string | null;
  status?: string | null;
}

export interface LoginResponse {
  jwt?: string;
  token?: string;
  access_token?: string;
  user?: Partial<User>;
  id?: string;
  accountId?: string;
  username?: string;
  email?: string;
  phone?: string;
  role?: Role;
  name?: string;
  fullName?: string;
  staffCode?: string;
  department?: string;
  location?: string;
  status?: string;
}

// ===== Constants & Storage =====
const TOKEN_KEY = "jwt";
const USER_KEY = "user";

const isValidToken = (t: string | null): t is string =>
  typeof t === "string" && t.length > 20;

const isValidUser = (u: Partial<User> | null): u is User =>
  !!u && !!(u.id || u.accountId) && !!u.role;

const normalizeUser = (raw: Partial<User> = {}): User => ({
  id: raw.id ?? raw.accountId ?? "",
  accountId: raw.accountId ?? raw.id ?? "",
  username: raw.username ?? raw.email?.split("@")[0] ?? "",
  email: raw.email ?? null,
  role: raw.role ?? ROLES.CUSTOMER,
  name: raw.name ?? raw.username ?? raw.email ?? "user",
  phone: raw.phone ?? null,
  staffCode: raw.staffCode ?? null,
  department: raw.department ?? null,
  location: raw.location ?? null,
  status: raw.status ?? null,
});

const setAuthData = (token: string, user: Partial<User>) => {
  if (!isValidToken(token)) throw new Error("Token không hợp lệ");
  const sanitized = normalizeUser(user);
  if (!isValidUser(sanitized))
    throw new Error("Dữ liệu người dùng không hợp lệ");
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(sanitized));
};

const clearAuthData = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem("token_expiry");
};

// ===== Parse helpers =====
const extractTokenUser = (data: LoginResponse = {}) => {
  const token = data.jwt ?? data.token ?? data.access_token ?? null;
  const user =
    data.user && typeof data.user === "object"
      ? data.user
      : data.id || data.accountId
      ? {
          id: data.id ?? data.accountId,
          accountId: data.accountId ?? data.id,
          username: data.username,
          email: data.email,
          phone: data.phone,
          role: data.role,
          name: data.name ?? data.fullName,
          staffCode: data.staffCode,
          department: data.department,
          location: data.location,
          status: data.status,
        }
      : null;

  return { token, user };
};

// ===== Auth Flows =====
export const login = async (username: string, password: string) => {
  if (!username || !password)
    throw new Error("Username và password là bắt buộc");

  try {
    const { data } = await api.post<LoginResponse>(
      "/accounts/login",
      { username, password },
      { timeout: 20000 }
    );
    const { token, user } = extractTokenUser(data);
    if (!token || !user)
      throw new Error(
        "Dữ liệu đăng nhập không hợp lệ. Vui lòng liên hệ quản trị viên."
      );

    setAuthData(token, user);
    return { token, user: normalizeUser(user) };
  } catch (error: any) {
    const status = error.response?.status;
    const message = error.response?.data?.message;
    if (status === 403)
      throw new Error("Tên đăng nhập hoặc mật khẩu không đúng!");
    if (status === 404) throw new Error("Tài khoản không tồn tại!");
    if (status === 400)
      throw new Error(message || "Dữ liệu đăng nhập không hợp lệ!");
    throw new Error(
      message || error.message || "Đăng nhập thất bại. Vui lòng thử lại."
    );
  }
};

export const verifySupabaseToken = async (supabaseToken: string) => {
  if (!isValidToken(supabaseToken)) throw new Error("Token không hợp lệ");

  try {
    const { data } = await api.post<LoginResponse>("/accounts/verify", null, {
      headers: { Authorization: `Bearer ${supabaseToken}` },
      timeout: 10000,
    });

    const { token, user } = extractTokenUser(data);
    if (!token || !user) throw new Error("Xác thực thất bại");

    setAuthData(token, user);
    return { jwt: token, token, user: normalizeUser(user) };
  } catch (error: any) {
    const message = error.response?.data?.message || "Xác thực token thất bại";
    throw new Error(message);
  }
};

export const googleLogin = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
      queryParams: { access_type: "offline", prompt: "consent" },
    },
  });
  if (error) throw new Error(error.message || "Đăng nhập Google thất bại");
  return data;
};

export const logout = async () => {
  try {
    await supabase.auth.signOut();
  } finally {
    clearAuthData();
  }
};

// ===== Helpers =====
export const getToken = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
};

export const getCurrentUser = (): User | null => {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(USER_KEY);
  try {
    return raw ? JSON.parse(raw) : null;
  } catch {
    clearAuthData();
    return null;
  }
};

export const getRole = (): Role | null => getCurrentUser()?.role || null;

export const hasRole = (allowedRoles: Role[] = []): boolean =>
  Array.isArray(allowedRoles) && allowedRoles.includes(getRole()!);

export const isAuthenticated = (): boolean =>
  Boolean(getToken() && getCurrentUser());
