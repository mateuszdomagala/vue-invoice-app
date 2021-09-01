import { ref } from "vue";
import { firestore } from "../firebase/config";

const getCollection = (collection, field) => {
  const invoices = ref([]);
  const error = ref(null);

  firestore
    .collection(collection)
    .orderBy(field, "desc")
    .onSnapshot(
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

  return { invoices, error };
};

export default getCollection;
