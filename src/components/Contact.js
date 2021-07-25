import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Draggable from 'react-draggable'

import ModalHeader from 'react-bootstrap/ModalHeader';
import { ModalBody, ModalDialog } from "react-bootstrap";



function Contact() {
    const [contactModal, setContactModal] = useState(false);

    const showContact = () => setContactModal(true);
    const hideContact = () => setContactModal(false);
    return(
        <div class="content1">
            <a href="#Contact" onClick={showContact}>
              <img src="https://i.imgur.com/CZrtfWX.png" class="folder-img"alt=""></img>
            </a>
            <Modal show={contactModal} onHide={hideContact} >
          <Draggable defaultPosition={{ x: 600, y: -300 }}
              defaultClassName="draggable" bounds="body">
            <ModalDialog>
              <ModalHeader closeButton id="modal-bar">
              </ModalHeader>

              <ModalBody id="modal-body">
                <img src="https://i.imgur.com/cwLTOc4.png" alt="" class="modal-img"></img>
                <h1>Contact Me</h1>
                  <h2>
                    celaeon@gmail.com
                  </h2>
                  <h2>
                    +1 240-619-9707 
                  </h2>
              </ModalBody>
            </ModalDialog>
          </Draggable>
          </Modal>
        </div>
    )
}

export default Contact;