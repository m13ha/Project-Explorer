import * as fs from "fs";
import { viewSaysHello } from "./view/View";

viewSaysHello();

const helloElement = document.getElementById("change-to-blue");
if (helloElement) {
  setTimeout(() => {
    helloElement.style.color = "blue";
  }, 1000);
}
