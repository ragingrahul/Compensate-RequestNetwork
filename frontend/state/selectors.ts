import { RootState } from './store'

export const selectRole = (state: RootState) => state.app.role
export const selectOrganization = (state: RootState) => state.app.organization
export const selectConnection = (state: RootState) => state.app.connected
