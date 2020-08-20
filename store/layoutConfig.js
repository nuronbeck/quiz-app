export const state = () => ({
  default: {
    containerClass: 'container page__container',
    navbarContainerClass: 'd-flex w-100 align-items-center'
  },
  fixed: {
    containerClass: 'container page__container',
    navbarContainerClass: 'container-fluid'
  },
  sticky: {
    containerClass: 'container-fluid page__container',
    navbarContainerClass: 'd-flex w-100 align-items-center'
  },
  boxed: {
    containerClass: 'container-fluid page__container',
    navbarContainerClass: 'd-flex w-100 align-items-center'
  }
})
