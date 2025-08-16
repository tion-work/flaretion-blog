import Header from '@/components/Header'
import BlogList from '@/components/BlogList'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            欢迎来到 Flaretion Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            分享技术心得、学习笔记和项目经验的个人博客
          </p>
        </div>
        
        <BlogList />
      </div>
      <Footer />
    </main>
  )
}
