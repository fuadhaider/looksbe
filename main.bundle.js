webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_main_home_home_component__ = __webpack_require__("../../../../../src/app/section/main/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__section_main_trend_trend_component__ = __webpack_require__("../../../../../src/app/section/main/trend/trend.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__section_main_explore_explore_component__ = __webpack_require__("../../../../../src/app/section/main/explore/explore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__section_main_shop_shop_component__ = __webpack_require__("../../../../../src/app/section/main/shop/shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__section_main_detail_detail_component__ = __webpack_require__("../../../../../src/app/section/main/detail/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__section_main_sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/section/main/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__section_main_about_about_component__ = __webpack_require__("../../../../../src/app/section/main/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__section_main_home_home_component__["a" /* HomeComponent */] },
    { path: 'trend', component: __WEBPACK_IMPORTED_MODULE_3__section_main_trend_trend_component__["a" /* TrendComponent */] },
    { path: 'explore', component: __WEBPACK_IMPORTED_MODULE_4__section_main_explore_explore_component__["a" /* ExploreComponent */] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_6__section_main_detail_detail_component__["a" /* DetailComponent */] },
    { path: 'shop', component: __WEBPACK_IMPORTED_MODULE_5__section_main_shop_shop_component__["a" /* ShopComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_7__section_main_sign_up_sign_up_component__["a" /* SignUpComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_8__section_main_about_about_component__["a" /* AboutComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\n      rel=\"stylesheet\">\n<div>\n  <app-header></app-header>\n  <app-section class=\"small-display big-display\"></app-section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  display: -moz-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  font: 3vh \"Trebuchet MS\", arial, sans-serif;\n  color: darkslategrey; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_expansion__ = __webpack_require__("../../../material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__section_section_component__ = __webpack_require__("../../../../../src/app/section/section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__section_nav_nav_component__ = __webpack_require__("../../../../../src/app/section/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__section_main_main_component__ = __webpack_require__("../../../../../src/app/section/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__section_aside_aside_component__ = __webpack_require__("../../../../../src/app/section/aside/aside.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__section_main_content_service__ = __webpack_require__("../../../../../src/app/section/main/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__section_main_home_home_component__ = __webpack_require__("../../../../../src/app/section/main/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__section_main_trend_trend_component__ = __webpack_require__("../../../../../src/app/section/main/trend/trend.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__section_main_explore_explore_component__ = __webpack_require__("../../../../../src/app/section/main/explore/explore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__section_main_shop_shop_component__ = __webpack_require__("../../../../../src/app/section/main/shop/shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__section_main_more_more_component__ = __webpack_require__("../../../../../src/app/section/main/more/more.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__section_main_detail_detail_component__ = __webpack_require__("../../../../../src/app/section/main/detail/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__section_aside_ad_directive__ = __webpack_require__("../../../../../src/app/section/aside/ad.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__section_aside_ad_banner_ad_banner_component__ = __webpack_require__("../../../../../src/app/section/aside/ad-banner/ad-banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__section_aside_web_design_component__ = __webpack_require__("../../../../../src/app/section/aside/web-design.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__section_aside_front_end_dev_component__ = __webpack_require__("../../../../../src/app/section/aside/front-end-dev.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__section_aside_back_end_dev_component__ = __webpack_require__("../../../../../src/app/section/aside/back-end-dev.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__section_aside_soft_dev_component__ = __webpack_require__("../../../../../src/app/section/aside/soft-dev.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__section_aside_ad_service__ = __webpack_require__("../../../../../src/app/section/aside/ad.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__section_main_sidenav_sidenav_component__ = __webpack_require__("../../../../../src/app/section/main/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__section_main_header_nav_service__ = __webpack_require__("../../../../../src/app/section/main/header-nav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__section_main_topnav_topnav_component__ = __webpack_require__("../../../../../src/app/section/main/topnav/topnav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__section_main_header_topnav_service__ = __webpack_require__("../../../../../src/app/section/main/header-topnav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__section_main_sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/section/main/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__section_main_about_about_component__ = __webpack_require__("../../../../../src/app/section/main/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_13__section_section_component__["a" /* SectionComponent */],
                __WEBPACK_IMPORTED_MODULE_14__section_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_15__section_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_16__section_aside_aside_component__["a" /* AsideComponent */],
                __WEBPACK_IMPORTED_MODULE_18__section_main_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__section_main_trend_trend_component__["a" /* TrendComponent */],
                __WEBPACK_IMPORTED_MODULE_20__section_main_explore_explore_component__["a" /* ExploreComponent */],
                __WEBPACK_IMPORTED_MODULE_21__section_main_shop_shop_component__["a" /* ShopComponent */],
                __WEBPACK_IMPORTED_MODULE_22__section_main_more_more_component__["a" /* MoreComponent */],
                __WEBPACK_IMPORTED_MODULE_23__section_main_detail_detail_component__["a" /* DetailComponent */],
                __WEBPACK_IMPORTED_MODULE_24__section_aside_ad_directive__["a" /* AdDirective */],
                __WEBPACK_IMPORTED_MODULE_25__section_aside_ad_banner_ad_banner_component__["a" /* AdBannerComponent */],
                __WEBPACK_IMPORTED_MODULE_26__section_aside_web_design_component__["a" /* WebDesignComponent */],
                __WEBPACK_IMPORTED_MODULE_27__section_aside_front_end_dev_component__["a" /* FrontEndDevComponent */],
                __WEBPACK_IMPORTED_MODULE_28__section_aside_back_end_dev_component__["a" /* BackEndDevComponent */],
                __WEBPACK_IMPORTED_MODULE_29__section_aside_soft_dev_component__["a" /* SoftDevComponent */],
                __WEBPACK_IMPORTED_MODULE_31__section_main_sidenav_sidenav_component__["a" /* SidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_33__section_main_topnav_topnav_component__["a" /* TopnavComponent */],
                __WEBPACK_IMPORTED_MODULE_35__section_main_sign_up_sign_up_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_36__section_main_about_about_component__["a" /* AboutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_sidenav__["b" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_input__["a" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_expansion__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_17__section_main_content_service__["a" /* ContentService */], __WEBPACK_IMPORTED_MODULE_30__section_aside_ad_service__["a" /* AdService */], __WEBPACK_IMPORTED_MODULE_32__section_main_header_nav_service__["a" /* HeaderNavService */], __WEBPACK_IMPORTED_MODULE_34__section_main_header_topnav_service__["a" /* HeaderTopnavService */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_26__section_aside_web_design_component__["a" /* WebDesignComponent */], __WEBPACK_IMPORTED_MODULE_27__section_aside_front_end_dev_component__["a" /* FrontEndDevComponent */], __WEBPACK_IMPORTED_MODULE_28__section_aside_back_end_dev_component__["a" /* BackEndDevComponent */], __WEBPACK_IMPORTED_MODULE_29__section_aside_soft_dev_component__["a" /* SoftDevComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/content-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentData; });
var ContentData = [
    { id: 1, name: 'Carnival', category: 'explore', path: '../assets/carnival.jpg' },
    { id: 2, name: 'Fashion Set', category: 'shop', path: '../assets/fashion-set-01.jpg' },
    { id: 3, name: 'Blouses on Rail', category: 'shop', path: '../assets/blouses-on-rail.jpg' },
    { id: 4, name: 'Blue Shoe', category: 'trend', path: '../assets/blue-shoe.jpg' },
    { id: 5, name: 'Blue Suit Tie', category: 'trend', path: '../assets/blue-suit-tie.jpg' },
    { id: 6, name: 'Jeans with Belt', category: 'trend', path: '../assets/belt-jeans.jpg' },
    { id: 7, name: 'Colorful Cotton', category: 'shop', path: '../assets/colourful-cotton.jpg' },
    { id: 8, name: 'Colorful Jacket', category: 'explore', path: '../assets/colourful-jacket.jpg' },
    { id: 9, name: 'Curley Hair', category: 'trend', path: '../assets/curley-hair.jpg' },
    { id: 10, name: 'Denim Jacket', category: 'trend', path: '../assets/denim-jacket.jpg' },
    { id: 11, name: 'Disco Hat', category: 'explore', path: '../assets/disco-hat.png' },
    { id: 12, name: 'Egyptian Robe', category: 'explore', path: '../assets/egyptian.jpg' },
    { id: 13, name: 'Blazer', category: 'trend', path: '../assets/blazer.jpg' },
    { id: 14, name: 'Fashion Set', category: 'shop', path: '../assets/fashion-set-02.jpg' },
    { id: 15, name: 'Fur Jacket', category: 'trend', path: '../assets/fur-jacket.jpg' },
    { id: 16, name: 'Grey Jacket Tie', category: 'trend', path: '../assets/grey-jacket-tie.jpg' },
    { id: 17, name: 'Hat', category: 'trend', path: '../assets/hat.png' },
    { id: 18, name: 'Jeans Zipper', category: 'shop', path: '../assets/jeans-zipper.jpg' },
    { id: 19, name: 'Jeans', category: 'shop', path: '../assets/jeans.jpg' },
    { id: 20, name: 'Jumper Rail', category: 'shop', path: '../assets/jumpers-rail.jpg' },
    { id: 21, name: 'Pink Hair', category: 'explore', path: '../assets/pink-hair.jpg' },
    { id: 22, name: 'Pocket Watch', category: 'explore', path: '../assets/pocket-watch-02.jpg' },
    { id: 23, name: 'Pocket Watch', category: 'explore', path: '../assets/pocket-watch.jpg' },
    { id: 24, name: 'Rolex', category: 'shop', path: '../assets/rolex.jpg' },
    { id: 25, name: 'Round Glasses', category: 'trend', path: '../assets/round-glasses.jpg' },
    { id: 26, name: 'Scarf Railing', category: 'shop', path: '../assets/scarf-railing.jpg' },
    { id: 27, name: 'Shirt Railing', category: 'shop', path: '../assets/shirt-railing.jpg' },
    { id: 28, name: 'Shirt-sleeves', category: 'shop', path: '../assets/shirt-sleeves.jpg' },
    { id: 29, name: 'Shirt Bow', category: 'shop', path: '../assets/shirts-bow.jpg' },
    { id: 30, name: 'Boot', category: 'explore', path: '../assets/shoes-boot.jpg' },
    { id: 31, name: 'Silk Ties', category: 'shop', path: '../assets/silk-tie-shop.jpg' },
    { id: 32, name: 'Skirts', category: 'explore', path: '../assets/skirts.jpg' },
    { id: 33, name: 'Shades', category: 'trend', path: '../assets/smiling-sunglasses.jpg' },
    { id: 34, name: 'Store', category: 'shop', path: '../assets/store-clothes.jpg' },
    { id: 35, name: 'Hat', category: 'explore', path: '../assets/strohute.jpg' },
    { id: 36, name: 'Denim Shirt', category: 'trend', path: '../assets/stylish-boy-woods.jpg' },
    { id: 37, name: 'Suits on Rail', category: 'shop', path: '../assets/suits.jpeg' },
    { id: 38, name: 'Sunglasses', category: 'explore', path: '../assets/sunglasses-focus.jpg' },
    { id: 39, name: 'Pink Bow', category: 'explore', path: '../assets/tie-pink.jpg' },
    { id: 40, name: 'Red Tie', category: 'explore', path: '../assets/tie-tailor.jpg' },
    { id: 41, name: 'Tops Shorts', category: 'trend', path: '../assets/tops-shorts.jpg' },
    { id: 42, name: 'T-shirt Shop', category: 'shop', path: '../assets/tshirt-shop.jpg' },
    { id: 43, name: 'Drindl', category: 'explore', path: '../assets/turkish.jpg' },
    { id: 44, name: 'Wedding Dresses', category: 'explore', path: '../assets/wedding-dresses.jpg' },
    { id: 45, name: 'White Fork', category: 'explore', path: '../assets/white-frok.jpg' },
    { id: 46, name: 'Red Shoes', category: 'trend', path: '../assets/womens-shoes-red.jpg' },
    { id: 47, name: 'Stripes', category: 'explore', path: '../assets/wood-dress.jpg' },
    { id: 48, name: 'Sunglasses', category: 'shop', path: '../assets/wood-sunglasses.jpg' },
    { id: 49, name: 'Wool Balls', category: 'shop', path: '../assets/wool-balls.jpg' },
    { id: 50, name: 'Accesories Shop', category: 'shop', path: '../assets/bright-shop.jpeg' },
    { id: 51, name: 'Converse Shades', category: 'trend', path: '../assets/converse-shades.jpg' },
    { id: 52, name: 'Converse', category: 'trend', path: '../assets/converse.jpg' },
    { id: 53, name: 'Dark Tattoo', category: 'explore', path: '../assets/dark-tattoo.jpeg' },
    { id: 54, name: 'Demin Fabric', category: 'explore', path: '../assets/denim-fabric.jpg' },
    { id: 55, name: 'Green Saree', category: 'explore', path: '../assets/indian-saree.jpeg' },
    { id: 56, name: 'Jeans Button', category: 'trend', path: '../assets/jeans-button.jpg' },
    { id: 57, name: 'Kimono', category: 'explore', path: '../assets/kimono.jpeg' },
    { id: 58, name: 'Business Shoe', category: 'trend', path: '../assets/leather-shoes-toe.jpg' },
    { id: 59, name: 'Makeup palette', category: 'shop', path: '../assets/makeup-palette.jpeg' },
    { id: 60, name: 'Man in Black', category: 'trend', path: '../assets/man-in-black.jpeg' },
    { id: 61, name: 'Masai tribe', category: 'explore', path: '../assets/masai-people.jpeg' },
    { id: 62, name: 'Nail Polish', category: 'trend', path: '../assets/nail-polish-coffee.jpeg' },
    { id: 63, name: 'Nail Polish', category: 'shop', path: '../assets/nail-polishes.jpeg' },
    { id: 64, name: 'Heels and Bag', category: 'shop', path: '../assets/shop-shelf.jpeg' },
    { id: 65, name: 'Shopaholic', category: 'shop', path: '../assets/shopaholic.jpeg' },
    { id: 66, name: 'Trainers', category: 'trend', path: '../assets/sports-shoes.jpg' },
    { id: 49, name: 'Red Hijab', category: 'explore', path: '../assets/red-hijab.jpg' }
];


/***/ }),

/***/ "../../../../../src/app/header/_header-config.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"flex-header\">\n  <a routerLink=\"/about\">looksbe</a>\n  <a (click)=\"showTopnav('search')\" id=\"search-icon\" class=\"material-icons\" data-toggle=\"tooltip\"\n    data-placement=\"auto\" title=\"Search\">&#xe8b6;</a>\n  <a (click)=\"showSidenav('message')\" id=\"message-icon\" class=\"material-icons\" data-toggle=\"tooltip\"\n    data-placement=\"auto\" title=\"Message\">&#xe0ca;</a>\n  <a (click)=\"showSidenav('notification')\" id=\"notification-icon\" class=\"material-icons\" data-toggle=\"tooltip\"\n    data-placement=\"auto\" title=\"Notification\">notifications</a>\n  <a (click)=\"showTopnav('login')\" id=\"login-icon\" class=\"material-icons\" data-toggle=\"tooltip\"\n    data-placement=\"auto\" title=\"Login\">&#xe7fd;</a>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header#flex-header {\n  background: #95a586;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  display: -moz-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-align-items: center;\n  padding: 0 2vw; }\n  header#flex-header a {\n    text-decoration: none;\n    color: white;\n    font-size: 4.5vh;\n    margin: 0 0.5vh; }\n  header#flex-header a:first-child {\n    margin-right: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__section_main_header_nav_service__ = __webpack_require__("../../../../../src/app/section/main/header-nav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_main_header_topnav_service__ = __webpack_require__("../../../../../src/app/section/main/header-topnav.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(headerNavService, HeaderTopnavService) {
        this.headerNavService = headerNavService;
        this.HeaderTopnavService = HeaderTopnavService;
    }
    HeaderComponent.prototype.showSidenav = function (which) {
        this.headerNavService.storeSidenav(which);
    };
    HeaderComponent.prototype.showTopnav = function (which) {
        this.HeaderTopnavService.storeTopnav(which);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.scss"), __webpack_require__("../../../../../src/app/header/_header-config.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__section_main_header_nav_service__["a" /* HeaderNavService */],
            __WEBPACK_IMPORTED_MODULE_2__section_main_header_topnav_service__["a" /* HeaderTopnavService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/section/aside/ad-banner/ad-banner.component.html":
/***/ (function(module, exports) {

module.exports = "<span>ad</span>\n<div class=\"ad-banner\">\n  <ng-template ad-host></ng-template>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/section/aside/ad-banner/ad-banner.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span {\n  color: grey; }\n\ndiv {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/section/aside/ad-banner/ad-banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdBannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ad_directive__ = __webpack_require__("../../../../../src/app/section/aside/ad.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdBannerComponent = (function () {
    function AdBannerComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.currentAddIndex = -1;
    }
    AdBannerComponent.prototype.ngAfterViewInit = function () {
        this.loadComponent();
        this.getAds();
    };
    AdBannerComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    AdBannerComponent.prototype.loadComponent = function () {
        this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
        var adItem = this.ads[this.currentAddIndex];
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
        var viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = adItem.data;
    };
    AdBannerComponent.prototype.getAds = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.loadComponent();
        }, 6000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], AdBannerComponent.prototype, "ads", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__ad_directive__["a" /* AdDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__ad_directive__["a" /* AdDirective */])
    ], AdBannerComponent.prototype, "adHost", void 0);
    AdBannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ad-banner',
            template: __webpack_require__("../../../../../src/app/section/aside/ad-banner/ad-banner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/section/aside/ad-banner/ad-banner.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */]])
    ], AdBannerComponent);
    return AdBannerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/section/aside/ad-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdItem; });
var AdItem = (function () {
    function AdItem(component, data) {
        this.component = component;
        this.data = data;
    }
    return AdItem;
}());



/***/ }),

/***/ "../../../../../src/app/section/aside/ad.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdDirective = (function () {
    function AdDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    AdDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[ad-host]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewContainerRef */]])
    ], AdDirective);
    return AdDirective;
}());



/***/ }),

/***/ "../../../../../src/app/section/aside/ad.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__web_design_component__ = __webpack_require__("../../../../../src/app/section/aside/web-design.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__front_end_dev_component__ = __webpack_require__("../../../../../src/app/section/aside/front-end-dev.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__back_end_dev_component__ = __webpack_require__("../../../../../src/app/section/aside/back-end-dev.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__soft_dev_component__ = __webpack_require__("../../../../../src/app/section/aside/soft-dev.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ad_item__ = __webpack_require__("../../../../../src/app/section/aside/ad-item.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AdService = (function () {
    function AdService() {
    }
    AdService.prototype.getAds = function () {
        return [
            new __WEBPACK_IMPORTED_MODULE_5__ad_item__["a" /* AdItem */](__WEBPACK_IMPORTED_MODULE_1__web_design_component__["a" /* WebDesignComponent */], { name: 'Web Design',
                // description: 'For beautiful websites',
                path1: '../../assets/photoshop-logo.png',
                link1: 'https://www.adobe.com/uk/products/photoshop.html',
                path2: '../../assets/illustrator-logo.png',
                link2: 'https://www.adobe.com/uk/products/illustrator.html',
                path3: '../../assets/google-web-designer-logo.png',
                link3: 'https://www.google.co.uk/webdesigner/'
            }),
            new __WEBPACK_IMPORTED_MODULE_5__ad_item__["a" /* AdItem */](__WEBPACK_IMPORTED_MODULE_2__front_end_dev_component__["a" /* FrontEndDevComponent */], { name: 'Front End',
                // description: 'Only names for web face',
                path1: '../../assets/html5-logo.png',
                link1: 'https://www.w3.org/html/',
                path2: '../../assets/css3-logo.png',
                link2: 'https://www.w3.org/Style/CSS/Overview.en.html',
                path3: '../../assets/javascript-logo.png',
                link3: 'https://www.javascript.com/'
            }),
            new __WEBPACK_IMPORTED_MODULE_5__ad_item__["a" /* AdItem */](__WEBPACK_IMPORTED_MODULE_3__back_end_dev_component__["a" /* BackEndDevComponent */], { name: 'Back End',
                // description: 'The scene behind the curtain',
                path1: '../../assets/php-logo.png',
                link1: 'https://secure.php.net/',
                path2: '../../assets/c-sharp-logo.png',
                link2: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
                path3: '../../assets/mysql-logo.png',
                link3: 'https://www.mysql.com/'
            }),
            new __WEBPACK_IMPORTED_MODULE_5__ad_item__["a" /* AdItem */](__WEBPACK_IMPORTED_MODULE_4__soft_dev_component__["a" /* SoftDevComponent */], { name: 'Extras',
                // description: 'Most popular tools',
                path1: '../../assets/angular-logo.png',
                link1: 'https://angular.io/',
                path2: '../../assets/github-logo.png',
                link2: 'https://github.com/',
                path3: '../../assets/drupal-logo.png',
                link3: 'https://www.drupal.org/'
            }),
        ];
    };
    AdService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], AdService);
    return AdService;
}());



/***/ }),

/***/ "../../../../../src/app/section/aside/aside.component.html":
/***/ (function(module, exports) {

module.exports = "<aside>\n  <app-ad-banner [ads]=\"ads\"></app-ad-banner>\n</aside>\n"

/***/ }),

/***/ "../../../../../src/app/section/aside/aside.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "aside {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  display: -moz-flex;\n  background: #c99d9d;\n  height: 100%;\n  padding: 0 5%; }\n  aside app-ad-banner {\n    margin: 0 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/section/aside/aside.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ad_service__ = __webpack_require__("../../../../../src/app/section/aside/ad.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AsideComponent = (function () {
    function AsideComponent(adService) {
        this.adService = adService;
    }
    AsideComponent.prototype.ngOnInit = function () {
        this.ads = this.adService.getAds();
    };
    AsideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-aside',
            template: __webpack_require__("../../../../../src/app/section/aside/aside.component.html"),
            styles: [__webpack_require__("../../../../../src/app/section/aside/aside.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ad_service__["a" /* AdService */]])
    ], AsideComponent);
    return AsideComponent;
}());



/***/ }),

/***/ "../../../../../src/app/section/aside/back-end-dev.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackEndDevComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BackEndDevComponent = (function () {
    function BackEndDevComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], BackEndDevComponent.prototype, "data", void 0);
    BackEndDevComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n    <div>\n      <span>Learn</span>\n      <span>{{data.name}}</span>\n      <a href=\"{{data.link1}}\" target=\"_blank\"><img src=\"{{data.path1}}\"></a>\n      <a href=\"{{data.link2}}\" target=\"_blank\"><img src=\"{{data.path2}}\"></a>\n      <a href=\"{{data.link3}}\" target=\"_blank\"><img src=\"{{data.path3}}\"></a>\n      <span>{{data.description}}</span>\n    </div>\n  ",
            styles: ['img {width: 4em;}']
        })
    ], BackEndDevComponent);
    return BackEndDevComponent;
}());



/***/ }),

/***/ "../../../../../src/app/section/aside/front-end-dev.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrontEndDevComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FrontEndDevComponent = (function () {
    function FrontEndDevComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], FrontEndDevComponent.prototype, "data", void 0);
    FrontEndDevComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n    <div>\n      <span>Learn</span>\n      <span>{{data.name}}</span>\n      <a href=\"{{data.link1}}\" target=\"_blank\"><img src=\"{{data.path1}}\"></a>\n      <a href=\"{{data.link2}}\" target=\"_blank\"><img src=\"{{data.path2}}\"></a>\n      <a href=\"{{data.link3}}\" target=\"_blank\"><img src=\"{{data.path3}}\"></a>\n      <span>{{data.description}}</span>\n    </div>\n  ",
            styles: ['img {width: 4em;}']
        })
    ], FrontEndDevComponent);
    return FrontEndDevComponent;
}());



/***/ }),

/***/ "../../../../../src/app/section/aside/soft-dev.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoftDevComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SoftDevComponent = (function () {
    function SoftDevComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SoftDevComponent.prototype, "data", void 0);
    SoftDevComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n    <div>\n      <span>Learn</span>\n      <span>{{data.name}}</span>\n      <a href=\"{{data.link1}}\" target=\"_blank\"><img src=\"{{data.path1}}\"></a>\n      <a href=\"{{data.link2}}\" target=\"_blank\"><img src=\"{{data.path2}}\"></a>\n      <a href=\"{{data.link3}}\" target=\"_blank\"><img src=\"{{data.path3}}\"></a>\n      <span>{{data.description}}</span>\n    </div>\n  ",
            styles: ['img {width: 4em;}']
        })
    ], SoftDevComponent);
    return SoftDevComponent;
}());



/***/ }),

/***/ "../../../../../src/app/section/aside/web-design.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebDesignComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebDesignComponent = (function () {
    function WebDesignComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], WebDesignComponent.prototype, "data", void 0);
    WebDesignComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n    <div>\n      <span>Learn</span>\n      <span>{{data.name}}</span>\n      <a href=\"{{data.link1}}\" target=\"_blank\"><img src=\"{{data.path1}}\"></a>\n      <a href=\"{{data.link2}}\" target=\"_blank\"><img src=\"{{data.path2}}\"></a>\n      <a href=\"{{data.link3}}\" target=\"_blank\"><img src=\"{{data.path3}}\"></a>\n    </div>\n  ",
            styles: ['img {width: 4em;}']
        })
    ], WebDesignComponent);
    return WebDesignComponent;
}());



/***/ }),

/***/ "../../../../../src/app/section/main/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <!-- <img mat-card-avatar src=\"../../../../assets/HTML5.png\"> -->\n    <mat-card-title-group>\n      <mat-card-title><h1>About Looksbe</h1></mat-card-title>\n      <mat-card-subtitle>be by looks</mat-card-subtitle>\n      <!-- <img src=\"../../../../assets/css3.png\"> -->\n    </mat-card-title-group>\n  </mat-card-header>\n\n  <mat-card-content>\n    <br><p>Looksbe aims to be an inspiration to all fashion enthusiasts. Here,\n    people will discover, share and trade fashion within a like-minded\n    community.</p>\n    <h3>Technical Specification:</h3>\n    <ul>\n      <li>Angular 5</li>\n      <li>TypeScript</li>\n      <li>CSS Flexbox</li>\n    </ul><br>\n  </mat-card-content>\n  <div>\n    <img src=\"../../../../assets/group-body-photo.jpeg\">\n  </div>\n  <!-- <mat-card-footer>\t</mat-card-footer> -->\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/section/main/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-card {\n  font: 3vh \"Trebuchet MS\", arial, sans-serif; }\n  mat-card mat-card-header {\n    margin: 1%;\n    padding: 1%;\n    box-shadow: 1px 1px 5px 1px lightgrey;\n    border-radius: 15px; }\n    mat-card mat-card-header mat-card-title-group {\n      margin: auto;\n      text-align: center; }\n  mat-card mat-card-content {\n    margin: 1%;\n    padding: 1%;\n    box-shadow: 1px 1px 5px 1px lightgrey;\n    border-radius: 15px; }\n  mat-card div {\n    padding: 1%;\n    margin: 1%;\n    box-shadow: 1px 1px 5px 1px lightgrey;\n    border-radius: 15px; }\n    mat-card div img {\n      width: 100%;\n      border-radius: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/section/main/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/section/main/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/section/main/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/section/main/content.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_data__ = __webpack_require__("../../../../../src/app/content-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContentService = (function () {
    function ContentService() {
    }
    ContentService.prototype.sendAll = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_2__content_data__["a" /* ContentData */]);
    };
    ContentService.prototype.sendContent = function (category) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_2__content_data__["a" /* ContentData */].filter(function (content) { return content.category === category; }));
    };
    ContentService.prototype.sendDetail = function (id) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_2__content_data__["a" /* ContentData */].find(function (detail) { return detail.id === id; }));
    };
    ContentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ContentService);
    return ContentService;
}());



/***/ }),

/***/ "../../../../../src/app/section/main/detail/detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <img src=\"{{detail.path}}\" alt=\"\"><br>\n  {{detail.name}}\n</div>\n<button (click)=\"goBack()\">Back</button>\n"

/***/ }),

/***/ "../../../../../src/app/section/main/detail/detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n  margin: 5%; }\n  div img {\n    width: 100%; }\n\nbutton {\n  margin: 0 5% 5%;\n  width: 100px;\n  height: 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/section/main/detail/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__content_service__ = __webpack_require__("../../../../../src/app/section/main/content.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailComponent = (function () {
    function DetailComponent(route, location, contentService) {
        this.route = route;
        this.location = location;
        this.contentService = contentService;
    }
    DetailComponent.prototype.ngOnInit = function () {
        this.getDetail();
    };
    DetailComponent.prototype.getDetail = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.contentService.sendDetail(id).subscribe(function (detail) { return _this.detail = detail; });
    };
    DetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    DetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-detail',
            template: __webpack_require__("../../../../../src/app/section/main/detail/detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/section/main/detail/detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_3__content_service__["a" /* ContentService */]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/section/main/explore/explore.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <a *ngFor=\"let explore of exploreArray\" routerLink=\"/detail/{{explore.id}}\">\n    <img src=\"{{explore.path}}\" alt=\"{{explore.name}}\"><br>\n    {{explore.name}}\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/section/main/explore/explore.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n  -webkit-column-count: 2;\n          column-count: 2;\n  -webkit-column-gap: .5em;\n          column-gap: .5em;\n  margin: .5em; }\n  div a {\n    display: inline-block;\n    margin: auto;\n    border: 1px solid lightgray;\n    border-radius: 15px;\n    box-shadow: 1px 1px 3px lightgrey;\n    text-align: center;\n    text-decoration: none;\n    font: 3vh \"Trebuchet MS\", arial, sans-serif;\n    color: darkslategrey;\n    margin: 0 0 1em;\n    width: 100%;\n    overflow: hidden; }\n    div a img {\n      width: 100%; }\n\n@media all and (min-width: 599px) {\n  div {\n    -webkit-column-count: 3;\n            column-count: 3; } }\n\n@media all and (min-width: 960px) {\n  div {\n    -webkit-column-count: 4;\n            column-count: 4; } }\n\n@media all and (min-width: 1920px) {\n  div {\n    -webkit-column-count: 5;\n            column-count: 5; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/section/main/explore/explore.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExploreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__content_service__ = __webpack_require__("../../../../../src/app/section/main/content.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExploreComponent = (function () {
    function ExploreComponent(contentService) {
        this.contentService = contentService;
        this.tag = 'explore';
    }
    ExploreComponent.prototype.ngOnInit = function () {
        this.getExplore();
    };
    ExploreComponent.prototype.getExplore = function () {
        var _this = this;
        this.contentService.sendContent(this.tag).subscribe(function (exploreArray) {
            return _this.exploreArray = exploreArray;
        });
    };
    ExploreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-explore',
            template: __webpack_require__("../../../../../src/app/section/main/explore/explore.component.html"),
            styles: [__webpack_require__("../../../../../src/app/section/main/explore/explore.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__content_service__["a" /* ContentService */]])
    ], ExploreComponent);
    return ExploreComponent;
}());



/***/ }),

/***/ "../../../../../src/app/section/main/header-nav.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderNavService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderNavService = (function () {
    function HeaderNavService() {
        this.sidenav = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    HeaderNavService.prototype.storeSidenav = function (which) {
        this.sidenav.next(which);
    };
    //  get events$ () {
    //   return this.subject.asObservable();
    // }
    HeaderNavService.prototype.toggleSidenav = function () {
        return this.sidenav.asObservable();
    };
    HeaderNavService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], HeaderNavService);
    return HeaderNavService;
}());



/***/ }),

/***/ "../../../../../src/app/section/main/header-topnav.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderTopnavService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderTopnavService = (function () {
    function HeaderTopnavService() {
        this.topnav = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    HeaderTopnavService.prototype.storeTopnav = function (which) {
        this.topnav.next(which);
    };
    HeaderTopnavService.prototype.toggleTopnav = function () {
        return this.topnav.asObservable();
    };
    HeaderTopnavService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], HeaderTopnavService);
    return HeaderTopnavService;
}());



/***/ }),

/***/ "../../../../../src/app/section/main/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <a *ngFor=\"let home of homeArray\" routerLink=\"/detail/{{home.id}}\">\n    <img src=\"{{home.path}}\" alt=\"{{home.name}}\"><br>\n    {{home.name}}\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/section/main/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n  -webkit-column-count: 2;\n          column-count: 2;\n  -webkit-column-gap: .5em;\n          column-gap: .5em;\n  margin: .5em; }\n  div a {\n    display: inline-block;\n    margin: auto;\n    border: 1px solid lightgray;\n    border-radius: 15px;\n    box-shadow: 1px 1px 3px lightgrey;\n    text-align: center;\n    text-decoration: none;\n    font: 3vh \"Trebuchet MS\", arial, sans-serif;\n    color: darkslategrey;\n    margin: 0 0 1em;\n    width: 100%;\n    overflow: hidden; }\n    div a img {\n      width: 100%; }\n\n@media all and (min-width: 599px) {\n  div {\n    -webkit-column-count: 3;\n            column-count: 3; } }\n\n@media all and (min-width: 960px) {\n  div {\n    -webkit-column-count: 4;\n            column-count: 4; } }\n\n@media all and (min-width: 1920px) {\n  div {\n    -webkit-column-count: 5;\n            column-count: 5; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/section/main/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__content_service__ = __webpack_require__("../../../../../src/app/section/main/content.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(contentService) {
        this.contentService = contentService;
        this.tag = 'home';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    HomeComponent.prototype.getAll = function () {
        var _this = this;
        this.contentService.sendAll().subscribe(function (homeArray) {
            return _this.homeArray = homeArray;
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/section/main/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/section/main/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__content_service__["a" /* ContentService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/section/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<app-topnav></app-topnav>\n\n<app-sidenav>\n  <!-- <app-topnav></app-topnav> -->\n\n  <!-- <main> -->\n    <!-- <app-topnav></app-topnav> -->\n    <router-outlet></router-outlet>\n  <!-- </main> -->\n</app-sidenav>\n"

/***/ }),

/***/ "../../../../../src/app/section/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  display: -moz-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column; }\n\napp-sidenav {\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto; }\n  app-sidenav router-outlet {\n    overflow: scroll; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/section/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/section/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/section/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/section/main/more/more.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  more works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/section/main/more/more.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/section/main/more/more.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MoreComponent = (function () {
    function MoreComponent() {
    }
    MoreComponent.prototype.ngOnInit = function () {
    };
    MoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-more',
            template: __webpack_require__("../../../../../src/app/section/main/more/more.component.html"),
            styles: [__webpack_require__("../../../../../src/app/section/main/more/more.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MoreComponent);
    return MoreComponent;
}());



/***/ }),

/***/ "../../../../../src/app/section/main/shop/shop.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <a *ngFor=\"let shop of shopArray\" routerLink=\"/detail/{{shop.id}}\">\n    <img src=\"{{shop.path}}\" alt=\"{{shop.name}}\"><br>\n    {{shop.name}}\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/section/main/shop/shop.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n  -webkit-column-count: 2;\n          column-count: 2;\n  -webkit-column-gap: .5em;\n          column-gap: .5em;\n  margin: .5em; }\n  div a {\n    display: inline-block;\n    margin: auto;\n    border: 1px solid lightgray;\n    border-radius: 15px;\n    box-shadow: 1px 1px 3px lightgrey;\n    text-align: center;\n    text-decoration: none;\n    font: 3vh \"Trebuchet MS\", arial, sans-serif;\n    color: darkslategrey;\n    margin: 0 0 1em;\n    width: 100%;\n    overflow: hidden; }\n    div a img {\n      width: 100%; }\n\n@media all and (min-width: 599px) {\n  div {\n    -webkit-column-count: 3;\n            column-count: 3; } }\n\n@media all and (min-width: 960px) {\n  div {\n    -webkit-column-count: 4;\n            column-count: 4; } }\n\n@media all and (min-width: 1920px) {\n  div {\n    -webkit-column-count: 5;\n            column-count: 5; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/section/main/shop/shop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__content_service__ = __webpack_require__("../../../../../src/app/section/main/content.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShopComponent = (function () {
    function ShopComponent(contentService) {
        this.contentService = contentService;
        this.tag = 'shop';
    }
    ShopComponent.prototype.ngOnInit = function () {
        this.getShop();
    };
    ShopComponent.prototype.getShop = function () {
        var _this = this;
        this.contentService.sendContent(this.tag).subscribe(function (shopArray) {
            return _this.shopArray = shopArray;
        });
    };
    ShopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-shop',
            template: __webpack_require__("../../../../../src/app/section/main/shop/shop.component.html"),
            styles: [__webpack_require__("../../../../../src/app/section/main/shop/shop.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__content_service__["a" /* ContentService */]])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "../../../../../src/app/section/main/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-topnav></app-topnav> -->\n\n<mat-sidenav-container>\n  <mat-sidenav #sidenav position=\"end\" role=\"navigation\">\n    Sidenav\n  </mat-sidenav>\n  <mat-sidenav-content role=\"main\">\n    <!-- <button mat-button (click)=\"sidenav.toggle()\">Sidenav</button><br> -->\n    <ng-content></ng-content>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/section/main/sidenav/sidenav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  display: -moz-flex; }\n\nmat-sidenav-container {\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto; }\n  mat-sidenav-container mat-sidenav {\n    border: 2px solid black; }\n  mat-sidenav-container mat-sidenav-content ng-content {\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/section/main/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_nav_service__ = __webpack_require__("../../../../../src/app/section/main/header-nav.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Observable } from 'rxjs';

var SidenavComponent = (function () {
    function SidenavComponent(headerNavService) {
        this.headerNavService = headerNavService;
        this.current1 = 'message';
        this.current2 = 'notification';
        // this.headerNavService.getMessage().subscribe(message => {
        //   console.log(message);
        // });
    }
    SidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.headerNavService.events$.forEach(event => console.log(event));
        this.subscription = this.headerNavService.toggleSidenav().subscribe(function (which) {
            // if ( this.current1 == which || this.current2 == which) {
            //   this.current1 = this.current2 = which;
            console.log(which);
            _this.sidenav.toggle();
            // }
        });
    };
    SidenavComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('sidenav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material_sidenav__["a" /* MatSidenav */])
    ], SidenavComponent.prototype, "sidenav", void 0);
    SidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidenav',
            template: __webpack_require__("../../../../../src/app/section/main/sidenav/sidenav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/section/main/sidenav/sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__header_nav_service__["a" /* HeaderNavService */]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/section/main/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Sign Up</h3>\n<p>Please enter your details below</p>\n<mat-accordion>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Account\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <mat-form-field>\n      <input matInput type=\"email\" placeholder=\"Email\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"password\" placeholder=\"Password\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"password\" placeholder=\"Confirm Password\">\n    </mat-form-field>\n    <div>\n        <button mat-button>Submit</button>\n        <button mat-button>Reset</button>\n    </div>\n  </mat-expansion-panel>\n  <mat-expansion-panel> <!-- (opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\"-->\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Personal\n      </mat-panel-title>\n      <!-- <mat-panel-description>\n        Currently I am {{panelOpenState ? 'open' : 'closed'}}\n      </mat-panel-description> -->\n    </mat-expansion-panel-header>\n    <mat-form-field>\n      <input matInput type=\"text\" placeholder=\"First Names\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"text\" placeholder=\"Last Name\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"date\" placeholder=\"Date of Birth\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select placeholder=\"Gender\">\n        <mat-option value=\"option\">Male</mat-option>\n        <mat-option value=\"option\">Female</mat-option>\n        <mat-option value=\"option\">Other</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <div>\n      <button mat-button>Submit</button>\n      <button mat-button>Reset</button>\n    </div>\n  </mat-expansion-panel>\n  <mat-expansion-panel> <!-- (opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\"-->\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Contact\n      </mat-panel-title>\n      <!-- <mat-panel-description>\n        Currently I am {{panelOpenState ? 'open' : 'closed'}}\n      </mat-panel-description> -->\n    </mat-expansion-panel-header>\n    <mat-form-field>\n      <input matInput type=\"text\" placeholder=\"Unit\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"text\" placeholder=\"Building Name\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"text\" placeholder=\"Street\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"text\" placeholder=\"Street\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"text\" placeholder=\"City/Town\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"text\" placeholder=\"Zip/Post Code\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"text\" placeholder=\"State/Region\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"text\" placeholder=\"Country\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"tel\" placeholder=\"Mobile\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"tel\" placeholder=\"Land Phone\">\n    </mat-form-field>\n    <div>\n      <button mat-button>Submit</button>\n      <button mat-button>Reset</button>\n    </div>\n  </mat-expansion-panel>\n</mat-accordion>\n"

/***/ }),

/***/ "../../../../../src/app/section/main/sign-up/sign-up.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3, p {\n  text-align: center; }\n\nmat-expansion-panel {\n  margin-left: 5%;\n  margin-right: 5%; }\n  mat-expansion-panel div span {\n    margin: auto;\n    border: 1px solid black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/section/main/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignUpComponent = (function () {
    function SignUpComponent() {
        this.panelOpenState = false;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sign-up',
            template: __webpack_require__("../../../../../src/app/section/main/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("../../../../../src/app/section/main/sign-up/sign-up.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/section/main/topnav/topnav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"bool\" [@topnavToggle]=\"topnavState\">\n  <form>\n    <div class=\"\">\n      <i routerLink=\"/signup\" class=\"material-icons\">person_add</i>\n    </div>\n    <div class=\"\">\n      <mat-form-field hideRequiredMarker>\n        <input matInput type=\"email\" placeholder=\"Email\" required>\n      </mat-form-field>\n      <mat-form-field hideRequiredMarker>\n        <input matInput type=\"password\" placeholder=\"Password\" required>\n      </mat-form-field>\n    </div>\n    <div class=\"\">\n      <!-- <button type=\"button\" name=\"button\">enter</button> -->\n      <i class=\"material-icons\">input</i>\n    </div>\n  </form>\n</nav>\n<!-- <ng-template #searchBlock>\n  <mat-form-field>\n    <input matInput type=\"search\" placeholder=\"Search\">\n  </mat-form-field>\n  <button type=\"button\" name=\"button\">enter</button>\n</ng-template> -->\n\n<!-- <nav *ngIf=\"!bool\" [@topnavToggle]=\"topnavState\">\n  <mat-form-field>\n    <input matInput type=\"search\" placeholder=\"Search\">\n  </mat-form-field>\n  <button type=\"button\" name=\"button\">enter</button>\n</nav> -->\n"

/***/ }),

/***/ "../../../../../src/app/section/main/topnav/topnav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n  background-color: rgba(149, 165, 134, 0.95);\n  color: white; }\n  nav form {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    display: -moz-flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row;\n            flex-flow: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    nav form div {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      display: -moz-flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: column;\n              flex-flow: column;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      margin: 0 1%; }\n      nav form div i {\n        margin: auto;\n        font-size: 4.5vh; }\n      nav form div mat-form-field {\n        margin: 0 1%; }\n        nav form div mat-form-field /deep/ .mat-input-underline {\n          background-color: white; }\n        nav form div mat-form-field /deep/ .mat-input-element {\n          font-size: 4.5vh; }\n        nav form div mat-form-field /deep/ .mat-form-field-placeholder {\n          color: white; }\n    @media all and (min-width: 769px) {\n      nav form div {\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-flow: row;\n                flex-flow: row; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/section/main/topnav/topnav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopnavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_topnav_service__ = __webpack_require__("../../../../../src/app/section/main/header-topnav.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopnavComponent = (function () {
    function TopnavComponent(headerTopnavService) {
        this.headerTopnavService = headerTopnavService;
        this.topnavState = 'in';
        this.bool = null;
    }
    TopnavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.headerTopnavService.toggleTopnav().subscribe(function (which) {
            console.log(which);
            if (which = 'login') {
                _this.bool = true;
            }
            else {
                _this.bool = false;
            }
            _this.toggleTopnav();
        });
    };
    TopnavComponent.prototype.toggleTopnav = function () {
        this.topnavState = (this.topnavState === 'in' ? 'out' : 'in');
    };
    TopnavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-topnav',
            template: __webpack_require__("../../../../../src/app/section/main/topnav/topnav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/section/main/topnav/topnav.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('topnavToggle', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        // transform: 'scale(1)'
                        // height: 0,
                        opacity: 0,
                        display: 'none'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        // transform: 'scale(2)'
                        // height: '2em',
                        opacity: 1,
                        display: 'block'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('in <=> out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('200ms ease-in-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__header_topnav_service__["a" /* HeaderTopnavService */]])
    ], TopnavComponent);
    return TopnavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/section/main/trend/trend.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <a *ngFor=\"let trend of trendArray\" routerLink=\"/detail/{{trend.id}}\">\n    <img src=\"{{trend.path}}\" alt=\"{{trend.name}}\"><br>\n    {{trend.name}}\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/section/main/trend/trend.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n  -webkit-column-count: 2;\n          column-count: 2;\n  -webkit-column-gap: .5em;\n          column-gap: .5em;\n  margin: .5em; }\n  div a {\n    display: inline-block;\n    margin: auto;\n    border: 1px solid lightgray;\n    border-radius: 15px;\n    box-shadow: 1px 1px 3px lightgrey;\n    text-align: center;\n    text-decoration: none;\n    font: 3vh \"Trebuchet MS\", arial, sans-serif;\n    color: darkslategrey;\n    margin: 0 0 1em;\n    width: 100%;\n    overflow: hidden; }\n    div a img {\n      width: 100%; }\n\n@media all and (min-width: 599px) {\n  div {\n    -webkit-column-count: 3;\n            column-count: 3; } }\n\n@media all and (min-width: 960px) {\n  div {\n    -webkit-column-count: 4;\n            column-count: 4; } }\n\n@media all and (min-width: 1920px) {\n  div {\n    -webkit-column-count: 5;\n            column-count: 5; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/section/main/trend/trend.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrendComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__content_service__ = __webpack_require__("../../../../../src/app/section/main/content.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrendComponent = (function () {
    function TrendComponent(contentService) {
        this.contentService = contentService;
        this.tag = 'trend';
    }
    TrendComponent.prototype.ngOnInit = function () {
        this.getTrend();
    };
    TrendComponent.prototype.getTrend = function () {
        var _this = this;
        this.contentService.sendContent(this.tag).subscribe(function (trendArray) {
            return _this.trendArray = trendArray;
        });
    };
    TrendComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-trend',
            template: __webpack_require__("../../../../../src/app/section/main/trend/trend.component.html"),
            styles: [__webpack_require__("../../../../../src/app/section/main/trend/trend.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__content_service__["a" /* ContentService */]])
    ], TrendComponent);
    return TrendComponent;
}());



/***/ }),

/***/ "../../../../../src/app/section/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <a routerLink=\"/home\" id=\"home-icon\" class=\"material-icons\" data-toggle=\"tooltip\"\n    data-placement=\"auto\" title=\"Home\">home</a>\n  <a routerLink=\"/trend\" id=\"trend-icon\" class=\"material-icons\" data-toggle=\"tooltip\"\n    data-placement=\"auto\" title=\"Trend\">&#xe8e5;</a>\n  <a routerLink=\"/explore\" id=\"explore-icon\" class=\"material-icons\" data-toggle=\"tooltip\"\n    data-placement=\"auto\" title=\"Explore\">&#xe87a;</a>\n  <a routerLink=\"/shop\" id=\"shop-icon\" class=\"material-icons\" data-toggle=\"tooltip\"\n    data-placement=\"auto\" title=\"Shop\">&#xe8cc;</a>\n  <!-- <a href=\"#more\" id=\"more-icon\" class=\"material-icons\" data-toggle=\"tooltip\"\n    data-placement=\"auto\" title=\"More\">&#xe5d3;</a> -->\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/section/nav/nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n  background-color: #6693c1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  display: -moz-flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n  nav a {\n    text-decoration: none;\n    color: white;\n    font-size: 4.5vh;\n    padding: 3px; }\n\n@media all and (min-width: 769px) {\n  nav {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column;\n            flex-flow: column; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/section/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/section/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/section/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/section/section.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main></app-main>\n<app-aside></app-aside>\n<app-nav></app-nav>\n"

/***/ }),

/***/ "../../../../../src/app/section/section.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host(.small-display) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  display: -moz-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto; }\n\napp-main {\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto; }\n\n@media all and (min-width: 769px) {\n  :host(.big-display) {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row;\n            flex-flow: row; }\n  app-nav {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    background-color: #6693c1; }\n  app-main {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  app-aside {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n    max-width: 15%;\n    background-color: #c99d9d; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/section/section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SectionComponent = (function () {
    function SectionComponent() {
    }
    SectionComponent.prototype.ngOnInit = function () {
    };
    SectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-section',
            template: __webpack_require__("../../../../../src/app/section/section.component.html"),
            styles: [__webpack_require__("../../../../../src/app/section/section.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SectionComponent);
    return SectionComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map