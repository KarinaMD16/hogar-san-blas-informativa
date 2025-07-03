import { getEntidad } from "../../data";
import type { Hero } from "../../models/hero";


const HeroSection =  () => {

    const hero: Hero = getEntidad("hero");

    return (
   <section className="min-h-[700px] flex flex-col justify-end items-start bg-night text-basicWhite">
    <div className="flex  flex-col gap-y-8">
        <h2 className="text-6xl font-poppins font-bold">{hero.titulo}</h2>
        <p className="font-opensans mt-2 items-start">{hero.descripcion}</p>
        <div className="mt-4 flex justify-center gap-10">
            {hero.botones.map((texto, idx) => (
                <button
                    key={idx}
                    className="bg-amaranthPink font-poppins text-basicWhite px-4 py-2 rounded-2xl w-36">
                    {texto}
                </button>
    ))} 
        </div>
    </div>
</section>

    )

}

export default HeroSection