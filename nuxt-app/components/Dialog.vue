<script setup lang="ts">
import { Icon } from '@iconify/vue'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
} from 'reka-ui'
const props = defineProps({
  open: Boolean
})

const emit = defineEmits(['update:open', 'close'])
</script>

<template>
  
  <DialogRoot  :open="open" @update:open="$emit('update:open', $event)">
    <DialogPortal>
      <DialogOverlay class="DialogOverlay"/>
      <DialogContent class="DialogContent">
        <DialogTitle class="DialogTitle">Edit profile</DialogTitle>
        <DialogDescription class="DialogDescription">
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>

        <fieldset class="Fieldset">
          <label class="Label" for="name">Name</label>
          <input id="name" class="Input" defaultValue="Pedro Duarte">
        </fieldset>

        <fieldset class="Fieldset">
          <label class="Label" for="username">Username</label>
          <input id="username" class="Input" defaultValue="@peduarte">
        </fieldset>

        <div class="mt-[25px] flex justify-end">
          <DialogClose as-child >
            <button class="Button green" @click="emit('update:open', false)">Save changes</button>
          </DialogClose>
        </div>

        <DialogClose class="IconButton" aria-label="Close" @click="emit('update:open', false)">
          <Icon icon="lucide:x" />
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

