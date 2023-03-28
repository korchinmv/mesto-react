import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <body className="page">
      <Header />
      <Main />
      <Footer />

      <div className="popup popup-profile">
        <div className="popup__container">
          <h3 className="popup__title">Редактировать профиль</h3>
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

          <button
            className="popup__close hover close-profile-form"
            type="button"
            aria-label="Закрыть"
          ></button>
        </div>
      </div>

      <div className="popup popup-card">
        <div className="popup__container">
          <h3 className="popup__title">Новое место</h3>

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

          <button
            className="popup__close hover close-card-form"
            type="button"
            aria-label="Закрыть"
          ></button>
        </div>
      </div>

      <div className="popup popup-edit-avatar">
        <div className="popup__container">
          <h3 className="popup__title">Обновить аватар</h3>

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

          <button
            className="popup__close hover close-card-form"
            type="button"
            aria-label="Закрыть"
          ></button>
        </div>
      </div>

      <div className="popup popup-delete">
        <div className="popup__container">
          <h3 className="popup__title">Вы уверены?</h3>
          <button className="popup__save delete-card-button" type="button">
            Да
          </button>
          <button
            className="popup__close close-delete-popup hover"
            type="button"
            aria-label="Закрыть"
          ></button>
        </div>
      </div>

      <div className="popup popup_overlay_dark popup-photo">
        <figure className="popup__photo">
          <button
            className="popup__close close-photo-popup hover"
            type="button"
            aria-label="Закрыть"
          ></button>
          <img className="popup__image" src="#" alt="#" />
          <figcaption className="popup__figcaption">
            <p className="popup__caption">Попап с картинкой</p>
          </figcaption>
        </figure>
      </div>

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
