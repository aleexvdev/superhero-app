import { capitalizeFirstLetter } from "../../../functions/globals";
import { TypeBiography } from "../../../types/TypeHero";

type TypeBiographyProps = {
  props: TypeBiography;
}

export const Biography = ( { props }: TypeBiographyProps ) => {
  return (
    <div className='w-full h-full text-white'>
      <div className='w-full px-5 py-6'>
        {
          Object.keys(props).map( (key, index) => (
            <div key={index} className='flex items-center justify-start py-2'>
              <div className='w-10'>
                  {/* <IconXDiamondFill 
                    fontSize={16}
                    className='text-yellow-600'
                  /> */}
                </div>
              <div>
                <p className='text-gray-400'>{capitalizeFirstLetter(key)}:<span className='ml-3 text-white'>{props[key]}</span></p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}