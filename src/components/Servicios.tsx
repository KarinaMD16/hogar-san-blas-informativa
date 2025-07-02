import CardsServicios from "./CardsServicios"


const Servicios = () => {
  return (
    <section>
      <h2 className="text-2xl text-justify font-poppins font-bold text-amaranthPink">Nuestros Servicios</h2>

      <div className="flex flex-row items-center justify-center mt-4">
        <div className="flex flex-col items-center justify-start gap-y-2 h-96 overflow-y-auto
              [&::-webkit-scrollbar]:w-2
              [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-track]:bg-gray-100
              [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-ecruYellow">
            <CardsServicios />
            <CardsServicios />
            <CardsServicios />
            <CardsServicios />
            <CardsServicios />
            <CardsServicios />
        </div>
        <div>
          // desc
        </div>
      </div>
    </section>
  )
}

export default Servicios
