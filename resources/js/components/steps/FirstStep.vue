<template>
    <form class="flex flex-col space-y-3">
        <div>
            <label for="firstname" class="block text-sm font-medium text-gray-700">Prénom</label>
            <div class="mt-1 relative rounded-md shadow-sm">
                <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Jean"
                    v-model="props.formValues.firstname"
                >
            </div>
        </div>
        <div>
            <label for="lastname" class="block text-sm font-medium text-gray-700">Nom de famille</label>
            <div class="mt-1 relative rounded-md shadow-sm">
                <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Jean"
                    v-model="props.formValues.lastname"
                >
            </div>
        </div>
    </form>
</template>

<script setup>
    const props = defineProps(['formValues']);
</script>
