const browse = () => {
  document.getElementById("handle").click();
}

const toggle = () => {
  browse()
}

const hero = document.querySelector(".hero");
const hero1 = document.querySelector(".hero1");
const toggleClass = () => {
  console.log("hi")
  hero.classList.remove("hero");
  hero.classList.add("hero1");
  hero1.classList.add("hero");
  hero1.classList.remove("hero1");
}

const closing = () => {
  hero.classList.remove("hero1");
  hero.classList.add("hero");
  hero1.classList.add("hero1");
  hero1.classList.remove("hero");
}