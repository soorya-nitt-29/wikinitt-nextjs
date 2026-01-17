import './globals.css'

export const metadata = {
  title: 'WikiNITT',
  description: 'Wikipedia for NIT Trichy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
