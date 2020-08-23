import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

export default {
    methods: {
        notifyToast(title, type ) {
            return new Promise((resolve) => {
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    type: type,
                    title: title,
                    showConfirmButton: false,
                    timer: 2500
                }).then(() => {
                    resolve(true)
                })
            })
        }
    }
}