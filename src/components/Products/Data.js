import { makeAutoObservable } from "mobx";
import product1 from "../../Assets/product1.jpg";
import product2 from "../../Assets/product2.jpg";
import product3 from "../../Assets/product3.jpg";
import { dataClass } from "../DropDown_Cust/main_data";

class ProductsData {
  constructor() {
    makeAutoObservable(this);
  }
  productsData = [
    {
      img: product1,
      alt: "pizza",
      name: "CANADIAN EH!",
      desc: " Our famous dipping sauce is now a pizza! It's packed with delicious creamy garlic flavour in every bite- starting with creamy garlic base sauce, six-cheese blend and topped with parmesan cheese and roasted garlic.",
      price: "$19.99",
      button: "Add to Cart",
      details: new dataClass(),
    },
    {
      img: product2,
      alt: "pizza",
      name: "GARDEN VEGGIE",
      desc: " Your daily recommended awesome - Eating your veggies never tasted so good. Bite into the market-fresh crunch of green peppers, fresh mushrooms, juicy roma tomatoes, and mozzarella on a whole grain crust.",
      price: "$13.99",
      button: "Add to Cart",
      details: new dataClass(),
    },
    {
      img: product3,
      alt: "pizza",
      name: "PESTO AMORE",
      desc: "Fall in love with fresh veggies - This market-inspired recipe tops a crisp whole grain crust with fresh spinach, fire-roasted red peppers, red onions, basil pesto sauce, goat cheese and mozzarella. What's not to love?",
      price: "$21.99",
      button: "Add to Cart",
      details: new dataClass(),
    },
  ];
}

export const products_data = new ProductsData();
window.products_data = products_data;
