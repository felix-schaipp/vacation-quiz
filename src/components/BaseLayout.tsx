import { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { PageHeader } from './PageHeader'
import { PageContent } from './PageContent'
import { Page } from './Page'

type Props = {
  children?: ReactNode
  headline: string
}

export const BaseLayout = ({ children, headline }: Props) => (
  <>
    <Navbar />
    <PageHeader headline={headline} />
    <Page>
      <PageContent>{children}</PageContent>
    </Page>
  </>
)
