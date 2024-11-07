import React from "react";
import imgsl from "../assets/home.webp";
import woman from "../assets/woman.png";
import hand from "../assets/manocomputer.png";
import man from "../assets/man.png";
import razones from "../assets/razones.png";
import arrow from "../assets/arrow.png";
import precio from "../assets/precio.png";
import price from "../assets/price.png";
import computer from "../assets/computer.png";
import mkted from "../assets/mktged.png";
import ingenieria from "../assets/ingenieria.png";
import gradient from "../assets/gradient.png";
import toolimg from "../assets/toolsimg.png";
import expert from "../assets/expert.png";

function FastPage() {
  return (
    <div className="fast-container">
      <div className="first element-width">
        <img className="img" src={imgsl} alt="Gestión de Marketing y CRM" />
        <a
          className="btn-purple sp2 spp22"
          href="https://superleads.mx/contacto"
        >
          {" "}
          Agendar Diagnóstico
        </a>
      </div>
      <div className="second element-width">
        <div className="container-text-button">
          <p className="nts">
            Incrementamos la matrícula con metodología única{" "}
            <strong>100% comprobada</strong>
          </p>
          <a className="btn-green" href="https://superleads.mx/contacto">
            {" "}
            Solicita un diagnóstico
          </a>
        </div>
        <img className="wmn" src={woman} alt="IMG-People" />
      </div>
      <div className="second element-width tsm3">
        <div className="container-text-button">
          <p className="nts nts2">
            Facilitamos la toma de decisiones con nuestro Panel y herramientas
            de gestión educativa
          </p>
          <a className="btn-green" href="https://superleads.mx/contacto">
            {" "}
            Solicita un diagnóstico
          </a>
        </div>
        <img src={hand} alt="IMG-People" className="comput" />
      </div>
      <div className="second element-width tsm4 personalizedmobile">
        <img src={man} alt="IMG-People" className="comput comput2" />
        <div className="container-text-button tsxcf2">
          <p className="nts nts2">
            <strong>
              {" "}
              Garantizamos mejorar la rentabilidad de tu institución evitando
              pérdidas por falta de gestión
            </strong>{" "}
          </p>
          <a className="btn-green btnsmd" href="https://superleads.mx/contacto">
            {" "}
            Solicita un diagnóstico
          </a>
        </div>
      </div>
      <div className="razones element-width">
        <div className="container-razones">
          <p className="texst">Principales problemas</p>
          <h2 className="titlesssss">
            5 poderosas razones para usar <span>SuperLeads</span>
          </h2>
          <h5 className="insted">
            100% diseñado para Instituciones Educativas
          </h5>
          <a
            href="https://superleads.mx/contacto"
            className="buttons button-right buttonss"
          >
            Solicita un diagnóstico
            <img src={arrow} alt="arrow" />
          </a>
        </div>
        <img
          className="img-razones"
          src={razones}
          alt="razones para contratar superleads"
        />
      </div>
      <div className="razones element-width">
        <div className="container-razones">
          <h2 className="titlesssss">Precio</h2>
          <h5 className="insted">
            Da el primer paso para un crecimiento sostenible y escalable desde
          </h5>
          <img
            className="img-razones rznpr"
            src={price}
            alt="razones para contratar superleads"
          />
          <a href="/contacto" className="buttons button-right buttonss">
            Contratar
            <img src={arrow} alt="arrow" />
          </a>
        </div>
        <img
          className="img-razones"
          src={precio}
          alt="razones para contratar superleads"
        />
      </div>
      <div className="whatslis">
        <img src={computer} alt="Computadora" className="computrs" />
        <div className="content-whatsi">
          <h2 className="titlesssss">¿Qué es Superleads?</h2>
          <h5 className="insted">
            La innovadora plataforma de gestión diseñada para optimizar los
            procesos de captación y retención de alumnos de las instituciones
            educativas. <br />
            <br /> Con SuperLeads tendrás acceso a nuestras funciones creadas
            para facilitar la comunicación, asegurar la medición, automatizar
            procesos y cumplir con tus objetivos de matrícula y estrategia.{" "}
          </h5>
          <img className="mktg-ed" src={mkted} alt="Marketing educativo" />
          <a className="ing" href="https://ingenieriadigital.mx">
            <img
              className="ingenieria"
              src={ingenieria}
              alt="Ingeniería digital"
            />
          </a>
        </div>
      </div>
      <div className="tools">
        <div className="flexed-items">
          <h2 className="titlesssss">Herramientas</h2>
          <img src={gradient} className="gradient" alt="gradient" />
          <a className="btn-purple" href="https://superleads.mx/contacto">
            {" "}
            Contratar
          </a>
          <a className="btn-green" href="https://superleads.mx/contacto">
            {" "}
            Solicita un Diagnóstico
          </a>
        </div>
        <img src={toolimg} className="Herramientas" alt="gradient" />
      </div>
      <div className="bigger">
        <div className="testimonials">
          <div className="left">
            <img className="rafa" src={expert} alt="Rafa Agüero" />
            <img src={gradient} className="gradient grdt" alt="gradient" />
          </div>
          <div className="right">
            <h3>Rafa Agüero</h3>
            <h5>
              Experto en Marketing educativo <br />
              +15 años de experiencia en inscripción de alumnos
            </h5>
            <p>
              Una plataforma de gestión de marketing y CRM es imprescindible si
              deseas incrementar la matrícula y mejorar la retención de alumnos;
              no contar con una afecta significativamente el crecimiento de
              cualquier institución educativa
            </p>
            <iframe
              title="iframe"
              className="stidframe"
              src="https://open.spotify.com/embed/episode/0Mb2Efatb2yrxOEl8qdWaK?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <h6 className="metodo">
          Metología Kpta para inscribir más alumnos incluida.
        </h6>
      </div>
    </div>
  );
}

export default FastPage;
