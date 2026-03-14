import { createFileRoute } from "@tanstack/react-router";
import ReseñaFundados from "../../sections/reseñaHistorica/ReseñaFundados";
import ReseñaServicio from "../../sections/reseñaHistorica/ReseñaServicio";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";
import { useFadeIn } from "../../components/useFadeIn";
import Seo from "../../components/Seo";

export const Route = createFileRoute("/historia/")({
  component: RouteComponent,
});

function RouteComponent() {
  useFadeIn();

  return (
    <div>
      <Seo
        title="Historia del Hogar San Blas | Más de 40 años de servicio"
        description="Conoce la historia del Hogar San Blas de Nicoya desde 1983 y su impacto en el cuidado de personas adultas mayores en Guanacaste."
        path="/historia"
      />
      <Navbar />
      <div className="fade-in-on-scroll">
        <ReseñaFundados />
      </div>
      <div className="fade-in-on-scroll">
        <ReseñaServicio />
      </div>
      <div className="fade-in-on-scroll">
        <Footer />
      </div>
    </div>
  );
}
