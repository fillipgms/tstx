const mouse = document.getElementById("mouse");
const containerCarrossel = document.getElementById("carrossel");
const cards = document.querySelectorAll(".profile");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

document.addEventListener("mousemove", (e) => {
    const height = mouse.offsetHeight;
    const width = mouse.offsetWidth;

    setTimeout(() => {
        mouse.style.left = `${e.pageX - width / 2}px`;
        mouse.style.top = `${e.pageY - height / 2}px`;
    }, 30);
});

class Carossel {
    constructor(container, items) {
        this.container = container;
        this.carrosselArray = [...items];
    }

    update() {
        this.carrosselArray.forEach((el, i) => {
            el.classList.remove("item-1");
            el.classList.remove("item-2");
            el.classList.remove("item-3");
            el.classList.remove("item-4");
            el.classList.remove("active");

            if (i == 1) {
                el.classList.add("active");
            }
        });

        this.carrosselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`item-${i + 1}`);
        });
    }

    setCurrentState(direcao) {
        if (direcao == "previous") {
            this.carrosselArray.unshift(this.carrosselArray.pop());
        } else {
            this.carrosselArray.push(this.carrosselArray.shift());
        }
        this.update();
    }
}

const carrossel = new Carossel(containerCarrossel, cards);

previous.addEventListener("click", (e) => {
    e.preventDefault;
    carrossel.setCurrentState("previous");
});

next.addEventListener("click", (e) => {
    e.preventDefault;
    carrossel.setCurrentState("next");
});
