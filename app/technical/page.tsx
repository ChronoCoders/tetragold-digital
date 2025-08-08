import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Shield, Zap } from 'lucide-react'
import { ArchitectureDiagram } from "@/components/architecture-diagram"

export default function TechnicalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-500/20 text-amber-800 border-amber-400/30">
              Technical Architecture
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              System Architecture
            </h1>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Production-grade infrastructure with 12-contract system, multi-oracle aggregation, 
              and advanced risk management protocols.
            </p>
          </div>

          {/* Architecture Diagram */}
          <section className="mb-16">
            <ArchitectureDiagram />
          </section>

          {/* Multi-Oracle System */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Multi-Oracle Price Aggregation</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900">Weighted Average System</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                      <span className="font-medium text-amber-800">Chainlink Gold/USD</span>
                      <Badge className="bg-amber-500 text-white">70% Weight</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                      <span className="font-medium text-amber-800">Band Protocol</span>
                      <Badge className="bg-amber-600 text-white">20% Weight</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                      <span className="font-medium text-amber-800">DEX Aggregator</span>
                      <Badge className="bg-amber-700 text-white">10% Weight</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                      <span className="font-medium text-red-800">Manual Override</span>
                      <Badge variant="destructive">Emergency Only</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900">Advanced Oracle Protection</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-green-600" />
                      <span className="text-amber-700">5-minute staleness threshold with automatic failover</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-green-600" />
                      <span className="text-amber-700">Circuit breaker at {'>5% deviation across sources'}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-green-600" />
                      <span className="text-amber-700">Real-time reweighting based on oracle performance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-green-600" />
                      <span className="text-amber-700">Network congestion awareness ({'>200 gwei triggers delays'})</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Smart Contract Infrastructure */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">12-Contract Production Architecture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center">
                    <Code className="mr-2 h-5 w-5" />
                    Core Contracts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      "TGAUx Token - ERC-20 synthetic gold token",
                      "TGAUx-2x - Leveraged 2x gold exposure token", 
                      "StakingVault - Yield generation and rewards",
                      "OracleAggregator - Multi-source price aggregation",
                      "TreasuryManager - USDC treasury and yield management",
                      "RiskManager - Position monitoring and liquidation"
                    ].map((contract, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                        <span className="text-amber-700">{contract}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center">
                    <Database className="mr-2 h-5 w-5" />
                    Governance & Security
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      "MultisigGovernance - 3-of-5 multi-signature control",
                      "EmergencyPause - Circuit breaker system",
                      "UpgradeManager - Contract upgrade governance", 
                      "KYCManager - Compliance and verification",
                      "FeeSplitter - Revenue distribution automation",
                      "AuditLog - Comprehensive transaction logging"
                    ].map((contract, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="text-amber-700">{contract}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Core Mint/Redeem Mechanism */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Core Mint/Redeem Mechanism</h2>
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900">Enhanced Mint Function</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
{`// Enhanced mint function with multi-oracle support
function mint(uint256 usdcAmount) external whenNotPaused {
    require(usdcAmount >= MINIMUM_MINT, "Below minimum");
    
    uint256 goldPrice = oracleAggregator.getWeightedGoldPrice();
    uint256 tgauxAmount = usdcAmount * 1e18 / goldPrice;
    uint256 fee = tgauxAmount * mintFee / 10000;
    
    usdc.transferFrom(msg.sender, treasury, usdcAmount);
    _mint(msg.sender, tgauxAmount - fee);
    _mint(treasury, fee); // Fee to treasury for yield distribution
    
    emit Mint(msg.sender, usdcAmount, tgauxAmount - fee);
}`}
                  </pre>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-amber-800">Key Features:</h4>
                    <ul className="text-sm text-amber-700 space-y-1">
                      <li>• Direct treasury fee minting eliminates complexity</li>
                      <li>• Maximum fee cap of 0.5% hard-coded in contract</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-amber-800">Security Features:</h4>
                    <ul className="text-sm text-amber-700 space-y-1">
                      <li>• Real-time oracle price with staleness protection</li>
                      <li>• Emergency pause capability with 2-of-5 multi-sig</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Platform Implementation Status */}
          <section>
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Current Implementation Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-900 flex items-center">
                    <Zap className="mr-2 h-5 w-5" />
                    ✓ Complete Web3 Infrastructure
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="text-green-800">• React/TypeScript frontend with Vite build system</div>
                  <div className="text-green-800">• Wagmi + RainbowKit for multi-wallet support</div>
                  <div className="text-green-800">• TanStack Query for efficient data management</div>
                  <div className="text-green-800">• Complete navigation: Dashboard, Portfolio, Trading, etc.</div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-900 flex items-center">
                    <Database className="mr-2 h-5 w-5" />
                    ✓ Real-Time Backend Services
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="text-green-800">• Express.js server with WebSocket support</div>
                  <div className="text-green-800">• PostgreSQL database with Drizzle ORM</div>
                  <div className="text-green-800">• Live gold price feeds with oracle aggregation</div>
                  <div className="text-green-800">• RESTful API endpoints for all functionality</div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-900 flex items-center">
                    <Code className="mr-2 h-5 w-5" />
                    ✓ Advanced Features Implemented
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="text-green-800">• Real-time gold price tracking with live updates</div>
                  <div className="text-green-800">• Complete DeFi dashboard with TVL and metrics</div>
                  <div className="text-green-800">• Leveraged trading interface for TGAUx-2x</div>
                  <div className="text-green-800">• Progressive Web App (PWA) with mobile optimization</div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-900 flex items-center">
                    <Shield className="mr-2 h-5 w-5" />
                    ✓ Production-Grade Integration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="text-green-800">• All 12 smart contracts verified and ready</div>
                  <div className="text-green-800">• Complete ABI definitions for Web3 integration</div>
                  <div className="text-green-800">• Multi-chain support (Ethereum + Sepolia testnet)</div>
                  <div className="text-green-800">• Real transaction monitoring and status tracking</div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
