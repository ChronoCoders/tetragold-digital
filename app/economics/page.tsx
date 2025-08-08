import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, TrendingUp, PieChart, Target } from 'lucide-react'
import { EconomicsChart } from "@/components/economics-chart"

export default function EconomicsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-500/20 text-amber-800 border-amber-400/30">
              Economic Model & Tokenomics
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Economics & Tokenomics
            </h1>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Revolutionary zero pre-mint model with transparent fee structure and 
              sustainable revenue generation mechanisms.
            </p>
          </div>

          {/* Revolutionary Token Distribution */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Revolutionary Token Distribution</h2>
            <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50">
              <CardHeader>
                <CardTitle className="text-amber-900 text-center text-2xl">Zero Pre-Mint Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-green-100 rounded-lg">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-green-800 font-medium">No initial token supply or team allocations</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-100 rounded-lg">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-green-800 font-medium">Pure demand-driven minting through user interaction</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-100 rounded-lg">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-green-800 font-medium">Dynamic supply that grows/shrinks with usage</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-100 rounded-lg">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-green-800 font-medium">Eliminates allocation risks common in DeFi</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-amber-800">Treasury Management</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-amber-100 rounded-lg">
                        <span className="text-amber-800">Protocol Treasury</span>
                        <Badge className="bg-amber-600 text-white">60% of fees</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-amber-100 rounded-lg">
                        <span className="text-amber-800">Staking Rewards</span>
                        <Badge className="bg-amber-600 text-white">40% of fees</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-amber-100 rounded-lg">
                        <span className="text-amber-800">Treasury Yield</span>
                        <Badge className="bg-amber-600 text-white">4-5% annual</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-amber-100 rounded-lg">
                        <span className="text-amber-800">Control</span>
                        <Badge className="bg-amber-600 text-white">Multi-sig</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Fee Structure */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Fee Structure & Economics</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center">
                    <DollarSign className="mr-2 h-5 w-5" />
                    Fee Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-amber-200">
                          <th className="text-left py-2 text-amber-800">Fee Type</th>
                          <th className="text-left py-2 text-amber-800">Rate</th>
                          <th className="text-left py-2 text-amber-800">Annual Impact</th>
                        </tr>
                      </thead>
                      <tbody className="space-y-2">
                        <tr className="border-b border-amber-100">
                          <td className="py-2 text-amber-700">Mint Fee</td>
                          <td className="py-2 font-semibold text-amber-800">0.10%</td>
                          <td className="py-2 text-amber-700">~$125K at $25M TVL</td>
                        </tr>
                        <tr className="border-b border-amber-100">
                          <td className="py-2 text-amber-700">Redeem Fee</td>
                          <td className="py-2 font-semibold text-amber-800">0.15%</td>
                          <td className="py-2 text-amber-700">~$125K at $25M TVL</td>
                        </tr>
                        <tr className="border-b border-amber-100">
                          <td className="py-2 text-amber-700">Leverage Fee</td>
                          <td className="py-2 font-semibold text-amber-800">0.05% daily</td>
                          <td className="py-2 text-amber-700">~$50K at $10M leverage</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 p-3 bg-amber-100 rounded-lg">
                    <div className="text-center">
                      <span className="text-lg font-semibold text-amber-800">Total Fees: 0.25% round-trip</span>
                      <div className="text-sm text-amber-700 mt-1">(45-50% lower than PAXG/XAUT)</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center">
                    <PieChart className="mr-2 h-5 w-5" />
                    Fee Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                        <span className="text-amber-700">Treasury (60%)</span>
                        <span className="font-semibold text-amber-800">Protocol Development</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                        <span className="text-amber-700">Stakers (40%)</span>
                        <span className="font-semibold text-amber-800">Reward Distribution</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                        <span className="text-amber-700">Leverage (80%/20%)</span>
                        <span className="font-semibold text-amber-800">Treasury/Insurance</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Break-Even Analysis */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Break-Even Analysis</h2>
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center">
                  <Target className="mr-2 h-5 w-5" />
                  Conservative Financial Model
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-amber-800">Monthly Requirements</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                        <span className="text-amber-700">Monthly Costs</span>
                        <span className="font-semibold text-amber-800">$12,800</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                        <span className="text-amber-700">Required Fee Revenue</span>
                        <span className="font-semibold text-amber-800">$12,800</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span className="text-green-700">Break-even TVL</span>
                        <span className="font-semibold text-green-800">$6.8M</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-amber-800">Target Metrics</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                        <span className="text-amber-700">Monthly Turnover</span>
                        <span className="font-semibold text-amber-800">15%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                        <span className="text-amber-700">Safety Margin</span>
                        <span className="font-semibold text-amber-800">1.8x</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <span className="text-blue-700">Target TVL</span>
                        <span className="font-semibold text-blue-800">$12M</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Economics Chart */}
          <section>
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Economic Projections</h2>
            <EconomicsChart />
          </section>
        </div>
      </div>
    </div>
  )
}
