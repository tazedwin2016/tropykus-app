<script setup lang="ts">

export type ColumnsItem = {
    id: string,
    name: string,
    isSlot?: boolean,
    callback?: () => void
}

interface Props {
    columns: [ColumnsItem],
    data: [any]
}

const props = defineProps<Props>();

</script>

<template>
    <div class="table-container">
        <table class="min-w-full divide-y divide-gray-300">
            <thead class="bg-gray-100">
                <tr>
                    <th
                        class="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-500 uppercase tracking-wider text-sm"
                        v-for="column in props.columns" :key="column.id"
                    >
                        <span class="text-sm text-gray-500">
                            {{ column.name }}
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-100 transition ease-in-out delay-10 hover:bg-gray-200">
                <tr  v-for="item in props.data" :key="item.id">
                    <td
                        v-for="column in props.columns"
                        :key="column.id"
                        class="px-6 py-4 whitespace-nowrap"
                        :class="{ 'isOptions': column.id === 'options' }"
                    >
                        <template
                            v-if="!column.isSlot"
                        >
                            {{
                                column.callback
                                ? column.callback(item[column.id])
                                : item[column.id]
                            }}
                        </template>
                        <span v-else><slot :name="column.id" v-bind:item="item"></slot></span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
