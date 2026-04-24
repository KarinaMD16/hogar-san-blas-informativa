import { useCallback, useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import IdiomaContext from "../context/language/idiomaContext";
import { transformCloudinaryUrl } from "../lib/cloudinary";
import type { Publicacion } from "../models/publicaciones/publicaciones";
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "./Dialog";

type PublicacionDetalleDialogProps = {
    publicacion: Publicacion;
};

const PublicacionDetalleDialog = ({ publicacion }: PublicacionDetalleDialogProps) => {
    const { idioma } = useContext(IdiomaContext);
    const [imageLoaded, setImageLoaded] = useState(false);
    const dialogBodyRef = useRef<HTMLDivElement | null>(null);
    const fechaEtiqueta = idioma === "es" ? "Publicado en" : "Created at";
    const loadingImageLabel = idioma === "es" ? "Cargando imagen" : "Loading image";

    const animateDialog = useCallback(() => {
        const dialogBody = dialogBodyRef.current;

        if (!dialogBody) {
            return;
        }

        const context = gsap.context(() => {
            gsap.fromTo(
                dialogBody,
                {
                    opacity: 0,
                    y: 24,
                    scale: 0.98,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.45,
                    ease: "power3.out",
                }
            );

            gsap.fromTo(
                dialogBody.querySelectorAll("[data-dialog-reveal]"),
                {
                    opacity: 0,
                    y: 12,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.35,
                    ease: "power2.out",
                    stagger: 0.08,
                    delay: 0.08,
                }
            );
        }, dialogBody);

        return () => context.revert();
    }, []);

    useEffect(() => {
        const dialogBody = dialogBodyRef.current;

        return () => {
            if (dialogBody) {
                gsap.killTweensOf(dialogBody);
            }
        };
    }, []);

    const handleOpenAutoFocus = () => {
        setImageLoaded(false);
        requestAnimationFrame(() => {
            animateDialog();
        });
    };

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleImageError = () => {
        setImageLoaded(true);
    };

    return (
        <DialogContent
            className="max-w-[calc(100%-3rem)] overflow-hidden border-ecruYellow300 bg-linear-to-b from-[#fffaf2] via-white to-[#fff4e7] p-0 shadow-2xl sm:max-w-5xl"
            onOpenAutoFocus={(event) => {
                event.preventDefault();
                handleOpenAutoFocus();
            }}
        >
            <div ref={dialogBodyRef} className="grid max-h-[88vh] overflow-y-auto lg:grid-cols-[1.15fr_0.85fr]">
                <div className="relative bg-night/5">
                    {!imageLoaded && (
                        <div
                            className="absolute inset-0 animate-pulse bg-linear-to-br from-ecruYellow100 via-basicWhite to-softCoral/20"
                            role="status"
                            aria-live="polite"
                            aria-label={loadingImageLabel}
                        >
                            <span className="sr-only">{loadingImageLabel}</span>
                        </div>
                    )}
                    <img
                        src={transformCloudinaryUrl(publicacion.imagenUrl, 1200, 900)}
                        srcSet={`
              ${transformCloudinaryUrl(publicacion.imagenUrl, 600, 450)} 600w,
              ${transformCloudinaryUrl(publicacion.imagenUrl, 1200, 900)} 1200w,
              ${transformCloudinaryUrl(publicacion.imagenUrl, 1600, 1200)} 1600w
            `}
                        sizes="(max-width: 1024px) 100vw, 52vw"
                        alt={publicacion.Titulo}
                        className={`h-72 w-full object-cover transition-opacity duration-500 sm:h-112 lg:h-full ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                        loading="lazy"
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-night/90 via-night/55 to-transparent px-5 py-5 text-white sm:px-8 sm:py-7">
                        <p data-dialog-reveal className="text-xs uppercase tracking-[0.28em] text-white/80">
                            {fechaEtiqueta}
                        </p>
                        <p data-dialog-reveal className="mt-2 text-sm text-white/90 sm:text-base">
                            {publicacion.fecha}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-5 px-5 py-6 sm:px-8 sm:py-8">
                    <DialogHeader className="text-left">
                        <DialogTitle data-dialog-reveal className="font-poppins text-2xl leading-tight text-night sm:text-3xl">
                            {publicacion.Titulo}
                        </DialogTitle>
                        <DialogDescription data-dialog-reveal className="text-sm uppercase tracking-[0.22em] text-amaranthPinkDark/75">
                            {publicacion.fecha}
                        </DialogDescription>
                    </DialogHeader>

                    <p data-dialog-reveal className="whitespace-pre-line text-sm leading-7 text-night/80 sm:text-base">
                        {publicacion.Descripcion}
                    </p>
                </div>
            </div>
        </DialogContent>
    );
};

export default PublicacionDetalleDialog;