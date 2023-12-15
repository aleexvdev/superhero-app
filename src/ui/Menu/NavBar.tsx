import { Link, useLocation } from 'react-router-dom';
import { IconMain } from '../../icons/IconMain';
import { useState } from 'react';

export const NavBar = () => {

  const location = useLocation();
  const currentPath = location.pathname;
  const [activePage, setActivePage] = useState<string>(currentPath);

  return (
    <div className="w-44 h-[500px] border-r-2 pr-5">
      <div className='flex flex-col items-center justify-between h-full'>
        <div>
          <div>
            <IconMain />
          </div>
          <ul className="my-16 flex flex-col items-center justify-center gap-8">
            <Link 
              to={'/heroes'}
              className={`py-5 ${activePage === '/heroes' ? 'text-red-700' : 'text-white'}`}
              onClick={() => setActivePage('/heroes')}
            >
              <div className='flex items-center justify-center gap-1 hover:text-red-500'>
                <div className='flex items-start justify-start w-full'>
                  <span className='text-3xl'>Heroes</span>
                </div>
              </div>
            </Link>
            <Link 
              to={'/favorites'}
              className={`py-5 ${activePage === '/favorites' ? 'text-red-700' : 'text-white'}`}
              onClick={() => setActivePage('/favorites')}
            >
              <div className='flex items-center justify-center gap-1 hover:text-red-500'>
                <div className='flex items-start justify-start w-full'>
                  <span className='text-3xl'>Favorites</span>
                </div>
              </div>
            </Link>
          </ul>
        </div>
        <div>
          <Link 
            to={'/info'}
            className='py-5'
            onClick={() => setActivePage('/info')}
          >
            <div className={`flex items-center justify-center border-2 rounded-full p-3 hover:border-red-500 ${activePage === '/info' ? 'border-red-500' : 'border-white'}`}>
              <div className='flex items-start justify-start w-full'>
                <div>
                  <img src={'/public/batman.png'} alt={''} className="w-[35px] h-full" title={''} />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
