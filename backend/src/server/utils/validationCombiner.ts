export const useErrorCombiner = () => {
  const errors = []
  let isNotEmpty = false

  return {
    set(key, err) {
      isNotEmpty = true
      const keyIndex = errors.findIndex(item => !!item[key])

      if (keyIndex === -1) {
        return errors.push({ [key]: [err] })
      }
      errors[keyIndex][key].push(err)
    },
    get() {
      return errors
    },
    isNotEmpty() {
      return isNotEmpty
    },
  }
}
