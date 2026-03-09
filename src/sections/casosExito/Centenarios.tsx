import { useContext } from "react";
import IdiomaContext from "../../context/language/idiomaContext";
import CardCentenario from "../../components/CardCentenario";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Centenarios = () => {
  const { contentJson } = useContext(IdiomaContext);
  return (
    <div>
      <div className="flex flex-col items-center gap-4 pt-120 md:pt-16 xl:pt-8 px-4 xl:px-25">
        <div className="w-full h-1 bg-ecruYellow rounded"/>
      </div>
        <section className="flex flex-col pt-12 lg:pt-20 xl:pt-20 px-4 xl:px-25">
          <div className="flex flex-col gap-7">
            <h1 className="font-poppins text-amaranthPink text-2xl sm:text-3xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-left">
              {contentJson.paginaCentenarios.centenarios.residentes.titulo}
            </h1>
            <p className="text-lg text-left font-semibold mb-14">
              {contentJson.paginaCentenarios.centenarios.residentes.subtitulo}
            </p>
          </div>
          <div className="flex justify-center mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              {contentJson.paginaCentenarios.centenarios.residentes.lista.map((centenario, index) => (
                <CardCentenario key={index} centenario={centenario} />
              ))}
            </div>
          </div>
        </section>
        <section className="flex flex-col pt-10 px-4 xl:px-25 pb-20">
          <div className="flex flex-col gap-7">
            <h1 className="font-poppins text-amaranthPink text-2xl sm:text-3xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-left">
              {contentJson.paginaCentenarios.centenarios.pasados.titulo}
            </h1>
            <p className="text-lg text-left font-semibold mb-14">
              {contentJson.paginaCentenarios.centenarios.pasados.subtitulo}
            </p>
          </div>
          <div className="relative flex justify-center">
            <style dangerouslySetInnerHTML={{
              __html: `
                .centenarios-swiper .swiper-button-prev,
                .centenarios-swiper .swiper-button-next {
                  display: flex !important;
                  align-items: center;
                  justify-content: center;
                  width: 40px !important;
                  height: 40px !important;
                  background: rgba(255, 255, 255, 0.8) !important;
                  border-radius: 50% !important;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
                  transition: background-color 0.3s ease !important;
                  color: #000 !important;
                }
                .centenarios-swiper .swiper-button-prev svg,
                .centenarios-swiper .swiper-button-next svg {
                  color: #000 !important;
                  fill: none !important;
                  stroke: #000 !important;
                  stroke-width: 2 !important;
                }
                .centenarios-swiper .swiper-button-prev:hover,
                .centenarios-swiper .swiper-button-next:hover {
                  background: #f4e4bc !important;
                }
                .centenarios-swiper .swiper-button-prev::after,
                .centenarios-swiper .swiper-button-next::after {
                  display: none !important;
                }
                .centenarios-swiper .swiper-button-disabled {
                  opacity: 0.5 !important;
                  cursor: not-allowed !important;
                }
              `
            }} />
            <div className="relative max-w-full md:max-w-7xl px-20">
              <Swiper
                modules={[Navigation]}
                spaceBetween={24}
                slidesPerView={1}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                }}
                className="centenarios-swiper"
              >
                {contentJson.paginaCentenarios.centenarios.pasados.lista.map((centenario, index) => (
                  <SwiperSlide key={index}>
                    <CardCentenario centenario={centenario} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10">
                <FaChevronLeft className="w-6 h-6 text-black" />
              </button>
              <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10">
                <FaChevronRight className="w-6 h-6 text-black" />
              </button>
            </div>
          </div>
        </section>
    </div>
  );
};
export default Centenarios;
