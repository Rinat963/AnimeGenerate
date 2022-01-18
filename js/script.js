let citata = [
    { text: "Верь в меня больше, чем я сам. - Юрий на льду!", image: "./img/yri na ldy.jpg" },
    { text: "Пожалуйста, запомните нас. Не забывайте, что мы жили. - Эхо террора", image: "./img/eho.jpg" },
    { text: "Чем больше надеешься, тем сильнее будет разочарование. - Аватар короля", image: "./img/avatar.jpg" },
    { text: "В любом случае любые рекорды кем-то обязательно бьются. - Аватар короля ", image: "./img/avatar2.jpg" },
    { text: "Неправильный не я... Неправильный весь этот мир. - Токийский Гуль", image: "./img/gul.jpg" },
    { text: "От привязанности - только боль. - Эхо террора ", image: "./img/no.Terror.jpg" },
    { text: "Нити сплетаются и обретают форму. Скручиваются, перепутываются, порой распутываются, рвутся - но потом сплетаются вновь. - Твоё имя", image: "./img/kartinki-tvoe-imya-39.jpg" },
    { text: "Если ты убьёшь всех убийц, то в конечном счёте единственным убийцей останешься ты. - Тетрадь Смерти", image: "./img/note.jpg" },
    { text: "Слушай, Симон. Запомни. Верь в себя. Не в меня, который верит в тебя. Не в мою веру в тебя. Верь в себя! И в свою веру в себя! - Гуррен-Лаганн", image: "./img/agann.jpg" },
    { text: "Путь яойщицы - это мой жизненный путь! - Я требую яоя! ", image: "./img/yaoi.jpg" },
    { text: "Чтобы жить, смысл не нужен. Можно... Просто жить. - 91 день", image: "./img/54.jpg" },
    { text: "Задача учителя не ранить сердце ученика, но воспитать надежду. - Королевский наставник Хайне", image: "./img/1.jpg" },
    { text: "Вроде бы одни книжки читали, но я, где была, там и осталась, а он поставил в жизни цель, и почти её достиг. - Шёпот сердца", image: "./img/2.jpg" },
    { text: "Простите, кажись, я умер. - Ван Пис", image: "./img/thumb-1920-606263.jpg" },
    {
        text: "Если сдаваться, не попробовав - результат не изменится. - Ванпанчмен ",
        image: "./img/10775104-1110013.jpg"
    }
];

let bg = ["#000000", "#01314d", "#1a618a", "#4a0d44", "#1d3308", "#420505", "#750046", "#6e5363", "#1c6e8a", "#0c660a", "#b30000", "#2c51d4"

];

function radomaiser(arg1) {
    let random = Math.floor(Math.random() * arg1.length);
    return arg1[random];
}

let phrase = document.querySelector(".phrase");
const main = document.querySelector(".main");
let btn = main.querySelector(".btn");
let bgcolor = document.querySelector(".bgcolor");
let body = document.querySelector(".body");
let pint = document.querySelector(".pint");


btn.addEventListener("click", function() {
    let randometextimage = radomaiser(citata);
    smoothly(phrase, "textContent", randometextimage.text);
    smoothly(pint, "src", randometextimage.image);
});

bgcolor.addEventListener("click", function() {
    body.style.background = radomaiser(bg);
});