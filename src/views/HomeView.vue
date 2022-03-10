<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-1">
      <div class="py-6 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-500 sm:rounded-lg ">
          <tr class="text-2xl">Uniswap</tr>
          <table class="min-w-full divide-y divide-gray-300">
            <thead class="bg-gray-100">
              <tr>
                <th scope="col" class="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-500 uppercase tracking-wider text-sm">Token</th>
                <th scope="col" class="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-500 uppercase tracking-wider text-sm">Precio</th>
                <th scope="col" class="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-500 uppercase tracking-wider text-sm">Intercambiar</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-100 transition ease-in-out delay-10 hover:bg-gray-200 ">
              <tr v-for="cripto in coinbase" :key="cripto.base">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-500">{{ cripto.base }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ cripto.price }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <button @click="falloIntercambio" class="transition ease-in-out delay-600 hover:-translate-y-1 hover:scale-200 duration-300">
                  Cambiar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-1">
      <div class="py-6 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-500 sm:rounded-lg ">
          <tr class="text-2xl">Binace Smart Chain</tr>
          {{ coinbase }}
          <table class="min-w-full divide-y divide-gray-300">
            <thead class="bg-gray-100">
              <tr>
                <th scope="col" class="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-500 uppercase tracking-wider text-sm">Token</th>
                <th scope="col" class="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-500 uppercase tracking-wider text-sm">Precio</th>
                <th scope="col" class="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-500 uppercase tracking-wider text-sm">Intercambiar</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-100 transition ease-in-out delay-10 hover:bg-gray-200 ">
              <tr v-for="cripto in uniswap" :key="cripto.base">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-500">{{ cripto.base }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ cripto.price }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <button @click="falloIntercambio" class="transition ease-in-out delay-600 hover:-translate-y-1 hover:scale-200 duration-300">
                    Cambiar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { defineComponent, onMounted } from 'vue';
import Swal from 'sweetalert2';
import { db, collection, getDocs } from '../utils/firebase.js';
import { doc, onSnapshot } from "firebase/firestore";

let coinbase = [];
let uniswap = [];
export default defineComponent({
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
    onMounted(async () => {
    coinbase = await getCoinbase(db);
    uniswap = await getUniswap(db);
    console.log(coinbase);
    });
    const falloIntercambio = () => {
      Swal.fire({
        title: 'OPPS',
        text: 'Intercambio fallido',
        icon: 'warning',
      });
    };
    return {
      coinbase,
      uniswap,
      falloIntercambio,
    };
  },
});
</script>
