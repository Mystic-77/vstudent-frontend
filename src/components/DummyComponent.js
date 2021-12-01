import React from "react";
import myToken from "../api/token";
const DummyComponent = (props) => {
    return (
        <>
        <h1>{props.title}</h1>
        <h5>My token : {myToken.token}</h5>
        </>
    );
};

export default DummyComponent;