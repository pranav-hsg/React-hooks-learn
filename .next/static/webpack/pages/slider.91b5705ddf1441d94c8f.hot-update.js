self["webpackHotUpdate_N_E"]("pages/slider",{

/***/ "./components/slickSlider.js":
/*!***********************************!*\
  !*** ./components/slickSlider.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slickSlider.module.scss */ "./components/slickSlider.module.scss");
/* harmony import */ var _slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\prana\\Documents\\VSCode\\React\\react hooks\\hook1\\components\\slickSlider.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();




var Img = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = _s(function (_ref, childSliderCardRef) {
  _s();

  var styleImg = _ref.styleImg;
  var imgArr = [{
    'src': 'static/s1.jpg',
    id: 1
  }, {
    'src': 'static/s2.jpg',
    id: 2
  }, {
    'src': 'static/s3.jpg',
    id: 3
  }, {
    'src': 'static/s4.jpg',
    id: 4
  }, {
    'src': 'static/s5.jpg',
    id: 5
  }, {
    'src': 'static/s6.jpg',
    id: 6
  }, {
    'src': 'static/s7.jpg',
    id: 7
  }, {
    'src': 'static/s8.jpg',
    id: 8
  }, {
    'src': 'static/s9.jpg',
    id: 9
  }, {
    'src': 'static/s10.jpg',
    id: 10
  }];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(imgArr),
      imgState = _useState[0],
      imgArrUpdt = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var id = 11;
  }, []); // let imageSlide = useRef(null);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: imgState.map(function (src, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        ref: childSliderCardRef,
        style: styleImg,
        className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Img) + ' imageCont ',
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          loading: "lazy",
          style: {
            width: 'inherit',
            objectFit: 'cover',
            height: '100%'
          },
          src: src.src,
          className: 'imageHolder',
          alt: ""
        }, src.id, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 25
        }, _this)
      }, src.id, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }, _this);
    })
  }, void 0, false);
}, "TLdesTkvEVpH+2amsN47teVspjY="));
_c2 = Img;

var SlickSlider = function SlickSlider() {
  _s2();

  var styleImg = {
    width: '200px',
    height: '300px'
  };

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      dummy = _useState2[0],
      du = _useState2[1]; // Each slider card


  var childSliderCardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Parent of slider cards , div holding all slide cards

  var divCardsContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Slider containing cards container and prev, next buttons.

  var slickSliderMainContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Initialize default values

  var sliderVisibleWidth = 0;
  var eachSlideWidth = 0;
  var slidesToScroll = 0;
  var slidesToScrollWidth = 0;
  var nextPxValueToScrl = 0;
  var prevPxValueToScrl = 0;
  var divCardsContainerTotalWidth = 0; // Detect if we reached end of the slides

  var endOfSlide = false; // Loadash throttler to throttle resize and if user clicks button many times 

  var throttle = lodash__WEBPACK_IMPORTED_MODULE_2___default().throttle(function (func) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    func.apply(void 0, args);
  }, 1000);

  var throttle = throttle3 = function throttle3(callBack, limit) {
    var wait = false;
    return function () {
      if (!wait) {
        callBack();
        wait = true;
        setTimeout(function () {
          wait = false;
        }, 400);
      }
    };
  };

  var resetSliderPosition = function resetSliderPosition() {
    // default slidesToScrollWidth:240px
    nextPxValueToScrl = -slidesToScrollWidth;
    prevPxValueToScrl = slidesToScrollWidth;
    divCardsContainer.current.style.cssText = "transform: translateX(-".concat(0, "px)");
  };

  var updateSliderPositionRef = function updateSliderPositionRef(updateref) {
    // translateX(0) -> initial position, starting position
    // translateX(-240px) -> moves slide in -> direction by 240px(each slide width by default)
    if (updateref === 'next') {
      // minus position goes -> direction on translate
      // ex: prevPxValueToScrl=240,nextPxValueToScrl=-240  and slidesToScrollWidth=240
      prevPxValueToScrl = prevPxValueToScrl - slidesToScrollWidth; // first-time:prevPxValueToScrl:0
      // second-time:prevPxValueToScrl:-240

      nextPxValueToScrl = nextPxValueToScrl - slidesToScrollWidth; // first-time:nextPxValueToScrl:-480
      // second-time:nextPxValueToScrl:-720
    } else {
      // ex: prevPxValueToScrl=-240,nextPxValueToScrl=-720  and slidesToScrollWidth=240
      nextPxValueToScrl = nextPxValueToScrl + slidesToScrollWidth; // first-time:prevPxValueToScrl:480
      // second-time:prevPxValueToScrl:620

      prevPxValueToScrl = prevPxValueToScrl + slidesToScrollWidth; // first-time:nextPxValueToScrl:0
      // second-time:nextPxValueToScrl:240
    }
  };

  var clickHandler = function clickHandler(direction) {
    // If next button is clicked
    if (direction === 'next') {
      // If reached end of slide return to first slide
      if (endOfSlide) {
        // Return to first slide and reset positions of scroll reference
        resetSliderPosition();
        endOfSlide = false; // ex: say divCardsContainerTotalWidth = 2360; and sliderVisibleWidth = 1336 and nextPxValueToScrl = -1440 then
        // sliderVisibleWidth is slider width which is visible to user
        // divCardsContainerTotalWidth is total width of container holding cards =  visible area+hidden area
      } else if (divCardsContainerTotalWidth - sliderVisibleWidth < -nextPxValueToScrl) {
        // If slide is about to reach last slide , last but one click of endofslide
        divCardsContainer.current.style.cssText = "transform: translateX(".concat(-divCardsContainerTotalWidth + sliderVisibleWidth, "px)"); // Update slider position reference, pass 'next' to update refrence with respect to next button click

        updateSliderPositionRef('next');
        endOfSlide = true;
      } else {
        // If everything is right translate to next px value
        divCardsContainer.current.style.cssText = "transform: translateX(".concat(nextPxValueToScrl, "px)"); // Update slider position reference, pass 'next' to update refrence with respect to next button click

        updateSliderPositionRef('next');
        endOfSlide = false;
      }
    } else if (direction === 'prev') {
      // End of slide cannot be reached by clicking previous button
      endOfSlide = false;

      if (prevPxValueToScrl > 0) {
        // If slider is over left return to first slide and reset positions of scroll reference
        // ex: say by default reference prevPxValueToScrl is set to 240px hence this is executed
        resetSliderPosition();
      } else {
        // If everything is right translate to prev px value
        divCardsContainer.current.style.cssText = "transform: translateX(".concat(prevPxValueToScrl, "px)"); // Update slider position reference, pass 'prev' to update refrence with respect to next button click

        updateSliderPositionRef('prev');
      }
    }
  };

  var initValues = function initValues() {
    // Slider width is an outer div which shows entire slider if we set slider to be 200px wide- 
    // -width is set on this div , we need it to calculate slider visible width in which slider is visible
    // by default slider takes full viewport width.ex : 1600px
    sliderVisibleWidth = slickSliderMainContainer.current.offsetWidth; // If slider has margin (space between slider cards if sliders are touch to each other then it has no margin)- 
    // -it is required to calculate how much does slider scrolls

    var eachSlideMargin = window.getComputedStyle(childSliderCardRef.current).marginLeft.slice(0, -2); // Convert from string to number and multiply it by two because margin is applied on both sides

    eachSlideMargin = Number(eachSlideMargin) * 2; // Each slider card width is calculated by adding its own width with its own margin

    eachSlideWidth = childSliderCardRef.current.offsetWidth + eachSlideMargin; // eachSlideWidth =Number(eachSlideWidth)
    // Number of slides to scroll

    slidesToScroll = 1; // Number of slides to scroll in pixels ex: if 240px

    slidesToScrollWidth = eachSlideWidth * slidesToScroll; // to calculate and track progress of left and right scroll positions

    prevPxValueToScrl = slidesToScrollWidth; // ex:240px

    nextPxValueToScrl = -slidesToScrollWidth; // ex:-240px
    // Cards container width generally equal to eachsliderwidth*totalnumberofslides

    divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth;
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    // Execute when mounting
    // Initialize required values in particular function
    initValues(); // Capture next button by class name

    var nextBtn = document.getElementsByClassName('next')[0]; // Capture previous button by class name

    var prevBtn = document.getElementsByClassName('prev')[0]; // Handle click event for both buttons

    nextBtn.addEventListener('click', function () {
      return throttle(clickHandler, 'next');
    });
    prevBtn.addEventListener('click', function () {
      return throttle(clickHandler, 'prev');
    });
    window.addEventListener('resize', function () {
      throttle(initValues);
      throttle(clickHandler, 'next');
      throttle(clickHandler, 'prev');
    });
    return function () {
      // Execute when unmounting (cleanup)
      nextBtn.removeEventListener('click', function () {
        return throttle(clickHandler, 'next');
      });
      prevBtn.removeEventListener('click', function () {
        return throttle(clickHandler, 'prev');
      });
      window.addEventListener('resize', function () {
        throttle(initValues);
        throttle(clickHandler, 'next');
        throttle(clickHandler, 'prev');
      });
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: "visibleDiv",
    ref: slickSliderMainContainer,
    className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Cslick),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button) + ' prev ',
      children: "Prev"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: divCardsContainer,
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().slick) + ' imgComp ',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Img, {
        ref: childSliderCardRef,
        styleImg: styleImg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button) + ' next ',
      children: "Next"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 228,
    columnNumber: 9
  }, _this);
};

_s2(SlickSlider, "I9oixn+nxW8luIwBqY9xzCR9NWw=");

_c3 = SlickSlider;
/* harmony default export */ __webpack_exports__["default"] = (SlickSlider); // setTimeout(()=>{
//     id=id+2;
//     imgArrUpdt([...imgState,   {
//         'src':'static/per1.jpg',
//         id:id,
//     },
//     {
//         'src':'static/per2.jpg',
//         id:id+1,
//     }])
//     console.log(id)
// },10000)
// else if(left> -slidesToScrollWidth){
//     divCardsContainer.current.style.cssText = `transform: translateX(-${0}px)`;
//     nextPxValueToScrl = -slidesToScrollWidth; 
//     prevPxValueToScrl = slidesToScrollWidth;
// }
// const clickHandler = (direction)=>{ 
//     const left = divCardsContainer.current.getBoundingClientRect().left
//     console.log(nextPxValueToScrl,-divCardsContainer.current.offsetWidth+sliderVisibleWidth)
//     if (direction === 'next'){
//         if(nextPxValueToScrl,-divCardsContainer.current.offsetWidth+sliderVisibleWidth){
//             divCardsContainer.current.style.cssText = `transform: translateX(-${0}px)`;
//             nextPxValueToScrl = -slidesToScrollWidth; 
//             prevPxValueToScrl = slidesToScrollWidth;
//         }else if (divCardsContainer.current.offsetWidth-sliderVisibleWidth< -nextPxValueToScrl) {
//             divCardsContainer.current.style.cssText = `transform: translateX(${-divCardsContainer.current.offsetWidth+sliderVisibleWidth}px)`
//             nextPxValueToScrl = -divCardsContainer.current.offsetWidth+sliderVisibleWidth
//         }else{
//             divCardsContainer.current.style.cssText = `transform: translateX(${nextPxValueToScrl}px)`
//             divCardsContainer.current.scrollLeft = slidesToScrollWidth;
//             prevPxValueToScrl = prevPxValueToScrl-slidesToScrollWidth;
//             nextPxValueToScrl = nextPxValueToScrl-slidesToScrollWidth;
//         }
//     }else if(direction === 'prev'){
//         console.log(prevPxValueToScrl)
//         const left = divCardsContainer.current.getBoundingClientRect().left;
//         if(prevPxValueToScrl>0){
//             divCardsContainer.current.style.cssText = `transform: translateX(-${0}px)`;
//             nextPxValueToScrl = -slidesToScrollWidth; 
//             prevPxValueToScrl = slidesToScrollWidth;
//         }else{
//             divCardsContainer.current.style.cssText = `transform: translateX(${prevPxValueToScrl}px)`;
//             nextPxValueToScrl =nextPxValueToScrl +slidesToScrollWidth;
//             prevPxValueToScrl = prevPxValueToScrl+slidesToScrollWidth;
//         }
//     }
// // }
// const left = divCardsContainer.current.getBoundingClientRect().left;
// divCardsContainer.current.scrollLeft = slidesToScrollWidth;

var _c, _c2, _c3;

$RefreshReg$(_c, "Img$forwardRef");
$RefreshReg$(_c2, "Img");
$RefreshReg$(_c3, "SlickSlider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlja1NsaWRlci5qcyJdLCJuYW1lcyI6WyJJbWciLCJmb3J3YXJkUmVmIiwiY2hpbGRTbGlkZXJDYXJkUmVmIiwic3R5bGVJbWciLCJpbWdBcnIiLCJpZCIsInVzZVN0YXRlIiwiaW1nU3RhdGUiLCJpbWdBcnJVcGR0IiwidXNlRWZmZWN0IiwibWFwIiwic3JjIiwiaW5kZXgiLCJzdHlsZXMiLCJ3aWR0aCIsIm9iamVjdEZpdCIsImhlaWdodCIsIlNsaWNrU2xpZGVyIiwiZHVtbXkiLCJkdSIsInVzZVJlZiIsImRpdkNhcmRzQ29udGFpbmVyIiwic2xpY2tTbGlkZXJNYWluQ29udGFpbmVyIiwic2xpZGVyVmlzaWJsZVdpZHRoIiwiZWFjaFNsaWRlV2lkdGgiLCJzbGlkZXNUb1Njcm9sbCIsInNsaWRlc1RvU2Nyb2xsV2lkdGgiLCJuZXh0UHhWYWx1ZVRvU2NybCIsInByZXZQeFZhbHVlVG9TY3JsIiwiZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoIiwiZW5kT2ZTbGlkZSIsInRocm90dGxlIiwiXyIsImZ1bmMiLCJhcmdzIiwidGhyb3R0bGUzIiwiY2FsbEJhY2siLCJsaW1pdCIsIndhaXQiLCJzZXRUaW1lb3V0IiwicmVzZXRTbGlkZXJQb3NpdGlvbiIsImN1cnJlbnQiLCJzdHlsZSIsImNzc1RleHQiLCJ1cGRhdGVTbGlkZXJQb3NpdGlvblJlZiIsInVwZGF0ZXJlZiIsImNsaWNrSGFuZGxlciIsImRpcmVjdGlvbiIsImluaXRWYWx1ZXMiLCJvZmZzZXRXaWR0aCIsImVhY2hTbGlkZU1hcmdpbiIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJtYXJnaW5MZWZ0Iiwic2xpY2UiLCJOdW1iZXIiLCJuZXh0QnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicHJldkJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoi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VCx3RUFBaEU7QUFBQSw0QkFDSTtBQUFJLGVBQVMsRUFBRUEsd0VBQUEsR0FBYyxRQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBR0k7QUFBSyxTQUFHLEVBQUVRLGlCQUFWO0FBQTZCLGVBQVMsRUFBRVIsdUVBQUEsR0FBYyxXQUF0RDtBQUFBLDZCQUNBLDhEQUFDLEdBQUQ7QUFBSyxXQUFHLEVBQUVYLGtCQUFWO0FBQThCLGdCQUFRLEVBQUVDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEosZUFNRztBQUFJLGVBQVMsRUFBRVUsd0VBQUEsR0FBYyxRQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBVUgsQ0F6S0Q7O0lBQU1JLFc7O01BQUFBLFc7QUEyS04sK0RBQWVBLFdBQWYsRSxDQUNHO0FBQ0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2xpZGVyLjkxYjU3MDVkZGYxNDQxZDk0YzhmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVJlZixmb3J3YXJkUmVmLCB1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NsaWNrU2xpZGVyLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCJcclxuXHJcbmNvbnN0IEltZyA9IGZvcndhcmRSZWYoKHtzdHlsZUltZ30sY2hpbGRTbGlkZXJDYXJkUmVmKSA9PntcclxuICAgIGNvbnN0IGltZ0FyciA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczEuanBnJyxcclxuICAgICAgICAgICAgaWQ6MSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMi5qcGcnLFxyXG4gICAgICAgICAgICBpZDoyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MzLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczQuanBnJyxcclxuICAgICAgICAgICAgaWQ6NCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNS5qcGcnLFxyXG4gICAgICAgICAgICBpZDo1LFxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M2LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjYsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczcuanBnJyxcclxuICAgICAgICAgICAgaWQ6NyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zOC5qcGcnLFxyXG4gICAgICAgICAgICBpZDo4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M5LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczEwLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjEwLFxyXG4gICAgICAgIH0sXHJcbiAgICBcclxuICAgIF1cclxuICAgIGNvbnN0IFtpbWdTdGF0ZSxpbWdBcnJVcGR0XSA9IHVzZVN0YXRlKGltZ0FycilcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgbGV0IGlkID0gMTE7XHJcbiBcclxuXHJcbiAgICB9LFtdKVxyXG4gICAgXHJcbiAgICAvLyBsZXQgaW1hZ2VTbGlkZSA9IHVzZVJlZihudWxsKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2ltZ1N0YXRlLm1hcCgoc3JjLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17c3JjLmlkfSAgcmVmPXtjaGlsZFNsaWRlckNhcmRSZWZ9IHN0eWxlPXtzdHlsZUltZ30gIGNsYXNzTmFtZT17c3R5bGVzLkltZysnIGltYWdlQ29udCAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBsb2FkaW5nPSdsYXp5JyBzdHlsZT17e3dpZHRoOidpbmhlcml0JyxvYmplY3RGaXQ6J2NvdmVyJyxoZWlnaHQ6JzEwMCUnfX0gc3JjPXtzcmMuc3JjfSAga2V5PXtzcmMuaWR9IGNsYXNzTmFtZT17J2ltYWdlSG9sZGVyJ30gIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59KVxyXG5jb25zdCBTbGlja1NsaWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHN0eWxlSW1nID0ge1xyXG4gICAgICAgIHdpZHRoOicyMDBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiczMDBweCdcclxuICAgIH07XHJcbiAgICBsZXQgW2R1bW15LGR1XSA9IHVzZVN0YXRlKCk7XHJcbiAgICAvLyBFYWNoIHNsaWRlciBjYXJkXHJcbiAgICBjb25zdCBjaGlsZFNsaWRlckNhcmRSZWYgPSB1c2VSZWYoKTtcclxuICAgIC8vIFBhcmVudCBvZiBzbGlkZXIgY2FyZHMgLCBkaXYgaG9sZGluZyBhbGwgc2xpZGUgY2FyZHNcclxuICAgIGNvbnN0IGRpdkNhcmRzQ29udGFpbmVyID0gdXNlUmVmKCk7XHJcbiAgICAvLyBTbGlkZXIgY29udGFpbmluZyBjYXJkcyBjb250YWluZXIgYW5kIHByZXYsIG5leHQgYnV0dG9ucy5cclxuICAgIGNvbnN0IHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lciA9IHVzZVJlZigpO1xyXG4gICAgLy8gSW5pdGlhbGl6ZSBkZWZhdWx0IHZhbHVlc1xyXG4gICAgbGV0IHNsaWRlclZpc2libGVXaWR0aD0wO1xyXG4gICAgbGV0IGVhY2hTbGlkZVdpZHRoID0gMDtcclxuICAgIGxldCBzbGlkZXNUb1Njcm9sbCA9IDA7XHJcbiAgICBsZXQgc2xpZGVzVG9TY3JvbGxXaWR0aD0wO1xyXG4gICAgbGV0IG5leHRQeFZhbHVlVG9TY3JsID0gMDsgXHJcbiAgICBsZXQgcHJldlB4VmFsdWVUb1NjcmwgPSAwO1xyXG4gICAgbGV0IGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aD0wO1xyXG4gICAgLy8gRGV0ZWN0IGlmIHdlIHJlYWNoZWQgZW5kIG9mIHRoZSBzbGlkZXNcclxuICAgIGxldCBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgIC8vIExvYWRhc2ggdGhyb3R0bGVyIHRvIHRocm90dGxlIHJlc2l6ZSBhbmQgaWYgdXNlciBjbGlja3MgYnV0dG9uIG1hbnkgdGltZXMgXHJcbiAgICB2YXIgdGhyb3R0bGUgPSBfLnRocm90dGxlKChmdW5jLC4uLmFyZ3MpPT4ge1xyXG4gICAgICAgIGZ1bmMoLi4uYXJncylcclxuICAgIH0sIDEwMDApO1xyXG4gICAgdmFyIHRocm90dGxlID0gdGhyb3R0bGUzID0gKGNhbGxCYWNrLGxpbWl0KT0+e1xyXG4gICAgICBsZXQgd2FpdCA9IGZhbHNlOyBcclxuICAgICAgcmV0dXJuICgpPT57XHJcbiAgICAgICAgaWYgKCF3YWl0KXtcclxuICAgICAgICAgIGNhbGxCYWNrKClcclxuICAgICAgICAgIHdhaXQgPSB0cnVlXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgIHdhaXQ9ZmFsc2VcclxuICAgICAgICAgIH0sNDAwKVxyXG4gICAgICAgIH1cclxuICAgICAgfSAgXHJcbiAgICB9XHJcbiAgICBjb25zdCByZXNldFNsaWRlclBvc2l0aW9uID0gKCkgPT57XHJcbiAgICAgICAgLy8gZGVmYXVsdCBzbGlkZXNUb1Njcm9sbFdpZHRoOjI0MHB4XHJcbiAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbiAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdXBkYXRlU2xpZGVyUG9zaXRpb25SZWYgPSAodXBkYXRlcmVmKSA9PntcclxuICAgICAgICAvLyB0cmFuc2xhdGVYKDApIC0+IGluaXRpYWwgcG9zaXRpb24sIHN0YXJ0aW5nIHBvc2l0aW9uXHJcbiAgICAgICAgLy8gdHJhbnNsYXRlWCgtMjQwcHgpIC0+IG1vdmVzIHNsaWRlIGluIC0+IGRpcmVjdGlvbiBieSAyNDBweChlYWNoIHNsaWRlIHdpZHRoIGJ5IGRlZmF1bHQpXHJcbiAgICAgICAgaWYgKHVwZGF0ZXJlZiA9PT0gJ25leHQnKXtcclxuICAgICAgICAgICAgLy8gbWludXMgcG9zaXRpb24gZ29lcyAtPiBkaXJlY3Rpb24gb24gdHJhbnNsYXRlXHJcbiAgICAgICAgICAgIC8vIGV4OiBwcmV2UHhWYWx1ZVRvU2NybD0yNDAsbmV4dFB4VmFsdWVUb1Njcmw9LTI0MCAgYW5kIHNsaWRlc1RvU2Nyb2xsV2lkdGg9MjQwXHJcbiAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gcHJldlB4VmFsdWVUb1Njcmwtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbiAgICAgICAgICAgIC8vIGZpcnN0LXRpbWU6cHJldlB4VmFsdWVUb1Njcmw6MFxyXG4gICAgICAgICAgICAvLyBzZWNvbmQtdGltZTpwcmV2UHhWYWx1ZVRvU2NybDotMjQwXHJcbiAgICAgICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID0gbmV4dFB4VmFsdWVUb1Njcmwtc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuICAgICAgICAgICAgLy8gZmlyc3QtdGltZTpuZXh0UHhWYWx1ZVRvU2NybDotNDgwXHJcbiAgICAgICAgICAgIC8vIHNlY29uZC10aW1lOm5leHRQeFZhbHVlVG9TY3JsOi03MjBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgLy8gZXg6IHByZXZQeFZhbHVlVG9TY3JsPS0yNDAsbmV4dFB4VmFsdWVUb1Njcmw9LTcyMCAgYW5kIHNsaWRlc1RvU2Nyb2xsV2lkdGg9MjQwXHJcbiAgICAgICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID1uZXh0UHhWYWx1ZVRvU2NybCArc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuICAgICAgICAgICAgLy8gZmlyc3QtdGltZTpwcmV2UHhWYWx1ZVRvU2NybDo0ODBcclxuICAgICAgICAgICAgLy8gc2Vjb25kLXRpbWU6cHJldlB4VmFsdWVUb1Njcmw6NjIwXHJcbiAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gcHJldlB4VmFsdWVUb1Njcmwrc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuICAgICAgICAgICAgLy8gZmlyc3QtdGltZTpuZXh0UHhWYWx1ZVRvU2NybDowXHJcbiAgICAgICAgICAgIC8vIHNlY29uZC10aW1lOm5leHRQeFZhbHVlVG9TY3JsOjI0MFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9IChkaXJlY3Rpb24pPT57IFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIElmIG5leHQgYnV0dG9uIGlzIGNsaWNrZWRcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpe1xyXG4gICAgICAgICAgICAvLyBJZiByZWFjaGVkIGVuZCBvZiBzbGlkZSByZXR1cm4gdG8gZmlyc3Qgc2xpZGVcclxuICAgICAgICAgICAgaWYoZW5kT2ZTbGlkZSl7ICBcclxuICAgICAgICAgICAgICAgIC8vIFJldHVybiB0byBmaXJzdCBzbGlkZSBhbmQgcmVzZXQgcG9zaXRpb25zIG9mIHNjcm9sbCByZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgIHJlc2V0U2xpZGVyUG9zaXRpb24oKVxyXG4gICAgICAgICAgICAgICAgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAvLyBleDogc2F5IGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCA9IDIzNjA7IGFuZCBzbGlkZXJWaXNpYmxlV2lkdGggPSAxMzM2IGFuZCBuZXh0UHhWYWx1ZVRvU2NybCA9IC0xNDQwIHRoZW5cclxuICAgICAgICAgICAgICAgIC8vIHNsaWRlclZpc2libGVXaWR0aCBpcyBzbGlkZXIgd2lkdGggd2hpY2ggaXMgdmlzaWJsZSB0byB1c2VyXHJcbiAgICAgICAgICAgICAgICAvLyBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggaXMgdG90YWwgd2lkdGggb2YgY29udGFpbmVyIGhvbGRpbmcgY2FyZHMgPSAgdmlzaWJsZSBhcmVhK2hpZGRlbiBhcmVhXHJcbiAgICAgICAgICAgIH1lbHNlIGlmICgoZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoLXNsaWRlclZpc2libGVXaWR0aCk8IC1uZXh0UHhWYWx1ZVRvU2NybCkge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgc2xpZGUgaXMgYWJvdXQgdG8gcmVhY2ggbGFzdCBzbGlkZSAsIGxhc3QgYnV0IG9uZSBjbGljayBvZiBlbmRvZnNsaWRlXHJcbiAgICAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7LWRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGh9cHgpYFxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHNsaWRlciBwb3NpdGlvbiByZWZlcmVuY2UsIHBhc3MgJ25leHQnIHRvIHVwZGF0ZSByZWZyZW5jZSB3aXRoIHJlc3BlY3QgdG8gbmV4dCBidXR0b24gY2xpY2tcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmKCduZXh0JylcclxuICAgICAgICAgICAgICAgIGVuZE9mU2xpZGUgPSB0cnVlXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgZXZlcnl0aGluZyBpcyByaWdodCB0cmFuc2xhdGUgdG8gbmV4dCBweCB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke25leHRQeFZhbHVlVG9TY3JsfXB4KWBcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBzbGlkZXIgcG9zaXRpb24gcmVmZXJlbmNlLCBwYXNzICduZXh0JyB0byB1cGRhdGUgcmVmcmVuY2Ugd2l0aCByZXNwZWN0IHRvIG5leHQgYnV0dG9uIGNsaWNrXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTbGlkZXJQb3NpdGlvblJlZignbmV4dCcpXHJcbiAgICAgICAgICAgICAgICBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKXtcclxuICAgICAgICAgICAgLy8gRW5kIG9mIHNsaWRlIGNhbm5vdCBiZSByZWFjaGVkIGJ5IGNsaWNraW5nIHByZXZpb3VzIGJ1dHRvblxyXG4gICAgICAgICAgICBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgICAgICAgICAgaWYocHJldlB4VmFsdWVUb1Njcmw+MCl7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBzbGlkZXIgaXMgb3ZlciBsZWZ0IHJldHVybiB0byBmaXJzdCBzbGlkZSBhbmQgcmVzZXQgcG9zaXRpb25zIG9mIHNjcm9sbCByZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgIC8vIGV4OiBzYXkgYnkgZGVmYXVsdCByZWZlcmVuY2UgcHJldlB4VmFsdWVUb1NjcmwgaXMgc2V0IHRvIDI0MHB4IGhlbmNlIHRoaXMgaXMgZXhlY3V0ZWRcclxuICAgICAgICAgICAgICAgIHJlc2V0U2xpZGVyUG9zaXRpb24oKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIC8vIElmIGV2ZXJ5dGhpbmcgaXMgcmlnaHQgdHJhbnNsYXRlIHRvIHByZXYgcHggdmFsdWVcclxuICAgICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHtwcmV2UHhWYWx1ZVRvU2NybH1weClgO1xyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHNsaWRlciBwb3NpdGlvbiByZWZlcmVuY2UsIHBhc3MgJ3ByZXYnIHRvIHVwZGF0ZSByZWZyZW5jZSB3aXRoIHJlc3BlY3QgdG8gbmV4dCBidXR0b24gY2xpY2tcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmKCdwcmV2JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgaW5pdFZhbHVlcyA9KCkgPT57XHJcbiAgICAgICAgLy8gU2xpZGVyIHdpZHRoIGlzIGFuIG91dGVyIGRpdiB3aGljaCBzaG93cyBlbnRpcmUgc2xpZGVyIGlmIHdlIHNldCBzbGlkZXIgdG8gYmUgMjAwcHggd2lkZS0gXHJcbiAgICAgICAgLy8gLXdpZHRoIGlzIHNldCBvbiB0aGlzIGRpdiAsIHdlIG5lZWQgaXQgdG8gY2FsY3VsYXRlIHNsaWRlciB2aXNpYmxlIHdpZHRoIGluIHdoaWNoIHNsaWRlciBpcyB2aXNpYmxlXHJcbiAgICAgICAgLy8gYnkgZGVmYXVsdCBzbGlkZXIgdGFrZXMgZnVsbCB2aWV3cG9ydCB3aWR0aC5leCA6IDE2MDBweFxyXG4gICAgICAgIHNsaWRlclZpc2libGVXaWR0aCA9IHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIC8vIElmIHNsaWRlciBoYXMgbWFyZ2luIChzcGFjZSBiZXR3ZWVuIHNsaWRlciBjYXJkcyBpZiBzbGlkZXJzIGFyZSB0b3VjaCB0byBlYWNoIG90aGVyIHRoZW4gaXQgaGFzIG5vIG1hcmdpbiktIFxyXG4gICAgICAgIC8vIC1pdCBpcyByZXF1aXJlZCB0byBjYWxjdWxhdGUgaG93IG11Y2ggZG9lcyBzbGlkZXIgc2Nyb2xsc1xyXG4gICAgICAgIGxldCBlYWNoU2xpZGVNYXJnaW4gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjaGlsZFNsaWRlckNhcmRSZWYuY3VycmVudCkubWFyZ2luTGVmdC5zbGljZSgwLCAtMik7XHJcbiAgICAgICAgLy8gQ29udmVydCBmcm9tIHN0cmluZyB0byBudW1iZXIgYW5kIG11bHRpcGx5IGl0IGJ5IHR3byBiZWNhdXNlIG1hcmdpbiBpcyBhcHBsaWVkIG9uIGJvdGggc2lkZXNcclxuICAgICAgICBlYWNoU2xpZGVNYXJnaW49TnVtYmVyKGVhY2hTbGlkZU1hcmdpbikqMiBcclxuICAgICAgICAvLyBFYWNoIHNsaWRlciBjYXJkIHdpZHRoIGlzIGNhbGN1bGF0ZWQgYnkgYWRkaW5nIGl0cyBvd24gd2lkdGggd2l0aCBpdHMgb3duIG1hcmdpblxyXG4gICAgICAgIGVhY2hTbGlkZVdpZHRoID0gY2hpbGRTbGlkZXJDYXJkUmVmLmN1cnJlbnQub2Zmc2V0V2lkdGgrZWFjaFNsaWRlTWFyZ2luO1xyXG4gICAgICAgIC8vIGVhY2hTbGlkZVdpZHRoID1OdW1iZXIoZWFjaFNsaWRlV2lkdGgpXHJcbiAgICAgICAgLy8gTnVtYmVyIG9mIHNsaWRlcyB0byBzY3JvbGxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbCA9IDFcclxuICAgICAgICAvLyBOdW1iZXIgb2Ygc2xpZGVzIHRvIHNjcm9sbCBpbiBwaXhlbHMgZXg6IGlmIDI0MHB4XHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGxXaWR0aD1lYWNoU2xpZGVXaWR0aCpzbGlkZXNUb1Njcm9sbDtcclxuICAgICAgICAvLyB0byBjYWxjdWxhdGUgYW5kIHRyYWNrIHByb2dyZXNzIG9mIGxlZnQgYW5kIHJpZ2h0IHNjcm9sbCBwb3NpdGlvbnNcclxuICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7IC8vIGV4OjI0MHB4XHJcbiAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgLy8gZXg6LTI0MHB4XHJcbiAgICAgICAgLy8gQ2FyZHMgY29udGFpbmVyIHdpZHRoIGdlbmVyYWxseSBlcXVhbCB0byBlYWNoc2xpZGVyd2lkdGgqdG90YWxudW1iZXJvZnNsaWRlc1xyXG4gICAgICAgIGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGhcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIC8vIEV4ZWN1dGUgd2hlbiBtb3VudGluZ1xyXG4gICAgICAgIC8vIEluaXRpYWxpemUgcmVxdWlyZWQgdmFsdWVzIGluIHBhcnRpY3VsYXIgZnVuY3Rpb25cclxuICAgICAgICBpbml0VmFsdWVzKClcclxuICAgICAgICAvLyBDYXB0dXJlIG5leHQgYnV0dG9uIGJ5IGNsYXNzIG5hbWVcclxuICAgICAgICBjb25zdCBuZXh0QnRuICA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25leHQnKVswXVxyXG4gICAgICAgIC8vIENhcHR1cmUgcHJldmlvdXMgYnV0dG9uIGJ5IGNsYXNzIG5hbWVcclxuICAgICAgICBjb25zdCBwcmV2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJldicpWzBdXHJcbiAgICAgICAgLy8gSGFuZGxlIGNsaWNrIGV2ZW50IGZvciBib3RoIGJ1dHRvbnNcclxuICAgICAgICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+dGhyb3R0bGUoY2xpY2tIYW5kbGVyLCduZXh0JykpXHJcbiAgICAgICAgcHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnRocm90dGxlKGNsaWNrSGFuZGxlciwncHJldicpKVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCgpPT57XHJcbiAgICAgICAgICAgIHRocm90dGxlKGluaXRWYWx1ZXMpXHJcbiAgICAgICAgICAgIHRocm90dGxlKGNsaWNrSGFuZGxlciwnbmV4dCcpXHJcbiAgICAgICAgICAgIHRocm90dGxlKGNsaWNrSGFuZGxlciwncHJldicpICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gKCk9PntcclxuICAgICAgICAgICAgLy8gRXhlY3V0ZSB3aGVuIHVubW91bnRpbmcgKGNsZWFudXApXHJcbiAgICAgICAgICAgIG5leHRCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT50aHJvdHRsZShjbGlja0hhbmRsZXIsJ25leHQnKSlcclxuICAgICAgICAgICAgcHJldkJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnRocm90dGxlKGNsaWNrSGFuZGxlciwncHJldicpKVxyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhyb3R0bGUoaW5pdFZhbHVlcylcclxuICAgICAgICAgICAgICAgIHRocm90dGxlKGNsaWNrSGFuZGxlciwnbmV4dCcpXHJcbiAgICAgICAgICAgICAgICB0aHJvdHRsZShjbGlja0hhbmRsZXIsJ3ByZXYnKSAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfSxbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInZpc2libGVEaXZcIiByZWY9e3NsaWNrU2xpZGVyTWFpbkNvbnRhaW5lcn0gIGNsYXNzTmFtZT17c3R5bGVzLkNzbGlja30+XHJcbiAgICAgICAgICAgIDxpICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b24rJyBwcmV2ICd9PlByZXY8L2k+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IHJlZj17ZGl2Q2FyZHNDb250YWluZXJ9IGNsYXNzTmFtZT17c3R5bGVzLnNsaWNrKyAnIGltZ0NvbXAgJ30+XHJcbiAgICAgICAgICAgIDxJbWcgcmVmPXtjaGlsZFNsaWRlckNhcmRSZWZ9IHN0eWxlSW1nPXtzdHlsZUltZ30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGkgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbisnIG5leHQgJ30+TmV4dDwvaT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlja1NsaWRlcjtcclxuICAgLy8gc2V0VGltZW91dCgoKT0+e1xyXG4gICAgLy8gICAgIGlkPWlkKzI7XHJcbiAgICAvLyAgICAgaW1nQXJyVXBkdChbLi4uaW1nU3RhdGUsICAge1xyXG4gICAgLy8gICAgICAgICAnc3JjJzonc3RhdGljL3BlcjEuanBnJyxcclxuICAgIC8vICAgICAgICAgaWQ6aWQsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgICdzcmMnOidzdGF0aWMvcGVyMi5qcGcnLFxyXG4gICAgLy8gICAgICAgICBpZDppZCsxLFxyXG4gICAgLy8gICAgIH1dKVxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgICAgIFxyXG4gICAgLy8gfSwxMDAwMClcclxuLy8gZWxzZSBpZihsZWZ0PiAtc2xpZGVzVG9TY3JvbGxXaWR0aCl7XHJcbi8vICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0kezB9cHgpYDtcclxuLy8gICAgIG5leHRQeFZhbHVlVG9TY3JsID0gLXNsaWRlc1RvU2Nyb2xsV2lkdGg7IFxyXG4vLyAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyB9XHJcbi8vIGNvbnN0IGNsaWNrSGFuZGxlciA9IChkaXJlY3Rpb24pPT57IFxyXG4vLyAgICAgY29uc3QgbGVmdCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdFxyXG4vLyAgICAgY29uc29sZS5sb2cobmV4dFB4VmFsdWVUb1NjcmwsLWRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGgrc2xpZGVyVmlzaWJsZVdpZHRoKVxyXG4vLyAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnKXtcclxuICAgICAgICBcclxuLy8gICAgICAgICBpZihuZXh0UHhWYWx1ZVRvU2NybCwtZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGgpe1xyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0kezB9cHgpYDtcclxuLy8gICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbi8vICAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICB9ZWxzZSBpZiAoZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aC1zbGlkZXJWaXNpYmxlV2lkdGg8IC1uZXh0UHhWYWx1ZVRvU2NybCkge1xyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7LWRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGgrc2xpZGVyVmlzaWJsZVdpZHRofXB4KWBcclxuLy8gICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGhcclxuLy8gICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHtuZXh0UHhWYWx1ZVRvU2NybH1weClgXHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gcHJldlB4VmFsdWVUb1Njcmwtc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSBuZXh0UHhWYWx1ZVRvU2NybC1zbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgIH1cclxuICAgICAgICBcclxuLy8gICAgIH1lbHNlIGlmKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKXtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhwcmV2UHhWYWx1ZVRvU2NybClcclxuLy8gICAgICAgICBjb25zdCBsZWZ0ID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4vLyAgICAgICAgIGlmKHByZXZQeFZhbHVlVG9TY3JsPjApe1xyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0kezB9cHgpYDtcclxuLy8gICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbi8vICAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICB9ZWxzZXtcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke3ByZXZQeFZhbHVlVG9TY3JsfXB4KWA7XHJcbi8vICAgICAgICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID1uZXh0UHhWYWx1ZVRvU2NybCArc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBwcmV2UHhWYWx1ZVRvU2NybCtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgIH1cclxuICAgICAgICBcclxuLy8gICAgIH1cclxuLy8gLy8gfVxyXG4vLyBjb25zdCBsZWZ0ID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4vLyBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnNjcm9sbExlZnQgPSBzbGlkZXNUb1Njcm9sbFdpZHRoOyJdLCJzb3VyY2VSb290IjoiIn0=