import { createFileRoute } from "@tanstack/react-router";
import Donaciones from "../../sections/publicaciones/Donaciones";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";
import { useFadeIn } from "../../components/useFadeIn";

export const Route = createFileRoute("/publicaciones/solicitudes-donaciones")({
  component: RouteComponent,
});

function RouteComponent() {
  useFadeIn();

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex flex-col items-center justify-center fade-in-on-scroll">
        <Navbar />
        <Donaciones />
      </div>
      <div className="fade-in-on-scroll">
        <Footer />
      </div>
    </div>
  );
}
