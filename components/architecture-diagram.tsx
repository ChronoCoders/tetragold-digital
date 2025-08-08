"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ArchitectureDiagram() {
  return (
    <Card className="border-amber-200">
      <CardHeader>
        <CardTitle className="text-amber-900 text-center">TetraGold System Architecture</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* User Interface Layer */}
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-3 text-center">USER INTERFACE</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <Badge variant="outline" className="justify-center border-blue-300 text-blue-700">Web App</Badge>
              <Badge variant="outline" className="justify-center border-blue-300 text-blue-700">Mobile App</Badge>
              <Badge variant="outline" className="justify-center border-blue-300 text-blue-700">API Access</Badge>
              <Badge variant="outline" className="justify-center border-blue-300 text-blue-700">DEX Interface</Badge>
            </div>
          </div>

          {/* Core Smart Contracts */}
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-amber-900 mb-3 text-center">CORE SMART CONTRACTS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Badge className="w-full justify-center bg-amber-500 text-white">TGAUx Token</Badge>
                <Badge className="w-full justify-center bg-amber-500 text-white">USDC Treasury</Badge>
              </div>
              <div className="space-y-2">
                <Badge className="w-full justify-center bg-amber-600 text-white">Staking Vault</Badge>
                <Badge className="w-full justify-center bg-amber-600 text-white">Treasury Yield</Badge>
              </div>
              <div className="space-y-2">
                <Badge className="w-full justify-center bg-amber-700 text-white">TGAUx-2x</Badge>
                <Badge className="w-full justify-center bg-amber-700 text-white">Liquidation Engine</Badge>
              </div>
            </div>
            <div className="mt-4 text-center">
              <div className="inline-flex items-center space-x-2 text-sm text-amber-700">
                <span>MINT/REDEEM (Gold Price)</span>
                <span>•</span>
                <span>YIELD DISTRIBUTION (40% Fees + 60% Yield)</span>
                <span>•</span>
                <span>LEVERAGE POSITIONS (2x Gold Exposure)</span>
              </div>
            </div>
          </div>

          {/* Oracle Infrastructure */}
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-3 text-center">ORACLE INFRASTRUCTURE</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
              <div className="text-center">
                <Badge variant="outline" className="border-green-300 text-green-700 mb-1">Chainlink</Badge>
                <div className="text-xs text-green-600">70% Weight</div>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="border-green-300 text-green-700 mb-1">Band Protocol</Badge>
                <div className="text-xs text-green-600">20% Weight</div>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="border-green-300 text-green-700 mb-1">DEX Aggregator</Badge>
                <div className="text-xs text-green-600">10% Weight</div>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="border-green-300 text-green-700 mb-1">Manual Override</Badge>
                <div className="text-xs text-green-600">Emergency</div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Badge className="justify-center bg-green-500 text-white">Oracle Aggregator (Weighted)</Badge>
              <Badge className="justify-center bg-green-600 text-white">Circuit Breaker ({'>5% Dev'})</Badge>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-purple-900 mb-3 text-center">KEY FEATURES</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="font-semibold text-purple-800">Multi-Oracle Protection</div>
                <div className="text-purple-600">5-min staleness threshold with automatic failover</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-purple-800">Real-time Reweighting</div>
                <div className="text-purple-600">Based on oracle performance metrics</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-purple-800">Network Awareness</div>
                <div className="text-purple-600">{'>200 gwei triggers delays'}</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
