import Header from '@/components/Header'
import BlogList from '@/components/BlogList'
import Footer from '@/components/Footer'

export const metadata = {
  title: '博客文章 - Flaretion Blog',
  description: '浏览所有博客文章，发现技术见解和编程技巧',
}

export default function BlogPage() {
  return (
    <main>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            博客文章
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            探索我们的技术文章集合，涵盖前端开发、Web 技术和编程实践
          </p>
        </div>
        
        <BlogList />
      </div>
      <Footer />
    </main>
  )
}
