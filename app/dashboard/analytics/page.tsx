"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BarChart, Calendar, ChevronDown, ChevronRight, Filter, Grid2X2, MoreVertical, Play } from "lucide-react"
import { DatePicker } from "@/components/analytics/date-picker"
import { AreaChart } from "@/components/analytics/area-chart"
import Layout from "@/components/dashboard/layout"
import AuthCheck from "@/components/auth-check"
export default function AnalyticsPage() {
  const [showDatePicker, setShowDatePicker] = useState(false)

  return (
    <AuthCheck>
      <Layout>
        <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Analytics</h1>

            <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between">
            <div className="flex gap-2">
                <Button variant="outline" className="flex items-center gap-2 h-10">
                <Filter className="h-4 w-4" />
                Filter
                <ChevronDown className="h-4 w-4 ml-1" />
                </Button>

                <div className="relative">
                <Button
                    variant="outline"
                    className="flex items-center gap-2 h-10"
                    onClick={() => setShowDatePicker(!showDatePicker)}
                >
                    <Calendar className="h-4 w-4" />
                    Last 24 hours
                    <ChevronDown className="h-4 w-4 ml-1" />
                </Button>

                {showDatePicker && (
                    <div className="absolute top-full left-0 mt-1 z-50">
                    <DatePicker onClose={() => setShowDatePicker(false)} />
                    </div>
                )}
                </div>
            </div>

            <div className="flex items-center gap-2">
                <Button variant="outline" className="flex items-center gap-2 h-10">
                <Grid2X2 className="h-4 w-4" />
                Switch to Events
                </Button>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                <MoreVertical className="h-5 w-5" />
                </Button>
            </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card className="p-4 border rounded-lg">
                <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-blue-400 rounded-sm mr-2"></div>
                <span className="text-gray-600">Clicks</span>
                </div>
                <div className="text-4xl font-bold">0</div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <ChevronRight className="h-5 w-5 text-gray-300" />
                </div>
            </Card>

            <Card className="p-4 border rounded-lg">
                <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-purple-400 rounded-sm mr-2"></div>
                <span className="text-gray-600">Leads</span>
                </div>
                <div className="text-4xl font-bold">0</div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <ChevronRight className="h-5 w-5 text-gray-300" />
                </div>
            </Card>

            <Card className="p-4 border rounded-lg">
                <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-teal-400 rounded-sm mr-2"></div>
                <span className="text-gray-600">Sales</span>
                </div>
                <div className="flex items-center">
                <div className="text-4xl font-bold">0 $</div>
                <div className="ml-auto bg-gray-100 px-2 py-1 rounded text-sm">123</div>
                </div>
            </Card>
            </div>

            <Card className="border rounded-lg p-4 relative">
            <div className="absolute top-4 right-4 flex gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8 bg-gray-50">
                <BarChart className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 bg-gray-50">
                <Play className="h-4 w-4" />
                </Button>
            </div>

            <div className="h-[400px] mt-8">
                <AreaChart />
            </div>
            </Card>
        </div>
        </div>
      </Layout>
    </AuthCheck>
  )
}
