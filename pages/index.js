
import Skillbar from '@/comments/skillbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h2 className="text-2xl">Skill Bar Home page</h2>
      <Skillbar/>
    </main>
  )
}
