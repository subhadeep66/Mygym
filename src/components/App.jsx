
import React from "react";
import NavBar from "./navBar";
import Greet from "./Greet";
import Card from "./Card";
import Footer from "./Footer";
import Marquee from "./Marquee";
import Membership from "./Membership";
import Logic from "./Logic";
import Details from "./Details";

function App(){
  return (<div >
    <NavBar/>
    <Greet/>
    <Card name="TO DO TODAY" details={<Logic/>}/>
    <Card name="CHECK LIST" details={<Details/>} />
    <Marquee/>
    <Membership name="Ram Dev" speciality="Yoga" info="He is primarily known for being a proponent of yoga and ayurveda in India. Ramdev has been organizing and conducting large yoga camps since 2002 and broadcasting his yoga classes on various TV channels. He is primarily known for being a proponent of yoga and ayurveda in India."/>
    <Membership name="Jen Selter" speciality="Fitness Influencer" info="Jennifer Leigh Jen Selter is an American Internet celebrity and fitness model. She attracted significant media attention for her debut at a young age, initially on the photo-sharing app Instagram. As of February 2023, Jen Selter had 13.6 million followers on Instagram."/>
    <Membership name="Vadym Oleynik" speciality="calisthenics" info="Vadym Oleynik calls himself the strongest calisthenics athlete in the world, and he's a sought-after coach and judge as well as holding several world championship titles. His feats of strength include incredible weighted muscle-ups that blend calisthenics with sheer"/>
    <Footer/>
    </div>)
}
export default App;