const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const header = document.getElementById("header");

/* abrir/cerrar menú */
toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    toggle.classList.toggle("active");
});

/* efecto scroll */
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const seccion = document.querySelector(".seccion1");

window.addEventListener("scroll", () => {
    const pos = seccion.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (pos < screen - 100) {
        seccion.style.opacity = "1";
        seccion.style.transform = "translateY(0)";
    }
});


// 📲 WHATSAPP AUTOMÁTICO
const botones = document.querySelectorAll(".btn-card");

botones.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        let producto = btn.getAttribute("data-product");

        let mensaje = `Hola, quiero comprar el ${producto}`;
        let url = `https://wa.me/521XXXXXXXXXX?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");
    });
});


// 🔍 FILTROS
const filtros = document.querySelectorAll(".filtros button");
const cards = document.querySelectorAll(".disponibles");

filtros.forEach(btn => {
    btn.addEventListener("click", () => {
        let filtro = btn.getAttribute("data-filter");

        cards.forEach(card => {
            if (filtro === "all" || card.getAttribute("data-model") === filtro) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});



const counters = document.querySelectorAll(".contador");

const activarContador = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;

        const update = () => {
            const increment = target / 50;

            if (count < target) {
                count += increment;
                counter.innerText = Math.floor(count);
                requestAnimationFrame(update);
            } else {
                counter.innerText = target;
            }
        };

        update();
    });
};

// activar cuando aparece en pantalla
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            activarContador();
        }
    });
});

observer.observe(document.querySelector(".seccion4"));


const faqItems = document.querySelectorAll(".faq-item");

// ACORDEÓN
faqItems.forEach(item => {
    item.addEventListener("click", () => {
        faqItems.forEach(i => {
            if(i !== item) i.classList.remove("active");
        });
        item.classList.toggle("active");
    });
});

// ANIMACIÓN AL SCROLL
const observerer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

faqItems.forEach(item => observerer.observe(item));


// Animación cuando se hace scroll
const contacto = document.querySelector(".contacto");

const observererr = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            contacto.classList.add("show");
        }
    });
}, { threshold: 0.2 });

observererr.observe(contacto);