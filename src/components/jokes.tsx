import React, { useState } from "react";
import { useEffect } from "react";

function Jokes() {
  const [joke, setjoke] = useState("");
  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return <p>{joke}</p>;
}

export default Jokes;
