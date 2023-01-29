import { ReactNode } from 'react'

type PageContentProps = {
  children: ReactNode
}

export const PageContent = ({ children }: PageContentProps) => {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className=" w-full">{children}</div>
    </main>
  )
}
