import React from "react";
import  ReactDOM  from "react-dom/client";

//Way 1

/*
const heading = React.createElement("h1",{}, "Hello React Heading 1");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
*/

//way 2
const heading = React.createElement("h1",{}, "Hello React Heading 1");
const heading2 = React.createElement("h2",{}, "Hello React Heading 2 from Parcel");

const container = React.createElement("div",{
    id:"container",
    className:"container"
}, [heading, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);

