import { configureStore } from '@reduxjs/toolkit'

import { rootReducers } from '@/store/rootReducers'

export const store = configureStore({
	reducer: rootReducers
})

export type TypeRootState = ReturnType<typeof store.getState>
