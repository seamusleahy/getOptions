/**
 * A helper plugin for jQuery to get an object of value/label along with other info for 
 * options in a select.
 * 
 * The value part is an object with the information about the option. 
 * The toString method is set so you can print it out without issue.
 * The toString will be the label, unless the flip flag is set, then
 * it is the value. The other parts of the object are:
 *  - 
 *
 * `$('select#foo').getOptions()
 * => {'a': {label: 'A option', value: 'a', checked: false, disabled: false, data: {}, toString: function(){}},
*      'b': {label: 'B option', value: 'a', checked: false, disabled: false, data: {}, toString: function(){}}}`
 *
 * Options:
 *  - flip boolean (false): flip the value and label
 *  - html boolean (false): the label will have the full HTML instead of just the text
 *
 */
(function($) {
  if(!$.fn.getOptions) {
    $.fn.getOptions = function(settings) {
      var select = this.filter('select').eq(0),
          options = {
            flip: false,
            html: false
          };
      $.extend(options, settings);
      
      // Nothing here
      if(select.length == 0) {
        return {};
      }
      
      var optionVals = {};
      
      select.find('option').each(function() {
        var op = $(this),
            label = options.html? op.html() : op.text(),
            val = op.attr('value') || label,
            inst = {
              value: val, 
              label: label,
              checked: !!op.attr('checked'),
              disabled: !!op.attr('disabled'),
              data: op.data(), // all the data attributes
              
              s: options.flip? val : label,
              toString: function() {
                return this.s;
              }
            };
        
        optionVals[(!options.flip ? val : label)] = inst;
      });
      
      return optionVals;
    };
  }
})();