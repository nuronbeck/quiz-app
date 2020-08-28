export default function({ store, redirect }) {
    if(!store.getters['user/hasToken']){
        redirect('/')
    }
}