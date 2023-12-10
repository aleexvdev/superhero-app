import { Link } from 'react-router-dom';
import { IconMain } from '../../icons/IconMain';

export const NavBar = () => {
  return (
    <div className="flex h-[500px]">
      <div className="bg-gray-800 text-white p-4 w-full">
        <div className="flex flex-col items-start justify-between h-full">
          <div>
            <IconMain />
          </div>
          <ul className="mb-5">
            <Link 
              to={'/heroes'}
              className='py-5'
            >
              <div className='flex items-center justify-center gap-1 text-white hover:text-red-500'>
                <div className='flex items-start justify-start w-full'>
                  <span>Heroes</span>
                </div>
              </div>
            </Link>
            <Link 
              to={'/favorites'}
              className='py-5'
            >
              <div className='flex items-center justify-center gap-1 text-white hover:text-red-500'>
                <div className='flex items-start justify-start w-full'>
                  <span>Favorites</span>
                </div>
              </div>
            </Link>
          </ul>
          <div>
            <Link 
              to={'/info'}
              className='py-5'
            >
              <div className='flex items-center justify-center gap-1 text-white hover:text-red-500'>
                <div className='flex items-start justify-start w-full'>
                  <span>Info</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
