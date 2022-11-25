# ReLib: 🦜 Minimal ReactJS Library

## Description
The goal is to build a lightweight library without external requirement

## Components

### Button
```JS
<Button
  type="button contained item-left"
  link="https://github.com/Neotoxic-off/ReLib"
  text="Download"
/>
```

### Article
```JS
<Article
  title="Title"
  description="description"
  body="body"
  footer="footer"

  typetitle="title text-left"
  typedescription="description text-left"
  typebody="body text-left"
  typefooter="footer text-left"
/>
```

## Example

### Card
#### Vertical
```JS
import "../ReLib/styles/Root.css"
import "../ReLib/styles/Grid.css"
import "../ReLib/styles/Panel.css"

import Article from "../ReLib/components/Article";
import Button from "../ReLib/components/Button";

function Vertical() {
  return (
    <>
      <div className="grid line panel">
        <div className="item article">
          <Article
            title="Title"
            description="description"
            body="body"
            footer="footer"

            typetitle="title text-left"
            typedescription="description text-left"
            typebody="body text-left"
            typefooter="footer text-left"
          />
          <Button
            type="button contained item-left"
            link="https://github.com/Neotoxic-off/ReLib"
            text="Download"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
```
<p align="center">
  <img src="https://raw.githubusercontent.com/Neotoxic-off/ReLib/main/assets/card/card-line.png" width="50%" height="50%">
</p>

#### Vertical
```JS
import "../ReLib/styles/Root.css"
import "../ReLib/styles/Grid.css"
import "../ReLib/styles/Panel.css"

import Article from "../ReLib/components/Article";
import Button from "../ReLib/components/Button";

function Horizontal() {
  return (
    <>
      <div className="grid column panel">
        <div className="item article">
          <Article
            title="Title"
            description="description"
            body="body"
            footer="footer"

            typetitle="title text-left"
            typedescription="description text-left"
            typebody="body text-left"
            typefooter="footer text-left"
          />
          <Button
            type="button contained item-left"
            link="https://github.com/Neotoxic-off/ReLib"
            text="Download"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
```
<p align="center">
  <img src="https://raw.githubusercontent.com/Neotoxic-off/ReLib/main/assets/card/card-column.png" width="50%" height="50%">
</p>

