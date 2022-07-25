# 什么是 redux？

Redux 是使用“action”的事件来管理和更新应用状态的模式和工具库

它以集中式 Store（centralized store）的方式对整个应用中使用的状态进行集中管理，其规则确保状态只能以可预测的方式更新。

Redux 帮你管理“全局”状态 - 哪些应用程序的许多部分都需要的状态。

Redux 提供的模式和工具使您更容易理解应用程序中的状态何时、何地、为什么以及如何更新，以及当这些更改发生时您的应用程序逻辑将如何表现. Redux 指导您编写可预测和可测试的代码，这有助于让您确信您的应用程序将按预期工作。

# **什么时候需要 rudux？**

简单说，如果你的 UI 层非常简单，没有很多互动，Redux 就是不必要的，用了反而增加复杂性。

# redux 工作流程

![reudx工作流程图](public/redux%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B%E5%9B%BE.jpg)
1、首先要创建一个状态容器 store （创建时传入了 reducer 回调函数，这个函数会在触发 action 时被调用）。
2、通过 store.dispatch() 方法来触发 action （触发 action 时，要传入 action 对象。）
3、store 会在 action 触发之后，调用 reducer 函数。并把当前的 state 和 action 对象作为参数传递给 reducer 函数。
4、reducer 被调用之后的返回值，会被用来更新 store 里的 state。
5、store.subscribe()函数实现了订阅 store 里的 state。我们只要传入一个函数，用于跟新 UI（组件）。

# React-redux 插件 介绍

React-redux 模块的作用，就是让 react 和 redux 进行完美的结合。模块里面只有两个内容，分别是 Provider 组件和 connect 方法。

# React-redux 插件的 Provider 组件

Provider 组件 ：
作用是可以把我们创建出来的 store 放在一个全局的地方（放在一个组件能够得着的地方）。
使用方法是，用这个组件包裹其他所有组件，并且把创建的 store 对象传递给 Provide 组件的 store 属性。

# React-redux 插件的 connect 方法

```js
作用：
	（1）会帮我们订阅store，当store中的状态发生变化的时候，它会帮助我们重新渲染这个组件。省去了 store.discribe()的手动调用。
	（2）我们可以通过connect方法，把store中的状态映射到组件的props属性中。
	（3）通过connect方法，我们可以拿到dispathc方法。
使用：
	（1）当我们调用了connect方法之后，它的内部又返回了一个方法，然后让我们继续去调用它返回的这个方法。
		connect()();
	（2）当调用返回的方法的时候，要求我们把当前组件（CurrentComponent）当参数传递进去。[因为1.当触发action时要知道更新哪个组件。2.要让store指的把状态映射给哪个组件]
		export default connect()(Counter);
	（3）connect方法的第一个参数 是一个回调函数【mapStateToProps 作用是把store.state映射到组件props】， 此回调函数被调用时会传入store的state属性进去。所有可以通过state.count获取到状态值。
		// 此函数要求返回值是一个对象，对象里的属性都会被映射到组件的props对象上
		// 也就是说如果返回值是{a:1}  那么在Counter组件中就可以通过props.a取到1

		const mapStateToProps = (state) => ({
		  count: state.count,
		});

		export default connect(mapStateToProps)(Counter);

	（4）connect方法的第二个参数 也是一个回调函数【mapDispatchToProps 作用是把dispatch操作封装成方法再映射到组件的props中】 ，此回调函数被调用时会把store的dispatch方法当回调函数传 到这个回调函数中。
	const mapDispatchToProps = (dispatch) => ({
	  increment() {
	    dispatch({ type: "increment" });
	  },
	  decrement() {
	    dispatch({ type: "decrement" });
	  },
});
```

# 拆分与合并 reducer

中拆分 re 项目 ducer 可以使项目更加清晰，拆分 reducer 之后，得先办法再给拆分的小 reducer 合并到一起。
redux 中提供了一个方法 combineReducers 来合并 reducer。

```js
import { combineReducers } from "redux";
import counterReducer from "./counter.reducer";
import modalReudcer from "./modal.reudcer";

// { counter: { count:0 }, model: { show: false } }
export default combineReducers({
  counter: counterReducer,
  modal: modalReudcer,
});
```

# Redux 中间件介绍

![redux-中间件-工作流程图](public/redux-%E4%B8%AD%E9%97%B4%E4%BB%B6-%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B%E5%9B%BE.png)
redux 中间件的本质就是一个函数，
之前的 action 是直接被 reducer 处理的。加入中间件以后，当组件触发了 action，这个 atcion 会优先被中间件处理。当中间处理完了，会把这个 action（还是原来的 action 吗？）传递给 reducer 处理。

# 开发和使用 redux 中间件

redux 中间件本质上就是一个函数，而且还是一个柯里化的函数。（啥是柯里化的函数？）

开发中间件的模板代码：
export default store => next => action => {}

中间件要求我们返回一个函数；在这个返回的函数中要求我们再返回一个函数；在最里层的函数中我们可以去执行我们自己的业务逻辑。

在最外层的函数被调用时，会给回调函数传一个 store 参数 （我们可以根据 store.getState 来获取状态；可以根据 store.dispatch 来触发另一个动作。）

3.4 注册中间件
中间件在开发完成以后只有被注册才能在 Redux 的工作流程中生效

```js
import { createStore, applyMiddleware } from "redux";
import loggre from "./middlewares/logger";

createStore(reducer, applyMiddleware(loggre));
```

# 自己实现 thunk 中间件

```js
// 这个中间件的目的是让我们放心的写 函数action 。 因为会被thunk 中间件正确处理。

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
```

# redux-thunk 插件

这个插件的作用就是 和我们上面实现的 thunk 中间件一模一样，我们直接引用就可以使用，不用我们自己实现一遍了。

```js
// 1.redux-thunk 下载：
npm install redux-thunk

// 2.使用：
import thunk from "redux-thunk";
// 多个中间件的执行顺序取决于在applyMiddleware方法中注册的顺序。
export const store = createStore(
  rootReducer,
  applyMiddleware(logger, text, thunk)
);
```

# redux-saga 插件

redux-sage 解决什么问题？
redux-sage 可以将异步操作从 Action Creator 文件中抽离出来，放在 saga 文件中。
redux-sage 和 redux-thunk 功能上很相似。

```
redux-saga 插件的使用步骤。
1.在项目中安装 redux-saga 插件
2.从插件中导入 createSagaMiddleware 方法。并使用  createSagaMiddleware 方法 创建一个 sage中间件。
3.使用 applyMiddleware方法 注册这个saga中间件。
4.定义saga文件，去接收action和处理action。saga文件要求我们默认导出一个generator 函数。
	4.1 可以从模块中导入 takeEvery,put,delay等方法，辅助我们写逻辑。
	4.2 takeEvery 第一个参数代表接收action的类型字符串 ， takeEvery的第二个参数是一个回调函数，接收到action之后就会调用这个回调函数。回调时会传入当前的action对象。
	4.3 saga文件中，要触发action要使用插件put方法。
	4.4 saga文件中，要延迟操作不可用使用setTimeout,要使用插件提供的 delay方法。
5.要使用sageMiddleware.run()方法，来启用 saga 文件。
6.ation文件中添加一个 actionCreator 方法，写法和普通 actionCreator 一样。
```

```
流程梳理：
1.sage文件中接管了的action。在action被触发后，会先经过saga中间件来处理，也就是先走saga文件中定义的generator函数。
2.如果触发的action不是saga文件中接管的，那么会直接给到reducer来处理。（reducer中需要我们自己对每种action写处理逻辑）
```

# redux-actions 插件

```
redux-actions解决的问题
reudx流程中，有大量的样本代码读写很痛苦，使用redux-action可以简化Action和reducer里面的代码。
	1. redux-actions插件提供了 createAction 方法，如此我们就不用自己实现createAction函数，可以直接调用createAction方法创建action。方法的返回值就是actionCreator 函数。这个函数返回值是action对象。
  2. redux-actions插件还提供了handleAction（起个别名叫createReducer更合适）方法，简化了我们写的reducer中的switch语句的写法。返回值就是一个JavaScript对象。
```

```
可以从 redux-action 插件中拿到 createAction 函数。
这个函数的用法是：
const increment_action = createAction('increment')
createAction 函数的返回值也是一个函数，返回的函数调用之后的返回值是一个action对象。

```

# redux-toolkit 插件

```
redux-toolkit是redux官方推出的工具集，之前使用rudux要写很多的模板代码，还要自己下载安装redux的一些插件，导致上手难度比较大。所以reudx官方对redux进行了二次封装（封装出了redux-toolkit），使用它可以让redux开发更加简单。

reudx-tookit并不是什么新的技术，可以就把它理解为redux只是对原来的redux进行了二次封装。（所以使用的时候也不需要下载reudx了！）

一遍来说 reudx-tookit 和 react-redux 配合使用
```
