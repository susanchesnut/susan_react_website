import React, {Component} from "react";

class AboutMe extends Component {

  render() {
      return(
          <div>
            <section id="about" class="about-section text-center">
                <div class="container">
                  <div class="row">
                      <div class="col-lg-8 mx-auto">
                        <h2 class="text-white mb-4">Susan Chesnut</h2>
                        <p class="text-white">I am a problem solver at heart and have been a Software Engineer by trade. Now, I'm going to be a Licensed Surveyor.</p>
                        <p class="text-white">I spent the last 5 years broadening my technical skills and business knowledge. In one of my roles, Team Lead, I served as Scrum Master, vendor liaison, release manager, and a full-stack developer. My most current role was working with React.js, Python, and Azure services as a full-stack web developer. I'm currently changing things up and pursuing a career in Land Surveying. I am taking classes part-time and getting field experience; I'm enjoying being outdoors and helping people again. I also volunteer with Climate Connect, a nonprofit platform that aims to empower collaboration between climate actors. I'm excited for this new chapter in life!</p>
                        <p class="text-white">I grew up on a farm, having a deep appreciation and respect for nature and hard work. It is no surprise that outside of the office, I can usually be found enjoying the great outdoors; I love backpacking and reading in my hammock. I'm obsessed with plants, especially succulents. I've recently tried gowing vegetables & herbs in containers (sometimes upside down!).</p>
                      </div>
                  </div>
                </div>
            </section>
          </div>
      );

  }
}

export default AboutMe;