import { useParams } from 'react-router'
import { HeroCard } from './HeroCard/HeroCard'
import { HeroDetails } from './HeroDetails/HeroDetails'
import { useEffect, useState } from 'react';
import { getHeroData } from '../../api/apihero';
import { TypeHeroApp } from '../../types/TypeHero';

export const HeroTemplate = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const [hero, setHero] = useState<TypeHeroApp | null>(null);

  useEffect(() => {
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
  }, [id])

  if (!hero) {
    return (
      <section>
        <div>Loading...</div>
      </section>
    )
  }

  return (
    <section className="min-h-full w-full mt-12">
      <div className='flex items-start justify-start h-full gap-10'>
        <div className='w-[21%]'>
          <HeroCard props={hero} />
        </div>
        <div className='w-[79%]'>
          <HeroDetails props={hero} />
        </div>
      </div>
    </section>
  )
}
