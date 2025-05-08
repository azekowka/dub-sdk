"use client"

import { useState } from "react"
import { Check, ChevronDown, FolderClosed, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FolderSelector() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button variant="outline" className="w-full justify-between" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center gap-2">
          <FolderClosed className="h-4 w-4 text-green-500" />
          <span>Links</span>
        </div>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </Button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
          <div className="p-2">
            <input
              type="text"
              placeholder="Search folders..."
              className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none"
            />
          </div>
          <div className="max-h-60 overflow-auto">
            <div className="p-1">
              <button className="flex items-center justify-between w-full px-3 py-2 text-sm text-left rounded-md hover:bg-gray-100">
                <div className="flex items-center gap-2">
                  <FolderClosed className="h-4 w-4 text-green-500" />
                  <span>Links</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Unsorted</span>
                  <Check className="h-4 w-4" />
                </div>
              </button>
              <button className="flex items-center w-full px-3 py-2 text-sm text-left text-gray-500 rounded-md hover:bg-gray-100">
                <Plus className="h-4 w-4 mr-2" />
                Create new folder
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
