import BlogCard from './BlogCard'

// 示例博客文章数据
const samplePosts = [
  {
    id: 1,
    title: 'Next.js 14 新特性详解',
    excerpt: '探索 Next.js 14 带来的全新功能和改进，包括 App Router、Server Components 等重大更新...',
    date: '2024-01-15',
    category: '前端开发',
    readTime: '8 分钟',
    image: '/api/placeholder/400/250'
  },
  {
    id: 2,
    title: 'Tailwind CSS 最佳实践',
    excerpt: '分享使用 Tailwind CSS 构建现代化 Web 应用的经验和技巧，提高开发效率...',
    date: '2024-01-10',
    category: 'CSS',
    readTime: '6 分钟',
    image: '/api/placeholder/400/250'
  },
  {
    id: 3,
    title: 'TypeScript 高级类型技巧',
    excerpt: '深入探讨 TypeScript 的高级类型系统，掌握泛型、条件类型和映射类型的使用...',
    date: '2024-01-05',
    category: 'TypeScript',
    readTime: '10 分钟',
    image: '/api/placeholder/400/250'
  },
  {
    id: 4,
    title: 'React 性能优化指南',
    excerpt: '学习 React 应用性能优化的各种技巧，包括 memo、useMemo、useCallback 等...',
    date: '2023-12-28',
    category: 'React',
    readTime: '12 分钟',
    image: '/api/placeholder/400/250'
  },
  {
    id: 5,
    title: '现代 JavaScript 特性总结',
    excerpt: '回顾 ES6+ 的重要特性，包括箭头函数、解构赋值、Promise、async/await 等...',
    date: '2023-12-20',
    category: 'JavaScript',
    readTime: '15 分钟',
    image: '/api/placeholder/400/250'
  },
  {
    id: 6,
    title: 'Web 安全最佳实践',
    excerpt: '了解常见的 Web 安全威胁和防护措施，保护你的应用免受攻击...',
    date: '2023-12-15',
    category: '安全',
    readTime: '9 分钟',
    image: '/api/placeholder/400/250'
  }
]

export default function BlogList() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">最新文章</h2>
        <p className="text-gray-600">发现最新的技术见解和编程技巧</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {samplePosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <button className="btn-primary">
          查看更多文章
        </button>
      </div>
    </div>
  )
}
