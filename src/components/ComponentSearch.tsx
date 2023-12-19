import { IconClose } from "../icons/IconClose";
import IconSearch from "../icons/IconSearch";

type ComponentSearchProps = {
  page: string;
  placeholder: string;
  search: string;
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changueIcon: boolean;
  onClearInput: () => void;
}

export const ComponentSearch = ({ search, placeholder, onChangeInput, changueIcon, onClearInput }: ComponentSearchProps) => {
  return (
    <div className="min-w-[350px] border-2 border-gray-600/70 px-5 bg-transparent h-20 w-[40%] py-5 rounded-2xl">
      <div className='flex items-center justify-between gap-2'>
        <input 
          type="text"
          placeholder={placeholder}
          className='bg-transparent w-full h-10 text-white outline-none'
          value={search}
          onChange={onChangeInput}
        />
        <button className='bg-transparent'>
          { changueIcon ? <IconClose  fontSize={26} className='text-white' onClick={onClearInput} /> : <IconSearch  fontSize={26} className='text-red-500' /> }
        </button>
      </div>
    </div>
  )
}
