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
                    timer: 2200
                }).then(() => {
                    setTimeout(() => resolve(true), 300)
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
            return new Promise((resolve, reject) => {
                Swal.fire({
                    title: this.$t('Are you sure?'),
                    html: this.$t('User with number <b>%{phone}</b></br> (%{first_name} %{last_name}) </br> and all related with it the data will be permanently deleted!', {
                        phone: userData.phone,
                        first_name: userData.first_name,
                        last_name: userData.last_name
                    }),
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#d33',
                    confirmButtonText: this.$t('Yes, delete it!'),
                    cancelButtonText: this.$t('Cancel')
                }).then((result) => {
                    if (result.value) {
                        resolve(true)
                    } else {
                        reject(false)
                    }
                })
            })
        },
        removeStateSuggestion(statePayload){
            return new Promise((resolve, reject) => {
                Swal.fire({
                    title: this.$t('Are you sure?'),
                    html: this.$t('State <b> %{name} </b> and all related with it the data will be permanently deleted!', {
                        name: statePayload.name
                    }),
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#d33',
                    confirmButtonText: this.$t('Yes, delete it!'),
                    cancelButtonText: this.$t('Cancel')
                }).then((result) => {
                    if (result.value) {
                        resolve(true)
                    } else {
                        reject(false)
                    }
                })
            })
        }
    }
}