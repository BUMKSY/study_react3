import React from "react";

const UnsplashItem = (props) => {
  return (
    <li>
      <a href="/">
        <img src={props.picture.urls.regular} />
      </a>
    </li>
  );
};
const UnsplashCont = (props) => {
  return (
    <section className="cont__unsplash">
      <div className="container">
        <div className="unsplash__inner">
          <ul>
            {props.pictures.map((picture) => (
              <UnsplashItem key={picture.id} picture={picture} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default UnsplashCont;
