import { reactive } from "vue";

export default function useForm() {
    const values = reactive({
       'lastname': '',
       'firstname': '',
       'age': '',
       'description': '',
    });

    return {
        values,
    }
}
