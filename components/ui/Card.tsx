import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6',
        hover && 'transition-transform hover:scale-105 hover:shadow-lg',
        className
      )}
    >
      {children}
    </div>
  )
}
