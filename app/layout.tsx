import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flaretion Blog - 个人技术博客',
  description: '分享技术心得、学习笔记和项目经验的个人博客',
  keywords: ['技术博客', '编程', 'Web开发', 'Next.js', 'React'],
  authors: [{ name: 'Flaretion' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}
