import { ref } from "vue";
import { firestore } from "../firebase/config";

const useDocument = (collection, id) => {
  const error = ref(null);

  let docRef = firestore.collection(collection).doc(id);

  const updateDoc = async (updates) => {
    error.value = null;

    try {
      await docRef.update(updates);
    } catch (err) {
      error.value = err.message;
    }
  };

  const deleteDoc = async () => {
    error.value = null;

    try {
      await docRef.delete();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { updateDoc, deleteDoc, error };
};

export default useDocument;
