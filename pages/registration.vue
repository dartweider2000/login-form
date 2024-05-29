<script setup lang="ts">
  import createImage from "~/assets/img/registration-image.svg";

  definePageMeta({
    layout: false,
  });

  const store = useFormStore();
  const {
    username: usernameValue,
    email: emailValue,
    password: passwordValue,
    newPassword: newPasswordValue,
    accept: acceptValue,
  } = storeToRefs(store);
  const { clearAll } = store;

  const isDisabledButton = computed(
    () =>
      !(
        usernameValue.value &&
        passwordValue.value &&
        emailValue.value &&
        acceptValue.value &&
        passwordValue.value === newPasswordValue.value
      )
  );

  const formName = ref<string>("registration");
  const formError = ref<string>("");

  onBeforeRouteLeave((to, from) => {
    if (
      (!usernameValue.value &&
        !passwordValue.value &&
        !emailValue.value &&
        !acceptValue.value &&
        !newPasswordValue.value) ||
      to.path !== "/"
    )
      return true;

    const answer = confirm("Все данные будут потеряны");

    if (answer) {
      clearAll();
    }
    return answer;
  });

  const formSubmitHandler = async () => {
    const elements = document.forms.namedItem(formName.value)?.elements;
    // @ts-ignore
    const {
      email,
      username,
      password,
      newPassword,
    }: { [key: string]: HTMLInputElement } = elements;

    if (
      email.checkValidity() &&
      username.checkValidity() &&
      password.checkValidity() &&
      newPassword.checkValidity()
    ) {
      await navigateTo("/otp");
    }
  };
</script>

<template>
  <NuxtLayout name="default">
    <template #image>
      <div class="image-wrapper">
        <img :src="createImage" alt="create content image" />
      </div>
    </template>
    <template #captionTitle> Join us! </template>
    <template #captionDescription>
      Just go through the boring process of creating an account.
    </template>
    <template #form>
      <TemplateForm :name="formName" :error="formError">
        <template #header>
          <div class="form-header">
            <FormTitle class="form-header__title"
              >Create your account</FormTitle
            >
            <div class="form-header__sub-title">Unlock all Features!</div>
          </div>
        </template>
        <template #body>
          <UIUsernameInput
            v-model="usernameValue"
            :autofocus="true"
            :tabindex="1"
            :required="true"
          />
          <UIEmailInput v-model="emailValue" :tabindex="2" :required="true" />
          <UIPasswordInput
            v-model="passwordValue"
            :tabindex="3"
            :required="true"
          />
          <UIPasswordInput
            v-model="newPasswordValue"
            :is-new-password="true"
            :tabindex="4"
            :required="true"
          />
          <div class="form-accept">
            <UICheckbox
              v-model="acceptValue"
              class="form-accept__checkbox"
              :tabindex="5"
            />
            <p class="form-accept__description">
              Accept
              <NuxtLink class="form-accept__link" to="/" tabindex="6"
                >terms and conditions
              </NuxtLink>
            </p>
          </div>
        </template>
        <template #button>
          <UIActionButton
            tabindex="7"
            :disabled="isDisabledButton"
            @action="formSubmitHandler"
            >Sign up</UIActionButton
          >
        </template>
        <template #caption>
          <TemplateFormCaption
            description="You have account?"
            linkText="Login now"
            linkUrl="/"
            :tabindex="8"
          />
        </template>
      </TemplateForm>
    </template>
  </NuxtLayout>
</template>

<style scoped lang="scss">
  .image-wrapper {
    @apply absolute top-[50%] left-0 translate-y-[-40%] w-[663px] h-[522px];

    & > * {
      @apply object-cover w-full h-full;
    }
  }

  .form-header {
    @apply grid gap-[5px];
    // .form-header__title
    &__title {
    }
    // .form-header__sub-title
    &__sub-title {
      @apply text-[20px] leading-[24px] text-[--input-inner-color];
    }
  }

  .form-accept {
    @apply flex gap-[10px];
    // .form-accept__checkbox
    &__checkbox {
    }
    // .form-accept__description
    &__description {
      @apply text-[16px] leading-[24px] text-[--input-inner-color];
    }
    // .form-accept__link
    &__link {
      @apply text-[--call-to-action] outline-none;
      transition: var(--trans-03);

      &:focus {
        @apply text-[--purple-dark];
      }

      @media (hover: hover) {
        &:hover {
          @apply text-[--purple-dark];
        }
      }
    }
  }
</style>
