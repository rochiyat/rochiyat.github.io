import React from 'react'
import { Card } from '@/components/ui/Card'

type GitHubActivityData = {
  contributionsLastYear: number | null
  publicRepos: number | null
  stars: number | null
  followers: number | null
}

function formatCompactNumber(value: number): string {
  return new Intl.NumberFormat('en-US', { notation: 'compact' }).format(value)
}

async function fetchJson<T>(url: string, signal: AbortSignal): Promise<T> {
  const res = await fetch(url, {
    signal,
    headers: {
      Accept: 'application/vnd.github+json',
    },
  })

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status} ${res.statusText}`)
  }

  return (await res.json()) as T
}

async function fetchGitHubActivity(username: string, signal: AbortSignal): Promise<GitHubActivityData> {
  type UserResponse = { public_repos: number; followers: number }
  type RepoResponse = { stargazers_count: number }

  const user = await fetchJson<UserResponse>(`https://api.github.com/users/${username}`, signal)

  // Sum stars across public repos. We cap at 300 repos (3 pages) to avoid runaway requests.
  // For most personal accounts this is enough; if exceeded, the value becomes "at least".
  let stars = 0
  let page = 1
  const perPage = 100
  const maxPages = 3

  while (page <= maxPages) {
    const repos = await fetchJson<RepoResponse[]>(
      `https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}&sort=updated`,
      signal
    )
    for (const r of repos) stars += r.stargazers_count
    if (repos.length < perPage) break
    page += 1
  }

  // Contributions are not available via GitHub public REST API.
  // We try a public community endpoint; if it fails, we gracefully fall back to null.
  let contributionsLastYear: number | null = null
  try {
    type ContributionsResponse = { total: { [year: string]: number } }
    const contrib = await fetchJson<ContributionsResponse>(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      signal
    )
    const values = Object.values(contrib.total || {})
    contributionsLastYear = values.length ? values.reduce((a, b) => a + b, 0) : null
  } catch {
    contributionsLastYear = null
  }

  return {
    contributionsLastYear,
    publicRepos: user.public_repos,
    stars,
    followers: user.followers,
  }
}

function StatCard({
  value,
  label,
  href,
  title,
}: {
  value: string
  label: string
  href: string
  title?: string
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" title={title} className="block">
      <Card className="text-center hover:shadow-lg transition-shadow">
        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{value}</div>
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">{label}</div>
      </Card>
    </a>
  )
}

export function GitHubActivity({ username = 'rochiyat' }: { username?: string }) {
  const [data, setData] = React.useState<GitHubActivityData>({
    contributionsLastYear: null,
    publicRepos: null,
    stars: null,
    followers: null,
  })
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'ready'>('idle')
  const [starsIsLowerBound, setStarsIsLowerBound] = React.useState(false)

  React.useEffect(() => {
    const controller = new AbortController()
    setStatus('loading')

    fetchGitHubActivity(username, controller.signal)
      .then((d) => {
        setData(d)
        // If user has more than 300 repos, we may undercount stars due to page cap.
        if (typeof d.publicRepos === 'number' && d.publicRepos > 300) setStarsIsLowerBound(true)
        setStatus('ready')
      })
      .catch(() => {
        setStatus('ready')
      })

    return () => controller.abort()
  }, [username])

  const profileUrl = `https://github.com/${username}`

  const contributionsValue =
    data.contributionsLastYear == null
      ? status === 'loading'
        ? '…'
        : '—'
      : formatCompactNumber(data.contributionsLastYear)

  const reposValue =
    data.publicRepos == null ? (status === 'loading' ? '…' : '—') : String(data.publicRepos)

  const starsValue =
    data.stars == null
      ? status === 'loading'
        ? '…'
        : '—'
      : `${formatCompactNumber(data.stars)}${starsIsLowerBound ? '+' : ''}`

  const followersValue =
    data.followers == null
      ? status === 'loading'
        ? '…'
        : '—'
      : formatCompactNumber(data.followers)

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      <StatCard
        value={contributionsValue}
        label="Contributions (last year)"
        href={profileUrl}
        title={
          data.contributionsLastYear == null
            ? 'Angka contributions tidak selalu tersedia via API publik.'
            : undefined
        }
      />
      <StatCard value={reposValue} label="Repositories" href={`${profileUrl}?tab=repositories`} />
      <StatCard value={starsValue} label="Stars" href={`${profileUrl}?tab=stars`} />
      <StatCard value={followersValue} label="Followers" href={`${profileUrl}?tab=followers`} />
    </div>
  )
}

