import axios from "axios";

export interface Product {
  id: number;
  source: string;
  category: string;
  ptitle: string;
  srcprofile: string;
  profilename: string;
  job: string;
  jobspan: string;
  price: string;
  texttitle: string;
  duration: string;
}

export const getProduct = (callback: (data: Product[]) => void) => {
  axios
    .get("https://68b67b2873b3ec66cec1a8fa.mockapi.io/product")
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
