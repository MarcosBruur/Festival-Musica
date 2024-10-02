document.addEventListener('DOMContentLoaded',event =>{
    crearGaleria();
    navegacionFija();
    resaltarEnlace();
    scrollNav();
})

const navegacionFija = () =>{
    const header = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');

    window.addEventListener('scroll', () =>{
        if(sobreFestival.getBoundingClientRect().bottom < 1){
            header.classList.add('fixed');
        }else{
            header.classList.remove('fixed');
        }
    })
}


const crearGaleria = () =>{
    const cantidadImganes = 16;
    const galeria = document.querySelector('.galeria-imagenes')
    
    for(let i = 1; i<= cantidadImganes; i ++){
        const imagen = document.createElement('PICTURE')
        imagen.innerHTML = `
            <source srcset="build/img/gallery/thumb/${i}.avif" type="image/avif">
            <source srcset="build/img/gallery/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/gallery/thumb/${i}.jpg" alt="imagen galeria">
            `;
        imagen.src = `src/img/gallery/thumb/${i}.jpg`;
        imagen.alt = 'Imagen de galeria';


        galeria.appendChild(imagen);
        imagen.onclick = () =>{

            ampliarImagen(i);
        }
    }
}

const ampliarImagen = (i) =>{

    const imagen = document.createElement('IMG')
    imagen.width = '300';
    imagen.height = '200';
    imagen.loading = 'lazy';
    imagen.src = `src/img/gallery/full/${i}.jpg`;
    imagen.alt = 'Imagen de galeria';
    //Generar modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.appendChild(imagen);

    modal.onclick = () =>{
        cerrarModal();
    }

    const body = document.querySelector('body');
    body.classList.add('overflow-hidden');
    body.appendChild(modal);
}

const cerrarModal = () =>{
    const modal = document.querySelector('.modal');
    modal.classList.add('fade-out');
    const body = document.querySelector('body');
    body.classList.remove('overflow-hidden');
    setTimeout(() =>{
        modal?.remove();
    },250);
    
}

const resaltarEnlace = () =>{
    document.addEventListener('scroll', () =>{
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navegacion-principal a')

        let actual = '';
        sections.forEach(section =>{
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if(window.scrollY >= (sectionTop - sectionHeight / 3)){
                actual = section.id;
            }
        })
        
        navLinks.forEach(navLink =>{
            navLink.classList.remove('active');
            if(navLink.getAttribute('href') === '#' + actual){
                navLink.classList.add('active');
            }
        })
    })
}

const scrollNav = () =>{
    const navLinks = document.querySelectorAll('.navegacion-principal a');

    navLinks.forEach(navLink =>{
        navLink.addEventListener('click', e =>{
            e.preventDefault();
            const sectionScroll = e.target.getAttribute('href');
            const section = document.querySelector(sectionScroll);
            
            section.scrollIntoView({behavior: 'smooth'});
        })
    })
}