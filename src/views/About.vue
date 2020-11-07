<template>
  <div>
    <p>
        STELLAR PREY™️ is a first person strategy shooter game that chronicles the 
        conflict between human technology vs extraterrestrial nature, a conflict waged 
        by construction, team coordination, and epic combat. Help shape the course of 
        your species together towards the top of the stellar food chain, or be the 
        prey together on the road towards extinction. Which path will you and your 
        species choose to take? It’s a universal tale of survival vs death, and of 
        order vs chaos, as old as life itself.
    </p>
    <v-content>
      <v-layout wrap fill-height fill-width>
        <v-flex wrap>
          <router-view></router-view>
        </v-flex>
      </v-layout>
    </v-content>
  </div>
</template>

<style scoped>
p {
  color:white;
  text-align: left;
  font-size: 0.3in;
  margin-top: 30vh;
  margin-left: 5vh;
  width: 700px;
}

</style>
