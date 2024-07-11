import AdminNav from "@/components/Admin/Layout/AdminNav";
import React, { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <section>
      <div className="flex">
        <AdminNav />
        <div className="min-h-screen w-full pl-20 pt-14">
          {children}
        </div>
      </div>
    </section>
  );
};

export default AdminLayout;
