const ADD_COUNT = 'ADD_COUNT'
const CUT_COUNT = 'CUT_COUNT'

const initState = {
  add_count: 0,
  cut_count: 0
}

export function test(state=initState, action) {
  switch(action.type) {
    case ADD_COUNT:
      return {...state, ...action.payload}
    case CUT_COUNT:
      return {...state, ...action.payload}
    default:
      return state
  }
}


export function test({add_count, cut_count}) {
}
