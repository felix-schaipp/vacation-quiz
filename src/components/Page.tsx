import { ReactNode } from 'react'

type PageProps = {
  children: ReactNode
}

export const Page = ({ children }: PageProps) => {
  return <div className="h-screen bg-gray-100 py-10">{children}</div>
}
