import './globals.css';
import Link from 'next/link';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Crypto Dashboard',
  description: 'Crypto monitoring dashboard',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-background">
          <header className="border-b border-border bg-slate-950/80">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
              <Link href="/" className="text-lg font-semibold text-white">Crypto Dashboard</Link>
              <div className="flex gap-4 text-sm text-muted">
                <Link href="/">Overview</Link>
                <Link href="/alerts">Alerts</Link>
                <Link href="/analysis">Analysis</Link>
              </div>
            </nav>
          </header>
          <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
