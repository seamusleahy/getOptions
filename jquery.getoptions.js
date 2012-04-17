/**
 * A helper plugin for jQuery to get an object of value/label for 
 * options in a select.
 * 
 * `$('select#foo').getOptions()
 * => {'a': 'A option', 'b': 'B option'}`
 *
 * Options:
 *  - flip boolean (false): flip the value and label
 *  - html boolean (false): the label will have the full HTML instead of just the text
 *
 */
if(!jQuery.fn.getOptions) {
  jQuery.fn.getOptions = function(settings) {
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
          val = op.attr('value') || label;
      
      if (!options.flip) {
        optionVals[val] = label;
      } else {
        optionVals[label] = val;
      }
    });
    
    return optionVals;
  };
}