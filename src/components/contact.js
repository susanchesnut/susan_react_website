import React, { Component } from "react";
import _ from "lodash";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.openPDF = this.openPDF.bind(this);
  }

  openPDF(url) {
    var windowToOpen = window.open(url);
    if (_.isNil(windowToOpen)) return false;
    windowToOpen.focus();
    return false;
  }

  render() {
    return (
      <div id="contact" class="contact-section bg-black">
        <div class="container">
          <div class="row">
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <div class="fas fa-map-marked-alt text-primary mb-2" />
                  <div class="text-uppercase m-0">Address</div>
                  <div class="my-4" />
                  <div class="small text-black-50">Houston, TX</div>
                  <div class="small text-black-50">Willing to Relocate</div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <div class="fas fa-envelope text-primary mb-2" />
                  <div class="text-uppercase m-0">Email</div>
                  <div class="my-4" />
                  <div class="small text-black-50">
                    <a href="mailto: susan@susanchesnut.com">susan@susanchesnut.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <div class="fas fa-mobile-alt text-primary mb-2" />
                  <div class="text-uppercase m-0">Links</div>
                  <div class="my-4" />
                  <div class="small text-black-50">
                      <a href={require("../susanChesnutResume.pdf")} type="application/pdf" download>Download Resume</a>
                  </div>
                  <div class="small text-black-50">
                    <a href="https://www.linkedin.com/in/susanchesnut/">
                      LinkedIn
                    </a>
                  </div>
                  <div class="small text-black-50">
                    <a href="https://github.com/susanchesnut">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;