import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [popupProfileOpen, setProfilePopupOpen] = React.useState(false);
  const [popupAvatarOpen, setAvatarPopupOpen] = React.useState(false);
  const [popupCardOpen, setCardPopupOpen] = React.useState(false);
  const [popupAnswerOpen, setAnswerPopupOpen] = React.useState(false);

  const closeAllPopups = () => {
    setProfilePopupOpen(false);
    setAvatarPopupOpen(false);
    setCardPopupOpen(false);
    setAnswerPopupOpen(false);
  };

  const onEditAvatar = () => {
    setAvatarPopupOpen(true);
  };

  const onEditProfile = () => {
    setProfilePopupOpen(true);
  };

  const onAddPlace = () => {
    setCardPopupOpen(true);
  };

  return (
    <body className="page">
      <Header />
      <Main
        onEditAvatar={onEditAvatar}
        onEditProfile={onEditProfile}
        onAddPlace={onAddPlace}
      />
      <Footer />

      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        isOpen={popupProfileOpen}
        closeAllPopups={closeAllPopups}
      >
        <form
          className="popup__form popup__form_profile"
          name="popup-profile-change"
          novalidate
        >
          <label className="popup__field">
            <input
              className="popup__input popup__input_js_name"
              id="input-name"
              type="text"
              name="username"
              placeholder="Имя"
              required
              minlength="2"
              maxlength="40"
            />
            <span className="popup__input-error input-name-error"></span>
          </label>

          <label className="popup__field">
            <input
              className="popup__input popup__input_js_profession"
              id="input-job"
              type="text"
              name="job"
              placeholder="О себе"
              required
              minlength="2"
              maxlength="200"
            />
            <span className="popup__input-error input-job-error"></span>
          </label>

          <button className="popup__save submit-profile-form" type="submit">
            Сохранить
          </button>
        </form>
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="card"
        isOpen={popupCardOpen}
        closeAllPopups={closeAllPopups}
      >
        <form
          className="popup__form popup__form_card"
          name="popup-add-card"
          novalidate
        >
          <label className="popup__field">
            <input
              className="popup__input popup__input_js_name-card"
              id="input-name-card"
              type="text"
              name="name"
              placeholder="Название"
              required
              minlength="2"
              maxlength="30"
            />
            <span className="popup__input-error input-name-card-error"></span>
          </label>

          <label className="popup__field">
            <input
              className="popup__input popup__input_js_link-card"
              id="input-url"
              type="url"
              name="link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__input-error input-url-error"></span>
          </label>

          <button className="popup__save submit-card-form" type="submit">
            Создать
          </button>
        </form>
      </PopupWithForm>

      <PopupWithForm
        title="Обновить аватар"
        name="edit-avatar"
        isOpen={popupAvatarOpen}
        closeAllPopups={closeAllPopups}
      >
        <form
          className="popup__form popup__form_avatar"
          name="popup-edit-avatar"
          novalidate
        >
          <label className="popup__field">
            <input
              className="popup__input popup__input_js_link-avatar"
              id="input-avatar"
              type="url"
              name="link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__input-error input-avatar-error"></span>
          </label>

          <button className="popup__save submit-avatar-form" type="submit">
            Сохранить
          </button>
        </form>
      </PopupWithForm>

      <PopupWithForm
        title="Вы уверены?"
        name="edit-delete"
        isOpen={popupAnswerOpen}
        closeAllPopups={closeAllPopups}
      >
        <button className="popup__save delete-card-button" type="button">
          Да
        </button>
      </PopupWithForm>

      <ImagePopup />

      <template className="card-template">
        <li className="gallery__item">
          <article className="card">
            <button
              className="card__trash-button hover"
              type="button"
              aria-label="Удалить место"
            ></button>

            <img className="card__photo" src="#" alt="Фотография" />

            <div className="card__box">
              <h2 className="card__name">Карачаевск</h2>
              <div className="card__like">
                <button
                  className="card__like-button hover"
                  type="button"
                  aria-label="Нравится"
                ></button>
                <span className="card__like-num">0</span>
              </div>
            </div>
          </article>
        </li>
      </template>
    </body>
  );
}

export default App;
