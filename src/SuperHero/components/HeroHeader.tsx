import { HeroSearch } from './HeroSearch'
import { TitleApp } from '../../ui/components/TitleApp'
import { useEffect, useState } from 'react'
import { TypeHeroApp } from '../../types/TypeHero';
import { getSearchHeroData } from '../../api/apihero';
import { HeroResult } from './HeroResult';

export const HeroHeader = () => {

  const [search, setSearch] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Array<TypeHeroApp>>([]);
  const [searchStatus, setSearchStatus] = useState<string>('');

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await getSearchHeroData(search);
        setSearchResults(response.results);
        setSearchStatus(response.response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchHeroData();
  }, [search])
  

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }
  return (
    <div className='flex items-center justify-between h-20'>
      <TitleApp title1={'Super'} title2={'Hero'} />
      <div className='w-full flex items-center justify-end relative'>
        <HeroSearch search={search} onChangeInput={onChangeInput} />
        {searchStatus === 'success' && searchResults.length > 0 && search.length > 0 && (
          <div className='bg-gray-900 h-auto max-h-[200px] absolute z-10 w-[40%] rounded-bl-2xl rounded-tl-2xl rounded-br-md rounded-tr-md top-24 right-0 overflow-y-auto scrollbar-custom'>
            <div className='py-2 px-4'>
              {searchResults.map((hero) => (
                <HeroResult key={hero.id} props={hero} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

