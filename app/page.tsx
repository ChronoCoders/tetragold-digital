"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Shield, Zap, DollarSign, Users, BarChart3, Lock, Menu, X, Layers } from 'lucide-react'
import { MarketOverviewChart } from "@/components/market-overview-chart"
import { ArchitectureDiagram } from "@/components/architecture-diagram"
import { CompetitiveAnalysis } from "@/components/competitive-analysis"
import { EconomicsChart } from "@/components/economics-chart"
import { LeverageChart } from "@/components/leverage-chart"
import { ProjectionsChart } from "@/components/projections-chart"

const sections = [
  { id: "home", name: "Home", icon: BarChart3 },
  { id: "overview", name: "Overview", icon: TrendingUp },
  { id: "technical", name: "Technical", icon: Shield },
  { id: "economics", name: "Economics", icon: DollarSign },
  { id: "defi", name: "DeFi", icon: Layers },
  { id: "governance", name: "Governance", icon: Lock },
  { id: "projections", name: "Projections", icon: Users },
]

export default function TetraGoldWhitepaper() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-amber-200 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full" />
              <span className="text-xl font-bold text-amber-900">TetraGold</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {sections.map((section) => {
                const Icon = section.icon
                return (
                  <Button
                    key={section.id}
                    variant={activeSection === section.id ? "default" : "ghost"}
                    size="sm"
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center space-x-2 ${
                      activeSection === section.id
                        ? "bg-amber-500 text-white hover:bg-amber-600"
                        : "text-amber-700 hover:text-amber-900 hover:bg-amber-50"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{section.name}</span>
                  </Button>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-amber-200">
              <div className="grid grid-cols-2 gap-2">
                {sections.map((section) => {
                  const Icon = section.icon
                  return (
                    <Button
                      key={section.id}
                      variant={activeSection === section.id ? "default" : "ghost"}
                      size="sm"
                      onClick={() => scrollToSection(section.id)}
                      className={`flex items-center space-x-2 justify-start ${
                        activeSection === section.id
                          ? "bg-amber-500 text-white"
                          : "text-amber-700"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{section.name}</span>
                    </Button>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        {/* Home Section */}
        <section id="home" className="min-h-screen">
          <div className="relative overflow-hidden bg-gradient-to-r from-amber-900 via-yellow-800 to-amber-900 text-white">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative container mx-auto px-4 py-24">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-6 bg-amber-500/20 text-amber-100 border-amber-400/30">
                  Version 4.0 • Production Ready
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-yellow-100 bg-clip-text text-transparent">
                  TetraGold
                </h1>
                <p className="text-xl md:text-2xl mb-4 text-amber-100">
                  TGAUx - Revolutionary Synthetic Gold Asset Platform
                </p>
                <p className="text-lg mb-8 text-amber-200/80 max-w-2xl mx-auto">
                  99.5%+ price correlation with gold • 24/7 instant liquidity • Advanced DeFi integration
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-amber-500 hover:bg-amber-600 text-amber-950"
                    onClick={() => scrollToSection("overview")}
                  >
                    Explore Platform <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-amber-300 text-amber-900 hover:bg-amber-500/10 hover:text-amber-950"
                    onClick={() => scrollToSection("technical")}
                  >
                    Technical Details <BarChart3 className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="text-center border-amber-200">
                  <CardContent className="pt-6">
                    <TrendingUp className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-amber-900">99.5%+</h3>
                    <p className="text-amber-700">Price Correlation</p>
                  </CardContent>
                </Card>
                <Card className="text-center border-amber-200">
                  <CardContent className="pt-6">
                    <Zap className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-amber-900">{'<3s'}</h3>
                    <p className="text-amber-700">Transaction Speed</p>
                  </CardContent>
                </Card>
                <Card className="text-center border-amber-200">
                  <CardContent className="pt-6">
                    <DollarSign className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-amber-900">0.25%</h3>
                    <p className="text-amber-700">Total Fees</p>
                  </CardContent>
                </Card>
                <Card className="text-center border-amber-200">
                  <CardContent className="pt-6">
                    <Shield className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-amber-900">$5M</h3>
                    <p className="text-amber-700">Insurance Coverage</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="min-h-screen py-16 bg-gradient-to-r from-amber-50 to-yellow-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-amber-500/20 text-amber-800 border-amber-400/30">
                  Market Opportunity & Value Proposition
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
                  Market Overview
                </h2>
                <p className="text-xl text-amber-700 max-w-3xl mx-auto">
                  The global gold-backed cryptocurrency market has reached $18.2 billion in market capitalization, 
                  growing at 45% CAGR with significant opportunities for disruption.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                <MarketOverviewChart />
                <CompetitiveAnalysis />
              </div>

              {/* Revolutionary Zero Pre-Mint Model */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-amber-900 mb-8 text-center">Revolutionary Zero Pre-Mint Model</h3>
                <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50">
                  <CardHeader>
                    <CardTitle className="text-amber-900 text-center text-2xl">Industry Innovation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-amber-800">Traditional DeFi Model</h4>
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
                        <h4 className="text-xl font-semibold text-amber-800">TetraGold Model</h4>
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
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Section */}
        <section id="technical" className="min-h-screen py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-amber-500/20 text-amber-800 border-amber-400/30">
                  Technical Architecture
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
                  System Architecture
                </h2>
                <p className="text-xl text-amber-700 max-w-3xl mx-auto">
                  Production-grade infrastructure with 12-contract system, multi-oracle aggregation, 
                  and advanced risk management protocols.
                </p>
              </div>

              <div className="mb-16">
                <ArchitectureDiagram />
              </div>

              {/* Smart Contract Infrastructure */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-amber-900 mb-8 text-center">12-Contract Production Architecture</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="border-amber-200">
                    <CardHeader>
                      <CardTitle className="text-amber-900 flex items-center">
                        <Shield className="mr-2 h-5 w-5" />
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
                        <Lock className="mr-2 h-5 w-5" />
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
              </div>
            </div>
          </div>
        </section>

        {/* Economics Section */}
        <section id="economics" className="min-h-screen py-16 bg-gradient-to-r from-amber-50 to-yellow-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-amber-500/20 text-amber-800 border-amber-400/30">
                  Economic Model & Tokenomics
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
                  Economics & Tokenomics
                </h2>
                <p className="text-xl text-amber-700 max-w-3xl mx-auto">
                  Revolutionary zero pre-mint model with transparent fee structure and 
                  sustainable revenue generation mechanisms.
                </p>
              </div>

              <div className="mb-16">
                <EconomicsChart />
              </div>

              {/* Fee Structure */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-amber-900 mb-8 text-center">Fee Structure & Economics</h3>
                <Card className="border-amber-200">
                  <CardHeader>
                    <CardTitle className="text-amber-900 text-center">Fee Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-amber-200">
                            <th className="text-left py-2 text-amber-800">Fee Type</th>
                            <th className="text-left py-2 text-amber-800">Rate</th>
                            <th className="text-left py-2 text-amber-800">Annual Impact</th>
                            <th className="text-left py-2 text-amber-800">Distribution</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-amber-100">
                            <td className="py-2 text-amber-700">Mint Fee</td>
                            <td className="py-2 font-semibold text-amber-800">0.10%</td>
                            <td className="py-2 text-amber-700">~$125K at $25M TVL</td>
                            <td className="py-2 text-amber-700">Treasury (60%), Stakers (40%)</td>
                          </tr>
                          <tr className="border-b border-amber-100">
                            <td className="py-2 text-amber-700">Redeem Fee</td>
                            <td className="py-2 font-semibold text-amber-800">0.15%</td>
                            <td className="py-2 text-amber-700">~$125K at $25M TVL</td>
                            <td className="py-2 text-amber-700">Treasury (60%), Stakers (40%)</td>
                          </tr>
                          <tr className="border-b border-amber-100">
                            <td className="py-2 text-amber-700">Leverage Fee</td>
                            <td className="py-2 font-semibold text-amber-800">0.05% daily</td>
                            <td className="py-2 text-amber-700">~$50K at $10M leverage</td>
                            <td className="py-2 text-amber-700">Treasury (80%), Insurance (20%)</td>
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
              </div>
            </div>
          </div>
        </section>

        {/* DeFi Section */}
        <section id="defi" className="min-h-screen py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-amber-500/20 text-amber-800 border-amber-400/30">
                  Advanced DeFi Features
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
                  DeFi Features
                </h2>
                <p className="text-xl text-amber-700 max-w-3xl mx-auto">
                  Advanced leveraged trading, enhanced staking vault, and comprehensive 
                  yield generation mechanisms for sophisticated DeFi users.
                </p>
              </div>

              <div className="mb-16">
                <LeverageChart />
              </div>

              {/* Enhanced Staking Vault */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-amber-900 mb-8 text-center">Enhanced Staking Vault</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="border-amber-200">
                    <CardHeader>
                      <CardTitle className="text-amber-900 flex items-center">
                        <DollarSign className="mr-2 h-5 w-5" />
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
                        <TrendingUp className="mr-2 h-5 w-5" />
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
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Governance Section */}
        <section id="governance" className="min-h-screen py-16 bg-gradient-to-r from-amber-50 to-yellow-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-amber-500/20 text-amber-800 border-amber-400/30">
                  Governance Framework & Security
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
                  Governance & Security
                </h2>
                <p className="text-xl text-amber-700 max-w-3xl mx-auto">
                  Multi-signature governance structure with comprehensive security protocols 
                  and industry-leading risk management systems.
                </p>
              </div>

              {/* Multi-Signature Governance */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-amber-900 mb-8 text-center">Multi-Signature Governance Structure</h3>
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
              </div>

              {/* Security Framework */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-amber-900 mb-8 text-center">Industry-Leading Security Framework</h3>
                <Card className="border-amber-200">
                  <CardHeader>
                    <CardTitle className="text-amber-900 text-center">Professional Audit Plan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="p-4 bg-amber-50 rounded-lg text-center">
                        <div className="font-semibold text-amber-800 mb-2">Primary Audit: CertiK</div>
                        <Badge className="bg-amber-600 text-white mb-2">$120K-$150K</Badge>
                        <div className="text-sm text-amber-700">6-8 weeks comprehensive audit</div>
                      </div>
                      <div className="p-4 bg-amber-50 rounded-lg text-center">
                        <div className="font-semibold text-amber-800 mb-2">Secondary: Trail of Bits</div>
                        <Badge className="bg-amber-600 text-white mb-2">$80K-$100K</Badge>
                        <div className="text-sm text-amber-700">4 weeks focused security review</div>
                      </div>
                      <div className="p-4 bg-amber-50 rounded-lg text-center">
                        <div className="font-semibold text-amber-800 mb-2">Bug Bounty Program</div>
                        <Badge className="bg-green-600 text-white mb-2">$100K Max</Badge>
                        <div className="text-sm text-amber-700">Immunefi platform integration</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Projections Section */}
        <section id="projections" className="min-h-screen py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-amber-500/20 text-amber-800 border-amber-400/30">
                  Financial Projections & Investment Highlights
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
                  Financial Projections
                </h2>
                <p className="text-xl text-amber-700 max-w-3xl mx-auto">
                  Conservative revenue model with significant upside potential and 
                  clear path to profitability in the growing synthetic asset market.
                </p>
              </div>

              <div className="mb-16">
                <h3 className="text-3xl font-bold text-amber-900 mb-8 text-center">Conservative Revenue Model (3-Year)</h3>
                <ProjectionsChart />
              </div>

              {/* Investment Highlights */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-amber-900 mb-8 text-center">Investment Highlights</h3>
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
              </div>

              {/* Long-Term Vision */}
              <div>
                <h3 className="text-3xl font-bold text-amber-900 mb-8 text-center">Long-Term Vision</h3>
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
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full" />
              <span className="text-2xl font-bold">TetraGold</span>
            </div>
            <p className="text-amber-200 mb-4">Revolutionary Synthetic Gold Asset Platform</p>
            <div className="text-sm text-amber-300">
              <p className="mb-2">© TetraGold Labs 2025 | All Rights Reserved</p>
              <p>This whitepaper is for informational purposes only. Please conduct thorough research before making investment decisions.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
