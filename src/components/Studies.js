import React from 'react';
import './Studies.css';
import high from'./../components/images/high.jpg';
import national from'./../components/images/national.jpg';
import eastwest from'./../components/images/eastwest.jpg';


const Studies = () => {
  return (
    <div className='Scontainer'>
      <h1>EDUCATION DETAILS</h1>
<div class="cards">
  <div class="card">
    <h2 class="card-title">High School</h2>
    <img src={high} alt="" />
    <p class="card-desc"><h4>THE BASAVESHWARA HIGH SCHOOL</h4>I actively engaged in various academic and extracurricular activities, fostering a well-rounded educational experience. The supportive atmosphere at Basaveshwara High School not only contributed to my academic success but also instilled in me a strong sense of discipline and teamwork. These formative years have laid a solid foundation for my educational pursuits and personal growth.</p>
  </div>
  <div class="card">
    <h2 class="card-title">PU College</h2>
    <img src={national} alt=""/>
    <p class="card-desc"><h4>THE NATIONAL PU COLLEGE</h4> I actively engaged in a variety of sports activities that not only contributed to my physical well-being but also instilled values of teamwork and discipline. The holistic educational experience at the college, combined with the emphasis on extracurricular activities, played a crucial role in shaping my overall development. I am grateful for the diverse opportunities and positive environment that National PU College provided during my academic journey.</p>
  </div>
  <div class="card">
    <h2 class="card-title">Degree College</h2>
    <img src={eastwest} alt=""/>
    <p class="card-desc"><h4>EAST WEST COLLEGE OF MANAGEMENT</h4>HI successfully completed my degree at East West College of Management, achieving a commendable CGPA of 8.9%. Beyond academics, the college became a vibrant community for me, fostering strong connections with wonderful friends. I actively participated in sports, enhancing my college experience with moments of camaraderie and healthy competition. East West College of Management not only provided a solid academic foundation but also enriched my personal and social growth.</p>
  </div>
</div>
      </div>
      
    
  );
};

export default Studies;
