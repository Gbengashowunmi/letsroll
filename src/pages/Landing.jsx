import React from "react";
import "./waitlist.scss";
// import { TextField } from "@mui/material";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import HeadFoot from "../components/HeadFoot";
import { Icon } from "@iconify/react";
import Faq from "../components/Faq";
// import AOS from "aos";

export default function Landing() {
  return (
    <HeadFoot>
      <section className="hero_section">
        <aside className="left">
          <p>
            <strong> Get a car without hassle </strong>
          </p>
          <h3>Save Big wiith our car deals</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint et
            cum, dolore odit maxime fugit!
          </p>
          <div className="buttons">
            <button>Learn more</button>
            <button>About Us</button>
          </div>
        </aside>
        <aside className="right">
          <div className="image">
            <img src="/images/car11.png" alt="" />
          </div>
        </aside>
      </section>

      <article className="section1">
        <p>
          <strong> Get a car</strong>
        </p>
        <h4>Quick & easy car rental/purchase</h4>

        <div className="steps">
          <div className="step">
            <div className="icon">
              <Icon icon="fluent-mdl2:car" width="30" height="30" />
            </div>
            <h6>Select a car</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              molestias exercitationem maiores, quam aliquam eveniet!
            </p>
          </div>
          <div className="step">
            <div className="icon">
              <Icon icon="mdi:customer-service" width="70" height="70" />
            </div>
            <h6>Select a car</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              molestias exercitationem maiores, quam aliquam eveniet!
            </p>
          </div>
          <div className="step">
            <div className="icon">
              <Icon icon="ic:baseline-electric-car" width="40" height="40" />
            </div>
            <h6>Select a car</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              molestias exercitationem maiores, quam aliquam eveniet!
            </p>
          </div>
        </div>
      </article>

      <div className="about">
        <div className="about_left">
          <div className="image">
            <img src="/images/about_letsroll.jpg" alt="" />
          </div>
        </div>
        <div className="right">
          <p className="bigger_p">
            <strong> About Us</strong>
          </p>
          <h4>You start the engine and your adventure begins</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A et
            suscipit, consectetur perspiciatis nulla aut in id magnam
            praesentium nihil sed aspernatur provident quaerat blanditiis
            exercitationem. Odit corrupti consequatur delectus eum a perferendis
            neque dignissimos, provident atque quidem veritatis nemo velit
            quibusdam debitis beatae nesciunt?{" "}
          </p>
        </div>
      </div>

      <div className="why_us">
        <div className="left">
          <p>Why Choose Us</p>

          <h4>Best valued deals you will ever find</h4>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            quas tempora, modi tempore impedit fuga saepe corporis quia
            distinctio beatae?
          </p>

          <button>Find More</button>
        </div>
        <div className="right">
          <div className="reason">
            <div className="icon">
              <Icon icon="ic:baseline-electric-car" width="35" height="35" />
            </div>
            <div className="reason_details">
              <h5>Cross Country Drive</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
                autem.
              </p>
            </div>
          </div>
          <div className="reason">
            <div className="icon">
              <Icon icon="ic:baseline-electric-car" width="35" height="35" />
            </div>
            <div className="reason_details">
              <h5>Cross Country Drive</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
                autem.
              </p>
            </div>
          </div>
          <div className="reason">
            <div className="icon">
              <Icon icon="ic:baseline-electric-car" width="35" height="35" />
            </div>
            <div className="reason_details">
              <h5>Cross Country Drive</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
                autem.
              </p>
            </div>
          </div>
        </div>
      </div>

      <article className="faq">
        <p>FAQ</p>
        <h5>Frequently Asked Questions</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
          consequatur quia velit a, eligendi reprehenderit voluptates odit quis
          nihil voluptatum!
        </p>
<div className="faq_wrapper">

        <Faq/>
</div>
      </article>
    </HeadFoot>
  );
}
