// In Next.js, you can add global CSS files by importing them from _app.js
// You CANNOT import global CSS anywhere else.
import '../styles/global.css'
import { AppProps } from 'next/app'

// This is a top-level component which will be common across
// all the different pages. E.g. can use this App component to keep
// state when navigating between pages.
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}