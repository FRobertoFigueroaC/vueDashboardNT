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
        <NavigationMenuItem>
          <router-link to="/">
            Home
          </router-link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <router-link to="/about">
            About
          </router-link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
</template>
