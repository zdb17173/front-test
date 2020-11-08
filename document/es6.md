
# sadasd


# "use strict";
js的严格模式，会对语法进行限制，当出现限制行为时会报错。

禁止this关键字指向全局对象。因此，使用构造函数时，如果忘了加new，this不再指向全局对象，而是报错。
```
function f(){
    "use strict";
    this.a = 1;
};
f();// 报错，this未定义
```
