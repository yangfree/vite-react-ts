import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}
// 使用该类型定义初始 state
const initialState: CounterState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
