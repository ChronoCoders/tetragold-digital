import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Globe, DollarSign } from 'lucide-react'
import { MarketOverviewChart } from "@/components/market-overview-chart"
import { CompetitiveAnalysis } from "@/components/competitive-analysis"

export default function OverviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-500/20 text-amber-800 border-amber-400/30">
              Market Opportunity & Value Proposition
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Market Overview
            </h1>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              The global gold-backed cryptocurrency market has reached $18.2 billion in market capitalization, 
              growing at 45% CAGR with significant opportunities for disruption.
            </p>
          </div>

          {/* Market Size & Growth */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Market Size & Growth</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <MarketOverviewChart />
              <div className="space-y-6">
                <Card className="border-amber-200">
                  <CardHeader>
                    <CardTitle className="text-amber-900 flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5" />
                      Growth Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-amber-700">Market Cap (2024)</span>
                      <span className="font-semibold text-amber-900">$18.2B</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-amber-700">3-Year CAGR</span>
                      <span className="font-semibold text-amber-900">45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-amber-700">Projected 2025</span>
                      <span className="font-semibold text-amber-900">$26.4B</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-amber-200">
                  <CardHeader>
                    <CardTitle className="text-amber-900 flex items-center">
                      <Users className="mr-2 h-5 w-5" />
                      Market Segments
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-amber-700">Retail Investors</span>
                      <span className="font-semibold text-amber-900">$12.8B</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-amber-700">Institutional Portfolio</span>
                      <span className="font-semibold text-amber-900">$4.1B</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-amber-700">Cross-border Transfer</span>
                      <span className="font-semibold text-amber-900">$1.3B</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Competitive Analysis */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Competitive Analysis</h2>
            <CompetitiveAnalysis />
          </section>

          {/* Revolutionary Zero Pre-Mint Model */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Revolutionary Zero Pre-Mint Model</h2>
            <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50">
              <CardHeader>
                <CardTitle className="text-amber-900 text-center text-2xl">Industry Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-amber-800">Traditional DeFi Model</h3>
                    <ul className="space-y-2 text-amber-700">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                        Pre-mint billions of tokens
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                        Team/advisor allocations (10-30%)
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                        Investor token allocations
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                        Vesting schedules and unlocks
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-amber-800">TetraGold Model</h3>
                    <ul className="space-y-2 text-amber-700">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                        No pre-mint or initial allocation
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                        100% dynamic supply based on demand
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                        No team, advisor, or investor tokens
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                        True 1:1 relationship between demand and supply
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-amber-100 rounded-lg">
                  <p className="text-amber-800 text-center font-medium">
                    This eliminates traditional DeFi allocation risks and creates pure demand-driven economics.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Value Propositions */}
          <section>
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Key Value Propositions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Price Correlation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-amber-800 mb-2">99.5%+</div>
                  <p className="text-amber-700">
                    Price correlation with gold via multi-oracle aggregation with real-time updates
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center">
                    <Globe className="mr-2 h-5 w-5" />
                    Instant Liquidity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-amber-800 mb-2">24/7</div>
                  <p className="text-amber-700">
                    Instant mint/redeem functionality with sub-3 second execution times
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center">
                    <DollarSign className="mr-2 h-5 w-5" />
                    Lower Fees
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-amber-800 mb-2">0.25%</div>
                  <p className="text-amber-700">
                    Total fees vs 0.5-1.0% industry average - 45-50% cost advantage
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
