<script setup lang="ts">
import { ref } from 'vue';

import { Panel, PanelGroup, PanelResizeHandle } from "vue-resizable-panels";

import Nav from '@/components/shared/nav.vue'
import EmailList from '@/components/emailDashboard/EmailList.vue'
import EmailContent from '@/components/emailDashboard/EmailContent.vue'
import EmailRespond from '@/components/emailDashboard/EmailRespond.vue'
import { EmailProps } from '../interfaces/Email'

import emailList from '../data/emailList.json'
const { email_list:  emails } = emailList

// let selectedEmail = ref(emails[0])
let selectedEmail = ref(null)
const onChangeMailSelection =  (n: EmailProps) => {
  selectedEmail.value = n
}
</script>

<template>
  <div class="w-full h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-indigo-200 to-purple-300">
    <Nav />
    <div class="grid sm:grid-cols-1  md:grid-cols-2 gap-1">
      <EmailList :emails="emails" @mailSelection="onChangeMailSelection"/>
      <EmailContent :content="selectedEmail"/>
    </div>
    <div class="grid grid-cols-1 gap-1">
      <EmailRespond :content="selectedEmail"/>
    </div>

 
  <!-- <div class="PanelGroupWrapper gap-4">
    <PanelGroup class="PanelGroup" direction="horizontal">
      <Panel class="PanelRow" :defaultSize="20" :minSize="20">
        <EmailList :emails="emails" @mailSelection="onChangeMailSelection"/>
      </Panel>
      <ResizeHandle class="ResizeHandle" />
      <Panel class="PanelRow" :minSize="30">
        <EmailContent :content="selectedEmail"/>
      </Panel>
      <ResizeHandle class="ResizeHandle" />
    </PanelGroup>
  </div> -->


  </div>
</template>

<style scoped>
.PanelGroupWrapper {
  height: 20rem;
  background-color: grey;
}

.PanelGroup {
  font-size: 2rem;
}

.Panel {
  display: flex;
  flex-direction: row;
  font-size: 2rem;
}

.PanelColumn,
.PanelRow {
  display: flex;
}
.PanelColumn {
  flex-direction: column;
}
.PanelRow {
  flex-direction: row;
}

.Centered {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-panel-background);
  border-radius: 0.5rem;
  overflow: auto;
  font-size: 1rem;
  padding: 0.5rem;
  word-break: break-all;
}

.ResizeHandle {
  background-color: red;
}
</style>
