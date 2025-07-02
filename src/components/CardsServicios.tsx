const CardsServicios = () => {
    const placeholderpic = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/330px-Placeholder_view_vector.svg.png";
  const placeholdertext = "Fisioterapia";
    return (
    <div className="flex flex-row items-center justify-center gap-4 p-4">
      <img src={placeholderpic} alt="Servicio 1" className="object-contain w-32 h-32"/>
      <p className="font-opensans">{placeholdertext}</p>
    </div>
  )
}

export default CardsServicios
