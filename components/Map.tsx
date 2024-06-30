"use client";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { Tooltip } from "react-tooltip";

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

interface Marker {
  name: string;
  coordinates: [number, number];
  markerOffset: number;
}

const markers: Marker[] = [
  {
    markerOffset: -15,
    name: "Sao Paulo",
    coordinates: [-46.62529, -23.533773],
  },
  {
    markerOffset: -15,
    name: "Melbourne",
    coordinates: [144.963058, -37.813629],
  },
  {
    markerOffset: 25,
    name: "Dhaka",
    coordinates: [90.412521, 23.810331],
  },
  {
    markerOffset: 25,
    name: "San Francisco",
    coordinates: [-122.419418, 37.774929],
  },
];

export default function Map() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full">
        <ComposableMap className="w-full h-full" data-tip="">
          <ZoomableGroup zoom={1}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: "rgb(128, 255, 219)",
                        stroke: "#000",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      hover: {
                        fill: "rgb(114, 239, 221)",
                        stroke: "#000",
                        strokeWidth: 1,
                        outline: "none",
                      },
                      pressed: {
                        fill: "rgb(86, 207, 225)",
                        stroke: "#000",
                        strokeWidth: 1,
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>
            {markers.map(({ name, coordinates, markerOffset }: Marker) => (
              <Marker key={name} coordinates={coordinates}>
                <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
                <text
                  textAnchor="middle"
                  y={markerOffset}
                  style={{ fontFamily: "system-ui", fill: "#dee2e6" }}
                >
                  {name}
                </text>
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>
      </div>
      <Tooltip />
    </div>
  );
}
