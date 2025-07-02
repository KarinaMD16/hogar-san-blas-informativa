import CardsServicios from "./CardsServicios"


const Servicios = () => {
  return (
    <section>
      <h2 className="text-2xl text-justify font-poppins font-bold text-amaranthPink">Nuestros Servicios</h2>

      <div className="flex flex-row items-center justify-center mt-4">
        <div>
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
