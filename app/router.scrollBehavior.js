export default function (to, from, savedPosition) {
  if (to.hash) {
    return null
  }
  if (savedPosition) {
    return savedPosition
  }
  return { x: 0, y: 0 }
}