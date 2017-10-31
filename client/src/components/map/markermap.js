import React, { Component, PropTypes } from 'react';
import { Gmaps, Marker, InfoWindow } from 'react-gmaps';

const params = { v: '3.exp', key: 'AIzaSyA18bfzvU1Jmv-v4qlYsevRkV6UzvngU1Q' };

export default class GMap2 extends Component {
  state = { infoWindows: [] }

  toggleInfoWindow(index) {
    const { infoWindows } = this.state;
    infoWindows[index] = !infoWindows[index];
    this.setState({
      infoWindows,
    });
  }

  renderInfoWindows() {
    const { points } = this.props;
    const { infoWindows } = this.state;
    return points.map((shop, index) => {
      const { location, id, name, type } = shop;
      if (!infoWindows[index]) return null;
      return (
        <InfoWindow
          key={index}
          lat={location.lat}
          lng={location.lng}
          content={`<a href="shop/${id}">${name}</a><p>${type}</p>`}
          onCloseClick={() => this.toggleInfoWindow(index)}
        />
      );
    });
  }

  renderMarkers() {
    const { points } = this.props;
    console.log('points:', points);
    return points.map((shop, index) =>
      <Marker
        key={index}
        lat={shop.location.lat}
        lng={shop.location.lng}
        onClick={() => this.toggleInfoWindow(index)}
      />
    );
  }

  render() {
    return (
      <Gmaps
        width={'100%'}
        height={'600px'}
        lat={'41.492537'}
        lng={'-95'}
        zoom={4}
        loadingMessage={'Loading map...'}
        params={params}
      >
        {this.renderMarkers()}
        {this.renderInfoWindows()}
      </Gmaps>
    );
  }
}

Map.propTypes = {
  points: PropTypes.array,
};

export default Gmap2;