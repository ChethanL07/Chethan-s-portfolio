import React from 'react';
import './Projects.css';
import schoolboy from'./../components/images/schoolboy1.jpg';
import doctor from'./../components/images/drimage2.jpg';
import farmer from'./../components/images/farmer3.jpg';



const Projects = () => {
  return (
    <div className='Pcontainer'>
       <div className='PFcard'>
                  <div class="wrap animate pop">
              <div class="overlay">
                <div class="overlay-content animate slide-left delay-2">
                  <h1 class="animate slide-left pop delay-4">Project<br />1</h1>
                  <p class="animate slide-left pop delay-5" style={{ color: 'white', marginBottom:'2.5rem' }}>School Management System</p>
                </div>
                <div class="image-content animate slide delay-5"></div>
                <div class="dots animate">
                  <div class="dot animate slide-up delay-6"></div>
                  <div class="dot animate slide-up delay-7"></div>
                  <div class="dot animate slide-up delay-8"></div>
                </div>
              </div>
              <div class="text">
                <p><img class="inset" src={schoolboy} alt="" />The School Management System I developed utilizes PHP, HTML, CSS, and JavaScript to create an integrated platform that efficiently handles various administrative and academic tasks. Running on a web server such as Apache or Nginx and relying on a MySQL or PostgreSQL database, the system ensures secure user authentication for administrators, teachers, students, and parents. It features a dynamic dashboard tailored to different user roles, enabling tasks like student management, class scheduling, attendance tracking, and grade and exam management. </p>
                <p>The system also incorporates communication tools, fee and finance management, library cataloging, and robust reporting functionalities. With a responsive design using Bootstrap and enhanced interactivity through jQuery and AJAX, the School Management System strives to provide a comprehensive solution for educational institutions, fostering efficient administration and improved communication among stakeholders. Ongoing development focuses on continual learning and enhancements to reach optimal functionality and user satisfaction.</p>
              </div>
            </div>

            <div className='ppa'>
                    <p>A School Management System (SMS) serves as a comprehensive software solution designed to streamline and automate diverse administrative and academic processes within an educational institution. This multifaceted project encompasses modules for student information management, handling admissions, transfers, and withdrawals. It further extends to class and timetable management, facilitating the creation of schedules, subject assignments, and teacher allocations, as well as automating attendance tracking and generating detailed reports for analysis. The system also incorporates features for grading and exam management, allowing for the recording and analysis of student performance.</p>
                  </div>

            <div className='PScard'>
            <div class="wrap animate pop">
              <div class="overlay">
                <div class="overlay-content animate slide-left delay-2">
                  <h1 class="animate slide-left pop delay-4">Project<br />2</h1>
                  <p class="animate slide-left pop delay-5" style={{ color: 'white', marginBottom:'2.5rem' }}>Hospital Management System</p>
                </div>
                <div class="image-content2 animate slide delay-5"></div>
                <div class="dots animate">
                  <div class="dot animate slide-up delay-6"></div>
                  <div class="dot animate slide-up delay-7"></div>
                  <div class="dot animate slide-up delay-8"></div>
                </div>
              </div>
              <div class="text">
                <p><img class="inset" src={doctor} alt="" />The Hospital Management System is a dynamic web application developed using PHP, HTML, CSS, and JavaScript (JS). PHP serves as the server-side scripting language, seamlessly interacting with the front-end interface created using HTML and CSS for a user-friendly design. JavaScript enhances the system's interactivity and responsiveness. This comprehensive system caters to the basic requirements of a hospital, facilitating efficient patient information management, appointment scheduling, and staff coordination. The PHP-driven backend ensures secure data handling, while HTML, CSS, and JS collectively contribute to an intuitive and visually appealing user experience. The Hospital Management System's key features include patient record management, appointment tracking, and staff coordination, making it a robust solution for streamlined healthcare administration.</p>
                <p>The use of HTML and CSS contributes to a responsive and visually cohesive design, making the system accessible across various devices. This web-based solution optimizes hospital operations by providing modules for inventory management, billing, and generating insightful reports for informed decision-making.</p>
              </div>
            </div>
            </div>
            <div className='ppar'>
                    <p>A Hospital Management System (HMS) project is a comprehensive software initiative designed to optimize and streamline various administrative and healthcare processes within a medical institution. This multifaceted system encompasses modules for patient information management, ensuring the efficient recording and retrieval of patient details, medical history, and treatment plans. It includes functionalities for appointment scheduling, allowing both staff and patients to manage appointments seamlessly.Ultimately, the Hospital Management System aims to enhance the overall efficiency of healthcare delivery, reduce manual errors, and improve patient care through the seamless integration of various hospital processes. </p>
                  </div>

        <div className='PTcard'>
        <div class="wrap animate pop">
              <div class="overlay">
                <div class="overlay-content animate slide-left delay-2">
                  <h1 class="animate slide-left pop delay-4">Project<br />3</h1>
                  <p class="animate slide-left pop delay-5" style={{ color: 'white', marginBottom:'2.5rem' }}>Agriculture Information System</p>
                </div>
                <div class="image-content3 animate slide delay-5"></div>
                <div class="dots animate">
                  <div class="dot animate slide-up delay-6"></div>
                  <div class="dot animate slide-up delay-7"></div>
                  <div class="dot animate slide-up delay-8"></div>
                </div>
              </div>
              <div class="text">
                <p><img class="inset" src={farmer} alt="" />The Agriculture Information System (AIS) is designed for efficient agricultural management using a simple yet effective combination of HTML and CSS. This web-based system offers a user-friendly interface accessible across various devices with basic internet connectivity. It facilitates farmers in monitoring crop cycles, weather forecasts, and soil conditions. The AIS, built with HTML and CSS, provides a platform for inputting and retrieving essential data related to cultivation, allowing farmers to make informed decisions. Its minimal system requirements make it accessible to a wide range of users, fostering the integration of technology into agricultural practices with ease.</p>
                <p>The system's responsive design ensures accessibility from desktops, laptops, and mobile devices. This lightweight application focuses on key functionalities, such as crop management and weather insights, presenting information in a clear and organized manner. With its reliance on basic system requirements, the AIS serves as a practical tool, empowering farmers with valuable insights for improved decision-making in their agricultural endeavors. The use of HTML and CSS not only simplifies the user interface but also contributes to a scalable and adaptable system catering to diverse agricultural needs.</p>
              </div>
            </div>
        </div>

        <div className='para'>
                    <p>An Agriculture Information System (AIS) is a comprehensive technological solution designed to optimize and modernize various aspects of agricultural management and decision-making. This system integrates data from multiple sources, providing farmers, policymakers, and agricultural stakeholders with valuable insights to enhance productivity and sustainabilityThe core functionalities of an AIS include crop management, which involves monitoring and managing crop cycles, planting schedules, and harvesting data. It incorporates weather forecasting and climate information to help farmers make informed decisions about crop selection and cultivation practices. Soil health monitoring is another crucial aspect, offering real-time data on soil conditions, nutrient levels, and recommendations for optimal farming practices.</p>
                  </div>

       </div>
    </div>
  );
};

export default Projects;
