import { createFileRoute } from "@tanstack/react-router";
import Donaciones from "../../sections/publicaciones/Donaciones";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";

export const Route = createFileRoute("/publicaciones/solicitudes-donaciones")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex flex-col items-center justify-center mt-15">
        <Navbar />
        <Donaciones />
      </div>
      <Footer />
    </div>
  );
}
