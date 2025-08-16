import Link from 'next/link'
import { format } from 'date-fns'
import { zhCN } from 'date-fns/locale'

interface Post {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  image: string
}

interface BlogCardProps {
  post: Post
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="card hover:shadow-lg transition-shadow duration-300 group">
      {/* 文章图片 */}
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
          <span className="text-primary-600 text-sm font-medium">文章配图</span>
        </div>
        <div className="absolute top-3 left-3">
          <span className="inline-block bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
            {post.category}
          </span>
        </div>
      </div>

      {/* 文章内容 */}
      <div className="space-y-3">
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <time dateTime={post.date}>
            {format(new Date(post.date), 'yyyy年MM月dd日', { locale: zhCN })}
          </time>
          <span>{post.readTime}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
          <Link href={`/blog/${post.id}`}>
            {post.title}
          </Link>
        </h3>

        <p className="text-gray-600 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="pt-2">
          <Link 
            href={`/blog/${post.id}`}
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm group-hover:underline"
          >
            阅读全文
            <svg className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
