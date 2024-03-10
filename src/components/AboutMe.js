import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className='Acontainer' >
      <div className='Acard'>
                
<header class="masthead">
  <p class="masthead-intro">Hi, I'm</p>
  <h1 class="masthead-heading">Chethan</h1>
</header>


<div class="gradient">

<section>
  <h2>Introduction</h2>
    <p class="space-maker">Hello, I'm Chethan! I hold a background in Computer Science, having pursued my education from PU to completing my BCA degree. Currently, I am in the process of furthering my academic journey with an MCA. My passion for technology led me to explore and master the Python full stack, and I take pride in having successfully completed this program. Always eager to expand my skill set, I am currently engaged in learning new courses to stay abreast of the latest developments in the dynamic world of technology. I am enthusiastic about leveraging my knowledge and skills to contribute to the ever-evolving field of computer science.</p>
</section>

<section>
  <h2>Where I'm From</h2>
    <p class="space-maker">I hail from the vibrant state of Karnataka, often referred to as the "Land of Sandalwood." Residing in the bustling city of Bangalore, I find myself in the heart of Karnataka's technological landscape, earning the city its moniker as the "Silicon City." Bangalore is renowned for its dynamic IT industry, cultural diversity, and a thriving atmosphere that seamlessly blends tradition with modernity. Nestled in this lively metropolis, I am surrounded by the energy of innovation and the rich cultural heritage that Karnataka is known for, making it an exciting and inspiring place to be.</p>
</section>

<section>
  <h2>More About Me</h2>
  <h3>What are your favorite hobbies?</h3>
  <p class="space-maker"> I'm passionate about traveling on my bike and exploring scenic landscapes. In my free time, I delve into the world of bike and car modifications, combining my interest in mechanics and design. Additionally, I love experimenting with HTML and CSS, using them to apply animations and create new designs. These hobbies not only offer me a creative outlet but also serve as a continuous learning journey..</p>
  <h3>What's your dream job?</h3>
  <p class="space-maker">My dream job is to be a developer or software designer, where I can blend my passion for coding with a creative touch. I aspire to contribute to the development and design of innovative software solutions, combining functionality and aesthetics.</p>
  <h3>What is your work experience?</h3>
  <p class="space-maker">
As a fresher, I don't have any work experience yet. However, I am adaptable to various work environments and flexible with my schedule, willing to contribute my 100%.</p>
</section>
</div>
<footer class="content-footer">
  <div className='feedback'>
      <h2>Feedback Box</h2>
      <textarea
        rows="4"
        cols="50"
        placeholder="Type your feedback here... "
      />
      <br />
      <button className='but'>Submit Feedback</button>
    </div>
    <div className='download'>
      <h2>You Can Download My Resume Here&nbsp;&nbsp;</h2>
      <a className='Down' href="src\components\resume\Resume Chethan.L(1).pdf" download="Your_Name_Resume">Download Resume</a>
      </div>
</footer>
      </div>
    </div>
  );
};

export default AboutMe;
