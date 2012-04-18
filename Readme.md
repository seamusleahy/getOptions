# jQuery.getOptions() #

Nothing fancy, just helpful. A jQuery plugin to get back a Javascript data structure of the options for use within advance widgets.

## Example ##

```html
<select id="s">
  <option value="a" data-custom="food">A option</option>
  <option value="b">B option</option>
</select>
```

```javascript
$('#s').getOptions()
=> {
  'a': {
    label: 'A option', 
    value: 'a', 
    checked: false, 
    disabled: false, 
    data: {
      custom: 'food'
    }, 
    toString: function(){...}
  },
    
  'b': {
    label: 'B option', 
    value: 'a', 
    checked: false, 
    disabled: false, 
    data: {}, 
    toString: function(){}
  }
}`

## Options ##

*flip boolean (false):* flip the key from value to label and toString from label to value
*html boolean (false):* the label will have the full HTML instead of just the text
