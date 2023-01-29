import { ReactNode } from 'react'

type PageProps = {
  children: ReactNode
}

export const Page = ({ children }: PageProps) => {
  return <div className="h-full bg-gray-100 py-10">{children}</div>
}
