const app = Vue.createApp({});
app.component('friend-contact', {
    template: `
    <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails">
            {{detailsVisible? 'Hide' : 'Show'}} Details
    </button>
    <ul v-if="detailsVisible">
        <li><strong>Phone:</strong> {{friend.phone}} </li>
        <li><strong>Email:</strong> {{friend.email}} </li>
    </ul>
    </li>
    `,
    data(){
        return {
            detailsVisible: false,
            friend: {
                id: 0,
                name: 'John Doe',
                phone: '046 123 123',
                email: 'John@example.com'
            }
        }
    },
    methods: {
        toggleDetails(){
            this.detailsVisible = !this.detailsVisible;
        }
    }
});
app.mount('#app');