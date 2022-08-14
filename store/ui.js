export const state = () => ({
  isSidebarOpen: false,
})

export const mutations = {
  TOGGLE_SIDEBAR(state) {
    state.isSidebarOpen = !state.isSidebarOpen
  },
}
