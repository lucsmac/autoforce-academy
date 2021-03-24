import { Banner } from '../../public/components/Banner'
import { Categories } from '../../public/components/categories'
import { Institutional } from '../../public/components/Institutional'

export default function Home() {
  return (
    <div className="content">
      <Banner />
      <Institutional />
      <Categories />
    </div>
  )
}
