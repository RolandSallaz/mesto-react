const PopupWithForm = ({ name, title, ...props }) => {
  return (
    <div className={`popup popup_name_${name} popup_show`}>
      <div className="popup__container">
        <button
          className="popup__close-button"
          aria-label="Закрыть форму"
          type="button"
        ></button>
        <form className="form" id={name} noValidate>
          <div className="form__container">
            <h2 className="form__title">{title}</h2>
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
