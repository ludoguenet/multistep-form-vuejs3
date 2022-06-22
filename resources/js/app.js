import SubscriptionForm from './components/SubscriptionForm';
import { createApp } from 'vue';
import './bootstrap';

const app = createApp();

app.component('subscription-form', SubscriptionForm);

app.mount('#app');
