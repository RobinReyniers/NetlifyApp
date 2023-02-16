import React from "react";
import { useEffect } from "react";

function jokes() {
  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <div>{}</div>;
}

export default jokes;
