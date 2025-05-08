"use client";
import Layout from "../../components/dashboard/layout"
import AuthCheck from "@/components/auth-check";

export default function Dashboard() {
  return (
    <AuthCheck>
      <Layout>
        <div>
          <h1>Dashboard</h1>
        </div>
      </Layout>
    </AuthCheck>
  )
}
