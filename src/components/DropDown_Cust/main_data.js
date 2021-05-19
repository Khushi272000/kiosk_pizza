import { makeAutoObservable, toJS } from "mobx";

class MainData {
  constructor() {
    makeAutoObservable(this);
  }
  options = [
    {
      id: 1,
      type: "Size",
    },
    
  ];
  dataset = [
    {
      id: 1,
      type: "Sizes",
      details: [
        {
          name: "Small",
          price: 12.0,
          quantity: 0,
        },
        {
          name: "Medium",
          price: 16.0,
          quantity: 0,
        },
        {
          name: "Large",
          price: 20.0,
          quantity: 0,
        },
        {
          name: "X-Large",
          price: 24.0,
          quantity: 0,
        },
      ],
    },
  ];
}
export const dataClass = MainData;
window.toJS = toJS;
