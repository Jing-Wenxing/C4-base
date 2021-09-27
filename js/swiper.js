let dataList = [
    // "../../imgs/banner1.jpg",
    // "../../imgs/banner2.jpg",
    // "../../imgs/banner3.jpg"
]


let index = 0

function draw() {
    let swiper = document.getElementsByClassName("dev-swiper")[0]
    swiper.style.backgroundImage = "url(\"" + dataList[index] + "\")"

    let li = document.getElementsByClassName("dev-swiper")[0].querySelectorAll("li")
    for (let i = 0; i < dataList.length; i++) {
        li[i].removeAttribute("class")
        li[i].onclick = function () {
            index = i
            draw()
        }
    }

    li[index].setAttribute("class", "is-active")
}

draw()

let button = document.getElementsByClassName("dev-swiper")[0].querySelectorAll("button")

button[0].onclick = function () {
    index--
    if (index < 0)
        index = dataList.length - 1
    draw()
}

button[1].onclick = function () {
    index++
    if (index === dataList.length)
        index = 0
    draw()
}