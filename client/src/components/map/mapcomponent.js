import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import PlacesData from "../../lib/mapsearch";
import SidebarTwo from '../theme/SidebarTwo';
import Footer from '../theme/Footer'

const shops = PlacesData.results;

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA18bfzvU1Jmv-v4qlYsevRkV6UzvngU1Q&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  (<GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 35.926019, lng: -79.059628 }}
  >
    
    {shops.map(shop => 
      <Marker position={{ lat: shop.geometry.location.lat, lng: shop.geometry.location.lng }} 
              onClick={props.onMarkerClick} 
              defaultTitle={shop.name} />
    )}

   </GoogleMap>)
);

class MyFancyComponent extends React.PureComponent {
  state = {
  }

  renderMarkers() {
  }

  componentDidMount() {
  }

  handleMarkerClick = () => {
    console.log("Hi");
  }

  render() {


    return (
      <div>
      <SidebarTwo />
      <div>

      <MyMapComponent
        onMarkerClick={this.handleMarkerClick}
      />
      </div>
      
      </div>
      


    )
  }
}

export default MyFancyComponent