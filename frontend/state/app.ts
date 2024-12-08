import { Action, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState, Organization, Role, Connected } from './types'

export const APP_INITIAL_STATE: AppState = {
  role: undefined,
  organization: undefined,
}

const counterSlice = createSlice({
  name: 'app',
  initialState: APP_INITIAL_STATE,
  reducers: {
    setRole: (state, action: PayloadAction<Role>) => {
      state.role = action.payload
    },
    setOrganization: (state, action: PayloadAction<Organization | undefined>) => {
      state.organization = action.payload
    },
    setConnection: (state, action: PayloadAction<Connected>) => {
      state.connected=action.payload
    },
  },
})

export const { setRole, setOrganization, setConnection } = counterSlice.actions
export default counterSlice.reducer