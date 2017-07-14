export default function createSetState(middleware) {
  return (context, partialState, callback) => {
    middleware.forEach(fn => fn(partialState))
    context.setState(partialState, callback)
  }
}
