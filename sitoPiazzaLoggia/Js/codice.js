$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 4,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
        }
    })
});

//inizio della funzione scroll (automatica)
window.addEventListener('scroll',()=>{
    /*
    dichiarazione dei content:
    un contenuto con un nome qualsiasi esempio: content, 
    e gli si può assegnare una classe o altro come per esempio: .menu
    così facendo esraiamo dalla nostra pagina web con la funzione querySelector("qualcosa") 
    e lo possiamo usare come una variabile ecc...
    */
    let content=document.querySelector(".menu");
    let content1=document.querySelector(".introduzione");
    let content2=document.querySelector(".testo2");
    let content3=document.querySelector(".testo3");
    let content4=document.querySelector(".titolo");
    let content5=document.querySelector(".testo1");
    /*
    dichiarazione dei contentPosition:
    restituisce la posizione esatta della pagina dove il contenuto 
    si trova, come per esempio: .menu
    */
    let contentPosition=content.getBoundingClientRect().top;
    let content1Position=content1.getBoundingClientRect().top;
    let content2Position=content2.getBoundingClientRect().top;
    let content3Position=content3.getBoundingClientRect().top;
    let content4Position=content4.getBoundingClientRect().top;
    let content5Position=content5.getBoundingClientRect().top;
    //restituisce il valore del viwerport (dove si guarda) 
    let screenPosition = window.innerHeight;
    /*
    1)si controlla che si "passa" sul punto esatto del nostro contenuto con un semplice if 
    contentPosition<screenPosition .
    ---------------------------------------------------------------------------------------------------------------
    2)se si passa sul contenuto (uno dei tanti), si possono eseguire delle operazioni come l'aggiunta al contenuto di
    una classlist che può aggiungere o togliere con add o remove delle proprietà come quelle del css.
    ---------------------------------------------------------------------------------------------------------------
    3)else se non avviene ciò si può fare altro come per esempio l'aggiunta al contenuto di
    una classlist che può aggiungere o togliere con add o remove delle proprietà come quelle del css.
    ---------------------------------------------------------------------------------------------------------------
    le classi css le si creano nel css in modo da prendere quelle esatte,
    l'opacità dei contenuti di norma è 0 nel css quindi con opacity rendo l'opacità =1 
    (altrimenti l'effetto non si vede, e deve essere anche la prima opzione se no fa le altre cose belle ma non le fa 
    vdere per via dell'opacità).
    se si vuole far comparire qualcosa e poi l'asciarlo "fisso" basta togliere l'else in cui viene rimosso il css.
    scale fa lo scale a 1 di base in caso si modifica ma ricordate che cambia anche quelli degli altri content.
    */
    if(contentPosition<screenPosition){//.menu
        content.classList.add('opacity');
        content.classList.add('fadeInLeft');
    }/*else{
        content.classList.remove('opacity');
        content.classList.remove('fadeInLeft');
    }*/
    if(content1Position<screenPosition){//.introduzione
        content1.classList.add('scale');
    }/*else{
        content1.classList.remove('scale');
    }*/
    if(content2Position<screenPosition){//.testo2
        content2.classList.add('opacity');
        content2.classList.add('fadeInRight');
    }/*else{
        content2.classList.remove('opacity');
        content2.classList.remove('fadeInRight');
    }*/
    if(content3Position<screenPosition){//.testo3
        content3.classList.add('opacity');
        content3.classList.add('fadeInLeft');
    }/*else{
        content3.classList.remove('opacity');
        content3.classList.remove('fadeInLeft');
    }*/
    if(content4Position<screenPosition){//.titolo
        content4.classList.add('opacity');
    }
    if(content5Position<screenPosition){//.testo1
        content5.classList.add('opacity');
        content5.classList.add('fadeInLeft');
    }/*else{
        content5.classList.remove('opacity');
        content5.classList.remove('fadeInLeft');
    }*/
});
/*
const targets=document.querySelectorAll(".menu");
const isAnimeted= "active";
const threshold = 0.3;
function callback(entries, observer){
    entries.forEach((entry) => {
        const elem=entry.target;
        if(entry.intersectionRatio>=threshold) {
            elem.classList.add(isAnimeted);
        }else{
            elem.classList.remove(isAnimeted);
        }
    });
}
const observer=new IntersectionObserver(callback,{ threshold });
for(const target of targets){
    observer.observe(target);
}
*/



