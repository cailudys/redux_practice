export default ({ dispatch }) =>
  (next) =>
  (action) => {
    // 1.当前这个中间件函数不关心你想执行什么样的异步操作 只关心你执行的是不是异步操作
    // 2. 如果你执行的是异步操作 你再触发action的时候 给我传递一个anction函数 如果执行的是同步操作给我传递要给action对象。
    // 3. 异步代码要写在你传递进来的函数中
    // 4. 当前这个中间件函数再调用你传递进来的回调函数的时候 要将dsipatch方法传递过去
    if (typeof action === "function") {
      // 这里直接操作了 状态 不用往下再传递了
      return action(dispatch);
    }
    next(action);
  };
