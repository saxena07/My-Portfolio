import React from "react";
import ach from "./achievement";

function achItem(achitem){
    return (
        <div className="achsection">
        <div className="tchead">{achitem.Platform}</div>
        <div className="tc">✨ {achitem.title}</div>
        <div className="date">: {achitem.date}</div>
        </div>
     );
}

function achievements() {
    return (
        <div className="ach">
        <div className="back">
            <h1>ACHIEVEMENTS/HONORS AND AWARDS</h1>
            <div>{ach.map(achItem)}</div>
            </div>
        </div>
    );
    }

export default achievements;