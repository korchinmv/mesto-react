function Card({ card, onCardClick }) {
  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <li className="gallery__item">
      <article className="card">
        <button
          className="card__trash-button hover"
          type="button"
          aria-label="Удалить место"
        />

        <img
          className="card__photo"
          src={card.link}
          alt={`Фотография ${card.name}`}
          onClick={handleClick}
        />

        <div className="card__box">
          <h2 className="card__name">{card.name}</h2>
          <div className="card__like">
            <button
              className="card__like-button hover"
              type="button"
              aria-label="Нравится"
            />
            <span className="card__like-num">{card.likes.length}</span>
          </div>
        </div>
      </article>
    </li>
  );
}

export default Card;
