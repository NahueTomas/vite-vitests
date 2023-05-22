import { rest } from 'msw'
import { API_URL } from '../src/services/api.service'

// Mock Data
import { errorEndpoint } from './responses/errorEndpoint'

// Define handlers that catch the corresponding requests and returns the mock data.
export const errorHandlers = [
  rest.get(API_URL, (req, res, ctx) => {
    return res(ctx.status(500), ctx.json(errorEndpoint))
  }),
]
