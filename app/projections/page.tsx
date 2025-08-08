import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, DollarSign, Users, Target } from 'lucide-react'
import { ProjectionsChart } from "@/components/projections-chart"

export default function ProjectionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-500/20 text-amber-800 border-amber-400/30">
              Financial Projections & Investment Highlights
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Financial Projections
            </h1>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Conservative revenue model with significant upside potential and 
              clear path to profitability in the growing synthetic asset market.
            </p>
          </div>

          {/* 3-Year Revenue Model */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Conservative Revenue Model (3-Year)</h2>
            <ProjectionsChart />
          </section>

          {/* Detailed Projections Table */}
          <section className="mb-16">
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900 text-center">Detailed Financial Projections</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-amber-200">
                        <th className="text-left py-3 text-amber-800 font-semibold">Metric</th>
                        <th className="text-center py-3 text-amber-800 font-semibold">Year 1</th>
                        <th className="text-center py-3 text-amber-800 font-semibold">Year 2</th>
                        <th className="text-center py-3 text-amber-800 font-semibold">Year 3</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="border-b border-amber-100">
                        <td className="py-3 text-amber-700 font-medium">Average TVL</td>
                        <td className="py-3 text-center text-amber-800">$25M</td>
                        <td className="py-3 text-center text-amber-800">$80M</td>
                        <td className="py-3 text-center text-amber-800">$250M</td>
                      </tr>
                      <tr className="border-b border-amber-100">
                        <td className="py-3 text-amber-700 font-medium">Monthly Volume</td>
                        <td className="py-3 text-center text-amber-800">$3.75M</td>
                        <td className="py-3 text-center text-amber-800">$12M</td>
                        <td className="py-3 text-center text-amber-800">$37.5M</td>
                      </tr>
                      <tr className="border-b border-amber-100">
                        <td className="py-3 text-amber-700 font-medium">Gross Revenue</td>
                        <td className="py-3 text-center text-amber-800 font-semibold">$375K</td>
                        <td className="py-3 text-center text-amber-800 font-semibold">$1.5M</td>
                        <td className="py-3 text-center text-amber-800 font-semibold">$4.7M</td>
                      </tr>
                      <tr className="border-b border-amber-100">
                        <td className="py-3 text-amber-700 font-medium">Net Revenue</td>
                        <td className="py-3 text-center text-green-800 font-semibold">$300K</td>
                        <td className="py-3 text-center text-green-800 font-semibold">$1.2M</td>
                        <td className="py-3 text-center text-green-800 font-semibold">$3.8M</td>
                      </tr>
                      <tr className="border-b border-amber-100">
                        <td className="py-3 text-amber-700 font-medium">Active Users</td>
                        <td className="py-3 text-center text-amber-800">2,500</td>
                        <td className="py-3 text-center text-amber-800">8,000</td>
                        <td className="py-3 text-center text-amber-800">18,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 bg-amber-100 rounded-lg">
                  <h4 className="font-semibold text-amber-900 mb-2">Revenue Assumptions:</h4>
                  <ul className="text-sm text-amber-800 space-y-1">
                    <li>• 15% monthly turnover rate (6.7 month average holding period)</li>
                    <li>• 0.125% blended fee rate across all transactions</li>
                    <li>• 80% operating margin at maturity with scalable infrastructure</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Value Premium Analysis */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Value Premium Analysis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    TGAUx Premium Drivers
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-amber-800">Convenience Premium</span>
                        <Badge className="bg-amber-600 text-white">2-3%</Badge>
                      </div>
                      <div className="text-sm text-amber-700">24/7 liquidity vs business hours only</div>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-amber-800">Yield Premium</span>
                        <Badge className="bg-amber-600 text-white">1-2%</Badge>
                      </div>
                      <div className="text-sm text-amber-700">Staking rewards vs zero yield on physical gold</div>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-amber-800">Network Effects</span>
                        <Badge className="bg-amber-600 text-white">2-4%</Badge>
                      </div>
                      <div className="text-sm text-amber-700">DeFi composability and cross-chain access</div>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-amber-800">Treasury Value</span>
                        <Badge className="bg-amber-600 text-white">1-3%</Badge>
                      </div>
                      <div className="text-sm text-amber-700">Active yield management vs passive custody</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center">
                    <Target className="mr-2 h-5 w-5" />
                    Target Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg">
                    <div className="text-3xl font-bold text-amber-800 mb-2">5-10%</div>
                    <div className="text-amber-700">Target Premium Range</div>
                    <div className="text-sm text-amber-600 mt-2">Over spot gold at scale</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                      <span className="text-amber-700">Break-even TVL</span>
                      <span className="font-semibold text-amber-800">$15M</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                      <span className="text-amber-700">Target TVL (Year 1)</span>
                      <span className="font-semibold text-amber-800">$25M-$100M</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                      <span className="text-amber-700">Target Users (Year 1)</span>
                      <span className="font-semibold text-amber-800">2,500-5,000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Investment Highlights */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Investment Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-900 flex items-center">
                    <DollarSign className="mr-2 h-5 w-5" />
                    Market Opportunity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-800">Large addressable market ($18B+ and growing at 45% CAGR)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-800">Proven technical implementation ready for institutional adoption</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-800">Clear technological differentiation with superior performance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-800">Conservative financial projections with significant upside</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center">
                    <Users className="mr-2 h-5 w-5" />
                    Competitive Advantages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-blue-800">45-50% cost advantage over market leaders (PAXG/XAUT)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-blue-800">Revolutionary zero pre-mint model eliminates allocation risks</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-blue-800">Advanced leveraged products with comprehensive risk management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-blue-800">Production-ready platform with all infrastructure deployed</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Long-Term Vision */}
          <section>
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Long-Term Vision</h2>
            <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50">
              <CardHeader>
                <CardTitle className="text-amber-900 text-center text-2xl">
                  The Future of Commodity Access
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-amber-700 mb-6 max-w-4xl mx-auto">
                  TetraGold aims to become the definitive infrastructure for synthetic commodity assets, 
                  starting with gold and expanding to comprehensive commodity exposure. Our platform 
                  democratizes access to global commodity markets through decentralized, transparent, 
                  and efficient financial infrastructure.
                </p>
                <div className="p-6 bg-amber-100 rounded-lg">
                  <p className="text-xl font-semibold text-amber-900">
                    The platform is production-ready and positioned to lead the transformation 
                    of how the world accesses commodity exposure.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div className="p-4 bg-white rounded-lg border border-amber-200">
                    <div className="font-semibold text-amber-800 mb-2">Phase 1: Gold Mastery</div>
                    <div className="text-amber-700">Establish market leadership in synthetic gold with TGAUx</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-amber-200">
                    <div className="font-semibold text-amber-800 mb-2">Phase 2: Commodity Expansion</div>
                    <div className="text-amber-700">Silver, platinum, and other precious metals integration</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-amber-200">
                    <div className="font-semibold text-amber-800 mb-2">Phase 3: Global Infrastructure</div>
                    <div className="text-amber-700">Comprehensive commodity basket and institutional adoption</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
