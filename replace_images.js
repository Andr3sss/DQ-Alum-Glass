const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'portafolio.html');
let html = fs.readFileSync(htmlPath, 'utf8');

const images = {
    'Taller de Producción - Maquinaria CNC y Estación de Corte de Aluminio': 'photo-1504307651254-35680f356f58', // Welding/Factory
    'Panel de Vidrio Templado 10mm Instalado': 'photo-1506836732902-ce955d326fbf', // Glass
    'DIAGRAMA: Sección Constructiva Vidrio Laminado': 'photo-1542361345-89ce52fa46ba', // Layers/Glass
    'Unidad DVH con Espaciador de Aluminio': 'photo-1522204523234-8729aa6e3d5f', // Window/Office
    'Espejo Decorativo con Grabado Láser': 'photo-1618220179428-22790b46a011', // Mirror/Interior
    'Detalle Herraje Oscilobatiente Multi-Cierre': 'photo-1542013936693-884638332954', // Hardware/Metal
    'Sistema Corredizo 4 Hojas en Terraza': 'photo-1600585154340-be6161a56a0c', // Sliding doors
    'Instalación de Curtain Wall - Edificio de Oficinas': 'photo-1486406146926-c627a92ad1ab', // Curtain Wall
    'Oficina Corporativa con Divisiones de Aluminio-Vidrio': 'photo-1497366216548-37526070297c', // Office dividers
    'Pasamanos Inox AISI 304 - Acabado Pulido': 'photo-1530124566582-a618bc2615dc', // Steel railing
    'Estructura Metálica - Cubierta Industrial': 'photo-1503387762-592deb58ef4e', // Metal structure
    'Pérgola Estructural con Techo de Policarbonato': 'photo-1513694203232-719a280e022f', // Pergola/Roof
    'Puerta de Seguridad con Cerradura Multipunto': 'photo-1509644851169-2acc08aa25b5', // Security door
    'Estación de Trabajo Tipo Bench - 4 Puestos': 'photo-1524758631624-e2822e304c36', // Office bench
    'División Arquitectónica - Enchape de Nogal': 'photo-1517581177682-a085bb7ffb15', // Wood panel office
    'Revestimiento de Pared - Listones de Cedro': 'photo-1520699049698-acd2fceb8cc0', // Cedar wall
    'Vista Frontal Fachada Acristalada': 'photo-1431542285393-6214cbafaf4a', // Building facade
    'Lobby Principal con Pasamanos Inox': 'photo-1541888062-81788c035031', // Modern lobby
    'Zona de Embarque - Ventanas Acústicas': 'photo-1436491865332-7a61a109cc05', // Airport windows
    'Fachada Posterior - Sistema Corredizo': 'photo-1464938050520-ef2270bb8ce8', // Sliding glass facade
    'Pérgola en Área Social': 'photo-1600607686527-6fb886090705', // Modern house pergola
    'Detalle Cercha Metálica - Cubierta': 'photo-1504307651254-35680f356f58' // Roof structure
};

const regex = /<div class="bg-slate-[12]00[^>]*aspect-([^" ]+)[^>]*>[\s\S]*?\[(?:FOTO|DIAGRAMA):\s*(.*?)\][\s\S]*?<\/div>\s*<\/div>/g;

let count = 0;
html = html.replace(regex, (match, aspect, altText) => {
    count++;
    // some alts have extra text, just try to match partially if needed, but our keys are exact matches
    let id = images[altText.trim()];
    if (!id) {
        // Fallback random
        id = 'photo-1486406146926-c627a92ad1ab';
        console.log("No ID found for:", altText);
    }
    
    const url = `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;
    const aspectClass = aspect === 'square' ? 'aspect-square' : `aspect-[${aspect}]`;
    
    return `<img src="${url}" alt="${altText}" class="w-full h-full object-cover rounded-sm ${aspectClass} shadow-sm mb-4 print:shadow-none" />`;
});

fs.writeFileSync(htmlPath, html);
console.log('Replaced', count, 'images.');
