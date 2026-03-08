import { createFileRoute } from "@tanstack/react-router";
import ReseñaFundados from "../../sections/reseñaHistorica/ReseñaFundados";
import ReseñaServicio from "../../sections/reseñaHistorica/ReseñaServicio";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";
import { useFadeIn } from "../../components/useFadeIn";

export const Route = createFileRoute("/historia/")({
  component: RouteComponent,
});

function RouteComponent() {
  useFadeIn();

  return (
    <div>
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
