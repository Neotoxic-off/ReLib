# ReLib: 🦜 Minimal ReactJS Library

## Description
The goal is to build a lightweight library without external requirement

## Components

### Button
#### Contained
```JS
<Button
  type="button contained item-left"
  link="https://github.com/Neotoxic-off/ReLib"
  text="Download"
/>
```

<p align="center">
  <img src="https://raw.githubusercontent.com/Neotoxic-off/ReLib/main/assets/button/contained.png" width="50%" height="50%">
</p>

#### Filled
```JS
<Button
  type="button filled item-left"
  link="https://github.com/Neotoxic-off/ReLib"
  text="Download"
/>
```
<p align="center">
  <img src="https://raw.githubusercontent.com/Neotoxic-off/ReLib/main/assets/button/filled.png" width="50%" height="50%">
</p>

### Input
```JS
<Input
  text="text"
  type="input line transparent"
  placeholder="username"
/>
```
<p align="center">
  <img src="https://raw.githubusercontent.com/Neotoxic-off/ReLib/main/assets/input/line.png" width="50%" height="50%">
</p>

### Title
```JS
<Title type="title text-left" text="This is a title"/>
```
<p align="center">
  <img src="https://raw.githubusercontent.com/Neotoxic-off/ReLib/main/assets/title/title.png" width="50%" height="50%">
</p>

### Description
```JS
<Description type="description text-left" text="This is a description"/>
```
<p align="center">
  <img src="https://raw.githubusercontent.com/Neotoxic-off/ReLib/main/assets/description/description.png" width="50%" height="50%">
</p>

### Body
```JS
<Body type="body text-left" text="This is a body"/>
```
<p align="center">
  <img src="https://raw.githubusercontent.com/Neotoxic-off/ReLib/main/assets/body/body.png" width="50%" height="50%">
</p>

### Footer
```JS
<Footer type="footer text-left" text="This is a footer"/>
```
<p align="center">
  <img src="https://raw.githubusercontent.com/Neotoxic-off/ReLib/main/assets/footer/footer.png" width="50%" height="50%">
</p>

## Example
### Card
```JS
import "../ReLib/styles/Root.css"
import "../ReLib/styles/Grid.css"
import "../ReLib/styles/Panel.css"

import Button from "../ReLib/components/Button";
import Input from "../ReLib/components/Input";
import Title from "../ReLib/components/Title";
import Description from "../ReLib/components/Description";
import Body from "../ReLib/components/Body";
import Footer from "../ReLib/components/Footer";

function Card() {
  return (
    <>
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
    </>
  );
};

export default Card;
```
<p align="center">
  <img src="https://raw.githubusercontent.com/Neotoxic-off/ReLib/main/assets/example/card.png" width="50%" height="50%">
</p>
