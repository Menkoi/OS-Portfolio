import React from 'react';
import Draggable from 'react-draggable'


function Portfolio () {
    return(
        <Draggable defaultPosition={{ x: 500, y: -400 }}
        defaultClassName="draggable" bounds="body">
            <div class="about-modal">
              <div class="modal-body">
                <div class="modalBar">
                  <a href="modal-open">
                    <button class="text-light bg-danger">
                      X
                    </button>
                  </a>
                </div>
                <div>
                  <img
                    src="https://i.imgur.com/cwLTOc4.png" alt="" class="modal-header"></img>
                  <div class="modal-header">
                    <h1>Portfolio</h1>
                  </div>
                </div>
                <div>
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
                </div>
              </div>
            </div>
        </Draggable>

    )
}

export default Portfolio;