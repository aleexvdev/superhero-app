import { Route, Routes } from 'react-router-dom'
import { PageHero } from '../pages/PageHero'
import { PageFavorite } from '../pages/PageFavorite'
import { PageInfo } from '../pages/PageInfo'

export const HeroRoutes = () => {
  return (
    <div className='w-full'>
      <Routes>
        <Route path="/" element={<PageHero />} />
        <Route path="/heroes" element={<PageHero />} />
        <Route path="/favorites" element={<PageFavorite />} />
        <Route path="/info" element={<PageInfo />} />
        {/* <Route path="/favorites/:id" element={<PageHero />} /> */}
      </Routes>
    </div>
  )
}
