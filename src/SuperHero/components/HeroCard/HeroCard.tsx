import { TypeHeroApp } from "../../../types/TypeHero";
import { IconHeart } from "../../../icons/IconHeart";
import { putStorage } from "../../../helpers/LocalStorage";

type PropsHeroCard = {
  props: TypeHeroApp;
}

export const HeroCard = ({ props }: PropsHeroCard) => {

  const { id, name, powerstats, image } = props;

  const saveHero = () => {
    putStorage('SuperHero', props);
    console.log(id);

  }

  return (
    <div className="h-full" key={id}>
      <div className="h-full flex flex-col items-start justify-start gap-10 bg-black rounded-xl">
        <div className="w-full h-full">
          <div className="flex items-center justify-center relative">
            <img src={image.url} alt={name} className="w-[240px] h-full max-h-[250px] rounded-xl" />
            <div className="absolute top-3 right-3 bg-red-600 hover:bg-white rounded-full w-16 h-16">
              <IconHeart 
                className="text-white hover:text-red-600 cursor-pointer w-full h-full"
                onClick={saveHero}
              />
            </div>
          </div>
          <div className="flex items-center justify-center h-14">
            <h1 className="text-2xl font-medium tracking-wide text-white">{name}</h1>
          </div>
          <div className="flex items-center justify-center px-2 h-22 pb-2">
            <div className="flex items-center justify-center gap-2">
              <div className="border-2 border-none rounded-full p-2 flex flex-col items-center justify-center">
                <img src={'/combat.png'} alt={powerstats.combat} className="w-[35px] h-full" title={powerstats.combat} />
                <span>{powerstats.combat}</span>
              </div>
              <div className="border-2 border-none rounded-full p-2 flex flex-col items-center justify-center">
                <img src={'/power.png'} alt={powerstats.combat} className="w-[35px] h-full" title={powerstats.combat} />
                <span className="">{powerstats.power}</span>
              </div>
              <div className="border-2 border-none rounded-full p-2 flex flex-col items-center justify-center">
                <img src={'/strength.png'} alt={powerstats.combat} className="w-[35px] h-full" title={powerstats.combat} />
                <span>{powerstats.strength}</span>
              </div>
              <div className="border-2 border-none rounded-full p-2 flex flex-col items-center justify-center">
                <img src={'/speed.png'} alt={powerstats.combat} className="w-[35px] h-full" title={powerstats.combat} />
                <span>{powerstats.speed}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
