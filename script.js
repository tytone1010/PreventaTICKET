const params = new URLSearchParams(window.location.search)

function valor(nombre){
return decodeURIComponent(params.get(nombre) || "")
}

document.getElementById("id").innerText = valor("id")
document.getElementById("fecha").innerText = valor("fecha")
document.getElementById("cliente").innerText = valor("cliente")

document.getElementById("subtotal").innerText = valor("subtotal")
document.getElementById("isv").innerText = valor("isv")
document.getElementById("total").innerText = valor("total")

const detalleJSON = valor("detalle")

if(detalleJSON){

const productos = JSON.parse(detalleJSON)

let filas=""

productos.forEach(p=>{

filas += `
<tr>
<td class="center">${p.cant}</td>
<td class="center">${p.unidad}</td>
<td class="center">${p.vend}</td>
<td class="right">${p.punit}</td>
<td class="right">${p.sub}</td>
</tr>
`

})

document.getElementById("detalle").innerHTML = filas

}
