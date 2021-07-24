import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Draggable from 'react-draggable'

import ModalHeader from 'react-bootstrap/ModalHeader';
import { ModalBody, ModalDialog } from "react-bootstrap";

function Home () {
  const [aboutModal, setAboutModal] = useState(false);
  const [portfolioModal, setPortfolioModal] = useState(false);
  const [resumeModal, setResumeModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);

  const showAboutModal = () => setAboutModal(true);
  const hideAboutModal = () => setAboutModal(false);

  const showPortfolioModal = () => setPortfolioModal(true) ;
  const hidePortfolioModal = () => setPortfolioModal(false) ;

  const showResume = () => setResumeModal(true);
  const hideResume = () => setResumeModal(false);

  const showContact = () => setContactModal(true);
  const hideContact = () => setContactModal(false);

  
  //let rand = () => Math.floor(Math.random() * 20) - 10;

    return (
      <section>
        <div class="folders">

          <div class="content1">
            <a href="#About" onClick={showAboutModal}>
              <img src="https://i.imgur.com/UbyyT5e.png" class="folder-img" alt="" ></img>
            </a>
          </div>
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

          <div class="content1">
            <a href="#Portfolio" onClick={showPortfolioModal}>
              <img src="https://i.imgur.com/LyYC0zw.png" class="folder-img" alt=""></img>
            </a>
          </div>
          <Modal show={portfolioModal} onHide={hidePortfolioModal} >
          <Draggable defaultPosition={{ x: 200, y: -400 }}
              defaultClassName="draggable" bounds="body">
            <ModalDialog>
              <ModalHeader closeButton id="modal-bar">
              </ModalHeader>

              <ModalBody id="modal-body">
                <img src="https://i.imgur.com/cwLTOc4.png" alt="" class="modal-img"></img>
                <h1>Portfolio</h1>
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





          <div class="content1">
            <a href="#Resume" onClick={showResume}>
              <img
                src="https://i.imgur.com/OStDTqu.png" class="folder-img" alt=""></img>
            </a>
          </div>
          <Modal show={resumeModal} onHide={hideResume} >
          <Draggable defaultPosition={{ x: 700, y: -400 }}
              defaultClassName="draggable" bounds="body">
            <ModalDialog>
              <ModalHeader closeButton id="modal-bar">
              </ModalHeader>

              <ModalBody id="modal-body">
                <img src="https://i.imgur.com/cwLTOc4.png" alt="" class="modal-img"></img>
                <h1>Resume</h1>
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




          <div class="content1">
            <a href="#Contact" onClick={showContact}>
              <img src="https://i.imgur.com/CZrtfWX.png" class="folder-img"alt=""></img>
            </a>
          </div>
          <Modal show={contactModal} onHide={hideContact} >
          <Draggable defaultPosition={{ x: 600, y: -500 }}
              defaultClassName="draggable" bounds="body">
            <ModalDialog>
              <ModalHeader closeButton id="modal-bar">
              </ModalHeader>

              <ModalBody id="modal-body">
                <img src="https://i.imgur.com/cwLTOc4.png" alt="" class="modal-img"></img>
                <h1>Contact Me</h1>
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

        

        <div class="container-widgets">
          <div class="widgets-1">
            <a href="https://github.com/Menkoi">
              <img src="https://i.imgur.com/vd9FfAM.png" alt="" class="widget-thumbnail"></img>
            </a>
          </div>

          <div class="widgets-1">
            <a href="https://www.linkedin.com/in/brandon-burton-9b59a2215/">
              <img src="https://i.imgur.com/NFZhEsp.png" alt="" class="widget-thumbnail"></img>
            </a>
          </div>
        </div>
      </section>
    );
}

export default Home;