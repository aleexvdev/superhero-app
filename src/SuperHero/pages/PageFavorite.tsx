import { TitleApp } from "../../ui/components/TitleApp"
import { HeroSearch } from "../components/HeroSearch"

export const PageFavorite = () => {
  return (
    <section className='h-full px-14 py-8'>
      <div className='flex flex-col justify-start'>
        <div className='flex items-center justify-between h-20'>
          <TitleApp title1={'Favorites'} title2={'Heros'} />
          <HeroSearch />
        </div>
      </div>
    </section>
  )
}
