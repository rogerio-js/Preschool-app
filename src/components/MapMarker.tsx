import React, { ReactNode } from "react";
import { Marker } from "react-map-gl";
import { useTheme } from "next-themes";
interface ISchool {
  name: string;
  latitude: number;
  longitude: number;
  onClick: () => void;
}

const MapMarker = ({ name, latitude, longitude, onClick }: ISchool) => {
  const { theme } = useTheme();
  const isDarkTmeme = theme === "dark";
  return (
    <Marker longitude={longitude} latitude={latitude}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={"h-8 w-8"}
        viewBox="0 0 256 256"
        onClick={onClick}
      >
        <path
          d="M45 0C25.463 0 9.625 15.838 9.625 35.375c0 8.722 3.171 16.693 8.404 22.861L45 90l26.97-31.765c5.233-6.167 8.404-14.139 8.404-22.861C80.375 15.838 64.537 0 45 0zm0 48.705c-8.035 0-14.548-6.513-14.548-14.548S36.965 19.609 45 19.609s14.548 6.513 14.548 14.548S53.035 48.705 45 48.705z"
          fill={isDarkTmeme ? "#000" : "#fff"}
          transform="matrix(.72 0 0 .72 128 128) matrix(3.89 0 0 3.89 -175.05 -175.05)"
          strokeWidth={8}
          stroke={isDarkTmeme ? "#000" : "#000fff"}
          strokeMiterlimit={10}
        />
      </svg>
    </Marker>
  );
};

export default MapMarker;
