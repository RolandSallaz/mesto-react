const Card = (props) => {
    const handleCardClick = () => {
        props.onCardClick({ image: props.cardImage, name: props.cardName });
    }
    return (
        <div className="element">
            <button className="element__deleteButton"></button>
            <img src={props.cardImage} alt="Карточка с местом и подписью" className="element__image" onClick={handleCardClick} />
            <div className="element__container">
                <h2 className="element__heading">{props.cardName}</h2>
                <div className="element__like-container">
                    <button className="element__like" aria-label="Поставить лайк карточке" type="button"></button>
                    <p className="element__like-counter">0</p>
                </div>
            </div>
        </div>);
}
export default Card;