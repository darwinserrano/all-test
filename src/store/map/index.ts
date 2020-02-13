import { MapState } from "./types"
import { ReduxAction } from "../types"

const initialState: MapState = {
  map: null
}

export default (state = initialState, { type, payload }: ReduxAction) => {
  switch (type) {

    // case typeName:
    //   return { ...state, ...payload }

    default:
      return state
  }
}
