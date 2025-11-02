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
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
              {subtitle}
            </p>
          )}
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="gradient-text">{title}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            {description}
          </p>
          
          {(primaryCTA || secondaryCTA) && (
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
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
            <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="fade-in">
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
