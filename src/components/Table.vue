<script setup lang="ts">

type ColumnsItem = {
    id: string,
    name: string,
    isSlot?: boolean,
    callback: () => void
}

interface Props {
    columns: [ColumnsItem],
    data: [any]
}

const props = defineProps<Props>();

</script>

<template>
    <div class="table-container">
        <table>
            <thead>
                <tr class="">
                    <th v-for="column in props.columns" :key="column.id">{{ column.name }}</th>
                </tr>
            </thead>
            <tbody>
                <tr  v-for="item in props.data" :key="item.id">
                    <td
                        v-for="column in props.columns"
                        :key="column.id"
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
