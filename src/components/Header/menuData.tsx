import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 6,
    title: "Partners",
    path: "/partners",
    newTab: false,
  },
  {
    id: 7,
    title: "Careers",
    path: "/careers",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 5,
    title: "Products",
    path: "/products",
    newTab: false,
    submenu: [
      { title: "Marge", path: "/product-details/marge" },
      { title: "Proprium", path: "/product-details/proprium" },
      { title: "Epistle", path: "/product-details/epistle" },
      { title: "X9", path: "/product-details/x9" },
      { title: "Equiflo", path: "/product-details/equiflo" },
    ],
  },
  {
    id: 16,
    title: "Services",
    path: "/services",
    newTab: false,
  },
  {
    id: 9,
    title: "Request Demo",
    path: "/requestdemo",
    newTab: false,
  },
  {
    id: 8,
    title: "",
    path: "/becomeapartner",
    newTab: false,
  },
];
export default menuData;
