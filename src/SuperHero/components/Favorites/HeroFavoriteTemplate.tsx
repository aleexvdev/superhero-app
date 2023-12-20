import { useEffect, useState } from "react";
import { TypeHeroApp } from "../../../types/TypeHero";
import { getStorage } from "../../../helpers/LocalStorage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HeroMinCard } from "../HeroCard/HeroMinCard";

export const HeroFavoriteTemplate = () => {
  const [heros, setHeros] = useState<TypeHeroApp[]>([]);

  useEffect(() => {
    const storedHeros = getStorage<TypeHeroApp[]>("SuperHero");
    if (storedHeros) {
      setHeros(storedHeros);
    }
  }, []);

  if (heros.length === 0) {
    return <div>Cargando...</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Puedes ajustar el número de tarjetas que se muestran a la vez
    slidesToScroll: 1,
  };

  return (
    <section className="min-h-full h-full w-full mt-12">
      <div className="flex items-center justify-center h-full gap-10">
        <div className="max-w-[900px] h-full">
          <Slider {...settings}>
            {heros.map((hero, index) => (
              <HeroMinCard key={index} props={hero} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
