<template>
        <nav class="mb-20 flex justify-center">
        <ol class="flex">
            <li
                class="relative w-[150px] text-center text-sm font-light italic
                    after:content-[''] after:absolute after:left-[50%] after:top-[200%] after:w-5 after:h-5
                    after:bg-indigo-500 after:rounded-full after:z-50"
            >
                Etape 1
            </li>
            <li
                class="relative w-[150px] text-center text-sm font-light italic
                    before:content-[''] before:absolute before:left-[-50%] before:top-[calc(200%+0.5rem)] before:w-full before:h-1
                    after:bg-gray-300 before:bg-gray-300
                    after:content-[''] after:absolute after:left-[50%] after:top-[200%] after:w-5 after:h-5 after:rounded-full after:z-50"
                    :class="{
                        'stepFull':
                        currentStep >= 1 && currentStep <= 3
                    }"
            >
                Etape 2
            </li>

            <li
                class="relative w-[150px] text-center text-sm font-light italic
                    before:content-[''] before:absolute before:left-[-50%] before:top-[calc(200%+0.5rem)] before:w-full before:h-1
                   after:bg-gray-300 before:bg-gray-300
                    after:content-[''] after:absolute after:left-[50%] after:top-[200%] after:w-5 after:h-5 after:bg-gray-300 after:rounded-full after:z-50"
                    :class="{
                        'stepFull':
                        currentStep >= 2 && currentStep <= 3
                    }"
            >
                Etape 3
            </li>
        </ol>
    </nav>

    <!-- components dynamiques -->
    <component
        v-bind:is="formSteps[currentStep]"
        v-bind:formValues="values"
    ></component>

    <div
        class="py-3 flex items-center justify-between"
        v-if="currentStep < 3"
    >
        <button
            type="submit"
            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            v-on:click="previousStep"
            v-if="currentStep > 0"
        >
            Précedent
        </button>

        <button
            type="submit"
            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            v-on:click="nextStep"
        >
            Suivant
        </button>
    </div>
</template>

<script setup>
    import FirstStepVue from './steps/FirstStep.vue';
    import SecondStepVue from './steps/SecondStep.vue';
    import ThirdStepVue from './steps/ThirdStep.vue';
    import FinalStepVue from './steps/FinalStep.vue';
    import useForm from '../composables/form.js';

    import { ref } from 'vue';

    const {
        values
    } = useForm();

    const currentStep = ref(0);
    const formSteps = [
        FirstStepVue,
        SecondStepVue,
        ThirdStepVue,
        FinalStepVue,
    ];

    const nextStep = () => {
        currentStep.value++;
    }

    const previousStep = () => {
        currentStep.value--;
    }
</script>
