import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: '关于我 - Flaretion Blog',
  description: '了解 Flaretion Blog 的作者和博客的使命',
}

export default function AboutPage() {
  return (
    <main>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              关于我
            </h1>
            <p className="text-xl text-gray-600">
              了解 Flaretion Blog 背后的故事
            </p>
          </div>

          <div className="card mb-8">
            <div className="flex items-center space-x-6 mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                <span className="text-primary-600 text-3xl font-bold">F</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Flaretion</h2>
                <p className="text-gray-600">全栈开发工程师 / 技术博主</p>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              你好！我是 Flaretion，一名充满热情的全栈开发工程师。我热爱编程，喜欢探索新技术，
              并且热衷于分享我的学习经验和项目心得。
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              这个博客是我分享技术见解、学习笔记和项目经验的地方。我希望通过写作来：
            </p>
            
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>记录和总结我的学习过程</li>
              <li>分享实用的开发技巧和最佳实践</li>
              <li>与志同道合的开发者交流经验</li>
              <li>帮助初学者更好地理解技术概念</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4">技术栈</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">前端</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">React</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Next.js</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">TypeScript</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Tailwind CSS</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">后端</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Node.js</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Express</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">PostgreSQL</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">MongoDB</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4">兴趣爱好</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 text-sm">💻</span>
                  </div>
                  <span className="text-gray-700">编程和技术探索</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm">📚</span>
                  </div>
                  <span className="text-gray-700">阅读技术书籍</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">🎵</span>
                  </div>
                  <span className="text-gray-700">音乐和播客</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-sm">🚴</span>
                  </div>
                  <span className="text-gray-700">户外运动</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">联系我</h3>
            <p className="text-gray-600 mb-6">
              如果你有任何问题、建议或者想要交流技术话题，欢迎随时联系我！
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="btn-primary">
                发送邮件
              </a>
              <a href="#" className="btn-secondary">
                查看简历
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
