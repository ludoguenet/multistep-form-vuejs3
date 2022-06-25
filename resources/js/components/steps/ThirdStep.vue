<template>
    <form class="flex flex-col space-y-3">
        <div>
            <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
            <div class="mt-1 relative rounded-md shadow-sm">
                <textarea
                name="description"
                id="description"
                class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Je suis super fort en Vue..."
                v-model="props.formValues.description"
                >
                </textarea>
            </div>
        </div>
    </form>
</template>

<script setup>
    const props = defineProps(['formValues']);
</script>

