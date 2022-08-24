import Tshirt from "../assets/images/clothes.jpg";

const productsData = [
  {
    id: 0,
    name: "Pants",
    detail: "These are simple pants in black with great material and fit try it once.",
    img: Tshirt,
    moreImage: [],
  },
  {
    id: 1,
    name: "Shoes",
    detail: "These are simple pants in black with great material and fit try it once.",
    img: Tshirt,
  },
  {
    id: 2,
    name: "Hats",
    detail: "These are simple pants in black with great material and fit try it once.",
    img: Tshirt,
  },
  {
    id: 3,
    name: "Bags",
    detail: "These are simple pants in black with great material and fit try it once.",
    img: Tshirt,
  },
  {
    id: 4,
    name: "Slippers",
    detail: "These are simple pants in black with great material and fit try it once.",
    img: Tshirt,
  },
];

export function getBrowsingData() {
  return productsData;
}

export function getProduct(id) {
  let tempProduct = {};
  for (let i = 0; i < productsData.length; i++) {
    if (productsData[i].id === id) {
      return productsData[i];
    }
  }
  return tempProduct;
}
