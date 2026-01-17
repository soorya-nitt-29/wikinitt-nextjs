import './globals.css'

export const metadata = {
  title: 'WikiNITT - NIT Trichy Encyclopedia',
  description: 'Comprehensive encyclopedia for NIT Trichy - explore hostels, departments, campus facilities, events and clubs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
