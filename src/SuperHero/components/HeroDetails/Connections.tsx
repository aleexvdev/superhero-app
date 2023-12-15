import { capitalizeFirstLetter } from "../../../functions/globals";
import { TypeConnections } from "../../../types/TypeHero";

type TypeConnectionsProps = {
  props: TypeConnections;
}

export const Connections = ( { props }: TypeConnectionsProps ) => {
  return (
    <div className='h-full text-white'>
      <div className='w-full px-0 py-0'>
        {
          Object.keys(props).map( (key, index) => (
            <div key={index} className='flex flex-col items-center justify-start py-2'>
              <div className='w-full flex items-center justify-start py-1'>
                <div className='w-10'>
                  {/* <IconConnections 
                      fontSize={26}
                      className='text-yellow-600'
                    /> */}
                  </div>
                <div>
                  <p className='text-gray-400'>{capitalizeFirstLetter(key).toUpperCase()}</p>
                </div>
              </div>
              <div className='w-full flex items-center justify-start py-1'>
                <div className='ml-10'>
                  <p className='text-white'>{props[key]}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  ) 
}
