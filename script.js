function getParametro(nombre) {
const url = new URL(window.location.href);
return url.searchParams.get(nombre);
}

const id = getParametro("id");
const cliente = getParametro("cliente");
const fecha = getParametro("fecha");
const total = getParametro("total");
const isv = getParametro("isv");
const subtotal = getParametro("subtotal");

document.getElementById("info").innerHTML = `
<b>ID:</b> ${id}<br>
<b>Fecha:</b> ${fecha}<br>
<b>Cliente:</b> ${cliente}<br>
`;

document.getElementById("subtotal").innerText = subtotal;
document.getElementById("isv").innerText = isv;
document.getElementById("total").innerText = total;


/* EJEMPLO DE PRODUCTOS */

const productos = [
{cant:2, unidad:"CAJA", vend:"24", precio:"100", sub:"200"},
{cant:1, unidad:"DOCENA", vend:"12", precio:"50", sub:"50"}
];

const tabla = document.getElementById("productos");

productos.forEach(p => {

tabla.innerHTML += `
<tr>
<td>${p.cant}</td>
<td>${p.unidad}</td>
<td>${p.vend}</td>
<td class="right">${p.precio}</td>
<td class="right">${p.sub}</td>
</tr>
`;

});
