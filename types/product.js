export const ProductProps = {
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  reference: {
    type: String,
    required: true,
  },
  colorName: {
    type: String,
    required: false,
    default: '',
  },
  price: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: false,
    default: '',
  },
  thumbnail: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
}
