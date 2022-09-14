//import { CenterControl } from './controles-customizados.js'
let map;
let button = document.querySelector('#mapType');
let i =0;
list = ['roadmap', 'satellite', 'hybrid', 'terrain']
button.addEventListener('click', function(){
    if(i <= 3){i++}
    else{i =0}
    map.setMapTypeId(list[i]) 
});

class MapaTeste{
    constructor(titleSize){
        this.titleSize = titleSize;
        this.maxZoom = 18;
        this.name = 'MapaTeste';
        this.alt = 'O mapa não carregou';
    }

    getTitle(coord, zoom, ownerDocument){
        let div = ownerDocument.createElement('div');
        div.innerHTML = 'Plantação';
        div.style.width = this.tileSize.width + 'px';
        div.style.heigth = this.tileSize.heigth + 'px';
        div.style.fontSize = '10px';
        div.style.backgroundColor = '#ddd';
        div.style.borderStyle = 'solid';
        div.style.borderWidth = '1px';
        div.style.borderColor = '#333';
        return div;
    }
}

function initMap(){
    let mapsOptions = {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8,
        //disableDefaultUI: true,
        //zoomControl: false,
        //streetViewControl: false,
        mapTypeId: 'roadmap' // roadmap, satellite, hybrid, terrain
    }
    map = new google.maps.Map(document.getElementById('map'), mapsOptions);
    const centerControl = new CenterControl(map);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControl.controlDiv);

    //map.mapTypes.set('papaTeste', new MapaTeste(new google.maps.Size(256, 256)));

    map.addListener('zoom_changed', function() {
      console.log('mudou o zoom');
    })

    map.addListener('dblclick', function() {
      console.log('deu doubleClick');
    })


    map.addListener('position', function() {
      console.log('mudou a posição');
    })
  

    map.addListener('click', function(e) {
      var clickPosition = e.latLgn;
      new google.maps.Marker({
        position: clickPosition,
        map: map,
        title: 'Centro',
        //label: 'F',
        //icon: exibi um ícone diferente
        animation: google.maps.Animation.DROP,
        draggable:  true
      });
    })

    /*var marker = new google.maps.Marker({
      position: clickPosition,
      map: map,
      title: 'Centro',
      //label: 'F',
      //icon: exibi um ícone diferente
      animation: google.maps.Animation.DROP,
      draggable:  true
    });*/

    // remove o marcador
    //marker.setMap(null);


}

//
const centerMap = {lat: -3.716816, lng: -38.519115};

class CenterControl{
    constructor(map){
        this.controlDiv = document.createElement('div');
        this.controlUI = document.createElement('div');
        this.controlText = document.createElement('div');

        this.controlUI.style.backgroundColor = '#fff';
        this.controlUI.style.border = '2px solid #ebebeb';
        this.controlUI.style.borderRadius = '3ox';
        this.controlUI.style.padding = '6px';
        this.controlUI.style.cursor = 'pointer'
        this.controlUI.title = 'Centralizar mapa';

        this.controlDiv.appendChild(this.controlUI);

        this.controlText.style.fontSize = '16px';
        this.controlText.style.textAling = 'center';
        this.controlText.style.lineHeight = '20px';
        this.controlText.style.color = '#333';
        this.controlText.innerHTML = 'Centralizar';

        this.controlUI.appendChild(this.controlText);

        this.controlUI.addEventListener('click', () =>{
            //map.setCenter(centerMap);
            map.panTo(centerMap);
        })
    }
}
/*
map.mapTypes.set(
    "coordinate",
    new CoordMapType(new google.maps.Size(256, 256))
  );

  class CoordMapType {
  tileSize: google.maps.Size;
  maxZoom = 19;
  name = "Tile #s";
  alt = "Tile Coordinate Map Type";

  constructor(tileSize: google.maps.Size) {
    this.tileSize = tileSize;
  }

  getTile(
    coord: google.maps.Point,
    zoom: number,
    ownerDocument: Document
  ): HTMLElement {
    const div = ownerDocument.createElement("div");

    div.innerHTML = String(coord);
    div.style.width = this.tileSize.width + "px";
    div.style.height = this.tileSize.height + "px";
    div.style.fontSize = "10";
    div.style.borderStyle = "solid";
    div.style.borderWidth = "1px";
    div.style.borderColor = "#AAAAAA";
    div.style.backgroundColor = "#E5E3DF";
    return div;
  }
*/

// Mapa Teste