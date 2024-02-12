<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
</script>

<template>
  <div class="flex w-full items-center p-4 justify-center">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem class="bg-white rounded shadow p-2 mx-2">
          <router-link to="/email">
            Email Dashboard
          </router-link>
        </NavigationMenuItem>
        <NavigationMenuItem class="bg-white rounded shadow p-2 mx-2">
          <router-link to="/email-panels">
            Email Dashboard (Panels)
          </router-link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
</template>
