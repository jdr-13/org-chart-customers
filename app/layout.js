import './globals.css'

export const metadata = {
  title: 'Chime Org Chart - Banking Products',
  description: 'Internal org chart for Chime Banking Products division',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
