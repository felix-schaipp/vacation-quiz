type PageHeaderProps = {
  headline: string
}

export const PageHeader = ({ headline }: PageHeaderProps) => {
  return (
    <header className="border-b border-gray-300 bg-gray-100">
      <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
          {headline}
        </h1>
      </div>
    </header>
  )
}
