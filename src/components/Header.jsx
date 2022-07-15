import React from "react";

function Header() {
    const link="https://github.com/saxena07";
return (
    <header className="header">
    <div className="projects" onClick={()=> window.open(link, "_blank")}>Projects</div>
    <div className="portfolio">PORTFOLIO</div>
    </header>
);
}

export default Header;