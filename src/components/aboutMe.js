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
                        <p class="text-white-50">I'm a problem solver at heart and a Software Engineer by trade. I enjoy finding efficient and practical solutions to real-world problems, but mostly, I'm passionate about helping people.</p>
                        <p class="text-white-50">I spent the first 4 years of my career in upstream oil & gas in a high performance computing development environment, broadening my technical skills and business knowledge. In one of my roles, Team Lead, I served as Scrum Master, vendor liaison, release manager, and a full-stack developer. I'm currently working with React.js, Python, and Azure services as a full-stack web developer; it's a whole new set of technologies for me so I'm learning lots! It is my goal to work on challenging problems in a motivating environment.</p>
                        <p class="text-white-50">I grew up on a farm, having a deep appreciation and respect for nature and hard work. It is no surprise that outside of the office, I can usually be found enjoying the great outdoors; I love backpacking and reading in my hammock. I'm obsessed with plants, especially succulents. I've recently tried gowing vegetables & herbs in containers (sometimes upside down!). I would be delighted to find a company where I can combine my love and respect of nature with my technical software engineering skills.</p>
                      </div>
                  </div>
                </div>
            </section>
          </div>
      );

  }
}

export default AboutMe;