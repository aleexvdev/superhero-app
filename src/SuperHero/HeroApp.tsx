import { AppRouter } from '../routes/AppRouter'
// import { HeaderApp } from '../ui/HeaderApp'
import { NavBar } from '../ui/Menu/NavBar'

export const HeroApp = () => {
  return (
    <div className='w-full h-full'>
      <div className='flex items-center justify-start'>
        <NavBar />
      </div>
      {/* <BodyApp /> */}
      <AppRouter />
    </div>
  )
}
