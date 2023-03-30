function PopupWithForm({
  title,
  name,
  children,
  isOpen,
  closeAllPopups,
  buttonText,
}) {
  return (
    <div className={`popup popup-${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <h3 className="popup__title">{title}</h3>
        <form
          className={`popup__form popup__${name}`}
          name="popup-profile-change"
          noValidate
        >
          {children}
          <button className="popup__save submit-profile-form" type="submit">
            {buttonText}
          </button>
        </form>
        <button
          className="popup__close hover close-profile-form"
          type="button"
          aria-label="Закрыть"
          onClick={closeAllPopups}
        />
      </div>
    </div>
  );
}

export default PopupWithForm;
