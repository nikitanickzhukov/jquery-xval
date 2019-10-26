(function() {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND", a;
                }
                var p = n[i] = {
                    exports: {}
                };
                e[i][0].call(p.exports, function(r) {
                    var n = e[i][1][r];
                    return o(n || r);
                }, p, p.exports, r, e, n, t);
            }
            return n[i].exports;
        }
        for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
        return o;
    }
    return r;
})()({
    1: [ function(require, module, exports) {
        "use strict";
        function _toConsumableArray(arr) {
            if (Array.isArray(arr)) {
                for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                    arr2[i] = arr[i];
                }
                return arr2;
            } else {
                return Array.from(arr);
            }
        }
        (function($) {
            var defaults = {
                event: "change",
                args: []
            };
            $.fn.extend({
                xval: function xval(value, options) {
                    if (arguments.length && (value === undefined || value === null)) {
                        throw new TypeError("Unsupportable value: " + value);
                    }
                    options = $.extend({}, defaults, options);
                    if (this.is("select")) {
                        var select = this.get(0);
                        if (this.prop("multiple")) {
                            if (arguments.length) {
                                if (!(value instanceof Array)) {
                                    value = [ value ];
                                }
                                var values = {}, isChanged = false;
                                for (var i = 0; i < value.length; i++) {
                                    if (typeof value[i] !== "string") {
                                        value[i] = value[i].toString();
                                    }
                                    values[value[i]] = true;
                                }
                                for (var _i = 0; _i < select.options.length; _i++) {
                                    var option = select.options[_i], val = option.value, isEqual = !!values[val];
                                    if (option.selected !== isEqual) {
                                        option.selected = isEqual;
                                        isChanged = true;
                                    }
                                }
                                if (isChanged && options.event) {
                                    this.trigger.apply(this, [ options.event ].concat(_toConsumableArray(options.args)));
                                }
                                return this;
                            } else {
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
                            if (arguments.length) {
                                if (typeof value !== "string") {
                                    value = value.toString();
                                }
                                var idx = -1;
                                for (var _i3 = 0; _i3 < select.options.length; _i3++) {
                                    var _option2 = select.options[_i3], _val = _option2.value, _isEqual = _val === value;
                                    if (_isEqual) {
                                        idx = _i3;
                                        break;
                                    }
                                }
                                if (idx !== select.selectedIndex) {
                                    select.selectedIndex = idx;
                                    if (options.event) {
                                        this.trigger.apply(this, [ options.event ].concat(_toConsumableArray(options.args)));
                                    }
                                }
                                return this;
                            } else {
                                if (select.selectedIndex !== -1) {
                                    return select.options[select.selectedIndex].value;
                                } else {
                                    return undefined;
                                }
                            }
                        }
                    } else if (this.is("input:radio")) {
                        if (arguments.length) {
                            if (typeof value !== "string") {
                                value = value.toString();
                            }
                            for (var _i4 = 0; _i4 < this.length; _i4++) {
                                var input = this.get(_i4), _val2 = input.value, _isEqual2 = _val2 === value;
                                if (input.checked !== _isEqual2) {
                                    input.checked = _isEqual2;
                                    if (_isEqual2 && options.event) {
                                        var _eq;
                                        (_eq = this.eq(_i4)).trigger.apply(_eq, [ options.event ].concat(_toConsumableArray(options.args)));
                                    }
                                }
                            }
                            return this;
                        } else {
                            for (var _i5 = 0; _i5 < this.length; _i5++) {
                                var _input = this.get(_i5);
                                if (_input.checked) {
                                    return _input.value;
                                }
                            }
                            return undefined;
                        }
                    } else if (this.is("input:checkbox")) {
                        if (arguments.length) {
                            if (!(value instanceof Array)) {
                                value = [ value ];
                            }
                            var _values = {};
                            for (var _i6 = 0; _i6 < value.length; _i6++) {
                                if (typeof value[_i6] !== "string") {
                                    value[_i6] = value[_i6].toString();
                                }
                                _values[value[_i6]] = true;
                            }
                            for (var _i7 = 0; _i7 < this.length; _i7++) {
                                var _input2 = this.get(_i7), _val3 = _input2.value, _isEqual3 = !!_values[_val3];
                                if (_input2.checked !== _isEqual3) {
                                    _input2.checked = _isEqual3;
                                    if (_isEqual3 && options.event) {
                                        var _eq2;
                                        (_eq2 = this.eq(_i7)).trigger.apply(_eq2, [ options.event ].concat(_toConsumableArray(options.args)));
                                    }
                                }
                            }
                            return this;
                        } else {
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
                        var _input4 = this.get(0);
                        if (arguments.length) {
                            if (typeof value !== "string") {
                                value = value.toString();
                            }
                            if (_input4.value !== value) {
                                _input4.value = value;
                                if (options.event) {
                                    this.trigger.apply(this, [ options.event ].concat(_toConsumableArray(options.args)));
                                }
                            }
                            return this;
                        } else {
                            return _input4.value;
                        }
                    }
                }
            });
        })(jQuery);
    }, {} ]
}, {}, [ 1 ]);
//# sourceMappingURL=maps/jquery.xval.js.map
