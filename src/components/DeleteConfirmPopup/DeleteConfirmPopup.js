import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useEffect } from "react";
export default function DeleteConfirmPopup(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(props.card);
    }
    useEffect(() => {
        return () => {
            props.setLoading(false);
        }
    }, []);
    return (<PopupWithForm
        name="DeleteConfirm"
        title="Вы уверены?"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
        loading={props.loading}
    />)
}