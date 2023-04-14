import { useRef, useState } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar }) => {
  const [inputText, setInputText] = useState("");
  const textInput = useRef(null);

  const changeText = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdateAvatar({
      avatar: textInput.value,
    });
    console.log(isOpen);
    return (
      <PopupWithForm
        title="Обновить аватар"
        name="edit-avatar"
        isOpen={isOpen}
        closeAllPopups={onClose}
        buttonText={"Сохранить"}
        onSubmit={handleSubmit}
      >
        <label className="popup__field">
          <input
            className="popup__input popup__input_js_link-avatar"
            id="input-avatar"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            required
            value={inputText}
            ref={textInput}
            onChange={changeText}
          />
          <span className="popup__input-error input-avatar-error"></span>
        </label>
      </PopupWithForm>
    );
  };
};
export default EditAvatarPopup;
