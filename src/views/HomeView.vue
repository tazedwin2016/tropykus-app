<template>
<div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-1">
      <div class="py-6 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-500 sm:rounded-lg ">
          <h2 class="px-2 py-3 text-2xl text-left">Uniswap</h2>
          <Table
            :columns="columns"
            :data="uniswapPrices"
          >
            <template v-slot:price="{ item }">
              {{ item.price }} {{ item.currency }}
            </template>
            <template v-slot:options>
              <button @click="mockExchangeSuccess" class="transition ease-in-out delay-600 hover:-translate-y-1 hover:scale-200 duration-300">
                  Cambiar
              </button>
            </template>
          </Table>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-1">
      <div class="py-6 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-500 sm:rounded-lg ">
          <h2 class="px-2 py-3 text-2xl text-left">Coinbase</h2>
          <Table
            :columns="columns"
            :data="coinbasePrices"
          >
            <template v-slot:price="{ item }">
              {{ item.price }} {{ item.currency }}
            </template>
            <template v-slot:options>
              <button @click="mockExchangeFailed" class="transition ease-in-out delay-600 hover:-translate-y-1 hover:scale-200 duration-300">
                  Cambiar
              </button>
            </template>
          </Table>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
/* eslint-disable */
import Table from '../components/Table.vue';
import { onSnapshot, query } from "firebase/firestore";
import { db, collection, getDocs } from '../utils/firebase';
import { onMounted, ref, computed } from 'vue';
import Swal from 'sweetalert2';

const coinbasePrices = ref([])
const uniswapPrices = ref([])

const columns = computed(() => [
  {
    id: "pairName",
    name: "Par Asset"
  },
  {
    id: "price",
    name: "Precio",
    isSlot: true
  },
  {
    id: "options",
    name: "Intercambiar",
    isSlot: true
  },
])



const fetchDataFromFirebase = (collectionName: string, listOutput: any) => {
  const q = query(collection(db, collectionName));
    onSnapshot(q, (querySnapshot) => {
      const list = [] as any
      querySnapshot.forEach((doc) => {
          list.push(doc.data())
      });
      console.log(list)
  
      listOutput.value = list
  
    });
}

onMounted(() => {
  fetchDataFromFirebase('coinbase', coinbasePrices)
  fetchDataFromFirebase('uniswap', uniswapPrices)
});

const mockExchangeSuccess = () => {
  Swal.fire({
    title: 'Exitoso',
    text: 'Intercambio Exitoso',
    icon: 'success',
  });
};

const mockExchangeFailed = () => {
  Swal.fire({
    title: 'OPPS',
    text: 'Intercambio fallido',
    icon: 'warning',
  });
};

</script>
