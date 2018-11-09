"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Core = /** @class */ (function () {
    /**
     *
     */
    function Core(options) {
        this._defaults = {
            initClass: "api",
            initContainerId: "api"
        };
        debugger;
        this._settings = __assign({}, this._defaults, options);
        var container = document.getElementById(this._settings.initContainerId);
        if (container != undefined && container != null)
            container.classList.add(this._settings.initClass);
        else
            throw ('Element with selector ' + this._settings.initContainerId + ' not found! Plugin cannot initialize!');
    }
    return Core;
}());
exports.Core = Core;
//# sourceMappingURL=api-plugin.core.js.map