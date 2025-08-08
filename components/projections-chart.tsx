"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar, ComposedChart } from "recharts"

const projectionData = [
  { year: "Year 1", tvl: 25, grossRevenue: 375, netRevenue: 300, users: 2.5 },
  { year: "Year 2", tvl: 80, grossRevenue: 1500, netRevenue: 1200, users: 8 },
  { year: "Year 3", tvl: 250, grossRevenue: 4700, netRevenue: 3800, users: 18 },
]

const monthlyData = [
  { month: "Jan", volume: 2.5, revenue: 25 },
  { month: "Feb", volume: 2.8, revenue: 28 },
  { month: "Mar", volume: 3.2, revenue: 32 },
  { month: "Apr", volume: 3.5, revenue: 35 },
  { month: "May", volume: 3.8, revenue: 38 },
  { month: "Jun", volume: 4.2, revenue: 42 },
  { month: "Jul", volume: 4.5, revenue: 45 },
  { month: "Aug", volume: 4.8, revenue: 48 },
  { month: "Sep", volume: 5.2, revenue: 52 },
  { month: "Oct", volume: 5.5, revenue: 55 },
  { month: "Nov", volume: 5.8, revenue: 58 },
  { month: "Dec", volume: 6.2, revenue: 62 },
]

export function ProjectionsChart() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-900">3-Year Financial Projections</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              tvl: {
                label: "TVL ($M)",
                color: "hsl(var(--chart-1))",
              },
              netRevenue: {
                label: "Net Revenue ($K)",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={projectionData}>
                <XAxis dataKey="year" />
                <YAxis />
                <Bar dataKey="tvl" fill="#f59e0b" radius={[4, 4, 0, 0]} name="TVL ($M)" />
                <Line 
                  type="monotone" 
                  dataKey="netRevenue" 
                  stroke="#dc2626" 
                  strokeWidth={3}
                  name="Net Revenue ($K)"
                />
                <ChartTooltip content={<ChartTooltipContent />} />
              </ComposedChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-900">Year 1 Monthly Growth</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              volume: {
                label: "Volume ($M)",
                color: "hsl(var(--chart-3))",
              },
              revenue: {
                label: "Revenue ($K)",
                color: "hsl(var(--chart-4))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Line 
                  type="monotone" 
                  dataKey="volume" 
                  stroke="#f59e0b" 
                  strokeWidth={2}
                  name="Volume ($M)"
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#d97706" 
                  strokeWidth={2}
                  name="Revenue ($K)"
                />
                <ChartTooltip content={<ChartTooltipContent />} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
