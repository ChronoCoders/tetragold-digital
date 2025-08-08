import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Layers, TrendingUp, Coins, AlertTriangle } from 'lucide-react'
import { LeverageChart } from "@/components/leverage-chart"

export default function DeFiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-500/20 text-amber-800 border-amber-400/30">
              Advanced DeFi Features
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              DeFi Features
            </h1>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Advanced leveraged trading, enhanced staking vault, and comprehensive 
              yield generation mechanisms for sophisticated DeFi users.
            </p>
          </div>

          {/* TGAUx-2x Leveraged Trading */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">TGAUx-2x Leveraged Trading</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Production-Ready Risk Parameters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <div className="text-sm text-amber-600">Maximum Leverage</div>
                      <div className="text-xl font-bold text-amber-800">2x</div>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <div className="text-sm text-amber-600">Liquidation Threshold</div>
                      <div className="text-xl font-bold text-amber-800">85%</div>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <div className="text-sm text-amber-600">Liquidation Penalty</div>
                      <div className="text-xl font-bold text-amber-800">5%</div>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <div className="text-sm text-amber-600">Position Limit</div>
                      <div className="text-xl font-bold text-amber-800">$100K</div>
                    </div>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="text-sm text-blue-600">Cooling Period</div>
                    <div className="text-lg font-semibold text-blue-800">24 hours between large positions</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center">
                    <AlertTriangle className="mr-2 h-5 w-5" />
                    Real-Time Risk Scenarios
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="font-semibold text-green-800">Moderate Decline (8%)</div>
                      <div className="text-sm text-green-700">• Position safe at 168% collateral ratio</div>
                      <div className="text-sm text-green-700">• No liquidation triggered</div>
                      <div className="text-sm text-green-700">• User loss: 16% (proportional to leverage)</div>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="font-semibold text-yellow-800">Severe Decline (15%)</div>
                      <div className="text-sm text-yellow-700">• Warning system activated at 140% ratio</div>
                      <div className="text-sm text-yellow-700">• User can add collateral or reduce position</div>
                      <div className="text-sm text-yellow-700">• Auto-liquidation threshold: 85%</div>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                      <div className="font-semibold text-red-800">Liquidation Event (20%)</div>
                      <div className="text-sm text-red-700">• Automatic liquidation with 5% penalty</div>
                      <div className="text-sm text-red-700">• Total user loss: 43% (including penalty)</div>
                      <div className="text-sm text-red-700">• Clear transparency in risk disclosure</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Leverage Chart */}
          <section className="mb-16">
            <LeverageChart />
          </section>

          {/* Enhanced Staking Vault */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Enhanced Staking Vault</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center">
                    <Coins className="mr-2 h-5 w-5" />
                    Passive Yield Generation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg">
                    <div className="text-3xl font-bold text-amber-800 mb-2">3-12%</div>
                    <div className="text-amber-700">Variable APY</div>
                    <div className="text-sm text-amber-600 mt-2">Based on fee revenue + treasury yield</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                      <span className="text-amber-700">Lock-up Period</span>
                      <Badge className="bg-green-500 text-white">None (Liquid)</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                      <span className="text-amber-700">Compounding</span>
                      <Badge className="bg-blue-500 text-white">Automatic</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                      <span className="text-amber-700">Max Stake Ratio</span>
                      <Badge className="bg-amber-500 text-white">30% of Supply</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center">
                    <Layers className="mr-2 h-5 w-5" />
                    Staking Reward Sources
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-amber-800">Fee Revenue Sharing</span>
                        <Badge className="bg-amber-600 text-white">40%</Badge>
                      </div>
                      <div className="text-sm text-amber-700">40% of all protocol fees distributed to stakers</div>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-amber-800">Treasury Yield</span>
                        <Badge className="bg-amber-600 text-white">4-5%</Badge>
                      </div>
                      <div className="text-sm text-amber-700">Annual yield on USDC treasury reserves</div>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-amber-800">Governance Participation</span>
                        <Badge className="bg-amber-600 text-white">Bonus</Badge>
                      </div>
                      <div className="text-sm text-amber-700">Additional rewards for active governance participation</div>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-amber-800">Early Access</span>
                        <Badge className="bg-amber-600 text-white">Premium</Badge>
                      </div>
                      <div className="text-sm text-amber-700">Priority access to new features and products</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* DeFi Integration Features */}
          <section>
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">DeFi Integration Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900">Instant Liquidity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-2xl font-bold text-amber-800">24/7</div>
                    <div className="text-amber-700">Always-on mint/redeem functionality</div>
                    <div className="text-sm text-amber-600">• Sub-3 second execution</div>
                    <div className="text-sm text-amber-600">• No business hour restrictions</div>
                    <div className="text-sm text-amber-600">• Global accessibility</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900">Cross-Chain Ready</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-2xl font-bold text-amber-800">Multi-Chain</div>
                    <div className="text-amber-700">Ethereum mainnet + Layer 2 support</div>
                    <div className="text-sm text-amber-600">• Polygon integration planned</div>
                    <div className="text-sm text-amber-600">• Arbitrum compatibility</div>
                    <div className="text-sm text-amber-600">• Bridge infrastructure ready</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900">Composability</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-2xl font-bold text-amber-800">DeFi Native</div>
                    <div className="text-amber-700">Full ERC-20 compatibility</div>
                    <div className="text-sm text-amber-600">• DEX integration ready</div>
                    <div className="text-sm text-amber-600">• Lending protocol compatible</div>
                    <div className="text-sm text-amber-600">• Yield farming opportunities</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
