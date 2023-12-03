"use client"

import Feature from '@/components/features'
import Hero from '@/components/hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <Hero />
      <Feature />
    </main>
  )
}
