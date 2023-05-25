const banner_ul = document.querySelector(".banner ul");
const banners = banner_ul.children;
const btns = document.querySelector(".btns");
const [prev, next] = btns.children;
const close = pop.querySelector(".close");
const opens = banner_ul.querySelectorAll("a");


for (let i = 0; i < 3; i++) {
    banner_ul.prepend(banner_ul.lastElementChild);
}

prev.addEventListener("click", () => {
    banner_ul.prepend(banner_ul.lastElementChild);
})

next.addEventListener("click", () => {
    banner_ul.append(banner_ul.firstElementChild);
})

opens.forEach(() => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        let txt = e.currentTarget.closest('li').querySelector("h2").innerText;
        pop.querySelector("h2").innerText = txt;
        pop.classList.add("on");
        e.currentTarget.classList.add("off");
        btns.classList.add("off");
    })
});


close.addEventListener("click", (s) => {
    pop.classList.remove("on");
    banner_ul.querySelector("li.on a");
    btns.classList.remove("off");
})


function active() {
    for (let el of banners) el.classList.remove("on");
    banners[3].classList.add("on");
}