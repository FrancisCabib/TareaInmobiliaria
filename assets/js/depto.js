const propiedades_alquiler = [
  {
    nombre: "Vivienda ecológica en bosque tranquilo",
    src: "https://images.pexels.com/photos/18098285/pexels-photo-18098285/free-photo-of-casas-casa-techo-azulejos.jpeg?auto=compress&cs=tinysrgb&w=400",
    descripcion: "Vivienda sostenible rodeada de naturaleza, ideal para amantes del aire libre.",
    ubicacion: "12 Green Forest Lane, EcoVille, CA 12345",
    habitaciones: 3,
    banos: 2,
    costo: 2100,
    smoke: false,
    pets: true
},
{
  nombre: "Penthouse urbano con vistas a la ciudad",
  src: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400",
  descripcion: "Moderno penthouse con terraza y vistas panorámicas del horizonte de la ciudad.",
  ubicacion: "789 Skyline Drive, MetroCity, CA 23456",
  habitaciones: 2,
  banos: 2,
  costo: 2800,
  smoke: true,
  pets: false
},
{
  nombre: "Cabaña rústica en lago sereno",
  src: "https://images.pexels.com/photos/2360673/pexels-photo-2360673.jpeg?auto=compress&cs=tinysrgb&w=400",
  descripcion: "Acogedora cabaña de madera junto a un lago tranquilo, perfecta para escapadas.",
  ubicacion: "456 Lakeside Path, Serenity Lake, CA 34567",
  habitaciones: 2,
  banos: 1,
  costo: 1900,
  smoke: false,
  pets: true
},
{
  nombre: "Estudio minimalista en centro artístico",
  src: "https://images.pexels.com/photos/542403/pexels-photo-542403.jpeg?auto=compress&cs=tinysrgb&w=400",
  descripcion: "Estudio luminoso con diseño minimalista, ubicado en el corazón del distrito artístico.",
  ubicacion: "321 Art Street, CultureTown, CA 45678",
  habitaciones: 1,
  banos: 1,
  costo: 1700,
  smoke: true,
  pets: false
},

{
  nombre: "Villa de lujo en isla privada",
  src: "https://images.pexels.com/photos/259637/pexels-photo-259637.jpeg?auto=compress&cs=tinysrgb&w=400",
  descripcion: "Exclusiva villa con playa privada y todas las comodidades en una isla paradisíaca.",
  ubicacion: "1 Paradise Island Road, LuxuryIsle, CA 56789",
  habitaciones: 4,
  banos: 3,
  costo: 5000,
  smoke: false,
  pets: true
},

];


/*acá se separan las ventas de los alquileres*/



const propiedades_venta = [
  {
    nombre: "Loft industrial en distrito tecnológico",
    src: "https://images.pexels.com/photos/10525693/pexels-photo-10525693.jpeg?auto=compress&cs=tinysrgb&w=400",
    descripcion: "Espacioso loft con diseño industrial, ideal para jóvenes profesionales.",
    ubicacion: "89 Tech Avenue, Silicon District, CA 11223",
    habitaciones: 1,
    banos: 1,
    costo: 2300,
    smoke: true,
    pets: false
},
{
  nombre: "Mansión histórica en colinas vinícolas",
  src: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=400",
  descripcion: "Mansión del siglo XIX rodeada de viñedos, con bodega propia.",
  ubicacion: "45 Vineyard Drive, Wine Hills, CA 22334",
  habitaciones: 5,
  banos: 4,
  costo: 4500,
  smoke: false,
  pets: true
},
{
  nombre: "Bungalow tropical junto a la playa",
  src: "https://images.pexels.com/photos/1449729/pexels-photo-1449729.jpeg?auto=compress&cs=tinysrgb&w=400",
  descripcion: "Bungalow con acceso directo a la playa y jardín tropical.",
  ubicacion: "12 Beachside Lane, Surf City, CA 33445",
  habitaciones: 2,
  banos: 2,
  costo: 2600,
  smoke: true,
  pets: true
},
{
  nombre: "Apartamento de diseño en zona de teatros",
  src: "https://images.pexels.com/photos/542403/pexels-photo-542403.jpeg?auto=compress&cs=tinysrgb&w=400",
  descripcion: "Apartamento moderno en el corazón del distrito de teatros, con balcón y vistas a la ciudad.",
  ubicacion: "789 Broadway Street, Theater District, CA 44556",
  habitaciones: 2,
  banos: 2,
  costo: 2900,
  smoke: false,
  pets: false
},
{
  nombre: "Casa de campo",
  src: "https://images.pexels.com/photos/1101146/pexels-photo-1101146.jpeg?auto=compress&cs=tinysrgb&w=400",
  descripcion: "Casa de campo tradicional con amplio terreno, huerto y establos para caballos.",
  ubicacion: "123 Farm Road, Countryside, CA 55667",
  habitaciones: 4,
  banos: 3,
  costo: 3100,
  smoke: true,
  pets: true
},
{
  nombre: "Casa con estilo asiatico",
  src: "https://images.pexels.com/photos/734102/pexels-photo-734102.jpeg?auto=compress&cs=tinysrgb&w=400",
  descripcion: "Casa japnesa tradicional con amplio terreno.",
  ubicacion: "123 Farm Road, Countryside, CA 55667",
  habitaciones: 4,
  banos: 3,
  costo: 3100,
  smoke: true,
  pets: true
},
];

function formatNumber(number) {
  // Check if the input is not a number
  if (isNaN(number)) {
    return "Invalid Input";
  }

  // Convert the number to a string
  let numberString = number.toString();

  // Split the string into integer and decimal parts (if any)
  const parts = numberString.split(",");

  // Format the integer part with commas
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Join the integer and decimal parts with a dot (if there's a decimal part)
  const formattedNumber = parts.length === 2 ? parts.join(".") : parts[0];

  return formattedNumber;
}

function habitaciones(hab, banos) {
  return `<p>
  <i class="fas fa-bed"></i> ${hab} ${hab > 1 ? "Habitaciones" : "Habitacion"} |
  <i class="fas fa-bath"></i> ${banos} ${banos > 1 ? "Baños" : "Baño"}
</p>`;
}

function smokeAndPets(smoke, pets) {
  return `<p class= ${smoke ? "text-success" : "text-danger"}>
    <i class="fas ${smoke ? "fa-smoking" : "fa-smoking-ban"}"> </i> ${
    smoke ? "Permitido fumar" : "No se permite fumar"
  }
  </p>

  <p class= ${pets ? "text-success" : "text-danger"} >
<i class="fas ${pets ? "fa-paw" : "fa-ban"}"></i> ${
    pets ? "Mascotas permitidas" : "No se permiten mascotas"
  }
</p>`;
}

function cardContent(prop) {
  return `
  <div class="col-md-4 mb-4">
    <div class="card">
      <img
        src="${prop.src}"
        class="card-img-top"
        alt="Imagen del departamento"
      />
      <div class="card-body">
        <h5 class="card-title">
          ${prop.nombre}
        </h5>
        <p class="card-text">
          ${prop.descripcion}
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}
        </p>
        ${habitaciones(prop.habitaciones, prop.banos)}
        <p><i class="fas fa-dollar-sign"></i> ${formatNumber(prop.costo)}</p>
        ${smokeAndPets(prop.smoke, prop.pets)}
      </div>
    </div>
  </div> `;
}

export { propiedades_alquiler, propiedades_venta, cardContent };
