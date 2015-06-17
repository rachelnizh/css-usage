
/*! Copyright (c) Microsoft Corporation.  All Rights Reserved. Licensed under the MIT License. See License.txt in the project root for license information. */
(function () {

    var globalObject = 
        typeof window !== 'undefined' ? window :
        typeof self !== 'undefined' ? self :
        typeof global !== 'undefined' ? global :
        {};
    (function (factory) {
        if (typeof define === 'function' && define.amd) {
            // amd
            define([], factory);
        } else {
            globalObject.msWriteProfilerMark && msWriteProfilerMark('WinJS.4.0 4.0.1.winjs.2015.6.16 base.js,StartTM');
            if (typeof module !== 'undefined') {
                // CommonJS
                factory();
            } else {
                // No module system
                factory(globalObject.WinJS);
            }
            globalObject.msWriteProfilerMark && msWriteProfilerMark('WinJS.4.0 4.0.1.winjs.2015.6.16 base.js,StopTM');
        }
    }(function (WinJS) {

// Copyright (c) Microsoft Corporation.  All Rights Reserved. Licensed under the MIT License. See License.txt in the project root for license information.
/*jshint ignore:start */
var require;
var define;
/*jshint ignore:end */

(function () {
    "use strict";

    var defined = {};
    define = function (id, dependencies, factory) {
        if (!Array.isArray(dependencies)) {
            factory = dependencies;
            dependencies = [];
        }

        var mod = {
            dependencies: normalize(id, dependencies),
            factory: factory
        };

        if (dependencies.indexOf('exports') !== -1) {
            mod.exports = {};
        }

        defined[id] = mod;
    };

    // WinJS/Core depends on ./Core/_Base
    // should return WinJS/Core/_Base
    function normalize(id, dependencies) {
        id = id || "";
        var parent = id.split('/');
        parent.pop();
        return dependencies.map(function (dep) {
            if (dep[0] === '.') {
                var parts = dep.split('/');
                var current = parent.slice(0);
                parts.forEach(function (part) {
                    if (part === '..') {
                        current.pop();
                    } else if (part !== '.') {
                        current.push(part);
                    }
                });
                return current.join('/');
            } else {
                return dep;
            }
        });
    }

    function resolve(dependencies, parent, exports) {
        return dependencies.map(function (depName) {
            if (depName === 'exports') {
                return exports;
            }

            if (depName === 'require') {
                return function (dependencies, factory) {
                    require(normalize(parent, dependencies), factory);
                };
            }

            var dep = defined[depName];
            if (!dep) {
                throw new Error("Undefined dependency: " + depName);
            }

            if (!dep.resolved) {
                dep.resolved = load(dep.dependencies, dep.factory, depName, dep.exports);
                if (typeof dep.resolved === "undefined") {
                    dep.resolved = dep.exports;
                }
            }

            return dep.resolved;
        });
    }

    function load(dependencies, factory, parent, exports) {
        var deps = resolve(dependencies, parent, exports);
        if (factory && factory.apply) {
            return factory.apply(null, deps);
        } else {
            return factory;
        }
    }
    require = function (dependencies, factory) { //jshint ignore:line
        if (!Array.isArray(dependencies)) {
            dependencies = [dependencies];
        }
        load(dependencies, factory);
    };


})();
define("amd", function(){});

// Copyright (c) Microsoft Corporation.  All Rights Reserved. Licensed under the MIT License. See License.txt in the project root for license information.
define('WinJS/Core/_WinJS',{});

// Copyright (c) Microsoft Corporation.  All Rights Reserved. Licensed under the MIT License. See License.txt in the project root for license information.
define('base',[
    'WinJS/Core/_WinJS',
    // 'WinJS/Core',
    // 'WinJS/Promise',
    // 'WinJS/_Signal',
    // 'WinJS/Scheduler',
    // 'WinJS/Utilities',
    // 'WinJS/XYFocus',
    // 'WinJS/Fragments',
    // 'WinJS/Application',
    // 'WinJS/Navigation',
    // 'WinJS/Animations',
    // 'WinJS/Binding',
    // 'WinJS/BindingTemplate',
    // 'WinJS/BindingList',
    // 'WinJS/Res',
    // 'WinJS/Pages',
    // 'WinJS/ControlProcessor',
    // 'WinJS/Controls/HtmlControl',
    ], function (_WinJS) {
    "use strict";

    _WinJS.Namespace.define("WinJS.Utilities", {
        _require: require,
        _define: define
    });

    return _WinJS;
});

        require(['WinJS/Core/_WinJS', 'base'], function (_WinJS) {
            // WinJS always publishes itself to global
            globalObject.WinJS = _WinJS;
            if (typeof module !== 'undefined') {
                // This is a CommonJS context so publish to exports
                module.exports = _WinJS;
            }
        });
        return globalObject.WinJS;
    }));
}());

