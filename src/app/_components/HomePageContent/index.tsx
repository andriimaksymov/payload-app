import HomeHero from '../../_components/HomePageContent/HomeHero'
import HomeProducts from '../../_components/HomePageContent/HomeProducts'
import HomeQuestions from '../../_components/HomePageContent/HomeQuestions'
import HomeSwag from '../../_components/HomePageContent/HomeSwag'
import TechnologySlider from '../../_components/HomePageContent/TechnologySlider'

export default function HomePageContent() {
  return (
    <>
      <HomeHero />
      <TechnologySlider />
      <HomeProducts />
      <HomeSwag />
      <HomeQuestions />
    </>
  )
}
