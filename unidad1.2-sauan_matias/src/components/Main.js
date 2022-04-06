import React from "react";
import Body from "./Body";

const Main = ({ body, firstLink, secondLink }) => {
  return (
    <div>
      <Body body={body} />
      <navbar>
        <ul><a href="https://www.google.com/">{firstLink}</a></ul>
        <ul><a href="https://twitter.com/home">{secondLink}</a></ul>
      </navbar>
    </div>
  );
};

export default Main;