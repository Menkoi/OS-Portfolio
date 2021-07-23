import React, {useState} from "react";
//import Modal from "react-bootstrap/Modal";
import About from './About';
import Portfolio from './Portfolio';

function Home () {
    return (
      <section>
        <div class="folders">
          <div class="content1">
            <a href="#test1" data-modal-type="test1" >
              <img src="https://i.imgur.com/UbyyT5e.png" class="folder-img" alt="" ></img>
            </a>
          </div>

          <div class="content1">
            <a href="#portfolio" data-toggle="modal">
              <img src="https://i.imgur.com/LyYC0zw.png" class="folder-img" alt=""></img>
            </a>
          </div>

          <div class="content1">
            <a href="test3">
              <img
                src="https://i.imgur.com/OStDTqu.png"
                class="folder-img"
                alt=""
              ></img>
            </a>
          </div>

          <div class="content1">
            <a href="test4">
              <img
                src="https://i.imgur.com/CZrtfWX.png"
                class="folder-img"
                alt=""
              ></img>
            </a>
          </div>
        </div>


            <About id="test1"></About>
            <Portfolio></Portfolio>



        

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