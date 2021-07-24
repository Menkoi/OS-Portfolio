import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Draggable from 'react-draggable'

import ModalHeader from 'react-bootstrap/ModalHeader';
import { ModalBody, ModalDialog } from "react-bootstrap";



function About() {
    const [aboutModal, setAboutModal] = useState(false);

    const showAboutModal = () => setAboutModal(true);
    const hideAboutModal = () => setAboutModal(false);
    return(
        <div class="content1">
            <a href="#About" onClick={showAboutModal}>
              <img src="https://i.imgur.com/UbyyT5e.png" class="folder-img" alt="" ></img>
            </a>
            <Modal show={aboutModal} onHide={hideAboutModal} >
          <Draggable defaultPosition={{ x: 500, y: -400 }}
              defaultClassName="draggable" bounds="body">
            <ModalDialog>
              <ModalHeader closeButton id="modal-bar">
              </ModalHeader>

              <ModalBody id="modal-body">
                <img src="https://i.imgur.com/cwLTOc4.png" alt="" class="modal-img"></img>
                <h1>About Me</h1>
                  <p>
                  Welcome! My name is Brandon Burton, I am a front end developer with a background of leadership
                  skills from the US Army and life-long dedication to learning. Effective at 
                  combining creativity and problem solving to develop
                  user-friendly applications. Known for going the extra mile to meet deadlines to achieve that goal.
                  </p>
                  <img src="https://i.imgur.com/uQPDXCv.png" alt="" class="about-img"></img>
              </ModalBody>
            </ModalDialog>
          </Draggable>
          </Modal>
          </div>
    )
}

export default About;