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
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 px-6 py-12 sm:px-12">
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Stay Updated
        </h2>
        <p className="mt-4 text-lg text-blue-100">
          Get the latest articles and updates delivered to your inbox. No spam, unsubscribe anytime.
        </p>
        
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
            disabled={status === 'loading'}
            className="flex-1 max-w-md rounded-lg border-0 px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white disabled:opacity-50"
          />
          <Button
            type="submit"
            variant="secondary"
            size="lg"
            disabled={status === 'loading'}
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>

        {message && (
          <p
            className={`mt-4 text-sm font-medium ${
              status === 'success' ? 'text-green-200' : 'text-red-200'
            }`}
          >
            {message}
          </p>
        )}

        <p className="mt-4 text-xs text-blue-200">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  )
}
