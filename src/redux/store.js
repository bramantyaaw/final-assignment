import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import moviesReducer from '../reducers/movies'

export const store = configureStore({
    reducer: {
      movies: moviesReducer
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(logger),
    devTools: true
  })
