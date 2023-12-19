import { Link } from 'react-router-dom';
import { TypeHeroApp } from '../types/TypeHero';

type ComponentListSearchProps = {
  props: TypeHeroApp;
}

export const ComponentListSearch = ({ props }: ComponentListSearchProps) => {
  const img = (props.image.url !== null) ? props.image.url : '/public/sin_foto.png';
  return (
    <Link to={`/heroes/${props.id}`} className='w-full flex items-center justify-start gap-3 py-2 cursor-pointer'>
      <div className='w-14'>
        {
          <img src={img} alt={props.name} className='rounded-lg' />
        }
      </div>
      <div className='w-full text-[15px] font-medium text-white'>{props.name}</div>
    </Link>
  )
}
