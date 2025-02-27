import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import logo from "../public/logos/Recurso 13.svg";

document.querySelector("#app").innerHTML = `
<div>
      <div class="hero">
        <p class="margin-0 w-5-6 text-xs"> <span class="font-100"> MÁS PUBLICIDAD! </span> SUBSCRÍBETE A NUESTRA NEWSLETTER</p>
        <a class="w-1-6 text-xs none" href="#">Clic aquí</a>
      </div>
      <div class="navbar">
        <a href="http://google.com">  <img class="logo" src="${logo}" alt="logo" srcset=""></a>
        <div>
            <ul>
              <li><a href="default.asp">Nosotros</a></li>
              <li><a href="default.asp">Servicios</a></li>
              <li><a href="default.asp">Proyectos</a></li>
              <li><a href="default.asp">Contacto</a></li>
            </ul>
        </div>
        <div>
          <img src="" alt="" srcset="">
          <img src="" alt="" srcset="">
        </div>
      </div>
</div>
`;

setupCounter(document.querySelector("#counter"));
