import { combineReducers, configureStore } from '@reduxjs/toolkit'

// const rootReducer = combineReducers({})

export const store = configureStore({
    reducer: {},
    devTools: true,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat([])
    }
})


// export type RootState = ReturnType<typeof rootReducer>