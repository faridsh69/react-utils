// @ts-nocheck
const STATUSES = {
  pending: 'pending',
  rejected: 'rejected',
  fulfilled: 'fulfilled',
}

export function FaridPromise(mainMethod: any) {
  this.status = STATUSES.pending // first status of promise is pending
  this.result = undefined // We are checking to find out value or result of the mainMethod
  this.error = undefined // we are gather errors or reason of error from running mainMethod or other codes in then
  this.onFulfilledCallbacks = [] // We need to have the codes we are passing in .then to run it inside resolve result
  this.onRejectedCallbacks = [] // We need to have the code we are passing to .catch to run it inside reject error

  this.resolve = result => {
    if (this.status !== STATUSES.pending) return // If we are fullfilled or rejected then we can not again run resolve

    this.status = STATUSES.fulfilled // Change status to fulfilled
    this.result = result // Save the result as may we need it to pass to our new promise return inside then
    this.onFulfilledCallbacks.forEach(fn => fn(result)) // Running callbacks inside .then() on the result
  }
  this.reject = error => {
    if (this.status !== STATUSES.pending) return

    this.status = STATUSES.rejected
    this.error = error
    this.onRejectedCallbacks.forEach(fn => fn(error))
  }

  try {
    mainMethod(this.resolve, this.reject) // Now we are running the method and let the user to use resolve and reject
  } catch (e) {
    this.reject(e)
  }

  this.then = (onFulfilled, onRejected) => {
    // Inside then we have to pass a new promise but if we run another then after current then, they are two different promise
    // First promise resolved value will inject to the second promise
    return new FaridPromise((resolve, reject) => {
      // We are passing executer method as mainMethod
      const fulfilled = result => resolve(onFulfilled ? onFulfilled(result) : result)

      const rejected = error => reject(onRejected ? onRejected(error) : error)

      if (this.status === STATUSES.fulfilled) {
        setTimeout(() => fulfilled(this.result), 0)
      } else if (this.status === STATUSES.rejected) {
        setTimeout(() => rejected(this.error), 0)
      } else {
        // Consider neither reject or resolve called, so we should keep the onFulfilled and onRejected inside promise memory
        this.onFulfilledCallbacks.push(fulfilled)
        this.onRejectedCallbacks.push(rejected)
      }
    })
  }

  // For catch we dont need to write down any new method, just need to pass onRejected as second arg to then method.
  this.catch = onRejected => this.then(null, onRejected)
}
