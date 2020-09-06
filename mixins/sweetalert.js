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
        },
        verifyUserAccount(modal_title="Account verification", modal_html="Sending verification code..", submitTitle="Please enter the code", confirmBtnText="Submit", cancelBtnText="Cancel", successMessage="Your account successfully verified!", codeEmptyError="Request failed"){
            Swal.fire({
                title: modal_title,
                html: modal_html,
                timer: 3000,
                onBeforeOpen: () => {
                    Swal.showLoading()
                },
                onClose: () => {

                }
            }).then((result) => {
                this.submitVerificationCode(submitTitle, confirmBtnText, cancelBtnText, successMessage, codeEmptyError)
            })
        },
        submitVerificationCode(modal_title, confirmBtnText, cancelBtnText, successMessage, codeEmptyErr){
            Swal.fire({
                title: modal_title,
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: confirmBtnText,
                cancelButtonText: cancelBtnText,
                showLoaderOnConfirm: true,
                preConfirm: (login) => {
                    return fetch(`//api.github.com/users/${login}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(response.statusText)
                        }
                        return response.json()
                    })
                    .catch(error => {
                        Swal.showValidationMessage(
                            `${codeEmptyErr}! ${error}`
                        )
                    })
                },

                allowOutsideClick: () => !Swal.isLoading()

                }).then((result) => {
                if (result.value) {
                    // Swal.fire({
                    //     title: `${result.value.login}'s avatar`,
                    //     imageUrl: result.value.avatar_url
                    // })
                    
                    this.notifyToast(successMessage, 'success')
                }
            })
        },
        takeImageLook(image_href){
            Swal.fire({
                imageUrl: image_href,
                imageWidth: 300,
                imageHeight: 300
            })
        },
        removeUserSuggestion(userData){
            Swal.fire({
                title: this.$t('Are you sure?'),
                text: "You won't be able to revert this!",
                icon: 'error',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                confirmButtonText: this.$t('Yes, delete it!')
              }).then((result) => {
                if (result.value) {
                  Swal.fire(
                    this.$t('Deleted!'),
                    this.$t('User has been deleted.'),
                    'success'
                  )
                }
              })
        }
    }
}