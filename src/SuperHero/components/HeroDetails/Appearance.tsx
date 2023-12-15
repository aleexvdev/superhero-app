import { capitalizeFirstLetter } from "../../../functions/globals";
import { TypeAppearance } from "../../../types/TypeHero";

type TypeAppearanceProps = {
  props: TypeAppearance;
}
export const Appearance = ( { props }: TypeAppearanceProps ) => {
  return (
    <div className='w-full h-full text-white'>
      <div className='w-full px-5 py-6'>
        {
          Object.keys(props).map( (key, index) => (
            <div className='flex items-center justify-between py-2'>
              <div key={index} className='flex items-center justify-start'>
                <div className='w-10'>
                  {/* <IconStar 
                    fontSize={20}
                    className='text-yellow-600'
                  /> */}
                </div>
                <div>
                  <p>{capitalizeFirstLetter(key)}</p>
                </div>
              </div>
              <div>
                <span className='px-3 bg-red-600 rounded-lg py-1'>{props[key]}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
