import React from "react";
import Languages, {webd, databases, hostplatform, others} from "../images/skill";

function Skillset(skill){
    var link=skill.link;
 return (
    <div className="skillset" onClick={()=> window.open(link, "_blank")}>
        <img src={skill.imgsrc} alt={skill.name} /> 
        <div className="skillname">{skill.name}</div>
    </div>
 );
}

function Skills() {
return (
    <div className="skill">
        <h1>SKILLS</h1>
        <h2>Languages and Tools : </h2>
        <div className="sec">
        <h3>Programming Languages</h3>
        {Languages.map(Skillset)}</div>
        <div className="sec">
        <h3>Web-Development</h3>
        {webd.map(Skillset)}</div>
        <div className="sec">
        <h3>Databases</h3>
        {databases.map(Skillset)}</div>
        <div className="sec">
        <h3>Hosting Platform</h3>
        {hostplatform.map(Skillset)}</div>
        <div className="sec">
        <h3>Others</h3>
        {others.map(Skillset)}</div>
    </div>
);
}

export default Skills;