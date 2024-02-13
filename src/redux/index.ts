import * as Redux from 'redux'

const domElementIds = ['value', 'increment', 'decrement'] as const
type DomElementName = (typeof domElementIds)[number]
type Dom = Record<DomElementName, HTMLElement> | null
const setupDom = (): Dom =>
  domElementIds.reduce((acc, id) => {
    if (!acc) return null
    const domEl = document.getElementById(id)
    if (!domEl) return null
    return {
      ...acc,
      [id]: domEl,
    }
  }, {} as Dom)

const tmp = (): void => {
  const dom = setupDom()
  if (!dom) return

  type State = {
    counter: number
  }

  enum ActionType {
    increment = 'increment',
    decrement = 'decrement',
  }

  type Action = {
    type: ActionType
  }

  const initialState = { counter: 0 }

  const reducer: Redux.Reducer<State, Action, State> = (state, action) => {
    if (!state) return initialState

    switch (action.type) {
      case ActionType.increment:
        return {
          ...state,
          counter: state.counter + 1,
        }

      case ActionType.decrement:
        return {
          ...state,
          counter: state.counter - 1,
        }

      default:
        throw new Error(`Non-existent case in switch: ${action.type}`) // eslint-disable-line
    }
  }

  const store = Redux.createStore(reducer)

  const render = () => {
    dom && (dom.value.innerHTML = store.getState().counter.toString())
  }

  render()

  store.subscribe(render)

  dom.increment.addEventListener('click', () => {
    store.dispatch({ type: ActionType.increment })
  })

  dom.decrement.addEventListener('click', () => {
    store.dispatch({ type: ActionType.decrement })
  })
}

tmp()
