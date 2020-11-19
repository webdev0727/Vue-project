# Module

## Getting Started

```js
// install node modules
npm install

// run storybook
npm storybook

// run app prototype
npm run dev
```

## Code Documentation

### Methods

```js
methods: {
    /** Method used to update local phone number from phone number control
     */
    phoneNumberInput(val) {
    },
}
```

### Events

```js
/** Triggered when phone is updated.
* @event update:phone
* @type {string}
*/
this.$emit('update:phone', number);
```

### Props

```js
/**
* Set the text box label. Default: 'Phone Number',
*/
label: {
  type: String,
  default: 'Phone Number',
},
```

### Examples

All components and views require the following <docs> tag examples to show how the it is used.

```html
<docs>
# PhoneField example

'''js
<AuroraPhoneField :phone.sync="phone" />
'''
</docs>
```

## Storybook

Stories are stored in ./stories/components and ./stories/views.

Storybook configuration files are stored in ./storybook.

## Git

### Branches

All commits are done to the develop branch and frequent commits are encouraged.  Once the work is ready, a Pull Request must be made against the main branch.

## Styling

### Colour Palette

```js
[ 
   { 
      "@name": "primaryColor",
      "#text": "#1e88e5"
   },
   { 
      "@name": "primaryLightColor",
      "#text": "#6ab7ff"
   },
   { 
      "@name": "primaryDarkColor",
      "#text": "#005cb2"
   },
   { 
      "@name": "secondaryColor",
      "#text": "#ab47bc"
   },
   { 
      "@name": "secondaryLightColor",
      "#text": "#df78ef"
   },
   { 
      "@name": "secondaryDarkColor",
      "#text": "#790e8b"
   },
   { 
      "@name": "primaryTextColor",
      "#text": "#000000"
   },
   { 
      "@name": "secondaryTextColor",
      "#text": "#ffffff"
   }
]
```

### SCSS/CSS naming conventions

Only use the existing colour palette with clear styling markers of -primary, -secondary, -danger, etc. when defining CSS styles.
