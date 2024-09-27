import { useState } from "react";

const tabContents = [
  {
    title: "Mision",
    description:
      "La carrera de Medicina tiene como misión formar profesionales altamente capacitados en el cuidado de la salud, comprometidos con la promoción del bienestar físico y mental de la comunidad. Los médicos se esfuerzan por aplicar conocimientos científicos, habilidades clínicas y principios éticos para proporcionar atención integral, humanizada y de calidad a sus pacientes.",
  },
  {
    title: "Vision",
    description:
      "La visión de la carrera de Medicina es ser un referente en la formación de médicos innovadores y líderes en salud, capaces de enfrentar los desafíos del siglo XXI. Se busca promover una atención médica accesible y equitativa, donde la investigación y el avance tecnológico contribuyan a mejorar la calidad de vida de las personas y a garantizar un futuro saludable para la sociedad.",
  },
  {
    title: "Historia del Origen de la Carrera de Medicina",
    description:
      "La historia de la carrera de Medicina se remonta a las antiguas civilizaciones, donde el conocimiento sobre la salud y el tratamiento de enfermedades se transmitía de generación en generación.\n" +
        "\n" +
        "Antigüedad: Las primeras prácticas médicas se documentan en civilizaciones como la egipcia y la griega. En Egipto, médicos como Imhotep ya practicaban la medicina en 3000 a.C., combinando conocimientos sobre plantas medicinales con rituales religiosos.\n" +
        "\n" +
        "Grecia Clásica: En el siglo V a.C., Hipócrates estableció las bases de la medicina moderna, promoviendo la observación clínica y la ética médica. Se considera que la \"Juramento Hipocrático\" es un documento fundacional que establece principios éticos en la práctica médica.\n" +
        "\n" +
        "Medieval: Durante la Edad Media, la medicina experimentó un retroceso en Europa, pero se mantuvo viva en el mundo islámico, donde médicos como Avicena (Ibn Sina) realizaron importantes contribuciones con obras como \"El Canon de la Medicina\", que integraba conocimientos de la antigüedad y prácticas innovadoras.\n" +
        "\n" +
        "Renacimiento y Modernidad: Con el Renacimiento, la medicina comenzó a avanzar de nuevo, impulsada por la anatomía y la observación científica. Andreas Vesalio, en el siglo XVI, publicó \"De humani corporis fabrica\", que revolucionó el estudio de la anatomía.\n" +
        "\n" +
        "Siglo XIX y XX: La formalización de la carrera de Medicina comenzó en el siglo XIX, con la creación de escuelas de medicina en Europa y América. Se establecieron programas académicos estructurados y se promovieron prácticas clínicas. Durante este tiempo, se desarrollaron avances significativos como la anestesia y la antisepsia, transformando la práctica médica.\n" +
        "\n" +
        "Presente: Hoy en día, la carrera de Medicina abarca diversas especialidades y se basa en una sólida formación científica, ética y humana. Los médicos son vitales en el sistema de salud, enfrentando desafíos globales como pandemias, enfermedades crónicas y la promoción de la salud pública.",
  },
];

const CompanyTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="company-tab">
        <ul className="tabs">
          {tabContents?.map((tab, index) => (
            <li
              key={index}
              className={activeTab === index ? "active-tab" : ""}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </li>
          ))}
        </ul>

        <div className="tabs-content">
          <div className="list">
            <div className="ak-section-heading ak-style-1 ak-type-1">
              <div className="background-text">Sobre Nostros</div>
              <h3 className="desp">{tabContents[activeTab].description}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyTab;
