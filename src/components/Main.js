function Main() {
  const handleEditAvatarClick = () => {
    const popupAvatar = document.querySelector(".popup-edit-avatar");
    popupAvatar.classList.add("popup_opened");
  };

  const handleEditProfileClick = () => {
    const popupProfile = document.querySelector(".popup-profile");
    popupProfile.classList.add("popup_opened");
  };

  const handleAddPlaceClick = () => {
    const popupCard = document.querySelector(".popup-card");
    popupCard.classList.add("popup_opened");
  };

  return (
    <main className="main">
      <section className="profile">
        <div className="container">
          <div className="profile__inner">
            <div className="profile__info">
              <button
                className="profile__avatar-btn"
                type="button"
                onClick={handleEditAvatarClick}
              >
                <img className="profile__avatar" src="#" />
              </button>

              <div className="profile__content">
                <div className="profile__content-box">
                  <h1 className="profile__name"></h1>

                  <button
                    className="profile__edit hover"
                    type="button"
                    aria-label="Редактировать профиль"
                    onClick={handleEditProfileClick}
                  ></button>
                </div>

                <p className="profile__profession"></p>
              </div>
            </div>

            <button
              className="profile__add hover"
              type="button"
              aria-label="Добавить место"
              onClick={handleAddPlaceClick}
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
