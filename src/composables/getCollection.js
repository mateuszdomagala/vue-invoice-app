import { ref, watchEffect } from "vue";
import { firestore } from "../firebase/config";

const getCollection = (collection, field, query) => {
  const invoices = ref([]);
  const error = ref(null);

  let collectionRef = firestore
    .collection(collection)
    .orderBy(field, "desc")
    .where(...query);

  const unsub = collectionRef.onSnapshot(
    (snap) => {
      const data = [];
      snap.docs.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      invoices.value = data;
      error.value = null;
    },
    (err) => {
      error.value = err.message;
    }
  );

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { invoices, error };
};

export default getCollection;
