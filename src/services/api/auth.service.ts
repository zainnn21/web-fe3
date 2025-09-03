import axios from "axios";

interface UserRegister {
  email: string;
  password: string;
  createdAt: Date;
  avatar?: string;
  gender: string;
  phone: number;
  countryCode: string;
}

interface UserLogin {
  email: string;
  password: string;
}

const API_URL = "https://68b67b2873b3ec66cec1a8fa.mockapi.io";

export const registerUser = (data: UserRegister, ) => {
  axios
    .post(API_URL + "/users", data)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const loginUser = (data: UserLogin) => {
  axios
    .post(API_URL + "/users", data)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
