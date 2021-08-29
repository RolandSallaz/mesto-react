const PopupWithForm = ({ name, title, children, isOpen, onClose, onSubmit }) => {
  return (
    <div className={`popup popup_name_${name} ${isOpen && "popup_show"}`}>
      <div className="popup__container">
        <button
          onClick={onClose}
          className="popup__close-button"
          aria-label="Закрыть форму"
          type="button"
        ></button>
        <form className="form" id={name} noValidate onSubmit={onSubmit}>
          <div className="form__container">
            <h2 className="form__title">{title}</h2>

            {children}

            <button className="form__save-button" type="submit">
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default PopupWithForm;
