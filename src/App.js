import { Component } from "react";
import Input from "./components/input/Input";
import Button from "./components/button/Button";
import "./App.css";

class App extends Component {
  state = {
    btns: [
      { term: "AC", bg: 'btn-bg', color: "gray"},
      { term: "%", bg: 'btn-sm', color: "gray" },
      { term: "/", bg: 'btn-sm', color: "orange" },
      { term: "7", bg: 'btn-sm', color: "white" },
      { term: "8", bg: 'btn-sm', color: "white"  },
      { term: "9", bg: 'btn-sm', color: "white"  },
      { term: "*", bg: 'btn-sm', color: "orange" },
      { term: "4", bg: 'btn-sm', color: "white"  },
      { term: "5", bg: 'btn-sm', color: "white"  },
      { term: "6", bg: 'btn-sm', color: "white"  },
      { term: "-", bg: 'btn-sm', color: "orange" },
      { term: "1", bg: 'btn-sm', color: "white"  },
      { term: "2", bg: 'btn-sm', color: "white"  },
      { term: "3", bg: 'btn-sm', color: "white"  },
      { term: "+", bg: 'btn-sm', color: "orange" },
      { term: "0", bg: 'btn-bg', color: "white" },
      { term: ".", bg: 'btn-sm', color: "white" },
      { term: "=", bg: 'btn-sm', color: "orange" },
    ],
  };

  render() {
    
    const {btns} = this.state

    return (
      <div className="App">
        <Input />
        <div className="buttons">
          {btns.map((btn, i) => {
            return (
              <Button key={i} color={btn.color} bg={btn.bg} term={btn.term}/>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
