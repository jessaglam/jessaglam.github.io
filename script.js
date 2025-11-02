const tabla = document.querySelector("#tablaBoleta tbody");
const totalSpan = document.getElementById("total");
let total = 0;

document.getElementById("agregar").addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value.trim();
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const precio = parseFloat(document.getElementById("precio").value);

    if (!nombre || cantidad <= 0 || precio <= 0) {
        alert("Por favor, completa todos los campos correctamente.");
        return;
    }

  const subtotal = cantidad * precio;
    total += subtotal;

    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td class="producto">${nombre}</td>
        <td class="numero">${cantidad}</td>
        <td class="precio">S/ ${precio.toFixed(2)}</td>
        <td class="numero">S/ ${subtotal.toFixed(2)}</td>
    `;
    tabla.appendChild(fila);

    totalSpan.textContent = total.toFixed(2);

    // Limpiar inputs
    document.getElementById("nombre").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
});

// Descargar la boleta como imagen
    document.getElementById("descargar").addEventListener("click", () => {
    const boleta = document.getElementById("boleta");

  // Asegurarse de que las imágenes estén cargadas
    html2canvas(boleta, {
        useCORS: true, // si las imágenes están en otro dominio
        allowTaint: false,
        scale: 2 // mejora la calidad de la imagen exportada
    }).then(canvas => {
        const enlace = document.createElement("a");
        enlace.download = "boleta.png";
        enlace.href = canvas.toDataURL("image/png");
        enlace.click();
    });
});
