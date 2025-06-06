import validator from 'validator'
import {
  MIN_LENGTH_CATEGORY_HEX,
  MIN_LENGTH_CATEGORY_ICON,
  MIN_LENGTH_CATEGORY_TITLE,
  MIN_LENGTH_CATEGORY_VALUE,
} from '~/constants/category'

export const checkTitleValid = (combiner, title) => {
  if (!title) return combiner.set('title', 'is required field!')

  const isMinLength = validator.isLength(title, { min: MIN_LENGTH_CATEGORY_TITLE })
  if (!isMinLength) combiner.set('title', `i must be less than ${MIN_LENGTH_CATEGORY_TITLE}`)
}

export const checkValueValid = (combiner, value) => {
  if (!value) return combiner.set('value', 'is required field!')

  const isMinLength = validator.isLength(value, { min: MIN_LENGTH_CATEGORY_VALUE })
  if (!isMinLength) combiner.set('value', `i must be less than ${MIN_LENGTH_CATEGORY_VALUE}`)
}

export const checkColorHexValid = (combiner, colorHex) => {
  if (!colorHex) return combiner.set('colorHex', 'is required field!')

  const isMinLength = validator.isLength(colorHex, { min: MIN_LENGTH_CATEGORY_HEX })
  const isHex = validator.isHexColor(colorHex)
  if (!isMinLength) combiner.set('colorHex', `i must be less than ${MIN_LENGTH_CATEGORY_HEX}`)
  if (!isHex) combiner.set('colorHex', `is not valid hex`)
}

export const checkIconValid = (combiner, icon) => {
  if (!icon) return combiner.set('icon', 'is required field!')

  const isMinLength = validator.isLength(icon, { min: MIN_LENGTH_CATEGORY_ICON })
  if (!isMinLength) combiner.set('icon', `i must be less than ${MIN_LENGTH_CATEGORY_ICON}`)
}
