import z from 'zod'

const numberField = (schema: z.ZodNumber) => {
  return z.preprocess(val => {
    if (val === '' || val === null || val === undefined) return undefined
    return Number(val)
  }, schema)
}

const oneDecimalRefinement = (val: number) => {
  const decimalPart = val.toString().split('.')[1]
  return !decimalPart || decimalPart.length === 1
}

export const movieModalScheme = z.object({
  movieTitle: z.string().min(1, 'Movie title is required'),

  genres: z.string().min(1, 'At least one genre is required'),

  countries: z.string().min(1, 'At least one country is required'),

  yearOfRelease: numberField(
    z
      .number({ required_error: 'Year of release must be a 4-digit number' })
      .int('Year of release must be an integer')
      .gte(1000, 'Year of release must be a 4-digit number')
      .lte(9999, 'Year of release must be a 4-digit number'),
  ),

  runtime: numberField(
    z
      .number({ required_error: 'Runtime must be at least 10 minutes' })
      .min(10, 'Runtime must be at least 10 minutes'),
  ),

  rating: numberField(
    z
      .number({ required_error: 'Rating must be at least 0' })
      .min(0, 'Rating must be at least 0')
      .max(10, 'Rating cannot be more than 10'),
  ).refine(oneDecimalRefinement, {
    message: 'Rating must have at most 1 digit after the decimal point',
  }),

  descriptionMovie: z.string().min(10, 'The movie description must be at least 10 characters'),
})
