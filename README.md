generator-ptf
==============

Yeoman generator that creates a *Parametric Typeface Folder* and the gulpfile to convert it to a *Javascript Uniform Font Object Notation* (jsufon) file.

Install
-------

npm install -g generator-ptf

Use
---

yo ptf


What is a ptf?
---------------

A ptf is the folder and file structure we use to easily "hand-write" parametric typefaces for Prototypo. Ultimately we want to make it possible to design such a typeface directly inside Prototypo.

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
This loosely follows the [Robofab object model](http://robofab.org/objects/model.html).

```javascript
// glyph: A

contours[0] = {
  classes: 'skeleton',
  nodes: {
    0: {
      x: 100,
      y: 50,
      classes: 'bottom left',
      oType: 'line'
    },
    1: {
      x: width + nodes[0].x,
      y: height,
      type: 'smooth'
    }
  },
  transform: [
    {rotate: 15, u: 'deg'}
  ]
};

components[0] = 'another-glyph';

anchors[0] = {
  x: 100,
  y: 50
};
```

What is a jsufon?
-----------------

`jsufon` should be *ufo3 in a single json file*. See [ufo3](http://unifiedfontobject.org/versions/ufo3/) spec for reference.
