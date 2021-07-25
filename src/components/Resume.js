import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Draggable from 'react-draggable'

import ModalHeader from 'react-bootstrap/ModalHeader';
import { ModalBody, ModalDialog } from "react-bootstrap";



function Resume() {
    const [resumeModal, setResumeModal] = useState(false);

    const showResume = () => setResumeModal(true);
    const hideResume = () => setResumeModal(false);
  
    return(
        <div class="content">
            <a href="#Resume" onClick={showResume}>
                <img src="https://i.imgur.com/OStDTqu.png" class="folder-img" alt=""></img>
            </a>
            <Modal show={resumeModal} onHide={hideResume} >
          <Draggable defaultPosition={{ x: 200, y: -400 }}
              defaultClassName="draggable" bounds="body">
            <ModalDialog>
              <ModalHeader closeButton >
              </ModalHeader>

              <ModalBody id="modal-body">
                <img src="https://i.imgur.com/cwLTOc4.png" alt="" class="modal-img"></img>
                <h1>Resume</h1>
                  <h2> Programming Languages & Tools</h2>
                  <ul class="list-inline dev-icons">
                  <li class="list-inline-item"><i class="fab fa-html5"></i></li>
                  <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
                  <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
                  <li class="list-inline-item"><i class="fab fa-react"></i></li>
                  <li class="list-inline-item"><i class="fab fa-node-js"></i></li>  
                  <li class="list-inline-item"><i class="fab fa-bootstrap"></i></li>
                  <li class="list-inline-item"><i class="fab fa-npm"></i></li>
                  <li class="list-inline-item"><i class="fab fa-github"></i></li>
                  <li class="list-inline-item"><i class="fab fa-figma"></i></li>
                  </ul>
                  <h2>Fullstack Web Development Certificate </h2>
                  <h3>Universtiy of Toronto
                  <a href="https://drive.google.com/file/d/1HDTRstUBIZ5_dGM4VLUID82u7hoHrce2/view?usp=sharing"  class="btn-cert">
                      <button>View</button>
                    </a>
                  </h3>
                  <p>A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3,
                     Javascript, JQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS.
                  </p>
                  <h2>Technical Support Fundamentals </h2>
                  <h3>Google Career Certificates
                  <a href="https://www.coursera.org/account/accomplishments/certificate/ZV38Q9ABJ83K"  class="btn-cert">
                      <button>View</button>
                    </a>
                  </h3>
                  <p>learn about the different facets of Information Technology, like computer hardware, the Internet,
                     computer software, troubleshooting, and customer service.
                  </p>
                  <h2>Foundations of User Experience (UX) Design </h2>
                  <h3>Google Career Certificates
                  <a href="https://www.coursera.org/account/accomplishments/certificate/MUMSYQNB59K8"  class="btn-cert">
                      <button>View</button>
                    </a>
                  </h3>
                  <p>Understand foundational concepts in UX design, such as user-centered design, the design
                     process, accessibility, and equity-focused design.
                  </p>
                  <h2>Build Wireframes and Low-Fidelity Prototype </h2>
                  <h3>Google Career Certificates
                  <a href="https://www.coursera.org/account/accomplishments/certificate/5W6AVPF2P92J"  class="btn-cert">
                      <button>View</button>
                    </a>
                  </h3>
                  <p>Create storyboards to come up with ideas about solutions to user needs. Create wireframes on
                     paper and digitally in the design tool Figma. Build paper prototypes to create interactive
                     designs.
                  </p>
                    
              </ModalBody>
            </ModalDialog>
          </Draggable>
          </Modal>
        </div>
    )
}

export default Resume;