import logo from './logo.svg';
import './App.css';

import "./ReLib/styles/Root.css"
import "./ReLib/styles/Grid.css"
import "./ReLib/styles/Panel.css"

import Button from "./ReLib/components/Button";
import Input from "./ReLib/components/Input";
import Title from "./ReLib/components/Title";
import Description from "./ReLib/components/Description";
import Body from "./ReLib/components/Body";
import Footer from "./ReLib/components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="grid inline panel">
          <div className="item">
            <Title type="title text-left" text="This is a title"/>
            <Description type="description text-left" text="This is a description"/>
            <Body type="body text-left" text="This is a body"/>
            <Footer type="footer text-left" text="This is a footer"/>
            <Input type="input line transparent"/>
          </div>
          <Button type="button contained" text="This is a button"/>
        </div>
      </header>
    </div>
  );
}

export default App;
