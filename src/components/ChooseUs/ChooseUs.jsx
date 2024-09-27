import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { ButtonCommon } from "../Button/Button";

const chooseUsData = {
  bgText: "FUTURO",
  title: "Medicina: Una Vocación para Salvar Vidas y Mejorar el Mundo",
  desp: "Estudiar Medicina es más que una carrera, es un compromiso con la salud, el bienestar y el servicio a la humanidad. Los estudiantes de Medicina se preparan para enfrentar desafíos complejos y tomar decisiones que impactarán profundamente la vida de las personas. Desde el diagnóstico hasta el tratamiento, los médicos juegan un papel vital en la sociedad, promoviendo la salud y brindando esperanza a quienes más lo necesitan.",
  img: "/assets/img/chooseus/bgone.jpeg",
  list: [
    { title: "Impacto Directo en la Vida de las Personas" },
    { title: "Una Carrera de Crecimiento y Aprendizaje Constante" },
    { title: "Alta Demanda y Estabilidad Profesional" },
    { title: "Satisfacción Personal y Vocación de Servicio" },
  ],
};

const ChooseUs = () => {
  const { bgText, title, desp, list, img } = chooseUsData;

  return (
    <section className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="choose-us-container-extents">
        <div className="choose-us-contain">
          <div className="choose-us-info" data-aos="fade-up">
            <SectionHeading bgText={bgText} title={title} desp={desp} />
            <div className="ak-height-60 ak-height-lg-30"></div>
            <div className="stroke-heading-text">
              {list.map((item) => (
                <h3
                  key={item.title}
                  className="ak-stroke-text hover-color-changes"
                >
                  {item.title}
                </h3>
              ))}
            </div>
            <div className="ak-height-60 ak-height-lg-30"></div>
            <ButtonCommon to="/about"> Ver Mas</ButtonCommon>
          </div>
          <div
            className="choose-us-img"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <img src={img} alt="..." />
            <img
              className="circle-img"
              src="/assets/img/chooseus/Circle.png"
              alt="..."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
