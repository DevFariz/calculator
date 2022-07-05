import { Component } from "react";
import Input from "./components/input/Input";
import Button from "./components/button/Button";
import "./App.css";

class App extends Component {
  state = {
    btns: [
      { term: "AC", bg: "btn-bg", color: "gray" },
      { term: "%", bg: "btn-sm", color: "gray" },
      { term: "/", bg: "btn-sm", color: "orange" },
      { term: "7", bg: "btn-sm", color: "white" },
      { term: "8", bg: "btn-sm", color: "white" },
      { term: "9", bg: "btn-sm", color: "white" },
      { term: "*", bg: "btn-sm", color: "orange" },
      { term: "4", bg: "btn-sm", color: "white" },
      { term: "5", bg: "btn-sm", color: "white" },
      { term: "6", bg: "btn-sm", color: "white" },
      { term: "-", bg: "btn-sm", color: "orange" },
      { term: "1", bg: "btn-sm", color: "white" },
      { term: "2", bg: "btn-sm", color: "white" },
      { term: "3", bg: "btn-sm", color: "white" },
      { term: "+", bg: "btn-sm", color: "orange" },
      { term: "0", bg: "btn-bg", color: "white" },
      { term: ".", bg: "btn-sm", color: "white" },
      { term: "=", bg: "btn-sm", color: "orange" },
    ],
    expression: "",
  };

  onNumberClick = (btn) => {
    let a = this.state.expression[this.state.expression.length - 1];

    const checkOperator = (operand, a) => {
      let exp = this.state.expression + operand;
      if (
        a === "-" ||
        a === "%" ||
        a === "+" ||
        a === "/" ||
        a === "*" ||
        a === "."
      ) {
        exp = exp.slice(0, exp.length - 2) + operand;
      }
      this.setState({
        expression: exp,
      });
    };

    switch (btn.term) {
      case "=":
        if (this.state.expression === "" || eval(this.state.expression) === 0) {
          this.setState({
            expression: "",
          });
        } else if (
          a !== "-" &&
          a !== "%" &&
          a !== "+" &&
          a !== "/" &&
          a !== "*"
        ) {
          this.setState({
            expression:
              /* eslint no-eval: 0 */
              eval(this.state.expression),
          });
        }
        break;
      case "AC":
        this.setState({
          expression: 0,
        });
        break;
      case "-":
      case "+":
      case "*":
      case "/":
      case "%":
      case ".":
        checkOperator(btn.term, a);
        break;
      case "0":
        if (this.state.expression === "") {
          this.setState({
            expression: "0.",
          });
        } else {
          this.setState({
            expression: this.state.expression + btn.term,
          });
        }
        break;

      default:
        this.setState({
          expression: this.state.expression + btn.term,
        });
    }
  };

  render() {
    const { btns, expression } = this.state;
    return (
      <div className="App">
        <Input expression={expression} />
        <div className="buttons">
          {btns.map((btn, i) => {
            return (
              <Button
                onClick={() => this.onNumberClick(btn)}
                key={i}
                color={btn.color}
                bg={btn.bg}
                term={btn.term}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
