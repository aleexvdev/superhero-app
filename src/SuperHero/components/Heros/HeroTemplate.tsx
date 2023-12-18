import { useParams } from 'react-router'
import { HeroCard } from '../HeroCard/HeroCard'
import { HeroDetails } from '../HeroDetails/HeroDetails'
import { useEffect, useReducer, useState } from 'react';
import { getHeroData } from '../../../api/apihero';
import { TypeHeroApp } from '../../../types/TypeHero';
import { herosReducer } from '../../../stores/herosReducer';
import { getStorage } from '../../../helpers/LocalStorage';

const initialState: TypeHeroApp[] = [];
export const HeroTemplate = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const [hero, setHero] = useState<TypeHeroApp | null>(null);
  const [heros, dispatch] = useReducer(herosReducer, initialState);

  useEffect(() => {
    const storedHeros = getStorage<TypeHeroApp[]>('SuperHero');
    if (storedHeros) {
      dispatch({
        type: 'SET_HEROS',
        payload: storedHeros,
      });
    }

    const fetchHeroData = async () => {
      try {
        const params = (id === undefined) ? '1' : id;
        const response = await getHeroData(params);
        setHero(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchHeroData();
    
  }, [heros,id])

  if (!hero) {
    return (
      <section>
        <div>Loading...</div>
      </section>
    )
  }

  return (
    <section className="min-h-full h-full w-full mt-12">
      <div className='flex items-start justify-start h-full gap-10'>
        <div className='w-[21%]'>
          <HeroCard props={hero} dispatch={dispatch} />
        </div>
        <div className='w-[79%]'>
          <HeroDetails props={hero} />
        </div>
      </div>
    </section>
  )
}
