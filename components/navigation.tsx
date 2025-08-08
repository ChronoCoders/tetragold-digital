"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Home, BarChart3, Cpu, DollarSign, Layers, Shield, TrendingUp } from 'lucide-react'

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Overview", href: "/overview", icon: BarChart3 },
  { name: "Technical", href: "/technical", icon: Cpu },
  { name: "Economics", href: "/economics", icon: DollarSign },
  { name: "DeFi", href: "/defi", icon: Layers },
  { name: "Governance", href: "/governance", icon: Shield },
  { name: "Projections", href: "/projections", icon: TrendingUp },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-white border-b border-amber-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full" />
            <span className="text-xl font-bold text-amber-900">TetraGold</span>
          </Link>
          <div className="hidden md:flex space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant={pathname === item.href ? "default" : "ghost"}
                    size="sm"
                    className={cn(
                      "flex items-center space-x-2",
                      pathname === item.href
                        ? "bg-amber-500 text-white hover:bg-amber-600"
                        : "text-amber-700 hover:text-amber-900 hover:bg-amber-50"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Button>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

export {}
