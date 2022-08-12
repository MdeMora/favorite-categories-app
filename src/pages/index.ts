import HomeContainer from 'containers/HomeContainer'
import { fetchData } from 'utils/fetching'

export default HomeContainer

export async function getStaticProps() {
  const data = await (await fetchData('api/categories')).json()

  return {
    props: { ...data },
    revalidate: 10,
  }
}
