"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, Clock } from 'lucide-react'

const competitors = [
  {
    name: "PAXG",
    tvl: "$480M",
    fee: "0.45%",
    settlement: "24h",
    updates: "Hourly",
    advantages: false
  },
  {
    name: "XAUT", 
    tvl: "$380M",
    fee: "0.50%",
    settlement: "24h",
    updates: "Hourly",
    advantages: false
  },
  {
    name: "TGAUx",
    tvl: "TBD",
    fee: "0.25%",
    settlement: "Instant",
    updates: "Real-time",
    advantages: true
  }
]

export function CompetitiveAnalysis() {
  return (
    <Card className="border-amber-200">
      <CardHeader>
        <CardTitle className="text-amber-900">Competitive Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {competitors.map((competitor, index) => (
            <div
              key={competitor.name}
              className={`p-4 rounded-lg border ${
                competitor.advantages 
                  ? "border-amber-400 bg-amber-50" 
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-lg">
                  {competitor.name}
                  {competitor.advantages && (
                    <Badge className="ml-2 bg-amber-500 text-white">Our Platform</Badge>
                  )}
                </h3>
                <div className="text-sm text-gray-600">TVL: {competitor.tvl}</div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">Fee:</span>
                  <span className={competitor.advantages ? "font-semibold text-amber-700" : ""}>
                    {competitor.fee}
                  </span>
                  {competitor.advantages && <CheckCircle className="h-4 w-4 text-green-500" />}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">Settlement:</span>
                  <span className={competitor.advantages ? "font-semibold text-amber-700" : ""}>
                    {competitor.settlement}
                  </span>
                  {competitor.advantages ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <Clock className="h-4 w-4 text-orange-500" />
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">Updates:</span>
                  <span className={competitor.advantages ? "font-semibold text-amber-700" : ""}>
                    {competitor.updates}
                  </span>
                  {competitor.advantages && <CheckCircle className="h-4 w-4 text-green-500" />}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-amber-100 rounded-lg">
          <h4 className="font-semibold text-amber-900 mb-2">TetraGold Advantages:</h4>
          <ul className="text-sm text-amber-800 space-y-1">
            <li>• 45-50% lower fees than market leaders</li>
            <li>• Real-time oracle updates vs hourly feeds</li>
            <li>• Instant settlement vs 24-48 hour processing</li>
            <li>• Advanced leveraged products with 2x exposure</li>
            <li>• Comprehensive DeFi integration with yield generation</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
