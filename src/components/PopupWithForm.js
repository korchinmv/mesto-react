function PopupWithForm({ title, name, children, isOpen, closeAllPopups }) {
  return (
    <div className={`popup popup-${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <h3 className="popup__title">{title}</h3>
        {children}
        <button
          className="popup__close hover close-profile-form"
          type="button"
          aria-label="Закрыть"
          onClick={closeAllPopups}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
