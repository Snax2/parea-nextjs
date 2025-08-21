'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setSubmitted(true)
        setEmail('')
        // Track with Google Analytics if available
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'signup', {
            event_category: 'engagement',
            event_label: 'waitlist'
          })
        }
      }
    } catch (error) {
      console.error('Signup error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="nav">
        <div className="nav-container">
          <div className="nav-brand">
            <Image
              src="/parea-logo.png"
              alt="Parea"
              width={280}
              height={80}
              className="nav-logo"
              priority
            />
          </div>
          <nav className="nav-links">
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#privacy" className="nav-link">
              Privacy
            </a>
            <a href="#waitlist" className="btn-primary">
              Get Early Access
            </a>
          </nav>
          <div className="md:hidden">
            <a href="#waitlist" className="btn-primary text-sm px-4 py-2">
              Get Access
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        {/* Background Pattern */}
        <div className="hero-pattern" />

        <div className="hero-content">
          <div className="hero-grid">
            {/* Hero Text */}
            <div className="hero-text">
              <h1 className="hero-title">
                Transform Social Media into Real Connections
              </h1>
              <p className="hero-subtitle">
                Break free from endless scrolling. Every time you reach for social media, Parea gently guides you toward meaningful relationships instead.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start mb-6">
                <a href="#waitlist" className="btn-primary text-lg px-8 py-4">
                  Join the Waitlist
                </a>
              </div>
              <p className="text-sm text-gray-500">
                Coming soon to iOS • 100% privacy-first
              </p>
            </div>

            {/* Phone Mockup */}
            <div className="phone-mockup">
              <div className="phone-container">
                <div className="phone-frame">
                  <div className="phone-screen">
                    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                      <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                          Taking a moment...
                        </h3>
                        <p className="text-gray-600 text-lg mb-8">
                          Instead of scrolling, why not call Mom?
                        </p>
                      </div>
                      
                      <div className="mb-8">
                        <div className="text-6xl font-bold text-amber-600 font-mono">
                          4:32
                        </div>
                      </div>
                      
                      <button className="bg-green-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:bg-green-600 transition-colors flex items-center gap-3">
                        <span className="text-2xl">📞</span>
                        Call Mom
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We&apos;re More Connected, Yet More Alone
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Social media promised to bring us together, but it&apos;s pulling us apart from the people who matter most.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="problem-card text-center">
              <div className="text-5xl mb-6">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Endless Scrolling</h3>
              <p className="text-gray-600 leading-relaxed">
                Hours disappear into infinite feeds while real relationships fade into the background.
              </p>
            </div>
            <div className="problem-card text-center">
              <div className="text-5xl mb-6">😔</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Relationship Neglect</h3>
              <p className="text-gray-600 leading-relaxed">
                When did you last call your best friend? Or have dinner with family without phones?
              </p>
            </div>
            <div className="problem-card text-center">
              <div className="text-5xl mb-6">🔄</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Addiction Cycle</h3>
              <p className="text-gray-600 leading-relaxed">
                We know social media makes us feel worse, but we can&apos;t seem to stop reaching for it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Features Designed for Real Relationships
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature is built with one goal: helping you nurture authentic human connections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "⏱️", title: "Mindful Gateway", desc: "A gentle 5-minute pause before social media, with personalized relationship prompts." },
              { icon: "❤️", title: "Relationship CRM", desc: "Organize contacts into circles and track interactions with loved ones." },
              { icon: "🧠", title: "Smart Prompts", desc: "\"You haven't called Mom in 8 days\" - contextual reminders based on your patterns." },
              { icon: "📊", title: "Mood Tracking", desc: "See how choosing real connections over social media affects your wellbeing." },
              { icon: "🔔", title: "Proactive Reminders", desc: "Gentle notifications to reach out before relationships drift apart." },
              { icon: "📱", title: "One-Tap Actions", desc: "Call, text, or schedule time with loved ones directly from prompts." }
            ].map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-card-accent" />
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your Relationships Stay Private
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                In a world where tech companies profit from your personal data, Parea takes a different approach.
              </p>
              <div className="space-y-6">
                {[
                  { icon: "📱", title: "100% On-Device Processing", desc: "All relationship data and analysis happens locally on your iPhone. Nothing leaves your device." },
                  { icon: "🔒", title: "No Cloud Sync", desc: "Your contacts, interactions, and mood data never touch our servers or the cloud." },
                  { icon: "🛡️", title: "Minimal Permissions", desc: "We only request access to the features you explicitly want to use." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-gray-50 p-8 rounded-3xl shadow-xl">
                <div className="text-center space-y-8">
                  <div className="bg-amber-50 p-6 rounded-2xl">
                    <div className="text-4xl mb-2">📱</div>
                    <div className="font-semibold text-gray-800">All data stays here</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="flex-1 h-0.5 bg-gray-300 relative">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-white px-2">
                        <div className="text-green-500 text-2xl">🛡️</div>
                      </div>
                      <div className="absolute -top-1 right-0 text-red-500 font-bold">✕</div>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-2xl opacity-60">
                    <div className="text-4xl mb-2">☁️</div>
                    <div className="font-semibold text-gray-500">Nothing goes here</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 bg-gradient-to-br from-amber-500 to-yellow-500 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Relationships?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
            Join thousands of others who are choosing real connections over endless scrolling.
          </p>

          <div className="max-w-md mx-auto">
            {submitted ? (
              <div className="text-center py-8 animate-fade-in">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold mb-2">Welcome to Parea!</h3>
                <p className="opacity-90">You&apos;re on the list! We&apos;ll notify you when the app launches.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 text-lg transition-all duration-200"
                    required
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                  >
                    {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                  </button>
                </div>
              </form>
            )}
            <p className="text-sm opacity-75 mt-4">
              Get early access when Parea launches on iOS. No spam, just updates.
            </p>
          </div>

          <div className="mt-12">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/30">
              <span className="text-sm opacity-75 mr-2">Coming Soon to</span>
              <span className="font-bold text-lg">App Store</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-amber-400 mb-4 font-serif">
                Parea
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
                Building meaningful relationships in a digital world. Transform your social media impulses into real human connections.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Product</h4>
              <div className="space-y-3">
                <a href="#features" className="block text-gray-400 hover:text-amber-400 transition-colors">Features</a>
                <a href="#privacy" className="block text-gray-400 hover:text-amber-400 transition-colors">Privacy</a>
                <a href="#waitlist" className="block text-gray-400 hover:text-amber-400 transition-colors">Download</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <div className="space-y-3">
                <a href="#about" className="block text-gray-400 hover:text-amber-400 transition-colors">About</a>
                <a href="#contact" className="block text-gray-400 hover:text-amber-400 transition-colors">Contact</a>
                <a href="#blog" className="block text-gray-400 hover:text-amber-400 transition-colors">Blog</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 Parea. All rights reserved. Building deeper connections, one relationship at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}