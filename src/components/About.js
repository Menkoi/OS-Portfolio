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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
              </ModalBody>
            </ModalDialog>
          </Draggable>
          </Modal>
          </div>
    )
}

export default About;