export interface Stack {
    nombre: string,
    iconos: string
}

export interface Proyectos {
    id: string,
    nombre: string,
    fecha: string,
    descripcion: string,
    link: string,
    imagenes: string[],
    stack: Stack[],
    deployed: boolean,
}

export const proyectosDisponibles: Proyectos[] = [
    {
        id: "melonie",
        nombre: "Rifa Melonie",
        fecha: "Octubre-2024",
        descripcion: `Proyecto personal, landing page hecha para recaudar fondos por tratamiento veterinario de mi perra Melonie, la cual sufrió un accidente. 

        Organize una rifa a beneficio, la cual es administrada a través de esta página.`,
        link: "https://melonie.vercel.app/",
        imagenes: ["rifa_melonie/rifa-melonie-1.JPG", "rifa_melonie/rifa-melonie-2.JPG", "rifa_melonie/rifa-melonie-3.JPG"],
        stack: [
            { iconos: "html-5", nombre: "HTML 5" },
            { iconos: "typescript", nombre: "Typescript" },
            { iconos: "css-3", nombre: "CSS 3" },
            { iconos: "tailwind", nombre: "Tailwind" },
            { iconos: "astro", nombre: "Astro" },
        ],
        deployed: true
    },
    {
        id: "inmuebles_miki",
        nombre: "Inmuebles MIKI",
        fecha: "Junio-2024",
        descripcion: `Proyecto final de Desafio Latam, en el cual tuvimos que crear una página web, en la cual los usuarios registrados pueden registrar sus inmuebles para arrendar, así como también pueden ver arriendos disponibles publicados por otros usuarios y contactarlos a través de esta.

        Cuenta con registro de usuarios, registro de inmuebles, notificaciones de posibles arrendatarios interesados en su inmueble, validaciones de formularios, autenticación de usuario y restricciones dependiendo de permisos de usuario.
        
        También con base de datos para el almacenamiento de la información del usuario, de los inmuebles y conexión a Cloudinary para el almacenamiento de imágenes.`,
        link: "https://inmobiliarias-miki.onrender.com/",
        imagenes: ["inmuebles_miki/inmuebles_miki-1.JPG", "inmuebles_miki/inmuebles_miki-2.JPG", "inmuebles_miki/inmuebles_miki-3.JPG", "inmuebles_miki/inmuebles_miki-4.JPG", "inmuebles_miki/inmuebles_miki-5.JPG", "inmuebles_miki/inmuebles_miki-6.JPG"],
        stack: [
            { iconos: "html-5", nombre: "HTML 5" },
            { iconos: "js", nombre: "JavaScript" },
            { iconos: "css-3", nombre: "CSS 3" },
            { iconos: "bootstrap", nombre: "Bootstrap" },
            { iconos: "python", nombre: "Python" },
            { iconos: "django", nombre: "Django" },
            { iconos: "postgresql", nombre: "PostgreSQL" },
        ],
        deployed: true
    },
    {
        id: "only_flans",
        nombre: "Only Flans Recipes",
        fecha: "Mayo-2024",
        descripcion: `Proyecto educativo de Desafio Latam, en el cual realicé una página dependiendo de los requerimientos exigidos por este, el cual consta de registro de usuario, restricciones dependiendo del usuario, registro de flanes y contacto.
        
        Cuenta con base de datos para el almacenamiento de la información del usuario, distintos flanes y formularios de contacto.`,
        link: "https://ambrosine.pythonanywhere.com/",
        imagenes: ["only_flans/only_flans-1.JPG", "only_flans/only_flans-2.JPG", "only_flans/only_flans-3.JPG", "only_flans/only_flans-4.JPG"],
        stack: [
            { iconos: "html-5", nombre: "HTML 5" },
            { iconos: "js", nombre: "JavaScript" },
            { iconos: "css-3", nombre: "CSS 3" },
            { iconos: "bootstrap", nombre: "Bootstrap" },
            { iconos: "python", nombre: "Python" },
            { iconos: "django", nombre: "Django" },
            { iconos: "postgresql", nombre: "PostgreSQL" },
        ],
        deployed: true
    },
    {
        id: "fake_store",
        nombre: "E-commerce Fake Store",
        fecha: "Marzo-2024",
        descripcion: `Proyecto personal, realizado para aprender a utilizar Next JS, en el cual arme una 'tienda en linea', la cual tiene registro de usuario, permisos de usuario para acceder a ditintas partes de la pagina para administrarla, metodos CRUD para registrar, eliminar y editar los productos de la pagina.
        
        Carrito de compras para agregar los productos requeridos por el usuario, la cual se guarda en el local storage para mantener sus compras entre sesiones, validacion de peticiones al backend con JWT tokens para mayor seguridad de la base de datos
        
        Personalizacion de la pagina con tema oscuro y tema claro controlable en el navbar`,
        link: "https://github.com/Mirkopantufla/nextjs-tailwind-fake-store",
        imagenes: ["fake_store/fake_store-1.JPG", "fake_store/fake_store-2.JPG", "fake_store/fake_store-3.JPG", "fake_store/fake_store-4.JPG", "fake_store/fake_store-5.JPG", "fake_store/fake_store-6.JPG"],
        stack: [
            { iconos: "html-5", nombre: "HTML 5" },
            { iconos: "js", nombre: "JavaScript" },
            { iconos: "css-3", nombre: "CSS 3" },
            { iconos: "tailwind", nombre: "Tailwind" },
            { iconos: "react", nombre: "React JS" },
            { iconos: "python", nombre: "Python" },
            { iconos: "sqlAlchemy", nombre: "SqlAlchemy" },
            { iconos: "flask", nombre: "Flask" },
            { iconos: "postgresql", nombre: "PostgreSQL" },
        ],
        deployed: false
    },
    {
        id: "pajaros_chilenos",
        nombre: "Guía de Pajaros Chilenos",
        fecha: "Septiembre-2023",
        descripcion: `Proyecto personal, realizado para reforzar el consumo de API's en proyectos propios, utilizó API de pajaros chilenos para mostrar la distinta variedad de aves a lo largo de Chile junto con los sonidos de sus cantos, en la gran mayoría.
        
        Este cuenta con guardado de pájaros favoritos en local storage, para poder visualizar sus favoritos en el momento que lo deseé, utilizo react-router para organizar las distintas rutas de la página.`,
        link: "https://api-pajaros-chilenos.vercel.app/",
        imagenes: ["pajaros_chilenos/pajaros_chilenos-1.JPG", "pajaros_chilenos/pajaros_chilenos-2.JPG", "pajaros_chilenos/pajaros_chilenos-3.JPG", "pajaros_chilenos/pajaros_chilenos-4.JPG"],
        stack: [
            { iconos: "html-5", nombre: "HTML 5" },
            { iconos: "js", nombre: "JavaScript" },
            { iconos: "css-3", nombre: "CSS 3" },
            { iconos: "bootstrap", nombre: "Bootstrap" },
            { iconos: "react", nombre: "React JS" },
        ],
        deployed: true
    },
    {
        id: "tic_tac_toe",
        nombre: "Juego Tic Tac Toe",
        fecha: "Agosto-2023",
        descripcion: `Proyecto educacional, en el cual refuerzo el uso de javascript para crear el famoso juego 'tic tac toe', el cual desarrollé desde 0 con solo la lógica de su funcionamiento.`,
        link: "https://tic-tac-toe-mu-amber.vercel.app/",
        imagenes: ["tic_tac/tic_tac-1.JPG", "tic_tac/tic_tac-2.JPG", "tic_tac/tic_tac-3.JPG", "tic_tac/tic_tac-4.JPG"],
        stack: [
            { iconos: "html-5", nombre: "HTML 5" },
            { iconos: "js", nombre: "JavaScript" },
            { iconos: "css-3", nombre: "CSS 3" },
            { iconos: "bootstrap", nombre: "Bootstrap" },
            { iconos: "react", nombre: "React JS" },
        ],
        deployed: true
    },
    {
        id: "battleship",
        nombre: "Juego Battleship",
        fecha: "Agosto-2023",
        descripcion: `Proyecto educacional, en el cual refuerzo el uso de javascript, matrices y bastante lógica para poder hacer jugar a la computadora y que esta no solo juegue solo por jugar, esta, sí encuentra un espacio donde está el barco, buscará en las casillas colindantes.
        
        Puedes posicionar tus barcos donde quieras y la computadora posicionará sus barcos de manera aleatoria dentro del tablero.`,
        link: "https://battle-ship-react.vercel.app/",
        imagenes: ["battleship/battleship-1.JPG", "battleship/battleship-2.JPG", "battleship/battleship-3.JPG", "battleship/battleship-4.JPG", "battleship/battleship-4.JPG"],
        stack: [
            { iconos: "html-5", nombre: "HTML 5" },
            { iconos: "js", nombre: "JavaScript" },
            { iconos: "css-3", nombre: "CSS 3" },
            { iconos: "bootstrap", nombre: "Bootstrap" },
            { iconos: "react", nombre: "React JS" },
        ],
        deployed: true
    },
]

export interface MiStack {
    href: string,
    icono: string,
    section: string,
    className: string
}

export const iconosStack: MiStack[] = [
    {
        href: "https://www.w3schools.com/html/",
        icono: "html-5",
        section: "front-end",
        className: "",
    },
    { 
        href: "https://www.w3schools.com/js/", 
        icono: "js", 
        section: "front-end",
        className: "",
    },
    { 
        href: "https://react.dev/", 
        icono: "react",
        section: "front-end",
        className: "",
    },
    { 
        href: "https://www.w3schools.com/css/", 
        icono: "css-3",
        section: "front-end",
        className: "",
    },
    { 
        href: "https://getbootstrap.com/docs/5.3/getting-started/introduction/", 
        icono: "bootstrap",
        section: "front-end",
        className: "",
    },
    { 
        href: "https://tailwindcss.com/docs/installation", 
        icono: "tailwind",
        section: "front-end",
        className: "",
    },
    { 
        href: "https://docs.python.org/3.11/", 
        icono: "python", 
        section: "back-end",
        className: "",
    },
    { 
        href: "https://flask.palletsprojects.com/en/3.0.x/", 
        icono: "flask",
        section: "back-end",
        className: "lg:max-h-24 max-h-12",
    },
    { 
        href: "https://docs.djangoproject.com/en/4.2/", 
        icono: "django",
        section: "back-end",
        className: "",
    },
    { 
        href: "https://docs.sqlalchemy.org/en/14/", 
        icono: "sqlAlchemy",
        section: "back-end",
        className: "lg:max-h-16 max-h-12",
    },
    { 
        href: "https://www.postgresql.org/", 
        icono: "postgresql",
        section: "back-end",
        className: "",
    },
]