export default function({ store, redirect }) {
    if(!store.getters['user/isStudent']){
        redirect('/login')
    }
}