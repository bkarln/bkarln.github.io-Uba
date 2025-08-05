import person1 from "../src/assets/images/person7.jpg";
import person2 from "../src/assets/images/person2.jpg";
import person3 from "../src/assets/images/person3.jpg";
import person4 from "../src/assets/images/person4.jpg";
import person5 from "../src/assets/images/person5.jpg";
import person6 from "../src/assets/images/person6.jpg";
import person7 from "../src/assets/images/person1.jpg";
import person8 from "../src/assets/images/person8.jpg";
import person9 from "../src/assets/images/person9.jpg";
import person10 from "../src/assets/images/person10.jpg";
import img1 from "../src/assets/images/kitchen/kitchen1.jpg";
import img2 from "../src/assets/images/commercial/cr1.jpg";
import img3 from "../src/assets/images/living room/lr1.jpg";
import img4 from "../src/assets/images/kitchen/kitchen9.jpg";
import img5 from "../src/assets/images/living room/lr7.jpg";
import img6 from "../src/assets/images/commercial/cr9.jpg";
import { BsFillBuildingsFill, BsRocketFill } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";
import { HiCube } from "react-icons/hi2";
import { TbBulbFilled } from "react-icons/tb";
import { BiLogoFacebook, BiLogoInstagram, BiLogoBehance } from "react-icons/bi";

export const navLinks = [
  {
    id: 1,
    title: "Inicio",
    url: "#home",
  },
  {
    id: 2,
    title: "Sobre nós",
    url: "#about",
  },
  {
    id: 3,
    title: "Serviços",
    url: "#services",
  },
  {
    id: 4,
    title: "Portfolio",
    url: "#portfolio",
  },
  {
    id: 5,
    title: "Contato",
    url: "#contact",
  },
];

export const designers = [
  {
    id: 1,
    name: "Karolaine Brandelero",
    url: person1,
  },
  {
    id: 2,
    name: "Janaina Campos",
    url: person3,
  },
];

export const services = [
  {
    id: 1,
    title: "Concepção",
    content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    icon: <HiCube />,
  },
  {
    id: 2,
    title: "Planejamento",
    content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    icon: <TbBulbFilled />,
  },
  {
    id: 3,
    title: "Design",
    content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    icon: <MdDesignServices />,
  },
  {
    id: 4,
    title: "Construção",
    content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    icon: <BsFillBuildingsFill />,
  },
  {
    id: 5,
    title: "Launch",
    content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    icon: <BsRocketFill />,
  },
];

export const portfolio = [
  {
    id: 1,
    no: 10,
    phoneImg: img1,
    pcImg: img4,
    url: "",
    title: "Cozinha",
  },
  {
    id: 2,
    no: 11,
    phoneImg: img2,
    pcImg: img5,
    url: "",
    title: "Sala de star",
  },
  {
    id: 3,
    no: 10,
    phoneImg: img3,
    pcImg: img6,
    url: "",
    title: "COmerciais",
  },
];

export const reviews = [
  {
    id: 1,
    name: "Cliente 1",
    review:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    url: person7,
    company: "Itau",
    rating: 5,
  },
  {
    id: 2,
    review:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    name: "Cliente 2",
    url: person8,
    company: "Map Rio Branco",
    rating: 4,
  },
  {
    id: 3,
    review:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    name: "Cliente 3",
    url: person9,
    company: "Carrefour",
    rating: 4,
  },
];

export const socialLinks = [
  {
    id: 1,
    title: "Behance",
    url: "#home",
    icon: <BiLogoBehance />,
  },
  {
    id: 2,
    title: "Instagram",
    url: "#home",
    icon: <BiLogoInstagram />,
  },
  {
    id: 3,
    title: "Facebook",
    url: "#home",
    icon: <BiLogoFacebook />,
  },
];

export const category = [
  {
    id: 1,
    title: "Decoração",
    url: "#home",
  },
  {
    id: 2,
    title: "Furniture",
    url: "#home",
  },
  {
    id: 3,
    title: "Iluminação",
    url: "#home",
  },
  {
    id: 4,
    title: "Interior design",
    url: "#home",
  },
  {
    id: 5,
    title: "Design Arquitetural",
    url: "#home",
  },
  {
    id: 6,
    title: "Design Comercial",
    url: "#home",
  },
];
