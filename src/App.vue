<template>
  <nav>
  </nav>
  <router-view/>
</template>

<script>
import { onMounted } from 'vue';
import { db, collection, getDocs } from './utils/firebase';
/* eslint-disable */

export default ({
  name: 'App', 
  setup() {
    async function getCoinbase(DB) {
    const coinbaseCol = collection(DB, 'coinbase');
    const coinSnapshot = await getDocs(coinbaseCol);
    const coinList = coinSnapshot.docs.map((doc) => doc.data());
    console.log(coinList);
    return coinList;
    }
    async function getUniswap(DB) {
    const uniswapCol = collection(DB, 'uniswap');
    const unisSnapshot = await getDocs(uniswapCol);
    const unisList = unisSnapshot.docs.map((doc) => doc.data());
    console.log(unisList);
    return unisList;
    }
    onMounted(() => {
    getCoinbase(db);
    getUniswap(db);
    });
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

