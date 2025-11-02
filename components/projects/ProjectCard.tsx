import React from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  tags: string[]
  demoUrl?: string
  repoUrl?: string
  featured?: boolean
  stats?: {
    stars?: number
    forks?: number
  }
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
  repoUrl,
  featured = false,
  stats,
}: ProjectCardProps) {
  return (
    <Card hover className="relative overflow-hidden">
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
            Featured
          </span>
        </div>
      )}

      {image && (
        <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="primary" size="sm" className="w-full">
                  Live Demo
                </Button>
              </a>
            )}
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="secondary" size="sm" className="w-full">
                  View Code
                </Button>
              </a>
            )}
          </div>
        </div>
      )}

      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {stats && (stats.stars || stats.forks) && (
          <div className="mt-4 flex gap-4 text-sm text-gray-600 dark:text-gray-400">
            {stats.stars !== undefined && (
              <div className="flex items-center gap-1">
                <span>⭐</span>
                <span>{stats.stars}</span>
              </div>
            )}
            {stats.forks !== undefined && (
              <div className="flex items-center gap-1">
                <span>🔀</span>
                <span>{stats.forks}</span>
              </div>
            )}
          </div>
        )}

        {!image && (demoUrl || repoUrl) && (
          <div className="mt-4 flex gap-2">
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="primary" size="sm" className="w-full">
                  Live Demo
                </Button>
              </a>
            )}
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="outline" size="sm" className="w-full">
                  View Code
                </Button>
              </a>
            )}
          </div>
        )}
      </div>
    </Card>
  )
}
