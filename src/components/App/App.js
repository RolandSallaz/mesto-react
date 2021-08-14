import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useEffect, useState } from "react";
function App() {
  const handleEditAvatarClick = () => {};
  const handleEditProfileClick = () => {};
  const handleAddPlaceClick = () => {};
  return (
    <div className="page">
      <Header />
      <Main
        handleEditAvatarClick={handleEditAvatarClick}
        handleEditProfileClick={handleEditProfileClick}
        handleAddPlaceClick={handleAddPlaceClick}
      />
      <Footer />
    </div>
  );
}

export default App;
