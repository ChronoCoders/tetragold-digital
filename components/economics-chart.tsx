"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar } from "recharts"

const projectionData = [
  { year: "Year 1", tvl: 25, revenue: 375, users: 2500 },
  { year: "Year 2", tvl: 80, revenue: 1500, users: 8000 },
  { year: "Year 3", tvl: 250, revenue: 4700, users: 18000 },
]

const feeBreakdown = [
  { type: "Mint", amount: 125, percentage: 50 },
  { type: "Redeem", amount: 125, percentage: 50 },
  { type: "Leverage", amount: 50, percentage: 20 },
]

export function EconomicsChart() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-900">3-Year Revenue Projections</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              revenue: {
                label: "Revenue ($K)",
                color: "hsl(var(--chart-1))",
              },
              tvl: {
                label: "TVL ($M)",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={projectionData}>
                <XAxis dataKey="year" />
                <YAxis />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#f59e0b" 
                  strokeWidth={3}
                  name="Revenue ($K)"
                />
                <Line 
                  type="monotone" 
                  dataKey="tvl" 
                  stroke="#d97706" 
                  strokeWidth={3}
                  name="TVL ($M)"
                />
                <ChartTooltip content={<ChartTooltipContent />} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-900">Fee Revenue Breakdown (Year 1)</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              amount: {
                label: "Revenue ($K)",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={feeBreakdown}>
                <XAxis dataKey="type" />
                <YAxis />
                <Bar dataKey="amount" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                <ChartTooltip content={<ChartTooltipContent />} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
