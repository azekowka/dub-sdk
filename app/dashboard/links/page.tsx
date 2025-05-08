"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, Filter, MoreVertical, Search } from "lucide-react"
import AuthCheck from "@/components/auth-check"
import Layout from "@/components/dashboard/layout"

export default function LinksPage() {
  return (
    <AuthCheck>
      <Layout>
        <div className="bg-background">
          <div className="px-0 py-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">Links</h1>
                <button className="text-muted-foreground hover:text-foreground">
                  <ChevronDown className="h-5 w-5" />
                </button>
                <button className="text-muted-foreground hover:text-foreground">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex gap-2">
                <Button variant="outline" className="flex items-center gap-2 h-10">
                  <Filter className="h-4 w-4" />
                  Filter
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>

                <Button variant="outline" className="flex items-center gap-2 h-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-layout-grid"
                  >
                    <rect width="7" height="7" x="3" y="3" rx="1" />
                    <rect width="7" height="7" x="14" y="3" rx="1" />
                    <rect width="7" height="7" x="14" y="14" rx="1" />
                    <rect width="7" height="7" x="3" y="14" rx="1" />
                  </svg>
                  Display
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </div>

              <div className="flex flex-1 gap-2 items-center">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Input className="pl-10 h-10" placeholder="Search..." />
                </div>

                <div className="flex items-center gap-2">
                  <Button className="bg-black text-white hover:bg-black/90 h-10 flex items-center gap-2">
                    Create link
                    <span className="ml-1 px-1.5 py-0.5 text-xs bg-gray-800 rounded">C</span>
                  </Button>
                  <button className="text-muted-foreground hover:text-foreground">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="p-8 text-center">
                <h2 className="text-lg font-medium mb-2">You don&apos;t have any links yet</h2>
                <p className="text-muted-foreground mb-4">Create your first link to get started</p>
                <Link href="/dashboard/links/new">
                  <Button className="bg-black text-white hover:bg-black/90">Create Link</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </AuthCheck>
  )
}
