import { Hero } from '../../components'
import { ReactComponent as Lost } from '../../assets/images/lost.svg'

function PageNotFound() {
  return (
    <>
      <Hero
        title="Looks like you're lost."
        subtitle="use the  top bar to navigate in the Mission Control."
        image={<Lost style={{ width: '100%', height: '100%' }} />}
        disclaimer="This is not an official site. Illustrative purposes only"
      />
    </>
  )
}

export default PageNotFound
