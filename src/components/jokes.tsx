import React, { useState } from "react";
import { useEffect } from "react";

function jokes() {
  const [joke, setJoke] = useState("");
  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => setJoke(data));
  }, []);
  return <div>{joke}</div>;
}

export default jokes;
