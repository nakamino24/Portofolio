import Navbar from './Navbar'
import Footer from './Footer'

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50">
      <Navbar />
      <div className="flex min-h-screen flex-col">
        <main className="w-full flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
