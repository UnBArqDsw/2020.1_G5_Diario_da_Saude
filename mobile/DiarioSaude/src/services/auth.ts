import api from "../services/api";
import { useState } from "react";

interface Response {
  token: string;
  user: {};
}

export function singIn(cpf: number, passowrd: string) {
  return api
    .post("/auth/signin", {
      cpf: cpf,
      password: passowrd
    })
    .then(res => {
      return res.data;
    })
    .catch(error => console.log(error));
}

// export async function singIn(): Promise<Response> {
//   return new Promise(resolve => {
//     const response = api
//       .post("/auth/signin", {
//         cpf: 12345678901,
//         password: "12345678"
//       })
//       .then(res => {
//         return res.data;
//       })
//       .catch(error => console.log(error));

//     // console.log(response);

//     resolve({
//       token: "asdasdasdasdasdasdasd",
//       user: response
//     });
//   });
// }
