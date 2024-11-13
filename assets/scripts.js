$(document).ready(function() { //*cible tous les éléments HTML avec la classe gallery,utilise un plugin jQuery mauGallery
    $('.gallery').mauGallery({
        columns: {
            xs: 1, //** mobile **//
            sm: 2, //** petit écran **//
            md: 3, //** tablette **//
            lg: 3, //** ordi bx **//
            xl: 3 //** ordi bx **//
        },
        lightBox: true, //*permet de visualiser les images en mode plein écran lorsqu'on clique dessus.
        lightboxId: 'myAwesomeLightbox',
        showTags: true, //*Affiche des tags (catégories de tri) au-dessus de la galerie pour filtrer les images par tag.
        tagsPosition: 'top' //*Positionne les tags en haut de la galerie.
    });
});
//***ce code initialise une galerie d'images avec des options de mise en page responsive, 
//***une lightbox personnalisée, et des tags pour faciliter la navigation. */