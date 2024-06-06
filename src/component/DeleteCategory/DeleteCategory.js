import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

export default function DeleteCategory({ category }) {
  const { user, products } = useContext(AppContext);
  const [isDeleting, setIsDeleting] = useState(false); // State to manage delete animation

  if (!user || !user.isAdmin) {
    return null;
  }

  function onDeleteClick() {
    const count = Object.values(products).filter(product => product.category === category.id).length;

    if (count > 0) {
      alert("This category has existing products. Please delete them before deleting a category.");
      return;
    }

    if (!window.confirm("Are you sure you want to delete this category?")) {
      return;
    }

    setIsDeleting(true); // Trigger delete animation
    deleteDoc(doc(db, "categories", category.id));
  }

  return (
    <button
      className={`DeleteCategory ${isDeleting ? "deleting" : ""}`}
      onClick={onDeleteClick}
      disabled={isDeleting} // Prevent multiple clicks while deleting
    >
      {isDeleting ? "Deleting..." : "Delete"}
    </button>
  );
}
