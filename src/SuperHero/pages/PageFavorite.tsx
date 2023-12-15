import { HeroFavoriteHeader } from "../components/Favorites/HeroFavoriteHeader";
import { HeroFavoriteTemplate } from "../components/Favorites/HeroFavoriteTemplate";

export const PageFavorite = () => {

  return (
    <section className='h-full px-14 py-8'>
      <div className='flex flex-col justify-start'>
        <HeroFavoriteHeader />
        <HeroFavoriteTemplate />
      </div>
    </section>
  )
}
