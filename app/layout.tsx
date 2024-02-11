import { Metadata } from "next"
import Navigation from "../components/navigation"

export const metadata:Metadata = {
  title: {
    template: "%s | Next Movie",
    default: "Next Movie"
  },
  description: 'The movie service on framework',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
