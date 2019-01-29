(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-project-module"],{

/***/ "./node_modules/@angular/http/fesm5/http.js":
/*!**************************************************!*\
  !*** ./node_modules/@angular/http/fesm5/http.js ***!
  \**************************************************/
/*! exports provided: ɵangular_packages_http_http_e, ɵangular_packages_http_http_f, ɵangular_packages_http_http_a, ɵangular_packages_http_http_b, ɵangular_packages_http_http_c, BrowserXhr, JSONPBackend, JSONPConnection, CookieXSRFStrategy, XHRBackend, XHRConnection, BaseRequestOptions, RequestOptions, BaseResponseOptions, ResponseOptions, ReadyState, RequestMethod, ResponseContentType, ResponseType, Headers, Http, Jsonp, HttpModule, JsonpModule, Connection, ConnectionBackend, XSRFStrategy, Request, Response, QueryEncoder, URLSearchParams, VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_e", function() { return BrowserJsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_f", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_a", function() { return _createDefaultCookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_b", function() { return httpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_c", function() { return jsonpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserXhr", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPBackend", function() { return JSONPBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPConnection", function() { return JSONPConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieXSRFStrategy", function() { return CookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRBackend", function() { return XHRBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRConnection", function() { return XHRConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRequestOptions", function() { return BaseRequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestOptions", function() { return RequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResponseOptions", function() { return BaseResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseOptions", function() { return ResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadyState", function() { return ReadyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMethod", function() { return RequestMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseContentType", function() { return ResponseContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseType", function() { return ResponseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Http", function() { return Http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jsonp", function() { return Jsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpModule", function() { return HttpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpModule", function() { return JsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return Connection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionBackend", function() { return ConnectionBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XSRFStrategy", function() { return XSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryEncoder", function() { return QueryEncoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLSearchParams", function() { return URLSearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * @license Angular v6.1.10
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */






/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A backend for http that uses the `XMLHttpRequest` browser API.
 *
 * Take care not to evaluate this in non-browser contexts.
 *
 * @deprecated see https://angular.io/guide/http
 */
var BrowserXhr = /** @class */ (function () {
    function BrowserXhr() {
    }
    BrowserXhr.prototype.build = function () { return (new XMLHttpRequest()); };
    BrowserXhr = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BrowserXhr);
    return BrowserXhr;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Supported http methods.
 * @deprecated see https://angular.io/guide/http
 */
var RequestMethod;
(function (RequestMethod) {
    RequestMethod[RequestMethod["Get"] = 0] = "Get";
    RequestMethod[RequestMethod["Post"] = 1] = "Post";
    RequestMethod[RequestMethod["Put"] = 2] = "Put";
    RequestMethod[RequestMethod["Delete"] = 3] = "Delete";
    RequestMethod[RequestMethod["Options"] = 4] = "Options";
    RequestMethod[RequestMethod["Head"] = 5] = "Head";
    RequestMethod[RequestMethod["Patch"] = 6] = "Patch";
})(RequestMethod || (RequestMethod = {}));
/**
 * All possible states in which a connection can be, based on
 * [States](http://www.w3.org/TR/XMLHttpRequest/#states) from the `XMLHttpRequest` spec, but with an
 * additional "CANCELLED" state.
 * @deprecated see https://angular.io/guide/http
 */
var ReadyState;
(function (ReadyState) {
    ReadyState[ReadyState["Unsent"] = 0] = "Unsent";
    ReadyState[ReadyState["Open"] = 1] = "Open";
    ReadyState[ReadyState["HeadersReceived"] = 2] = "HeadersReceived";
    ReadyState[ReadyState["Loading"] = 3] = "Loading";
    ReadyState[ReadyState["Done"] = 4] = "Done";
    ReadyState[ReadyState["Cancelled"] = 5] = "Cancelled";
})(ReadyState || (ReadyState = {}));
/**
 * Acceptable response types to be associated with a {@link Response}, based on
 * [ResponseType](https://fetch.spec.whatwg.org/#responsetype) from the Fetch spec.
 * @deprecated see https://angular.io/guide/http
 */
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["Basic"] = 0] = "Basic";
    ResponseType[ResponseType["Cors"] = 1] = "Cors";
    ResponseType[ResponseType["Default"] = 2] = "Default";
    ResponseType[ResponseType["Error"] = 3] = "Error";
    ResponseType[ResponseType["Opaque"] = 4] = "Opaque";
})(ResponseType || (ResponseType = {}));
/**
 * Supported content type to be automatically associated with a {@link Request}.
 * @deprecated see https://angular.io/guide/http
 */
var ContentType;
(function (ContentType) {
    ContentType[ContentType["NONE"] = 0] = "NONE";
    ContentType[ContentType["JSON"] = 1] = "JSON";
    ContentType[ContentType["FORM"] = 2] = "FORM";
    ContentType[ContentType["FORM_DATA"] = 3] = "FORM_DATA";
    ContentType[ContentType["TEXT"] = 4] = "TEXT";
    ContentType[ContentType["BLOB"] = 5] = "BLOB";
    ContentType[ContentType["ARRAY_BUFFER"] = 6] = "ARRAY_BUFFER";
})(ContentType || (ContentType = {}));
/**
 * Define which buffer to use to store the response
 * @deprecated see https://angular.io/guide/http
 */
var ResponseContentType;
(function (ResponseContentType) {
    ResponseContentType[ResponseContentType["Text"] = 0] = "Text";
    ResponseContentType[ResponseContentType["Json"] = 1] = "Json";
    ResponseContentType[ResponseContentType["ArrayBuffer"] = 2] = "ArrayBuffer";
    ResponseContentType[ResponseContentType["Blob"] = 3] = "Blob";
})(ResponseContentType || (ResponseContentType = {}));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
 * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
 *
 * The only known difference between this `Headers` implementation and the spec is the
 * lack of an `entries` method.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * import {Headers} from '@angular/http';
 *
 * var firstHeaders = new Headers();
 * firstHeaders.append('Content-Type', 'image/jpeg');
 * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
 *
 * // Create headers from Plain Old JavaScript Object
 * var secondHeaders = new Headers({
 *   'X-My-Custom-Header': 'Angular'
 * });
 * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
 *
 * var thirdHeaders = new Headers(secondHeaders);
 * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var Headers = /** @class */ (function () {
    // TODO(vicb): any -> string|string[]
    function Headers(headers) {
        var _this = this;
        /** @internal header names are lower case */
        this._headers = new Map();
        /** @internal map lower case names to actual names */
        this._normalizedNames = new Map();
        if (!headers) {
            return;
        }
        if (headers instanceof Headers) {
            headers.forEach(function (values, name) {
                values.forEach(function (value) { return _this.append(name, value); });
            });
            return;
        }
        Object.keys(headers).forEach(function (name) {
            var values = Array.isArray(headers[name]) ? headers[name] : [headers[name]];
            _this.delete(name);
            values.forEach(function (value) { return _this.append(name, value); });
        });
    }
    /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     */
    Headers.fromResponseHeaderString = function (headersString) {
        var headers = new Headers();
        headersString.split('\n').forEach(function (line) {
            var index = line.indexOf(':');
            if (index > 0) {
                var name_1 = line.slice(0, index);
                var value = line.slice(index + 1).trim();
                headers.set(name_1, value);
            }
        });
        return headers;
    };
    /**
     * Appends a header to existing list of header values for a given header name.
     */
    Headers.prototype.append = function (name, value) {
        var values = this.getAll(name);
        if (values === null) {
            this.set(name, value);
        }
        else {
            values.push(value);
        }
    };
    /**
     * Deletes all header values for the given name.
     */
    Headers.prototype.delete = function (name) {
        var lcName = name.toLowerCase();
        this._normalizedNames.delete(lcName);
        this._headers.delete(lcName);
    };
    Headers.prototype.forEach = function (fn) {
        var _this = this;
        this._headers.forEach(function (values, lcName) { return fn(values, _this._normalizedNames.get(lcName), _this._headers); });
    };
    /**
     * Returns first header that matches given name.
     */
    Headers.prototype.get = function (name) {
        var values = this.getAll(name);
        if (values === null) {
            return null;
        }
        return values.length > 0 ? values[0] : null;
    };
    /**
     * Checks for existence of header by given name.
     */
    Headers.prototype.has = function (name) { return this._headers.has(name.toLowerCase()); };
    /**
     * Returns the names of the headers
     */
    Headers.prototype.keys = function () { return Array.from(this._normalizedNames.values()); };
    /**
     * Sets or overrides header value for given name.
     */
    Headers.prototype.set = function (name, value) {
        if (Array.isArray(value)) {
            if (value.length) {
                this._headers.set(name.toLowerCase(), [value.join(',')]);
            }
        }
        else {
            this._headers.set(name.toLowerCase(), [value]);
        }
        this.mayBeSetNormalizedName(name);
    };
    /**
     * Returns values of all headers.
     */
    Headers.prototype.values = function () { return Array.from(this._headers.values()); };
    /**
     * Returns string of all headers.
     */
    // TODO(vicb): returns {[name: string]: string[]}
    Headers.prototype.toJSON = function () {
        var _this = this;
        var serialized = {};
        this._headers.forEach(function (values, name) {
            var split = [];
            values.forEach(function (v) { return split.push.apply(split, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(v.split(','))); });
            serialized[_this._normalizedNames.get(name)] = split;
        });
        return serialized;
    };
    /**
     * Returns list of header values for a given name.
     */
    Headers.prototype.getAll = function (name) {
        return this.has(name) ? this._headers.get(name.toLowerCase()) || null : null;
    };
    /**
     * This method is not implemented.
     */
    Headers.prototype.entries = function () { throw new Error('"entries" method is not implemented on Headers class'); };
    Headers.prototype.mayBeSetNormalizedName = function (name) {
        var lcName = name.toLowerCase();
        if (!this._normalizedNames.has(lcName)) {
            this._normalizedNames.set(lcName, name);
        }
    };
    return Headers;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a response options object to be optionally provided when instantiating a
 * {@link Response}.
 *
 * This class is based on the `ResponseInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#responseinit).
 *
 * All values are null by default. Typical defaults can be found in the
 * {@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
 *
 * This class may be used in tests to build {@link Response Responses} for
 * mock responses (see {@link MockBackend}).
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import {ResponseOptions, Response} from '@angular/http';
 *
 * var options = new ResponseOptions({
 *   body: '{"name":"Jeff"}'
 * });
 * var res = new Response(options);
 *
 * console.log('res.json():', res.json()); // Object {name: "Jeff"}
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var ResponseOptions = /** @class */ (function () {
    function ResponseOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var body = opts.body, status = opts.status, headers = opts.headers, statusText = opts.statusText, type = opts.type, url = opts.url;
        this.body = body != null ? body : null;
        this.status = status != null ? status : null;
        this.headers = headers != null ? headers : null;
        this.statusText = statusText != null ? statusText : null;
        this.type = type != null ? type : null;
        this.url = url != null ? url : null;
    }
    /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * @usageNotes
     * ### Example
     *
     * ```typescript
     * import {ResponseOptions, Response} from '@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     */
    ResponseOptions.prototype.merge = function (options) {
        return new ResponseOptions({
            body: options && options.body != null ? options.body : this.body,
            status: options && options.status != null ? options.status : this.status,
            headers: options && options.headers != null ? options.headers : this.headers,
            statusText: options && options.statusText != null ? options.statusText : this.statusText,
            type: options && options.type != null ? options.type : this.type,
            url: options && options.url != null ? options.url : this.url,
        });
    };
    return ResponseOptions;
}());
/**
 * Subclass of {@link ResponseOptions}, with default values.
 *
 * Default values:
 *  * status: 200
 *  * headers: empty {@link Headers} object
 *
 * This class could be extended and bound to the {@link ResponseOptions} class
 * when configuring an {@link Injector}, in order to override the default options
 * used by {@link Http} to create {@link Response Responses}.
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import {provide} from '@angular/core';
 * import {bootstrap} from '@angular/platform-browser/browser';
 * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
 * '@angular/http';
 * import {App} from './myapp';
 *
 * class MyOptions extends BaseResponseOptions {
 *   headers:Headers = new Headers({network: 'github'});
 * }
 *
 * bootstrap(App, [HTTP_PROVIDERS, {provide: ResponseOptions, useClass: MyOptions}]);
 * ```
 *
 * The options could also be extended when manually creating a {@link Response}
 * object.
 *
 * ### Example
 *
 * ```
 * import {BaseResponseOptions, Response} from '@angular/http';
 *
 * var options = new BaseResponseOptions();
 * var res = new Response(options.merge({
 *   body: 'Angular',
 *   headers: new Headers({framework: 'angular'})
 * }));
 * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
 * console.log('res.text():', res.text()); // Angular;
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var BaseResponseOptions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseResponseOptions, _super);
    function BaseResponseOptions() {
        return _super.call(this, { status: 200, statusText: 'Ok', type: ResponseType.Default, headers: new Headers() }) || this;
    }
    BaseResponseOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BaseResponseOptions);
    return BaseResponseOptions;
}(ResponseOptions));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Abstract class from which real backends are derived.
 *
 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
 * {@link Request}.
 *
 * @deprecated see https://angular.io/guide/http
 */
var ConnectionBackend = /** @class */ (function () {
    function ConnectionBackend() {
    }
    return ConnectionBackend;
}());
/**
 * Abstract class from which real connections are derived.
 *
 * @deprecated see https://angular.io/guide/http
 */
var Connection = /** @class */ (function () {
    function Connection() {
    }
    return Connection;
}());
/**
 * An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request.
 *
 * @deprecated see https://angular.io/guide/http
 */
var XSRFStrategy = /** @class */ (function () {
    function XSRFStrategy() {
    }
    return XSRFStrategy;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function normalizeMethodName(method) {
    if (typeof method !== 'string')
        return method;
    switch (method.toUpperCase()) {
        case 'GET':
            return RequestMethod.Get;
        case 'POST':
            return RequestMethod.Post;
        case 'PUT':
            return RequestMethod.Put;
        case 'DELETE':
            return RequestMethod.Delete;
        case 'OPTIONS':
            return RequestMethod.Options;
        case 'HEAD':
            return RequestMethod.Head;
        case 'PATCH':
            return RequestMethod.Patch;
    }
    throw new Error("Invalid request method. The method \"" + method + "\" is not supported.");
}
var isSuccess = function (status) { return (status >= 200 && status < 300); };
function getResponseURL(xhr) {
    if ('responseURL' in xhr) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
function stringToArrayBuffer(input) {
    var view = new Uint16Array(input.length);
    for (var i = 0, strLen = input.length; i < strLen; i++) {
        view[i] = input.charCodeAt(i);
    }
    return view.buffer;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function paramParser(rawParams) {
    if (rawParams === void 0) { rawParams = ''; }
    var map = new Map();
    if (rawParams.length > 0) {
        var params = rawParams.split('&');
        params.forEach(function (param) {
            var eqIdx = param.indexOf('=');
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)], 2), key = _a[0], val = _a[1];
            var list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
/**
 * @deprecated see https://angular.io/guide/http
 **/
var QueryEncoder = /** @class */ (function () {
    function QueryEncoder() {
    }
    QueryEncoder.prototype.encodeKey = function (key) { return standardEncoding(key); };
    QueryEncoder.prototype.encodeValue = function (value) { return standardEncoding(value); };
    return QueryEncoder;
}());
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * Map-like representation of url search parameters, based on
 * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
 * with several extensions for merging URLSearchParams objects:
 *   - setAll()
 *   - appendAll()
 *   - replaceAll()
 *
 * This class accepts an optional second parameter of ${@link QueryEncoder},
 * which is used to serialize parameters before making a request. By default,
 * `QueryEncoder` encodes keys and values of parameters using `encodeURIComponent`,
 * and then un-encodes certain characters that are allowed to be part of the query
 * according to IETF RFC 3986: https://tools.ietf.org/html/rfc3986.
 *
 * These are the characters that are not encoded: `! $ \' ( ) * + , ; A 9 - . _ ~ ? /`
 *
 * If the set of allowed query characters is not acceptable for a particular backend,
 * `QueryEncoder` can be subclassed and provided as the 2nd argument to URLSearchParams.
 *
 * ```
 * import {URLSearchParams, QueryEncoder} from '@angular/http';
 * class MyQueryEncoder extends QueryEncoder {
 *   encodeKey(k: string): string {
 *     return myEncodingFunction(k);
 *   }
 *
 *   encodeValue(v: string): string {
 *     return myEncodingFunction(v);
 *   }
 * }
 *
 * let params = new URLSearchParams('', new MyQueryEncoder());
 * ```
 * @deprecated see https://angular.io/guide/http
 */
var URLSearchParams = /** @class */ (function () {
    function URLSearchParams(rawParams, queryEncoder) {
        if (rawParams === void 0) { rawParams = ''; }
        if (queryEncoder === void 0) { queryEncoder = new QueryEncoder(); }
        this.rawParams = rawParams;
        this.queryEncoder = queryEncoder;
        this.paramsMap = paramParser(rawParams);
    }
    URLSearchParams.prototype.clone = function () {
        var clone = new URLSearchParams('', this.queryEncoder);
        clone.appendAll(this);
        return clone;
    };
    URLSearchParams.prototype.has = function (param) { return this.paramsMap.has(param); };
    URLSearchParams.prototype.get = function (param) {
        var storedParam = this.paramsMap.get(param);
        return Array.isArray(storedParam) ? storedParam[0] : null;
    };
    URLSearchParams.prototype.getAll = function (param) { return this.paramsMap.get(param) || []; };
    URLSearchParams.prototype.set = function (param, val) {
        if (val === void 0 || val === null) {
            this.delete(param);
            return;
        }
        var list = this.paramsMap.get(param) || [];
        list.length = 0;
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `set(name, values[0])`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.setAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            list.length = 0;
            list.push(value[0]);
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.append = function (param, val) {
        if (val === void 0 || val === null)
            return;
        var list = this.paramsMap.get(param) || [];
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `append(name, value)`
    // for each value in `values`.
    //
    // E.g: "a=[1,2], c=[8]" + "a=[3,4], b=[7]" = "a=[1,2,3,4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.appendAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `delete(name)`,
    // followed by `set(name, values)`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4,5,6], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.replaceAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            list.length = 0;
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.toString = function () {
        var _this = this;
        var paramsList = [];
        this.paramsMap.forEach(function (values, k) {
            values.forEach(function (v) { return paramsList.push(_this.queryEncoder.encodeKey(k) + '=' + _this.queryEncoder.encodeValue(v)); });
        });
        return paramsList.join('&');
    };
    URLSearchParams.prototype.delete = function (param) { this.paramsMap.delete(param); };
    return URLSearchParams;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * HTTP request body used by both {@link Request} and {@link Response}
 * https://fetch.spec.whatwg.org/#body
 */
var Body = /** @class */ (function () {
    function Body() {
    }
    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     */
    Body.prototype.json = function () {
        if (typeof this._body === 'string') {
            return JSON.parse(this._body);
        }
        if (this._body instanceof ArrayBuffer) {
            return JSON.parse(this.text());
        }
        return this._body;
    };
    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     *
     * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
     * bytes in the buffer will be interpreted. Valid values are:
     *
     * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
     *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
     *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
     *   into consideration. This is the default behavior to avoid breaking apps, but should be
     *   considered deprecated.
     *
     * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
     */
    Body.prototype.text = function (encodingHint) {
        if (encodingHint === void 0) { encodingHint = 'legacy'; }
        if (this._body instanceof URLSearchParams) {
            return this._body.toString();
        }
        if (this._body instanceof ArrayBuffer) {
            switch (encodingHint) {
                case 'legacy':
                    return String.fromCharCode.apply(null, new Uint16Array(this._body));
                case 'iso-8859':
                    return String.fromCharCode.apply(null, new Uint8Array(this._body));
                default:
                    throw new Error("Invalid value for encodingHint: " + encodingHint);
            }
        }
        if (this._body == null) {
            return '';
        }
        if (typeof this._body === 'object') {
            return JSON.stringify(this._body, null, 2);
        }
        return this._body.toString();
    };
    /**
     * Return the body as an ArrayBuffer
     */
    Body.prototype.arrayBuffer = function () {
        if (this._body instanceof ArrayBuffer) {
            return this._body;
        }
        return stringToArrayBuffer(this.text());
    };
    /**
      * Returns the request's body as a Blob, assuming that body exists.
      */
    Body.prototype.blob = function () {
        if (this._body instanceof Blob) {
            return this._body;
        }
        if (this._body instanceof ArrayBuffer) {
            return new Blob([this._body]);
        }
        throw new Error('The request body isn\'t either a blob or an array buffer');
    };
    return Body;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates `Response` instances from provided values.
 *
 * Though this object isn't
 * usually instantiated by end-users, it is the primary object interacted with when it comes time to
 * add data to a view.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
 * ```
 *
 * The Response's interface is inspired by the Response constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
 * can be accessed many times. There are other differences in the implementation, but this is the
 * most significant.
 *
 * @deprecated see https://angular.io/guide/http
 */
var Response = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Response, _super);
    function Response(responseOptions) {
        var _this = _super.call(this) || this;
        _this._body = responseOptions.body;
        _this.status = responseOptions.status;
        _this.ok = (_this.status >= 200 && _this.status <= 299);
        _this.statusText = responseOptions.statusText;
        _this.headers = responseOptions.headers;
        _this.type = responseOptions.type;
        _this.url = responseOptions.url;
        return _this;
    }
    Response.prototype.toString = function () {
        return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
    };
    return Response;
}(Body));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _nextRequestId = 0;
var JSONP_HOME = '__ng_jsonp__';
var _jsonpConnections = null;
function _getJsonpConnections() {
    var w = typeof window == 'object' ? window : {};
    if (_jsonpConnections === null) {
        _jsonpConnections = w[JSONP_HOME] = {};
    }
    return _jsonpConnections;
}
// Make sure not to evaluate this in a non-browser environment!
var BrowserJsonp = /** @class */ (function () {
    function BrowserJsonp() {
    }
    // Construct a <script> element with the specified URL
    BrowserJsonp.prototype.build = function (url) {
        var node = document.createElement('script');
        node.src = url;
        return node;
    };
    BrowserJsonp.prototype.nextRequestID = function () { return "__req" + _nextRequestId++; };
    BrowserJsonp.prototype.requestCallback = function (id) { return JSONP_HOME + "." + id + ".finished"; };
    BrowserJsonp.prototype.exposeConnection = function (id, connection) {
        var connections = _getJsonpConnections();
        connections[id] = connection;
    };
    BrowserJsonp.prototype.removeConnection = function (id) {
        var connections = _getJsonpConnections();
        connections[id] = null;
    };
    // Attach the <script> element to the DOM
    BrowserJsonp.prototype.send = function (node) { document.body.appendChild((node)); };
    // Remove <script> element from the DOM
    BrowserJsonp.prototype.cleanup = function (node) {
        if (node.parentNode) {
            node.parentNode.removeChild((node));
        }
    };
    BrowserJsonp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BrowserJsonp);
    return BrowserJsonp;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
/**
 * Base class for an in-flight JSONP request.
 *
 * @deprecated see https://angular.io/guide/http
 */
var JSONPConnection = /** @class */ (function () {
    /** @internal */
    function JSONPConnection(req, _dom, baseResponseOptions) {
        var _this = this;
        this._dom = _dom;
        this.baseResponseOptions = baseResponseOptions;
        this._finished = false;
        if (req.method !== RequestMethod.Get) {
            throw new TypeError(JSONP_ERR_WRONG_METHOD);
        }
        this.request = req;
        this.response = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (responseObserver) {
            _this.readyState = ReadyState.Loading;
            var id = _this._id = _dom.nextRequestID();
            _dom.exposeConnection(id, _this);
            // Workaround Dart
            // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
            var callback = _dom.requestCallback(_this._id);
            var url = req.url;
            if (url.indexOf('=JSONP_CALLBACK&') > -1) {
                url = url.replace('=JSONP_CALLBACK&', "=" + callback + "&");
            }
            else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
                url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
            }
            var script = _this._script = _dom.build(url);
            var onLoad = function (event) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                if (!_this._finished) {
                    var responseOptions_1 = new ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: ResponseType.Error, url: url });
                    if (baseResponseOptions) {
                        responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
                    }
                    responseObserver.error(new Response(responseOptions_1));
                    return;
                }
                var responseOptions = new ResponseOptions({ body: _this._responseData, url: url });
                if (_this.baseResponseOptions) {
                    responseOptions = _this.baseResponseOptions.merge(responseOptions);
                }
                responseObserver.next(new Response(responseOptions));
                responseObserver.complete();
            };
            var onError = function (error) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                var responseOptions = new ResponseOptions({ body: error.message, type: ResponseType.Error });
                if (baseResponseOptions) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            script.addEventListener('load', onLoad);
            script.addEventListener('error', onError);
            _dom.send(script);
            return function () {
                _this.readyState = ReadyState.Cancelled;
                script.removeEventListener('load', onLoad);
                script.removeEventListener('error', onError);
                _this._dom.cleanup(script);
            };
        });
    }
    /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     */
    JSONPConnection.prototype.finished = function (data) {
        // Don't leak connections
        this._finished = true;
        this._dom.removeConnection(this._id);
        if (this.readyState === ReadyState.Cancelled)
            return;
        this._responseData = data;
    };
    return JSONPConnection;
}());
/**
 * A {@link ConnectionBackend} that uses the JSONP strategy of making requests.
 *
 * @deprecated see https://angular.io/guide/http
 */
var JSONPBackend = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(JSONPBackend, _super);
    /** @internal */
    function JSONPBackend(_browserJSONP, _baseResponseOptions) {
        var _this = _super.call(this) || this;
        _this._browserJSONP = _browserJSONP;
        _this._baseResponseOptions = _baseResponseOptions;
        return _this;
    }
    JSONPBackend.prototype.createConnection = function (request) {
        return new JSONPConnection(request, this._browserJSONP, this._baseResponseOptions);
    };
    JSONPBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [BrowserJsonp, ResponseOptions])
    ], JSONPBackend);
    return JSONPBackend;
}(ConnectionBackend));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Creates connections using `XMLHttpRequest`. Given a fully-qualified
 * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
 * request.
 *
 * This class would typically not be created or interacted with directly inside applications, though
 * the {@link MockConnection} may be interacted with in tests.
 *
 * @deprecated see https://angular.io/guide/http
 */
var XHRConnection = /** @class */ (function () {
    function XHRConnection(req, browserXHR, baseResponseOptions) {
        var _this = this;
        this.request = req;
        this.response = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (responseObserver) {
            var _xhr = browserXHR.build();
            _xhr.open(RequestMethod[req.method].toUpperCase(), req.url);
            if (req.withCredentials != null) {
                _xhr.withCredentials = req.withCredentials;
            }
            // load event handler
            var onLoad = function () {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status = _xhr.status === 1223 ? 204 : _xhr.status;
                var body = null;
                // HTTP 204 means no content
                if (status !== 204) {
                    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
                    // response/responseType properties were introduced in ResourceLoader Level2 spec
                    // (supported by IE10)
                    body = (typeof _xhr.response === 'undefined') ? _xhr.responseText : _xhr.response;
                    // Implicitly strip a potential XSSI prefix.
                    if (typeof body === 'string') {
                        body = body.replace(XSSI_PREFIX, '');
                    }
                }
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status === 0) {
                    status = body ? 200 : 0;
                }
                var headers = Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders());
                // IE 9 does not provide the way to get URL of response
                var url = getResponseURL(_xhr) || req.url;
                var statusText = _xhr.statusText || 'OK';
                var responseOptions = new ResponseOptions({ body: body, status: status, headers: headers, statusText: statusText, url: url });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                var response = new Response(responseOptions);
                response.ok = isSuccess(status);
                if (response.ok) {
                    responseObserver.next(response);
                    // TODO(gdi2290): defer complete if array buffer until done
                    responseObserver.complete();
                    return;
                }
                responseObserver.error(response);
            };
            // error event handler
            var onError = function (err) {
                var responseOptions = new ResponseOptions({
                    body: err,
                    type: ResponseType.Error,
                    status: _xhr.status,
                    statusText: _xhr.statusText,
                });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            _this.setDetectedContentType(req, _xhr);
            if (req.headers == null) {
                req.headers = new Headers();
            }
            if (!req.headers.has('Accept')) {
                req.headers.append('Accept', 'application/json, text/plain, */*');
            }
            req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(name, values.join(',')); });
            // Select the correct buffer type to store the response
            if (req.responseType != null && _xhr.responseType != null) {
                switch (req.responseType) {
                    case ResponseContentType.ArrayBuffer:
                        _xhr.responseType = 'arraybuffer';
                        break;
                    case ResponseContentType.Json:
                        _xhr.responseType = 'json';
                        break;
                    case ResponseContentType.Text:
                        _xhr.responseType = 'text';
                        break;
                    case ResponseContentType.Blob:
                        _xhr.responseType = 'blob';
                        break;
                    default:
                        throw new Error('The selected responseType is not supported');
                }
            }
            _xhr.addEventListener('load', onLoad);
            _xhr.addEventListener('error', onError);
            _xhr.send(_this.request.getBody());
            return function () {
                _xhr.removeEventListener('load', onLoad);
                _xhr.removeEventListener('error', onError);
                _xhr.abort();
            };
        });
    }
    XHRConnection.prototype.setDetectedContentType = function (req /** TODO Request */, _xhr /** XMLHttpRequest */) {
        // Skip if a custom Content-Type header is provided
        if (req.headers != null && req.headers.get('Content-Type') != null) {
            return;
        }
        // Set the detected content type
        switch (req.contentType) {
            case ContentType.NONE:
                break;
            case ContentType.JSON:
                _xhr.setRequestHeader('content-type', 'application/json');
                break;
            case ContentType.FORM:
                _xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                break;
            case ContentType.TEXT:
                _xhr.setRequestHeader('content-type', 'text/plain');
                break;
            case ContentType.BLOB:
                var blob = req.blob();
                if (blob.type) {
                    _xhr.setRequestHeader('content-type', blob.type);
                }
                break;
        }
    };
    return XHRConnection;
}());
/**
 * `XSRFConfiguration` sets up Cross Site Request Forgery (XSRF) protection for the application
 * using a cookie. See https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
 * for more information on XSRF.
 *
 * Applications can configure custom cookie and header names by binding an instance of this class
 * with different `cookieName` and `headerName` values. See the main HTTP documentation for more
 * details.
 *
 * @deprecated see https://angular.io/guide/http
 */
var CookieXSRFStrategy = /** @class */ (function () {
    function CookieXSRFStrategy(_cookieName, _headerName) {
        if (_cookieName === void 0) { _cookieName = 'XSRF-TOKEN'; }
        if (_headerName === void 0) { _headerName = 'X-XSRF-TOKEN'; }
        this._cookieName = _cookieName;
        this._headerName = _headerName;
    }
    CookieXSRFStrategy.prototype.configureRequest = function (req) {
        var xsrfToken = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["ɵgetDOM"])().getCookie(this._cookieName);
        if (xsrfToken) {
            req.headers.set(this._headerName, xsrfToken);
        }
    };
    return CookieXSRFStrategy;
}());
/**
 * Creates {@link XHRConnection} instances.
 *
 * This class would typically not be used by end users, but could be
 * overridden if a different backend implementation should be used,
 * such as in a node backend.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from '@angular/http';
 * @Component({
 *   viewProviders: [
 *     HTTP_PROVIDERS,
 *     {provide: Http, useFactory: (backend, options) => {
 *       return new Http(backend, options);
 *     }, deps: [MyNodeBackend, BaseRequestOptions]}]
 * })
 * class MyComponent {
 *   constructor(http:Http) {
 *     http.request('people.json').subscribe(res => this.people = res.json());
 *   }
 * }
 * ```
 * @deprecated see https://angular.io/guide/http
 */
var XHRBackend = /** @class */ (function () {
    function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
        this._browserXHR = _browserXHR;
        this._baseResponseOptions = _baseResponseOptions;
        this._xsrfStrategy = _xsrfStrategy;
    }
    XHRBackend.prototype.createConnection = function (request) {
        this._xsrfStrategy.configureRequest(request);
        return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
    };
    XHRBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [BrowserXhr, ResponseOptions,
            XSRFStrategy])
    ], XHRBackend);
    return XHRBackend;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a request options object to be optionally provided when instantiating a
 * {@link Request}.
 *
 * This class is based on the `RequestInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#requestinit).
 *
 * All values are null by default. Typical defaults can be found in the {@link BaseRequestOptions}
 * class, which sub-classes `RequestOptions`.
 *
 * ```typescript
 * import {RequestOptions, Request, RequestMethod} from '@angular/http';
 *
 * const options = new RequestOptions({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * });
 * const req = new Request(options);
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // https://google.com
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var RequestOptions = /** @class */ (function () {
    // TODO(Dzmitry): remove search when this.search is removed
    function RequestOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var method = opts.method, headers = opts.headers, body = opts.body, url = opts.url, search = opts.search, params = opts.params, withCredentials = opts.withCredentials, responseType = opts.responseType;
        this.method = method != null ? normalizeMethodName(method) : null;
        this.headers = headers != null ? headers : null;
        this.body = body != null ? body : null;
        this.url = url != null ? url : null;
        this.params = this._mergeSearchParams(params || search);
        this.withCredentials = withCredentials != null ? withCredentials : null;
        this.responseType = responseType != null ? responseType : null;
    }
    Object.defineProperty(RequestOptions.prototype, "search", {
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        get: function () { return this.params; },
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        set: function (params) { this.params = params; },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '@angular/http';
     *
     * const options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * const req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     */
    RequestOptions.prototype.merge = function (options) {
        return new RequestOptions({
            method: options && options.method != null ? options.method : this.method,
            headers: options && options.headers != null ? options.headers : new Headers(this.headers),
            body: options && options.body != null ? options.body : this.body,
            url: options && options.url != null ? options.url : this.url,
            params: options && this._mergeSearchParams(options.params || options.search),
            withCredentials: options && options.withCredentials != null ? options.withCredentials :
                this.withCredentials,
            responseType: options && options.responseType != null ? options.responseType :
                this.responseType
        });
    };
    RequestOptions.prototype._mergeSearchParams = function (params) {
        if (!params)
            return this.params;
        if (params instanceof URLSearchParams) {
            return params.clone();
        }
        if (typeof params === 'string') {
            return new URLSearchParams(params);
        }
        return this._parseParams(params);
    };
    RequestOptions.prototype._parseParams = function (objParams) {
        var _this = this;
        if (objParams === void 0) { objParams = {}; }
        var params = new URLSearchParams();
        Object.keys(objParams).forEach(function (key) {
            var value = objParams[key];
            if (Array.isArray(value)) {
                value.forEach(function (item) { return _this._appendParam(key, item, params); });
            }
            else {
                _this._appendParam(key, value, params);
            }
        });
        return params;
    };
    RequestOptions.prototype._appendParam = function (key, value, params) {
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        params.append(key, value);
    };
    return RequestOptions;
}());
/**
 * Subclass of {@link RequestOptions}, with default values.
 *
 * Default values:
 *  * method: {@link RequestMethod RequestMethod.Get}
 *  * headers: empty {@link Headers} object
 *
 * This class could be extended and bound to the {@link RequestOptions} class
 * when configuring an {@link Injector}, in order to override the default options
 * used by {@link Http} to create and send {@link Request Requests}.
 *
 * ```typescript
 * import {BaseRequestOptions, RequestOptions} from '@angular/http';
 *
 * class MyOptions extends BaseRequestOptions {
 *   search: string = 'coreTeam=true';
 * }
 *
 * {provide: RequestOptions, useClass: MyOptions};
 * ```
 *
 * The options could also be extended when manually creating a {@link Request}
 * object.
 *
 * ```
 * import {BaseRequestOptions, Request, RequestMethod} from '@angular/http';
 *
 * const options = new BaseRequestOptions();
 * const req = new Request(options.merge({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * }));
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // null
 * console.log('req.url:', req.url); // https://google.com
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var BaseRequestOptions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseRequestOptions, _super);
    function BaseRequestOptions() {
        return _super.call(this, { method: RequestMethod.Get, headers: new Headers() }) || this;
    }
    BaseRequestOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BaseRequestOptions);
    return BaseRequestOptions;
}(RequestOptions));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(jeffbcross): properly implement body accessors
/**
 * Creates `Request` instances from provided values.
 *
 * The Request's interface is inspired by the Request constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#request-class),
 * but is considered a static value whose body can be accessed many times. There are other
 * differences in the implementation, but this is the most significant.
 *
 * `Request` instances are typically created by higher-level classes, like {@link Http} and
 * {@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
 * One such example is when creating services that wrap higher-level services, like {@link Http},
 * where it may be useful to generate a `Request` with arbitrary headers and search params.
 *
 * ```typescript
 * import {Injectable, Injector} from '@angular/core';
 * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '@angular/http';
 *
 * @Injectable()
 * class AutoAuthenticator {
 *   constructor(public http:Http) {}
 *   request(url:string) {
 *     return this.http.request(new Request({
 *       method: RequestMethod.Get,
 *       url: url,
 *       search: 'password=123'
 *     }));
 *   }
 * }
 *
 * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
 * var authenticator = injector.get(AutoAuthenticator);
 * authenticator.request('people.json').subscribe(res => {
 *   //URL should have included '?password=123'
 *   console.log('people', res.json());
 * });
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var Request = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Request, _super);
    function Request(requestOptions) {
        var _this = _super.call(this) || this;
        // TODO: assert that url is present
        var url = requestOptions.url;
        _this.url = requestOptions.url;
        var paramsArg = requestOptions.params || requestOptions.search;
        if (paramsArg) {
            var params = void 0;
            if (typeof paramsArg === 'object' && !(paramsArg instanceof URLSearchParams)) {
                params = urlEncodeParams(paramsArg).toString();
            }
            else {
                params = paramsArg.toString();
            }
            if (params.length > 0) {
                var prefix = '?';
                if (_this.url.indexOf('?') != -1) {
                    prefix = (_this.url[_this.url.length - 1] == '&') ? '' : '&';
                }
                // TODO: just delete search-query-looking string in url?
                _this.url = url + prefix + params;
            }
        }
        _this._body = requestOptions.body;
        _this.method = normalizeMethodName(requestOptions.method);
        // TODO(jeffbcross): implement behavior
        // Defaults to 'omit', consistent with browser
        _this.headers = new Headers(requestOptions.headers);
        _this.contentType = _this.detectContentType();
        _this.withCredentials = requestOptions.withCredentials;
        _this.responseType = requestOptions.responseType;
        return _this;
    }
    /**
     * Returns the content type enum based on header options.
     */
    Request.prototype.detectContentType = function () {
        switch (this.headers.get('content-type')) {
            case 'application/json':
                return ContentType.JSON;
            case 'application/x-www-form-urlencoded':
                return ContentType.FORM;
            case 'multipart/form-data':
                return ContentType.FORM_DATA;
            case 'text/plain':
            case 'text/html':
                return ContentType.TEXT;
            case 'application/octet-stream':
                return this._body instanceof ArrayBuffer$1 ? ContentType.ARRAY_BUFFER : ContentType.BLOB;
            default:
                return this.detectContentTypeFromBody();
        }
    };
    /**
     * Returns the content type of request's body based on its type.
     */
    Request.prototype.detectContentTypeFromBody = function () {
        if (this._body == null) {
            return ContentType.NONE;
        }
        else if (this._body instanceof URLSearchParams) {
            return ContentType.FORM;
        }
        else if (this._body instanceof FormData) {
            return ContentType.FORM_DATA;
        }
        else if (this._body instanceof Blob$1) {
            return ContentType.BLOB;
        }
        else if (this._body instanceof ArrayBuffer$1) {
            return ContentType.ARRAY_BUFFER;
        }
        else if (this._body && typeof this._body === 'object') {
            return ContentType.JSON;
        }
        else {
            return ContentType.TEXT;
        }
    };
    /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     */
    Request.prototype.getBody = function () {
        switch (this.contentType) {
            case ContentType.JSON:
                return this.text();
            case ContentType.FORM:
                return this.text();
            case ContentType.FORM_DATA:
                return this._body;
            case ContentType.TEXT:
                return this.text();
            case ContentType.BLOB:
                return this.blob();
            case ContentType.ARRAY_BUFFER:
                return this.arrayBuffer();
            default:
                return null;
        }
    };
    return Request;
}(Body));
function urlEncodeParams(params) {
    var searchParams = new URLSearchParams();
    Object.keys(params).forEach(function (key) {
        var value = params[key];
        if (value && Array.isArray(value)) {
            value.forEach(function (element) { return searchParams.append(key, element.toString()); });
        }
        else {
            searchParams.append(key, value.toString());
        }
    });
    return searchParams;
}
var noop = function () { };
var w = typeof window == 'object' ? window : noop;
var FormData = w /** TODO #9100 */['FormData'] || noop;
var Blob$1 = w /** TODO #9100 */['Blob'] || noop;
var ArrayBuffer$1 = w /** TODO #9100 */['ArrayBuffer'] || noop;

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function httpRequest(backend, request) {
    return backend.createConnection(request).response;
}
function mergeOptions(defaultOpts, providedOpts, method, url) {
    var newOptions = defaultOpts;
    if (providedOpts) {
        // Hack so Dart can used named parameters
        return newOptions.merge(new RequestOptions({
            method: providedOpts.method || method,
            url: providedOpts.url || url,
            search: providedOpts.search,
            params: providedOpts.params,
            headers: providedOpts.headers,
            body: providedOpts.body,
            withCredentials: providedOpts.withCredentials,
            responseType: providedOpts.responseType
        }));
    }
    return newOptions.merge(new RequestOptions({ method: method, url: url }));
}
/**
 * Performs http requests using `XMLHttpRequest` as the default backend.
 *
 * `Http` is available as an injectable class, with methods to perform http requests. Calling
 * `request` returns an `Observable` which will emit a single {@link Response} when a
 * response is received.
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import {Http, HTTP_PROVIDERS} from '@angular/http';
 * import {map} from 'rxjs/operators';
 *
 * @Component({
 *   selector: 'http-app',
 *   viewProviders: [HTTP_PROVIDERS],
 *   templateUrl: 'people.html'
 * })
 * class PeopleComponent {
 *   constructor(http: Http) {
 *     http.get('people.json')
 *       // Call map on the response observable to get the parsed people object
 *       .pipe(map(res => res.json()))
 *       // Subscribe to the observable to get the parsed people object and attach it to the
 *       // component
 *       .subscribe(people => this.people = people);
 *   }
 * }
 * ```
 *
 *
 * ### Example
 *
 * ```
 * http.get('people.json').subscribe((res:Response) => this.people = res.json());
 * ```
 *
 * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
 * {@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
 * the {@link XHRBackend} provider, as in the following example:
 *
 * ### Example
 *
 * ```typescript
 * import {BaseRequestOptions, Http} from '@angular/http';
 * import {MockBackend} from '@angular/http/testing';
 * var injector = Injector.resolveAndCreate([
 *   BaseRequestOptions,
 *   MockBackend,
 *   {provide: Http, useFactory:
 *       function(backend, defaultOptions) {
 *         return new Http(backend, defaultOptions);
 *       },
 *       deps: [MockBackend, BaseRequestOptions]}
 * ]);
 * var http = injector.get(Http);
 * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var Http = /** @class */ (function () {
    function Http(_backend, _defaultOptions) {
        this._backend = _backend;
        this._defaultOptions = _defaultOptions;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     */
    Http.prototype.request = function (url, options) {
        var responseObservable;
        if (typeof url === 'string') {
            responseObservable = httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
        }
        else if (url instanceof Request) {
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    /**
     * Performs a request with `get` http method.
     */
    Http.prototype.get = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
    };
    /**
     * Performs a request with `post` http method.
     */
    Http.prototype.post = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Post, url)));
    };
    /**
     * Performs a request with `put` http method.
     */
    Http.prototype.put = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Put, url)));
    };
    /**
     * Performs a request with `delete` http method.
     */
    Http.prototype.delete = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Delete, url)));
    };
    /**
     * Performs a request with `patch` http method.
     */
    Http.prototype.patch = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Patch, url)));
    };
    /**
     * Performs a request with `head` http method.
     */
    Http.prototype.head = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Head, url)));
    };
    /**
     * Performs a request with `options` http method.
     */
    Http.prototype.options = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Options, url)));
    };
    Http = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ConnectionBackend, RequestOptions])
    ], Http);
    return Http;
}());
/**
 * @deprecated see https://angular.io/guide/http
 */
var Jsonp = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Jsonp, _super);
    function Jsonp(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     *
     * @security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     */
    Jsonp.prototype.request = function (url, options) {
        var responseObservable;
        if (typeof url === 'string') {
            url =
                new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url));
        }
        if (url instanceof Request) {
            if (url.method !== RequestMethod.Get) {
                throw new Error('JSONP requests must use GET request method.');
            }
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    Jsonp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ConnectionBackend, RequestOptions])
    ], Jsonp);
    return Jsonp;
}(Http));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function _createDefaultCookieXSRFStrategy() {
    return new CookieXSRFStrategy();
}
function httpFactory(xhrBackend, requestOptions) {
    return new Http(xhrBackend, requestOptions);
}
function jsonpFactory(jsonpBackend, requestOptions) {
    return new Jsonp(jsonpBackend, requestOptions);
}
/**
 * The module that includes http's providers
 *
 * @deprecated see https://angular.io/guide/http
 */
var HttpModule = /** @class */ (function () {
    function HttpModule() {
    }
    HttpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                // TODO(pascal): use factory type annotations once supported in DI
                // issue: https://github.com/angular/angular/issues/3183
                { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] },
                BrowserXhr,
                { provide: RequestOptions, useClass: BaseRequestOptions },
                { provide: ResponseOptions, useClass: BaseResponseOptions },
                XHRBackend,
                { provide: XSRFStrategy, useFactory: _createDefaultCookieXSRFStrategy },
            ],
        })
    ], HttpModule);
    return HttpModule;
}());
/**
 * The module that includes jsonp's providers
 *
 * @deprecated see https://angular.io/guide/http
 */
var JsonpModule = /** @class */ (function () {
    function JsonpModule() {
    }
    JsonpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                // TODO(pascal): use factory type annotations once supported in DI
                // issue: https://github.com/angular/angular/issues/3183
                { provide: Jsonp, useFactory: jsonpFactory, deps: [JSONPBackend, RequestOptions] },
                BrowserJsonp,
                { provide: RequestOptions, useClass: BaseRequestOptions },
                { provide: ResponseOptions, useClass: BaseResponseOptions },
                JSONPBackend,
            ],
        })
    ], JsonpModule);
    return JsonpModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @deprecated see https://angular.io/guide/http
 */
var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Version"]('6.1.10');

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=http.js.map


/***/ }),

/***/ "./src/app/layout/Shared/shared.service.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/Shared/shared.service.ts ***!
  \*************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var SharedService = /** @class */ (function () {
    function SharedService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    // CreateHeader() {
    //     const  headers = new Headers();
    //     headers.append(this.storage.get('UserToken').access_token, '');
    //     }
    SharedService.prototype.CreateHeader = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append(this.storage.get('UserToken').access_token, '');
    };
    SharedService.prototype.getAllProject = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append(this.storage.get('UserToken').access_token, '');
        //  return  this.http.get(this.url + 'getall', { header : this.CreateHeader()});
        return this.http.get('http://localhost:58164/project/getall', this.headers);
    };
    SharedService.prototype.addProject = function (issue) {
        return this.http.post('http://localhost:58164/project/create', issue, this.headers);
    };
    // public editProject(issue: any) {
    //     const headers = new Headers();
    //     headers.append(this.storage.get('UserToken').access_token, '');
    //     return this.http.post('http://localhost:58164/project/update', issue, this.headers);
    // }
    SharedService.prototype.GetProjectById = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append(this.storage.get('UserToken').access_token, '');
        return this.http.get('http://localhost:58164/project/' + id, this.headers);
    };
    SharedService.prototype.DeletProject = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append(this.storage.get('UserToken').access_token, '');
        return this.http.get('http://localhost:58164/project/' + id + '/delete', this.headers);
    };
    SharedService.prototype.GetClient = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append(this.storage.get('UserToken').access_token, '');
        return this.http.get('http://localhost:58164/client/GetAllClient', this.headers);
    };
    SharedService.prototype.GetAllTechnologyByDomain = function (id) {
        debugger;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append(this.storage.get('UserToken').access_token, '');
        return this.http.get('http://localhost:58164/project/getalltechnologybydomain/' + id, this.headers);
    };
    // public GetAllTechnologyByDomain(id:any) {
    //     debugger;
    //     const headers = new Headers();
    //     headers.append(this.storage.get('UserToken').access_token, '');
    //     return this.http.get('http://localhost:58164/project/getalltechnologybydomain/'+id, this.headers);
    // }
    SharedService.prototype.getallclientstatus = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append(this.storage.get('UserToken').access_token, '');
        return this.http.get('http://localhost:58164/api/Client/GetAllClientStatus', this.headers);
    };
    SharedService.prototype.getallshift = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append(this.storage.get('UserToken').access_token, '');
        return this.http.get('http://localhost:58164/shift/getall', this.headers);
    };
    SharedService.prototype.getalllocation = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append(this.storage.get('UserToken').access_token, '');
        return this.http.get('http://localhost:58164/location/getall', this.headers);
    };
    SharedService.prototype.getallreportinghead = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append(this.storage.get('UserToken').access_token, '');
        return this.http.get('http://localhost:58164/resource/getall', this.headers);
    };
    SharedService.prototype.getallrole = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append(this.storage.get('UserToken').access_token, '');
        return this.http.get('http://localhost:58164/role/getall', this.headers);
    };
    //new
    SharedService.prototype.getalltechdomains = function () {
        debugger;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append(this.storage.get('UserToken').access_token, '');
        return this.http.get('http://localhost:58164/project/GetAllTechDomains', this.headers);
    };
    SharedService.prototype.updateProject = function (issue) {
        debugger;
        console.log(issue);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append(this.storage.get('UserToken').access_token, '');
        return this.http.post('http://localhost:58164/project/update', issue, this.headers);
    };
    SharedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["SESSION_STORAGE"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], Object])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/layout/project/add/add.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/project/add/add.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"w-100 float-left table-info px-4 py-2 text-right\"></div> -->\r\n<app-page-header [heading]=\"'Add Project '\" [icon]=\"'fa-bar-chart-o'\"></app-page-header>\r\n<!-- Title of an Card -->\r\n<!-- <mat-card-title class=\"bg-info w-100 float-left table-info px-4 py-2 text-left\">\r\n       Add Project\r\n    </mat-card-title> -->\r\n\r\n<!-- Actual content starts from here -->\r\n<!-- <mat-card-content> -->\r\n\r\n    \r\n<form [formGroup]=\"regiForm\" (ngSubmit)=\"onFormSubmit(regiForm.value)\" class=\"add-project table-active\">\r\n        <div class=\"card-header bg-info\">\r\n                <mat-label class=\"labeltext text-white text-uppercase\">Project Info </mat-label>\r\n            </div>\r\n    <div class=\"row m-0\">\r\n        <div class=\"col-lg-6 col-md-6 colsm-6 col-12 float-left\">\r\n            <mat-form-field class=\"w-100 mt-4\">\r\n                <input formControlName=\"Title\" matInput placeholder=\"Title\">\r\n            </mat-form-field>\r\n            <mat-error>\r\n                <span *ngIf=\"!regiForm.get('Title').valid && regiForm.get('Title').touched\">Please enter Title Name </span>\r\n            </mat-error>\r\n        </div>\r\n        <!-- testing 27112018 -->\r\n        <div class=\"col-lg-6 col-md-6 colsm-6 col-12 float-left\">\r\n            <mat-form-field class=\"w-100\">\r\n                <textarea formControlName=\"Description\" matInput placeholder=\"Description\" matTextareaAutosize\r\n                    matAutosizeMinRows=\"2\"></textarea>\r\n\r\n            </mat-form-field>\r\n            <mat-error>\r\n                <span *ngIf=\"!regiForm.get('Description').valid && regiForm.get('Description').touched\">Please\r\n                    enter Description </span>\r\n            </mat-error>\r\n        </div>\r\n    </div>\r\n    <div class=\"row m-0\">\r\n        <div class=\"col-lg-6 col-md-6 colsm-6 col-12 float-left\">\r\n            <!-- <mat-form-field class=\"w-100\">\r\n                <input formControlName=\"DomainName\" matInput placeholder=\"DomainName\">\r\n            </mat-form-field> -->\r\n            <mat-form-field class=\"w-100\">\r\n                <mat-select formControlName=\"ProjectDomain_ID\" placeholder=\"Select Technical Domain\">\r\n                    <mat-option>-- Select Technical Domain--</mat-option>\r\n                    <mat-option *ngFor=\"let technologydetail of technologydetails\" [value]=\"technologydetail.TechDomainID\">\r\n                        {{technologydetail.DomainName}}\r\n                    </mat-option>\r\n                </mat-select>\r\n                <mat-error>\r\n                    <span *ngIf=\"!regiForm.get('ProjectDomain_ID').valid && regiForm.get('ProjectDomain_ID').touched\">Please\r\n                        select technology </span>\r\n                </mat-error>\r\n            </mat-form-field>\r\n            <!-- <mat-error>\r\n                <span *ngIf=\"!regiForm.get('ProjectDomain_ID').valid && regiForm.get('ProjectDomain_ID').touched\">Please enter\r\n                    Domain Name </span>\r\n            </mat-error> -->\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12 float-left\">\r\n            <mat-form-field class=\"w-100\">\r\n                <mat-select formControlName=\"Client_ID\" placeholder=\"Select Client\">\r\n                    <mat-option>-- Select Client --</mat-option>\r\n                    <mat-option *ngFor=\"let client of clientdetails\" [value]=\"client.ClientDetailID\">\r\n                        {{client.ClientName}}\r\n                    </mat-option>\r\n                </mat-select>\r\n                <mat-error>\r\n                    <span *ngIf=\"!regiForm.get('Client_ID').valid && regiForm.get('Client_ID').touched\">Please\r\n                        select client </span>\r\n                </mat-error>\r\n            </mat-form-field>\r\n        </div>\r\n    </div>\r\n    <div class=\"row m-0\">\r\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12 float-left\">\r\n            <!-- <mat-form-field class=\"w-100\">\r\n                <mat-select formControlName=\"TechnologyID\" placeholder=\"Select Technology\">\r\n                    <mat-option>-- Select Technology --</mat-option>\r\n                    <mat-option *ngFor=\"let technology of technologylist\" [value]=\"technology.TechnologyID\">\r\n                        {{technology.Name}}\r\n                    </mat-option>\r\n                </mat-select>\r\n                <mat-error> \r\n                   <span *ngIf=\"!regiForm.get('TechnologyID').valid && regiForm.get('TechnologyID').touched\">Please\r\n                        select any technology </span> \r\n                </mat-error>\r\n            </mat-form-field>-->\r\n        </div>\r\n    </div> \r\n\r\n\r\n    \r\n    <div class=\"w-100 float-left table-info px-4 py-2 text-right\">            \r\n            <button mat-button class=\"btn btn-secondary\" (click)=\"onNoClick()\" tabindex=\"-1\"><i class=\"fa fa-times\"  aria-hidden=\"true\"></i> Cancel </button>\r\n            <button mat-button class=\"btn btn-info mx-2\" [disabled]=\"!regiForm.valid || regiForm.get('ProjectDomain_ID').value==0 || regiForm.get('Client_ID').value==0 \"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Submit</button>\r\n        <!-- <div class=\"px-2 float-right\"> -->\r\n        \r\n        <!-- </div> -->\r\n    </div>\r\n\r\n</form>\r\n<!-- </mat-card-content> -->\r\n\r\n<!-- testing 27112018 -->\r\n<!-- //commented for update on GIT 06/12/2018 -->"

/***/ }),

/***/ "./src/app/layout/project/add/add.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/project/add/add.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  min-width: 450px; }\n\n.container > * {\n  width: 100%; }\n\n.form {\n  display: flex;\n  padding-top: 6px; }\n\n.mat-form-field {\n  font-size: 16px;\n  flex-grow: 1; }\n\n.add-project textarea {\n  height: 44px !important;\n  min-height: 44px !important; }\n\n.labeltext {\n  margin-left: 40%; }\n"

/***/ }),

/***/ "./src/app/layout/project/add/add.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/project/add/add.component.ts ***!
  \*****************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Shared/shared.service */ "./src/app/layout/Shared/shared.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_snack_bar_component_example_snack_bar_component_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../project/snack-bar-component-example/snack-bar-component-example.component */ "./src/app/layout/project/snack-bar-component-example/snack-bar-component-example.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddComponent = /** @class */ (function () {
    //testing 27/11/2018
    // constructor(public dialogRef: MatDialogRef<AddComponent>,
    function AddComponent(
    //@Inject(MAT_DIALOG_DATA) public data: Project,
    dataService, fb, router, snackBar) {
        this.dataService = dataService;
        this.fb = fb;
        this.router = router;
        this.snackBar = snackBar;
        this.selectedValue = '';
        this.FirstName = '';
        this.LastName = '';
        this.Address = '';
        this.DOB = null;
        this.Gender = '';
        this.Blog = '';
        this.Email = '';
        this.IsAccepted = 0;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            // Validators.email,
        ]);
        this.regiForm = fb.group({
            'Title': ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Description': ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(500)])],
            //'DomainName' : [null, Validators.required],
            'Client_ID': [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'ProjectDomain_ID': [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.getClient();
        //this.GetAllDomain();
        this.GetAllTechdomains();
    }
    AddComponent.prototype.ngOnInit = function () { };
    AddComponent.prototype.getErrorMessage = function () {
        return this.formControl.hasError('required') ? 'Required field' :
            this.formControl.hasError('email') ? 'Not a valid email' :
                '';
    };
    AddComponent.prototype.onSelect = function (id) {
        var _this = this;
        debugger;
        this.dataService.GetAllTechnologyByDomain(id).subscribe(function (res) {
            _this.technologylist = res;
        });
    };
    AddComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        console.log(this.regiForm.value);
        debugger;
        if (form['Title'] != "" && form['Client_ID'] != 0 && form['ProjectDomain_ID'] != 0) {
            this.dataService.addProject(form).subscribe(function (res) {
                sessionStorage.setItem('message', 'added');
                //this.openSnackBar();
                _this.snackBar.open('Project added successfully', 'ok', { duration: 2500 });
                _this.dataService.getAllProject();
                _this.router.navigate(['project']);
            });
        }
        else
            return;
    };
    AddComponent.prototype.getClient = function () {
        var _this = this;
        this.dataService.GetClient().subscribe(function (res) {
            _this.clientdetails = res;
        });
    };
    AddComponent.prototype.GetAllTechdomains = function () {
        var _this = this;
        this.dataService.getalltechdomains().subscribe(function (res) {
            _this.technologydetails = res;
        });
    };
    AddComponent.prototype.onNoClick = function () {
        this.router.navigate(['project']);
    };
    AddComponent.prototype.openSnackBar = function () {
        this.snackBar.openFromComponent(_project_snack_bar_component_example_snack_bar_component_example_component__WEBPACK_IMPORTED_MODULE_6__["SnackBarComponentExampleComponent"], {
            duration: 2000,
        });
    };
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/layout/project/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/layout/project/add/add.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_4__["routerTransition"])()],
        }),
        __metadata("design:paramtypes", [_Shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSnackBar"]])
    ], AddComponent);
    return AddComponent;
}());

////reedited/testing for push on git 29/11/2018


/***/ }),

/***/ "./src/app/layout/project/edit/edit.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/project/edit/edit.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [heading]=\"'Project Details'\" [icon]=\"'fa-bar-chart-o'\"></app-page-header>\r\n\r\n<div [@routerTransition]>\r\n        <div *ngIf=\"projectdetails\">\r\n                <form class=\"mat-dialog-content table-active\" (ngSubmit)=\"submit\" #formControl=\"ngForm\">\r\n                        <div class=\"form contactlist-container mat-elevation-z8\">\r\n                                <mat-tab-group class=\"client-detail \" (selectedTabChange)=\"onLinkClick($event)\"\r\n                                        mat-align-tabs=\"left\">\r\n\r\n                                        <mat-tab label=\"Summary\">\r\n                                                <!-- <div class=\"py-4 px-1\">\r\n                                                        <div class=\"form-group\">\r\n                                                                <div class=\"col-lg-12\" style=\"margin-bottom: 1%;\">\r\n                                                                        <div class=\"row\">\r\n                                                                                <div class=\"col-md-2\" style=\"display:none\">\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <mat-label>Project ID</mat-label>\r\n                                                                                                <input matInput #input\r\n                                                                                                        [(ngModel)]=\"projectdetails.ProjectID\"\r\n                                                                                                        name=\"ProjectID1\"\r\n                                                                                                        required>\r\n                                                                                                <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <mat-label>Title</mat-label>\r\n                                                                                                <input matInput #input\r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"projectdetails.Title\"\r\n                                                                                                        name=\"Title1\"\r\n                                                                                                        required>\r\n                                                                                                <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <mat-label>Description</mat-label>\r\n                                                                                                <input matInput #input\r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"projectdetails.Description\"\r\n                                                                                                        name=\"ProjectDescription1\"\r\n                                                                                                        required>\r\n                                                                                                <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <mat-label>Domain</mat-label>\r\n                                                                                                <input matInput #input\r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"projectdetails.DomainName\"\r\n                                                                                                        name=\"ProjectDomainName\">\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n\r\n                                                                        </div>\r\n                                                                </div>\r\n                                                        </div>\r\n\r\n                                                        <div class=\"form-group\">\r\n                                                                <div class=\"col-lg-12\" style=\"margin-bottom: 1%;\">\r\n                                                                        <div class=\"row\">\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <mat-label>Project\r\n                                                                                                        Start Date</mat-label>\r\n                                                                                                <input matInput\r\n                                                                                                        [matDatepicker]=\"startpicker1\"\r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"projectdetails.StartDate\"\r\n                                                                                                        name=\"ProjectStartDate\"\r\n                                                                                                        placeholder=\"Choose a date\">\r\n                                                                                                <mat-datepicker-toggle\r\n                                                                                                        matSuffix [for]=\"startpicker\"></mat-datepicker-toggle>\r\n                                                                                                <mat-datepicker\r\n                                                                                                        #startpicker></mat-datepicker>\r\n                                                                                                <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n                                                                                        </mat-form-field>\r\n\r\n                                                                                </div>\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <mat-label>Project End\r\n                                                                                                        Date</mat-label>\r\n                                                                                                <input matInput\r\n                                                                                                        [matDatepicker]=\"endpicker2\"\r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"projectdetails.EndDate\"\r\n                                                                                                        name=\"ProjectEndDate\"\r\n                                                                                                        placeholder=\"Choose a date\">\r\n                                                                                                <mat-datepicker-toggle\r\n                                                                                                        matSuffix [for]=\"endpicker\" [disabled]=\"disableSummary\"></mat-datepicker-toggle>\r\n                                                                                                <mat-datepicker\r\n                                                                                                        #endpicker></mat-datepicker>\r\n                                                                                                <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n                                                                                        </mat-form-field>\r\n\r\n                                                                                </div>\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <mat-label>Duration</mat-label>\r\n                                                                                                <input matInput #input\r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"projectdetails.Duration\"\r\n                                                                                                        name=\"ProjectDuration\"\r\n                                                                                                        required>\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n\r\n\r\n                                                                        </div>\r\n                                                                </div>\r\n                                                        </div>\r\n\r\n                                                </div> -->\r\n                                                <div class=\"card mb-3\">\r\n                                                        <div class=\"w-100 float-left table-active py-4 px-2\">\r\n                                                                <div class=\"row mx-0 my-2\">\r\n                                                                        <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 float-left\">\r\n                                                                                <div class=\"summary-lebel float-left\"><strong>Project\r\n                                                                                                Title :</strong></div>\r\n                                                                                <div class=\"float-left\">{{projectdetails.Title}}</div>\r\n                                                                        </div>\r\n                                                                        <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 float-left\">\r\n                                                                                <div class=\"summary-lebel float-left\"><strong>Description :</strong></div>\r\n                                                                                <div class=\"float-left\">{{projectdetails.Description}}</div>\r\n                                                                        </div>\r\n                                                                        <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 float-left\">\r\n                                                                                <div class=\"summary-lebel float-left\"><strong>Domain Name:</strong></div>\r\n                                                                                <div class=\"float-left\">{{projectdetails.DomainName}}</div>\r\n                                                                        </div>\r\n\r\n                                                                </div>\r\n                                                                <div class=\"row mx-0 my-2\">\r\n                                                                        <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 float-left\">\r\n                                                                                <div class=\"summary-lebel float-left\"><strong>Start Date :</strong></div>\r\n                                                                                <div class=\"float-left\">{{projectdetails.StartDate}}</div>\r\n                                                                        </div>\r\n                                                                        <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 float-left\">\r\n                                                                                <div class=\"summary-lebel float-left\"><strong>End Date :</strong></div>\r\n                                                                                <div class=\"float-left\">{{projectdetails.EndDate}}</div>\r\n                                                                        </div>\r\n                                                                        <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 float-left\">\r\n                                                                                <div class=\"summary-lebel float-left\"><strong>Duration :</strong></div>\r\n                                                                                <div class=\"float-left\">{{projectdetails.Duration}}</div>\r\n                                                                        </div>\r\n\r\n                                                                </div>\r\n\r\n                                                        </div>\r\n\r\n                                                </div>\r\n                                        </mat-tab>\r\n\r\n                                        <!-- Project Tab -->\r\n                                        <mat-tab label=\"Project Information\">\r\n                                                <div class=\"py-4 px-1\">\r\n                                                        <div class=\"form-group\">\r\n                                                                <div class=\"col-lg-12\" style=\"margin-bottom: 1%;\">\r\n                                                                        <div class=\"row\">\r\n                                                                                <div class=\"col-md-2\" style=\"display:none\">\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\"><strong>:</strong></label>\r\n                                                                                                <mat-label>Project ID</mat-label>\r\n                                                                                                <input matInput #input\r\n                                                                                                        [disabled]=\"disable\"\r\n                                                                                                        [(ngModel)]=\"projectdetails.ProjectID\"\r\n                                                                                                        name=\"ProjectID\"\r\n                                                                                                        required>\r\n                                                                                                <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\" *ngIf=\"disable\"><strong>Title: </strong></label>\r\n                                                                                                <mat-label *ngIf=\"!disable\">Title</mat-label>\r\n                                                                                                <input matInput #input\r\n                                                                                                        [disabled]=\"disable\"\r\n                                                                                                        [(ngModel)]=\"projectdetails.Title\"\r\n                                                                                                        name=\"Title\"\r\n                                                                                                        required>\r\n                                                                                                <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\" *ngIf=\"disable\"><strong>Description: </strong></label>\r\n                                                                                                <mat-label *ngIf=\"!disable\">Description</mat-label>\r\n                                                                                                <textarea matInput\r\n                                                                                                        [disabled]=\"disable\"\r\n                                                                                                        [(ngModel)]=\"projectdetails.Description\"\r\n                                                                                                        name=\"ProjectDescription\"\r\n                                                                                                        required style=\"height:25px\"></textarea>\r\n                                                                                                <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\" *ngIf=\"disable\"><strong>Technical Domain: </strong></label>\r\n                                                                                                <mat-label *ngIf=\"!disable\">Technical\r\n                                                                                                        Domain</mat-label>\r\n                                                                                                <mat-select name=\"ProjectDomain_ID\"                                                                                                        \r\n                                                                                                        [placeholder]=\"GetPlaceHolder('ProjectDomain_ID')\"\r\n                                                                                                        [disabled]=\"disable\"\r\n                                                                                                        [(ngModel)]=\"projectdetails.ProjectDomain_ID\">\r\n                                                                                                        <mat-option>--\r\n                                                                                                                Select\r\n                                                                                                                Technical\r\n                                                                                                                Domain--</mat-option>\r\n                                                                                                        <mat-option\r\n                                                                                                                *ngFor=\"let technologydetail of TechnicalDomainList\"\r\n                                                                                                                [value]=\"technologydetail.TechDomainID\">\r\n                                                                                                                {{technologydetail.DomainName}}\r\n                                                                                                        </mat-option>\r\n                                                                                                </mat-select>\r\n                                                                                                <!-- <input matInput #input class=\"form-control\"  [disabled]=\"disable\" [(ngModel)]=\"projectdetails.DomainName\" name=\"ProjectDomainName\" > -->\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n\r\n                                                                        </div>\r\n                                                                </div>\r\n                                                        </div>\r\n\r\n                                                        <div class=\"form-group\">\r\n                                                                <div class=\"col-lg-12\" style=\"margin-bottom: 1%;\">\r\n                                                                        <div class=\"row\">\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                                                                                        <!-- [(ngModel)]=\"projectdetails.StartDate\"  -->\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\" *ngIf=\"disable\"><strong>Project Start Date:</strong></label>\r\n                                                                                                <mat-label *ngIf=\"!disable\">Project\r\n                                                                                                        Start Date</mat-label>\r\n                                                                                                <input matInput\r\n                                                                                                        [matDatepicker]=\"startpicker\"\r\n                                                                                                        [disabled]=\"disable\"\r\n                                                                                                        name=\"ProjectStartDate\"\r\n                                                                                                        [placeholder]=\"GetPlaceHolder('ProjectStartDate')\"\r\n                                                                                                        [value]=\"date\">\r\n                                                                                                <mat-datepicker-toggle\r\n                                                                                                        matSuffix [for]=\"startpicker\"></mat-datepicker-toggle>\r\n                                                                                                <mat-datepicker\r\n                                                                                                        #startpicker></mat-datepicker>\r\n                                                                                                <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n                                                                                        </mat-form-field>\r\n\r\n                                                                                </div>\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\" *ngIf=\"disable\" ><strong> Project End Date:</strong></label>\r\n                                                                                                <mat-label *ngIf=\"!disable\">Project End\r\n                                                                                                        Date</mat-label>\r\n                                                                                                <input matInput\r\n                                                                                                        [matDatepicker]=\"endpicker\"\r\n                                                                                                        [(ngModel)]=\"projectdetails.EndDate\"\r\n                                                                                                        [disabled]=\"disable\"\r\n                                                                                                        name=\"ProjectEndDate\"\r\n                                                                                                        [placeholder]=\"GetPlaceHolder('ProjectEndDate')\"\r\n                                                                                                        [value]=\"date.value\">\r\n                                                                                                <mat-datepicker-toggle\r\n                                                                                                        matSuffix [for]=\"endpicker\"></mat-datepicker-toggle>\r\n                                                                                                <mat-datepicker\r\n                                                                                                        #endpicker></mat-datepicker>\r\n                                                                                                <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n                                                                                        </mat-form-field>\r\n\r\n                                                                                </div>\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\" *ngIf=\"disable\"><strong>Duration:</strong></label>\r\n                                                                                                <mat-label *ngIf=\"!disable\">Duration</mat-label>\r\n                                                                                                <input matInput #input\r\n                                                                                                        [disabled]=\"disable\"\r\n                                                                                                        [(ngModel)]=\"projectdetails.Duration\"\r\n                                                                                                        name=\"ProjectDuration\"\r\n                                                                                                        required>\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n\r\n\r\n                                                                        </div>\r\n                                                                </div>\r\n                                                        </div>\r\n\r\n                                                </div>\r\n                                        </mat-tab>\r\n                                        <!-- Client Tab -->\r\n                                        <mat-tab label=\"Client Information\">\r\n                                                <div class=\"py-4 px-1\">\r\n                                                        <div class=\"form-group\">\r\n                                                                <div class=\"col-lg-12\" style=\"margin-bottom: 1%;\">\r\n                                                                        <div class=\"row\">\r\n                                                                                <div class=\"col-md-2\" style=\"display:none\">\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\"><strong>:</strong></label>\r\n                                                                                                <mat-label>ID</mat-label>\r\n                                                                                                <input matInput #input\r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"clientdetails.Client_ID\"\r\n                                                                                                        name=\"Client_ID\">\r\n                                                                                                <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\"><strong>Name:</strong></label>\r\n                                                                                                <!-- <mat-label>Name</mat-label> -->\r\n                                                                                                <input matInput #input\r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"clientdetails.ClientName\"\r\n                                                                                                        name=\"ClientName\">\r\n                                                                                                <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\"><strong>Address:</strong></label>\r\n                                                                                                <!-- <mat-label>Address</mat-label> -->\r\n                                                                                                <input matInput #input\r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"clientdetails.Address\"\r\n                                                                                                        name=\"Address\">\r\n                                                                                                <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\"><strong>Country:</strong></label>\r\n                                                                                                <!-- <mat-label>Country</mat-label> -->\r\n                                                                                                <input matInput #input\r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"clientdetails.Country\"\r\n                                                                                                        name=\"Country\">\r\n                                                                                                <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\"><strong>Client Status:</strong></label>\r\n                                                                                                <!-- <mat-label>Client\r\n                                                                                                        Status</mat-label> -->\r\n\r\n                                                                                                <mat-select \r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"projectdetails.ClientStatus\"\r\n                                                                                                        name=\"Status\">\r\n                                                                                                        <mat-option\r\n                                                                                                                [value]=\"true\">Active</mat-option>\r\n                                                                                                        <mat-option\r\n                                                                                                                [value]=\"false\">InActive</mat-option>\r\n                                                                                                </mat-select>\r\n                                                                                                <!-- <mat-select [(ngModel)]=\"resourcedetails.Resource_IsActive\"\r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        name=\"Resource_IsActive\">\r\n                                                                                                        <mat-option\r\n                                                                                                                [value]=\"true\">Active</mat-option>\r\n                                                                                                        <mat-option\r\n                                                                                                                [value]=\"false\">InActive</mat-option>\r\n                                                                                                </mat-select> -->\r\n                                                                                                <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n\r\n                                                                        </div>\r\n                                                                        <div class=\"row\">\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\"><strong>CoClient :</strong></label>\r\n                                                                                                <!-- <mat-label>CoClient</mat-label> -->\r\n                                                                                                <input matInput #input\r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"clientdetails.CoClient\"\r\n                                                                                                        name=\"CoClient\">\r\n\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\"><strong>CoClient2:</strong></label>\r\n                                                                                                <!-- <mat-label>CoClient2</mat-label> -->\r\n                                                                                                <input matInput #input\r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"clientdetails.CoClient2\"\r\n                                                                                                        name=\"CoClient2\">\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\"><strong>CoClient2 Email:</strong></label>\r\n                                                                                                <!-- <mat-label>CoClient2\r\n                                                                                                        Email</mat-label> -->\r\n                                                                                                <input matInput #input\r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"clientdetails.EmailID2\"\r\n                                                                                                        name=\"EmailID2\">\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n\r\n                                                                        </div>\r\n                                                                        <div class=\"row\">\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\"><strong>CoClient3:</strong></label>\r\n                                                                                                <!-- <mat-label>CoClient3</mat-label> -->\r\n                                                                                                <input matInput #input\r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"clientdetails.CoClient3\"\r\n                                                                                                        name=\"CoClient3\">\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\"><strong>CoClient3 Email:</strong></label>\r\n                                                                                                <!-- <mat-label>CoClient3\r\n                                                                                                        Email</mat-label> -->\r\n                                                                                                <input matInput #input\r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"clientdetails.EmailID3\"\r\n                                                                                                        name=\"EmailID3\">\r\n\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\"><strong>CoClient 4:</strong></label>\r\n                                                                                                <!-- <mat-label>CoClient 4</mat-label> -->\r\n                                                                                                <input matInput #input\r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"clientdetails.CoClient4\"\r\n                                                                                                        name=\"CoClient4\">\r\n\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\"><strong>CoClient4 Email ID:</strong></label>\r\n                                                                                                <!-- <mat-label>CoClient4\r\n                                                                                                        Email ID</mat-label> -->\r\n                                                                                                <input matInput #input\r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"clientdetails.EmailID4\"\r\n                                                                                                        name=\"EmailID4\">\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n                                                                        </div>\r\n                                                                </div>\r\n                                                        </div>\r\n\r\n                                                </div>\r\n                                        </mat-tab>\r\n                                        <!-- Resource Tab -->\r\n                                        <mat-tab label=\"Resource Information\">\r\n                                                <div class=\"py-4 px-1\">\r\n                                                        <div class=\"form-group\">\r\n                                                                <div class=\"col-lg-12\" style=\"margin-bottom: 1%;\">\r\n                                                                        <div class=\"row\">\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\"><strong>Name :</strong></label>\r\n                                                                                                <!-- <mat-label>Name</mat-label> -->\r\n                                                                                                <input matInput #input\r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"resourcedetails.ResourceFirstname\"\r\n                                                                                                        name=\"ResourceName\">\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\"><strong>Total Experience:</strong></label>\r\n                                                                                                <!-- <mat-label>Total\r\n                                                                                                        Experience</mat-label> -->\r\n                                                                                                <input matInput #input\r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"resourcedetails.TotalExp\"\r\n                                                                                                        name=\"TotalExp\">\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\"><strong>Email ID:</strong></label>\r\n                                                                                                <!-- <mat-label>Email ID</mat-label> -->\r\n                                                                                                <input matInput #input\r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"resourcedetails.ResourceEmailId\"\r\n                                                                                                        name=\"ResourceEmailId\">\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\"><strong>Mobile Number:</strong></label>\r\n                                                                                                <!-- <mat-label>Mobile\r\n                                                                                                        Number</mat-label> -->\r\n                                                                                                <input matInput #input\r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"resourcedetails.ResourceMobileNumber\"\r\n                                                                                                        name=\"ResourceMobileNumber\">\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n                                                                        </div>\r\n                                                                        <!-- Resource Tab -->\r\n                                                                        <div class=\"row\">\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\"><strong>Status:</strong></label>\r\n                                                                                                <!-- <mat-label>Status</mat-label> -->\r\n\r\n                                                                                                <mat-select [(ngModel)]=\"resourcedetails.Resource_IsActive\"\r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        name=\"Resource_IsActive\">\r\n                                                                                                        <mat-option\r\n                                                                                                                [value]=\"true\">Active</mat-option>\r\n                                                                                                        <mat-option\r\n                                                                                                                [value]=\"false\">InActive</mat-option>\r\n                                                                                                </mat-select>\r\n\r\n\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\"><strong>Remarks:</strong></label>\r\n                                                                                                <!-- <mat-label>Remarks</mat-label> -->\r\n                                                                                                <input matInput #input\r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"resourcedetails.Remarks\"\r\n                                                                                                        name=\"Remarks\">\r\n\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <!-- <mat-label>Shift</mat-label> -->\r\n                                                                                                <label class=\"summary-lebel float-left\"><strong>Shift:</strong></label>\r\n\r\n                                                                                                <mat-select \r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"resourcedetails.Master_Shift_ID\"\r\n                                                                                                        name=\"Master_Shift_ID\">\r\n                                                                                                        <mat-option\r\n                                                                                                                *ngFor=\"let shift of Shift\"\r\n                                                                                                                [value]=\"shift.ShiftID\">\r\n                                                                                                                {{shift.StartTimeIST}}-{{shift.EndTimeIST}}\r\n                                                                                                        </mat-option>\r\n                                                                                                </mat-select>\r\n\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <!-- <mat-label>Location</mat-label> -->\r\n                                                                                                <label class=\"summary-lebel float-left\"><strong>Location:</strong></label>\r\n\r\n                                                                                                <mat-select \r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"resourcedetails.Master_Location_ID\"\r\n                                                                                                        name=\"Master_Location\">\r\n                                                                                                        <mat-option\r\n                                                                                                                *ngFor=\"let location of Location\"\r\n                                                                                                                [value]=\"location.LocationID\">\r\n                                                                                                                {{location.LocationAddress}}\r\n                                                                                                        </mat-option>\r\n                                                                                                </mat-select>\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n                                                                        </div>\r\n                                                                        <div class=\"row\">\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\"><strong>Reporting Head:</strong></label>\r\n                                                                                                <!-- <mat-label>Reporting\r\n                                                                                                        Head</mat-label> -->\r\n\r\n                                                                                                <mat-select \r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"resourcedetails.ReportingHead_ID\"\r\n                                                                                                        name=\"ReportingHead_ID\">\r\n                                                                                                        <mat-option\r\n                                                                                                                *ngFor=\"let reportingHead of ReportingHead\"\r\n                                                                                                                [value]=\"reportingHead.UserDetailID\">\r\n                                                                                                                {{reportingHead.Firstname}}\r\n                                                                                                                {{reportingHead.Middlename}}\r\n                                                                                                                {{reportingHead.Lastname}}\r\n                                                                                                        </mat-option>\r\n                                                                                                </mat-select>\r\n\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\"><strong>Role:</strong></label>\r\n                                                                                                <!-- <mat-label>Role</mat-label> -->\r\n\r\n                                                                                                <mat-select \r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"resourcedetails.Master_Role_ID\"\r\n                                                                                                        name=\"Master_Role\">\r\n                                                                                                        <mat-option\r\n                                                                                                                *ngFor=\"let role of Role\"\r\n                                                                                                                [value]=\"role.UserRoleID\">\r\n                                                                                                                {{role.RoleName}}\r\n                                                                                                        </mat-option>\r\n                                                                                                </mat-select>\r\n\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n                                                                        </div>\r\n                                                                </div>\r\n                                                        </div>\r\n\r\n                                                </div>\r\n                                        </mat-tab>\r\n                                        <!--   -->\r\n                                        <mat-tab label=\"Task Information\">\r\n                                                <div class=\"py-4 px-1\">\r\n                                                        <div class=\"form-group\">\r\n                                                                <div class=\"col-lg-12\" style=\"margin-bottom: 1%;\">\r\n                                                                        <div class=\"row\">\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\"><strong>Title:</strong></label>\r\n                                                                                                <!-- <mat-label>Title</mat-label> -->\r\n                                                                                                <input matInput #input\r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"taskdetails.TaskTitle\"\r\n                                                                                                        name=\"TaskTitle\"\r\n                                                                                                        [pattern]=\"'^[a-zA-Z \\-\\']$'\">\r\n                                                                                                <!-- <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error> -->\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\"><strong>Description:</strong></label>\r\n                                                                                                <!-- <mat-label>Description</mat-label> -->\r\n                                                                                                <input matInput #input\r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"taskdetails.TaskDescription\"\r\n                                                                                                        name=\"TaskDescription\">\r\n                                                                                                <!-- <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error> -->\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n                                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                                                                                        <mat-form-field class=\"w-100\">\r\n                                                                                                <label class=\"summary-lebel float-left\"><strong>Task Attachment:</strong></label>\r\n                                                                                                <!-- <mat-label>Task\r\n                                                                                                        Attachment</mat-label> -->\r\n                                                                                                <input matInput #input\r\n                                                                                                        [disabled]=\"disableSummary\"\r\n                                                                                                        [(ngModel)]=\"taskdetails.TaskAttachmentID\"\r\n                                                                                                        name=\"TaskAttachmentID\">\r\n                                                                                                <!-- <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error> -->\r\n                                                                                        </mat-form-field>\r\n                                                                                </div>\r\n                                                                        </div>\r\n\r\n                                                                </div>\r\n                                                        </div>\r\n\r\n                                                </div>\r\n                                        </mat-tab>\r\n\r\n                                </mat-tab-group>\r\n\r\n\r\n\r\n\r\n                        </div>\r\n                </form>\r\n                <div class=\"w-100 float-left d-block table-info px-4 py-2 table-info\">\r\n                        <div class=\"px-2 float-right\">\r\n                                <button mat-button class=\"btn btn-secondary\" tabindex=\"-1\" (click)=\"onNoClick()\"><i\r\n                                                class=\"fa fa-backward\" aria-hidden=\"true\"></i> Back</button>\r\n                        </div>\r\n                        <div class=\"px-2 float-right\">\r\n                                <button mat-button class=\"btn btn-info\" (click)=\"edit()\" *ngIf=\"!isSave\"><i class=\"fa fa-pencil-square-o\"\r\n                                                aria-hidden=\"true\"></i> Edit</button>\r\n                        </div>\r\n                        <div class=\"px-2 float-right\" *ngIf=\"isSave\">\r\n                                <button mat-button class=\"btn btn-success\" (click)=\"save()\"><i class=\"fa fa-save\"\r\n                                                aria-hidden=\"true\"></i> Save</button>\r\n                        </div>\r\n                        <div class=\"px-2 float-right\">\r\n                                <button mat-button class=\"btn btn-secondary\" tabindex=\"-1\" *ngIf=\"isSave\" (click)=\"onCancelClick()\"><i\r\n                                                class=\"fa fa-times\" aria-hidden=\"true\"></i> Cancel</button>\r\n                        </div>\r\n\r\n\r\n                </div>\r\n\r\n                <!-- <div class=\"w-100 float-left d-block table-info px-4 py-2 table-info\" >\r\n            <div class=\"px-2 float-right\" *ngIf=\"notfound\">\r\n                    <button mat-button class=\"btn btn-secondary\"(click)=\"onNoClick()\" tabindex=\"-1\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i> Cancel</button>\r\n            </div>\r\n\r\n\r\n</div> -->\r\n\r\n                <!-- <div class=\"w-100 float-left d-block table-info px-4 py-2 table-info\" *ngIf=\"disablediv\">\r\n            <div class=\"px-2 float-right\">\r\n            </div>\r\n    </div> -->\r\n\r\n        </div>"

/***/ }),

/***/ "./src/app/layout/project/edit/edit.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/project/edit/edit.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  min-width: 650px; }\n\n.container > * {\n  width: 100%; }\n\n.form {\n  display: flex; }\n\n.mat-form-field {\n  font-size: 16px;\n  flex-grow: 1; }\n\n.contactlist-container, #paginator {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n  max-height: 700px;\n  overflow: auto;\n  margin: 0 auto; }\n\n::ng-deep .mat-tab-label {\n  color: white; }\n\n::ng-deep .mat-success {\n  background-color: green;\n  color: #fff; }\n\n.margin-left {\n  margin-left: 90%; }\n"

/***/ }),

/***/ "./src/app/layout/project/edit/edit.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/project/edit/edit.component.ts ***!
  \*******************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Shared/shared.service */ "./src/app/layout/Shared/shared.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _projenctModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../projenctModel */ "./src/app/layout/project/projenctModel.ts");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _project_snack_bar_component_example_snack_bar_component_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../project/snack-bar-component-example/snack-bar-component-example.component */ "./src/app/layout/project/snack-bar-component-example/snack-bar-component-example.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { Project,Client,Domain,Resource } from '../project/projectModel';



var EditComponent = /** @class */ (function () {
    function EditComponent(route, dataService, router, project, snackBar) {
        var _this = this;
        this.route = route;
        this.dataService = dataService;
        this.router = router;
        this.project = project;
        this.snackBar = snackBar;
        this.disable = true;
        this.editvisible = false;
        this.savevisible = false;
        this.disablediv = true;
        this.disableSummary = true;
        this.isshown = false;
        this.ishidden = false;
        this.isSave = false;
        this.isCancelVisible = false;
        this.isCancelDisabled = false;
        this.notfound = false;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        var id = this.route.snapshot.paramMap.get('ProjectID');
        this.projectid = id;
        debugger;
        this.dataService.GetProjectById(id).subscribe(function (res) {
            //debugger;
            //if (res.message = 'Record Not Found.') {
            //  this.notfound = true;
            // } else {
            //debugger;
            //console.log(res);
            _this.projectdetails = res;
            _this.clientdetails = res;
            _this.date = new Date('12/11/2018');
            debugger;
            _this.resourcedetails = res;
            _this.taskdetails = res;
            // }
        }, function (error) {
            alert("Invalid Request!");
            _this.router.navigate(['/project']);
            var errorresult = 'No Result';
        });
        this.dataService.GetAllTechnologyByDomain(id).subscribe(function (res) {
            _this.Technologylist = res;
        }
        //,     error => {                    
        //         alert("Invalid Domain!");
        //     //    this.router.navigate(['/project']);
        // const errorresult = 'No Result';
        //     }
        );
        this.GetAllClientStatus();
        this.GetAllShift();
        this.GetAllLocation();
        this.GetAllReportingHead();
        this.GetAllRole();
        this.GetAllTechDomain();
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent.prototype.getErrorMessage = function () {
        return this.formControl.hasError('required') ? 'Required field' :
            this.formControl.hasError('email') ? 'Not a valid email' :
                '';
    };
    EditComponent.prototype.submit = function () {
    };
    EditComponent.prototype.onLinkClick = function (event) {
        var _this = this;
        if (event.index == 0) {
            this.isCancelDisabled = false;
            this.dataService.GetProjectById(this.projectid).subscribe(function (res) { _this.projectdetails = res; });
        }
        this.disablediv = true;
    };
    EditComponent.prototype.onNoClick = function () {
        this.router.navigate(['project']);
    };
    EditComponent.prototype.onCancelClick = function () {
        var _this = this;
        this.dataService.GetProjectById(this.projectid).subscribe(function (res) { _this.projectdetails = res; });
        this.isSave = false;
        //this.disableSummary = true;
        this.disable = true;
    };
    EditComponent.prototype.edit = function () {
        //this.disableSummary = true;
        this.disable = false;
        this.isSave = true;
        //this.isCancelVisible= true;
    };
    EditComponent.prototype.save = function () {
        var _this = this;
        this.dataService.updateProject(this.projectdetails).subscribe(function (res) {
            sessionStorage.setItem('message', 'updated');
            //this.openSnackBar();  
            _this.snackBar.open('Project edited successfully', 'ok', { duration: 2500 });
            _this.dataService.getAllProject();
            _this.disable = true;
            _this.isSave = false;
        });
    };
    EditComponent.prototype.GetPlaceHolder = function (controlName) {
        if (!this.disable) {
            switch (controlName) {
                case 'ProjectDomain_ID': return "Select Technical Domain ";
                case 'ProjectStartDate': return "Select Start Date";
                case 'ProjectEndDate': return "Select End Date";
            }
        }
        else {
            return " ";
        }
    };
    EditComponent.prototype.GetAllClientStatus = function () {
        var _this = this;
        this.dataService.getallclientstatus().subscribe(function (res) {
            _this.Status = res;
        });
    };
    EditComponent.prototype.GetAllShift = function () {
        var _this = this;
        this.dataService.getallshift().subscribe(function (res) {
            _this.Shift = res;
        });
    };
    EditComponent.prototype.GetAllLocation = function () {
        var _this = this;
        this.dataService.getalllocation().subscribe(function (res) {
            _this.Location = res;
        });
    };
    EditComponent.prototype.GetAllReportingHead = function () {
        var _this = this;
        this.dataService.getallreportinghead().subscribe(function (res) {
            _this.ReportingHead = res;
        });
    };
    EditComponent.prototype.GetAllRole = function () {
        var _this = this;
        this.dataService.getallrole().subscribe(function (res) {
            _this.Role = res;
        });
    };
    EditComponent.prototype.GetAllTechDomain = function () {
        var _this = this;
        this.dataService.getalltechdomains().subscribe(function (res) {
            _this.TechnicalDomainList = res;
            //console.log("TechnicalDomainList:"+JSON.stringify(this.TechnicalDomainList) )
        });
    };
    EditComponent.prototype.openSnackBar = function () {
        this.snackBar.openFromComponent(_project_snack_bar_component_example_snack_bar_component_example_component__WEBPACK_IMPORTED_MODULE_7__["SnackBarComponentExampleComponent"], {
            duration: 1000,
        });
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/layout/project/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/layout/project/edit/edit.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_6__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _Shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _projenctModel__WEBPACK_IMPORTED_MODULE_5__["Project"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSnackBar"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/layout/project/project-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/project/project-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ProjectRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectRoutingModule", function() { return ProjectRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.component */ "./src/app/layout/project/project.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/layout/project/edit/edit.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/layout/project/add/add.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '', children: [
            { path: '', component: _project_component__WEBPACK_IMPORTED_MODULE_2__["ProjectComponent"] },
            { path: 'edit/:ProjectID', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"] },
            //{path: 'edit', component: EditComponent}
            { path: 'add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"] }
        ]
    },
    {}
];
var ProjectRoutingModule = /** @class */ (function () {
    function ProjectRoutingModule() {
    }
    ProjectRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProjectRoutingModule);
    return ProjectRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/project/project.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/project/project.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  [@routerTransition]>\r\n        <app-page-header [heading]=\"'Project'\" [icon]=\"'fa fa-users'\"></app-page-header>\r\n\r\n      </div>\r\n        <div  *ngIf=\"disableforadd\">\r\n        <mat-table [dataSource]=\"dataSource\" matSort class=\"table-active\">\r\n\r\n          <ng-container matColumnDef=\"ProjectID\">\r\n            <mat-header-cell class=\"bg-info\" hidden mat-header-cell *matHeaderCellDef mat-sort-header> <span class=\"text-white \">Project ID</span> </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\" hidden> {{element.ProjectID}} </mat-cell>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"Title\">\r\n            <mat-header-cell class=\"bg-info\" mat-header-cell *matHeaderCellDef mat-sort-header><span class=\"text-white  pl-3\">Project Name </span> </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\" class=\"pl-3\"> {{element.Title}} </mat-cell>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"ClientName\">\r\n            <mat-header-cell class=\"bg-info\" mat-header-cell *matHeaderCellDef mat-sort-header><span class=\"text-white pl-3\">Client Name </span> </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\" class=\"pl-3\"> {{element.ClientName}} </mat-cell>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"Description\">\r\n            <mat-header-cell class=\"bg-info\" mat-header-cell *matHeaderCellDef mat-sort-header><span class=\"text-white  pl-3\">Description</span> </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.Description}} </mat-cell>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"DomainName\">\r\n            <mat-header-cell class=\"bg-info\" mat-header-cell *matHeaderCellDef mat-sort-header> <span class=\"text-white  pl-3\">Domain Name</span> </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.DomainName}} </mat-cell>\r\n          </ng-container>\r\n          <!-- co client  Column -->\r\n          <!-- <ng-container matColumnDef=\"CoClient\">\r\n              <mat-header-cell class=\"bg-info\" mat-header-cell *matHeaderCellDef mat-sort-header>  <span class=\"text-white text-uppercase\">Co Client</span> </mat-header-cell>\r\n              <mat-cell *matCellDef=\"let element\"> {{element.CoClient}} </mat-cell>\r\n            </ng-container> -->\r\n          <!--Action  Column, will contains button for View,Edit and Delete -->\r\n            <ng-container matColumnDef=\"actions\">\r\n              <mat-header-cell class=\"bg-info\" mat-header-cell *matHeaderCellDef mat-sort-header> </mat-header-cell>\r\n              <mat-cell *matCellDef=\"let element\" class=\"text-right\">\r\n                <!-- [routerLink]=\"['/client-details'] -->\r\n                  <button mat-button (click)=\"editproject(element)\"  class=\"btn btn-info mx-1\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> View</button>\r\n\r\n                  <button mat-button (click)=\"deleteproject(element.ProjectID,element.Status)\"  *ngIf=\"element.Status=='0'\" class=\"btn btn-danger mx-1\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i> Delete</button>\r\n                  <button mat-button (click)=\"deleteproject(element.ProjectID,element.Status)\" mat-raised-button color=\"accent\" *ngIf=\"element.Status=='1'\" class=\"btn btn-danger mx-1\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i> Activate </button>\r\n              </mat-cell>\r\n            </ng-container>\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row >\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>\r\n        <!-- this code is for pagignator -->\r\n        <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons class=\"table-active\"></mat-paginator>\r\n\r\n      </div>\r\n\r\n      <div class=\"w-100 float-left table-info px-4 py-2 text-right\">\r\n        <!-- This button will be used to add client into the database-->\r\n\r\n        <button  mat-button class=\"btn btn-info\" (click)=\"addProject()\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Add Project</button>\r\n      </div>\r\n"

/***/ }),

/***/ "./src/app/layout/project/project.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/project/project.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\n.container {\n  display: flex;\n  flex-direction: column; }\n/* Toolbar */\n.spacer {\n  flex: 1 1 auto; }\n/* Filter */\n.form {\n  min-height: 56px;\n  max-height: 56px;\n  display: flex;\n  align-items: center;\n  padding: 8px 24px 0;\n  font-size: 20px;\n  justify-content: space-between;\n  border-bottom: 1px solid transparent; }\n.mat-form-field {\n  font-size: 14px;\n  flex-grow: 1;\n  margin-top: 8px; }\n/* Mat table */\n.no-results {\n  display: flex;\n  justify-content: center;\n  padding: 14px;\n  font-size: 14px;\n  font-style: italic; }\n"

/***/ }),

/***/ "./src/app/layout/project/project.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/project/project.component.ts ***!
  \*****************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _Shared_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Shared/shared.service */ "./src/app/layout/Shared/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







//import { SnackBarComponentExampleComponent } from './snack-bar-component-example/snack-bar-component-example.component';
var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(http, storage, apiService, router, dialog) {
        this.http = http;
        this.storage = storage;
        this.apiService = apiService;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['ProjectID', 'Title', 'ClientName', 'DomainName', 'Description', 'actions'];
        this.disableforadd = true;
        this.RenderDataTable();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.project);
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    // addProject(project: Project) {
    ProjectComponent.prototype.addProject = function () {
        this.router.navigate(['./project/add']);
        // {path: 'project', component: ProjectComponent}
        // const dialogRef = this.dialog.open(AddComponent, {
        //     data: { issue: project }
        // });
        // dialogRef.afterClosed().subscribe(result => {
        //     if (result === 1) {
        //         this.refreshTable();
        //         this.RenderDataTable();
        //     }
        // });
    };
    ProjectComponent.prototype.RenderDataTable = function () {
        var _this = this;
        this.apiService.getAllProject()
            .subscribe(function (res) {
            _this.project = res;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.project);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            console.log("project" + JSON.stringify(_this.project));
        }, function (error) {
            console.log('There was an error while retrieving Posts !!!' + error);
        });
    };
    ProjectComponent.prototype.editproject = function (data) {
        this.router.navigate(['./project/edit', data.ProjectID]);
    };
    ProjectComponent.prototype.refreshTable = function () {
    };
    ProjectComponent.prototype.deleteproject = function (id, status) {
        var _this = this;
        // const dialogRef = this.dialog.open("Test", {
        //     width: '250px',
        //   //data: {name: this.name, animal: this.animal}
        //   });
        if (status = 1) {
            var Id = id;
            if (confirm('Are you sure to Activate this record ?' + id) === true) {
                this.apiService.DeletProject(id).subscribe(function (res) {
                    _this.RenderDataTable();
                });
            }
        }
        else {
            var Id = id;
            if (confirm('Are you sure to delete this record ?' + id) === true) {
                this.apiService.DeletProject(id).subscribe(function (res) {
                    _this.RenderDataTable();
                });
            }
        }
    };
    ProjectComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    };
    ProjectComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('filter'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProjectComponent.prototype, "filter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], ProjectComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], ProjectComponent.prototype, "sort", void 0);
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/layout/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/layout/project/project.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["SESSION_STORAGE"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], Object, _Shared_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/layout/project/project.module.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/project/project.module.ts ***!
  \**************************************************/
/*! exports provided: ProjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModule", function() { return ProjectModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _project_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-routing.module */ "./src/app/layout/project/project-routing.module.ts");
/* harmony import */ var _project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.component */ "./src/app/layout/project/project.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/layout/project/edit/edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _project_projenctModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../project/projenctModel */ "./src/app/layout/project/projenctModel.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add/add.component */ "./src/app/layout/project/add/add.component.ts");
/* harmony import */ var _snack_bar_component_example_snack_bar_component_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./snack-bar-component-example/snack-bar-component-example.component */ "./src/app/layout/project/snack-bar-component-example/snack-bar-component-example.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ProjectModule = /** @class */ (function () {
    function ProjectModule() {
    }
    ProjectModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _project_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjectRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _shared__WEBPACK_IMPORTED_MODULE_7__["PageHeaderModule"]
            ],
            declarations: [_project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_9__["AddComponent"], _snack_bar_component_example_snack_bar_component_example_component__WEBPACK_IMPORTED_MODULE_10__["SnackBarComponentExampleComponent"]],
            entryComponents: [_add_add_component__WEBPACK_IMPORTED_MODULE_9__["AddComponent"], _snack_bar_component_example_snack_bar_component_example_component__WEBPACK_IMPORTED_MODULE_10__["SnackBarComponentExampleComponent"]],
            providers: [_project_projenctModel__WEBPACK_IMPORTED_MODULE_8__["Project"]]
        })
    ], ProjectModule);
    return ProjectModule;
}());



/***/ }),

/***/ "./src/app/layout/project/projenctModel.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/project/projenctModel.ts ***!
  \*************************************************/
/*! exports provided: Issue, Project, Client, Domain, Resource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Issue", function() { return Issue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Domain", function() { return Domain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return Resource; });
var Issue = /** @class */ (function () {
    function Issue() {
    }
    return Issue;
}());

var Project = /** @class */ (function () {
    function Project() {
    }
    return Project;
}());

var Client = /** @class */ (function () {
    function Client() {
    }
    return Client;
}());

var Domain = /** @class */ (function () {
    function Domain() {
    }
    return Domain;
}());

var Resource = /** @class */ (function () {
    function Resource() {
    }
    return Resource;
}());



/***/ }),

/***/ "./src/app/layout/project/snack-bar-component-example/snack-bar-component-example.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/project/snack-bar-component-example/snack-bar-component-example.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Project {{data}} successfully!  \r\n</p>\r\n"

/***/ }),

/***/ "./src/app/layout/project/snack-bar-component-example/snack-bar-component-example.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/project/snack-bar-component-example/snack-bar-component-example.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/project/snack-bar-component-example/snack-bar-component-example.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/project/snack-bar-component-example/snack-bar-component-example.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SnackBarComponentExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarComponentExampleComponent", function() { return SnackBarComponentExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SnackBarComponentExampleComponent = /** @class */ (function () {
    function SnackBarComponentExampleComponent() {
        this.data = sessionStorage.getItem('message');
    }
    SnackBarComponentExampleComponent.prototype.ngOnInit = function () {
    };
    SnackBarComponentExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-snack-bar-component-example',
            template: __webpack_require__(/*! ./snack-bar-component-example.component.html */ "./src/app/layout/project/snack-bar-component-example/snack-bar-component-example.component.html"),
            styles: [__webpack_require__(/*! ./snack-bar-component-example.component.scss */ "./src/app/layout/project/snack-bar-component-example/snack-bar-component-example.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SnackBarComponentExampleComponent);
    return SnackBarComponentExampleComponent;
}());



/***/ })

}]);
//# sourceMappingURL=project-project-module.js.map