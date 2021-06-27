import React from "react";
import Navigation from "../components/Navigation";
import ButtonsBottom from "../components/ButtonsBottom";
import ContactForm from "../components/ContactForm";
import SocialNetwork from "../components/SocialNetwork";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import { motion } from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ReactTooltip from "react-tooltip";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {

  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    },
  };

  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  };

  return (
    <main>
      <Mouse />
      <motion.div
        className="contact"
        exit="out"
        animate="in"
        initial="out"
        variants={pageTransition}
        transition={transition}
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>Lot VQ 134 HK</p>
              <p>Mandroseza - Tana 101</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              <CopyToClipboard text="0344847065" className="hover">
                <p
                  data-tip="Cliquer pour copié"
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={()=>{
                    toast("Phone copié", {
                      position: "top-center",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: false,
                    });
                  }}
                >
                  034 48 470 65
                </p>
              </CopyToClipboard>
              
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard text="falmelopros@gmail.com" className="hover">
                <p
                  data-tip="Cliquer pour copié"
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    toast("Email copié", {
                      position: "top-center",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: false,
                    });
                  }}
                >
                  falmelopros@gmail.com
                </p>
              </CopyToClipboard>
              <ToastContainer />
              <ReactTooltip place="left" type="dark" effect="solid" />
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>melloDev - 2021</p>
          </div>
        </div>
        <ButtonsBottom left={"/projet-4"} />
      </motion.div>
    </main>
  );
};

export default Contact;
