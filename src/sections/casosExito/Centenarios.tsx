const Centenarios = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {[1, 2, 3].map((num) => (
          <p key={num} className="text-lg text-gray-700">
           Card centenario
          </p>
      ))}
    </section>
  );
};
export default Centenarios;
