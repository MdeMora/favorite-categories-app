import HomeContainer from 'containers/HomeContainer'
import { fetchData } from 'utils/fetching'

import data from '../constants/data.json'

export default HomeContainer

export async function getStaticProps() {
  // const data = await (await fetchData('api/categories')).json()

  return {
    props: { ...data }, // will be passed to the page component as props
  }
}
