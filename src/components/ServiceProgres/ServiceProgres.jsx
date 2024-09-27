import React from "react";
import { Link } from "react-router-dom";

const serviceProgresData = [
  {
    id: 1,
    number: 1,
    icon: "/assets/img/icon/speedome.svg",
    title: "Principio de Beneficencia",
    desp: "Este principio se refiere a la obligación del médico de actuar en beneficio del paciente, buscando siempre maximizar su bienestar. Implica proporcionar tratamientos que promuevan la salud y alivien el sufrimiento, minimizando los riesgos. El objetivo es tomar decisiones que favorezcan la calidad de vida y la curación del paciente.",
  },
  {
    id: 2,
    number: 2,
    icon: "/assets/img/icon/car-repair.svg",
    title: "Principio de No Maleficencia",
    desp: "Este principio establece que los médicos deben evitar causar daño a sus pacientes. \"Primero, no hacer daño\" es un concepto clave en la ética médica, que exige que los tratamientos y procedimientos médicos no generen daños innecesarios o riesgos desproporcionados. Se debe evaluar el balance entre el beneficio y el riesgo en cada intervención.",
  },
  {
    id: 3,
    number: 3,
    icon: "/assets/img/icon/car.svg",
    title: "Principio de Autonomía",
    desp: "La autonomía se refiere al derecho del paciente a tomar decisiones informadas sobre su propio cuerpo y tratamiento. Los médicos tienen la responsabilidad de respetar las decisiones del paciente, proporcionando información clara y comprensible sobre las opciones de tratamiento y sus implicaciones. Este principio reconoce la capacidad del paciente para tomar decisiones sobre su salud, siempre que sea competente para hacerlo.",
  },
];

const ServiceProgres = () => {
  return (
    <section className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="row  row-cols-1 row-cols-xl-3 g-4">
        {serviceProgresData?.map((item) => (
          <div
            className="service-progress-card"
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={
              item.number == 1 ? "" : item.number == 2 ? "100" : "200"
            }
          >
            <div className="progress-item">
              <h4 className="ak-stroke-number color-white">{item.number}</h4>
              <div className="ak-border-width"></div>
            </div>
            <div className="service-item">
              <div className="heartbeat-icon">
                <Link to="#">
                  <span className="ak-heartbeat-btn">
                    <img src={item.icon} alt="..." />
                  </span>
                </Link>
              </div>
              <div className="service-info">
                <h4 className="title">{item.title}</h4>
                <p className="desp">{item.desp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceProgres;
