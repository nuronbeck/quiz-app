import camelCaseKeys from 'camelcase-keys'

export const prefixProps = (props, prefix) => {
  let newProps = {}
  Object.keys(props).forEach(prop => {
    newProps[`${prefix}-${prop}`] = props[prop]
  })

  return camelCaseKeys(newProps)
}
