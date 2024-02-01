import React from 'react'
import ProModal from '../component/ProModal'
 
import weather from '../images/weather.png'
import bmi from '../images/bmi.png';
import remembery from '../images/remembery.png'
import netflix from '../images/netflix.png'
import interest from '../images/interest.png'
import country from '../images/country.png'
import Header from '../component/Header';
export const Projects = () => {

  const projects = [
    {
      title: "BMI CALCULATOR",
      description: "A BMI (Body Mass Index) calculator is a simple yet effective tool used to assess an individual's body weight in relation to their height. By inputting one's weight and height into the calculator, it calculates a numerical value that categorizes the individual into different BMI ranges, such as underweight, normal weight, overweight, or obese",
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
      description: "it is a classic and engaging activity that challenges players to find matching pairs of cards. The game typically begins with a set of face-down cards arranged in a grid. Players take turns flipping over two cards at a time, aiming to reveal identical images or symbols. Successfully matched pairs are kept, while unmatched cards are flipped face-down again. The game continues until all pairs have been discovered.",
      imgUrl: remembery,
      techs:'HTML,CSS,BOOTSTRAP,REACT',
      link:'https://remembery.netlify.app/'


    },
   
    {
      title: "SIMPLE INTEREST CALCULATOR",
      description: " A simple interest calculator app is a user-friendly tool designed to quickly compute the interest accrued on a principal amount over a specified period. With a clean and intuitive interface, users can input essential details such as the principal amount, interest rate, and the duration for which the interest is calculated.",
      imgUrl: interest,
      techs:'HTML,CSS,BOOTSTRAP,REACT',
      link:'https://interest-calculator-app.netlify.app/'

    },
    {
      title: "ALL ABOUT COUNTRY",
      description: "Design & Development",
      imgUrl: country,
      techs:'HTML,CSS,BOOTSTRAP,JAVASCRIPT',
      link:'https://detailscountry.netlify.app/'
 },
 {
  title: "WEATHER ",
  description: "Design & Development",
  imgUrl: weather,
  techs:'HTML,CSS,BOOTSTRAP,JAVASCRIPT',
  link:'https://detailscountry.netlify.app/'
},
   
  ];

  return (
  <div className='pro' style={{backgroundColor:'#ffd11a'}}>
    <Header/>
    <div style={{textAlign:'center',color:'#00264d',fontSize:'50PX'}}><h1>
      PROJECTS </h1></div>
      <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',flexWrap:'wrap'}}>
                        
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
  );
}

export default Projects