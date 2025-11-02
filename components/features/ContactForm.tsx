import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error')
      setErrorMessage('Please fill in all required fields')
      return
    }

    if (!formData.email.includes('@')) {
      setStatus('error')
      setErrorMessage('Please enter a valid email address')
      return
    }

    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    }, 1000)
  }

  return (
    <Card>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            required
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            required
          />
        </div>

        {status === 'error' && (
          <div className="rounded-lg bg-red-50 dark:bg-red-900/20 p-4 text-sm text-red-600 dark:text-red-400">
            {errorMessage}
          </div>
        )}

        {status === 'success' && (
          <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-4 text-sm text-green-600 dark:text-green-400">
            Thank you for your message! I'll get back to you soon.
          </div>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === 'loading'}
          className="w-full"
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </Button>
      </form>

      <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Connect With Me
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <a
            href="https://github.com/rochiyat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span>🔗</span>
            <span>GitHub</span>
          </a>
          <a
            href="https://twitter.com/rochiyat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span>🐦</span>
            <span>Twitter</span>
          </a>
          <a
            href="https://linkedin.com/in/rochiyat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span>💼</span>
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:your.email@example.com"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span>📧</span>
            <span>Email</span>
          </a>
        </div>
      </div>
    </Card>
  )
}
