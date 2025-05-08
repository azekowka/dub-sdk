"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Lock } from "lucide-react"

interface DatePickerProps {
  onClose: () => void
}

export function DatePicker({ onClose }: DatePickerProps) {
  const [selectedOption, setSelectedOption] = useState("last24hours")

  const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]

  // May 2025
  const mayDays = [
    [null, null, null, 1, 2, 3, 4],
    [5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30, 31, null],
  ]

  // June 2025
  const juneDays = [
    [null, null, null, null, null, null, 1],
    [2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, 29],
    [30, null, null, null, null, null, null],
  ]

  const isSelected = (month: string, day: number | null) => {
    if (!day) return false
    if (month === "may" && (day === 7 || day === 8)) return true
    return false
  }

  return (
    <div className="bg-white border rounded-lg shadow-lg w-[600px] flex">
      <div className="flex-1 p-4 border-r">
        <div className="flex items-center justify-between mb-4">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h3 className="text-sm font-medium">May 2025</h3>
          <div className="w-8"></div>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {days.map((day, i) => (
            <div key={i} className="text-xs text-gray-500">
              {day}
            </div>
          ))}
        </div>

        {mayDays.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-7 gap-1 text-center">
            {week.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className={`
                  text-sm py-2 rounded-md
                  ${day ? "cursor-pointer hover:bg-gray-100" : ""}
                  ${isSelected("may", day) ? "bg-blue-500 text-white" : ""}
                `}
              >
                {day}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex-1 p-4 border-r">
        <div className="flex items-center justify-between mb-4">
          <div className="w-8"></div>
          <h3 className="text-sm font-medium">June 2025</h3>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {days.map((day, i) => (
            <div key={i} className="text-xs text-gray-500">
              {day}
            </div>
          ))}
        </div>

        {juneDays.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-7 gap-1 text-center">
            {week.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className={`
                  text-sm py-2 rounded-md
                  ${day ? "cursor-pointer hover:bg-gray-100" : ""}
                `}
              >
                {day}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="w-[200px] p-4">
        <div
          className={`px-4 py-2 rounded-md text-sm mb-2 cursor-pointer ${selectedOption === "last24hours" ? "bg-gray-100" : "hover:bg-gray-50"}`}
          onClick={() => setSelectedOption("last24hours")}
        >
          <div className="flex justify-between">
            <span>Last 24 hours</span>
            <span className="text-gray-400">D</span>
          </div>
        </div>

        <div
          className={`px-4 py-2 rounded-md text-sm mb-2 cursor-pointer ${selectedOption === "last7days" ? "bg-gray-100" : "hover:bg-gray-50"}`}
          onClick={() => setSelectedOption("last7days")}
        >
          <div className="flex justify-between">
            <span>Last 7 days</span>
            <span className="text-gray-400">W</span>
          </div>
        </div>

        <div
          className={`px-4 py-2 rounded-md text-sm mb-2 cursor-pointer ${selectedOption === "last30days" ? "bg-gray-100" : "hover:bg-gray-50"}`}
          onClick={() => setSelectedOption("last30days")}
        >
          <div className="flex justify-between">
            <span>Last 30 days</span>
            <span className="text-gray-400">T</span>
          </div>
        </div>

        <div
          className={`px-4 py-2 rounded-md text-sm mb-2 cursor-pointer ${selectedOption === "last3months" ? "bg-gray-100" : "hover:bg-gray-50"}`}
          onClick={() => setSelectedOption("last3months")}
        >
          <div className="flex justify-between">
            <span>Last 3 months</span>
            <Lock className="h-4 w-4" />
          </div>
        </div>

        <div
          className={`px-4 py-2 rounded-md text-sm mb-2 cursor-pointer ${selectedOption === "last12months" ? "bg-gray-100" : "hover:bg-gray-50"}`}
          onClick={() => setSelectedOption("last12months")}
        >
          <div className="flex justify-between">
            <span>Last 12 months</span>
            <Lock className="h-4 w-4" />
          </div>
        </div>

        <div
          className={`px-4 py-2 rounded-md text-sm mb-2 cursor-pointer ${selectedOption === "monthToDate" ? "bg-gray-100" : "hover:bg-gray-50"}`}
          onClick={() => setSelectedOption("monthToDate")}
        >
          <div className="flex justify-between">
            <span>Month to Date</span>
            <span className="text-gray-400">M</span>
          </div>
        </div>

        <div
          className={`px-4 py-2 rounded-md text-sm mb-2 cursor-pointer ${selectedOption === "quarterToDate" ? "bg-gray-100" : "hover:bg-gray-50"}`}
          onClick={() => setSelectedOption("quarterToDate")}
        >
          <div className="flex justify-between">
            <span>Quarter to Date</span>
            <span className="text-gray-400">Q</span>
          </div>
        </div>

        <div
          className={`px-4 py-2 rounded-md text-sm mb-2 cursor-pointer ${selectedOption === "yearToDate" ? "bg-gray-100" : "hover:bg-gray-50"}`}
          onClick={() => setSelectedOption("yearToDate")}
        >
          <div className="flex justify-between">
            <span>Year to Date</span>
            <Lock className="h-4 w-4" />
          </div>
        </div>

        <div
          className={`px-4 py-2 rounded-md text-sm mb-2 cursor-pointer ${selectedOption === "allTime" ? "bg-gray-100" : "hover:bg-gray-50"}`}
          onClick={() => setSelectedOption("allTime")}
        >
          <div className="flex justify-between">
            <span>All Time</span>
            <span className="text-gray-400">A</span>
          </div>
        </div>
      </div>
    </div>
  )
}
