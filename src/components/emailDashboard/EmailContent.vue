<script setup lang="ts">
import { EmailProps } from '../../interfaces/Email'

const {content} = defineProps<{content: EmailProps}>();


</script>

<template>
 <div
    class="app font-sans min-w-screen min-h-screen bg-grey-lighter">

    <div class="mail__wrapper max-w-md mx-auto">
      <div class="mail__content bg-white p-8 shadow-md">
        <div class="content__body py-8 border-b">
          <h3 class="text-center text-2xl sm:text-3xl pt-4 mb-8 ">
            {{content.subject}}
          </h3>
          <p class="pt-4 leading-normal">
            {{content.body_text}}
          </p>
        </div>

        <div class="content__footer mt-8 text-center text-grey-darker">
          <h3 class="text-base sm:text-lg mb-4">
            {{content.name}}
          </h3>
          <small>
            {{content.email}}
          </small>
        </div>
      </div>
    </div>

  </div>
</template>