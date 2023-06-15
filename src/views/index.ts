import viewSaysHello from "./View";


viewSaysHello();

const helloElement = document.getElementById("change-to-blue");

if (helloElement) {
  console.log("work")
  setTimeout(() => {
    helloElement.style.color = "blue";
  }, 1000);
}
