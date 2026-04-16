import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";

const FooterMapa = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = mapRef.current;

    if (!element || typeof window === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !mapRef.current || mapRef.current.childNodes.length > 0) {
      return;
    }

    let mapInstance: { remove: () => void } | null = null;
    let cancelled = false;

    const initializeMap = async () => {
      const leaflet = await import("leaflet");

      if (cancelled || !mapRef.current) {
        return;
      }

      const map = leaflet
        .map(mapRef.current)
        .setView([10.1488373, -85.4550823], 16);

      leaflet
        .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        })
        .addTo(map);

      leaflet.marker([10.1480343, -85.4567349]).addTo(map);
      mapInstance = map;
    };

    initializeMap();

    return () => {
      cancelled = true;
      mapInstance?.remove();
    };
  }, [isVisible]);

  return (
    <div
      ref={mapRef}
      id="map"
      className="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square min-w-[250px] min-h-[250px]"
    >
      {!isVisible && <div className="h-full w-full bg-night/10 rounded-md" />}
    </div>
  );
};
export default FooterMapa;
