!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in i)return i[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},t.parcelRequired7c6=n);var s=n("8MBJY"),r=n("a2hTj");new(function(){"use strict";function t(i){e(s)(this,t);this.config=Object.assign({backscroll:!0,linkAttributeName:"data-hystmodal",closeOnOverlay:!0,closeOnEsc:!0,closeOnButton:!0,waitTransitions:!1,catchFocus:!0,fixedSelectors:"*[data-hystfixed]",beforeOpen:function(){},afterClose:function(){}},i),this.config.linkAttributeName&&this.init(),this._closeAfterTransition=this._closeAfterTransition.bind(this)}return e(r)(t,[{key:"init",value:function(){this.isOpened=!1,this.openedWindow=!1,this.starter=!1,this._nextWindows=!1,this._scrollPosition=0,this._reopenTrigger=!1,this._overlayChecker=!1,this._isMoved=!1,this._focusElements=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],this._modalBlock=!1;var e=document.querySelector(".hystmodal__shadow");e?this.shadow=e:(this.shadow=document.createElement("div"),this.shadow.classList.add("hystmodal__shadow"),document.body.appendChild(this.shadow)),this.eventsFeeler()}},{key:"eventsFeeler",value:function(){var e=this;if(document.addEventListener("click",(function(t){var i=t.target.closest("[".concat(e.config.linkAttributeName,"]"));if(!e._isMoved&&i){t.preventDefault(),e.starter=i;var o=e.starter.getAttribute(e.config.linkAttributeName);return e._nextWindows=document.querySelector(o),void e.open()}e.config.closeOnButton&&t.target.closest("[data-hystclose]")&&e.close()})),this.config.closeOnOverlay){var t=this;document.addEventListener("mousedown",(function(e){!t._isMoved&&e.target instanceof Element&&!e.target.classList.contains("hystmodal__wrap")||(t._overlayChecker=!0)})),document.addEventListener("mouseup",(function(e){if(!t._isMoved&&e.target instanceof Element&&t._overlayChecker&&e.target.classList.contains("hystmodal__wrap"))return e.preventDefault(),t._overlayChecker=!t._overlayChecker,void t.close();t._overlayChecker=!1}))}window.addEventListener("keydown",(function(t){if(!e._isMoved&&e.config.closeOnEsc&&27===t.which&&e.isOpened)return t.preventDefault(),void e.close();!e._isMoved&&e.config.catchFocus&&9===t.which&&e.isOpened&&e.focusCatcher(t)}))}},{key:"open",value:function(e){if(e&&(this._nextWindows="string"==typeof e?document.querySelector(e):e),this._nextWindows){if(this.isOpened)return this._reopenTrigger=!0,void this.close();this.openedWindow=this._nextWindows,this._modalBlock=this.openedWindow.querySelector(".hystmodal__window"),this.config.beforeOpen(this),this._bodyScrollControl(),this.shadow.classList.add("hystmodal__shadow--show"),this.openedWindow.classList.add("hystmodal--active"),this.openedWindow.setAttribute("aria-hidden","false"),this.config.catchFocus&&this.focusControl(),this.isOpened=!0}else console.log("Warning: hystModal selector is not found")}},{key:"close",value:function(){this.isOpened&&(this.config.waitTransitions?(this.openedWindow.classList.add("hystmodal--moved"),this._isMoved=!0,this.openedWindow.addEventListener("transitionend",this._closeAfterTransition),this.openedWindow.classList.remove("hystmodal--active")):(this.openedWindow.classList.remove("hystmodal--active"),this._closeAfterTransition()))}},{key:"_closeAfterTransition",value:function(){this.openedWindow.classList.remove("hystmodal--moved"),this.openedWindow.removeEventListener("transitionend",this._closeAfterTransition),this._isMoved=!1,this.shadow.classList.remove("hystmodal__shadow--show"),this.openedWindow.setAttribute("aria-hidden","true"),this.config.catchFocus&&this.focusControl(),this._bodyScrollControl(),this.isOpened=!1,this.openedWindow.scrollTop=0,this.config.afterClose(this),this._reopenTrigger&&(this._reopenTrigger=!1,this.open())}},{key:"focusControl",value:function(){var e=this.openedWindow.querySelectorAll(this._focusElements);this.isOpened&&this.starter?this.starter.focus():e.length&&e[0].focus()}},{key:"focusCatcher",value:function(e){var t=this.openedWindow.querySelectorAll(this._focusElements),i=Array.prototype.slice.call(t);if(this.openedWindow.contains(document.activeElement)){var o=i.indexOf(document.activeElement);e.shiftKey&&0===o&&(i[i.length-1].focus(),e.preventDefault()),e.shiftKey||o!==i.length-1||(i[0].focus(),e.preventDefault())}else i[0].focus(),e.preventDefault()}},{key:"_bodyScrollControl",value:function(){if(this.config.backscroll){var e=document.querySelectorAll(this.config.fixedSelectors),t=Array.prototype.slice.call(e),i=document.documentElement;if(!0===this.isOpened)return i.classList.remove("hystmodal__opened"),i.style.marginRight="",t.forEach((function(e){e.style.marginRight=""})),window.scrollTo(0,this._scrollPosition),void(i.style.top="");this._scrollPosition=window.pageYOffset;var o=window.innerWidth-i.clientWidth;i.style.top="".concat(-this._scrollPosition,"px"),o&&(i.style.marginRight="".concat(o,"px"),t.forEach((function(e){e.style.marginRight="".concat(parseInt(getComputedStyle(e).marginRight,10)+o,"px")}))),i.classList.add("hystmodal__opened")}}}]),t}())({linkAttributeName:"data-hystmodal",closeOnButton:!0})}();
//# sourceMappingURL=index.787abfc7.js.map
