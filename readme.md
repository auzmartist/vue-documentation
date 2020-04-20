# vue-documentation
> Vue component documentation made simple.

![](https://i.imgur.com/8usztn7.png)

## Usage

```js
import Vue from 'vue'
import VueDocs from 'vue-documentation'
Vue.use(VueDocs)
```

```html
<vue-doc :component="myComponent"/>
```

```html
<vue-doc-library :components="myComponentsObject" />
```

## Writing Documentation

Similar to the (now archived) `propdoc` package, `vue-doc` parses a number of new properties (all optional) from the Vue component definition. Here's a complete example of the new properties:

```js
export default {
  name: 'component-name',
  introduction: 'A short blurb about the component',
  description: 'A more thorough description of the component and what it does.',
  sample: '<component-name :foo="bar" />', // renders within a <code></code> block
  props: {
    foo: {
      type: String,
      required: true,
      note: 'Please always pass either "bar" or "baz" here.', // Renders as HTML
    }
  },
  events: {
    'some-event': {
      type: Object, // the type of the event payload
      node: 'A description of the event and when it emits', // Renders as HTML
    }
  }
}
```

## Development
> Contributions welcome!
