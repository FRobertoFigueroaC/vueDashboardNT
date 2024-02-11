<script setup lang="ts">
import {
  ToolbarButton,
  ToolbarLink,
  ToolbarRoot,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
} from 'radix-vue'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const toggleStateSingle = ref('center')
const toggleStateMultiple = ref([])
</script>

<template>
  <ToolbarRoot
    class="flex p-[10px] w-auto rounded-md bg-white shadow-[0_2px_10px] shadow-blackA7"
    aria-label="Formatting options"
  >
    <ToolbarToggleGroup v-model="toggleStateMultiple" type="multiple" aria-label="Text formatting">
      <ToolbarToggleItem
        class="flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-green3 hover:text-grass11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7 first:ml-0 data-[state=on]:bg-green5 data-[state=on]:text-grass11"
        value="bold"
        aria-label="Bold"
      >
        <Icon class="w-[15px] h-[15px]" icon="radix-icons:font-bold" />
      </ToolbarToggleItem>
      <ToolbarToggleItem
        class="flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-green3 hover:text-grass11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7 first:ml-0 data-[state=on]:bg-green5 data-[state=on]:text-grass11"
        value="italic"
        aria-label="Italic"
      >
        <Icon class="w-[15px] h-[15px]" icon="radix-icons:font-italic" />
      </ToolbarToggleItem>
      <ToolbarToggleItem
        class="flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-green3 hover:text-grass11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7 first:ml-0 data-[state=on]:bg-green5 data-[state=on]:text-grass11"
        value="strikethrough"
        aria-label="Strike through"
      >
        <Icon class="w-[15px] h-[15px]" icon="radix-icons:strikethrough" />
      </ToolbarToggleItem>
    </ToolbarToggleGroup>
    <ToolbarSeparator class="w-[1px] bg-mauve6 mx-[10px]" />
    <ToolbarToggleGroup v-model="toggleStateSingle" type="single" aria-label="Text Alignment">
      <ToolbarToggleItem
        class="flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-green3 hover:text-grass11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7 first:ml-0 data-[state=on]:bg-green5 data-[state=on]:text-grass11"
        value="left"
        aria-label="Left Aligned"
      >
        <Icon class="w-[15px] h-[15px]" icon="radix-icons:text-align-left" />
      </ToolbarToggleItem>
      <ToolbarToggleItem
        class="flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-green3 hover:text-grass11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7 first:ml-0 data-[state=on]:bg-green5 data-[state=on]:text-grass11"
        value="center"
        aria-label="Center Aligned"
      >
        <Icon class="w-[15px] h-[15px]" icon="radix-icons:text-align-center" />
      </ToolbarToggleItem>
      <ToolbarToggleItem
        class="flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-green3 hover:text-grass11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7 first:ml-0 data-[state=on]:bg-green5 data-[state=on]:text-grass11"
        value="right"
        aria-label="Right Aligned"
      >
        <Icon class="w-[15px] h-[15px]" icon="radix-icons:text-align-right" />
      </ToolbarToggleItem>
    </ToolbarToggleGroup>
  </ToolbarRoot>
</template>