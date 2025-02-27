import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import logo from "../public/logos/Recurso 13.svg";
import facebook from "../public/logos/facebook.svg";
import instagram from "../public/logos/instagram.svg";
document.querySelector("#app").innerHTML = `
<div>
      <div class="hero">
        <p class="margin-0 w-5-6 text-xs"> <span class="font-100"> MÁS PUBLICIDAD! </span> SUBSCRÍBETE A NUESTRA NEWSLETTER</p>
        <a class="w-1-6 text-xs none" href="#">Clic aquí</a>
      </div>
      <div class="navbar">
        <a href="#">  <img class="logo" src="${logo}" alt="logo" srcset=""></a>
        <div>
            <ul>
              <li><a href="Nosotros.asp">Nosotros</a></li>
              <li><a href="Servicios.asp">Servicios</a></li>
              <li><a href="Proyectos.asp">Proyectos</a></li>
              <li><a href="Contacto.asp">Contacto</a></li>
            </ul>
        </div>
        <div>
        <a href="http://www.instagram.com">
          <img  src="${instagram}" alt="" srcset="">
        </a>
        <a href="http://www.facebook.com">
          <img  src="${facebook}" alt="" srcset="">
        </a>
        </div>
      </div>
</div>
`;

setupCounter(document.querySelector("#counter"));
