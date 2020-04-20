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

## Dealing With Slots And Sample Values

Documentation should live within components, but to demonstrate a component in the sandbox, you may need to pass some sample values or slots which can't be distributed with your components.

With `vue-documentation`, sample prop values can be passed like so:

```html
<vue-doc :component="button-redirect" :props="{
  location: '/some/redirect/url',
  querystring: {foo: 'bar'}
}">
```

You can also pass slot content directly to a &lt;vue-doc&gt; component. The default slot should be assigned to the `default` key.

```html
<vue-doc :component="button-icon" :slots="{
  default: `Click Me`,
  icon: `<img src="/path/to/some/icon.png"/>`,
}" />
```

If using the `vue-doc-library` component, these supplementary values can be passed in via the `:docs` prop which accepts an object with the following shape:

```js
const docs = {
  'button-redirect': {
    props: {
      location: '/some/redirect/url',
      querystring: {foo: 'bar'},
    }
  },
  'button-icon': {
    slots: {
      default: 'Click Me',
      icon: `<img src="/path/to/some/icon.png"/>`,
    },
  },
}
```

## Development
> Contributions welcome!
