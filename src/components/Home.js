import React from "react";

import Resume from './Resume';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

function Home () {

    return (
      <section>
        <div class="folders">
         <About></About>
         <Portfolio></Portfolio>
         <Resume></Resume>
         <Contact></Contact>
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