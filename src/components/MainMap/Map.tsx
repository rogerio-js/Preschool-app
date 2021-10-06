import React, { useCallback, useMemo, useRef, useState } from "react";
import ReactMapGL, {
  Popup,
  ViewState,
  InteractiveMapProps,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
  FlyToInterpolator,
} from "react-map-gl";
import {
  FullscreenControlStyle,
  GeolocateControlStyle,
  NavigationControlStyle,
} from "../../../utils/map/config";
import { useTheme } from "next-themes";
import SCHOOLS from "../../../data/data.json";
import MapMarker from "../MapMarker";
import { Map as MbMap, AttributionControl } from "mapbox-gl";
import PopupInfo from "./PopupInfo";


interface ISchoolProps {
  schools: {
    Name: string;
    latitude: number;
    longitude: number;
    nearby: never[];
  }[];
}

const Map = ({ schools }: ISchoolProps) => {
  const { theme } = useTheme();
  const mapRef = useRef<ReactMapGL | null>(null);
  const [viewport, setViewport] = useState<ViewState>({
    latitude: -43.5380474930068,
    longitude: 172.626110600652,
    zoom: 15,
    bearing: 0,
    pitch: 0,
  });

  const [showInfo, setShowInfo] = useState<any>(null);

  const onSelectSchool = useCallback((school) => {
    setShowInfo({
      ...school,
    });

    setViewport({
      ...school,
      zoom: 15,
      transitionInterpolator: new FlyToInterpolator({ speed: 1.2 }),
      transitionDuration: "auto",
    });
  }, []);

  return (
    <div className=" overflow-hidden bg-gray-200  lg:flex-shrink-0 lg:border-l lg:border-gray-200 w-full lg:w-8/12">
      <div className="text-black relative">
        <ReactMapGL
          {...viewport}
          width="100%"
          height={`calc(100vh - 64px)`}
          onViewportChange={(nextViewport: React.SetStateAction<ViewState>) =>
            setViewport(nextViewport)
          }
          mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          mapStyle={`${
            theme !== "dark"
              ? process.env.NEXT_PUBLIC_MAPBOX_THEME_LIGHT
              : process.env.NEXT_PUBLIC_MAPBOX_THEME_DARK
          }`}
          ref={(instance) => (mapRef.current = instance)}
          minZoom={5}
          maxZoom={15}
          onLoad={() => {
            if (mapRef.current) {
              const bounds = mapRef.current.getMap().getBounds();
              // setDataBounds(JSON.stringify(bounds.toArray()));
            }
          }}
        >
          {schools.map((school, i) => (
            <>
              <MapMarker
                key={school.Name + i}
                Name={school.Name}
                latitude={school.latitude}
                longitude={school.longitude}
                onClick={() => onSelectSchool(school)}
              />
            </>
          ))}

          {showInfo && (
            <Popup
              anchor="top"
              tipSize={0}
              longitude={showInfo.longitude}
              latitude={showInfo.latitude}
              closeOnClick={false}
              dynamicPosition={false}
              onClose={() => setShowInfo(null)}
              offsetTop={25}
            >
              <PopupInfo {...showInfo} />
            </Popup>
          )}

          <NavigationControl style={NavigationControlStyle} />
          <GeolocateControl style={GeolocateControlStyle} />
          <FullscreenControl style={FullscreenControlStyle} />
        </ReactMapGL>
      </div>
    </div>
  );
};

export default Map;
