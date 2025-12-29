import ProtectedRoute from "@/app/components/ProtectedRoute";
import { ROLES } from "@/app/Service/auth/authService";

export default function AdminPage() {
  return (
    <ProtectedRoute allowedRoles={[ROLES.ADMIN]}>
      <div>
        <h1>Admin Dashboard</h1>
        {/* Admin content */}
      </div>
    </ProtectedRoute>
  );
}
