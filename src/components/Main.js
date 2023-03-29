import React, { useEffect } from "react";
import api from "../utils/Api.js";

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    api
      .getUser()
      .then((resp) => {
        setUserName(resp.name);
        setUserDescription(resp.about);
        setUserAvatar(resp.avatar);
      })
      .catch((err) => console.log(err));
  });

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
                <img className="profile__avatar" src={userAvatar} />
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
          <ul className="gallery__list"></ul>
        </div>
      </section>
    </main>
  );
}

export default Main;
