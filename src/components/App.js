import { useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api.js";

function App() {
  const [popupProfileOpen, setPopupProfileOpen] = useState(false);
  const [popupAvatarOpen, setPopupAvatarOpen] = useState(false);
  const [popupCardOpen, setCardPopupOpen] = useState(false);
  const [popupAnswerOpen, setAnswerPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  const closeAllPopups = () => {
    setPopupProfileOpen(false);
    setPopupAvatarOpen(false);
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
    console.log(data);
    api
      .sendProfile(data)
      .then((res) => setCurrentUser(res))
      .catch((err) => console.log(err));
    closeAllPopups();
  };

  const handleUpdateAvatar = (avatar) => {
    api
      .setAvatar(avatar)
      .then((res) => setCurrentUser(res))
      .catch((err) => console.log(err));
    closeAllPopups();
  };

  const onEditAvatar = () => {
    setPopupAvatarOpen(true);
  };

  const onEditProfile = () => {
    setPopupProfileOpen(true);
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

  const handleAddPlaceSubmit = (dataForm) => {
    api
      .sendCard(dataForm)
      .then((newCard) => {
        setCards([newCard, ...cards]);
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

        <EditAvatarPopup
          isOpen={popupAvatarOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <AddPlacePopup
          isOpen={popupCardOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        {/* <PopupWithForm
          title="Вы уверены?"
          name="edit-delete"
          isOpen={popupAnswerOpen}
          closeAllPopups={closeAllPopups}
          buttonText={"Да"}
        ></PopupWithForm> */}

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
