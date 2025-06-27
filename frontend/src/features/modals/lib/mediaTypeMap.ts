import type { MovieData, MediaType } from '@/features/modals/lib/types.ts'

const mediaTypeMap: Record<MediaType, MovieData> = {
  Movie: {
    add: 'Add movie',
    title: 'Movie title',
    enterTitle: 'Enter movie title',
    enterDescription: 'Enter movie description',
    durationInfo: 'Runtime (minutes)',
    info: 'In minutes',
    description: 'Description movie',
  },
  Serial: {
    add: 'Add serial',
    title: 'Serial title',
    enterTitle: 'Enter serial title',
    enterDescription: 'Enter serial description',
    durationInfo: 'Number of seasons',
    info: 'Seasons',
    description: 'Description serial',
  },
  Cartoon: {
    add: 'Add cartoon',
    title: 'Cartoon title',
    enterTitle: 'Enter cartoon title',
    enterDescription: 'Enter cartoon description',
    durationInfo: 'Runtime (minutes)',
    info: 'In minutes',
    description: 'Description cartoon',
  },
  'Animated series': {
    add: 'Add animated series',
    title: 'Animated series title',
    enterTitle: 'Enter animated series title',
    enterDescription: 'Enter animated series description',
    durationInfo: 'Number of seasons',
    info: 'Seasons',
    description: 'Description animated series',
  },
}
export const getMediaTypeData = (typeKey: MediaType): MovieData => {
  return mediaTypeMap[typeKey]
}