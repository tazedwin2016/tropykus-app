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
              <tr v-for="cripto in moneda" :key="cripto.token">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-500">{{ cripto.token }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ cripto.precio }}
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
          <table class="min-w-full divide-y divide-gray-300">
            <thead class="bg-gray-100">
              <tr>
                <th scope="col" class="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-500 uppercase tracking-wider text-sm">Token</th>
                <th scope="col" class="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-500 uppercase tracking-wider text-sm">Precio</th>
                <th scope="col" class="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-500 uppercase tracking-wider text-sm">Intercambiar</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-100 transition ease-in-out delay-10 hover:bg-gray-200 ">
              <tr v-for="cripto in moneda" :key="cripto.token">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-500">{{ cripto.token }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ cripto.precio }}
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

<script lang="ts">
import { defineComponent } from 'vue';
import Swal from 'sweetalert2';

const moneda = [
  {
    token: 'token',
    precio: 'precio',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More moneda...
];
export default defineComponent({
  setup() {
    const falloIntercambio = () => {
      Swal.fire({
        title: 'OPPS',
        text: 'Intercambio fallido',
        icon: 'warning',
      });
    };
    return {
      moneda,
      falloIntercambio,
    };
  },
});
</script>
