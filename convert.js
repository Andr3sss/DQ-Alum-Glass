const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'dq-catalog.jsx');
const htmlPath = path.join(__dirname, 'portafolio.html');

let content = fs.readFileSync(jsxPath, 'utf8');

// Extract JSX inside return ( ... );
const match = content.match(/return\s*\(\s*([\s\S]*?)\s*\);\s*\}\s*$/);
if (!match) {
    console.error("Could not find return statement");
    process.exit(1);
}
let html = match[1];

// 1. Replace className with class
html = html.replace(/className=/g, 'class=');

// 2. Replace comments {/* ... */} with <!-- ... -->
html = html.replace(/\{\/\*([\s\S]*?)\*\/\}/g, '<!-- $1 -->');

// 3. Replace Lucide Icons
const iconMap = {
    'Shield': 'shield',
    'Award': 'award',
    'CheckCircle2': 'check-circle-2',
    'Building2': 'building-2',
    'Camera': 'camera',
    'Phone': 'phone',
    'Mail': 'mail',
    'MapPin': 'map-pin',
    'Droplets': 'droplets',
    'Wind': 'wind',
    'Lock': 'lock',
    'Layers': 'layers',
    'Grid3x3': 'grid-3x3',
    'Ruler': 'ruler',
    'Wrench': 'wrench',
    'Users': 'users',
    'Target': 'target'
};

for (const [component, iconName] of Object.entries(iconMap)) {
    const regex = new RegExp(`<${component}\\s+class="([^"]+)"\\s*\\/?>`, 'g');
    html = html.replace(regex, `<i data-lucide="${iconName}" class="$1"></i>`);
    // Handle cases where there might not be a class
    const regexNoClass = new RegExp(`<${component}\\s*\\/?>`, 'g');
    html = html.replace(regexNoClass, `<i data-lucide="${iconName}"></i>`);
}

// 4. Wrap in boilerplate
const boilerplate = `<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portafolio Digital - DQ ALUM-GLASS</title>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;900&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="icon" href="img/ingenieria-civil.png" type="image/png">
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    
    <style>
        /* Imprimir exacto los colores de fondo */
        @media print {
            body {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }
            .no-print {
                display: none !important;
            }
            @page {
                size: A4 portrait;
                margin: 0;
            }
            .break-after-page {
                page-break-after: always;
                break-after: page;
            }
            /* Reset min-h-screen for print to avoid weird blank spaces */
            .min-h-screen {
                min-height: 100% !important;
            }
        }
    </style>
</head>
<body class="bg-gray-100 antialiased selection:bg-[#004791] selection:text-white">

    <!-- Floating Action Buttons (No se imprimen) -->
    <div class="fixed top-6 right-6 z-50 flex gap-4 no-print">
        <a href="index.html" class="flex items-center gap-2 bg-white text-slate-700 px-4 py-2 rounded-full shadow-lg font-medium hover:bg-slate-50 transition-colors border border-slate-200">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
            Volver al inicio
        </a>
        <button onclick="window.print()" class="flex items-center gap-2 bg-[#004791] text-white px-4 py-2 rounded-full shadow-lg font-medium hover:bg-blue-800 transition-colors">
            <i data-lucide="printer" class="w-4 h-4"></i>
            Descargar PDF
        </button>
    </div>

    <!-- Contenido del Catálogo -->
    <main class="max-w-[210mm] mx-auto bg-white shadow-2xl print:max-w-none print:shadow-none print:mx-0">
        ${html}
    </main>

    <script>
        lucide.createIcons();
    </script>
</body>
</html>`;

fs.writeFileSync(htmlPath, boilerplate);
console.log('Successfully created portafolio.html');
