import './globals.css'

export const metadata = {
  title: 'WikiNITT',
  description: 'NIT Trichy Encyclopedia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
