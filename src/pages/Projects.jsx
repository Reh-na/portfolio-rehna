import React from 'react'
import ProModal from '../component/ProModal'
 import './projects.css'
import weather from '../images/weather.png'
import bmi from '../images/bmi.png';
import remembery from '../images/remembery.png'
import netflix from '../images/netflix.png'
import interest from '../images/interest.png'
import country from '../images/country.png'
import Header from '../component/Header';
import Footer from '../component/Footer';

export const Projects = () => {

  const projects = [
    {
      title: "BMI CALCULATOR",
      description: "A BMI (Body Mass Index) calculator is a simple yet effective tool used to assess an individual's body weight in relation to their height.",
      imgUrl: bmi,
      techs:'HTML,CSS,BOOTSTRAP,REACT',
      link:'https://bmi-calculator-28.netlify.app/'
 },
    {
      title: "NETFLIX CLONE",
      description: "designed to replicate the user interface and functionalities of the popular streaming service",
      imgUrl: netflix,
      techs:'HTML,CSS,BOOTSTRAP,REACT',
      link:'https://netflix-18.netlify.app/'

    },
    {
      title: "REMEMBERY",
      description: " Players take turns flipping over two cards at a time, aiming to reveal identical images or symbols. Successfully matched pairs are kept, while unmatched cards are flipped face-down again. ",
      imgUrl: remembery,
      techs:'HTML,CSS,BOOTSTRAP,REACT',
      link:'https://remembery.netlify.app/'


    },
   
    {
      title: "SIMPLE INTEREST CALCULATOR",
      description: " A simple interest calculator app is a user-friendly tool designed to quickly compute the interest accrued on a principal amount over a specified period.",
      imgUrl: interest,
      techs:'HTML,CSS,BOOTSTRAP,REACT',
      link:'https://interest-calculator-app.netlify.app/'

    },
    {
      title: "ALL ABOUT COUNTRY",
      description: "Users can simply input the name of a specific country to access a wealth of relevant details such as the country's flag, official currency, continent, population size, current time, and the languages spoken",
      imgUrl: country,
      techs:'HTML,CSS,BOOTSTRAP,JAVASCRIPT',
      link:'https://detailscountry.netlify.app/'
 },
 {
  title: "WEATHER ",
  description: " The website offers a comprehensive overview of various weather parameters, including atmospheric pressure, wind speed and direction, humidity levels,local time and country in which the selected city is located",
  imgUrl: weather,
  techs:'HTML,CSS,BOOTSTRAP,JAVASCRIPT',
  link:'https://weather-details-1.netlify.app/'
},
   
  ];

  return (
 <>
    <div className='pro' style={{backgroundColor:'#ffd1a',padding:'2%'}}>
      <div className="headover " style={{marginTop:'-3%'}}><Header/></div>
      <div id='proheading' style={{textAlign:'center',color:'#00264d',fontSize:'50PX'}}><h1>
        PROJECTS </h1></div>
        <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',flexWrap:'wrap'}}>
                          
                              {
                                projects.map((project, index) => {
                                  return (
                                   <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'1%'}}>
                                      <ProModal
                                        key={index}
                                        {...project}
                                        />
                                   </div>
                                )
                              })
                            }
                        
          </div>    
            
  </div>
  <Footer/>

 </>
  );
}

export default Projects