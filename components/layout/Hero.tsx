import React from 'react'
import { Button } from '@/components/ui/Button'

interface HeroProps {
  title: string
  subtitle?: string
  description: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  stats?: {
    label: string
    value: string
  }[]
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  stats,
}: HeroProps) {
  return (
    <div className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {subtitle && (
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600 dark:text-slate-400">
              {subtitle}
            </div>
          )}
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <div className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            {description}
          </div>
          
          {(primaryCTA || secondaryCTA) && (
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
              {primaryCTA && (
                <a href={primaryCTA.href}>
                  <Button variant="primary" size="lg">
                    {primaryCTA.text}
                  </Button>
                </a>
              )}
              {secondaryCTA && (
                <a href={secondaryCTA.href}>
                  <Button variant="outline" size="lg">
                    {secondaryCTA.text}
                  </Button>
                </a>
              )}
            </div>
          )}

          {stats && stats.length > 0 && (
            <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="fade-in">
                  <div className="text-3xl font-semibold text-slate-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
