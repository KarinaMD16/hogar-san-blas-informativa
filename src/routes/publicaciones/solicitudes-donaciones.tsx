import { createFileRoute } from "@tanstack/react-router";
import Donaciones from "../../sections/publicaciones/Donaciones";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";
import { useFadeIn } from "../../components/useFadeIn";
import Seo from "../../components/Seo";

export const Route = createFileRoute("/publicaciones/solicitudes-donaciones")({
  component: RouteComponent,
});

function RouteComponent() {
  useFadeIn();

  return (
    <div className="flex flex-col justify-between h-screen">
      <Seo
        title="Solicitudes de Donaciones | Necesidades del Hogar San Blas"
        description="Revisa las solicitudes de donaciones del Hogar San Blas de Nicoya y apóyanos con recursos para el cuidado de adultos mayores."
        path="/publicaciones/solicitudes-donaciones"
      />
      <main className="flex flex-col items-center justify-center">
        <Navbar />
        <Donaciones />
      </main>
      <div className="fade-in-on-scroll">
        <Footer />
      </div>
    </div>
  );
}
