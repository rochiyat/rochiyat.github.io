import dynamic from 'next/dynamic'
import React from 'react'

function Loading() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 text-center"
        >
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">…</div>
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">Loading</div>
        </div>
      ))}
    </div>
  )
}

export const GitHubActivityClient = dynamic(
  () => import('./GitHubActivity').then((m) => m.GitHubActivity),
  { ssr: false, loading: () => <Loading /> }
)

