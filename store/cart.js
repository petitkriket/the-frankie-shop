export const state = () => ({
  items: [],
  coupons: [],
})

export const getters = {
  cartProducts(state, getters, rootState, rootGetters) {
    return state.items.map((cartItem) => {
      const product = rootState.products.items.find(
        (product) => product.id === cartItem.id
      )
      return {
        ...product,
        quantity: cartItem.quantity,
      }
    })
  },
  size: (state, getters) =>
    getters.cartProducts.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    ),
  totalSum: (state, getters) =>
    getters.cartProducts.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    ),
  vat: (state, getters) => getters.totalSum * 0.2,
  totalSumWithCoupons: (state, getters) => {
    const total = getters.totalSum
    const coupons = state.coupons
    return coupons.reduce(
      (total, coupon) => total - total * coupon.discount,
      total
    )
  },
  currentDiscount: (state, getters) =>
    getters.totalSum - getters.totalSumWithCoupons,
}

export const actions = {
  CREATE_ITEM({ state, commit }, product) {
    const cartItem = state.items.find((item) => item.id === product.id)
    cartItem
      ? commit('INCREMENT_ITEM_QUANTITY', cartItem)
      : commit('ADD_ITEM', { id: product.id, quantity: 1 })
  },
  DESTROY_ITEM({ state, commit }, product) {
    const cartItem = state.items.find((item) => item.id === product.id)
    cartItem.quantity > 1
      ? commit('DECREMENT_ITEM_QUANTITY', cartItem)
      : commit('REMOVE_ITEM', cartItem)
  },
  DISCARD_ITEM({ state, commit }, product) {
    const cartItem = state.items.find((item) => item.id === product.id)
    if (cartItem) {
      commit('REMOVE_ITEM', cartItem)
    }
  },
  CREATE_COUPON({ state, commit }, code) {
    // client side discount for the sake of it
    const values = [0.1, 0.25, 0.5]
    const arbitraryDiscount = values[Math.floor(Math.random() * values.length)]

    const coupon = {
      code,
      discount: arbitraryDiscount,
      description: `${code} - ${parseInt(arbitraryDiscount * 100)}% off`,
    }
    commit('ADD_COUPON', coupon)
  },
}

export const mutations = {
  ADD_ITEM(state, cartItem) {
    state.items.push(cartItem)
  },
  INCREMENT_ITEM_QUANTITY(state, cartItem) {
    cartItem.quantity++
  },
  DECREMENT_ITEM_QUANTITY(state, cartItem) {
    cartItem.quantity--
  },
  REMOVE_ITEM(state, cartItem) {
    state.items = state.items.filter((item) => item.id !== cartItem.id)
  },
  ADD_COUPON(state, coupon) {
    state.coupons.push(coupon)
  },
  REMOVE_COUPON(state, coupon) {
    state.coupons = state.coupons.filter((item) => item.code !== coupon.code)
  },
  CLEAR_COUPONS(state) {
    state.coupons = []
  },
  CLEAR_CART(state) {
    state.items = []
  },
}
