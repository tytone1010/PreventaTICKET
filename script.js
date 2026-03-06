const params = new URLSearchParams(window.location.search)

/* FORMATO MONEDA */

function precio(valor){

return "L " + Number(valor).toLocaleString("en-US",{
minimumFractionDigits:2,
maximumFractionDigits:2
})

}

/* ENCABEZADO */

document.getElementById("id").innerText =
params.get("id") || ""

document.getElementById("fecha").innerText =
params.get("fecha") || ""

document.getElementById("cliente").innerText =
params.get("cliente") || ""

/* TOTALES */

document.getElementById("subtotal").innerText =
precio(params.get("subtotal"))

document.getElementById("isv").innerText =
precio(params.get("isv"))

document.getElementById("total").innerText =
precio(params.get("total"))

/* PRODUCTOS */

const productos = params.get("productos")

if(productos){

const lista = JSON.parse(decodeURIComponent(productos))

const tabla = document.getElementById("productos")

lista.forEach(p=>{

const fila = `
<tr>
<td>${p.cant}</td>
<td>${p.unidad}</td>
<td>${p.vend}</td>
<td>${precio(p.punit)}</td>
<td>${precio(p.sub)}</td>
</tr>
`

tabla.innerHTML += fila

})

}
