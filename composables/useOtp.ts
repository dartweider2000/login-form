export const useOtp = () => {
  type Digit = number | null;

  const codeLength = 6;
  const digitsList = ref<Digit[]>(
    (Array.from({ length: codeLength }) as Digit[]).fill(null)
  );
  const isError = ref<boolean>(false);

  const getDataFromTarget = (inputEl: HTMLInputElement) => {
    const { nextElementSibling, previousElementSibling } = inputEl.closest(
      ".opt-body__input"
    ) as HTMLElement;

    return {
      nextEl: nextElementSibling?.querySelector(
        "input"
      ) as HTMLInputElement | null,
      prevEl: previousElementSibling?.querySelector(
        "input"
      ) as HTMLInputElement | null,
      currentEl: inputEl,
    };
  };

  const checkCodeValidity = (code: string): boolean => {
    return new RegExp(`^\\d{${codeLength}}$`, "gi").test(code);
  };

  const assignToDigitList = (str: string) => {
    digitsList.value = str.split("") as unknown[] as Digit[];
  };

  const pastHandler = (e: ClipboardEvent, index: number) => {
    console.log(e);
  };

  const beforeInputHandler = (
    { target, inputType, data }: InputEvent,
    index: number
  ) => {
    console.log("before");
    // @ts-ignore
    event.preventDefault();

    const { currentEl, nextEl, prevEl } = getDataFromTarget(
      target as HTMLInputElement
    );

    console.log(currentEl, nextEl, prevEl);

    if (inputType === "insertText") {
      if (checkCodeValidity(data!)) {
        assignToDigitList(data!);
        return;
      } else if (!/^\d$/gi.test(data!)) return;

      const currentSelectionStart = currentEl.selectionStart;
      // Если в строке уже есть текст и это не последний инпут
      if (currentEl.value && nextEl && currentSelectionStart === 1) {
        digitsList.value[index + 1] = data as Digit;
      } else if (!currentEl.value || currentSelectionStart === 0) {
        digitsList.value[index] = data as Digit;
      }

      nextEl?.focus();
      if (nextEl?.value && currentSelectionStart === 0) {
        nextEl.setSelectionRange(0, 0);
      }
      // если мы вставляем и то что мы ставили это 4 цифры
    } else if (inputType === "insertFromPaste" && checkCodeValidity(data!)) {
      assignToDigitList(data!);
    } else if (inputType === "deleteContentBackward") {
      if ((!currentEl.value || currentEl.selectionStart === 0) && prevEl) {
        prevEl.focus();
      } else {
        digitsList.value[index] = null;
      }
    } else if (inputType === "deleteContentForward") {
      if ((!currentEl.value || currentEl.selectionStart === 1) && nextEl) {
        nextEl.focus();
      } else {
        digitsList.value[index] = null;
      }
    }

    console.log(digitsList.value);
  };

  const keyDownHandler = ({ code, target }: KeyboardEvent, index: number) => {
    const { currentEl, nextEl, prevEl } = getDataFromTarget(
      target as HTMLInputElement
    );

    if (code === "ArrowLeft" || code === "ArrowRight") {
      // @ts-ignore
      event.preventDefault();

      if (code === "ArrowLeft") {
        if (prevEl && (currentEl.selectionStart === 0 || !currentEl.value)) {
          prevEl.focus();
        } else {
          currentEl.setSelectionRange(0, 0);
        }
      } else if (code === "ArrowRight") {
        if (nextEl && (currentEl.selectionStart === 1 || !currentEl.value)) {
          nextEl.focus();
        } else {
          currentEl.setSelectionRange(1, 1);
        }
      }
    }
  };

  const abortSmsWaitingController = ref<AbortController | null>(null);

  const startSmsWaiting = () => {
    if (abortSmsWaitingController.value) {
      abortSmsWaitingController.value.abort("Так захотелось");
    }

    abortSmsWaitingController.value = new AbortController();

    navigator.credentials
      .get({
        // @ts-ignore
        otp: { transport: ["sms"] },
        signal: abortSmsWaitingController.value.signal,
      })
      // @ts-ignore
      .then(({ code }) => {
        assignToDigitList(code);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("finale");
      });
  };

  const submitForm = () => {
    console.log("запрос на подтверждение кода");
  };

  watch(
    digitsList,
    () => {
      const data = digitsList.value.join("");
      isError.value = false;

      if (data.length !== codeLength) return;

      if (checkCodeValidity(data)) {
        submitForm();
      } else {
        isError.value = true;
      }
    },
    { deep: true }
  );

  onMounted(() => {
    startSmsWaiting();
  });

  return {
    codeLength,
    digitsList,
    pastHandler,
    beforeInputHandler,
    keyDownHandler,
  };
};
