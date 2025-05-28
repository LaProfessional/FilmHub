export const useErrorCombiner = () => {
    const errors = []
    let isNotEmpty = false

    return {
        set(key, err) {
            errors.push({[key]: err})
            isNotEmpty = true
        },
        get() {
            return errors
        },
        errors,
        isNotEmpty() {
            return isNotEmpty
        }
    }
}
