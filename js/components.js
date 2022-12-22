"use strict";

function Project(props) {
  return React.createElement("figure", null, React.createElement("a", {
    href: props.url,
    target: "_blank"
  }, React.createElement("img", {
    src: props.img
  })), React.createElement("figcaption", null, React.createElement("a", {
    href: props.url,
    target: "_blank"
  }, props.caption)));
}

function ProjectList() {
  return React.createElement("div", {
    id: "img-container"
  }, React.createElement(Project, {
    img: "images/facebook.png",
    caption: "facebook profile",
    url: "https://www.facebook.com/sakithmasandushi"
  }), React.createElement(Project, {
    img: "images/instagram.png",
    caption: "instagram profile",
    url: "https://www.instagram.com/sakithmasandushi"
  }), React.createElement(Project, {
    img: "images/twitter.png",
    caption: "twitter profile",
    url: "https://twitter.com/sakithmasandushi"
  }));
}

var el = React.createElement(ProjectList, null);
ReactDOM.render(el, document.getElementById("img-container"));