import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'dryrun-todo-app',
  description: 'Built by TraviTeam',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}