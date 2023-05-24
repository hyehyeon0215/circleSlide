const banner_ul = document.querySelector(".banner ul");
const banners = banner_ul.children;
const btns = document.querySelector(".btns");
const [prev, next] = btns.children;

console.log(banners);

for (let i = 0; i < 3; i++) {
    banner_ul.prepend(banner_ul.lastElementChild);
}



prev.addEventListener("click", () => {
    banner_ul.prepend(banner_ul.lastElementChild);
})

next.addEventListener("click", () => {
    banner_ul.append(banner_ul.firstElementChild);
})


