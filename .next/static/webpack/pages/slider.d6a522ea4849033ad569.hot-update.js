self["webpackHotUpdate_N_E"]("pages/slider",{

/***/ "./components/autoGapSlider.js":
/*!*************************************!*\
  !*** ./components/autoGapSlider.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./autoGapSlider.module.scss */ "./components/autoGapSlider.module.scss");
/* harmony import */ var _autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _autoGapSliderCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autoGapSliderCard */ "./components/autoGapSliderCard.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\prana\\Documents\\VSCode\\React\\react hooks\\hook1\\components\\autoGapSlider.js",
    _this = undefined,
    _s = $RefreshSig$();






var AutoGapSlider = function AutoGapSlider() {
  _s();

  var imgArrData = [{
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
  }, {
    'src': 'https://picsum.photos/200/300',
    id: 11
  }, {
    'src': 'https://picsum.photos/1200/2300',
    id: 12
  }, {
    'src': 'static/s1.jpg',
    id: 13
  }, {
    'src': 'static/s2.jpg',
    id: 14
  }, {
    'src': 'static/s3.jpg',
    id: 15
  }, {
    'src': 'static/s4.jpg',
    id: 16
  }, {
    'src': 'static/s5.jpg',
    id: 17
  }, {
    'src': 'static/s6.jpg',
    id: 18
  }, {
    'src': 'static/s7.jpg',
    id: 19
  }, {
    'src': 'static/s8.jpg',
    id: 20
  }, {
    'src': 'static/s9.jpg',
    id: 21
  }, {
    'src': 'static/s10.jpg',
    id: 22
  }, {
    'src': 'https://picsum.photos/200/300',
    id: 23
  }, {
    'src': 'https://picsum.photos/1200/2300',
    id: 24
  }, {
    'src': 'https://picsum.photos/1200/2300',
    id: 25
  }]; // Each slider card

  var childSliderCardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Parent of slider cards , div holding all slide cards

  var divCardsContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Slider containing cards container and prev, next buttons.

  var autoGapSliderMainContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Grabbing next button

  var nextButton = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Grabbing prev button

  var prevButton = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(imgArrData),
      imgArr = _useState[0],
      imgArrUpdt = _useState[1];

  var imageUpdateArr = imgArr;
  var id = 12;
  var timerId;

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      slideMargin = _useState2[0],
      updateSlideMargin = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      translateValue = _useState3[0],
      updateTranslateValue = _useState3[1];

  var styleImg = {
    width: '200px',
    height: '300px',
    margin: "0 ".concat(slideMargin / 2, "px 0 ").concat(slideMargin / 2, "px")
  };

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      dummy = _useState4[0],
      du = _useState4[1]; // Initialize default values


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
  }, 600);

  var debounce = lodash__WEBPACK_IMPORTED_MODULE_2___default().debounce(function (func) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    func.apply(void 0, args); // console.log('deibounc')
  }, 800);

  var resetSliderPosition = function resetSliderPosition() {
    // default slidesToScrollWidth:240px
    nextPxValueToScrl = -slidesToScrollWidth;
    prevPxValueToScrl = slidesToScrollWidth; // divCardsContainer.current.style.cssText = `transform: translateX(-${0}px)`;

    updateTranslateValue(0);
    displayArrow('prev', false);
    divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth;
  };

  var displayArrow = function displayArrow() {
    var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'prev';
    var toDisplay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (direction === 'prev') {
      if (!toDisplay) showPrevButton(false);else showPrevButton(true);
    } else {
      if (!toDisplay) showNextButton(false);else showNextButton(true);
    }
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

  var updateSliderArray = function updateSliderArray() {
    var newElement = [{
      'src': 'static/per1.jpg',
      id: id
    }, {
      'src': 'static/per2.jpg',
      id: id + 1
    }]; // imgArr.push(...newElement)

    imageUpdateArr = imageUpdateArr.concat(newElement);
    imgArrUpdt(imageUpdateArr);
    divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth;
    id = id + 2; // // console.log(imgArrData)
    // clickHandler('next')
  };

  var clickHandler = function clickHandler(direction) {
    // If next button is clicked
    // divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth
    if (direction === 'next') {
      displayArrow('prev', true); // If reached end of slide return to first slide

      if (endOfSlide) {
        // Return to first slide and reset positions of scroll reference
        resetSliderPosition();
        endOfSlide = false; // ex: say divCardsContainerTotalWidth = 2360; and sliderVisibleWidth = 1336 and nextPxValueToScrl = -1440 then
        // sliderVisibleWidth is slider width which is visible to user
        // divCardsContainerTotalWidth is total width of container holding cards =  visible area+hidden area
      } else if (divCardsContainerTotalWidth - sliderVisibleWidth - slideMargin - 10 <= -nextPxValueToScrl) {
        // If slide is about to reach last slide , last but one click of endofslide
        // divCardsContainer.current.style.cssText = `transform: translateX(${-divCardsContainerTotalWidth+sliderVisibleWidth}px)`
        updateTranslateValue(-divCardsContainerTotalWidth + sliderVisibleWidth); // Update slider position reference, pass 'next' to update refrence with respect to next button click

        updateSliderPositionRef('next');
        endOfSlide = true; // updateSliderArray()
      } else {
        // If everything is right translate to next px value
        // divCardsContainer.current.style.cssText = `transform: translateX(${nextPxValueToScrl}px)` 
        updateTranslateValue(nextPxValueToScrl); // Update slider position reference, pass 'next' to update refrence with respect to next button click

        updateSliderPositionRef('next');
        endOfSlide = false;
      }
    } else if (direction === 'prev') {
      // End of slide cannot be reached by clicking previous button
      endOfSlide = false;

      if (prevPxValueToScrl > 0) {
        displayArrow('prev', false); // If slider is over left return to first slide and reset positions of scroll reference
        // ex: say by default reference prevPxValueToScrl is set to 240px hence this is executed

        resetSliderPosition();
      } else {
        displayArrow('prev', true); // If everything is right translate to prev px value
        // divCardsContainer.current.style.cssText = `transform: translateX(${prevPxValueToScrl}px)`;

        updateTranslateValue(prevPxValueToScrl); // Update slider position reference, pass 'prev' to update refrence with respect to next button click

        updateSliderPositionRef('prev');
      }
    }
  };

  var initValues = function initValues() {
    endOfSlide = false; // Slider width is an outer div which shows entire slider if we set slider to be 200px wide- 
    // -width is set on this div , we need it to calculate slider visible width in which slider is visible
    // by default slider takes full viewport width.ex : 1600px

    sliderVisibleWidth = autoGapSliderMainContainer.current.offsetWidth; // If slider has margin (space between slider cards if sliders are touch to each other then it has no margin)- 
    // -it is required to calculate how much does slider scrolls

    var eachSlide = childSliderCardRef.current;
    var eachSlideMargin = window.getComputedStyle(eachSlide).marginRight.slice(0, -2); // Convert from string to number and multiply it by two because margin is applied on both sides

    eachSlideMargin = Number(eachSlideMargin) * 2; // Each slider card width is calculated by adding its own width with its own margin

    eachSlideWidth = eachSlide.offsetWidth + eachSlideMargin; // eachSlideWidth =Number(eachSlideWidth)
    // Number of slides to scroll

    slidesToScroll = 1; // Number of slides to scroll in pixels ex: if 240px

    slidesToScrollWidth = eachSlideWidth * slidesToScroll;
    slidesToScrollWidth = sliderVisibleWidth; // to calculate and track progress of left and right scroll positions

    prevPxValueToScrl = slidesToScrollWidth; // ex:240px

    nextPxValueToScrl = -slidesToScrollWidth; // ex:-240px
    // Cards container width generally equal to eachsliderwidth*totalnumberofslides including margin ex: say 2090px

    divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth;
    displayArrow('prev', false);
    console.log("values inited");
  };

  var autoSliderMove = function autoSliderMove(timeout, autoplay) {
    // console.log("mouseleave")
    if (autoplay) {
      timerId = setInterval(function () {
        throttle(clickHandler, 'next');
      }, 100000000000000);
    }
  };

  var clearAutoSliderMove = function clearAutoSliderMove(timerId) {
    // console.log("mouseenter")
    if (timerId) {
      clearTimeout(timerId);
    }
  }; // useEffect for number of slides to show per div


  function setStyle(className, styleValue) {
    updateSlideMargin(styleValue);
  }

  function calculateMargin() {
    var minGapBetweenSlides = 10;
    var sliderVisibleWidth = autoGapSliderMainContainer.current.offsetWidth;
    var eachSlideWidth = childSliderCardRef.current.offsetWidth + minGapBetweenSlides;
    var slidesPerVisibleWidth = sliderVisibleWidth / eachSlideWidth;
    var marginToSetInPercentage = slidesPerVisibleWidth - Math.floor(slidesPerVisibleWidth);
    var marginToSetInPx = marginToSetInPercentage * eachSlideWidth;
    var marginPerSlide = marginToSetInPx / (Math.ceil(slidesPerVisibleWidth) - 1) + minGapBetweenSlides;
    setStyle('div__sliderCard--slideCalulate', marginPerSlide);
  } // Useeffect for slider next and prev button


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    // Execute when mounting
    // Initialize required values in particular function
    calculateMargin();
    initValues(); // displayContent(initvalues)

    autoSliderMove(2000, true); // sliderStyle.transform('400px')
    // Handle click event for both buttons

    nextButton.current.addEventListener('click', function () {
      return throttle(clickHandler, 'next');
    });
    prevButton.current.addEventListener('click', function () {
      return throttle(clickHandler, 'prev');
    });
    autoGapSliderMainContainer.current.addEventListener('mouseenter', function () {
      return clearAutoSliderMove(timerId);
    });
    autoGapSliderMainContainer.current.addEventListener('mouseleave', function () {
      return autoSliderMove(1000, true);
    });
    window.addEventListener('resize', function () {
      debounce(function () {
        calculateMargin();
        initValues();
        resetSliderPosition();
      });
    });
    return function () {
      // Execute when unmounting (cleanup)
      nextButton.current.removeEventListener('click', function () {
        return throttle(clickHandler, 'next');
      });
      prevButton.current.removeEventListener('click', function () {
        return throttle(clickHandler, 'prev');
      });
      autoGapSliderMainContainer.current.removeEventListener('mouseenter', function () {
        return clearAutoSliderMove(timerId);
      });
      autoGapSliderMainContainer.current.removeEventListener('mouseleave', function () {
        return autoSliderMove(1000, true);
      });
      window.addEventListener('resize', function () {
        debounce(function () {
          calculateMargin();
          initValues();
          resetSliderPosition();
        });
      });
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    // console.log('Margin updated'+slideMargin);
    setTimeout(function () {
      return divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth;
    }, 100);
  }, [slideMargin]);
  var touchStartPos = 0;

  var touchStartHandler = function touchStartHandler(e) {
    touchStartPos = e.changedTouches[0].clientX; // console.log(e.changedTouches[0].clientX)   
  };

  var touchEndHandler = function touchEndHandler(e) {
    var touchEndPos = e.changedTouches[0].clientX;
    if (touchEndPos === touchStartPos) return;
    if (touchEndPos - touchStartPos > 0) clickHandler('prev');else clickHandler('next');
  };

  var dragHandler = function dragHandler(e) {
    e.preventDefault();
  };

  var onImageLoad = function onImageLoad(image, isImgReady) {
    if (isImgReady) {
      image.classList.remove('loading');
    } else {
      image.classList.add('loading');
    }
  }; // useEffect for touch capability


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var images = Array.from(document.getElementsByClassName('imageHolder'));
    images.forEach(function (image) {
      onImageLoad(image, false);
      image.addEventListener('dragstart', function (e) {
        return dragHandler(e);
      });
      image.addEventListener('load', function (e) {
        return onImageLoad(image, true);
      });
    });
    autoGapSliderMainContainer.current.addEventListener('touchstart', function (e) {
      return touchStartHandler(e);
    }, {
      passive: true
    });
    autoGapSliderMainContainer.current.addEventListener('touchend', function (e) {
      return touchEndHandler(e);
    }, {
      passive: true
    });
    autoGapSliderMainContainer.current.addEventListener('touchmove', function (e) {
      console.log(e);
    }, {
      passive: true
    }); // childSliderCardRef.current.removeEventListener('dragstart',(e)=>dragHandler(e) )
    // autoGapSliderMainContainer.current.addEventListener('touchmove',(e)=>touchStartHandler(e) )

    return function () {
      autoGapSliderMainContainer.current.removeEventListener('touchstart', function (e) {
        return touchStartHandler(e);
      });
      autoGapSliderMainContainer.current.removeEventListener('touchend', function (e) {
        return touchEndHandler(e);
      }, {
        passive: true
      });
      images.forEach(function (image) {
        image.removeEventListener('dragstart', function (e) {
          return dragHandler(e);
        });
        image.removeEventListener('load', function (e) {
          return onImageLoad(e);
        });
      }); // autoGapSliderMainContainer.current.removeEventListener('touchmove',(e)=>touchStartHandler(e))
      // throttle(touchStartHandler,2000,e) 
    };
  }, []);

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      prevButtonDisplay = _useState5[0],
      showPrevButton = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      nextButtonDisplay = _useState6[0],
      showNextButton = _useState6[1]; // const leftStyle = {display:prevButtonDisplay?"inline-block":"none"}
  // const rightStyle = {display:nextButtonDisplay?"inline-btranslateX(translateValue)lock":"none"}
  // const sliderStyle = {transform: `translateX(${translateValue+'px'})` || '0'}


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "visibleDiv",
      ref: autoGapSliderMainContainer,
      className: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_4___default().CautoGap) + ' autoGapMainContainerDiv ',
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        ref: prevButton,
        style: sliderStyles.prevButton({
          prevButtonDisplay: prevButtonDisplay
        }),
        className: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_4___default().button) + ' prev ',
        children: "Prev"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 408,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: sliderStyles.divCardsContainer({
          translateValue: translateValue
        }),
        ref: divCardsContainer,
        className: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_4___default().autoGap) + ' imgComp ',
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_autoGapSliderCard__WEBPACK_IMPORTED_MODULE_3__.default, {
          ref: childSliderCardRef,
          imgArr: imgArr,
          styleImg: styleImg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 410,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        ref: nextButton,
        style: sliderStyles.nextButton({
          nextButtonDisplay: nextButtonDisplay
        }),
        className: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_4___default().button) + ' next ',
        children: "Next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 413,
        columnNumber: 12
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      id: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_4___default().idea),
      children: "hey"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(AutoGapSlider, "Fq8So8CpD9D4PDfNEabSAqms9wI=");

_c = AutoGapSlider;
var sliderStyles = {
  divCardsContainer: function divCardsContainer(_ref) {
    var translateValue = _ref.translateValue;
    return {
      transform: "translateX(".concat(translateValue + 'px', ")") || 0
    };
  },
  nextButton: function nextButton(_ref2) {
    var nextButtonDisplay = _ref2.nextButtonDisplay;
    return {
      display: nextButtonDisplay ? "inline-block" : "none"
    };
  },
  prevButton: function prevButton(_ref3) {
    var prevButtonDisplay = _ref3.prevButtonDisplay;
    return {
      display: prevButtonDisplay ? "inline-block" : "none"
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AutoGapSlider); // setTimeout(()=>{
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
// let items = document.getElementsByClassName(className);
// for (var i=0; i < items.length; i++) {
//   if (i+1===(items.length))items[i].style.marginRight = 'auto'
// }
// initValues()
// async function  setStyle(className, styleValue) {
//     await updateSlideMargin(styleValue);
//     initValues()
// }

var _c;

$RefreshReg$(_c, "AutoGapSlider");

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


/***/ }),

/***/ "./components/autoGapSliderCard.js":
/*!*****************************************!*\
  !*** ./components/autoGapSliderCard.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autoGapSlider.module.scss */ "./components/autoGapSlider.module.scss");
/* harmony import */ var _autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\prana\\Documents\\VSCode\\React\\react hooks\\hook1\\components\\autoGapSliderCard.js",
    _this = undefined;




var SliderCard = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = function _c(_ref, childSliderCardRef) {
  var styleImg = _ref.styleImg,
      imgArr = _ref.imgArr;
  // let imageSlide = useRef(null);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: imgArr.map(function (src, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        ref: childSliderCardRef,
        style: styleImg,
        className: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Img) + ' div div__sliderCard div__sliderCard--slideCalulate ',
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          loading: "lazy",
          style: {},
          src: src.src,
          className: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sliderImg) + ' imageHolder ',
          alt: ""
        }, src.id, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 25
        }, _this)
      }, src.id, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }, _this);
    })
  }, void 0, false);
});
_c2 = SliderCard;
/* harmony default export */ __webpack_exports__["default"] = (SliderCard);

var _c, _c2;

$RefreshReg$(_c, "SliderCard$forwardRef");
$RefreshReg$(_c2, "SliderCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRvR2FwU2xpZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2F1dG9HYXBTbGlkZXJDYXJkLmpzIl0sIm5hbWVzIjpbIkF1dG9HYXBTbGlkZXIiLCJpbWdBcnJEYXRhIiwiaWQiLCJjaGlsZFNsaWRlckNhcmRSZWYiLCJ1c2VSZWYiLCJkaXZDYXJkc0NvbnRhaW5lciIsImF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyIiwibmV4dEJ1dHRvbiIsInByZXZCdXR0b24iLCJ1c2VTdGF0ZSIsImltZ0FyciIsImltZ0FyclVwZHQiLCJpbWFnZVVwZGF0ZUFyciIsInRpbWVySWQiLCJzbGlkZU1hcmdpbiIsInVwZGF0ZVNsaWRlTWFyZ2luIiwidHJhbnNsYXRlVmFsdWUiLCJ1cGRhdGVUcmFuc2xhdGVWYWx1ZSIsInN0eWxlSW1nIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJkdW1teSIsImR1Iiwic2xpZGVyVmlzaWJsZVdpZHRoIiwiZWFjaFNsaWRlV2lkdGgiLCJzbGlkZXNUb1Njcm9sbCIsInNsaWRlc1RvU2Nyb2xsV2lkdGgiLCJuZXh0UHhWYWx1ZVRvU2NybCIsInByZXZQeFZhbHVlVG9TY3JsIiwiZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoIiwiZW5kT2ZTbGlkZSIsInRocm90dGxlIiwiXyIsImZ1bmMiLCJhcmdzIiwiZGVib3VuY2UiLCJyZXNldFNsaWRlclBvc2l0aW9uIiwiZGlzcGxheUFycm93IiwiY3VycmVudCIsIm9mZnNldFdpZHRoIiwiZGlyZWN0aW9uIiwidG9EaXNwbGF5Iiwic2hvd1ByZXZCdXR0b24iLCJzaG93TmV4dEJ1dHRvbiIsInVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmIiwidXBkYXRlcmVmIiwidXBkYXRlU2xpZGVyQXJyYXkiLCJuZXdFbGVtZW50IiwiY29uY2F0IiwiY2xpY2tIYW5kbGVyIiwiaW5pdFZhbHVlcyIsImVhY2hTbGlkZSIsImVhY2hTbGlkZU1hcmdpbiIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJtYXJnaW5SaWdodCIsInNsaWNlIiwiTnVtYmVyIiwiY29uc29sZSIsImxvZyIsImF1dG9TbGlkZXJNb3ZlIiwidGltZW91dCIsImF1dG9wbGF5Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckF1dG9TbGlkZXJNb3ZlIiwiY2xlYXJUaW1lb3V0Iiwic2V0U3R5bGUiLCJjbGFzc05hbWUiLCJzdHlsZVZhbHVlIiwiY2FsY3VsYXRlTWFyZ2luIiwibWluR2FwQmV0d2VlblNsaWRlcyIsInNsaWRlc1BlclZpc2libGVXaWR0aCIsIm1hcmdpblRvU2V0SW5QZXJjZW50YWdlIiwiTWF0aCIsImZsb29yIiwibWFyZ2luVG9TZXRJblB4IiwibWFyZ2luUGVyU2xpZGUiLCJjZWlsIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwidG91Y2hTdGFydFBvcyIsInRvdWNoU3RhcnRIYW5kbGVyIiwiZSIsImNoYW5nZWRUb3VjaGVzIiwiY2xpZW50WCIsInRvdWNoRW5kSGFuZGxlciIsInRvdWNoRW5kUG9zIiwiZHJhZ0hhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsIm9uSW1hZ2VMb2FkIiwiaW1hZ2UiLCJpc0ltZ1JlYWR5IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaW1hZ2VzIiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZm9yRWFjaCIsInBhc3NpdmUiLCJwcmV2QnV0dG9uRGlzcGxheSIsIm5leHRCdXR0b25EaXNwbGF5Iiwic3R5bGVzIiwic2xpZGVyU3R5bGVzIiwidHJhbnNmb3JtIiwiZGlzcGxheSIsIlNsaWRlckNhcmQiLCJmb3J3YXJkUmVmIiwibWFwIiwic3JjIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1B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QTtBQUFBO0FBQUE7QUFBQTtBQURKLFNBQVVnSCxHQUFHLENBQUNoSCxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQUtILEtBTkE7QUFETCxtQkFESjtBQVdILENBYjRCLENBQTdCO01BQU02RyxVO0FBY04sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2xpZGVyLmQ2YTUyMmVhNDg0OTAzM2FkNTY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVJlZixmb3J3YXJkUmVmLCB1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2F1dG9HYXBTbGlkZXIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIlxyXG5pbXBvcnQgU2xpZGVyQ2FyZCBmcm9tICcuL2F1dG9HYXBTbGlkZXJDYXJkJ1xyXG5cclxuY29uc3QgQXV0b0dhcFNsaWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGltZ0FyckRhdGEgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MxLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczIuanBnJyxcclxuICAgICAgICAgICAgaWQ6MixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMy5qcGcnLFxyXG4gICAgICAgICAgICBpZDozLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M0LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczUuanBnJyxcclxuICAgICAgICAgICAgaWQ6NSxcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNi5qcGcnLFxyXG4gICAgICAgICAgICBpZDo2LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M3LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczguanBnJyxcclxuICAgICAgICAgICAgaWQ6OCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zOS5qcGcnLFxyXG4gICAgICAgICAgICBpZDo5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MxMC5qcGcnLFxyXG4gICAgICAgICAgICBpZDoxMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J2h0dHBzOi8vcGljc3VtLnBob3Rvcy8yMDAvMzAwJyxcclxuICAgICAgICAgICAgaWQ6MTEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidodHRwczovL3BpY3N1bS5waG90b3MvMTIwMC8yMzAwJyxcclxuICAgICAgICAgICAgaWQ6MTIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczEuanBnJyxcclxuICAgICAgICAgICAgaWQ6MTMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczIuanBnJyxcclxuICAgICAgICAgICAgaWQ6MTQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczMuanBnJyxcclxuICAgICAgICAgICAgaWQ6MTUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczQuanBnJyxcclxuICAgICAgICAgICAgaWQ6MTYsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczUuanBnJyxcclxuICAgICAgICAgICAgaWQ6MTcsXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczYuanBnJyxcclxuICAgICAgICAgICAgaWQ6MTgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczcuanBnJyxcclxuICAgICAgICAgICAgaWQ6MTksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczguanBnJyxcclxuICAgICAgICAgICAgaWQ6MjAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczkuanBnJyxcclxuICAgICAgICAgICAgaWQ6MjEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczEwLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjIyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzIwMC8zMDAnLFxyXG4gICAgICAgICAgICBpZDoyMyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J2h0dHBzOi8vcGljc3VtLnBob3Rvcy8xMjAwLzIzMDAnLFxyXG4gICAgICAgICAgICBpZDoyNCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J2h0dHBzOi8vcGljc3VtLnBob3Rvcy8xMjAwLzIzMDAnLFxyXG4gICAgICAgICAgICBpZDoyNSxcclxuICAgICAgICB9LFxyXG4gICAgXHJcbiAgICBdXHJcbiAgICAvLyBFYWNoIHNsaWRlciBjYXJkXHJcbiAgICBjb25zdCBjaGlsZFNsaWRlckNhcmRSZWYgPSB1c2VSZWYoKTtcclxuICAgIC8vIFBhcmVudCBvZiBzbGlkZXIgY2FyZHMgLCBkaXYgaG9sZGluZyBhbGwgc2xpZGUgY2FyZHNcclxuICAgIGNvbnN0IGRpdkNhcmRzQ29udGFpbmVyID0gdXNlUmVmKCk7ICAgXHJcbiAgICAvLyBTbGlkZXIgY29udGFpbmluZyBjYXJkcyBjb250YWluZXIgYW5kIHByZXYsIG5leHQgYnV0dG9ucy5cclxuICAgIGNvbnN0IGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyID0gdXNlUmVmKCk7XHJcbiAgICAvLyBHcmFiYmluZyBuZXh0IGJ1dHRvblxyXG4gICAgY29uc3QgbmV4dEJ1dHRvbiA9IHVzZVJlZigpO1xyXG4gICAgLy8gR3JhYmJpbmcgcHJldiBidXR0b25cclxuICAgIGNvbnN0IHByZXZCdXR0b24gPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IFtpbWdBcnIsaW1nQXJyVXBkdF0gPSB1c2VTdGF0ZShpbWdBcnJEYXRhKVxyXG4gICAgbGV0IGltYWdlVXBkYXRlQXJyPWltZ0FycjtcclxuICAgIGxldCBpZCA9IDEyO1xyXG4gICAgbGV0IHRpbWVySWQ7XHJcbiAgICBjb25zdCBbc2xpZGVNYXJnaW4sdXBkYXRlU2xpZGVNYXJnaW5dID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbdHJhbnNsYXRlVmFsdWUsdXBkYXRlVHJhbnNsYXRlVmFsdWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBzdHlsZUltZyA9IHtcclxuICAgICAgICB3aWR0aDonMjAwcHgnLFxyXG4gICAgICAgIGhlaWdodDonMzAwcHgnLFxyXG4gICAgICAgIG1hcmdpbjpgMCAke3NsaWRlTWFyZ2luLzJ9cHggMCAke3NsaWRlTWFyZ2luLzJ9cHhgXHJcbiAgICB9O1xyXG4gICAgbGV0IFtkdW1teSxkdV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgLy8gSW5pdGlhbGl6ZSBkZWZhdWx0IHZhbHVlc1xyXG4gICAgbGV0IHNsaWRlclZpc2libGVXaWR0aD0wO1xyXG4gICAgbGV0IGVhY2hTbGlkZVdpZHRoID0gMDtcclxuICAgIGxldCBzbGlkZXNUb1Njcm9sbCA9IDA7XHJcbiAgICBsZXQgc2xpZGVzVG9TY3JvbGxXaWR0aD0wO1xyXG4gICAgbGV0IG5leHRQeFZhbHVlVG9TY3JsID0gMDsgXHJcbiAgICBsZXQgcHJldlB4VmFsdWVUb1NjcmwgPSAwO1xyXG4gICAgbGV0IGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aD0wO1xyXG4gICAgLy8gRGV0ZWN0IGlmIHdlIHJlYWNoZWQgZW5kIG9mIHRoZSBzbGlkZXNcclxuICAgIGxldCBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgIC8vIExvYWRhc2ggdGhyb3R0bGVyIHRvIHRocm90dGxlIHJlc2l6ZSBhbmQgaWYgdXNlciBjbGlja3MgYnV0dG9uIG1hbnkgdGltZXMgXHJcbiAgICBsZXQgdGhyb3R0bGUgPSBfLnRocm90dGxlKChmdW5jLC4uLmFyZ3MpPT4ge1xyXG4gICAgICAgIGZ1bmMoLi4uYXJncylcclxuICAgIH0sIDYwMCk7XHJcbiAgICBsZXQgZGVib3VuY2UgPSBfLmRlYm91bmNlKChmdW5jLC4uLmFyZ3MpPT4ge1xyXG4gICAgICAgIGZ1bmMoLi4uYXJncylcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZGVpYm91bmMnKVxyXG4gICAgfSwgODAwKTtcclxuICAgIGNvbnN0IHJlc2V0U2xpZGVyUG9zaXRpb24gPSAoKSA9PntcclxuICAgICAgICAvLyBkZWZhdWx0IHNsaWRlc1RvU2Nyb2xsV2lkdGg6MjQwcHhcclxuICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgLy8gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtJHswfXB4KWA7XHJcbiAgICAgICAgdXBkYXRlVHJhbnNsYXRlVmFsdWUoMClcclxuICAgICAgICBkaXNwbGF5QXJyb3coJ3ByZXYnLGZhbHNlKVxyXG4gICAgICAgIGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGhcclxuICAgIH1cclxuICAgIGNvbnN0IGRpc3BsYXlBcnJvdz0oZGlyZWN0aW9uPSdwcmV2Jyx0b0Rpc3BsYXk9dHJ1ZSk9PntcclxuICAgICAgICBpZiAoZGlyZWN0aW9uPT09J3ByZXYnKXtcclxuICAgICAgICAgICAgaWYgICghdG9EaXNwbGF5KXNob3dQcmV2QnV0dG9uKGZhbHNlKVxyXG4gICAgICAgICAgICBlbHNlIHNob3dQcmV2QnV0dG9uKHRydWUpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmICAoIXRvRGlzcGxheSlzaG93TmV4dEJ1dHRvbihmYWxzZSlcclxuICAgICAgICAgICAgZWxzZSBzaG93TmV4dEJ1dHRvbih0cnVlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmID0gKHVwZGF0ZXJlZikgPT57XHJcbiAgICAgICAgLy8gdHJhbnNsYXRlWCgwKSAtPiBpbml0aWFsIHBvc2l0aW9uLCBzdGFydGluZyBwb3NpdGlvblxyXG4gICAgICAgIC8vIHRyYW5zbGF0ZVgoLTI0MHB4KSAtPiBtb3ZlcyBzbGlkZSBpbiAtPiBkaXJlY3Rpb24gYnkgMjQwcHgoZWFjaCBzbGlkZSB3aWR0aCBieSBkZWZhdWx0KVxyXG4gICAgICAgIGlmICh1cGRhdGVyZWYgPT09ICduZXh0Jyl7XHJcbiAgICAgICAgICAgIC8vIG1pbnVzIHBvc2l0aW9uIGdvZXMgLT4gZGlyZWN0aW9uIG9uIHRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAvLyBleDogcHJldlB4VmFsdWVUb1Njcmw9MjQwLG5leHRQeFZhbHVlVG9TY3JsPS0yNDAgIGFuZCBzbGlkZXNUb1Njcm9sbFdpZHRoPTI0MFxyXG4gICAgICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHByZXZQeFZhbHVlVG9TY3JsLXNsaWRlc1RvU2Nyb2xsV2lkdGg7IFxyXG4gICAgICAgICAgICAvLyBmaXJzdC10aW1lOnByZXZQeFZhbHVlVG9TY3JsOjBcclxuICAgICAgICAgICAgLy8gc2Vjb25kLXRpbWU6cHJldlB4VmFsdWVUb1Njcmw6LTI0MFxyXG4gICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IG5leHRQeFZhbHVlVG9TY3JsLXNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgICAgIC8vIGZpcnN0LXRpbWU6bmV4dFB4VmFsdWVUb1Njcmw6LTQ4MFxyXG4gICAgICAgICAgICAvLyBzZWNvbmQtdGltZTpuZXh0UHhWYWx1ZVRvU2NybDotNzIwXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIC8vIGV4OiBwcmV2UHhWYWx1ZVRvU2NybD0tMjQwLG5leHRQeFZhbHVlVG9TY3JsPS03MjAgIGFuZCBzbGlkZXNUb1Njcm9sbFdpZHRoPTI0MFxyXG4gICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9bmV4dFB4VmFsdWVUb1NjcmwgK3NsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgICAgIC8vIGZpcnN0LXRpbWU6cHJldlB4VmFsdWVUb1Njcmw6NDgwXHJcbiAgICAgICAgICAgIC8vIHNlY29uZC10aW1lOnByZXZQeFZhbHVlVG9TY3JsOjYyMFxyXG4gICAgICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHByZXZQeFZhbHVlVG9TY3JsK3NsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgICAgIC8vIGZpcnN0LXRpbWU6bmV4dFB4VmFsdWVUb1Njcmw6MFxyXG4gICAgICAgICAgICAvLyBzZWNvbmQtdGltZTpuZXh0UHhWYWx1ZVRvU2NybDoyNDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCB1cGRhdGVTbGlkZXJBcnJheSA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICdzcmMnOidzdGF0aWMvcGVyMS5qcGcnLFxyXG4gICAgICAgICAgICAgICAgaWQ6aWQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICdzcmMnOidzdGF0aWMvcGVyMi5qcGcnLFxyXG4gICAgICAgICAgICAgICAgaWQ6aWQrMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICAgIC8vIGltZ0Fyci5wdXNoKC4uLm5ld0VsZW1lbnQpXHJcbiAgICAgICAgaW1hZ2VVcGRhdGVBcnIgPSAgaW1hZ2VVcGRhdGVBcnIuY29uY2F0KG5ld0VsZW1lbnQpXHJcbiAgICAgICAgaW1nQXJyVXBkdChpbWFnZVVwZGF0ZUFyciApO1xyXG4gICAgICAgIGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGhcclxuICAgICAgICBpZCA9IGlkKzI7XHJcbiAgICAgICAgLy8gLy8gY29uc29sZS5sb2coaW1nQXJyRGF0YSlcclxuICAgICAgICAvLyBjbGlja0hhbmRsZXIoJ25leHQnKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGRpcmVjdGlvbik9PnsgXHJcbiAgICAgICAgLy8gSWYgbmV4dCBidXR0b24gaXMgY2xpY2tlZFxyXG4gICAgICAgIC8vIGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGhcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpe1xyXG4gICAgICAgICAgICBkaXNwbGF5QXJyb3coJ3ByZXYnLHRydWUpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBJZiByZWFjaGVkIGVuZCBvZiBzbGlkZSByZXR1cm4gdG8gZmlyc3Qgc2xpZGVcclxuICAgICAgICAgICAgaWYoZW5kT2ZTbGlkZSl7ICBcclxuICAgICAgICAgICAgICAgIC8vIFJldHVybiB0byBmaXJzdCBzbGlkZSBhbmQgcmVzZXQgcG9zaXRpb25zIG9mIHNjcm9sbCByZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgIHJlc2V0U2xpZGVyUG9zaXRpb24oKVxyXG4gICAgICAgICAgICAgICAgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAvLyBleDogc2F5IGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCA9IDIzNjA7IGFuZCBzbGlkZXJWaXNpYmxlV2lkdGggPSAxMzM2IGFuZCBuZXh0UHhWYWx1ZVRvU2NybCA9IC0xNDQwIHRoZW5cclxuICAgICAgICAgICAgICAgIC8vIHNsaWRlclZpc2libGVXaWR0aCBpcyBzbGlkZXIgd2lkdGggd2hpY2ggaXMgdmlzaWJsZSB0byB1c2VyXHJcbiAgICAgICAgICAgICAgICAvLyBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggaXMgdG90YWwgd2lkdGggb2YgY29udGFpbmVyIGhvbGRpbmcgY2FyZHMgPSAgdmlzaWJsZSBhcmVhK2hpZGRlbiBhcmVhXHJcbiAgICAgICAgICAgIH1lbHNlIGlmICgoZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoLXNsaWRlclZpc2libGVXaWR0aC1zbGlkZU1hcmdpbi0xMCk8PSAtbmV4dFB4VmFsdWVUb1NjcmwpIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIHNsaWRlIGlzIGFib3V0IHRvIHJlYWNoIGxhc3Qgc2xpZGUgLCBsYXN0IGJ1dCBvbmUgY2xpY2sgb2YgZW5kb2ZzbGlkZVxyXG4gICAgICAgICAgICAgICAgLy8gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgkey1kaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGgrc2xpZGVyVmlzaWJsZVdpZHRofXB4KWBcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVRyYW5zbGF0ZVZhbHVlKC1kaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGgrc2xpZGVyVmlzaWJsZVdpZHRoKVxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHNsaWRlciBwb3NpdGlvbiByZWZlcmVuY2UsIHBhc3MgJ25leHQnIHRvIHVwZGF0ZSByZWZyZW5jZSB3aXRoIHJlc3BlY3QgdG8gbmV4dCBidXR0b24gY2xpY2tcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmKCduZXh0JylcclxuICAgICAgICAgICAgICAgIGVuZE9mU2xpZGUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGVTbGlkZXJBcnJheSgpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgZXZlcnl0aGluZyBpcyByaWdodCB0cmFuc2xhdGUgdG8gbmV4dCBweCB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgLy8gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke25leHRQeFZhbHVlVG9TY3JsfXB4KWAgXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVUcmFuc2xhdGVWYWx1ZShuZXh0UHhWYWx1ZVRvU2NybClcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBzbGlkZXIgcG9zaXRpb24gcmVmZXJlbmNlLCBwYXNzICduZXh0JyB0byB1cGRhdGUgcmVmcmVuY2Ugd2l0aCByZXNwZWN0IHRvIG5leHQgYnV0dG9uIGNsaWNrXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTbGlkZXJQb3NpdGlvblJlZignbmV4dCcpXHJcbiAgICAgICAgICAgICAgICBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKXtcclxuICAgICAgICAgICAgLy8gRW5kIG9mIHNsaWRlIGNhbm5vdCBiZSByZWFjaGVkIGJ5IGNsaWNraW5nIHByZXZpb3VzIGJ1dHRvblxyXG4gICAgICAgICAgICBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgICAgICAgICAgaWYocHJldlB4VmFsdWVUb1Njcmw+MCl7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5QXJyb3coJ3ByZXYnLGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgLy8gSWYgc2xpZGVyIGlzIG92ZXIgbGVmdCByZXR1cm4gdG8gZmlyc3Qgc2xpZGUgYW5kIHJlc2V0IHBvc2l0aW9ucyBvZiBzY3JvbGwgcmVmZXJlbmNlXHJcbiAgICAgICAgICAgICAgICAvLyBleDogc2F5IGJ5IGRlZmF1bHQgcmVmZXJlbmNlIHByZXZQeFZhbHVlVG9TY3JsIGlzIHNldCB0byAyNDBweCBoZW5jZSB0aGlzIGlzIGV4ZWN1dGVkXHJcbiAgICAgICAgICAgICAgICByZXNldFNsaWRlclBvc2l0aW9uKClcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5QXJyb3coJ3ByZXYnLHRydWUpXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBldmVyeXRoaW5nIGlzIHJpZ2h0IHRyYW5zbGF0ZSB0byBwcmV2IHB4IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAvLyBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7cHJldlB4VmFsdWVUb1Njcmx9cHgpYDtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVRyYW5zbGF0ZVZhbHVlKHByZXZQeFZhbHVlVG9TY3JsKVxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHNsaWRlciBwb3NpdGlvbiByZWZlcmVuY2UsIHBhc3MgJ3ByZXYnIHRvIHVwZGF0ZSByZWZyZW5jZSB3aXRoIHJlc3BlY3QgdG8gbmV4dCBidXR0b24gY2xpY2tcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmKCdwcmV2JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgaW5pdFZhbHVlcyA9KCkgPT57XHJcbiAgICAgICAgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAgICAgLy8gU2xpZGVyIHdpZHRoIGlzIGFuIG91dGVyIGRpdiB3aGljaCBzaG93cyBlbnRpcmUgc2xpZGVyIGlmIHdlIHNldCBzbGlkZXIgdG8gYmUgMjAwcHggd2lkZS0gXHJcbiAgICAgICAgLy8gLXdpZHRoIGlzIHNldCBvbiB0aGlzIGRpdiAsIHdlIG5lZWQgaXQgdG8gY2FsY3VsYXRlIHNsaWRlciB2aXNpYmxlIHdpZHRoIGluIHdoaWNoIHNsaWRlciBpcyB2aXNpYmxlXHJcbiAgICAgICAgLy8gYnkgZGVmYXVsdCBzbGlkZXIgdGFrZXMgZnVsbCB2aWV3cG9ydCB3aWR0aC5leCA6IDE2MDBweFxyXG4gICAgICAgIHNsaWRlclZpc2libGVXaWR0aCA9IGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgLy8gSWYgc2xpZGVyIGhhcyBtYXJnaW4gKHNwYWNlIGJldHdlZW4gc2xpZGVyIGNhcmRzIGlmIHNsaWRlcnMgYXJlIHRvdWNoIHRvIGVhY2ggb3RoZXIgdGhlbiBpdCBoYXMgbm8gbWFyZ2luKS0gXHJcbiAgICAgICAgLy8gLWl0IGlzIHJlcXVpcmVkIHRvIGNhbGN1bGF0ZSBob3cgbXVjaCBkb2VzIHNsaWRlciBzY3JvbGxzXHJcbiAgICAgICAgbGV0IGVhY2hTbGlkZSA9IGNoaWxkU2xpZGVyQ2FyZFJlZi5jdXJyZW50XHJcbiAgICAgICAgbGV0IGVhY2hTbGlkZU1hcmdpbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVhY2hTbGlkZSkubWFyZ2luUmlnaHQuc2xpY2UoMCwgLTIpO1xyXG4gICAgICAgIC8vIENvbnZlcnQgZnJvbSBzdHJpbmcgdG8gbnVtYmVyIGFuZCBtdWx0aXBseSBpdCBieSB0d28gYmVjYXVzZSBtYXJnaW4gaXMgYXBwbGllZCBvbiBib3RoIHNpZGVzXHJcbiAgICAgICAgZWFjaFNsaWRlTWFyZ2luPU51bWJlcihlYWNoU2xpZGVNYXJnaW4pKjJcclxuICAgICAgICAvLyBFYWNoIHNsaWRlciBjYXJkIHdpZHRoIGlzIGNhbGN1bGF0ZWQgYnkgYWRkaW5nIGl0cyBvd24gd2lkdGggd2l0aCBpdHMgb3duIG1hcmdpblxyXG4gICAgICAgIGVhY2hTbGlkZVdpZHRoID0gZWFjaFNsaWRlLm9mZnNldFdpZHRoK2VhY2hTbGlkZU1hcmdpbjtcclxuICAgICAgICAvLyBlYWNoU2xpZGVXaWR0aCA9TnVtYmVyKGVhY2hTbGlkZVdpZHRoKVxyXG4gICAgICAgIC8vIE51bWJlciBvZiBzbGlkZXMgdG8gc2Nyb2xsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGwgPSAxXHJcbiAgICAgICAgLy8gTnVtYmVyIG9mIHNsaWRlcyB0byBzY3JvbGwgaW4gcGl4ZWxzIGV4OiBpZiAyNDBweFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsV2lkdGg9ZWFjaFNsaWRlV2lkdGgqc2xpZGVzVG9TY3JvbGw7XHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGxXaWR0aCA9IHNsaWRlclZpc2libGVXaWR0aDtcclxuICAgICAgICAvLyB0byBjYWxjdWxhdGUgYW5kIHRyYWNrIHByb2dyZXNzIG9mIGxlZnQgYW5kIHJpZ2h0IHNjcm9sbCBwb3NpdGlvbnNcclxuICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7IC8vIGV4OjI0MHB4XHJcbiAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgLy8gZXg6LTI0MHB4XHJcbiAgICAgICAgLy8gQ2FyZHMgY29udGFpbmVyIHdpZHRoIGdlbmVyYWxseSBlcXVhbCB0byBlYWNoc2xpZGVyd2lkdGgqdG90YWxudW1iZXJvZnNsaWRlcyBpbmNsdWRpbmcgbWFyZ2luIGV4OiBzYXkgMjA5MHB4XHJcbiAgICAgICAgZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aFxyXG4gICAgICAgIGRpc3BsYXlBcnJvdygncHJldicsZmFsc2UpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ2YWx1ZXMgaW5pdGVkXCIpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGF1dG9TbGlkZXJNb3ZlPSh0aW1lb3V0LGF1dG9wbGF5KT0+e1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibW91c2VsZWF2ZVwiKVxyXG4gICAgICAgIGlmKGF1dG9wbGF5KXtcclxuICAgICAgICAgICAgdGltZXJJZD1zZXRJbnRlcnZhbCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhyb3R0bGUoY2xpY2tIYW5kbGVyLCduZXh0JylcclxuICAgICAgICAgICAgfSwxMDAwMDAwMDAwMDAwMDApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xlYXJBdXRvU2xpZGVyTW92ZT0odGltZXJJZCk9PntcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdXNlZW50ZXJcIilcclxuICAgICAgICBpZih0aW1lcklkKXtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdXNlRWZmZWN0IGZvciBudW1iZXIgb2Ygc2xpZGVzIHRvIHNob3cgcGVyIGRpdlxyXG4gICAgZnVuY3Rpb24gIHNldFN0eWxlKGNsYXNzTmFtZSwgc3R5bGVWYWx1ZSkge1xyXG4gICAgICAgIHVwZGF0ZVNsaWRlTWFyZ2luKHN0eWxlVmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlTWFyZ2luKCl7XHJcbiAgICAgICAgY29uc3QgbWluR2FwQmV0d2VlblNsaWRlcyA9IDEwXHJcbiAgICAgICAgY29uc3Qgc2xpZGVyVmlzaWJsZVdpZHRoID0gYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICBjb25zdCBlYWNoU2xpZGVXaWR0aCA9IGNoaWxkU2xpZGVyQ2FyZFJlZi5jdXJyZW50Lm9mZnNldFdpZHRoK21pbkdhcEJldHdlZW5TbGlkZXNcclxuICAgICAgICBjb25zdCBzbGlkZXNQZXJWaXNpYmxlV2lkdGggPSBzbGlkZXJWaXNpYmxlV2lkdGgvKGVhY2hTbGlkZVdpZHRoKTtcclxuICAgICAgICBjb25zdCBtYXJnaW5Ub1NldEluUGVyY2VudGFnZSA9IHNsaWRlc1BlclZpc2libGVXaWR0aCAtIE1hdGguZmxvb3Ioc2xpZGVzUGVyVmlzaWJsZVdpZHRoKVxyXG4gICAgICAgIGNvbnN0IG1hcmdpblRvU2V0SW5QeCA9ICgobWFyZ2luVG9TZXRJblBlcmNlbnRhZ2UpKmVhY2hTbGlkZVdpZHRoKVxyXG4gICAgICAgIGNvbnN0IG1hcmdpblBlclNsaWRlID0gKG1hcmdpblRvU2V0SW5QeC8oTWF0aC5jZWlsKHNsaWRlc1BlclZpc2libGVXaWR0aCktMSkpK21pbkdhcEJldHdlZW5TbGlkZXNcclxuICAgICAgICBzZXRTdHlsZSgnZGl2X19zbGlkZXJDYXJkLS1zbGlkZUNhbHVsYXRlJyxtYXJnaW5QZXJTbGlkZSlcclxuICAgIH1cclxuICAgIC8vIFVzZWVmZmVjdCBmb3Igc2xpZGVyIG5leHQgYW5kIHByZXYgYnV0dG9uXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAvLyBFeGVjdXRlIHdoZW4gbW91bnRpbmdcclxuICAgICAgICAvLyBJbml0aWFsaXplIHJlcXVpcmVkIHZhbHVlcyBpbiBwYXJ0aWN1bGFyIGZ1bmN0aW9uXHJcbiAgICAgICAgY2FsY3VsYXRlTWFyZ2luKClcclxuICAgICAgICBpbml0VmFsdWVzKClcclxuICAgICAgICAvLyBkaXNwbGF5Q29udGVudChpbml0dmFsdWVzKVxyXG4gICAgICAgIGF1dG9TbGlkZXJNb3ZlKDIwMDAsdHJ1ZSlcclxuICAgICAgICAvLyBzbGlkZXJTdHlsZS50cmFuc2Zvcm0oJzQwMHB4JylcclxuICAgICAgICAvLyBIYW5kbGUgY2xpY2sgZXZlbnQgZm9yIGJvdGggYnV0dG9uc1xyXG4gICAgICAgIG5leHRCdXR0b24uY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnRocm90dGxlKGNsaWNrSGFuZGxlciwnbmV4dCcpKVxyXG4gICAgICAgIHByZXZCdXR0b24uY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnRocm90dGxlKGNsaWNrSGFuZGxlciwncHJldicpKVxyXG4gICAgICAgIGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsKCk9PmNsZWFyQXV0b1NsaWRlck1vdmUodGltZXJJZCkpXHJcbiAgICAgICAgYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywoKT0+YXV0b1NsaWRlck1vdmUoMTAwMCx0cnVlKSApXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsKCk9PntcclxuICAgICAgICAgICAgZGVib3VuY2UoKCk9PntcclxuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZU1hcmdpbigpO1xyXG4gICAgICAgICAgICAgICAgaW5pdFZhbHVlcygpO1xyXG4gICAgICAgICAgICAgICAgcmVzZXRTbGlkZXJQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gKCk9PntcclxuICAgICAgICAgICAgLy8gRXhlY3V0ZSB3aGVuIHVubW91bnRpbmcgKGNsZWFudXApXHJcbiAgICAgICAgICAgIG5leHRCdXR0b24uY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnRocm90dGxlKGNsaWNrSGFuZGxlciwnbmV4dCcpKVxyXG4gICAgICAgICAgICBwcmV2QnV0dG9uLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT50aHJvdHRsZShjbGlja0hhbmRsZXIsJ3ByZXYnKSkgICAgICAgXHJcbiAgICAgICAgICAgIGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsKCk9PmNsZWFyQXV0b1NsaWRlck1vdmUodGltZXJJZCkpXHJcbiAgICAgICAgICAgIGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsKCk9PmF1dG9TbGlkZXJNb3ZlKDEwMDAsdHJ1ZSkgKVxyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywoKT0+e1xyXG4gICAgICAgICAgICAgICAgZGVib3VuY2UoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGVNYXJnaW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBpbml0VmFsdWVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRTbGlkZXJQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfSk7ICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sW10pXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnTWFyZ2luIHVwZGF0ZWQnK3NsaWRlTWFyZ2luKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT5kaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoLDEwMClcclxuICAgIH0sW3NsaWRlTWFyZ2luXSlcclxuICAgIGxldCB0b3VjaFN0YXJ0UG9zID0wO1xyXG4gICAgY29uc3QgdG91Y2hTdGFydEhhbmRsZXIgPSAoZSk9PntcclxuICAgICAgICB0b3VjaFN0YXJ0UG9zPWUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgpICAgXHJcbiAgICB9XHJcbiAgICBjb25zdCB0b3VjaEVuZEhhbmRsZXI9KGUpPT57XHJcbiAgICAgICAgbGV0IHRvdWNoRW5kUG9zID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgIGlmICh0b3VjaEVuZFBvcz09PXRvdWNoU3RhcnRQb3MpIHJldHVyblxyXG4gICAgICAgIGlmICh0b3VjaEVuZFBvcy10b3VjaFN0YXJ0UG9zPjApIGNsaWNrSGFuZGxlcigncHJldicpXHJcbiAgICAgICAgZWxzZSBjbGlja0hhbmRsZXIoJ25leHQnKVxyXG4gICAgfVxyXG4gICAgY29uc3QgZHJhZ0hhbmRsZXIgPSAoZSkgPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB9XHJcbiAgICBjb25zdCBvbkltYWdlTG9hZCA9IChpbWFnZSxpc0ltZ1JlYWR5KSA9PntcclxuICAgICAgICBpZiAoaXNJbWdSZWFkeSl7XHJcbiAgICAgICAgICAgIGltYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJylcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvLyB1c2VFZmZlY3QgZm9yIHRvdWNoIGNhcGFiaWxpdHlcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGxldCBpbWFnZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltYWdlSG9sZGVyJykpXHJcbiAgICAgICAgaW1hZ2VzLmZvckVhY2goKGltYWdlKT0+e1xyXG4gICAgICAgICAgICBvbkltYWdlTG9hZChpbWFnZSxmYWxzZSlcclxuICAgICAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywoZSk9PmRyYWdIYW5kbGVyKGUpIClcclxuICAgICAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsKGUpPT5vbkltYWdlTG9hZChpbWFnZSx0cnVlKSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsKGUpPT50b3VjaFN0YXJ0SGFuZGxlcihlKSx7cGFzc2l2ZTp0cnVlfSlcclxuICAgICAgICBhdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywoZSk9PnRvdWNoRW5kSGFuZGxlcihlKSx7cGFzc2l2ZTp0cnVlfSApXHJcbiAgICAgICAgYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLChlKT0+e2NvbnNvbGUubG9nKGUpfSx7cGFzc2l2ZTp0cnVlfSlcclxuICAgICAgICAvLyBjaGlsZFNsaWRlckNhcmRSZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLChlKT0+ZHJhZ0hhbmRsZXIoZSkgKVxyXG4gICAgICAgIC8vIGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywoZSk9PnRvdWNoU3RhcnRIYW5kbGVyKGUpIClcclxuICAgICAgICByZXR1cm4gKCk9PiB7XHJcbiAgICAgICAgICAgIGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsKGUpPT50b3VjaFN0YXJ0SGFuZGxlcihlKSApXHJcbiAgICAgICAgICAgIGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLChlKT0+dG91Y2hFbmRIYW5kbGVyKGUpLHtwYXNzaXZlOnRydWV9KVxyXG4gICAgICAgICAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UpPT57XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLChlKT0+ZHJhZ0hhbmRsZXIoZSkgKVxyXG4gICAgICAgICAgICAgICAgaW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsKGUpPT5vbkltYWdlTG9hZChlKSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8gYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLChlKT0+dG91Y2hTdGFydEhhbmRsZXIoZSkpXHJcbiAgICAgICAgICAgIC8vIHRocm90dGxlKHRvdWNoU3RhcnRIYW5kbGVyLDIwMDAsZSkgXHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuICAgIGNvbnN0IFtwcmV2QnV0dG9uRGlzcGxheSxzaG93UHJldkJ1dHRvbl09IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW25leHRCdXR0b25EaXNwbGF5LHNob3dOZXh0QnV0dG9uXT0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICAvLyBjb25zdCBsZWZ0U3R5bGUgPSB7ZGlzcGxheTpwcmV2QnV0dG9uRGlzcGxheT9cImlubGluZS1ibG9ja1wiOlwibm9uZVwifVxyXG4gICAgLy8gY29uc3QgcmlnaHRTdHlsZSA9IHtkaXNwbGF5Om5leHRCdXR0b25EaXNwbGF5P1wiaW5saW5lLWJ0cmFuc2xhdGVYKHRyYW5zbGF0ZVZhbHVlKWxvY2tcIjpcIm5vbmVcIn1cclxuICAgIC8vIGNvbnN0IHNsaWRlclN0eWxlID0ge3RyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHt0cmFuc2xhdGVWYWx1ZSsncHgnfSlgIHx8ICcwJ31cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8ZGl2IGlkPVwidmlzaWJsZURpdlwiIHJlZj17YXV0b0dhcFNsaWRlck1haW5Db250YWluZXJ9ICBjbGFzc05hbWU9e3N0eWxlcy5DYXV0b0dhcCArICcgYXV0b0dhcE1haW5Db250YWluZXJEaXYgJ30+XHJcbiAgICAgICAgICAgIDxpIHJlZj17cHJldkJ1dHRvbn0gc3R5bGU9e3NsaWRlclN0eWxlcy5wcmV2QnV0dG9uKHtwcmV2QnV0dG9uRGlzcGxheX0pfSAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uKycgcHJldiAnfT5QcmV2PC9pPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiAgc3R5bGU9e3NsaWRlclN0eWxlcy5kaXZDYXJkc0NvbnRhaW5lcih7dHJhbnNsYXRlVmFsdWV9KX0gcmVmPXtkaXZDYXJkc0NvbnRhaW5lcn0gY2xhc3NOYW1lPXtzdHlsZXMuYXV0b0dhcCsgJyBpbWdDb21wICd9PlxyXG4gICAgICAgICAgICA8U2xpZGVyQ2FyZCByZWY9e2NoaWxkU2xpZGVyQ2FyZFJlZn0gaW1nQXJyPXtpbWdBcnJ9IHN0eWxlSW1nPXtzdHlsZUltZ30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGkgcmVmPXtuZXh0QnV0dG9ufSBzdHlsZT17c2xpZGVyU3R5bGVzLm5leHRCdXR0b24oe25leHRCdXR0b25EaXNwbGF5fSl9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbisnIG5leHQgJ30+TmV4dDwvaT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCAgaWQ9e3N0eWxlc1snaWRlYSddfSA+aGV5PC9wPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuY29uc3Qgc2xpZGVyU3R5bGVzID0ge1xyXG4gICAgZGl2Q2FyZHNDb250YWluZXI6KHt0cmFuc2xhdGVWYWx1ZX0pPT4oe1xyXG4gICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHt0cmFuc2xhdGVWYWx1ZSsncHgnfSlgIHx8ICcwJyxcclxuICAgIH0pLFxyXG4gICAgbmV4dEJ1dHRvbjooe25leHRCdXR0b25EaXNwbGF5fSk9Pih7XHJcbiAgICAgICAgZGlzcGxheTpuZXh0QnV0dG9uRGlzcGxheT9cImlubGluZS1ibG9ja1wiOlwibm9uZVwiXHJcbiAgICB9KSxcclxuICAgIHByZXZCdXR0b246KHtwcmV2QnV0dG9uRGlzcGxheX0pPT4oe1xyXG4gICAgICAgIGRpc3BsYXk6cHJldkJ1dHRvbkRpc3BsYXk/XCJpbmxpbmUtYmxvY2tcIjpcIm5vbmVcIlxyXG4gICAgfSlcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBdXRvR2FwU2xpZGVyO1xyXG4gICAvLyBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAvLyAgICAgaWQ9aWQrMjtcclxuICAgIC8vICAgICBpbWdBcnJVcGR0KFsuLi5pbWdTdGF0ZSwgICB7XHJcbiAgICAvLyAgICAgICAgICdzcmMnOidzdGF0aWMvcGVyMS5qcGcnLFxyXG4gICAgLy8gICAgICAgICBpZDppZCxcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgJ3NyYyc6J3N0YXRpYy9wZXIyLmpwZycsXHJcbiAgICAvLyAgICAgICAgIGlkOmlkKzEsXHJcbiAgICAvLyAgICAgfV0pXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coaWQpXHJcbiAgICAgICAgXHJcbiAgICAvLyB9LDEwMDAwKVxyXG4vLyBlbHNlIGlmKGxlZnQ+IC1zbGlkZXNUb1Njcm9sbFdpZHRoKXtcclxuLy8gICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4vLyAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbi8vICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vIH1cclxuLy8gY29uc3QgY2xpY2tIYW5kbGVyID0gKGRpcmVjdGlvbik9PnsgXHJcbi8vICAgICBjb25zdCBsZWZ0ID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XHJcbi8vICAgICBjb25zb2xlLmxvZyhuZXh0UHhWYWx1ZVRvU2NybCwtZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGgpXHJcbi8vICAgICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpe1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIGlmKG5leHRQeFZhbHVlVG9TY3JsLC1kaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoK3NsaWRlclZpc2libGVXaWR0aCl7XHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuLy8gICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgIH1lbHNlIGlmIChkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoLXNsaWRlclZpc2libGVXaWR0aDwgLW5leHRQeFZhbHVlVG9TY3JsKSB7XHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHstZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGh9cHgpYFxyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1kaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoK3NsaWRlclZpc2libGVXaWR0aFxyXG4vLyAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke25leHRQeFZhbHVlVG9TY3JsfXB4KWBcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0ID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBwcmV2UHhWYWx1ZVRvU2NybC1zbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IG5leHRQeFZhbHVlVG9TY3JsLXNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4vLyAgICAgfWVsc2UgaWYoZGlyZWN0aW9uID09PSAncHJldicpe1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHByZXZQeFZhbHVlVG9TY3JsKVxyXG4vLyAgICAgICAgIGNvbnN0IGxlZnQgPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbi8vICAgICAgICAgaWYocHJldlB4VmFsdWVUb1Njcmw+MCl7XHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuLy8gICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgIH1lbHNle1xyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7cHJldlB4VmFsdWVUb1Njcmx9cHgpYDtcclxuLy8gICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPW5leHRQeFZhbHVlVG9TY3JsICtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHByZXZQeFZhbHVlVG9TY3JsK3NsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4vLyAgICAgfVxyXG4vLyAvLyB9XHJcbi8vIGNvbnN0IGxlZnQgPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbi8vIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcblxyXG4vLyBsZXQgaXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSk7XHJcbi8vIGZvciAodmFyIGk9MDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgaWYgKGkrMT09PShpdGVtcy5sZW5ndGgpKWl0ZW1zW2ldLnN0eWxlLm1hcmdpblJpZ2h0ID0gJ2F1dG8nXHJcbi8vIH1cclxuXHJcbi8vIGluaXRWYWx1ZXMoKVxyXG4vLyBhc3luYyBmdW5jdGlvbiAgc2V0U3R5bGUoY2xhc3NOYW1lLCBzdHlsZVZhbHVlKSB7XHJcbi8vICAgICBhd2FpdCB1cGRhdGVTbGlkZU1hcmdpbihzdHlsZVZhbHVlKTtcclxuXHJcbi8vICAgICBpbml0VmFsdWVzKClcclxuLy8gfSIsImltcG9ydCBSZWFjdCx7dXNlUmVmLGZvcndhcmRSZWYsIHVzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYXV0b0dhcFNsaWRlci5tb2R1bGUuc2NzcydcclxuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiXHJcblxyXG5jb25zdCBTbGlkZXJDYXJkID0gZm9yd2FyZFJlZigoe3N0eWxlSW1nLGltZ0Fycn0sY2hpbGRTbGlkZXJDYXJkUmVmKSA9PntcclxuICAgIC8vIGxldCBpbWFnZVNsaWRlID0gdXNlUmVmKG51bGwpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7aW1nQXJyLm1hcCgoc3JjLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17c3JjLmlkfSAgcmVmPXtjaGlsZFNsaWRlckNhcmRSZWZ9IHN0eWxlPXtzdHlsZUltZ30gIGNsYXNzTmFtZT17c3R5bGVzLkltZysnIGRpdiBkaXZfX3NsaWRlckNhcmQgZGl2X19zbGlkZXJDYXJkLS1zbGlkZUNhbHVsYXRlICd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGtleT17c3JjLmlkfSBsb2FkaW5nPSdsYXp5JyBzdHlsZT17e319IHNyYz17c3JjLnNyY30gICBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJJbWcgKyAnIGltYWdlSG9sZGVyICd9ICBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyQ2FyZCJdLCJzb3VyY2VSb290IjoiIn0=