import { HeroSearch } from './HeroSearch'
import { TitleApp } from '../../ui/components/TitleApp'

export const HeroHeader = () => {
  return (
    <div className='flex items-center justify-between mb-16'>
      <TitleApp />
      <HeroSearch />
    </div>
)
}
