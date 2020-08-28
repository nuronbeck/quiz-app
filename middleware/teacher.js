export default function({ store, redirect }) {
    if(!store.getters['user/isTeacher']){
        redirect('/login')
    }
}