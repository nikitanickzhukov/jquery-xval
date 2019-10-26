'use strict';

/* global jQuery */

(function($) {
    let defaults = {
        event: 'change',
        args: []
    };

    $.fn.extend({
        xval: function(value, options) {
            if (arguments.length && (value === undefined || value === null)) {
                throw new TypeError(`Unsupportable value: ${value}`);
            }

            options = $.extend({}, defaults, options);

            if (this.is('select')) {
                // Select mode

                let select = this.get(0);

                if (this.prop('multiple')) {
                    // Multiple mode

                    if (arguments.length) {
                        // Setting mode

                        if (!(value instanceof Array)) {
                            value = [value];
                        }

                        let values = {},
                            isChanged = false;

                        for (let i = 0; i < value.length; i ++) {
                            if (typeof value[i] !== 'string') {
                                value[i] = value[i].toString();
                            }
                            values[value[i]] = true;
                        }

                        for (let i = 0; i < select.options.length; i ++) {
                            let option = select.options[i],
                                val = option.value,
                                isEqual = !!values[val];

                            if (option.selected !== isEqual) {
                                option.selected = isEqual;
                                isChanged = true;
                            }
                        }

                        if (isChanged && options.event) {
                            this.trigger(options.event, ...options.args);
                        }

                        return this;
                    } else {
                        // Getting mode

                        let value = [];

                        for (let i = 0; i < select.options.length; i ++) {
                            let option = select.options[i];

                            if (option.selected) {
                                value.push(option.value);
                            }
                        }

                        return value;
                    }
                } else {
                    // Single mode

                    if (arguments.length) {
                        // Setting mode

                        if (typeof value !== 'string') {
                            value = value.toString();
                        }

                        let idx = -1;

                        for (let i = 0; i < select.options.length; i ++) {
                            let option = select.options[i],
                                val = option.value,
                                isEqual = (val === value);

                            if (isEqual) {
                                idx = i;
                                break;
                            }
                        }

                        if (idx !== select.selectedIndex) {
                            select.selectedIndex = idx;

                            if (options.event) {
                                this.trigger(options.event, ...options.args);
                            }
                        }

                        return this;
                    } else {
                        // Getting mode

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

                    if (typeof value !== 'string') {
                        value = value.toString();
                    }

                    for (let i = 0; i < this.length; i ++) {
                        let input = this.get(i),
                            val = input.value,
                            isEqual = (val === value);

                        if (input.checked !== isEqual) {
                            input.checked = isEqual;

                            if (isEqual && options.event) {
                                this.eq(i).trigger(options.event, ...options.args);
                            }
                        }
                    }

                    return this;
                } else {
                    // Getting mode

                    for (let i = 0; i < this.length; i ++) {
                        let input = this.get(i);

                        if (input.checked) {
                            return input.value;
                        }
                    }

                    return undefined;
                }
            } else if (this.is('input:checkbox')) {
                // Checkbox mode

                if (arguments.length) {
                    // Setting mode

                    if (!(value instanceof Array)) {
                        value = [value];
                    }

                    let values = {};

                    for (let i = 0; i < value.length; i ++) {
                        if (typeof value[i] !== 'string') {
                            value[i] = value[i].toString();
                        }
                        values[value[i]] = true;
                    }

                    for (let i = 0; i < this.length; i ++) {
                        let input = this.get(i),
                            val = input.value,
                            isEqual = !!values[val];

                        if (input.checked !== isEqual) {
                            input.checked = isEqual;

                            if (isEqual && options.event) {
                                this.eq(i).trigger(options.event, ...options.args);
                            }
                        }
                    }

                    return this;
                } else {
                    // Getting mode

                    let value = [];

                    for (let i = 0; i < this.length; i ++) {
                        let input = this.get(i);

                        if (input.checked) {
                            value.push(input.value);
                        }
                    }

                    return value;
                }
            } else {
                // Input mode

                let input = this.get(0);

                if (arguments.length) {
                    // Setting mode

                    if (typeof value !== 'string') {
                        value = value.toString();
                    }

                    if (input.value !== value) {
                        input.value = value;

                        if (options.event) {
                            this.trigger(options.event, ...options.args);
                        }
                    }

                    return this;
                } else {
                    // Getting mode

                    return input.value;
                }
            }
        }
    });
})(jQuery);
