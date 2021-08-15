const ImagePopup = ({ card, onClose }) => {
  return (
    <div className={`popup popup_name_image ${card && 'popup_show'}`}>
      <div className="popup__container popup__container_name_preview">
        <button
          onClick={onClose}
          className="popup__close-button"
          aria-label="Закрыть форму"
          type="button"
        ></button>
        <img src={card.image} alt="Изображение недоступно" className="popup__image" />
        <p className="popup__image-name">{card.name}</p>
      </div>
    </div>
  );
};
export default ImagePopup;
