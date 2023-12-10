import { heroes } from "../../data/data"

export const HeroCard = () => {
  
  return (
    <div className="h-full">
      <div className="h-full flex flex-col items-start justify-start gap-10 bg-black rounded-xl">
        <div className="w-full h-full">
          <div className="flex items-center justify-center">
            <img src={heroes[0].image.url} alt={heroes[0].name} className="w-[240px] h-full rounded-t-xl" />
          </div>
          <div className="flex items-center justify-center h-14">
            <h1 className="text-2xl font-medium tracking-wide text-white">{heroes[0].name}</h1>
          </div>
          <div className="flex items-center justify-center px-2 h-22 pb-2">
            <div className="flex items-center justify-center gap-2">
              <div className="border-2 border-none rounded-full p-2 flex flex-col items-center justify-center">
                <img src={'/public/combat.png'} alt={heroes[0].powerstats.combat} className="w-[35px] h-full" title={heroes[0].powerstats.combat} />
                <span>{heroes[0].powerstats.combat}</span>
              </div>
              <div className="border-2 border-none rounded-full p-2 flex flex-col items-center justify-center">
                <img src={'/public/power.png'} alt={heroes[0].powerstats.combat} className="w-[35px] h-full" title={heroes[0].powerstats.combat} />
                <span className="">{heroes[0].powerstats.power}</span>
              </div>
              <div className="border-2 border-none rounded-full p-2 flex flex-col items-center justify-center">
                <img src={'/public/strength.png'} alt={heroes[0].powerstats.combat} className="w-[35px] h-full" title={heroes[0].powerstats.combat} />
                <span>{heroes[0].powerstats.strength}</span>
              </div>
              <div className="border-2 border-none rounded-full p-2 flex flex-col items-center justify-center">
                <img src={'/public/speed.png'} alt={heroes[0].powerstats.combat} className="w-[35px] h-full" title={heroes[0].powerstats.combat} />
                <span>{heroes[0].powerstats.speed}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
