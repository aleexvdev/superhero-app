import { TitleApp } from '../../../ui/components/TitleApp'
import { useEffect, useState } from 'react'
import { TypeHeroApp } from '../../../types/TypeHero';
import { getStorage } from '../../../helpers/LocalStorage';
import { ComponentSearch } from '../../../components/ComponentSearch';
import { ComponentListSearch } from '../../../components/ComponentListSearch';

export const HeroFavoriteHeader = () => {
  const [search, setSearch] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Array<TypeHeroApp | null>>([]);
  const [searchStatus, setSearchStatus] = useState<string>('');
  const [btnStatus, setBtnStatus] = useState<boolean>(false);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const storedHeroes = getStorage<Array<TypeHeroApp>>('SuperHero');
        if (storedHeroes) {
          const filteredHeroes = storedHeroes.filter((hero) =>
            hero.name.toLowerCase().includes(search.toLowerCase())
          );
          setSearchResults(filteredHeroes);
          setSearchStatus('success');
        } else {
          setSearchResults([]);
          setSearchStatus('no data');
        }
      } catch (error) {
        console.error(error);
        setSearchResults([]);
        setSearchStatus('error');
      }
    };

    fetchHeroData();
  }, [search]);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const onClearInput = () => {
    setSearch('');
    setBtnStatus(false);
  }

  const clickedItem = (value: boolean) => {
    if (value === false) {
      setTimeout(() => {
        setSearchResults([]);
        setSearch('');
        setBtnStatus(false);
      }, 100); 
    }
  }

  return (
    <div className='flex items-center justify-between h-20'>
      <div className='max-w-[20%]'>
        <TitleApp title1={'Favorite'} title2={'Hero'} />
      </div>
      <div className='w-full flex items-center justify-end relative'>
        <ComponentSearch search={search} placeholder={'Search your favorite superhero here...'} page={'heros'} onChangeInput={onChangeInput} changueIcon={btnStatus} onClearInput={onClearInput} />
        {searchStatus === 'success' && searchResults.length > 0 && search.length > 0 && (
          <div className='bg-gray-900 h-auto max-h-[200px] absolute z-10 max-w-[380px] w-full rounded-bl-2xl rounded-tl-2xl rounded-br-md rounded-tr-md top-24 right-0 overflow-y-auto scrollbar-custom'>
          <div className='py-2 px-4'>
            {searchResults.map((hero) => (
              hero && <ComponentListSearch key={hero.id} props={hero} clickedItem={clickedItem} />
            ))}
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

