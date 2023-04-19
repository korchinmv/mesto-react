import PopupWithForm from "./PopupWithForm";

export const ConfirmPopup = ({ isOpen, onClose, isLoading, onCardDelete }) => {
  return (
    <PopupWithForm
      title="Обновить аватар"
      name="confirm"
      isOpen={isOpen}
      closeAllPopups={onClose}
      buttonText={isLoading ? "Сохранение..." : "Сохранить"}
      onSubmit={onCardDelete}
    ></PopupWithForm>
  );
};

export default ConfirmPopup;
