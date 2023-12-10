import { AppRouter } from './routes/AppRouter'
import { HeaderApp } from './ui/HeaderApp'

export const HeroApp = () => {
  return (
    <main className="max-w-[1280px] w-full mx-auto my-0">
      <div className="bg-black m-8 pl-16 p-10 py-11 rounded-3xl text-white flex justify-start items-start">
        <HeaderApp />
        <AppRouter />
      </div>
    </main>
  )
}
