export const useFormStore = defineStore("formStore", () => {
  const email = ref<string>("");
  const username = ref<string>("");
  const password = ref<string>("");
  const newPassword = ref<string>("");

  const clearPasswords = () => {
    password.value = "";
    newPassword.value = "";
  };

  const clearAll = () => {
    email.value = "";
    username.value = "";

    clearPasswords();
  };

  return {
    email,
    username,
    password,
    newPassword,
    clearAll,
    clearPasswords,
  };
});
