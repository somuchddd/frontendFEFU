<script setup>
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'reka-ui'
defineProps({
   open: Boolean
})
const emit = defineEmits(['close'])
</script>

<template>
  <DialogRoot :open='open'>
    <DialogTrigger />
    <DialogPortal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle />
        <DialogDescription />
        <DialogClose class="IconButton"
            aria-label="Close"
            @click="emit('close')"/>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<style>
    .DialogOverlay { z-index: 1}
    .DialogContent { z-index: 2}
</style>