import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

  //转为摄氏度
  function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  //转为华氏度
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

  //状态转换
  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  class TemperatureInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {temperature: ''};
    }
  
    handleChange(e) {
      //e为触发该事件的对象， target为返回触发此事件的元素（事件的目标节点）。此处的e.target.value
      //可以拿到<input的value属性>
      this.props.onTemperatureChange(e.target.value)
    }
  
    render() {
      const temperature = this.props.temperature;
      const scale = this.props.scale;
      return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input value={temperature}
                 onChange={this.handleChange} />
        </fieldset>
      );
    }
  }

  function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }

  class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
      this.state = {temperature: '', scale: 'c'};
    }
  
    handleCelsiusChange(temperature) {
      this.setState({scale: 'c', temperature});
    }
  
    handleFahrenheitChange(temperature) {
      this.setState({scale: 'f', temperature});
    }
  
    render() {
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
      const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  
      return (
        <div>
          <TemperatureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={this.handleCelsiusChange} />
          <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange} />
          <BoilingVerdict
            celsius={parseFloat(celsius)} />
        </div>
      );
    }
  }

  /**
   * 梳理一下当你对输入框内容进行编辑时会发生些什么
   * 1、React 会调用 DOM 中 <input> 的 onChange 方法。在本实例中，
   * 它是 TemperatureInput 组件的 handleChange 方法。
   * 
   * 2、TemperatureInput 组件中的 handleChange 方法会调用 this.props.onTemperatureChange()，
   * 并传入新输入的值作为参数。其 props 诸如 onTemperatureChange 之类，均由父组件 Calculator 提供。
   * 
   * 3、起初渲染时，用于摄氏度输入的子组件 TemperatureInput 中的 onTemperatureChange 方法
   * 与 Calculator 组件中的 handleCelsiusChange 方法相同，而，用于华氏度输入的子组件 
   * TemperatureInput 中的 onTemperatureChange 方法与 Calculator 组件中的 
   * handleFahrenheitChange 方法相同。因此，无论哪个输入框被编辑都会调用 Calculator 组件
   * 中对应的方法。
   * 
   * 4、在这些方法内部，Calculator 组件通过使用新的输入值与当前输入框对应的温度计量单位来调用 
   * this.setState() 进而请求 React 重新渲染自己本身。
   * 
   * 5、React 调用 Calculator 组件的 render 方法得到组件的 UI 呈现。温度转换在这时进行，
   * 两个输入框中的数值通过当前输入温度和其计量单位来重新计算获得。
   * 
   * 6、React 使用 Calculator 组件提供的新 props 分别调用两个 TemperatureInput 子组件
   * 的 render 方法来获取子组件的 UI 呈现。
   * 
   * 7、React 调用 BoilingVerdict 组件的 render 方法，并将摄氏温度值以组件 props 方式传入。
   * 
   * 8、React DOM 根据输入值匹配水是否沸腾，并将结果更新至 DOM。我们刚刚编辑的输入框接收其当前值，
   * 另一个输入框内容更新为转换后的温度值。
   * 
   * 得益于每次的更新都经历相同的步骤，两个输入框的内容才能始终保持同步。
   */

  export default Calculator;