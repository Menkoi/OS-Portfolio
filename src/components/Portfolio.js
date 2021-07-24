import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Draggable from 'react-draggable';
import Button from 'react-bootstrap/Button';

import ModalHeader from 'react-bootstrap/ModalHeader';
import { ModalBody, ModalDialog } from "react-bootstrap";


function Portfolio() {
    const [portfolioModal, setPortfolioModal] = useState(false);

  const showPortfolioModal = () => setPortfolioModal(true) ;
  const hidePortfolioModal = () => setPortfolioModal(false) ;
    return(
        <div class="content1">
            <a href="#Portfolio" onClick={showPortfolioModal}>
              <img src="https://i.imgur.com/LyYC0zw.png" class="folder-img" alt=""></img>
            </a>
            <Modal show={portfolioModal} onHide={hidePortfolioModal} >
          <Draggable defaultPosition={{ x: 400, y: -500 }}
              defaultClassName="draggable" bounds="body">
            <ModalDialog>
              <ModalHeader closeButton id="modal-bar">
              </ModalHeader>

              <ModalBody id="modal-body">
                <img src="https://i.imgur.com/cwLTOc4.png" alt="" class="modal-img"></img>
                <h1>Portfolio</h1>
                <h3>Check out some projects below</h3>
                <div class="portfolio-container">
                  <div class="portfolio-content1">
                  <h2>BookEnd</h2>
                  <img src="https://i.imgur.com/yPZ0Ytx.png"alt="" class="modal-img"></img>
                  <p>
                  Are you struggling to find a good book to read or show to watch?
                  During lockdown good media that you can sink your teeth in can be hard to find. 
                  Bookend is a website that will recomend books and Tv Shows that you can watch 
                  based on your prefences.
                  </p>
                  <a href="bookend-recommendations.herokuapp.com"  class="modal-btn">
                  <button>Live Site</button>
                  </a>
                  <a href="https://github.com/project3UOT/bookend">
                  <button>Github</button>
                  </a>
                  </div>

                  <div class="portfolio-content2">
                  <h2>Save Tv</h2>
                  <img src="https://i.imgur.com/czbuVWL.gif"alt="" class="modal-img"></img>
                  <p>
                  Thanks to the pandemic impacting everyone these days Most of us are spending a 
                  lot more time stuck inside That means this is the chance to catch up on that 
                  backlog of TV shows that you've been telling yourself you'll get around too So 
                  there comes our website branded as SAVE TV With Save TV you can easily find all 
                  of your favorite shows past, new or ongoing series.
                  </p>
                  <a href="https://utbootcampgroup2.github.io/SaveTV/"  class="modal-btn">
                  <button>Live Site</button>
                  </a>
                  <a href="https://github.com/UTBootCampGroup2/SaveTV">
                  <button>Github</button>
                  </a>
                  </div>
                  

                  

                  <h2>Reward Bank</h2>
                  <img src="https://i.imgur.com/mmAOUYP.png"alt="" class="modal-img"></img>
                  <p>
                  As the world begins to move more and more towards digital currency and away 
                  from physical, Reward Bank strives to teach children the importance of money 
                  management that reflects how we now interact with money.
                  </p>
                  <a href="https://rocky-dawn-18669.herokuapp.com"  class="modal-btn">
                  <button>Live Site</button>
                  </a>
                  <a href="https://github.com/UTBootCampGroup2Project2/reward-bank">
                  <button>Github</button>
                  </a>

                </div>
              </ModalBody>
            </ModalDialog>
          </Draggable>
          </Modal>
        </div>

    )
}

export default Portfolio;