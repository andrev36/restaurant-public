/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet'

const position: [number, number] = [50.049683, 19.944544]
const LocationMap: React.FC = () => {
 return (
  <LeafletMap center={position} zoom={13}>
   <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
   />
   <Marker position={position}>
    <Popup>
     Cracow Location Popup
     <br />
     City of Kings.
    </Popup>
   </Marker>
  </LeafletMap>
 )
}

export const RestaurantLocationSection: React.FC = () => {
 return (
  <React.Fragment>
   <section
    css={css`
     margin: auto;
     .leaflet-container {
      height: 500px;
      width: 100%;
      min-width: 95vw;
     }
    `}
   >
    <h1
     css={css`
      text-align: center;
      margin: 70px auto;
     `}
    >
     Restaurant Location
    </h1>
    <LocationMap />
   </section>
  </React.Fragment>
 )
}
