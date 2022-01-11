import { useEffect } from "react";

const Fetch = () => {
  useEffect(() => {
    fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: ` 

              query {
                 persona(id:1){
                    nombre
                    edad
                    hobbies
                }
              }


          	`,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
      });
  });

  return <h1> Loading... </h1>;
};

export default Fetch;
