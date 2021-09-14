import { ref, watchEffect } from "vue";
import { firestore } from "../firebase/config";

const getDocument = (collection, id) => {
  const invoice = ref(null);
  const error = ref(null);

  let documentRef = firestore.collection(collection).doc(id);

  const unsub = documentRef.onSnapshot(
    (doc) => {
      if (doc.data()) {
        invoice.value = { ...doc.data(), id: doc.id };
        error.value = null;
      } else {
        error.value = "that invoice doesn't exist";
      }
    },
    (err) => {
      invoice.value = err.message;
    }
  );

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { invoice, error };
};

export default getDocument;
