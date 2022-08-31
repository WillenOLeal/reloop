import { createRouter } from './context'
import { z } from 'zod'

export const movieRouter = createRouter()
  .query('hello', {
    input: z
      .object({
        input: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? 'world'}`,
      }
    },
  })
  .query('getMovies', {
    async resolve() {
      return ['movie1', 'movie2', 'movie3']
    },
  })
