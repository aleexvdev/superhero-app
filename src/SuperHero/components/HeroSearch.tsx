import IconSearch from "../../icons/IconSearch"

type HeroSearchProps = {
  search: string;
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const HeroSearch = ({ search, onChangeInput }: HeroSearchProps) => {

  return (
    <div className="border-2 border-gray-600/70 px-5 bg-transparent h-20 w-[40%] py-5 rounded-2xl">
      <div className='flex items-center justify-between gap-2'>
        <input 
          type="text"
          placeholder='Search your superhero here...'
          className='bg-transparent w-full h-10 text-white outline-none'
          value={search}
          onChange={onChangeInput}
        />
        <button className='bg-transparent'>
          <IconSearch 
            fontSize={26}
            className='text-red-500'
          />
        </button>
      </div>
    </div>
  )
}