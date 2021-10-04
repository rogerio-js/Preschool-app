import React, { useRef, useState } from "react";
import ReactMapGL, { Marker, Popup, ViewState } from "react-map-gl";
import { useTheme } from "next-themes";

interface Props {}

const Map = (props: Props) => {
  const { theme } = useTheme();
  const mapRef = useRef<ReactMapGL | null>(null);
  const [viewport, setViewport] = useState<ViewState>({
    latitude: -43.529738221325324,
    longitude: 172.733672571706,
    zoom: 10,
  });

  return (
    <div className=" overflow-hidden bg-gray-200 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 w-full lg:w-8/12">
      <div className="text-black relative">
        <ReactMapGL
          {...viewport}
          width="100vw"
          height="100vh"
          onViewportChange={(nextViewport: React.SetStateAction<ViewState>) =>
            setViewport(nextViewport)
          }
          mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          mapStyle={`${
            theme === "dark"
              ? process.env.NEXT_PUBLIC_MAPBOX_THEME_LIGHT
              : process.env.NEXT_PUBLIC_MAPBOX_THEME_DARK
          }`}
          ref={(instance) => (mapRef.current = instance)}
          minZoom={5}
          maxZoom={15}
        ></ReactMapGL>
      </div>
    </div>
  );
};

export default Map;
