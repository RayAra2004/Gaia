let map;
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
        this.controlUI.title = 'Centralizar mapa';

        this.controlDiv.appendChild(this.controlUI);

        this.controlText.style.fontSize = '16px';
        this.controlText.style.textAling = 'center';
        this.controlText.style.lineHeight = '20px';
        this.controlText.style.color = '#333';
        this.controlText.innerHTML = 'Centralizar';

        this.controlUI.appendChild(this.controlText);
    }
}

