# Plan de Implementación: Tienda "Prendas Tejidas a Crochet" (Estilo Adidas Chile)

Este plan propone crear una plataforma e-commerce de alta fidelidad para el emprendimiento **Prendas Tejidas a Crochet** (Eslogan: *"Tejiendo tradición, vistiendo exclusividad"*). Replicaremos la estructura, usabilidad y dinamismo premium del sitio de **Adidas Chile** adaptándolo con la identidad corporativa y los productos del documento provisto.

## Carpeta del Proyecto
> [!IMPORTANT]
> El proyecto se construirá en: `C:\Users\USER\.gemini\antigravity-ide\scratch\prendas-tejidas-crochet`.
> Te recomiendo establecer esta subcarpeta como tu **espacio de trabajo activo (active workspace)** en el IDE.

---

## Paleta de Colores de la Marca (Tokens CSS)
Usaremos los colores especificados en tu documento empresarial para lograr una estética natural, artesanal y sumamente premium:
- **Principal (Rosa Empolvado):** `#D4A59A` (Calidez, artesanía, delicadeza)
- **Secundario (Marrón Chocolate):** `#4A3525` (Tierra, solidez, tradición)
- **Acento (Verde Oliva / Sage):** `#8A9A86` (Sostenibilidad, naturaleza)
- **Fondo / Neutro Claro (Crema):** `#FAF8F5` / `#F5F2EB` (Pureza, elegancia)
- **Contraste / Neutro Oscuro:** `#1C1714` (Reemplaza el negro de Adidas para dar un look premium cohesivo)
- **Detalle (Rosa Coral Suave):** `#F29C91` (Detalles de botones e iconos de favoritos)

---

## Propuesta de Diseño y Componentes (Estructura estilo Adidas)

### 1. Barra de Anuncios Superior
- Un cinturón dinámico deslizante (ticker/carousel) con mensajes destacados: *"Envíos nacionales 🇨🇴"*, *"100% hecho a mano por abuelas y madres solteras 🧶"*, *"Lanas ecológicas de fibras vegetales 🌱"*.

### 2. Header Adhesivo (Sticky Header)
- **Logotipo:** Tipografía premium con el isotipo de corazones e hilados.
- **Navegación:** Enlaces principales: *Tops*, *Blusas*, *Trajes de Baño*, *Bolsos*, *Accesorios*.
- **Barra de Búsqueda Integrada:** Estilo Adidas (borde inferior negro que se expande, filtros interactivos automáticos al escribir).
- **Acciones:** Iconos de perfil, favoritos (con contador de items) y bolsa de compra (con contador de artículos en rojo coral).

### 3. Banner de Héroe Principal (Estilo de Campaña Adidas)
- Un slider interactivo con imágenes conceptuales de alta calidad.
- Textos gigantes con alineación izquierda, tipografía de palo seco (*Outfit* o *Inter*) con negrita extrema, simulando los banners de campaña de Adidas.
- Botones de acción rectangulares con bordes negros/marrones sólidos que cambian de color al pasar el cursor (hover inverso).

### 4. Grid de Categorías Populares
- Bloques interactivos con efecto zoom suave al pasar el mouse (hover scale).
- Tarjetas dedicadas a: **Calzado e Indumentaria**, **Salidas de Baño**, **Bolsos y Accesorios**.

### 5. Catálogo de Productos y Filtros Activos (Estilo Listado de Adidas)
- **Filtros Laterales/Superiores:** Botón para filtrar dinámicamente por categoría (Tops, Blusas, Trajes de Baño, Bolsos, Accesorios), precio y disponibilidad de tallas.
- **Tarjetas de Producto:** 
  - Imagen en alta resolución y cambio de imagen en hover.
  - Etiqueta de descuento o "Exclusivo" en la esquina superior.
  - Corazón para agregar a favoritos.
  - Selector rápido de tallas (S, M, L) que se revela al hacer hover sobre la tarjeta (igual al selector rápido de zapatillas en Adidas).
  - Precios formateados en pesos colombianos (CLP / COP - adaptado a COP por ser Florencia, ej: `$85.000 COP`).

### 6. Carrito de Compras Lateral (Shopping Cart Drawer)
- Al hacer clic en el carrito, se desliza un panel lateral derecho.
- Permite ver los productos seleccionados, ajustar las cantidades y calcular el subtotal.
- **Botón de Compra:** Genera automáticamente un enlace personalizado que redirige a **WhatsApp Business**, enviando un mensaje preestablecido con el detalle del pedido (nombre de prendas, tallas, total de compra) para iniciar la atención personalizada, justo como se detalla en tu embudo de ventas.

### 7. Sección de Propósito Social y Sostenibilidad (Storytelling)
- Banner especial a pantalla completa enfocado en el empoderamiento e impacto social: foto representativa del trabajo de tejedoras con el texto: *“Hecho con amor por madres solteras y abuelitas en Florencia. 🌱 Cada puntada sostiene un hogar”*.

### 8. Footer Corporativo
- Caja de suscripción al newsletter con diseño minimalista.
- Redes sociales enlazadas: Instagram, Facebook, TikTok, Pinterest y WhatsApp.

---

## Archivos a Crear

1. #### [NEW] [index.html](file:///C:/Users/USER/.gemini/antigravity-ide/scratch/prendas-tejidas-crochet/index.html)
   - Maquetación HTML5 completa de la tienda.
2. #### [NEW] [style.css](file:///C:/Users/USER/.gemini/antigravity-ide/scratch/prendas-tejidas-crochet/style.css)
   - Estilos CSS del clon de Adidas adaptado a la marca.
3. #### [NEW] [app.js](file:///C:/Users/USER/.gemini/antigravity-ide/scratch/prendas-tejidas-crochet/app.js)
   - Lógica del carrito, favoritos, filtros, menú móvil y envío a WhatsApp.

---

## Plan de Verificación

### Pruebas Automatizadas y Visuales
- Utilizaremos el navegador para validar la adaptabilidad móvil (layouts tipo hamburguesa, carritos que cubren la pantalla de forma táctil).
- Pruebas unitarias/funcionales a través del flujo interactivo de compra en el navegador.

### Verificación Manual
- Agregar varios productos en distintas tallas y verificar el comportamiento dinámico del carrito lateral.
- Validar el filtrado instantáneo por categoría al hacer clic en las pestañas principales.
- Probar el botón final de WhatsApp para asegurar la correcta estructuración del mensaje de pedido.
