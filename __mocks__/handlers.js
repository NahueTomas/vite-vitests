import { rest } from 'msw'
import { API_URL } from '../src/services/api.service'

// Mock Data
import { data } from './responses/accounts'

// Define handlers that catch the corresponding requests and returns the mock data.
export const handlers = [
  rest.get(API_URL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data))
  }),
]
