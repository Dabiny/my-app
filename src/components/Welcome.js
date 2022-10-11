import React from "react";
import hamster from "../images/20210124112108.1447669.jpg";

export default function Welcome({ withImg, firstName, lastName}) {
    // images + Hello, firstname, LastNamse
    return (
        <>
        {withImg && <img src={hamster} alt="welcomeHamster" height="200"></img>}
        <div>Hello</div>
        <div>
            <span>{firstName}</span>
            {lastName}
        </div>
        </>
    )
}