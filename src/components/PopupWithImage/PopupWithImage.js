const PopupWithImage = () => {
  return (
    <div className="popup popup_name_image">
      <div className="popup__container popup__container_name_preview">
        <button
          className="popup__close-button"
          aria-label="Закрыть форму"
          type="button"
        ></button>
        <img src="." alt="Изображение недоступно" className="popup__image" />
        <p className="popup__image-name"></p>
      </div>
    </div>
  );
};
export default PopupWithImage;
