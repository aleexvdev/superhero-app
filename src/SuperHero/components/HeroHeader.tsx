import { HeroSearch } from './HeroSearch'
import { TitleApp } from '../../ui/components/TitleApp'

export const HeroHeader = () => {
  return (
    <div className='flex items-center justify-between h-20'>
      <TitleApp title1={'Super'} title2={'Hero'} />
      <HeroSearch />
    </div>
  )
}
