<script setup lang="ts">
import { ref } from 'vue';

import Nav from '@/components/shared/nav.vue'
import EmailList from '@/components/emailDashboard/EmailList.vue'
import EmailContent from '@/components/emailDashboard/EmailContent.vue'
import { EmailProps } from '../interfaces/Email'

import emailList from '../data/emailList.json'
const { email_list:  emails } = emailList

let selectedEmail = ref(emails[0])
const onChangeMailSelection =  (n: EmailProps) => {
  selectedEmail.value = n
}
</script>

<template>
  <div class="w-full h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-indigo-200 to-purple-300">
    <Nav />
    <div class="grid sm:grid-cols-1  md:grid-cols-2 gap-4">
      <EmailList :emails="emails" @mailSelection="onChangeMailSelection"/>
      <EmailContent :content="selectedEmail"/>
    </div>


  </div>
</template>
