import { ref } from "vue";
import { firestore } from "../firebase/config";

const useCollection = (collection, docId) => {
  const error = ref(null);

  const addDoc = async (doc) => {
    error.value = null;

    try {
      await firestore.collection(collection).doc(docId).set(doc);
    } catch (err) {
      error.value = err.message;
    }
  };

  return { error, addDoc };
};

export default useCollection;
