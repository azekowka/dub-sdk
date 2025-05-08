"use client"

import { useEffect, useRef } from "react"

export function AreaChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with higher resolution for retina displays
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height)

    // Draw time labels
    const timeLabels = ["3:00 AM", "8:00 AM", "1:00 PM", "6:00 PM", "11:00 PM"]
    const labelWidth = rect.width / (timeLabels.length - 1)

    ctx.fillStyle = "#9CA3AF"
    ctx.font = "12px Inter, sans-serif"
    ctx.textAlign = "center"

    timeLabels.forEach((label, index) => {
      const x = index * labelWidth
      ctx.fillText(label, x, rect.height - 10)
    })

    // Draw the "0" label on y-axis
    ctx.textAlign = "left"
    ctx.fillText("0", 0, 20)

    // Draw the blue area and line
    const startX = 0
    const endX = rect.width
    const y = rect.height - 40 // Position above the time labels

    // Draw the blue area
    const gradient = ctx.createLinearGradient(0, 0, 0, y)
    gradient.addColorStop(0, "rgba(59, 130, 246, 0.1)")
    gradient.addColorStop(1, "rgba(59, 130, 246, 0)")

    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.moveTo(startX, y)
    ctx.lineTo(endX, y)
    ctx.lineTo(endX, 0)
    ctx.lineTo(startX, 0)
    ctx.closePath()
    ctx.fill()

    // Draw the blue line
    ctx.strokeStyle = "#3B82F6"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(startX, y)
    ctx.lineTo(endX, y)
    ctx.stroke()

    // Draw the blue dot at the end
    ctx.fillStyle = "#3B82F6"
    ctx.beginPath()
    ctx.arc(endX, y, 4, 0, Math.PI * 2)
    ctx.fill()

    // Draw white center in the dot
    ctx.fillStyle = "white"
    ctx.beginPath()
    ctx.arc(endX, y, 2, 0, Math.PI * 2)
    ctx.fill()
  }, [])

  return (
    <div className="w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full" style={{ width: "100%", height: "100%" }} />
    </div>
  )
}
