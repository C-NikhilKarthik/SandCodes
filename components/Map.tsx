"use client";
import React from "react";
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

const highlightedCountries: { [key: string]: string } = {
  "356": "#57cc99", // India
  "840": "#57cc99", // United States of America
  "032": "#57cc99", // Argentina
  "124": "#dd2d4aa0", // Canada
  "360": "#57cc99", // Indonesia
  "242": "#dd2d4aa0", // Fiji
  "834": "#dd2d4aa0", // Tanzania
  "732": "#dd2d4aa0", // W. Sahara
  "398": "#57cc99", // Kazakhstan
  "860": "#dd2d4aa0", // Uzbekistan
  "598": "#dd2d4aa0", // Papua New Guinea
};

export default function Map() {
  return (
    <div className="w-full h-full">
      <ComposableMap
        className="w-full h-full"
        data-tip=""
        projectionConfig={{
          scale: 200,
          center: [0, 20],
        }}
      >
        <ZoomableGroup zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const countryId = geo.id;
                const fill = highlightedCountries[countryId] || "#80ffdba0";

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill,
                        stroke: "#000",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      hover: {
                        fill: "#64dfdf",
                        stroke: "#000",
                        strokeWidth: 1,
                        outline: "none",
                      },
                      pressed: {
                        fill: "#E42",
                        stroke: "#000",
                        strokeWidth: 1,
                        outline: "none",
                      },
                    }}
                  />
                );
              })
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
      <Tooltip />
    </div>
  );
}
