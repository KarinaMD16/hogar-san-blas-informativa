const CardsServicios = () => {
    const placeholderpic = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/330px-Placeholder_view_vector.svg.png";
  const placeholdertext = "Fisioterapia";
    return (
    <div className="flex flex-row items-center justify-start gap-14 mr-8 p-4 pl-6 w-90 rounded-2xl bg-antiFlashWhite">
      <img src={placeholderpic} alt="Servicio 1" className="shadow-md shadow-night/20 border-2 rounded-xl border-basicWhite object-cover w-32 h-32"/>
      <strong className="font-opensans ">{placeholdertext}</strong>
    </div>
  )
}

export default CardsServicios
