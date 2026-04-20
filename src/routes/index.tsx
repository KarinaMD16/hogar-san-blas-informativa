import { createFileRoute } from '@tanstack/react-router'
import { lazy, Suspense, useEffect } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import Servicios from '../sections/servicios/Servicios'
import Unete from '../sections/unirse/Unete'
import MisionVision from '../sections/misionVision/MisionVision'
import Historia from '../sections/historia/Historia'
import SolicitarResidencia from '../sections/residencia/SolicitarResidencia'
import CasosExito from '../sections/casosExito/CasosExito'
import Footer from '../components/footer/Footer'
import HeroSection from '../sections/hero/HeroSection'
import Navbar from '../components/header/Navbar'
import { useFadeIn } from '../components/useFadeIn'
import Seo from '../components/Seo'
import { getDonaciones } from '../services/publicaciones/donacionesServices'
import { getTodasGaleria } from '../services/galeria/galeria'

// Lazy load below-the-fold sections to avoid render-blocking API calls
const Donar = lazy(() => import('../sections/prevDonaciones/Donar'))
const PreviewGaleria = lazy(() => import('../sections/previewGaleria/PreviewGaleria'))

// Fallback component for lazy sections
const SectionFallback = () => <div className="min-h-[200px]" aria-busy="true" />

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  useFadeIn();
  const queryClient = useQueryClient();

  // Prefetch API data while JS bundles are loading to reduce critical chain
  useEffect(() => {
    const prefetchData = async () => {
      try {
        await queryClient.prefetchQuery({
          queryKey: ['donaciones', 1],
          queryFn: () => getDonaciones(1, 5),
        });
        await queryClient.prefetchQuery({
          queryKey: ['imagenes', 1, 8],
          queryFn: () => getTodasGaleria(1, 8),
        });
      } catch {
        // Silently fail - data will still load when components mount
      }
    };
    prefetchData();
  }, [queryClient]);

  return (
    <>
      <Seo
        title="Hogar de Ancianos San Blas | Cuidado y apoyo para adultos mayores"
        description="Hogar San Blas de Nicoya: atención integral para personas adultas mayores. Conoce nuestros servicios y cómo ayudar con voluntariado o donaciones."
        path="/"
      />
      <Navbar />
      <main>
        <HeroSection className="fade-in-on-scroll" />
        <MisionVision className="fade-in-on-scroll" />
        <Servicios className="fade-in-on-scroll" />
        <SolicitarResidencia className="fade-in-on-scroll" />
        <CasosExito className="fade-in-on-scroll" />
        <Suspense fallback={<SectionFallback />}>
          <Donar className="fade-in-on-scroll" />
        </Suspense>
        <Historia className="fade-in-on-scroll" />
        <Unete className="fade-in-on-scroll" />
        <Suspense fallback={<SectionFallback />}>
          <PreviewGaleria className="fade-in-on-scroll" />
        </Suspense>
      </main>
      <Footer className="fade-in-on-scroll" />
    </>
  )
}