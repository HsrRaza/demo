import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = { title: 'Chikmagalur Travel | Off-road Jeep Expeditions', description: 'Curated off-road jeep routes through Chikmagalur.' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
