"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Globe, Info, Tag, Shuffle, Pencil, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { FolderSelector } from "@/components/links/folder-selector"
import { QRCodePreview } from "@/components/links/qr-code-preview"
import { LinkPreviewModal } from "@/components/links/link-preview-modal"
import { QRCodeModal } from "@/components/links/qr-code-modal"
import AuthCheck from "@/components/auth-check"
import Layout from "@/components/dashboard/layout"

export default function NewLinkPage() {
  const [showLinkPreviewModal, setShowLinkPreviewModal] = useState(false)
  const [showQRCodeModal, setShowQRCodeModal] = useState(false)
  const [draftSaved, setDraftSaved] = useState(true)
  const [destination, setDestination] = useState("https://b2a.kz/")
  const [shortLink, setShortLink] = useState("b2a")

  return (
    <AuthCheck>
      <Layout>
        <div className="bg-background">
          <div className="border-b">
            <div className="container mx-auto px-0 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Link href="/dashboard/links" className="text-sm font-medium">
                  Links
                </Link>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm font-medium">New link</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {draftSaved && <span className="text-sm text-muted-foreground">Draft saved</span>}
                <button className="text-muted-foreground hover:text-foreground">
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="px-0 py-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm font-medium">Destination URL</h2>
                    <button className="text-muted-foreground hover:text-foreground">
                      <Info className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <Input
                  className="w-full"
                  placeholder="https://b2a.kz/"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium">Short Link</h2>
                  <div className="flex items-center gap-2">
                    <button className="text-muted-foreground hover:text-foreground">
                      <Shuffle className="h-4 w-4" />
                    </button>
                    <button className="text-muted-foreground hover:text-foreground">
                      <Pencil className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="flex">
                  <div className="relative">
                    <select className="appearance-none bg-background border border-r-0 rounded-l-md px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200">
                      <option>b2a.kz</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-foreground">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                  <Input
                    className="flex-1 rounded-l-none"
                    placeholder="your-short-link"
                    value={shortLink}
                    onChange={(e) => setShortLink(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm font-medium">Tags</h2>
                    <button className="text-muted-foreground hover:text-foreground">
                      <Info className="h-4 w-4" />
                    </button>
                  </div>
                  <button className="text-xs text-muted-foreground hover:text-foreground">Manage</button>
                </div>
                <div className="flex items-center border rounded-md px-3 py-2">
                  <Tag className="h-4 w-4 text-muted-foreground mr-2" />
                  <input
                    className="flex-1 bg-transparent outline-none text-sm placeholder-muted-foreground"
                    placeholder="Select tags..."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm font-medium">Comments</h2>
                    <button className="text-muted-foreground hover:text-foreground">
                      <Info className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <Textarea className="min-h-[100px] resize-none" placeholder="Add comments" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm font-medium">Conversion Tracking</h2>
                    <button className="text-muted-foreground hover:text-foreground">
                      <Info className="h-4 w-4" />
                    </button>
                  </div>
                  <Switch />
                </div>
              </div>

              <div className="pt-4 border-t flex flex-wrap gap-2">
                <Button variant="outline" className="flex items-center gap-2">
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
                    className="lucide lucide-tag"
                  >
                    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
                    <path d="M7 7h.01" />
                  </svg>
                  UTM
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
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
                    className="lucide lucide-target"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                  Targeting
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
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
                    className="lucide lucide-lock"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  Password
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
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
                    className="lucide lucide-timer"
                  >
                    <path d="M10 2h4" />
                    <path d="M12 14v-4" />
                    <path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" />
                    <path d="M9 17H4v5" />
                  </svg>
                  Expiration
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
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
                    className="lucide lucide-more-horizontal"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="12" r="1" />
                  </svg>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border rounded-lg overflow-hidden">
                <div className="p-4 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h2 className="text-sm font-medium">Folder</h2>
                        <button className="text-muted-foreground hover:text-foreground">
                          <Info className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <FolderSelector />
                  </div>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="p-4 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h2 className="text-sm font-medium">QR Code</h2>
                        <button className="text-muted-foreground hover:text-foreground">
                          <Info className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div
                      className="border rounded-lg p-4 flex justify-center cursor-pointer"
                      onClick={() => setShowQRCodeModal(true)}
                    >
                      <QRCodePreview />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="p-4 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h2 className="text-sm font-medium">Custom Link Preview</h2>
                        <button className="text-muted-foreground hover:text-foreground">
                          <Info className="h-4 w-4" />
                        </button>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex justify-center gap-2 py-2">
                      <Button variant="outline" size="sm" className="rounded-md w-12 h-10 flex items-center justify-center">
                        <Globe className="h-5 w-5" />
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-md w-12 h-10 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-twitter"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-md w-12 h-10 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-linkedin"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-md w-12 h-10 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-facebook"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      </Button>
                    </div>
                    <div
                      className="border rounded-lg p-4 flex flex-col items-center justify-center h-40 cursor-pointer"
                      onClick={() => setShowLinkPreviewModal(true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-image text-muted-foreground mb-2"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                        <circle cx="9" cy="9" r="2" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                      </svg>
                      <p className="text-sm text-center text-muted-foreground">
                        Enter a link to generate
                        <br />a preview
                      </p>
                    </div>
                    <div className="space-y-1 pt-2">
                      <input
                        className="w-full bg-transparent outline-none text-sm placeholder-muted-foreground border-b pb-1"
                        placeholder="Add a title..."
                      />
                      <input
                        className="w-full bg-transparent outline-none text-sm placeholder-muted-foreground"
                        placeholder="Add a description..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t">
            <div className="container mx-auto px-0 py-3 flex justify-end">
              <Button className="bg-black text-white hover:bg-black/90 flex items-center gap-2">
                Create link
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
                  className="lucide lucide-corner-down-left"
                >
                  <polyline points="9 10 4 15 9 20" />
                  <path d="M20 4v7a4 4 0 0 1-4 4H4" />
                </svg>
              </Button>
            </div>
          </div>

          {showLinkPreviewModal && <LinkPreviewModal onClose={() => setShowLinkPreviewModal(false)} />}

          {showQRCodeModal && <QRCodeModal onClose={() => setShowQRCodeModal(false)} />}
        </div>
      </Layout>
    </AuthCheck>
  )
}
