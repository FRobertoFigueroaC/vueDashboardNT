<script setup lang="ts">
import { EmailProps } from '../../interfaces/Email'

import Toolbar from '../shared/Toolbar.vue'
import {Textarea} from '../ui/textarea'
const {content} = defineProps<{content: EmailProps | null}>();

const respondValue = ''
</script>

<template>
<div  v-if="content">
  <Toolbar class="py-4 my-4 "/>
  <form
    class="bg-white mb-6 py-2">
      <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <label for="comment" class="sr-only">Your comment</label>
          <Textarea :modelValue="respondValue"
            class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"/>
      </div>
      <div class="grid grid-cols-2">
        <div class="col-start-3 col-span-1 pr-4">
          <button type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Send
          </button>
        </div>
      </div>
  </form>
</div>
      
</template>