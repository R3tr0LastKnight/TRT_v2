import React from "react";
import "./Bulletin.css";

const Bulletin = () => {
  return (
    <div>
      <div id="bulletin">
        <div id="bulletinHead">
          {/* <img src="Media/bulletin.svg" alt="" /> */}
          <h1>News Board</h1>
        </div>
        <hr />
        <div id="bulletinBody">
          <div class="wrapper">
            <div class="box">
              <div class="scroll">
                <ul>
                  <li>
                    <h2>HEADING 1</h2>
                  </li>
                  <li>02/12/2023</li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Expedita dolorum sit facere consectetur temporibus maxime
                    modi adipisci repellendus est porro, atque, ipsam unde
                    repudiandae soluta vitae mollitia vero facilis odio!
                  </li>
                </ul>
                <ul>
                  <li>
                    <h2>HEADING 2</h2>
                  </li>
                  <li>14/11/2023</li>
                  <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Obcaecati odio expedita cumque impedit hic eius cupiditate
                    delectus accusantium tempore aperiam saepe odit aut harum,
                    deleniti, labore, non vel ratione? At.
                  </li>
                </ul>

                <ul>
                  <li>
                    <h2>HEADING 3</h2>
                  </li>
                  <li>11/9/2023</li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aliquam minus, maxime aut, ex non velit corrupti vel
                    temporibus obcaecati magnam quod corporis pariatur quas
                    quisquam nemo quam reiciendis maiores neque!
                  </li>
                </ul>
                <ul>
                  <li>
                    <h2>HEADING 4</h2>
                  </li>
                  <li>07/07/2023</li>
                  <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus ipsam suscipit esse soluta error non ratione
                    reiciendis. Dignissimos, sequi laboriosam tempore dolores
                    ratione fugiat at consequuntur beatae recusandae porro
                    aliquid.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bulletin;
