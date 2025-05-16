window.onload = () =>
{
    const nav = document.getElementsByClassName("nav-links")[0];
    const menu = document.getElementById("menu");
    const close = document.getElementById("close");
    menu.onclick = () =>
    {
        nav.classList.add("active");
        menu.classList.add("hidden");
        close.classList.remove("hidden");
    }
    close.onclick = () =>
    {
        nav.classList.remove("active");
        menu.classList.remove("hidden");
        close.classList.add("hidden");
    }
}