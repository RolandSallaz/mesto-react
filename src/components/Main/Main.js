import api from '../../utils/Api.js';
import Card from '../Card/Card.js';
import { useEffect, useState } from "react";
const Main = ({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) => {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);
  useEffect(() => {
    api.getUserInfo().then(info => {
      setUserName(info.name);
      setUserDescription(info.about);
      setUserAvatar(info.avatar);
    }).catch(err => console.log(`Ошибка при получении данных пользователя err ${err}`));
  }, []);
  useEffect(() => {
    api.getCards().then(cardList => {
      setCards(cardList);
    }).catch(err => console.log(`Ошибка при получении карточек err ${err}`));
  }, []);
  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar" onClick={onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }} >
          <div className="profile__edit"></div>
        </button>
        <div className="profile__info">
          <div className="profile__content">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__subtitle">{userDescription}</p>
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
      <section className="elements">
        {cards.map(cardItem => {
          return <Card key={cardItem._id} cardData={cardItem} onCardClick={onCardClick} />
        })}
      </section>
    </main>
  );
};
export default Main;
