export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private google_map: google.maps.Map;

  constructor(div_id: string) {
    this.google_map = new google.maps.Map(document.getElementById(div_id), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      map: this.google_map,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
      const info_window = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      info_window.open(this.google_map, marker);
    });
  }
}
