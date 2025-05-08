"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Download, Copy, Info, X } from "lucide-react"

interface QRCodeModalProps {
  onClose: () => void
}

export function QRCodeModal({ onClose }: QRCodeModalProps) {
  const [showLogo, setShowLogo] = useState(true)
  const [qrColor, setQrColor] = useState("#000000")

  const colors = [
    "#000000", // Black
    "#DC2626", // Red
    "#EA580C", // Orange
    "#F472B6", // Pink
    "#FBBF24", // Yellow
    "#22C55E", // Green
    "#2563EB", // Blue
    "#9333EA", // Purple
  ]

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-medium">QR Code</h2>
            <div className="px-2 py-0.5 bg-gray-200 rounded text-xs font-medium">PRO</div>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium flex items-center gap-1">
                QR Code Preview
                <button className="text-gray-400 hover:text-gray-600">
                  <Info className="h-4 w-4" />
                </button>
              </h3>
              <div className="flex gap-2">
                <button className="text-gray-500 hover:text-gray-700">
                  <Download className="h-4 w-4" />
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="border rounded-lg p-4 flex justify-center">
              <div className="w-40 h-40 bg-gray-100 rounded-md flex items-center justify-center">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="120" height="120" fill="#F5F5F5" />
                  <rect x="20" y="20" width="80" height="80" fill="white" />
                  <rect x="32" y="32" width="8" height="8" fill={qrColor} />
                  <rect x="40" y="32" width="8" height="8" fill={qrColor} />
                  <rect x="48" y="32" width="8" height="8" fill={qrColor} />
                  <rect x="56" y="32" width="8" height="8" fill={qrColor} />
                  <rect x="64" y="32" width="8" height="8" fill={qrColor} />
                  <rect x="72" y="32" width="8" height="8" fill={qrColor} />
                  <rect x="80" y="32" width="8" height="8" fill={qrColor} />
                  <rect x="32" y="40" width="8" height="8" fill={qrColor} />
                  <rect x="80" y="40" width="8" height="8" fill={qrColor} />
                  <rect x="32" y="48" width="8" height="8" fill={qrColor} />
                  <rect x="48" y="48" width="8" height="8" fill={qrColor} />
                  <rect x="56" y="48" width="8" height="8" fill={qrColor} />
                  <rect x="64" y="48" width="8" height="8" fill={qrColor} />
                  <rect x="80" y="48" width="8" height="8" fill={qrColor} />
                  <rect x="32" y="56" width="8" height="8" fill={qrColor} />
                  <rect x="48" y="56" width="8" height="8" fill={qrColor} />
                  <rect x="64" y="56" width="8" height="8" fill={qrColor} />
                  <rect x="80" y="56" width="8" height="8" fill={qrColor} />
                  <rect x="32" y="64" width="8" height="8" fill={qrColor} />
                  <rect x="48" y="64" width="8" height="8" fill={qrColor} />
                  <rect x="56" y="64" width="8" height="8" fill={qrColor} />
                  <rect x="64" y="64" width="8" height="8" fill={qrColor} />
                  <rect x="80" y="64" width="8" height="8" fill={qrColor} />
                  <rect x="32" y="72" width="8" height="8" fill={qrColor} />
                  <rect x="80" y="72" width="8" height="8" fill={qrColor} />
                  <rect x="32" y="80" width="8" height="8" fill={qrColor} />
                  <rect x="40" y="80" width="8" height="8" fill={qrColor} />
                  <rect x="48" y="80" width="8" height="8" fill={qrColor} />
                  <rect x="56" y="80" width="8" height="8" fill={qrColor} />
                  <rect x="64" y="80" width="8" height="8" fill={qrColor} />
                  <rect x="72" y="80" width="8" height="8" fill={qrColor} />
                  <rect x="80" y="80" width="8" height="8" fill={qrColor} />
                  {showLogo && (
                    <>
                      <circle cx="60" cy="60" r="12" fill={qrColor} />
                      <circle cx="60" cy="60" r="8" fill="white" />
                    </>
                  )}
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium flex items-center gap-1">
                Logo
                <button className="text-gray-400 hover:text-gray-600">
                  <Info className="h-4 w-4" />
                </button>
              </h3>
              <Switch checked={showLogo} onCheckedChange={setShowLogo} />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium">QR Code Color</h3>
            <div className="flex items-center gap-2">
              <div className="relative flex items-center border rounded-md overflow-hidden">
                <div className="w-8 h-8 bg-black"></div>
                <input
                  type="text"
                  value={qrColor}
                  onChange={(e) => setQrColor(e.target.value)}
                  className="px-2 py-1 w-24 text-sm focus:outline-none"
                />
              </div>
              {colors.map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full ${color === qrColor ? "ring-2 ring-offset-2 ring-gray-400" : ""}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setQrColor(color)}
                >
                  {color === qrColor && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mx-auto"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 p-4 border-t">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onClose}>Save changes</Button>
        </div>
      </div>
    </div>
  )
}
