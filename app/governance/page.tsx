import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Clock, AlertCircle } from 'lucide-react'

export default function GovernancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-500/20 text-amber-800 border-amber-400/30">
              Governance Framework & Security
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Governance & Security
            </h1>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Multi-signature governance structure with comprehensive security protocols 
              and industry-leading risk management systems.
            </p>
          </div>

          {/* Multi-Signature Governance */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Multi-Signature Governance Structure</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center">
                    <Shield className="mr-2 h-5 w-5" />
                    Centralized Efficiency Model
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <div className="font-semibold text-amber-800">3-of-5 Multi-Signature</div>
                      <div className="text-sm text-amber-700">All protocol parameters require 3 signatures</div>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <div className="font-semibold text-amber-800">24-Hour Timelock</div>
                      <div className="text-sm text-amber-700">Standard parameter changes</div>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <div className="font-semibold text-amber-800">48-Hour Timelock</div>
                      <div className="text-sm text-amber-700">Major upgrades and contract changes</div>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg">
                      <div className="font-semibold text-red-800">Emergency Pause</div>
                      <div className="text-sm text-red-700">2-of-5 signatures (no timelock)</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center">
                    <Users className="mr-2 h-5 w-5" />
                    Key Holders
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="font-semibold text-blue-800">Core Team (2)</div>
                      <div className="text-sm text-blue-700">CEO and CTO with operational oversight</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="font-semibold text-green-800">Technical Advisor (1)</div>
                      <div className="text-sm text-green-700">Independent security expert</div>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="font-semibold text-purple-800">Legal Advisor (1)</div>
                      <div className="text-sm text-purple-700">Regulatory compliance expert</div>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                      <div className="font-semibold text-orange-800">Strategic Advisor (1)</div>
                      <div className="text-sm text-orange-700">Industry expert and validator</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Decision Thresholds */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Decision Thresholds</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-900">Routine Operations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="font-semibold text-green-800">Automated (No Governance)</div>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Oracle price updates</li>
                      <li>• Fee collection and distribution</li>
                      <li>• Staking reward calculations</li>
                      <li>• Liquidation executions</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-900">Parameter Changes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="font-semibold text-amber-800">3-of-5 Multi-sig + 24h Timelock</div>
                    <ul className="text-sm text-amber-700 space-y-1">
                      <li>• Fee rate adjustments</li>
                      <li>• Oracle weight modifications</li>
                      <li>• Staking parameters</li>
                      <li>• Risk threshold updates</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-900">Emergency Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="font-semibold text-red-800">2-of-5 Multi-sig (Immediate)</div>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• System pause activation</li>
                      <li>• Oracle failure response</li>
                      <li>• Security incident response</li>
                      <li>• Critical bug fixes</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900">Major Upgrades</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="font-semibold text-blue-800">3-of-5 Multi-sig + 48h Timelock</div>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Smart contract upgrades</li>
                      <li>• New feature deployments</li>
                      <li>• Architecture changes</li>
                      <li>• Integration additions</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Security Framework */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Industry-Leading Security Framework</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center">
                    <Shield className="mr-2 h-5 w-5" />
                    Professional Audit Plan
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-amber-800">Primary Audit: CertiK</span>
                        <Badge className="bg-amber-600 text-white">$120K-$150K</Badge>
                      </div>
                      <div className="text-sm text-amber-700">6-8 weeks comprehensive audit</div>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-amber-800">Secondary: Trail of Bits</span>
                        <Badge className="bg-amber-600 text-white">$80K-$100K</Badge>
                      </div>
                      <div className="text-sm text-amber-700">4 weeks focused security review</div>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <div className="font-semibold text-amber-800">Formal Verification</div>
                      <div className="text-sm text-amber-700">Certora Prover for critical functions</div>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-amber-800">Bug Bounty Program</span>
                        <Badge className="bg-green-600 text-white">$100K Max</Badge>
                      </div>
                      <div className="text-sm text-amber-700">Immunefi platform integration</div>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-amber-800">Smart Contract Insurance</span>
                        <Badge className="bg-blue-600 text-white">$5M Coverage</Badge>
                      </div>
                      <div className="text-sm text-amber-700">Nexus Mutual protection</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center">
                    <AlertCircle className="mr-2 h-5 w-5" />
                    Continuous Security Monitoring
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-green-800">Real-time threat detection via Forta network</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-green-800">Oracle manipulation monitoring with alerts</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-green-800">Flash loan attack prevention via pattern analysis</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-green-800">24-hour incident response team for emergencies</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Risk Protection */}
          <section>
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Advanced Risk Protection</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900">Multi-Layered Safety Mechanisms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-amber-50 rounded-lg">
                    <div className="font-semibold text-amber-800">Liquidation Protection</div>
                    <div className="text-sm text-amber-700">10% buffer + 5% penalty + cooling periods</div>
                  </div>
                  <div className="p-3 bg-amber-50 rounded-lg">
                    <div className="font-semibold text-amber-800">Oracle Staleness Protection</div>
                    <div className="text-sm text-amber-700">5-minute maximum with automatic failover</div>
                  </div>
                  <div className="p-3 bg-amber-50 rounded-lg">
                    <div className="font-semibold text-amber-800">Network Congestion Awareness</div>
                    <div className="text-sm text-amber-700">Automatic delays when gas {'>200 gwei'}</div>
                  </div>
                  <div className="p-3 bg-amber-50 rounded-lg">
                    <div className="font-semibold text-amber-800">Emergency Circuit Breakers</div>
                    <div className="text-sm text-amber-700">Manual override with multi-sig control</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900">Circuit Breaker System</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="font-semibold text-yellow-800">Daily Price Movement</div>
                    <div className="text-sm text-yellow-700">±5% triggers warning system</div>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="font-semibold text-orange-800">Weekly Price Movement</div>
                    <div className="text-sm text-orange-700">±15% triggers enhanced monitoring</div>
                  </div>
                  <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                    <div className="font-semibold text-red-800">Oracle Deviation</div>
                    <div className="text-sm text-red-700">{'>5% triggers circuit breaker'}</div>
                  </div>
                  <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                    <div className="font-semibold text-red-800">Liquidity Depletion</div>
                    <div className="text-sm text-red-700">{'<$500K treasury triggers emergency protocols'}</div>
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
