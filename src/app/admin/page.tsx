import { redirect } from "next/navigation";
import { createClient } from "@/app/lib/supabase/server";
import DashboardContent from "./dashboard-content";
import { Suspense } from "react";

export default function AdminPage() {
  return (
    <Suspense fallback={<p style={{ padding: 32 }}>Loading…</p>}>
      <AdminContent />
    </Suspense>
  );
}
async function AdminContent() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    redirect("/admin/login");
  }

  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const userEmail = data.user.email?.trim().toLowerCase();

  if (!adminEmail || !userEmail || userEmail !== adminEmail) {
    redirect("/admin/login");
  }

  return <DashboardContent />;
}
