interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function singIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: "asdasdasdasdasdasdasd",
        user: {
          name: "andre",
          email: "asd@gmail.com"
        }
      });
    }, 2000);
  });
}
