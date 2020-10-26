import api from "../services/api";

interface Response {
  token: string;
  user: {};
}

export function singIn(): Promise<Response> {
  return new Promise(resolve => {
    const userData = {};

    const response = () =>
      api
        .post("/auth/signin", {
          cpf: 12345678901,
          password: "12345678"
        })
        .then(response => {
          return response.data;
        })
        .catch(error => console.log(error));

    //console.log(response);

    resolve({
      token: "asdasdasdasdasdasdasd",
      user: response()
    });
  });
}

// const requestOptions = {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     cpf: 12345678901,
//     password: "12345678"
//   })
// };
