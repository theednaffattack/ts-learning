// 'ValueOf' adapted from: https://stackoverflow.com/a/55774565/9448010
type ValueOf<T> = T[keyof T];

const STATE = {
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
  PENDING: "pending",
};

export class MyPromise {
  // #thenCbs: any[] = [];
  // Notation for array of functions  adapted from: https://stackoverflow.com/a/43573022/9448010
  #thenCbs: ((valOrError?: any) => any)[] = [];
  #state: ValueOf<typeof STATE> = STATE.PENDING;
  #value: any;
  #onSuccessBind = this.#onSuccess.bind(this);
  #onFailureBind = this.#onFailure.bind(this);

  constructor(
    cb: (success: (value: any) => void, failure: (value: any) => void) => any
  ) {
    try {
      cb(this.#onSuccessBind, this.#onFailureBind);
    } catch (err) {
      this.#onFailure(err);
    }
  }

  #runCallbacks() {}

  #onSuccess(value: any) {
    if (this.#state !== STATE.PENDING) return;
    this.#value = value;
    this.#state = STATE.FULFILLED;
    this.#runCallbacks();
  }

  #onFailure(value: any) {
    queueMicrotask(() => {
      if (this.#state !== STATE.PENDING) return;
      // // Not sure what the '#onSuccessBind' and '#onFailureBind'
      // // actually do, below.
      // if (value instanceof MyPromise) {
      //   value.then(this.#onSuccessBind, this.#onFailureBind);
      //   return;
      // }
      this.#value = value;
      this.#state = STATE.REJECTED;
      this.#runCallbacks();
    });
  }

  then<TResult1, TResult2>(
    onSuccessCb?:
      | ((value: TResult1) => TResult1 | PromiseLike<TResult1>)
      | undefined
      | null,
    onFailureCb?:
      | ((reason: any) => TResult2 | PromiseLike<TResult2>)
      | undefined
      | null
  ) {
    return new MyPromise((resolve, reject) => {
      this.#thenCbs.push((result) => {
        // If there is no onSuccessCb it's
        // probably an error so resolve immediately
        // and return, so that we can move to the next chained promise.
        if (onSuccessCb == null) {
          resolve(result);
          return;
        }

        // If there is an onSuccessCb then this should
        // be handled by this 'then' callback. We wrap in
        // a trycatch for proper error handling.
        try {
          resolve(onSuccessCb(result));
        } catch (err) {
          reject(err);
        }
      });

      if (onSuccessCb) {
        this.#thenCbs.push(onSuccessCb);
      }
      if (onFailureCb) {
        this.#thenCbs.push(onFailureCb);
      }
      this.#runCallbacks();
    });
  }

  catch(onFailureCb: () => void) {
    this.then(undefined, onFailureCb);
  }

  finally() {}
}
