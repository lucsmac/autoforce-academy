import { AboutTheProgram } from '../../public/components/AboutTheProgram'
import { Banner } from '../../public/components/Banner'
import { Categories } from '../../public/components/categories'
import { Footer } from '../../public/components/Footer'
import { Institutional } from '../../public/components/Institutional'
import { ProgramInfos } from '../../public/components/ProgramInfos'

export default function Home() {
  return (
    <div className="content">
      <Banner />
      <Institutional />
      <Categories />
      <AboutTheProgram />
      <ProgramInfos />
      <Footer />
    </div>
  )
}
