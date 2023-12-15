import { HeroHeader } from '../components/Heros/HeroHeader'
import { HeroTemplate } from '../components/Heros/HeroTemplate'

export const PageHero = () => {
  return (
    <section className='h-full px-14 py-8'>
      <div className='flex flex-col justify-start'>
        <HeroHeader />
        <HeroTemplate />
      </div>
    </section>
  )
}

