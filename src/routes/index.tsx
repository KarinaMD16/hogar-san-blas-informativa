import { createFileRoute } from '@tanstack/react-router'
import { lazy, Suspense, useEffect, useRef, useState, type ReactNode } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import HeroSection from '../sections/hero/HeroSection'
import Navbar from '../components/header/Navbar'
import { useFadeIn } from '../components/useFadeIn'
import Seo from '../components/Seo'
import { getDonaciones } from '../services/publicaciones/donacionesServices'
import { getTodasGaleria } from '../services/galeria/galeria'
import { scheduleIdleTask } from '../lib/idle'

// Lazy load below-the-fold sections to reduce initial parse/evaluation work.
const MisionVision = lazy(() => import('../sections/misionVision/MisionVision'))
const Servicios = lazy(() => import('../sections/servicios/Servicios'))
const SolicitarResidencia = lazy(() => import('../sections/residencia/SolicitarResidencia'))
const CasosExito = lazy(() => import('../sections/casosExito/CasosExito'))
const Donar = lazy(() => import('../sections/prevDonaciones/Donar'))
const Historia = lazy(() => import('../sections/historia/Historia'))
const Unete = lazy(() => import('../sections/unirse/Unete'))
const PreviewGaleria = lazy(() => import('../sections/previewGaleria/PreviewGaleria'))
const Footer = lazy(() => import('../components/footer/Footer'))

// Reserve space while section chunks are loading to limit layout shifts.
const SectionFallback = ({ minHeight = 220 }: { minHeight?: number }) => (
  <div style={{ minHeight }} aria-busy="true" />
)

type DeferredSectionProps = {
  children: ReactNode;
  minHeight?: number;
  rootMargin?: string;
};

const DeferredSection = ({
  children,
  minHeight = 220,
  rootMargin = '300px 0px',
}: DeferredSectionProps) => {
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (shouldRender) {
      return;
    }

    const node = containerRef.current;
    if (!node) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, shouldRender]);

  return (
    <div
      ref={containerRef}
      style={{
        contentVisibility: 'auto',
        containIntrinsicSize: `1px ${minHeight}px`,
      }}
    >
      {shouldRender ? children : <SectionFallback minHeight={minHeight} />}
    </div>
  );
}

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  useFadeIn();
  const queryClient = useQueryClient();

  // Prefetch API data while JS bundles are loading to reduce critical chain
  useEffect(() => {
    let isCancelled = false;

    const prefetchData = async () => {
      if (isCancelled) {
        return;
      }

      try {
        await queryClient.prefetchQuery({
          queryKey: ['donaciones', 1],
          queryFn: () => getDonaciones(1, 5),
        });

        if (isCancelled) {
          return;
        }

        await queryClient.prefetchQuery({
          queryKey: ['imagenes', 1, 8],
          queryFn: () => getTodasGaleria(1, 8),
        });
      } catch {
        // Silently fail - data will still load when components mount
      }
    };

    const cancelScheduledPrefetch = scheduleIdleTask(() => {
      void prefetchData();
    }, { timeout: 1500, fallbackDelay: 300 });

    return () => {
      isCancelled = true;
      cancelScheduledPrefetch();
      void queryClient.cancelQueries({ queryKey: ['donaciones', 1] });
      void queryClient.cancelQueries({ queryKey: ['imagenes', 1, 8] });
    };
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
        <DeferredSection minHeight={360}>
          <Suspense fallback={<SectionFallback minHeight={360} />}>
            <MisionVision className="fade-in-on-scroll" />
          </Suspense>
        </DeferredSection>
        <DeferredSection minHeight={420}>
          <Suspense fallback={<SectionFallback minHeight={420} />}>
            <Servicios className="fade-in-on-scroll" />
          </Suspense>
        </DeferredSection>
        <DeferredSection minHeight={360}>
          <Suspense fallback={<SectionFallback minHeight={360} />}>
            <SolicitarResidencia className="fade-in-on-scroll" />
          </Suspense>
        </DeferredSection>
        <DeferredSection minHeight={360}>
          <Suspense fallback={<SectionFallback minHeight={360} />}>
            <CasosExito className="fade-in-on-scroll" />
          </Suspense>
        </DeferredSection>
        <DeferredSection minHeight={360}>
          <Suspense fallback={<SectionFallback minHeight={360} />}>
            <Donar className="fade-in-on-scroll" />
          </Suspense>
        </DeferredSection>
        <DeferredSection minHeight={360}>
          <Suspense fallback={<SectionFallback minHeight={360} />}>
            <Historia className="fade-in-on-scroll" />
          </Suspense>
        </DeferredSection>
        <DeferredSection minHeight={320}>
          <Suspense fallback={<SectionFallback minHeight={320} />}>
            <Unete className="fade-in-on-scroll" />
          </Suspense>
        </DeferredSection>
        <DeferredSection minHeight={420}>
          <Suspense fallback={<SectionFallback minHeight={420} />}>
            <PreviewGaleria className="fade-in-on-scroll" />
          </Suspense>
        </DeferredSection>
      </main>
      <DeferredSection minHeight={280}>
        <Suspense fallback={<SectionFallback minHeight={280} />}>
          <Footer className="fade-in-on-scroll" />
        </Suspense>
      </DeferredSection>
    </>
  )
}