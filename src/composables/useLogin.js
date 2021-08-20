import { ref } from "vue";
import { auth } from "../firebase/config";

const error = ref(null);
const isPending = ref(false);

const login = async (email, password) => {
  isPending.value = true;
  error.value = null;

  try {
    const res = await auth.signInWithEmailAndPassword(email, password);
    isPending.value = false;
    error.value = null;

    return res;
  } catch (err) {
    error.value = err.message;
    isPending.value = false;
  }
};

const useLogin = () => {
  return { error, login, isPending };
};

export default useLogin;
