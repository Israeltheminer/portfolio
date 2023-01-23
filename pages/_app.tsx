import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Catamaran } from "@next/font/google"

const catamaran = Catamaran({
  subsets: ["latin"],
  variable: "--font-catamaran"
})
export default function App ({ Component, pageProps }: AppProps) {
  return (
    <main className={ `${catamaran.variable} font-sans` }>
      <Component { ...pageProps } />
    </main>
  )
}
