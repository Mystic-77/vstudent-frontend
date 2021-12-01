import React from "react";

const Button = (props) => {
    return (
        <>
            <button className="ui button" type="submit" onClick={props.onClick}>{ props.name }</button>
        </>
    );
};

export default Button;