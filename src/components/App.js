import { useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api.js";

function App() {
  const [popupProfileOpen, setProfilePopupOpen] = useState(false);
  const [popupAvatarOpen, setAvatarPopupOpen] = useState(false);
  const [popupCardOpen, setCardPopupOpen] = useState(false);
  const [popupAnswerOpen, setAnswerPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  const closeAllPopups = () => {
    setProfilePopupOpen(false);
    setAvatarPopupOpen(false);
    setCardPopupOpen(false);
    setAnswerPopupOpen(false);
    setSelectedCard({});
  };

  useEffect(() => {
    api
      .getUser()
      .then((resp) => setCurrentUser(resp))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api
      .getCards()
      .then((resp) => {
        setCards(resp);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpdateUser = (data) => {
    api
      .sendProfile(data)
      .then((data) => setCurrentUser(data))
      .catch((err) => console.log(err));
    closeAllPopups();
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

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  };

  const handleCardDelete = (card) => {
    api
      .deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((item) => item._id !== card._id);
        setCards(newCards);
      })
      .catch((err) => console.log(err));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          cards={cards}
          onEditAvatar={onEditAvatar}
          onEditProfile={onEditProfile}
          onAddPlace={onAddPlace}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />

        <EditProfilePopup
          isOpen={popupProfileOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup isOpen={popupAvatarOpen} onClose={closeAllPopups} />

        <PopupWithForm
          title="Новое место"
          name="card"
          // isOpen={isOpen}
          // closeAllPopups={onClose}
          buttonText={"Создать"}
        >
          <label className="popup__field">
            <input
              className="popup__input popup__input_js_name-card"
              id="input-name-card"
              type="text"
              name="name"
              placeholder="Название"
              required
              minLength="2"
              maxLength="30"
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
        </PopupWithForm>

        <PopupWithForm
          title="Вы уверены?"
          name="edit-delete"
          isOpen={popupAnswerOpen}
          closeAllPopups={closeAllPopups}
          buttonText={"Да"}
        ></PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
