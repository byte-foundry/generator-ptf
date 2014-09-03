generator-pptf
==============

Yeoman generator that creates a "Prototypo Parametric TypeFace" folder and the gulpfile to convert it to a "Javascript Uniform Font Object Notation" file.

Install
-------

npm install -g generator-pptf


What is a pptf?
---------------

A pptf is the folder and file structure we use to easily "hand-write" parametric typefaces for Prototypo. Ultimately we want to make it possible to design such a typeface inside Prototypo.

**Anatomy of a pptf** (highly unstable)

    .
    ├── src
    |   ├── glyphs
    |   |   ├── a-cap.js
    |   |   ├── b-cap.js
    |   |   └── ...
    |   ├── parameters.js
    |   ├── presets.js
    |   └── typeface.js
    ├── .gitignore
    ├── .jshintrc
    ├── LICENSE
    ├── gulpfile.json
    └── package.json

**Anatomy of a glyph file**
This loosely follows the robofab object model

```javascript
// glyph: A

contours[0] = {
  nodes: {
    0: {
      x: 100,
      y: 50,
      Class: 'bottom left',
      oType: 'line'
    },
    1: {
      x: width + nodes[0].x,
      y: height,
      type: 'smooth'
    }
  },
  transform: [
    {rotate: 15, u: deg}
  ]
}

components[0] = 'another-glyph';

anchors[0] = {
  x: 100,
  y: 50
}
```
