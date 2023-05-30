<template>
  <div class="home">
    <h1>Homepage</h1>
    <router-link :to="{ name: 'CreateHomeForm' }">List a house</router-link>
    <ul v-if="houses.length">
      <li v-for="house in houses" :key="house.id">
        <h2>{{house.location.street}} - {{house.location.houseNumber}}</h2>
        <p>{{house.location.city}} {{house.location.zip}}</p>
        <img :src="house.image" alt="" srcset="">
      </li>
    </ul>

    <router-view />
  </div>
</template>

<script>
//@ is an alias to /src
// import * as dotenv from '../../.env'
// dotenv.config()
// console.log("hello")
// console.log("env",process.env.API_KEY)

export default {
  name: "HomeListingList",
  data() {
    return {
      houses: [],
    };
  },
  mounted() {
    console.log("Water");
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-Api-Key": "AW5_aheGyK3Tgdw47uBoURJZFknDXpPc ",
    };
    fetch("https://api.intern.d-tt.nl/api/houses", {
      headers,
    })
      .then((response) => response.json())
      .then((data) => {
        this.houses = data;
        // console.log("houses", this.houses);

        console.log(JSON.parse(JSON.stringify(this.houses)));
      })
      .catch((err) => console.log(err.message));
  },
  methods: {},
};
</script>
