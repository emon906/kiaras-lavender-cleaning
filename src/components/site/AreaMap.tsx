import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { serviceArea } from "@/config/site";

const pinIcon = L.divIcon({
  className: "map-pin-wrap",
  html: '<span class="map-pin"></span>',
  iconSize: [22, 22],
  iconAnchor: [11, 11],
  popupAnchor: [0, -14],
});

export default function AreaMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const map = L.map(containerRef.current, {
      scrollWheelZoom: false,
      attributionControl: true,
    }).setView(serviceArea.center, serviceArea.zoom);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    serviceArea.locations.forEach((location) => {
      L.marker(location.coords, { icon: pinIcon, title: location.name })
        .addTo(map)
        .bindPopup(`<strong>${location.name}, ${location.state}</strong>`);
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="size-full min-h-[420px] bg-deep/90"
      role="application"
      aria-label={`Map of ${serviceArea.region}`}
    />
  );
}
