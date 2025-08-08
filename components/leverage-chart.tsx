"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from "recharts"

const leverageData = [
  { goldPrice: 2000, regular: 0, leveraged: 0, collateralRatio: 200 },
  { goldPrice: 1950, regular: -2.5, leveraged: -5, collateralRatio: 190 },
  { goldPrice: 1900, regular: -5, leveraged: -10, collateralRatio: 180 },
  { goldPrice: 1850, regular: -7.5, leveraged: -15, collateralRatio: 170 },
  { goldPrice: 1800, regular: -10, leveraged: -20, collateralRatio: 160 },
  { goldPrice: 1750, regular: -12.5, leveraged: -25, collateralRatio: 150 },
  { goldPrice: 1700, regular: -15, leveraged: -30, collateralRatio: 140 },
  { goldPrice: 1650, regular: -17.5, leveraged: -35, collateralRatio: 130 },
  { goldPrice: 1600, regular: -20, leveraged: -40, collateralRatio: 120 },
  { goldPrice: 1550, regular: -22.5, leveraged: -45, collateralRatio: 110 },
  { goldPrice: 1500, regular: -25, leveraged: -50, collateralRatio: 100 },
  { goldPrice: 1450, regular: -27.5, leveraged: -55, collateralRatio: 90 },
  { goldPrice: 1400, regular: -30, leveraged: -60, collateralRatio: 80 },
]

export function LeverageChart() {
  return (
    <Card className="border-amber-200">
      <CardHeader>
        <CardTitle className="text-amber-900 text-center">Leverage Performance & Risk Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            regular: {
              label: "TGAUx (1x)",
              color: "hsl(var(--chart-1))",
            },
            leveraged: {
              label: "TGAUx-2x (2x)",
              color: "hsl(var(--chart-2))",
            },
          }}
          className="h-[400px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={leverageData}>
              <XAxis 
                dataKey="goldPrice" 
                domain={['dataMin', 'dataMax']}
                type="number"
                scale="linear"
              />
              <YAxis domain={[-70, 10]} />
              <ReferenceLine y={0} stroke="#666" strokeDasharray="3 3" />
              <ReferenceLine y={-43} stroke="#ef4444" strokeDasharray="5 5" label="Liquidation Point" />
              <Line 
                type="monotone" 
                dataKey="regular" 
                stroke="#f59e0b" 
                strokeWidth={3}
                name="TGAUx (1x)"
              />
              <Line 
                type="monotone" 
                dataKey="leveraged" 
                stroke="#dc2626" 
                strokeWidth={3}
                name="TGAUx-2x (2x)"
              />
              <ChartTooltip 
                content={<ChartTooltipContent />}
                labelFormatter={(value) => `Gold Price: $${value}`}
                formatter={(value, name) => [`${value}%`, name]}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
            <div className="font-semibold text-green-800">Safe Zone</div>
            <div className="text-green-700">Gold price above $1,700 (85% threshold)</div>
          </div>
          <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="font-semibold text-yellow-800">Warning Zone</div>
            <div className="text-yellow-700">Gold price $1,600-$1,700 (monitoring active)</div>
          </div>
          <div className="p-3 bg-red-50 rounded-lg border border-red-200">
            <div className="font-semibold text-red-800">Liquidation Zone</div>
            <div className="text-red-700">Gold price below $1,600 (automatic liquidation)</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
