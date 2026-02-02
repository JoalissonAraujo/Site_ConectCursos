document.addEventListener("DOMContentLoaded", () => {

    const cursos = {
        informatica: [
            "img_curso/Informática/659-thumb-400x400.png",
            "img_curso/Informática/710-thumb-400x400.png",
            "img_curso/Informática/770-thumb-400x400.png",
            "img_curso/Informática/782-thumb-400x400.png",
            "img_curso/Informática/796-thumb-400x400.png",
            "img_curso/Informática/837-thumb-400x400.png",
            "img_curso/Informática/925-thumb-400x400.png",
            "img_curso/Informática/Thumb-Curso-Power-BI-Desktop-V2-scaled.png",
            "img_curso/Informática/176-thumb.png",
            "img_curso/Informática/203-thumb.png",
            "img_curso/Informática/239-thumb.png",
            "img_curso/Informática/590-thumb.png",
            "img_curso/Informática/252-thumb.png",
            "img_curso/Informática/659-thumb-400x400.png",
            "img_curso/Informática/Excel-Avancado-2019.png",
            "img_curso/Informática/Excel-Dashboard-2019.png",
            "img_curso/Informática/ICONES-CURSOS-400x400.png",
            "img_curso/Informática/word.webp",
            "img_curso/Informática/Thumb-Curso-Power-BI-Desktop-V2-scaled.png",
            "img_curso/Informática/Thumb-1-1024x1020.webp",
            "img_curso/Informática/Desenvolvedor-de-Games-3D-I_transp.png",
            "img_curso/Informática/Desenvolvedor-de-Games-3D-II_transp.webp",
            "img_curso/Informática/Desenvolvedor-de-Games-3D-III_transp.webp",
            "img_curso/Informática/Games-Online-V2-1024x1024.webp",
            "img_curso/Informática/Thumb-1024x1020.png",
            "img_curso/Informática/Thumb-1-1024x1020.webp",
            "img_curso/Informática/Manutencao-de-Computadores.jpg"

        ],
        designer: [
            "img_curso/Designer/818-thumb-400x400.png",
            "img_curso/Designer/828-thumb-400x400.png",
            "img_curso/Designer/Canva-1024x1024.png",
            "img_curso/Designer/899-thumb-400x400.png",
            "img_curso/Designer/992-thumb.png",
            "img_curso/Designer/Thumb-3-400x400.png",
            "img_curso/Designer/138-thumb.png",
            "img_curso/Designer/193-thumb.png",
            "img_curso/Designer/AutoCAD-3D_transp.png",


        ],
        ingles: [
            "img_curso/Ingles/133-thumb-400x400.png",
            "img_curso/Ingles/242-thumb-400x400.png",
            "img_curso/Ingles/263-thumb-400x400.png",
            "img_curso/Ingles/270-thumb-400x400.png",
            "img_curso/Ingles/280-thumb-400x400.png",
            "img_curso/Ingles/281-thumb-400x400.png",
            "img_curso/Ingles/Ingles-para-Hotelaria-e-Turismo-400x400.jpg",
            "img_curso/Ingles/Ingles-para-Negocios-400x400.jpg"
            

        ]
    };

    // Cria as imagens dinamicamente
    for (const categoria in cursos) {
        const container = document.getElementById(categoria);

        if (!container) {
            console.error(`Container não encontrado para a categoria: ${categoria}`);
            continue;
        }

        cursos[categoria].forEach((imgPath) => {
            const img = document.createElement("img");
            img.src = imgPath;
            img.alt = "Curso " + categoria;
            img.loading = "lazy"; // melhora performance
            container.appendChild(img);
        });
    }

});

// Função de rolagem lateral
function scrollCarousel(id, direction) {
    const carousel = document.getElementById(id);

    if (!carousel) {
        console.error(`Carousel não encontrado: ${id}`);
        return;
    }

    carousel.scrollBy({
        left: direction * 320,
        behavior: "smooth"
    });
}

function abrirWhatsApp() {
    const telefone = "558399697946";
    const mensagem = "Olá! Gostaria de saber mais sobre os cursos da Conect Cursos.";

    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}
