import React from 'react'
import '../component/slide2.css'
function Slide2() {
  return (
    <div>

      <div className='slide' style={{ backgroundColor: 'white', height: '105vh' }}>
        <div className='slidecontainer' style={{ width: '80%', marginTop: '10%', marginBottom: '10%', marginLeft: '8%', marginRight: '8%' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className='aboutcont'>
              <h1 className='headeslide'>About me</h1>
              <p className="paraslide">I'm <span style={{ fontWeight: 'bolder' }}>REHNA PG,</span> a seasoned MERN Stack Developer passionate about creating dynamic and user-centric web applications. With expertise in MongoDB, Express.js, React.js, and Node.js, I specialize in crafting seamless end-to-end solutions. From designing captivating front-end interfaces with React.js to building robust and scalable server-side applications using Node.js and Express.js, I thrive on turning innovative ideas into functional code.</p>
            </div>
            <div className='emptydiv'></div>
          </div>
          <div style={{ marginTop: '5%' }}>

            <div className='skilldiv'>

              <h1 className="headeslide">Skills</h1>
              <p className='paraslide'>
                <div className='skillgroup' style={{ display: 'flex', flexWrap: 'wrap' }}>
                  <div className="skill">HTML</div>
                  <div className="skill">JAVASCRIPT</div>
                  <div className="skill">CSS</div>
                  <div className="skill">BOOTSTRAP</div>
                  <div className="skill">REACT</div>
                  <div className="skill">NODE JS</div>
                  <div className="skill">MONGO DB</div>
                  <div className="skill">EXPRESS JS</div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide2