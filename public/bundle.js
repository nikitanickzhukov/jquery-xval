(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/* global jQuery */

(function ($) {
    var defaults = {
        trigger: true,
        data: {}
    };

    $.fn.extend({
        xval: function xval(value, options) {
            if (arguments.length && (value === undefined || value === null)) {
                throw new TypeError('Unsupportable value: ' + value);
            }

            options = $.extend({}, defaults, options);

            if (this.is('select')) {
                // Select mode

                var select = this.get(0);

                if (this.prop('multiple')) {
                    // Multiple mode

                    if (arguments.length) {
                        // Setting mode

                        console.log('select multiple setting', value);

                        if (!(value instanceof Array)) {
                            value = [value];
                        }

                        var values = {},
                            isChanged = false;

                        for (var i = 0; i < value.length; i++) {
                            if (typeof value[i] !== 'string') {
                                value[i] = value[i].toString();
                            }
                            values[value[i]] = true;
                        }

                        for (var _i = 0; _i < select.options.length; _i++) {
                            var option = select.options[_i],
                                val = option.value,
                                isEqual = !!values[val];

                            if (option.selected !== isEqual) {
                                option.selected = isEqual;
                                isChanged = true;
                            }
                        }

                        if (isChanged && options.trigger) {
                            this.trigger('change', options.data);
                        }

                        return this;
                    } else {
                        // Getting mode

                        console.log('select multiple getting');

                        var _value = [];

                        for (var _i2 = 0; _i2 < select.options.length; _i2++) {
                            var _option = select.options[_i2];

                            if (_option.selected) {
                                _value.push(_option.value);
                            }
                        }

                        return _value;
                    }
                } else {
                    // Single mode

                    if (arguments.length) {
                        // Setting mode

                        console.log('select single setting', value);

                        if (typeof value !== 'string') {
                            value = value.toString();
                        }

                        var idx = -1;

                        for (var _i3 = 0; _i3 < select.options.length; _i3++) {
                            var _option2 = select.options[_i3],
                                _val = _option2.value,
                                _isEqual = _val === value;

                            if (_isEqual) {
                                idx = _i3;
                                break;
                            }
                        }

                        if (idx !== select.selectedIndex) {
                            select.selectedIndex = idx;

                            if (options.trigger) {
                                this.trigger('change', options.data);
                            }
                        }

                        return this;
                    } else {
                        // Getting mode

                        console.log('select single getting');

                        if (select.selectedIndex !== -1) {
                            return select.options[select.selectedIndex].value;
                        } else {
                            return undefined;
                        }
                    }
                }
            } else if (this.is('input:radio')) {
                // Radio mode

                if (arguments.length) {
                    // Setting mode

                    console.log('radio setting', value);

                    if (typeof value !== 'string') {
                        value = value.toString();
                    }

                    for (var _i4 = 0; _i4 < this.length; _i4++) {
                        var input = this.get(_i4),
                            _val2 = input.value,
                            _isEqual2 = _val2 === value;

                        if (input.checked !== _isEqual2) {
                            input.checked = _isEqual2;

                            if (_isEqual2 && options.trigger) {
                                this.eq(_i4).trigger('change', options.data);
                            }
                        }
                    }

                    return this;
                } else {
                    // Getting mode

                    console.log('radio getting');

                    for (var _i5 = 0; _i5 < this.length; _i5++) {
                        var _input = this.get(_i5);

                        if (_input.checked) {
                            return _input.value;
                        }
                    }

                    return undefined;
                }
            } else if (this.is('input:checkbox')) {
                // Checkbox mode

                if (arguments.length) {
                    // Setting mode

                    console.log('checkbox setting', value);

                    if (!(value instanceof Array)) {
                        value = [value];
                    }

                    var _values = {};

                    for (var _i6 = 0; _i6 < value.length; _i6++) {
                        if (typeof value[_i6] !== 'string') {
                            value[_i6] = value[_i6].toString();
                        }
                        _values[value[_i6]] = true;
                    }

                    for (var _i7 = 0; _i7 < this.length; _i7++) {
                        var _input2 = this.get(_i7),
                            _val3 = _input2.value,
                            _isEqual3 = !!_values[_val3];

                        if (_input2.checked !== _isEqual3) {
                            _input2.checked = _isEqual3;

                            if (_isEqual3 && options.trigger) {
                                this.eq(_i7).trigger('change', options.data);
                            }
                        }
                    }

                    return this;
                } else {
                    // Getting mode

                    console.log('checkbox getting');

                    var _value2 = [];

                    for (var _i8 = 0; _i8 < this.length; _i8++) {
                        var _input3 = this.get(_i8);

                        if (_input3.checked) {
                            _value2.push(_input3.value);
                        }
                    }

                    return _value2;
                }
            } else {
                // Input mode

                var _input4 = this.get(0);

                if (arguments.length) {
                    // Setting mode

                    console.log('input setting', value);

                    if (typeof value !== 'string') {
                        value = value.toString();
                    }

                    if (_input4.value !== value) {
                        _input4.value = value;

                        if (options.trigger) {
                            this.trigger('change', options.data);
                        }
                    }

                    return this;
                } else {
                    // Getting mode

                    console.log('input getting');

                    return _input4.value;
                }
            }
        }
    });
})(jQuery);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBOztBQUVBLENBQUMsVUFBUyxDQUFULEVBQVk7QUFDVCxRQUFJLFdBQVc7QUFDWCxpQkFBUyxJQURFO0FBRVgsY0FBTTtBQUZLLEtBQWY7O0FBS0EsTUFBRSxFQUFGLENBQUssTUFBTCxDQUFZO0FBQ1IsY0FBTSxjQUFTLEtBQVQsRUFBZ0IsT0FBaEIsRUFBeUI7QUFDM0IsZ0JBQUksVUFBVSxNQUFWLEtBQXFCLFVBQVUsU0FBVixJQUF1QixVQUFVLElBQXRELENBQUosRUFBaUU7QUFDN0Qsc0JBQU0sSUFBSSxTQUFKLDJCQUFzQyxLQUF0QyxDQUFOO0FBQ0g7O0FBRUQsc0JBQVUsRUFBRSxNQUFGLENBQVMsRUFBVCxFQUFhLFFBQWIsRUFBdUIsT0FBdkIsQ0FBVjs7QUFFQSxnQkFBSSxLQUFLLEVBQUwsQ0FBUSxRQUFSLENBQUosRUFBdUI7QUFDbkI7O0FBRUEsb0JBQUksU0FBUyxLQUFLLEdBQUwsQ0FBUyxDQUFULENBQWI7O0FBRUEsb0JBQUksS0FBSyxJQUFMLENBQVUsVUFBVixDQUFKLEVBQTJCO0FBQ3ZCOztBQUVBLHdCQUFJLFVBQVUsTUFBZCxFQUFzQjtBQUNsQjs7QUFFQSxnQ0FBUSxHQUFSLENBQVkseUJBQVosRUFBdUMsS0FBdkM7O0FBRUEsNEJBQUksRUFBRSxpQkFBaUIsS0FBbkIsQ0FBSixFQUErQjtBQUMzQixvQ0FBUSxDQUFDLEtBQUQsQ0FBUjtBQUNIOztBQUVELDRCQUFJLFNBQVMsRUFBYjtBQUFBLDRCQUNJLFlBQVksS0FEaEI7O0FBR0EsNkJBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxNQUFNLE1BQTFCLEVBQWtDLEdBQWxDLEVBQXdDO0FBQ3BDLGdDQUFJLE9BQU8sTUFBTSxDQUFOLENBQVAsS0FBb0IsUUFBeEIsRUFBa0M7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LEtBQWlCLFFBQXJCLEVBQStCO0FBQzNCLGdDQUFRLE1BQU0sUUFBTixFQUFSO0FBQ0g7O0FBRUQsd0JBQUksUUFBTSxLQUFOLEtBQWdCLEtBQXBCLEVBQTJCO0FBQ3ZCLGdDQUFNLEtBQU4sR0FBYyxLQUFkOztBQUVBLDRCQUFJLFFBQVEsT0FBWixFQUFxQjtBQUNqQixpQ0FBSyxPQUFMLENBQWEsUUFBYixFQUF1QixRQUFRLElBQS9CO0FBQ0g7QUFDSjs7QUFFRCwyQkFBTyxJQUFQO0FBQ0gsaUJBbEJELE1Ba0JPO0FBQ0g7O0FBRUEsNEJBQVEsR0FBUixDQUFZLGVBQVo7O0FBRUEsMkJBQU8sUUFBTSxLQUFiO0FBQ0g7QUFDSjtBQUNKO0FBaFBPLEtBQVo7QUFrUEgsQ0F4UEQsRUF3UEcsTUF4UEgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWwgalF1ZXJ5ICovXG5cbihmdW5jdGlvbigkKSB7XG4gICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgICB0cmlnZ2VyOiB0cnVlLFxuICAgICAgICBkYXRhOiB7fVxuICAgIH07XG5cbiAgICAkLmZuLmV4dGVuZCh7XG4gICAgICAgIHh2YWw6IGZ1bmN0aW9uKHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAmJiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBVbnN1cHBvcnRhYmxlIHZhbHVlOiAke3ZhbHVlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXMoJ3NlbGVjdCcpKSB7XG4gICAgICAgICAgICAgICAgLy8gU2VsZWN0IG1vZGVcblxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3QgPSB0aGlzLmdldCgwKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3AoJ211bHRpcGxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTXVsdGlwbGUgbW9kZVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTZXR0aW5nIG1vZGVcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlbGVjdCBtdWx0aXBsZSBzZXR0aW5nJywgdmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gW3ZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlcyA9IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWVbaV0gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW2ldID0gdmFsdWVbaV0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzW3ZhbHVlW2ldXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0Lm9wdGlvbnMubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBvcHRpb24udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRXF1YWwgPSAhIXZhbHVlc1t2YWxdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCAhPT0gaXNFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBpc0VxdWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ2hhbmdlZCAmJiBvcHRpb25zLnRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2NoYW5nZScsIG9wdGlvbnMuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0dGluZyBtb2RlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZWxlY3QgbXVsdGlwbGUgZ2V0dGluZycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gc2VsZWN0Lm9wdGlvbnNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnB1c2gob3B0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmdsZSBtb2RlXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNldHRpbmcgbW9kZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2VsZWN0IHNpbmdsZSBzZXR0aW5nJywgdmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlkeCA9IC0xO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSBzZWxlY3Qub3B0aW9uc1tpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gb3B0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VxdWFsID0gKHZhbCA9PT0gdmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWR4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWR4ICE9PSBzZWxlY3Quc2VsZWN0ZWRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdC5zZWxlY3RlZEluZGV4ID0gaWR4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudHJpZ2dlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2NoYW5nZScsIG9wdGlvbnMuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldHRpbmcgbW9kZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2VsZWN0IHNpbmdsZSBnZXR0aW5nJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Quc2VsZWN0ZWRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzKCdpbnB1dDpyYWRpbycpKSB7XG4gICAgICAgICAgICAgICAgLy8gUmFkaW8gbW9kZVxuXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0dGluZyBtb2RlXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JhZGlvIHNldHRpbmcnLCB2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9IHRoaXMuZ2V0KGkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IGlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRXF1YWwgPSAodmFsID09PSB2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC5jaGVja2VkICE9PSBpc0VxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IGlzRXF1YWw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNFcXVhbCAmJiBvcHRpb25zLnRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcShpKS50cmlnZ2VyKCdjaGFuZ2UnLCBvcHRpb25zLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdldHRpbmcgbW9kZVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyYWRpbyBnZXR0aW5nJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlucHV0ID0gdGhpcy5nZXQoaSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXMoJ2lucHV0OmNoZWNrYm94JykpIHtcbiAgICAgICAgICAgICAgICAvLyBDaGVja2JveCBtb2RlXG5cbiAgICAgICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTZXR0aW5nIG1vZGVcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2hlY2tib3ggc2V0dGluZycsIHZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBbdmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlcyA9IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlW2ldICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW2ldID0gdmFsdWVbaV0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1t2YWx1ZVtpXV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlucHV0ID0gdGhpcy5nZXQoaSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gaW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFcXVhbCA9ICEhdmFsdWVzW3ZhbF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC5jaGVja2VkICE9PSBpc0VxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IGlzRXF1YWw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNFcXVhbCAmJiBvcHRpb25zLnRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcShpKS50cmlnZ2VyKCdjaGFuZ2UnLCBvcHRpb25zLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdldHRpbmcgbW9kZVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGVja2JveCBnZXR0aW5nJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlucHV0ID0gdGhpcy5nZXQoaSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUucHVzaChpbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBJbnB1dCBtb2RlXG5cbiAgICAgICAgICAgICAgICBsZXQgaW5wdXQgPSB0aGlzLmdldCgwKTtcblxuICAgICAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNldHRpbmcgbW9kZVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnB1dCBzZXR0aW5nJywgdmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy50cmlnZ2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdjaGFuZ2UnLCBvcHRpb25zLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0dGluZyBtb2RlXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2lucHV0IGdldHRpbmcnKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59KShqUXVlcnkpO1xuIl19
