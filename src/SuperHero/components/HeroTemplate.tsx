import { HeroCard } from './HeroCard'
import { HeroDetails } from './HeroDetails'



export const HeroTemplate = () => {

  return (
    <section className="min-h-full w-full">
      <div className='flex items-start justify-start h-full gap-10'>
        <div className='w-[21%]'>
          <HeroCard />
        </div>
        <div className='w-[79%] bg-black'>
          <HeroDetails />
        </div>
      </div>
    </section>
  )
}
