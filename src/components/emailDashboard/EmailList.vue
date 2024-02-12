<script setup lang="ts">
import { ScrollBar, ScrollArea } from '@/components/ui/scroll-area';
import { EmailProps } from '../../interfaces/Email';

// const props = defineProps({
//   emails: EmailProps[],
//   content: Object
// })

const props = defineProps<{
  emails: EmailProps[],
  content: EmailProps | null
}>();


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
          class="cursor-pointer rounded text-mauve12 text-[13px] leading-[18px] mt-2.5 pt-2.5 border-t border-t-mauve6"
          :class="{ 'bg-sky-500 text-white pb-2 pl-1': content?.id == email.id }"
        >
        <div class="flex flex-row">
          <div class="basis-3/4">
            {{ email.subject }}
          </div>
          <div class="basis-1/4">
            <span v-if="email.important" 
                class="text-xs bg-red-200 text-red-800 px-2 rounded-full w-[80px]">
                Important
            </span>
          </div>
        </div>
        
        </div>
      </div>
    </ScrollArea>
</template>