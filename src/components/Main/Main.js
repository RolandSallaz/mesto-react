const Main = ({ onEditAvatar, onEditProfile, onAddPlace }) => {
  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar" onClick={onEditAvatar}>
          <div className="profile__edit"></div>
        </button>
        <div className="profile__info">
          <div className="profile__content">
            <h1 className="profile__name"></h1>
            <p className="profile__subtitle"></p>
          </div>
          <button
            className="profile__edit-button"
            aria-label="Редактировать профиль"
            type="button"
            onClick={onEditProfile}
          ></button>
        </div>
        <button
          className="profile__add-button"
          aria-label="Добавить карточку"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements"></section>
    </main>
  );
};
export default Main;
