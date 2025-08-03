import { Helmet } from 'react-helmet'

type HelmetTitleProps = {
  title: string
}

const HelmetTitle = ({ title }: HelmetTitleProps) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    </>
  )
}
export default HelmetTitle
