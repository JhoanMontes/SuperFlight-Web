let btnSearch = document.querySelector('#btnSearch');
let btnClose = document.querySelector('.btn-close');
let sidebar = document.querySelector('.sidebar');

const tarifas = {
  'Bogotá': { 'Medellín': 80000, 'Cali': 100000, 'Barranquilla': 120000, 'Cartagena': 150000 },
  'Medellín': { 'Bogotá': 80000, 'Cali': 95000, 'Barranquilla': 130000, 'Cartagena': 160000 },
  'Cali': { 'Bogotá': 100000, 'Medellín': 95000, 'Barranquilla': 140000, 'Cartagena': 160000 },
  'Barranquilla': { 'Bogotá': 90000, 'Medellín': 95000, 'Cali': 120000, 'Cartagena': 70000 },
  'Cartagena': { 'Bogotá': 90000, 'Medellín': 100000, 'Cali': 120000, 'Barranquilla': 70000 }
};

const preciosAsiento = { 'Standard': 0, 'Ejecutivo': 20000, 'VIP': 40000 };
const preciosEquipaje = { '0-10kg': 0, '10-20kg': 15000, '20-30kg': 30000 };


btnSearch.addEventListener("click", () => {

  const origenSelect = document.querySelector("#origenSelect").value;
  const destinoSelect = document.querySelector("#destinoSelect").value;
  const Pasajeros = document.querySelector('#inputPasajeros').value;
  const TipoAsiento = document.querySelector('#TipoAsiento').value;
  const Equipaje = document.querySelector('#Equipaje').value;
  const errorDestino = document.querySelector('#errorDestino');

  if (origenSelect !== '0' && destinoSelect !== '0' && origenSelect !== destinoSelect) {

    errorDestino.style.display = 'none';
    sidebar.style.visibility = 'visible';
    sidebar.style.transform = 'translateX(0px)';

    document.getElementById("result-origen").textContent = origenSelect;
    document.getElementById("result-destino").textContent = destinoSelect;
    document.getElementById("result-pasajeros").textContent = Pasajeros;
    document.getElementById("result-asiento").textContent = TipoAsiento;
    document.getElementById("result-equipaje").textContent = Equipaje;


    let tarifaBase = 0, precioAsiento = 0, precioEquipaje = 0, precioImpuestos = 0, precioTotal = 0;

    tarifaBase = (tarifas[origenSelect]?.[destinoSelect] || 0) * Pasajeros;
    precioAsiento = (preciosAsiento[TipoAsiento] || 0) * Pasajeros;
    precioEquipaje = (preciosEquipaje[Equipaje] || 0) * Pasajeros;


    let sumaTarifas = tarifaBase + precioAsiento + precioEquipaje;
    precioImpuestos = sumaTarifas > 800000 ? sumaTarifas * 0.19 : 0;
    precioTotal = sumaTarifas + precioImpuestos;


    document.querySelector('#tarifaBase').textContent = `$${tarifaBase.toLocaleString('es-ES')}`;
    document.querySelector('#precioAsiento').textContent = `$${precioAsiento.toLocaleString('es-ES')}`;
    document.querySelector('#precioEquipaje').textContent = `$${precioEquipaje.toLocaleString('es-ES')}`;
    document.querySelector('#precioImpuestos').textContent = `$${precioImpuestos.toLocaleString('es-ES')}`;
    document.querySelector('#precioTotal').textContent = `$${precioTotal.toLocaleString('es-ES')}`;







  }
  else if (origenSelect == destinoSelect && origenSelect !== '0' && destinoSelect !== '0') {


    errorDestino.textContent = 'El destino es igual que el origen.'

    errorDestino.style.display = 'block';

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