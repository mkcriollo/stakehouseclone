import "./App.css";
import { useState } from "react";
import NAV from "./components/nav/nav.jsx";
import Home from "./components/home/home.jsx";
import Footer from "./components/footer/footer.jsx";
import Modal from "./components/nav/modal.jsx";
function App() {
  let [openedModal, setOpenedModal] = useState(false);

  function openModal() {
    let modal = document.querySelector(".full-modal");
    let home = document.querySelector(".full-home");
    let steps = document.querySelector(".full-steps-holder");
    let footer = document.querySelector(".full-footer");
    if (!modal) {
      return null;
    }
    if (openedModal === false) {
      modal.style.display = "block";
      home.style.display = "none";
      steps.style.display = "none";
      footer.style.display = "none";
      setOpenedModal(true);
    } else {
      modal.style.display = "none";
      home.style.display = "flex";
      steps.style.display = "flex";
      footer.style.display = "flex";
      setOpenedModal(false);
    }
  }

  return (
    <>
      <div className="App">
        <Modal
          openModal={openModal}
          modalOpened={openedModal}
          setModalOpen={setOpenedModal}
        />
        <NAV
          openModal={openModal}
          modalOpened={openedModal}
          setModalOpen={setOpenedModal}
        />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
