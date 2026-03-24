"use client"

import * as React from "react"
import { useState } from "react"
import { Button } from "./button"
import { Badge } from "./badge"
import { ArrowRightIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "../../lib/utils"

interface Feature {
  name: string
  description: string
  included: boolean
}

interface PricingTier {
  name: string
  price: {
    monthly: number
    yearly: number
  }
  description: string
  features: Feature[]
  highlight?: boolean
  badge?: string
  icon: React.ReactNode
}

interface PricingSectionProps {
  tiers: PricingTier[]
  className?: string
}

function PricingSection({ tiers, className }: PricingSectionProps) {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section
      className={cn(
        "relative bg-background text-foreground",
        "py-4 px-4",
        "overflow-hidden",
        className,
      )}
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-2 mb-6">
          <h2 className="text-2xl font-bold text-[#65A8C7] uppercase tracking-widest">
            Simple, transparent pricing
          </h2>
          <div className="inline-flex items-center p-1 bg-gray-100 rounded-full border border-gray-200 shadow-inner">
            {["Monthly", "Yearly"].map((period) => (
              <button
                key={period}
                onClick={() => setIsYearly(period === "Yearly")}
                className={cn(
                  "px-8 py-2 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300",
                  (period === "Yearly") === isYearly
                    ? "bg-[#65A8C7] text-white shadow-md"
                    : "text-gray-400 hover:text-gray-600",
                )}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative group backdrop-blur-md",
                "rounded-3xl transition-all duration-300",
                "flex flex-col",
                tier.highlight
                  ? "bg-white border-2 border-[#65A8C7] shadow-[0_20px_50px_rgba(101,168,199,0.15)]"
                  : "bg-white border border-gray-100 shadow-xl",
                "hover:translate-y-[-4px] hover:shadow-2xl",
              )}
            >
              {tier.badge && tier.highlight && (
                <div className="absolute -top-4 left-6">
                  <Badge className="bg-[#65A8C7] text-white px-4 py-1.5 text-sm font-bold border-none shadow-lg uppercase tracking-widest">
                    {tier.badge}
                  </Badge>
                </div>
              )}

              <div className="p-8 flex-1">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={cn(
                      "p-4 rounded-2xl transition-transform group-hover:scale-110",
                      tier.highlight
                        ? "bg-[#65A8C7]/10 text-[#65A8C7]"
                        : "bg-gray-100 text-gray-600",
                    )}
                  >
                    {tier.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#111111]">
                    {tier.name}
                  </h3>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-[#111111] tracking-tight">
                      RM{isYearly ? tier.price.yearly : tier.price.monthly}
                    </span>
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                  <p className="mt-3 text-gray-600 font-medium">
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-5">
                  {tier.features.map((feature) => (
                    <div key={feature.name} className="flex gap-4 items-start">
                      <div
                        className={cn(
                          "mt-1 p-1 rounded-full shrink-0",
                          feature.included
                            ? "bg-[#65A8C7]/10 text-[#65A8C7]"
                            : "bg-gray-100 text-gray-400",
                        )}
                      >
                        <CheckIcon className="w-3 h-3" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#111111] leading-none mb-1">
                          {feature.name}
                        </div>
                        <div className="text-xs text-gray-500 leading-relaxed">
                          {feature.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <Button
                  className={cn(
                    "w-full h-14 rounded-2xl font-bold uppercase tracking-widest transition-all duration-300 shadow-lg",
                    tier.highlight
                      ? "bg-[#65A8C7] text-white hover:bg-[#65A8C7]/90 hover:shadow-[#65A8C7]/20"
                      : "bg-[#111111] text-white hover:bg-black",
                  )}
                  onClick={() => document.getElementById('form-start')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="flex items-center justify-center gap-2">
                    {tier.highlight ? "Enroll Now" : "Get started"}
                    <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { PricingSection }
