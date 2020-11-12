

# 快速开始
```
npx create-react-app my-app
cd my-app
npm start
```
使用该命令可快速搭建脚手架，直接开始编程。启动后访问`http://localhost:3000`即可开始预览结果


# JSX [link](https://react.docschina.org/docs/introducing-jsx.html)


```
const element = <h1>Hello, world!</h1>;
```
这个有趣的标签语法既不是字符串也不是 HTML。它被称为 JSX，是一个 JavaScript 的语法扩展。我们建议在 React 中配合使用 JSX，JSX 可以很好地描述 UI 应该呈现出它应有交互的本质形式。JSX 可能会使人联想到模版语言，但它具有 JavaScript 的全部功能。

JSX必须是一个闭合区间
```
//可以
const element = <div tabIndex="0"></div>;

//可以
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);

//报错
const element = (
    <div></div>
    <div></div>
);
```

JSX的属性，被{}包起来的内容将被转化为属性，函数将被取值后得到js对象。
```

const element = <div tabIndex="0"></div>;

const element = <img src={user.avatarUrl}></img>;

const element = <h1>Hello, {formatName(user)}!</h1>;
```

# 元素渲染 [link](https://react.docschina.org/docs/rendering-elements.html)

React 元素是不可变对象。一旦被创建，你就无法更改它的子元素或者属性。一个元素就像电影的单帧：它代表了某个特定时刻的 UI。
```
//一个最小的元素快
const element = <h1>Hello, world</h1>;
```

根据我们已有的知识，更新 UI 唯一的方式是创建一个全新的元素，并将其传入 ReactDOM.render()。

下面是一个定时器更新的例子，React 只更新它需要更新的部分
```
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

# 组件 [link](https://react.docschina.org/docs/components-and-props.html)

组件允许你将 UI 拆分为独立可复用的代码片段，并对每个片段进行独立构思。以下两种方式都可以
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

组件的组合,组件可以在其输出中引用其他组件。这就可以让我们用同一组件来抽象出任意层次的细节。按钮，表单，对话框，甚至整个屏幕的内容：在 React 应用程序中，这些通常都会以组件的形式表示。
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

props的只读性

所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。
```
//纯函数，多次调用下相同的入参始终返回相同的结果。
function sum(a, b) {
  return a + b;
}
//不是纯函数，因为它更改了自己的入参
function withdraw(account, amount) {
  account.total -= amount;
}
```


# state & 生命周期 [link](https://react.docschina.org/docs/state-and-lifecycle.html)

组件的生命周期可分成三个状态：

Mounting：已插入真实 DOM，Updating：正在被重新渲染，Unmounting：已移出真实 DOM。

以下是可override的react函数：
- constructor 初始化函数

- componentWillMount 在渲染前调用,在客户端也在服务端。

- componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。

- componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。

- shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
可以在你确认不需要更新组件时使用。

- componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。

- componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。

- componentWillUnmount在组件从 DOM 中移除之前立刻被调用。

可参考clock.js了解如何使用以上生命周期来创建定时器和停止定时器



正确使用state的方式：

使用setState
```
// Wrong 不会触发重新渲染
this.state.comment = 'Hello';

// Correct 会触发重新渲染
this.setState({comment: 'Hello'});
```

state更新可能是异步的
```
// Wrong 此代码可能会无法更新计数器
this.setState({
  counter: this.state.counter + this.props.increment,
});

// Correct =>函数用法 
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));

// Correct 普通函数用法
this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
});
```

# 事件处理 [link](https://react.docschina.org/docs/handling-events.html)

- React 事件的命名采用小驼峰式（camelCase），而不是纯小写。
- 使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。

```
传统的返回false就可以不触发
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>

react中需要这样写
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```
具体可参考Toggle.js，多种不同的事件传参方式，以及this和bind的用法
```
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

# 条件渲染 [link](https://react.docschina.org/docs/conditional-rendering.html)

使用&&运算符进行条件渲染。
```
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);
```

# 列表 [link](https://react.docschina.org/docs/lists-and-keys.html)

具体使用可以参考list.js。可以通过使用 {} 在 JSX 内构建一个元素集合。在使用React的列表时，应为每个列表中的组件增加一个key。


# form表单

在React中，会将Form表单转化为一个受控组件，用state来控制所有数值变化。对于受控组件来说，输入的值始终由 React 的 state 驱动。你也可以将 value 传递给其他 UI 元素，或者通过其他事件处理函数重置，但这意味着你需要编写更多的代码。

```
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '请撰写一篇关于你喜欢的 DOM 元素的文章.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('提交的文章: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          文章:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
```

# 状态提升 [link](https://react.docschina.org/docs/lifting-state-up.html)

通常，多个组件需要反映相同的变化数据，这时我们建议将共享状态提升到最近的共同父组件中去。

状态提升需要将state提升到多个组件的共同父组件，调试起来需要插件辅助，具体可参考：https://github.com/facebook/react/tree/master/packages/react-devtools

具体可参考Temperature.js


# 组合和继承

React 有十分强大的组合模式。推荐使用组合而非继承来实现组件间的代码重用。

参考extendtest.js


# hook [link](https://react.docschina.org/docs/hooks-intro.html)

Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

如果你熟悉 React class 的生命周期函数，你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。

参考hook.js


# 拷贝

react的state在修改时尽量采用拷贝方式，以触发react的自动渲染机制。并且后续可方便进行历史回溯等功能的添加。
```
const target = { a: 1 };

const source1 = { b: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}
```

注意

（1）浅拷贝
Object.assign方法实行的是浅拷贝，而不是深拷贝。也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。
```
const obj1 = {a: {b: 1}};
const obj2 = Object.assign({}, obj1);

obj1.a.b = 2;
obj2.a.b // 2
```

（2）同名属性的替换

对于这种嵌套的对象，一旦遇到同名属性，Object.assign的处理方法是替换，而不是添加。
```
const target = { a: { b: 'c', d: 'e' } }
const source = { a: { b: 'hello' } }
Object.assign(target, source)
// { a: { b: 'hello' } }
```




