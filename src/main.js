import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
<div class="hero">
<p class="padding-0">MÁS PUBLICIDAD! SUBSCRÍBETE A NUESTRA NEWSLETTER</p>
<a href="#">Clic aquí</a>
  <a href="#" >Clic aquí</a>
</div>
  </div>
`;

setupCounter(document.querySelector("#counter"));
