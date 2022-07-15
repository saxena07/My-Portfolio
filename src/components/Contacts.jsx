import React from "react";
import Contact from "./contact";


function Contactset(contact){
    var link = contact.link;
 return (
    <span className="contactset" onClick={()=> window.open(link, "_blank")}>
    <img src={contact.imgsrc} alt={contact.name} />
    </span>
 );
}

function Contacts() {
return (
    <div className="contactsection">
        <h1 className="contacttitle">CONTACTS & OTHER LINKS</h1>
        <div className="contactbody">{Contact.map(Contactset)}</div>
    </div>
);
}

export default Contacts;