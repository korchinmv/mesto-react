import React, { useEffect, useState } from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUser()
      .then((resp) => {
        setUserName(resp.name);
        setUserDescription(resp.about);
        setUserAvatar(resp.avatar);
      })
      .catch((err) => console.log(err));

    api
      .getCards()
      .then((resp) => {
        setCards(resp);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="container">
          <div className="profile__inner">
            <div className="profile__info">
              <button
                className="profile__avatar-btn"
                type="button"
                onClick={onEditAvatar}
              >
                <img
                  className="profile__avatar"
                  src={userAvatar}
                  alt="Аватар"
                />
              </button>

              <div className="profile__content">
                <div className="profile__content-box">
                  <h1 className="profile__name">{userName}</h1>

                  <button
                    className="profile__edit hover"
                    type="button"
                    aria-label="Редактировать профиль"
                    onClick={onEditProfile}
                  ></button>
                </div>

                <p className="profile__profession">{userDescription}</p>
              </div>
            </div>

            <button
              className="profile__add hover"
              type="button"
              aria-label="Добавить место"
              onClick={onAddPlace}
            ></button>
          </div>
        </div>
      </section>

      <section className="gallery">
        <div className="container">
          <ul className="gallery__list">
            {cards.map((card) => (
              <Card card={card} key={card._id} onCardClick={onCardClick} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Main;
