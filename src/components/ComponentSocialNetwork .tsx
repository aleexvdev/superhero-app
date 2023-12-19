import { TypeSocialNetworks } from "../types/TypeHero";


type TypePropsSocial = {
  props: TypeSocialNetworks;
}

export const ComponentSocialNetwork = ( {props}: TypePropsSocial ) => {

  const { id, social_network, url, icon } = props;

  return (
    <div key={id} className='flex items-center justify-center'>
      <a href={url} target='_blank' rel='noreferrer'>
        <img 
          src={`/social_svg/${icon}.svg`} 
          alt={social_network} 
          title={social_network} 
          className='inline-block w-20 h-20'
        />
      </a>
    </div>
  )
}