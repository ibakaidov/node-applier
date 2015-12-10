# Applier

Module for create applier functions

## Installation

```
npm install --save applier
```

## Usage

```js
var applier = require('applier');
var hi = applier(console.log, "Hello,", new applier.Argument(0));

hi("World"); // Hello, world!

var nextSecond = applier(console.log, 'It is next second');

setInterval(nextSecond, 1000);

```

## API
### applier(fn, [...args])

#### Params:

* *fn* function, whoose will call in applier with saves args
* *[...args]* args for call function, if among arguments will be Argument (Abstruction argument), then applier will change it to argument whoose get applier..

#### Return:

* **Applier** 
 
### applier.Argument(id)

#### Params:

* *id* - index of need param in call Applier


## License

ISC
