// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/app/contexts/AuthContext";
import { Toaster } from "react-hot-toast";
import ConditionalLayout from "./components/ConditionalLayout";
import { Be_Vietnam_Pro } from "next/font/google";

const beVN = Be_Vietnam_Pro({
  variable: "--font-sans",
  subsets: ["vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tiximax Logistics - Vận chuyển quốc tế",
  description:
    "Dịch vụ logistics, mua hộ, vận chuyển từ Nhật, Hàn, Mỹ, Indonesia về Việt Nam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${beVN.variable} antialiased`}>
        <AuthProvider>
          <ConditionalLayout>{children}</ConditionalLayout>

          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            toastOptions={{
              duration: 4000,
              style: {
                background: "#363636",
                color: "#fff",
                padding: "16px",
                borderRadius: "8px",
              },
              success: {
                duration: 3000,
                iconTheme: { primary: "#10b981", secondary: "#fff" },
              },
              error: {
                duration: 4000,
                iconTheme: { primary: "#ef4444", secondary: "#fff" },
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
}
