import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { MoreBtn } from "../Button/Button";
import TeamCard from "./TeamCard";

const membersData = [
  {
    id: 1,
    name: "Pablo Patana M.",
    title: "Autor",
    image: "/assets/img/member/autor.jpeg",
    desp: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form injected humour, or randomised. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form injected humour, or randomised.",
    socialLinks: {
      linkedin: "https://www.facebook.com/",
      facebook: "https://bd.linkedin.com/",
      twitter: "https://www.instagram.com/",
    },
    contact: {
      address: "2118 Thornridge Cir, 35624",
      email: "example@example.com",
      phone: "+7 (903) 679-96-15",
      website: "www.website.com",
    },
  },
  {
    id: 2,
    name: "ChaGPT",
    title: "Co-autor",
    image: "/assets/img/member/autortwo.png",
    desp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    socialLinks: {
      linkedin: "https://www.facebook.com/",
      facebook: "https://bd.linkedin.com/",
      twitter: "https://www.instagram.com/",
    },
    contact: {
      address: "2118 Thornridge Cir, 35624",
      email: "example@example.com",
      phone: "+7 (903) 679-96-15",
      website: "www.website.com",
    },
  },
  {
    id: 3,
    name: "Mr. Cafe",
    title: "Supervisor",
    image: "/assets/img/member/autor3.jpg",
    desp: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    socialLinks: {
      linkedin: "https://www.facebook.com/",
      facebook: "https://bd.linkedin.com/",
      twitter: "https://www.instagram.com/",
    },
    contact: {
      address: "2118 Thornridge Cir, 35624",
      email: "example@example.com",
      phone: "+7 (903) 679-96-15",
      website: "www.website.com",
    },
  },
];

const Teams = () => {
  return (
    <div className="container">
      <div className="ak-height-190 ak-height-lg-80"></div>
      <div className="team-contant">
        <div className="team-heading" data-aos="fade-right">
          <SectionHeading
            bgText={"Equipo"}
            title={"El Equipo de Trabajo"}
            desp={
              "Juntos, forjamos un camino hacia el conocimiento y la salud, uniendo las visiones de la UPEA y la UMSA para empoderar a futuras generaciones de médicos y transformar la atención sanitaria en nuestra comunidad."
            }
          />
          <div className="ak-height-50 ak-height-lg-10"></div>
          <MoreBtn to={"/team"}>Ver Mas</MoreBtn>
        </div>
        <div
          className="teams"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
        >
          <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 g-3 g-md-3">
            {membersData?.map((member, index) => (
              <TeamCard key={index} member={member} delay={index * 50} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Teams;
