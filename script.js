let btnSearch = document.querySelector('#btnSearch');
let btnClose = document.querySelector('.btn-close');
let sidebar = document.querySelector('.sidebar');

btnSearch.addEventListener("click", () => {

  const origenSelect = document.querySelector("#origenSelect").value;
  const destinoSelect = document.querySelector("#destinoSelect").value;
  const Pasajeros = document.querySelector('#inputPasajeros').value;
  const TipoAsiento = document.querySelector('#TipoAsiento').value;
  const Equipaje = document.querySelector('#Equipaje').value;


  if (origenSelect !== '0' && destinoSelect !== '0' && origenSelect !== destinoSelect) {


    sidebar.style.visibility = 'visible';
    sidebar.style.transform = 'translateX(0px)';

    document.getElementById("result-origen").textContent = origenSelect;
    document.getElementById("result-destino").textContent = destinoSelect;
    document.getElementById("result-pasajeros").textContent = Pasajeros;
    document.getElementById("result-asiento").textContent = TipoAsiento;
    document.getElementById("result-equipaje").textContent = Equipaje;


    
  }






});


btnClose.addEventListener("click", () => {

  sidebar.style.transform = 'translateX(100%)';

  setTimeout(() => {

    sidebar.style.visibility = 'hidden';

  }, 300);

  document.getElementById("result-origen").textContent = "";
  document.getElementById("result-destino").textContent = "";
  document.getElementById("result-pasajeros").textContent = "";
  document.getElementById("result-asiento").textContent = "";
  document.getElementById("result-equipaje").textContent = "";


});