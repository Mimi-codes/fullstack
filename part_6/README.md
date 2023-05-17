FLUX-ARCHITECTURE AND REDUX
# Flux-architecture
Years ago, Facebook developed the Flux-architecture to make state management of React apps easier where the state is separated from the React components and into its own stores.
State in the store is not changed directly, but with different actions but when an action changes the state of the store, the views are rerendered.

## Redux
- The state is also stored in a store just like in flux. 
- Actions are objects, which have at least a field determining the type of the action and changes the state of the store.

- A reducer is a function that is given the current state and an action as parameters and defines the impact of the action to the state of the application. It returns a new state based on the action type. Keep in mind that reducer is never supposed to be called directly from the application's code. 
- Reducer is only given as a parameter to the createStore-function which creates the store.e.g
import { createStore } from 'redux'
const counterReducer = (state = 0, action) => {
  lines of code
}
const store = createStore(counterReducer)

- The reducer is now used by the store to handle actions which are dispatched to the store with its 'dispatch' method.e.g. store.dispatch({ type: 'INCREMENT' })

- You can find out the state of the store using the method getState.e.g. const store = createStore(counterReducer)
console.log(store.getState())

- The subscribe method is used to create callback functions the store calls whenever an action is dispatched to the store.e.g. store.subscribe(() => {
  const storeNow = store.getState()
  console.log(storeNow)
})

- Action creators are functions that create actions

### Forwarding Redux Store to various components
- This is basically the separation of our files like App.js into its module and this is possible by:
a. Install react-redux library using 'npm install react-redux'
b. Define the application as a child of a provider component provided by the react-redux library.
c. useSelector and useDispatch hooks are imported from react-redux library. The latter is saved in a dispatch variable which now used to dispatch actions and useSelector is also saved in a variable and used accordingly. 

