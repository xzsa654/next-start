export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
import PrelineScript from './preline'
import './globals.css'
import Provider from './provider'
import Menubar from './_components/menubar/menuBar'
import PrelineScript from './preline'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PrelineScript />
        <header>
          <Menubar />
        </header>
        <main>
          <Provider>{children}</Provider>
        </main>
        <footer></footer>
      </body>
    </html>
  )
}
