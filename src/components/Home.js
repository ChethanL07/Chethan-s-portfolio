import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='Hcontainer'>
      <div className='welcome'>
          <h2 className='anim'>Welcome To Chethan's Profile</h2>
          <div className='Box'>
                                <div class="cube-container">
                        <div class="cube">
                          <div class="face front"></div>
                          <div class="face back"></div>
                          <div class="face right"></div>
                          <div class="face left"></div>
                          <div class="face top"></div>
                          <div class="face bottom"></div>
                        </div>
                      </div>
          </div>
      </div>
      <div className='secondcard'>
            <div className='des'>
                <div class="ABcard">
                <h3>I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines.</h3>
                  </div>
            </div>
            <div className='photo'>
            </div>
          </div>
          <div className='Social'>
            <h1>Contact me</h1>
              <ol className='contact'>
                <li><a href='https://www.facebook.com/chetan.chethu.104?mibextid=ZbWKwL' target='_blank' >Facebook</a></li>
                <li>Github</li>
                <li><a href='mailto:chethanl2570@gmail.com'>Gmail</a></li>
                <li><a href='https://www.instagram.com/i_clown_i?igsh=dWl1cmM5d24xaj'  target='_blank' >Instagram</a></li>
                <li><a href='https://www.linkedin.com/in/chethan-l-417866263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'  target='_blank' >LinkedIn</a></li>
              </ol>
          </div>              
                     
    </div>
  );
};

export default Home;
