import './global.css'

import { PropsWithChildren } from 'react'
import Providers from './providers'
import Link from 'next/link'

const links = [
  { text: 'Server Todos', href: '/todos/server' },
  { text: 'Client Todos', href: '/todos/client' },
]

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="bg-gray-100 py-3 mb-5 shadow">
            <header className="flex justify-between items-center container mx-auto max-w-4xl px-2 lg:px-0">
              <Link href="/" className="font-black tracking-tighter text-3xl">
                RSC Demo
              </Link>
              <nav className="flex gap-5">
                {links.map(({ href, text }) => (
                  <Link key={href} href={href} className="text-blue-500 hover:underline">
                    {text}
                  </Link>
                ))}
              </nav>
            </header>
          </div>
          <div className="container mx-auto max-w-4xl px-2 lg:px-0">
            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
