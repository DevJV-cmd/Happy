//Tipos de dados
//String ""
//Number 01
//Ibject {}
//Boolean true or false
//Array {}


//Create map
const map = L.map('mapid').setView([-8.062619,-34.8989658], 15);
//creat and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
 //create icon
 const icon = L.icon({
     iconUrl: "./public/images/map-marker.svg", //mostrar o local do icone
     iconSize: [58, 68],  //Ajudatar o tamanho 
     IconAchor: [29, 68], //Onde ele vai está ancorado
     popupAnchor: [170, 2] //Quando abrir onde ele ficará
 });
 //create popup overlay
 const popup = L.popup({
     closeButton: false,
     className: 'map-popup',
     minWidht: 240,
     minHeight: 240
 }).setContent('Lar das meninas <a href="orphanage.html?id=1" class="chooser-orphanage"> <img src="./public/images/arrow-white.svg" </a>')
//create and add marker
L.marker([-8.062619,-34.8989658], { icon }).addTo(map)
    .bindPopup(popup)
    