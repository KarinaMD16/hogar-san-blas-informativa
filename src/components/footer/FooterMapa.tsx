import L from "leaflet";
import { useRef, useEffect } from "react";

const FooterMapa = () => {
    
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined" && mapRef.current && mapRef.current.childNodes.length === 0) {
            const map = L.map(mapRef.current).setView([10.1488373, -85.4550823], 16);
            L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            }).addTo(map);
            L.marker([10.1480343, -85.4567349]).addTo(map);
        }
    }, []);

    return (
        <div
            ref={mapRef}
            id="map"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square min-w-[300px] min-h-[300px]"
        ></div>
    );
}
export default FooterMapa;