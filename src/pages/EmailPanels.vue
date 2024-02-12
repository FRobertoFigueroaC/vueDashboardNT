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

  <div class="PanelGroupWrapper gap-4">
    <PanelGroup class="PanelGroup" direction="horizontal" :defaultSizePercentage="80" >
      <Panel class="PanelRow" :defaultSize="30">
        <EmailList 
            :emails="emails"
            :content="selectedEmail"
            @mailSelection="onChangeMailSelection"/>
      </Panel>
      <ResizeHandle class="ResizeHandle" />
      <Panel class="PanelRow" :defaultSize="70" v-if="selectedEmail">
        <EmailContent :content="selectedEmail"/>
      </Panel>
      <ResizeHandle class="ResizeHandle" />
    </PanelGroup>
    <PanelGroup class="PanelGroup" direction="vertical" :defaultSizePercentage="80" v-if="selectedEmail">
      <Panel :defaultSize="80">
        <EmailRespond :content="selectedEmail"/>
      </Panel>
      <ResizeHandle class="ResizeHandle" />
    </PanelGroup>
  </div>


  </div>
</template>

