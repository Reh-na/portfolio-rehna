import React from 'react'
import portpic from '../images/WhatsApp_Image_2023-05-24_at_9.24.47_AM-removebg-preview(1).png'
import Slide2 from '../component/Slide2'
import Slide3 from '../component/Slide3'
import Header from '../component/Header';
function Home() {
  return (
   <>
   <div className='wrapper row' style={{height:"100vh",width:'100%'}}>

    <section className='one' id='homesection'>
  <div className="headover "><Header/></div>
            <div className='main row'  style={{display:"flex"}}>
                <div className='first col-md-6 ' style={{height:'100vh',width:'70%',backgroundColor:'#00264d'}}>
                    <div className='homecontent' style={{display:'flex',justifyContent:'space-around',alignItems:'center',height:'100vh', color:'#ffd11a'}}>
    <div>
                            <h1 className='homehead' style={{fontSize:'50px',textShadow:'1px 1px 4px black'}}>MERN STACK <br/> DEVELOPER.</h1>
        <p style={{fontSize:'25px',marginTop:'30px',color:'white',textShadow:'1px 1px 4px black'}}>I Build Things for Web</p>
        <div className='homehead' style={{fontSize:'15px',width:'400px',marginTop:'90px',textShadow:'1px 1px 4px black'}}>an enthusiastic and dedicated MERN (MongoDB, Express.js, React.js, Node.js) stack developer currently pursuing an internship to further hone my skills and contribute to real-world projects.
    </div>
    </div>                </div>
                </div>
                <div className="second col-md-6" style={{height:'100vh',width:'30%',backgroundColor:'#ffd11a',display:'flex',alignItems:'center'}}>
                <img src={portpic} style={{width:'50vh',marginLeft:'-130px'}} className="overlay-image"></img>
                </div>
            </div>
    </section>
    <section className='two'>
      
      <Slide2/>
    </section>
    <section className='three'>
      <Slide3/>
    </section>
   </div>
   </>
  )
}

export default Home