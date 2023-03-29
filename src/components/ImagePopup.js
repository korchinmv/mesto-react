function ImagePopup() {
  return (
    <div className="popup popup_overlay_dark popup-photo">
      <figure className="popup__photo">
        <button
          className="popup__close close-photo-popup hover"
          type="button"
          aria-label="Закрыть"
        ></button>
        <img className="popup__image" src="#" alt="#" />
        <figcaption className="popup__figcaption">
          <p className="popup__caption"></p>
        </figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
