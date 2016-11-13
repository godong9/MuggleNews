module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/godong9/Desktop/Project/MuggleNews";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("@angular/core");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("@angular/router");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(27);
var router_1 = __webpack_require__(1);
var forms_1 = __webpack_require__(8);
var api_service_1 = __webpack_require__(6);
var MODULES = [
    // Do NOT include UniversalModule, HttpModule, or JsonpModule here
    common_1.CommonModule,
    router_1.RouterModule,
    forms_1.FormsModule,
    forms_1.ReactiveFormsModule
];
var PIPES = [];
var COMPONENTS = [];
var PROVIDERS = [
    api_service_1.ModelService,
    api_service_1.ApiService
];
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: MODULES.slice(),
            declarations: PIPES.concat(COMPONENTS),
            providers: PROVIDERS.slice(),
            exports: MODULES.concat(PIPES, COMPONENTS)
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;


/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("angular2-universal/node");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'about',
            template: 'About component'
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var api_service_1 = __webpack_require__(6);
var HomeComponent = (function () {
    function HomeComponent(model) {
        this.model = model;
        this.data = {};
        // we need the data synchronously for the client to set the server response
        // we create another method so we have more control for testing
        this.universalInit();
    }
    HomeComponent.prototype.universalInit = function () {
        var _this = this;
        this.model.get('/data.json').subscribe(function (data) {
            _this.data = data;
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            template: __webpack_require__(26)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof api_service_1.ModelService !== 'undefined' && api_service_1.ModelService) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
exports.HomeComponent = HomeComponent;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(28);
var Observable_1 = __webpack_require__(30);
__webpack_require__(32);
__webpack_require__(31);
__webpack_require__(35);
__webpack_require__(33);
__webpack_require__(34);
__webpack_require__(36);
var cache_service_1 = __webpack_require__(7);
function hashCode(str) {
    var hash = 0;
    if (str.length === 0) {
        return hash;
    }
    for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}
exports.hashCode = hashCode;
var ApiService = (function () {
    function ApiService(_http) {
        this._http = _http;
    }
    /**
     * whatever domain/feature method name
     */
    ApiService.prototype.get = function (url, options) {
        return this._http.get(url, options)
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            console.log('Error: ', err);
            return Observable_1.Observable.throw(err);
        });
    };
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], ApiService);
    return ApiService;
    var _a;
}());
exports.ApiService = ApiService;
var ModelService = (function () {
    function ModelService(_api, _cache) {
        this._api = _api;
        this._cache = _cache;
    }
    /**
     * whatever domain/feature method name
     */
    ModelService.prototype.get = function (url) {
        var _this = this;
        // you want to return the cache if there is a response in it. This would cache the first response so if your API isn't idempotent you probably want to remove the item from the cache after you use it. LRU of 1
        var key = url;
        if (this._cache.has(key)) {
            return Observable_1.Observable.of(this._cache.get(key));
        }
        // you probably shouldn't .share() and you should write the correct logic
        return this._api.get(url)
            .do(function (json) {
            _this._cache.set(key, json);
        })
            .share();
    };
    ModelService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [ApiService, (typeof (_a = typeof cache_service_1.CacheService !== 'undefined' && cache_service_1.CacheService) === 'function' && _a) || Object])
    ], ModelService);
    return ModelService;
    var _a;
}());
exports.ModelService = ModelService;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__(0);
var CacheService = (function () {
    function CacheService(_cache) {
        this._cache = _cache;
    }
    /**
     * check if there is a value in our store
     */
    CacheService.prototype.has = function (key) {
        var _key = this.normalizeKey(key);
        return this._cache.has(_key);
    };
    /**
     * store our state
     */
    CacheService.prototype.set = function (key, value) {
        var _key = this.normalizeKey(key);
        this._cache.set(_key, value);
    };
    /**
     * get our cached value
     */
    CacheService.prototype.get = function (key) {
        var _key = this.normalizeKey(key);
        return this._cache.get(_key);
    };
    /**
     * release memory refs
     */
    CacheService.prototype.clear = function () {
        this._cache.clear();
    };
    /**
     * convert to json for the client
     */
    CacheService.prototype.dehydrate = function () {
        var json = {};
        this._cache.forEach(function (value, key) { return json[key] = value; });
        return json;
    };
    /**
     * convert server json into out initial state
     */
    CacheService.prototype.rehydrate = function (json) {
        var _this = this;
        Object.keys(json).forEach(function (key) {
            var _key = _this.normalizeKey(key);
            var value = json[_key];
            _this._cache.set(_key, value);
        });
    };
    /**
     * allow JSON.stringify to work
     */
    CacheService.prototype.toJSON = function () {
        return this.dehydrate();
    };
    /**
     * convert numbers into strings
     */
    CacheService.prototype.normalizeKey = function (key) {
        if (core_1.isDevMode() && this._isInvalidValue(key)) {
            throw new Error('Please provide a valid key to save in the CacheService');
        }
        return key + '';
    };
    CacheService.prototype._isInvalidValue = function (key) {
        return key === null ||
            key === undefined ||
            key === 0 ||
            key === '' ||
            typeof key === 'boolean' ||
            Number.isNaN(key);
    };
    CacheService.KEY = 'CacheService';
    CacheService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject('LRU')), 
        __metadata('design:paramtypes', [Object])
    ], CacheService);
    return CacheService;
}());
exports.CacheService = CacheService;


/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("@angular/forms");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Fix Material Support
var platform_browser_1 = __webpack_require__(29);
function universalMaterialSupports(eventName) { return Boolean(this.isCustomEvent(eventName)); }
platform_browser_1.__platform_browser_private__.HammerGesturesPlugin.prototype.supports = universalMaterialSupports;
// End Fix Material Support
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(8);
var node_1 = __webpack_require__(3); // for AoT we need to manually split universal packages
var shared_module_1 = __webpack_require__(2);
var home_module_1 = __webpack_require__(22);
var about_module_1 = __webpack_require__(18);
var app_component_1 = __webpack_require__(20);
var app_routing_module_1 = __webpack_require__(19);
var cache_service_1 = __webpack_require__(7);
// import * as LRU from 'modern-lru';
function getLRU(lru) {
    // use LRU for node
    // return lru || new LRU(10);
    return lru || new Map();
}
exports.getLRU = getLRU;
var MainModule = (function () {
    function MainModule(cache) {
        var _this = this;
        this.cache = cache;
        /**
         * We need to use the arrow function here to bind the context as this is a gotcha
         * in Universal for now until it's fixed
         */
        this.universalDoDehydrate = function (universalCache) {
            universalCache[cache_service_1.CacheService.KEY] = JSON.stringify(_this.cache.dehydrate());
        };
        /**
         * Clear the cache after it's rendered
         */
        this.universalAfterDehydrate = function () {
            // comment out if LRU provided at platform level to be shared between each user
            _this.cache.clear();
        };
    }
    MainModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            declarations: [app_component_1.AppComponent],
            imports: [
                node_1.UniversalModule,
                forms_1.FormsModule,
                shared_module_1.SharedModule,
                home_module_1.HomeModule,
                about_module_1.AboutModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [
                { provide: 'isBrowser', useValue: node_1.isBrowser },
                { provide: 'isNode', useValue: node_1.isNode },
                {
                    provide: 'LRU',
                    useFactory: getLRU,
                    deps: [
                        [new core_1.Inject('LRU'), new core_1.Optional(), new core_1.SkipSelf()]
                    ]
                },
                cache_service_1.CacheService
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof cache_service_1.CacheService !== 'undefined' && cache_service_1.CacheService) === 'function' && _a) || Object])
    ], MainModule);
    return MainModule;
    var _a;
}());
exports.MainModule = MainModule;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
// Our API for demos only
var db_1 = __webpack_require__(24);
var cache_1 = __webpack_require__(23);
// you would use cookies/token etc
var USER_ID = 'f9d98cf1-1b96-464e-8755-bcc2a5c09077'; // hardcoded as an example
// Our API for demos only
function serverApi(req, res) {
    var key = USER_ID + '/data.json';
    var cache = cache_1.fakeDemoRedisCache.get(key);
    if (cache !== undefined) {
        console.log('/data.json Cache Hit');
        return res.json(cache);
    }
    console.log('/data.json Cache Miss');
    db_1.fakeDataBase.get()
        .then(function (data) {
        cache_1.fakeDemoRedisCache.set(key, data);
        return data;
    })
        .then(function (data) { return res.json(data); });
}
exports.serverApi = serverApi;


/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("angular2-express-engine");

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("angular2-universal-polyfills");

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = require("body-parser");

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = require("cookie-parser");

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(1);
var about_component_1 = __webpack_require__(4);
var AboutRoutingModule = (function () {
    function AboutRoutingModule() {
    }
    AboutRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'about', component: about_component_1.AboutComponent }
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutRoutingModule);
    return AboutRoutingModule;
}());
exports.AboutRoutingModule = AboutRoutingModule;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var shared_module_1 = __webpack_require__(2);
var about_component_1 = __webpack_require__(4);
var about_routing_module_1 = __webpack_require__(17);
var AboutModule = (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                about_routing_module_1.AboutRoutingModule
            ],
            declarations: [
                about_component_1.AboutComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutModule);
    return AboutModule;
}());
exports.AboutModule = AboutModule;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(1);
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: '/home', pathMatch: 'full' }
                ])
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            styles: [__webpack_require__(38)],
            template: __webpack_require__(39)
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(1);
var home_component_1 = __webpack_require__(5);
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'home', component: home_component_1.HomeComponent }
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());
exports.HomeRoutingModule = HomeRoutingModule;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var shared_module_1 = __webpack_require__(2);
var home_component_1 = __webpack_require__(5);
var home_routing_module_1 = __webpack_require__(21);
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                home_routing_module_1.HomeRoutingModule
            ],
            declarations: [
                home_component_1.HomeComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;


/***/ },
/* 23 */
/***/ function(module, exports) {

"use strict";
"use strict";
var _fakeLRUcount = 0;
exports.fakeDemoRedisCache = {
    _cache: {},
    get: function (key) {
        var cache = exports.fakeDemoRedisCache._cache[key];
        _fakeLRUcount++;
        if (_fakeLRUcount >= 10) {
            exports.fakeDemoRedisCache.clear();
            _fakeLRUcount = 0;
        }
        return cache;
    },
    set: function (key, data) { return exports.fakeDemoRedisCache._cache[key] = data; },
    clear: function () { return exports.fakeDemoRedisCache._cache = {}; }
};


/***/ },
/* 24 */
/***/ function(module, exports) {

"use strict";
"use strict";
// Our API for demos only
exports.fakeDataBase = {
    get: function () {
        var res = { data: 'This fake data came from the db on the server.' };
        return Promise.resolve(res);
    }
};


/***/ },
/* 25 */,
/* 26 */
/***/ function(module, exports) {

module.exports = "<div>\n    Test Home\n</div>"

/***/ },
/* 27 */
/***/ function(module, exports) {

module.exports = require("@angular/common");

/***/ },
/* 28 */
/***/ function(module, exports) {

module.exports = require("@angular/http");

/***/ },
/* 29 */
/***/ function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ },
/* 30 */
/***/ function(module, exports) {

module.exports = require("rxjs/Observable");

/***/ },
/* 31 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/observable/of");

/***/ },
/* 32 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/observable/throw");

/***/ },
/* 33 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/catch");

/***/ },
/* 34 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/do");

/***/ },
/* 35 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/map");

/***/ },
/* 36 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/share");

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {"use strict";
// the polyfills must be one of the first things imported in node.js.
// The only modules to be imported higher - node modules with es6-promise 3.x or other Promise polyfill dependency
// (rule of thumb: do it if you have zone.js exception that it has been overwritten)
// if you are including modules that modify Promise, such as NewRelic,, you must include them before polyfills
__webpack_require__(12);
// Fix Universal Style
var node_1 = __webpack_require__(3);
function renderComponentFix(componentProto) {
    return new node_1.NodeDomRenderer(this, componentProto, this._animationDriver);
}
node_1.NodeDomRootRenderer.prototype.renderComponent = renderComponentFix;
// End Fix Universal Style
var path = __webpack_require__(16);
var express = __webpack_require__(15);
var bodyParser = __webpack_require__(13);
var cookieParser = __webpack_require__(14);
// Angular 2
var core_1 = __webpack_require__(0);
// Angular 2 Universal
var angular2_express_engine_1 = __webpack_require__(11);
// App
var app_node_module_1 = __webpack_require__(9);
// enable prod for faster renders
core_1.enableProdMode();
var app = express();
var ROOT = path.join(path.resolve(__dirname, '..'));
// Express View
app.engine('.html', angular2_express_engine_1.createEngine({
    precompile: true,
    ngModule: app_node_module_1.MainModule,
    providers: []
}));
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname);
app.set('view engine', 'html');
app.use(cookieParser('Angular 2 Universal'));
app.use(bodyParser.json());
// Serve static files
app.use('/assets', express.static(path.join(__dirname, 'assets'), { maxAge: 30 }));
app.use(express.static(path.join(ROOT, 'dist/client'), { index: false }));
var api_1 = __webpack_require__(10);
// Our API for demos only
app.get('/data.json', api_1.serverApi);
function ngApp(req, res) {
    res.render('index', {
        req: req,
        res: res,
        preboot: false,
        baseUrl: '/',
        requestUrl: req.originalUrl,
        originUrl: 'http://localhost:3000'
    });
}
// Routes with html5pushstate
// ensure routes match client-side-app
app.get('/', ngApp);
app.get('/about', ngApp);
app.get('/about/*', ngApp);
app.get('/home', ngApp);
app.get('/home/*', ngApp);
app.get('*', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var pojo = { status: 404, message: 'No Content' };
    var json = JSON.stringify(pojo, null, 2);
    res.status(404).send(json);
});
// Server
var server = app.listen(app.get('port'), function () {
    console.log("Listening on: http://localhost:" + server.address().port);
});

/* WEBPACK VAR INJECTION */}.call(exports, "src"))

/***/ },
/* 38 */
/***/ function(module, exports) {

module.exports = ".active {\n    background-color: gray;\n    color: white;\n}"

/***/ },
/* 39 */
/***/ function(module, exports) {

module.exports = "<nav>\n    <a routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\n    <a routerLink=\"/about\" routerLinkActive=\"active\">About</a>\n</nav>\n\n<p>Hello Angular Universal App</p>\n\n<router-outlet></router-outlet>"

/***/ }
/******/ ]);