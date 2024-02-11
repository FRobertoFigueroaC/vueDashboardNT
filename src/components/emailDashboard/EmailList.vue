<script setup lang="ts">
import { ScrollAreaRoot, ScrollAreaViewport } from 'radix-vue'
import { ScrollBar, ScrollArea } from '@/components/ui/scroll-area';

const props = defineProps({
  emails: Array
})
</script>

<template>
  <ScrollArea class="w-full h-[360px] rounded overflow-hidden bg-white">
      <div class="py-[15px] px-5">
        <div class="text-grass11 text-[15px] leading-[18px] font-semibold">
          Inbox
        </div>
        <div
          v-for="email in emails"
          :key="email.id"
          @click="$emit('mailSelection', email)"
          class="cursor-pointer text-mauve12 text-[13px] leading-[18px] mt-2.5 pt-2.5 border-t border-t-mauve6"
        >
          {{ email.subject }}
        </div>
      </div>
    </ScrollArea>
</template>