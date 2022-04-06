/* const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll("#menu")[0].classList.add("fadeInLeft");
            document.querySelectorAll("#menu")[1].classList.add("fadeInTop");
            document.querySelectorAll("#menu")[2].classList.add("fadeInRight");
        }
    })
})

observer1.observe(document.querySelector(".contenitore")); */

//comparsa elementi
const observerTitolo = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll(".animated")[0].classList.add("fadeInTop");
            observerTitolo.disconnect();

            observerintroduzione = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {

                        document.querySelectorAll(".animated")[1].classList.add("fadeInTop");
                        document.querySelectorAll(".animated")[2].classList.add("fadeInLeft");
                        observerintroduzione.disconnect();
                        observer2 = new IntersectionObserver(entries => {
                            entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                    document.querySelectorAll(".menu")[0].classList.add("fadeInRight");
                                    document.querySelectorAll(".animated")[3].classList.add("fadeInRight");
                                    document.querySelectorAll(".animated")[4].classList.add("fadeInRight");
                                    document.querySelectorAll(".animated")[5].classList.add("fadeInTop");
                                    document.querySelectorAll(".animated")[6].classList.add("fadeInLeft");
                                }
                            })
                        }, {
                            threshold: 0.3
                        })
                        observer2.observe(document.querySelector(".menu"));
                    }
                })
            })
            observerintroduzione.observe(document.querySelector(".introduzione"));
        }
    })
}, {
    threshold: 1
})
observerTitolo.observe(document.querySelector(".titolo"));



const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            document.querySelectorAll(".animated")[7].classList.add("fadeInTop");
            document.querySelectorAll(".animated")[8].classList.add("fadeInRight");
        }
    })
})
observer3.observe(document.querySelector(".testo2"));


const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll(".animated")[9].classList.add("fadeInTop");
            document.querySelectorAll(".animated")[10].classList.add("fadeInLeft");
        }
    })
}, {
    threshold: 0.3
})
observer4.observe(document.querySelector(".testo3"));