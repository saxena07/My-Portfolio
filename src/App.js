import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import Footer from "./components/footer";
import Achievement from "./components/Achievements";

function App() {
  return (
    <div className="App">
       <Header/>
       <Body/>
       <Skills />
       <Achievement />
       <Contacts />
       <Footer />
    </div>
  );
}

export default App;
