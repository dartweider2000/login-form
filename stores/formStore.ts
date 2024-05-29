export const useFormStore = defineStore("formStore", () => {
  const email = ref<string>("");
  const username = ref<string>("");
  const password = ref<string>("");
  const newPassword = ref<string>("");
  const accept = ref<boolean>(false);

  const clearPasswords = () => {
    password.value = "";
    newPassword.value = "";
  };

  const clearAll = () => {
    email.value = "";
    username.value = "";
    accept.value = false;

    clearPasswords();
  };

  return {
    email,
    username,
    password,
    newPassword,
    accept,
    clearAll,
    clearPasswords,
  };
});
