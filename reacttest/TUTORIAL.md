

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

# 组件

组件允许你将 UI 拆分为独立可复用的代码片段，并对每个片段进行独立构思。
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

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




