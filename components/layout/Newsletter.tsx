import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')
    
    setTimeout(() => {
      setStatus('success')
      setMessage('Thanks for subscribing! Check your email to confirm.')
      setEmail('')
      
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    }, 1000)
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white dark:bg-slate-950 px-6 py-12 sm:px-12 shadow-sm">
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Stay Updated
        </h2>
        <div className="mt-4 text-base text-slate-600 dark:text-slate-400 sm:text-lg">
          Dapatkan artikel dan update terbaru langsung ke inbox. Tanpa spam, bisa unsubscribe kapan saja.
        </div>
        
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
            disabled={status === 'loading'}
            className="flex-1 max-w-md rounded-lg border border-slate-300/80 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-700 disabled:opacity-50"
          />
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={status === 'loading'}
            className="min-w-[140px]"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>

        {message && (
          <div
            className={`mt-4 text-sm font-medium ${
              status === 'success' ? 'text-emerald-700 dark:text-emerald-300' : 'text-rose-700 dark:text-rose-300'
            }`}
          >
            {message}
          </div>
        )}

        <div className="mt-4 text-xs text-slate-500 dark:text-slate-500">
          We respect your privacy. Unsubscribe at any time.
        </div>
      </div>
    </div>
  )
}
