import api from '../../utils/Api.js';
import Card from '../Card/Card.js';
import { useEffect, useState, useContext } from "react";
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
const Main = ({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike }) => {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getCards().then(cardList => {
      setCards(cardList);
    }).catch(err => console.log(`Ошибка при получении карточек err ${err}`));
  }, []);
  const handleCardLike = (card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked ? "DELETE" : "PUT").then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }
  const handleCardDelete = (card) => {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter(cardItem => cardItem._id !== card._id));
    }).catch(err => console.log(err));
  }


  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar" onClick={onEditAvatar} style={{ backgroundImage: `url(${currentUser.avatar})` }} >
          <div className="profile__edit"></div>
        </button>
        <div className="profile__info">
          <div className="profile__content">
            <h1 className="profile__name">{currentUser.name}</h1>
            <p className="profile__subtitle">{currentUser.about}</p>
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
          return <Card key={cardItem._id} cardData={cardItem} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
        })}
      </section>
    </main>
  );
};
export default Main;
