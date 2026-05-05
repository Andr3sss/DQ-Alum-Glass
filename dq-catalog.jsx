import React from 'react';
import { Shield, Award, CheckCircle2, Building2, Camera, Phone, Mail, MapPin, Droplets, Wind, Lock, Layers, Grid3x3, Ruler, Wrench, Users, Target } from 'lucide-react';

export default function DQAlumGlassCatalog() {
  return (
    <div className="bg-white font-['Inter']">
      {/* PÁGINA 1: PORTADA */}
      <div className="w-full min-h-screen flex flex-col justify-between bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white p-16 break-after-page relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative z-10">
          <div className="inline-block px-6 py-2 bg-[#004791] text-white text-sm font-medium tracking-wider mb-8">
            PORTAFOLIO TÉCNICO 2025
          </div>
        </div>

        <div className="relative z-10 space-y-6">
          <h1 className="font-['Montserrat'] font-black text-7xl tracking-tight leading-none">
            DQ ALUM-GLASS
          </h1>
          <div className="h-1 w-32 bg-[#004791]"></div>
          <p className="font-['Montserrat'] text-2xl font-light tracking-wide text-slate-200 max-w-3xl">
            Ingeniería en Vidrio, Aluminio y Soluciones Metálicas Integrales
          </p>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed mt-6">
            Especialistas en sistemas arquitectónicos de alta especificación para proyectos comerciales, residenciales e industriales. Certificación ISO 9001 en procesos de manufactura y montaje.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-8 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>0984588362</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>dqalumglass@hotmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Quito, Ecuador</span>
          </div>
        </div>
      </div>

      {/* PÁGINA 2: QUIÉNES SOMOS */}
      <div className="w-full min-h-screen bg-white p-16 break-after-page">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-[#004791] text-sm font-semibold tracking-widest mb-3">EMPRESA</div>
            <h2 className="font-['Montserrat'] font-bold text-5xl text-slate-800 mb-4">Quiénes Somos</h2>
            <div className="h-1 w-24 bg-[#004791]"></div>
          </div>

          <div className="grid grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed text-lg">
                <span className="font-bold text-slate-800">DQ ALUM-GLASS</span> es una empresa ecuatoriana con más de <span className="font-semibold text-[#004791]">25 años de trayectoria</span> en el diseño, fabricación e instalación de sistemas constructivos en vidrio, aluminio y acero inoxidable. Nos especializamos en soluciones arquitectónicas integrales para proyectos de alto nivel.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Nuestro equipo técnico está conformado por ingenieros civiles, arquitectos y maestros especializados en metalmecánica, garantizando precisión milimétrica en cada fase del proyecto: desde el levantamiento arquitectónico hasta la entrega final con certificación de obra.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Trabajamos bajo estrictos protocolos de calidad alineados con normativas internacionales ASTM, DIN y NTE INEN, asegurando durabilidad, seguridad estructural y estética impecable en cada instalación.
              </p>
            </div>

            <div className="bg-slate-100 rounded-sm flex items-center justify-center aspect-[4/3] relative">
              <Camera className="w-16 h-16 text-slate-300" />
              <div className="absolute bottom-4 left-4 right-4 text-slate-500 text-xs font-medium">
                [FOTO: Taller de Producción - Maquinaria CNC y Estación de Corte de Aluminio]
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-['Montserrat'] font-bold text-2xl text-slate-800 mb-8">Valores Institucionales</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="border-l-4 border-[#004791] pl-6 py-4">
                <div className="flex items-start gap-3 mb-2">
                  <Shield className="w-6 h-6 text-[#004791] flex-shrink-0 mt-1" />
                  <h4 className="font-['Montserrat'] font-semibold text-slate-800 text-lg">Cumplimiento Normativo</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Adherencia rigurosa a códigos de construcción nacionales e internacionales, con trazabilidad completa de materiales.
                </p>
              </div>

              <div className="border-l-4 border-[#004791] pl-6 py-4">
                <div className="flex items-start gap-3 mb-2">
                  <Target className="w-6 h-6 text-[#004791] flex-shrink-0 mt-1" />
                  <h4 className="font-['Montserrat'] font-semibold text-slate-800 text-lg">Precisión Industrial</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Tolerancias de fabricación de ±0.5mm en perfiles de aluminio, garantizando ajuste perfecto en obra.
                </p>
              </div>

              <div className="border-l-4 border-[#004791] pl-6 py-4">
                <div className="flex items-start gap-3 mb-2">
                  <Award className="w-6 h-6 text-[#004791] flex-shrink-0 mt-1" />
                  <h4 className="font-['Montserrat'] font-semibold text-slate-800 text-lg">Garantía Extendida</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  3 años de garantía estructural en sistemas de fachada y 5 años en herrajes de origen europeo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PÁGINA 3: CATÁLOGO VIDRIO */}
      <div className="w-full min-h-screen bg-slate-50 p-16 break-after-page">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-[#004791] text-sm font-semibold tracking-widest mb-3">LÍNEA TÉCNICA 01</div>
            <h2 className="font-['Montserrat'] font-bold text-5xl text-slate-800 mb-4">Sistemas de Acristalamiento</h2>
            <div className="h-1 w-24 bg-[#004791]"></div>
          </div>

          <div className="space-y-8">
            {/* Producto 1 */}
            <div className="bg-white border-l-4 border-[#004791] p-8 shadow-sm">
              <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2 space-y-4">
                  <h3 className="font-['Montserrat'] font-bold text-2xl text-slate-800">Vidrio Templado de Seguridad</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Cristal float templado térmicamente según norma ASTM C1048, con resistencia a impacto 5 veces superior al vidrio recocido. Fragmentación en pequeñas partículas sin aristas cortantes en caso de rotura. Disponible en espesores de 8mm y 10mm.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#004791] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Resistencia Térmica</div>
                        <div className="text-slate-600 text-sm">Soporta diferencial térmico hasta 250°C</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#004791] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Aplicaciones</div>
                        <div className="text-slate-600 text-sm">Fachadas, mamparas, puertas, barandas</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-sm flex flex-col items-center justify-center aspect-square p-4">
                  <Camera className="w-12 h-12 text-slate-300 mb-3" />
                  <div className="text-slate-500 text-xs text-center font-medium px-2">
                    [FOTO: Panel de Vidrio Templado 10mm Instalado]
                  </div>
                </div>
              </div>
            </div>

            {/* Producto 2 */}
            <div className="bg-white border-l-4 border-slate-400 p-8 shadow-sm">
              <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2 space-y-4">
                  <h3 className="font-['Montserrat'] font-bold text-2xl text-slate-800">Vidrio Laminado de Seguridad</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Compuesto por dos o más láminas de vidrio float unidas mediante películas de PVB (Polivinil Butiral) bajo proceso de autoclave. En caso de rotura, los fragmentos permanecen adheridos a la película, evitando desprendimientos. Ideal para áreas de alto tránsito y techos acristalados.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start gap-3">
                      <Lock className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Configuración Típica</div>
                        <div className="text-slate-600 text-sm">6mm + PVB 0.76mm + 6mm</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Protección UV</div>
                        <div className="text-slate-600 text-sm">Bloqueo 99% radiación ultravioleta</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-sm flex flex-col items-center justify-center aspect-square p-4">
                  <Layers className="w-12 h-12 text-slate-300 mb-3" />
                  <div className="text-slate-500 text-xs text-center font-medium px-2">
                    [DIAGRAMA: Sección Constructiva Vidrio Laminado]
                  </div>
                </div>
              </div>
            </div>

            {/* Producto 3 */}
            <div className="bg-white border-l-4 border-slate-400 p-8 shadow-sm">
              <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2 space-y-4">
                  <h3 className="font-['Montserrat'] font-bold text-2xl text-slate-800">Doble Vidriado Hermético (DVH) - Control Acústico</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Sistema de cámara sellada con dos láminas de vidrio separadas por cámara de aire deshidratado o gas argón. Proporciona aislamiento térmico (hasta R-3.2) y reducción acústica de 35-42 dB según configuración. Sellado perimetral con silicona estructural de alta adherencia.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start gap-3">
                      <Wind className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Eficiencia Energética</div>
                        <div className="text-slate-600 text-sm">Reducción 30% transferencia térmica</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Droplets className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Anti-Condensación</div>
                        <div className="text-slate-600 text-sm">Desecante molecular en espaciador</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-sm flex flex-col items-center justify-center aspect-square p-4">
                  <Camera className="w-12 h-12 text-slate-300 mb-3" />
                  <div className="text-slate-500 text-xs text-center font-medium px-2">
                    [FOTO: Unidad DVH con Espaciador de Aluminio]
                  </div>
                </div>
              </div>
            </div>

            {/* Producto 4 */}
            <div className="bg-white border-l-4 border-slate-400 p-8 shadow-sm">
              <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2 space-y-4">
                  <h3 className="font-['Montserrat'] font-bold text-2xl text-slate-800">Espejos y Cristales Decorativos</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Espejos de plata de 4mm y 6mm con respaldo protector de cobre y pintura epóxica bicapa. Disponibles en acabados: claro, bronce, gris y champagne. Cristales decorativos con aplicaciones de chorro de arena, grabado ácido, serigrafía cerámica y laminado con texturas interlaminares.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Diseño Personalizado</div>
                        <div className="text-slate-600 text-sm">Patronaje CAD para vinilados complejos</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Aplicaciones Interiores</div>
                        <div className="text-slate-600 text-sm">Lobbies, baños, divisiones de oficina</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-sm flex flex-col items-center justify-center aspect-square p-4">
                  <Camera className="w-12 h-12 text-slate-300 mb-3" />
                  <div className="text-slate-500 text-xs text-center font-medium px-2">
                    [FOTO: Espejo Decorativo con Grabado Láser]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PÁGINA 4: CATÁLOGO ALUMINIO */}
      <div className="w-full min-h-screen bg-white p-16 break-after-page">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-[#004791] text-sm font-semibold tracking-widest mb-3">LÍNEA TÉCNICA 02</div>
            <h2 className="font-['Montserrat'] font-bold text-5xl text-slate-800 mb-4">Carpintería de Aluminio</h2>
            <div className="h-1 w-24 bg-[#004791]"></div>
          </div>

          <div className="space-y-8">
            {/* Sistema 1 */}
            <div className="bg-slate-50 border-l-4 border-[#004791] p-8">
              <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2 space-y-4">
                  <h3 className="font-['Montserrat'] font-bold text-2xl text-slate-800">Ventanería de Alta Prestación - Series Europeas</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Perfiles extruidos en aleación 6063-T5 con ruptura de puente térmico mediante poliamida reforzada PA66-GF25. Sistemas practicables (abatibles), oscilobatientes y fijos con herrajes de origen alemán marca ROTO o equivalente. Sección mínima 70mm con triple junta de EPDM para estanqueidad clase E1500.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start gap-3">
                      <Ruler className="w-5 h-5 text-[#004791] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Transmitancia Térmica</div>
                        <div className="text-slate-600 text-sm">Uw hasta 1.4 W/m²K (RPT 70mm)</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Wind className="w-5 h-5 text-[#004791] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Permeabilidad al Aire</div>
                        <div className="text-slate-600 text-sm">Clase 4 (máxima estanqueidad)</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-200 rounded-sm flex flex-col items-center justify-center aspect-square p-4">
                  <Camera className="w-12 h-12 text-slate-400 mb-3" />
                  <div className="text-slate-500 text-xs text-center font-medium px-2">
                    [FOTO: Detalle Herraje Oscilobatiente Multi-Cierre]
                  </div>
                </div>
              </div>
            </div>

            {/* Sistema 2 */}
            <div className="bg-slate-50 border-l-4 border-slate-400 p-8">
              <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2 space-y-4">
                  <h3 className="font-['Montserrat'] font-bold text-2xl text-slate-800">Sistemas Corredizos y Proyectables</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Correderas de dos, tres y cuatro hojas sobre rieles de aluminio con rodamientos de doble rodillo y cojinetes de acero AISI 304. Sistemas elevables (lift & slide) con capacidad de carga hasta 400kg por hoja. Proyectables guillotina con resortes a gas calibrados y topes de seguridad anti-caída.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Dimensiones Máximas</div>
                        <div className="text-slate-600 text-sm">Hojas hasta 3.50m altura × 1.80m ancho</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Seguridad</div>
                        <div className="text-slate-600 text-sm">Cerraduras embutidas con cilindro europeo</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-200 rounded-sm flex flex-col items-center justify-center aspect-square p-4">
                  <Camera className="w-12 h-12 text-slate-400 mb-3" />
                  <div className="text-slate-500 text-xs text-center font-medium px-2">
                    [FOTO: Sistema Corredizo 4 Hojas en Terraza]
                  </div>
                </div>
              </div>
            </div>

            {/* Sistema 3 */}
            <div className="bg-slate-50 border-l-4 border-slate-400 p-8">
              <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2 space-y-4">
                  <h3 className="font-['Montserrat'] font-bold text-2xl text-slate-800">Fachadas Flotantes (Curtain Wall) - Muro Cortina</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Sistema modular stick o unitizado para envolventes no portantes. Montantes verticales y travesaños horizontales en aleación estructural con anclajes mecánicos calculados según cargas de viento (hasta 2.5 kN/m²). Drenaje oculto con cámaras de descompresión. Sellado perimetral de juntas con silicona estructural bicomponente.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Alturas Comerciales</div>
                        <div className="text-slate-600 text-sm">Aplicable hasta 40 pisos con ingeniería estructural</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Resistencia Sísmica</div>
                        <div className="text-slate-600 text-sm">Juntas de dilatación cada 12m</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-200 rounded-sm flex flex-col items-center justify-center aspect-square p-4">
                  <Camera className="w-12 h-12 text-slate-400 mb-3" />
                  <div className="text-slate-500 text-xs text-center font-medium px-2">
                    [FOTO: Instalación de Curtain Wall - Edificio de Oficinas]
                  </div>
                </div>
              </div>
            </div>

            {/* Sistema 4 */}
            <div className="bg-slate-50 border-l-4 border-slate-400 p-8">
              <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2 space-y-4">
                  <h3 className="font-['Montserrat'] font-bold text-2xl text-slate-800">Divisiones de Oficina - Tabiquería Modular</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Paneles prefabricados con bastidor de aluminio y relleno de vidrio simple, doble o ciegos con MDF/melamina. Alturas modulares desde 2.40m hasta 3.60m. Sistema de anclaje a piso y cielo mediante perfiles "U" con nivelación ajustable ±20mm. Puertas batientes con bisagras hidráulicas y cierre suave.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start gap-3">
                      <Grid3x3 className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Configuración Flexible</div>
                        <div className="text-slate-600 text-sm">Paneles desmontables y reubicables</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Paso de Instalaciones</div>
                        <div className="text-slate-600 text-sm">Canaletas para cableado estructurado</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-200 rounded-sm flex flex-col items-center justify-center aspect-square p-4">
                  <Camera className="w-12 h-12 text-slate-400 mb-3" />
                  <div className="text-slate-500 text-xs text-center font-medium px-2">
                    [FOTO: Oficina Corporativa con Divisiones de Aluminio-Vidrio]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PÁGINA 5: METALMECÁNICA */}
      <div className="w-full min-h-screen bg-slate-50 p-16 break-after-page">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-[#004791] text-sm font-semibold tracking-widest mb-3">LÍNEA TÉCNICA 03</div>
            <h2 className="font-['Montserrat'] font-bold text-5xl text-slate-800 mb-4">Metalmecánica y Acero Inoxidable</h2>
            <div className="h-1 w-24 bg-[#004791]"></div>
          </div>

          <div className="space-y-8">
            {/* Producto 1 */}
            <div className="bg-white border-l-4 border-[#004791] p-8 shadow-sm">
              <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2 space-y-4">
                  <h3 className="font-['Montserrat'] font-bold text-2xl text-slate-800">Acero Inoxidable - Grados AISI 304 y 316</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Fabricación de pasamanos, barandas y elementos arquitectónicos en acero inoxidable austenítico. AISI 304 para interiores (18% Cr, 8% Ni) y AISI 316 para exteriores y ambientes corrosivos (adición de 2% Mo). Acabados disponibles: pulido espejo #8, satinado #4, brushed y bead blast. Soldadura TIG con atmósfera de argón.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-[#004791] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Resistencia Corrosión</div>
                        <div className="text-slate-600 text-sm">AISI 316: zonas costeras y piscinas</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#004791] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Aplicaciones Sanitarias</div>
                        <div className="text-slate-600 text-sm">Hospitales, laboratorios, cocinas industriales</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-sm flex flex-col items-center justify-center aspect-square p-4">
                  <Camera className="w-12 h-12 text-slate-300 mb-3" />
                  <div className="text-slate-500 text-xs text-center font-medium px-2">
                    [FOTO: Pasamanos Inox AISI 304 - Acabado Pulido]
                  </div>
                </div>
              </div>
            </div>

            {/* Producto 2 */}
            <div className="bg-white border-l-4 border-slate-400 p-8 shadow-sm">
              <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2 space-y-4">
                  <h3 className="font-['Montserrat'] font-bold text-2xl text-slate-800">Estructuras de Acero Pesado - Soldadura Certificada</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Fabricación de vigas, columnas, cerchas y estructuras metálicas según normativa AISC 360. Perfiles laminados en caliente (IPE, HEB, UPN) y tubería estructural cuadrada/rectangular. Soldadura SMAW con electrodos E6013/E7018 o proceso GMAW (MIG). Aplicación de anticorrosivo epóxico y pintura de acabado poliuretano.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start gap-3">
                      <Wrench className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Capacidad de Taller</div>
                        <div className="text-slate-600 text-sm">Plegado hasta 6m, corte plasma CNC</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Montaje en Sitio</div>
                        <div className="text-slate-600 text-sm">Cuadrillas certificadas en trabajo en altura</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-sm flex flex-col items-center justify-center aspect-square p-4">
                  <Camera className="w-12 h-12 text-slate-300 mb-3" />
                  <div className="text-slate-500 text-xs text-center font-medium px-2">
                    [FOTO: Estructura Metálica - Cubierta Industrial]
                  </div>
                </div>
              </div>
            </div>

            {/* Producto 3 */}
            <div className="bg-white border-l-4 border-slate-400 p-8 shadow-sm">
              <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2 space-y-4">
                  <h3 className="font-['Montserrat'] font-bold text-2xl text-slate-800">Pérgolas Estructurales con Recubrimiento</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Estructuras autoportantes en perfiles de acero galvanizado o aluminio estructural. Recubrimientos en policarbonato celular de 6mm-10mm, vidrio laminado de seguridad o paneles de chapa tipo sándwich. Sistemas de drenaje integrado con pendientes mínimas del 2%. Anclajes químicos certificados para losas de hormigón.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start gap-3">
                      <Ruler className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Luces Estructurales</div>
                        <div className="text-slate-600 text-sm">Vigas de hasta 8m sin columnas intermedias</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Wind className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Diseño Sísmico</div>
                        <div className="text-slate-600 text-sm">Cálculo según NEC-SE-HM para zona IV</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-sm flex flex-col items-center justify-center aspect-square p-4">
                  <Camera className="w-12 h-12 text-slate-300 mb-3" />
                  <div className="text-slate-500 text-xs text-center font-medium px-2">
                    [FOTO: Pérgola Estructural con Techo de Policarbonato]
                  </div>
                </div>
              </div>
            </div>

            {/* Producto 4 */}
            <div className="bg-white border-l-4 border-slate-400 p-8 shadow-sm">
              <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2 space-y-4">
                  <h3 className="font-['Montserrat'] font-bold text-2xl text-slate-800">Cerrajería Técnica y Herrajes de Seguridad</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Puertas de seguridad en lámina de acero calibre 16-18 con refuerzos internos. Cerraduras multipunto de alta seguridad con cilindros antibumping y antitaladro. Bisagras de bolas con rodamientos sellados. Puertas cortafuego certificadas con resistencia F-60 y F-120. Acabados en pintura electrostática horneable RAL a elección.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start gap-3">
                      <Lock className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Grados de Seguridad</div>
                        <div className="text-slate-600 text-sm">RC2, RC3 según EN 1627</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Aplicaciones</div>
                        <div className="text-slate-600 text-sm">Bóvedas, salas eléctricas, accesos principales</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-sm flex flex-col items-center justify-center aspect-square p-4">
                  <Camera className="w-12 h-12 text-slate-300 mb-3" />
                  <div className="text-slate-500 text-xs text-center font-medium px-2">
                    [FOTO: Puerta de Seguridad con Cerradura Multipunto]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PÁGINA 6: MOBILIARIO */}
      <div className="w-full min-h-screen bg-white p-16 break-after-page">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-[#004791] text-sm font-semibold tracking-widest mb-3">LÍNEA TÉCNICA 04</div>
            <h2 className="font-['Montserrat'] font-bold text-5xl text-slate-800 mb-4">Mobiliario Modular Corporativo</h2>
            <div className="h-1 w-24 bg-[#004791]"></div>
          </div>

          <div className="space-y-8">
            {/* Sistema 1 */}
            <div className="bg-slate-50 border-l-4 border-[#004791] p-8">
              <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2 space-y-4">
                  <h3 className="font-['Montserrat'] font-bold text-2xl text-slate-800">Estaciones de Trabajo Modulares</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Sistemas de puestos de trabajo en melamina RH de 18mm sobre bastidor metálico con niveladores. Configuraciones lineales, en "L", enfrentadas o tipo bench. Superficies de trabajo de 120×60cm, 140×70cm o 160×80cm. Canaletas metálicas para gestión de cables. Paneles divisorios acústicos tapizados con espuma fonoabsorbente de 25mm.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start gap-3">
                      <Grid3x3 className="w-5 h-5 text-[#004791] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Diseño Ergonómico</div>
                        <div className="text-slate-600 text-sm">Alturas de trabajo 72-75cm según norma</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#004791] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Accesorios Integrados</div>
                        <div className="text-slate-600 text-sm">Cajoneras móviles, repisas aéreas, pedestales</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-200 rounded-sm flex flex-col items-center justify-center aspect-square p-4">
                  <Camera className="w-12 h-12 text-slate-400 mb-3" />
                  <div className="text-slate-500 text-xs text-center font-medium px-2">
                    [FOTO: Estación de Trabajo Tipo Bench - 4 Puestos]
                  </div>
                </div>
              </div>
            </div>

            {/* Sistema 2 */}
            <div className="bg-slate-50 border-l-4 border-slate-400 p-8">
              <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2 space-y-4">
                  <h3 className="font-['Montserrat'] font-bold text-2xl text-slate-800">Divisiones y Panelería Arquitectónica</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Paneles ciegos o con ventanas en MDF de 15mm revestido con melamina texturizada o enchapado en madera natural (cedro, nogal, roble). Bastidores perimetrales en aluminio anodizado natural o negro mate. Sistemas de anclaje oculto mediante perfiles omega. Alturas estándar 2.10m a 3.00m. Puertas batientes con bisagras de cazoleta de cierre suave Blum o Hettich.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Acabados Premium</div>
                        <div className="text-slate-600 text-sm">Laca poliuretano UV, laminados de alta presión</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Layers className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Aplicaciones</div>
                        <div className="text-slate-600 text-sm">Salas de reunión, gerencias, recepción</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-200 rounded-sm flex flex-col items-center justify-center aspect-square p-4">
                  <Camera className="w-12 h-12 text-slate-400 mb-3" />
                  <div className="text-slate-500 text-xs text-center font-medium px-2">
                    [FOTO: División Arquitectónica - Enchape de Nogal]
                  </div>
                </div>
              </div>
            </div>

            {/* Sistema 3 */}
            <div className="bg-slate-50 border-l-4 border-slate-400 p-8">
              <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2 space-y-4">
                  <h3 className="font-['Montserrat'] font-bold text-2xl text-slate-800">Acabados en Madera y Metal Combinados</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Soluciones de revestimiento interior con paneles de madera contrachapada fenólica de 9mm o 12mm sobre estructura de perfiles de aluminio. Aplicaciones en muros, cielos rasos registrables y elementos decorativos. Juntas modulares de 5mm para dilatación. Listones de madera maciza con tratamiento antixilófago y barniz poliuretano mate o satinado en tres capas.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Sostenibilidad</div>
                        <div className="text-slate-600 text-sm">Maderas certificadas FSC disponibles</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Clasificación al Fuego</div>
                        <div className="text-slate-600 text-sm">Tratamientos ignífugos clase B disponibles</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-200 rounded-sm flex flex-col items-center justify-center aspect-square p-4">
                  <Camera className="w-12 h-12 text-slate-400 mb-3" />
                  <div className="text-slate-500 text-xs text-center font-medium px-2">
                    [FOTO: Revestimiento de Pared - Listones de Cedro]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PÁGINA 7: PROYECTOS DESTACADOS */}
      <div className="w-full min-h-screen bg-slate-50 p-16 break-after-page">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-[#004791] text-sm font-semibold tracking-widest mb-3">EXPERIENCIA</div>
            <h2 className="font-['Montserrat'] font-bold text-5xl text-slate-800 mb-4">Proyectos Destacados</h2>
            <div className="h-1 w-24 bg-[#004791]"></div>
            <p className="text-slate-600 mt-4 max-w-3xl">
              Más de 350 proyectos ejecutados en los últimos 10 años para clientes corporativos, institucionales y residenciales de alto estándar en Ecuador.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* Proyecto 1 */}
            <div className="bg-white p-6 shadow-sm">
              <div className="bg-slate-200 aspect-[16/10] rounded-sm flex flex-col items-center justify-center mb-4 p-4">
                <Building2 className="w-16 h-16 text-slate-400 mb-2" />
                <div className="text-slate-500 text-xs text-center font-medium px-2">
                  [FOTO: Vista Frontal Fachada Acristalada]
                </div>
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl text-slate-800 mb-2">Edificio MAEL - Quito</h3>
              <div className="text-sm text-slate-500 mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Av. Naciones Unidas, sector La Carolina</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Suministro e instalación de fachada flotante tipo curtain wall en 9 pisos. 1,200m² de vidrio DVH 6+12+6mm con Low-E. Perfiles de aluminio RPT serie 60mm. Tiempo de ejecución: 4 meses.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">Curtain Wall</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">DVH</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">Edificio Corporativo</span>
              </div>
            </div>

            {/* Proyecto 2 */}
            <div className="bg-white p-6 shadow-sm">
              <div className="bg-slate-200 aspect-[16/10] rounded-sm flex flex-col items-center justify-center mb-4 p-4">
                <Building2 className="w-16 h-16 text-slate-400 mb-2" />
                <div className="text-slate-500 text-xs text-center font-medium px-2">
                  [FOTO: Lobby Principal con Pasamanos Inox]
                </div>
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl text-slate-800 mb-2">Liberty Plaza - Cumbayá</h3>
              <div className="text-sm text-slate-500 mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Cumbayá, Urbanización San Juan Alto</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Proyecto integral: barandas en acero inoxidable AISI 304 pulido espejo (80m lineales), divisiones de oficina modulares (250m²), puertas de vidrio templado con herrajes Dorma. Cliente: Promotora Inmobiliaria Clave S.A.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">Inox AISI 304</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">Divisiones Oficina</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">Comercial</span>
              </div>
            </div>

            {/* Proyecto 3 */}
            <div className="bg-white p-6 shadow-sm">
              <div className="bg-slate-200 aspect-[16/10] rounded-sm flex flex-col items-center justify-center mb-4 p-4">
                <Building2 className="w-16 h-16 text-slate-400 mb-2" />
                <div className="text-slate-500 text-xs text-center font-medium px-2">
                  [FOTO: Zona de Embarque - Ventanas Acústicas]
                </div>
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl text-slate-800 mb-2">Aeropuerto Mariscal Sucre</h3>
              <div className="text-sm text-slate-500 mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Tababela, zona de servicios administrativos</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Renovación de ventanería en oficinas administrativas: 42 unidades oscilobatientes con RPT 70mm y DVH acústico de 42dB. Cumplimiento normativa aeroportuaria. Coordinación con Quiport para instalación nocturna sin afectar operaciones.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">RPT</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">DVH Acústico</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">Infraestructura</span>
              </div>
            </div>

            {/* Proyecto 4 */}
            <div className="bg-white p-6 shadow-sm">
              <div className="bg-slate-200 aspect-[16/10] rounded-sm flex flex-col items-center justify-center mb-4 p-4">
                <Building2 className="w-16 h-16 text-slate-400 mb-2" />
                <div className="text-slate-500 text-xs text-center font-medium px-2">
                  [FOTO: Fachada Posterior - Sistema Corredizo]
                </div>
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl text-slate-800 mb-2">Residencia Privada - La Carolina</h3>
              <div className="text-sm text-slate-500 mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Av. República del Salvador, sector financiero</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Residencia de lujo: sistema corredizo lift & slide de 4 hojas (hojas de 3.20m × 2.80m cada una), vidrio laminado 6+6mm. Pérgola estructural en acero con policarbonato de 10mm (35m²). Barandas perimetrales en acero inox + vidrio templado.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">Lift & Slide</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">Pérgola</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">Residencial</span>
              </div>
            </div>

            {/* Proyecto 5 */}
            <div className="bg-white p-6 shadow-sm">
              <div className="bg-slate-200 aspect-[16/10] rounded-sm flex flex-col items-center justify-center mb-4 p-4">
                <Building2 className="w-16 h-16 text-slate-400 mb-2" />
                <div className="text-slate-500 text-xs text-center font-medium px-2">
                  [FOTO: Open Space - Estaciones de Trabajo]
                </div>
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl text-slate-800 mb-2">Oficinas Corporativas TechHub</h3>
              <div className="text-sm text-slate-500 mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Edificio Platinium, piso 12</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Amoblamiento integral para 45 puestos de trabajo: sistema modular tipo bench con divisiones acústicas, salas de reunión con paneles de melamina y vidrio, archivadores metálicos. Superficie total: 320m². Plazo: 6 semanas desde medición hasta entrega.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">Mobiliario</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">Acústica</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">Corporativo</span>
              </div>
            </div>

            {/* Proyecto 6 */}
            <div className="bg-white p-6 shadow-sm">
              <div className="bg-slate-200 aspect-[16/10] rounded-sm flex flex-col items-center justify-center mb-4 p-4">
                <Building2 className="w-16 h-16 text-slate-400 mb-2" />
                <div className="text-slate-500 text-xs text-center font-medium px-2">
                  [FOTO: Detalle Cercha Metálica - Cubierta]
                </div>
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl text-slate-800 mb-2">Bodega Industrial - Calderón</h3>
              <div className="text-sm text-slate-500 mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Panamericana Norte km 14, Parque Industrial</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Estructura metálica para bodega de 800m²: pórticos en perfiles IPE 300 a cada 6m, correas en IPE 140, cubierta tipo sándwich aislante. Portones enrollables con motor tubular. Luminarias LED industriales integradas. Entrega llave en mano.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">Estructura Metálica</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">Industrial</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">Llave en Mano</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PÁGINA 8: CONTRAPORTADA / CONTACTO */}
      <div className="w-full min-h-screen bg-slate-50 text-slate-800 p-16 flex flex-col justify-between relative overflow-hidden">
        
        <div className="relative z-10 mt-12">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="w-16 h-1 bg-[#004791] mx-auto mb-8"></div>
            <h2 className="font-['Montserrat'] font-black text-5xl md:text-6xl text-[#004791] leading-tight">
              Materialice su proyecto con<br />precisión industrial
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Solicite su cotización técnica personalizada. Nuestro equipo de ingeniería analizará sus planos y especificaciones para entregar una propuesta detallada en 48 horas hábiles.
            </p>
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full my-12">
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-8 rounded-sm border-t-4 border-[#004791] shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-[#004791]" />
                <h3 className="font-['Montserrat'] font-bold text-xl text-slate-800">Teléfonos de Contacto</h3>
              </div>
              <div className="space-y-2 text-slate-600">
                <p className="text-lg">WhatsApp: <span className="font-bold text-slate-800">0984 588 362</span></p>
                <p className="text-lg">Oficina: <span className="font-bold text-slate-800">0995 183 548</span></p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-sm border-t-4 border-[#004791] shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-[#004791]" />
                <h3 className="font-['Montserrat'] font-bold text-xl text-slate-800">Correo Electrónico</h3>
              </div>
              <div className="space-y-2 text-slate-600">
                <p className="text-lg font-bold text-slate-800">dqalumglass@hotmail.com</p>
                <p className="text-sm">Respuesta en máximo 24 horas hábiles</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-sm border-t-4 border-[#004791] shadow-sm">
            <div className="flex items-start gap-4">
              <MapPin className="w-8 h-8 text-[#004791] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-['Montserrat'] font-bold text-xl text-slate-800 mb-2">Ubicación - Taller de Producción</h3>
                <p className="text-lg text-slate-600 mb-1">Panamericana Norte km 14/2</p>
                <p className="text-lg text-slate-600 mb-3">Quito - Ecuador</p>
                <p className="text-sm text-slate-500 font-medium">Atención a clientes: Lunes a Viernes 08:00 - 17:30 | Sábados 09:00 - 13:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center space-y-4 pt-8 border-t border-slate-200">
          <p className="font-['Montserrat'] font-bold text-2xl text-[#004791]">DQ ALUM-GLASS</p>
          <p className="text-slate-600 text-sm font-medium">
            Ingeniería en Vidrio, Aluminio y Soluciones Metálicas Integrales | RUC: 1234567890001
          </p>
          <p className="text-slate-400 text-xs">
            © 2025 DQ ALUM-GLASS. Todos los derechos reservados. Certificación ISO 9001:2015 en proceso.
          </p>
        </div>
      </div>
    </div>
  );
}
