import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import ImagePopup from "../ImagePopup/ImagePopup";
import api from "../../utils/Api";
import { useState, useEffect } from "react";
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  const handleCardClick = (cardData) => {
    setSelectedCard(cardData);
  }
  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard(null);
  };
  useEffect(() => {
    api.getUserInfo().then(res => {
      setCurrentUser(res._id);
    });
  }, []);

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <label>
          <input
            placeholder="Имя"
            type="text"
            name="userName"
            className="form__input form__input_info_name"
            id="form__input_info_name"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="form__error" id="form__input_info_name-error">
            Поле с ошибкой
          </span>
        </label>
        <label>
          <input
            placeholder="О себе"
            type="text"
            name="about"
            className="form__input form__input_info_about"
            id="form__input_info_about"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="form__error" id="form__input_info_about-error">
            Поле с ошибкой
          </span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        name="add"
        title="Новое Место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label>
          <input
            placeholder="Название"
            type="text"
            name="imgName"
            className="form__input form__input_info_name"
            id="form__input_info_cardName"
            required
          />
          <span className="form__error" id="form__input_info_cardName-error">
            Поле с ошибкой
          </span>
        </label>
        <label>
          <input
            placeholder="Ссылка на картинку"
            type="url"
            name="link"
            className="form__input form__input_info_about"
            id="form__input_info_link"
            required
          />
          <span className="form__error" id="form__input_info_link-error">
            Поле с ошибкой
          </span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        name="changeAvatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label>
          <input
            placeholder="Ссылка на картинку"
            type="url"
            name="link"
            className="form__input form__input_info_about"
            id="form__input_changeAvatar_link"
            required
          />
          <span
            className="form__error"
            id="form__input_changeAvatar_link-error"
          >
            Поле с ошибкой
          </span>
        </label>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
