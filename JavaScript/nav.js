/*NAVBAR*/
function toggleMenu() {
  const nav = document.querySelector(".navbar ul");
  nav.classList.toggle("show");
}
/*NAVBAR FIN*/


/*CARD RECETAS*/
const recetas = [
  { nombre: "Ceviche", descripcion: "Plato bandera del Perú con pescado marinado en limón. Acompañado de cebolla, ají limo y cilantro.", imagen: "img/Ceviche.jpg", link: "TodasRecetas/ceviche.html" },
  { nombre: "Lomo Saltado", descripcion: "Carne salteada con cebolla, tomate y papas fritas. Mezcla de cocina criolla y china.", imagen: "img/lomo.jpg", link: "TodasRecetas/Lomo Saltado.html" },
  { nombre: "Ají de Gallina", descripcion: "Pollo en crema espesa de ají amarillo, pan y queso. Se sirve con arroz y huevo duro.", imagen: "img/ajigallina.jpg", link: "TodasRecetas/Aji de Gallina.html" },
  { nombre: "Arroz Chaufa", descripcion: "Arroz frito estilo oriental con verduras, huevo y carne. Clásico de la cocina chifa.", imagen: "img/arrozchaufa.png", link: "TodasRecetas/Arroz Chaufa.html" },
  { nombre: "Papa a la Huancaína", descripcion: "Papas hervidas con salsa de ají amarillo y queso. Entrada fría tradicional peruana.", imagen: "img/papahuancaina.jpg", link: "TodasRecetas/papa a la huancaina.html" },
  { nombre: "Causa Limeña", descripcion: "Puré de papa amarilla con ají y limón, relleno de pollo o atún. Plato frío típico limeño.", imagen: "img/causalimeña.jpg", link: "TodasRecetas/Causa Limeña.html" },
  { nombre: "Anticuchos", descripcion: "Brochetas de corazón de res marinadas en ají panca. Se sirven con papa y choclo.", imagen: "img/anticucho.jpg", link: "TodasRecetas/Anticuchos.html" },
  { nombre: "Tallarines rojos con pollo", descripcion: "Fideos en salsa de tomate con pollo guisado. Plato casero y festivo.", imagen: "img/tallarinerojos.webp", link: "TodasRecetas/Tallarines rojos con pollo.html" },
  { nombre: "Tallarines verdes con bistec", descripcion: "Fideos en salsa de albahaca con carne frita. Fusión ítalo-peruana.", imagen: "img/tallarineverdebistec.jpg", link: "TodasRecetas/Tallarines verdes con bistec.html" },
  { nombre: "Tacu Tacu", descripcion: "Arroz y frejoles fritos servidos con huevo o carne. Plato criollo contundente.", imagen: "img/tacutacu.webp", link: "TodasRecetas/Tacu tacu.html" },
  { nombre: "Arroz con Pollo", descripcion: "Pollo con arroz verde de cilantro y verduras. Muy presente en celebraciones.", imagen: "img/arrozpollo.jpg", link: "TodasRecetas/Arroz con pollo.html" },
  { nombre: "Papa Rellena", descripcion: "Papa cocida rellena de carne, huevo y aceitunas. Frita y servida con salsa criolla.", imagen: "img/paparellena.jpg", link: "TodasRecetas/Papa rellena.html" },
  { nombre: "Seco de Carne con frejoles", descripcion: "Carne guisada con culantro, acompañada de frejoles. Muy popular en la costa.", imagen: "img/secocarne.jpg", link: "TodasRecetas/Seco de carne con frijoles.html" },
  { nombre: "Escabeche de Pollo", descripcion: "Pollo cocido con cebolla y ají en vinagre. Se sirve frío con huevo y papa.", imagen: "img/escabechepollo.png", link: "TodasRecetas/Escabeche de Pollo.html" },
  { nombre: "Sudado de Pescado", descripcion: "Pescado cocido con tomate, cebolla y ají. Sabor suave y jugoso.", imagen: "img/sudadopescado.jpg", link: "TodasRecetas/Sudado de Pescado.html" },
  { nombre: "Arroz con mariscos", descripcion: "Arroz guisado con mariscos, ají y vino. Estilo peruano con mariscos variados.", imagen: "img/arrozmariscos.avif", link: "TodasRecetas/Arroz con mariscos.html" },
  { nombre: "Caldo de Gallina", descripcion: "Sopa caliente de gallina con fideos y papa. Reconfortante y nutritiva.", imagen: "img/caldogallina.jpg", link: "TodasRecetas/caldo de gallina.html" },
  { nombre: "Tamal de pollo", descripcion: "Masa de maíz con pollo, cocida en hoja de plátano. Típico en desayunos.", imagen: "img/tamalpollo.webp", link: "TodasRecetas/Tamal de pollo.html" },
  { nombre: "Pollo al horno con puré", descripcion: "Pollo al horno marinado acompañado de puré. Comida clásica de domingo.", imagen: "img/pollohornopure.jpg", link: "TodasRecetas/Pollo al horno con pure.html" },
  { nombre: "Chicharrón de chancho con mote", descripcion: "Carne de cerdo frita servida con mote y salsas. Plato serrano tradicional.", imagen: "img/chicharronchanchomote.jpg", link: "TodasRecetas/Chicharrón de chancho con mote.html" },
  { nombre: "Juane", descripcion: "Arroz con carne envuelto en hoja de bijao. Plato típico de la selva peruana.", imagen: "img/juane.jpg", link: "TodasRecetas/Juane.html" },
  { nombre: "Pachamanca", descripcion: "Carnes cocidas bajo tierra con hierbas y papas. Técnica ancestral andina.", imagen: "img/juane.jpg", link: "TodasRecetas/Pachamanca.html" },
  { nombre: "Pollo al maní", descripcion: "Pollo en salsa cremosa de maní y especias. Sabor suave y envolvente.", imagen: "img/pollomani.jpg", link: "TodasRecetas/pollo al mani.html" },
  { nombre: "Carapulcra", descripcion: "Guiso de papa seca con carne y maní. Tradicional de la sierra.", imagen: "img/carapulcra.jpg", link: "TodasRecetas/Carapulcra.html" },
  { nombre: "Sopa Seca con Carapulcra (versión chinchana)", descripcion: "Tallarines secos con guiso de papa seca. Fusión costeña y andina.", imagen: "img/sopasecacarapulcra.jpg", link: "TodasRecetas/Sopa Seca con Carapulcra (versión chinchana).html" },
  { nombre: "Chupe de Camarones", descripcion: "Sopa cremosa con camarones, leche, queso y papa. Plato emblemático de Arequipa.", imagen: "img/chupecamarones.jpg", link: "TodasRecetas/chupe de camarones.html" },
  { nombre: "Sudado de camarones", descripcion: "Camarones cocidos al vapor con verduras. Plato costero delicado.", imagen: "img/sudadoamarones.jpg", link: "TodasRecetas/sudado de camarones.html" },
  { nombre: "Estofado de pollo", descripcion: "Pollo cocido en salsa de tomate y especias. Se sirve con arroz.", imagen: "img/estofadopollo.webp", link: "TodasRecetas/estofado de pollo con arroz blanco.html" },
  { nombre: "Tallarines saltado", descripcion: "Fideos salteados con carne, tomate y cebolla. Similar al lomo saltado.", imagen: "img/tallarinsaltado.png", link: "TodasRecetas/Tallarines saltado.html" },
  { nombre: "Adobo Arequipeño", descripcion: "Cerdo marinado y cocido con chicha y ají. Plato fuerte y muy sabroso.", imagen: "img/adoboarequipeño.jpg", link: "TodasRecetas/Adobo Arequipeño.html" },
  { nombre: "Rocoto Relleno", descripcion: "Rocoto relleno de carne con queso gratinado. Muy picante y típico de Arequipa.", imagen: "img/rocotorelleno.jpg", link: "TodasRecetas/Rocoto relleno.html" },
  { nombre: "Seco de cabrito con frejoles", descripcion: "Cabrito guisado con culantro acompañado de frejoles. Tradicional del norte.", imagen: "img/secocabrito.jpg", link: "TodasRecetas/seco de cabrito con frejoles.html" },
  { nombre: "Seco de pollo a la norteña", descripcion: "Pollo guisado con culantro al estilo norteño. Plato verde y aromático.", imagen: "img/secopollonorteña.jpg", link: "TodasRecetas/seco de pollo a la norteña.html" },
  { nombre: "Patita con maní", descripcion: "Patas de cerdo cocidas en salsa de maní. Textura suave y sabor criollo.", imagen: "img/patitamani.jpg", link: "TodasRecetas/Patita con mani.html" },
  { nombre: "Chanfainita", descripcion: "Guiso de bofe con papa y ají panca. Económico y popular.", imagen: "img/chanfainita.jpg", link: "TodasRecetas/Chanfainita.html" },
  { nombre: "Mondonguito a la Italiana", descripcion: "Guiso de mondongo con verduras y pasta. Fusión italo-criolla.", imagen: "img/mondonguitoitaliana.jpg", link: "TodasRecetas/Mondonguito a la Italiana.html" },
  { nombre: "Caigua Rellena", descripcion: "Caigua cocida y rellena de carne. Ligera y saludable.", imagen: "img/caiguarellena.jpg", link: "TodasRecetas/Caigua rellena.html" },
  { nombre: "Olluquito de Pollo", descripcion: "Olluco cocido con pollo y especias. Sabor andino y tradicional.", imagen: "img/olluquitopollo.jpg", link: "TodasRecetas/Olluquito de Pollo.html" },
  { nombre: "Picante de Cuy", descripcion: "Guiso de cuy en salsa picante. Muy consumido en la sierra.", imagen: "img/picantecuy.jpg", link: "TodasRecetas/picante de cuy.html" },
  { nombre: "Cuy Chactado", descripcion: "Cuy frito prensado servido con papa. Crocante y tradicional.", imagen: "img/cuychactado.webp", link: "TodasRecetas/cuy chactado.html" },
  { nombre: "Trucha frita con ensalada de palmitos", descripcion: "Trucha dorada acompañada de palmitos y verduras. Plato fresco de la sierra.", imagen: "img/truchafrita.jpg", link: "TodasRecetas/trucha frita con ensalada de palmitos.html" },
  { nombre: "Malaya frita con arroz y plátano", descripcion: "Corte de carne frito servido con arroz y plátano. Plato fuerte y sabroso.", imagen: "img/malayafrita.webp", link: "TodasRecetas/Malaya frita con arroz y plátano.html" },
  { nombre: "Chicharrón de pescado", descripcion: "Trozos de pescado frito servidos con yuca. Muy popular en playas.", imagen: "img/chicharronpescado.jpg", link: "TodasRecetas/Chicharron de pescado.html" },
  { nombre: "Arroz Tapado", descripcion: "Arroz con carne molida sazonada en capas. Se acompaña con plátano frito.", imagen: "img/arroztapado.jpg", link: "TodasRecetas/arroz tapado.html" },
  { nombre: "Arroz chaufa con mariscos", descripcion: "Arroz frito con mariscos, cebolla y sillao. Estilo chifa marino.", imagen: "img/arrozmariscos.avif", link: "TodasRecetas/Arroz con mariscos.html" },
  { nombre: "Tortillas de verdura peruana", descripcion: "Tortillas fritas con espinaca, acelga u otras. Plato casero y nutritivo.", imagen: "img/tortillaverduras.jpg", link: "TodasRecetas/tortillas de verdura peruana.html" },
  { nombre: "Escabeche de pescado", descripcion: "Pescado cocido con ají, cebolla y vinagre. Plato frío y ácido.", imagen: "img/escabechepescado.jpg", link: "TodasRecetas/escabeche de pescado.html" },
  { nombre: "Cau Cau de Pollo", descripcion: "Guiso de papa y pollo con cúrcuma. Se sirve con arroz blanco.", imagen: "img/caucaupollo.jpg", link: "TodasRecetas/Cau Cau de Pollo.html" },
  { nombre: "Leche de Tigre", descripcion: "Jugo del ceviche servido como aperitivo. Ácido, picante y revitalizante.", imagen: "img/lechetigre.webp", link: "TodasRecetas/Leche de Tigre.html" }
];

const container = document.getElementById('recetario-container');

for (let i = 0; i < 49; i++) {
  const receta = recetas[i % recetas.length]; // Repetir recetas si son menos de 50
  container.innerHTML += `
    <div class="recetario">
      <img src="${receta.imagen}" alt="${receta.nombre}">
      <div class="recetario-contenido">
        <h3>${receta.nombre}</h3>
        <p>${receta.descripcion}</p>
        <a href="${receta.link}" class="recetario-btn">Ver más</a>
      </div>
    </div>
  `;
}
/*CARD RECETAS FIN*/


