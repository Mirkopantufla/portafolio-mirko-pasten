export interface Stack {
    nombre: string,
    iconos: string
}

export interface Proyectos {
    id: string,
    nombre: string,
    link: string,
    imagenes: string[],
    stack: Stack[],
    deployed: boolean,
}

export const proyectosDisponibles: Proyectos[] = [
    {
        id: "inmuebles_miki",
        nombre: "Inmuebles MIKI",
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
        id: "battleship",
        nombre: "Juego Battleship",
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
    {
        id: "pajaros_chilenos",
        nombre: "Guia de Pajaros Chilenos",
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
        id: "fake_store",
        nombre: "E-commerce Fake Store",
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
    }
]

// interface MiStack {
//     href: string,
//     icono: string,
//     className: string
// }

// const iconosStack: MiStack[] = [
//     { href: "https://www.w3schools.com/html/", icono: "html-5", className: "sombreado-blanco"},
//     { href: "https://www.w3schools.com/js/", icono: "js", className: "sombreado-blanco"},
//     { href: "https://react.dev/", icono: "react", className: "sombreado-blanco"},
//     { href: "https://www.w3schools.com/css/", icono: "css-3", className: "sombreado-blanco"},
//     { href: "https://getbootstrap.com/docs/5.3/getting-started/introduction/", icono: "bootstrap", className: "z-10"},
//     { href: "https://tailwindcss.com/docs/installation", icono: "tailwind", className: "sombreado-blanco"},
//     { href: "https://docs.python.org/3.11/", icono: "python", className: "sombreado-blanco"},
//     { href: "https://flask.palletsprojects.com/en/3.0.x/", icono: "flask", className: "invert"},
//     { href: "https://docs.djangoproject.com/en/4.2/", icono: "django", className: "invert"},
//     { href: "https://docs.sqlalchemy.org/en/14/", icono: "sqlAlchemy", className: ""},
//     { href: "https://www.postgresql.org/", icono: "postgresql", className: "sombreado-blanco"},
// ]