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
                    <p class="text-white-50">I'm a problem solver at heart, and a Software Engineer by trade. I enjoy finding efficient and practical solutions to real-world problems, but mostly, I'm passionate about helping people.</p>
                    {/* <p class="text-white-50">I have 4 years in the oil and gas industry. I want to pivot and use my skills to contribute to sustainable/environmentally friendly focused fields. I grew up on a farm and love agriculture, especially plants. I'm looking for companies where I can combine those skills/interests with my software develping expertise.
                    </p> */}
                    </div>
                </div>
                </div>
            </section>
          </div>
      );

  }
}

export default AboutMe;