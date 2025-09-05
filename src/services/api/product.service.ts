import axios from "axios";
import type { Product } from "../types/product";

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
