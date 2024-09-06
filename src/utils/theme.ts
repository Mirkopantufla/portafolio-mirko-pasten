export function changeTheme() {
    // Obtengo el tema actual
    const currentTheme = document.documentElement.getAttribute('data-theme');
    // Si ya es dark, se cambia a light y viceversa
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    // Seteo el nuevo tema en el atributo
    document.documentElement.setAttribute('data-theme', newTheme);
    // Lo guardo en el local storage para personalizacion de usuario
    localStorage.setItem('theme', newTheme);
}

// Configurar el tema al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const image = document.querySelector("#theme-image") as HTMLElement;
    document.documentElement.setAttribute('data-theme', savedTheme);

    if (savedTheme === "dark") {
        image.setAttribute("src", "/icons/moon-icon.png")
    }else if(savedTheme === "light"){
        image.setAttribute("src", "/icons/sun-icon.png")
    }
});