/*!
 * 
 *  SIP version 0.20.0
 *  Copyright (c) 2014-2021 Junction Networks, Inc <http://www.onsip.com>
 *  Homepage: https://sipjs.com
 *  License: https://sipjs.com/license/
 *
 *
 *  ~~~SIP.js contains substantial portions of JsSIP under the following license~~~
 *  Homepage: http://jssip.net
 *  Copyright (c) 2012-2013 José Luis Millán - Versatica <http://www.versatica.com>
 *
 *  Permission is hereby granted, free of charge, to any person obtaining
 *  a copy of this software and associated documentation files (the
 *  "Software"), to deal in the Software without restriction, including
 *  without limitation the rights to use, copy, modify, merge, publish,
 *  distribute, sublicense, and/or sell copies of the Software, and to
 *  permit persons to whom the Software is furnished to do so, subject to
 *  the following conditions:
 *
 *  The above copyright notice and this permission notice shall be
 *  included in all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 *  LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 *  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 *  WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  ~~~ end JsSIP license ~~~
 *
 *
 *
 *
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SIP"] = factory();
	else
		root["SIP"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LIBRARY_VERSION": () => (/* binding */ LIBRARY_VERSION)
/* harmony export */ });
const LIBRARY_VERSION = "0.20.0";


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentTypeUnsupportedError": () => (/* reexport safe */ _exceptions__WEBPACK_IMPORTED_MODULE_0__.ContentTypeUnsupportedError),
/* harmony export */   "RequestPendingError": () => (/* reexport safe */ _exceptions__WEBPACK_IMPORTED_MODULE_0__.RequestPendingError),
/* harmony export */   "SessionDescriptionHandlerError": () => (/* reexport safe */ _exceptions__WEBPACK_IMPORTED_MODULE_0__.SessionDescriptionHandlerError),
/* harmony export */   "SessionTerminatedError": () => (/* reexport safe */ _exceptions__WEBPACK_IMPORTED_MODULE_0__.SessionTerminatedError),
/* harmony export */   "StateTransitionError": () => (/* reexport safe */ _exceptions__WEBPACK_IMPORTED_MODULE_0__.StateTransitionError),
/* harmony export */   "Ack": () => (/* reexport safe */ _ack__WEBPACK_IMPORTED_MODULE_1__.Ack),
/* harmony export */   "Bye": () => (/* reexport safe */ _bye__WEBPACK_IMPORTED_MODULE_2__.Bye),
/* harmony export */   "EmitterImpl": () => (/* reexport safe */ _emitter__WEBPACK_IMPORTED_MODULE_3__.EmitterImpl),
/* harmony export */   "Info": () => (/* reexport safe */ _info__WEBPACK_IMPORTED_MODULE_4__.Info),
/* harmony export */   "Invitation": () => (/* reexport safe */ _invitation__WEBPACK_IMPORTED_MODULE_5__.Invitation),
/* harmony export */   "Inviter": () => (/* reexport safe */ _inviter__WEBPACK_IMPORTED_MODULE_6__.Inviter),
/* harmony export */   "Message": () => (/* reexport safe */ _message__WEBPACK_IMPORTED_MODULE_7__.Message),
/* harmony export */   "Messager": () => (/* reexport safe */ _messager__WEBPACK_IMPORTED_MODULE_8__.Messager),
/* harmony export */   "Notification": () => (/* reexport safe */ _notification__WEBPACK_IMPORTED_MODULE_9__.Notification),
/* harmony export */   "PublisherState": () => (/* reexport safe */ _publisher_state__WEBPACK_IMPORTED_MODULE_10__.PublisherState),
/* harmony export */   "Publisher": () => (/* reexport safe */ _publisher__WEBPACK_IMPORTED_MODULE_11__.Publisher),
/* harmony export */   "Referral": () => (/* reexport safe */ _referral__WEBPACK_IMPORTED_MODULE_12__.Referral),
/* harmony export */   "RegistererState": () => (/* reexport safe */ _registerer_state__WEBPACK_IMPORTED_MODULE_13__.RegistererState),
/* harmony export */   "Registerer": () => (/* reexport safe */ _registerer__WEBPACK_IMPORTED_MODULE_14__.Registerer),
/* harmony export */   "SessionState": () => (/* reexport safe */ _session_state__WEBPACK_IMPORTED_MODULE_15__.SessionState),
/* harmony export */   "Session": () => (/* reexport safe */ _session__WEBPACK_IMPORTED_MODULE_16__.Session),
/* harmony export */   "Subscriber": () => (/* reexport safe */ _subscriber__WEBPACK_IMPORTED_MODULE_17__.Subscriber),
/* harmony export */   "SubscriptionState": () => (/* reexport safe */ _subscription_state__WEBPACK_IMPORTED_MODULE_18__.SubscriptionState),
/* harmony export */   "Subscription": () => (/* reexport safe */ _subscription__WEBPACK_IMPORTED_MODULE_19__.Subscription),
/* harmony export */   "TransportState": () => (/* reexport safe */ _transport_state__WEBPACK_IMPORTED_MODULE_20__.TransportState),
/* harmony export */   "SIPExtension": () => (/* reexport safe */ _user_agent_options__WEBPACK_IMPORTED_MODULE_21__.SIPExtension),
/* harmony export */   "UserAgentRegisteredOptionTags": () => (/* reexport safe */ _user_agent_options__WEBPACK_IMPORTED_MODULE_21__.UserAgentRegisteredOptionTags),
/* harmony export */   "UserAgentState": () => (/* reexport safe */ _user_agent_state__WEBPACK_IMPORTED_MODULE_22__.UserAgentState),
/* harmony export */   "UserAgent": () => (/* reexport safe */ _user_agent__WEBPACK_IMPORTED_MODULE_23__.UserAgent)
/* harmony export */ });
/* harmony import */ var _exceptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _ack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _bye__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _invitation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var _inviter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37);
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31);
/* harmony import */ var _messager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38);
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32);
/* harmony import */ var _publisher_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39);
/* harmony import */ var _publisher__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(40);
/* harmony import */ var _referral__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33);
/* harmony import */ var _registerer_state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(41);
/* harmony import */ var _registerer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(42);
/* harmony import */ var _session_state__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(16);
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(15);
/* harmony import */ var _subscriber__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(43);
/* harmony import */ var _subscription_state__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(45);
/* harmony import */ var _subscription__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(44);
/* harmony import */ var _transport_state__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(47);
/* harmony import */ var _user_agent_options__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(34);
/* harmony import */ var _user_agent_state__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(48);
/* harmony import */ var _user_agent__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(49);
/**
 * A simple yet powerful API which takes care of SIP signaling and WebRTC media sessions for you.
 * @packageDocumentation
 */

























































/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentTypeUnsupportedError": () => (/* reexport safe */ _content_type_unsupported__WEBPACK_IMPORTED_MODULE_0__.ContentTypeUnsupportedError),
/* harmony export */   "RequestPendingError": () => (/* reexport safe */ _request_pending__WEBPACK_IMPORTED_MODULE_1__.RequestPendingError),
/* harmony export */   "SessionDescriptionHandlerError": () => (/* reexport safe */ _session_description_handler__WEBPACK_IMPORTED_MODULE_2__.SessionDescriptionHandlerError),
/* harmony export */   "SessionTerminatedError": () => (/* reexport safe */ _session_terminated__WEBPACK_IMPORTED_MODULE_3__.SessionTerminatedError),
/* harmony export */   "StateTransitionError": () => (/* reexport safe */ _state_transition__WEBPACK_IMPORTED_MODULE_4__.StateTransitionError)
/* harmony export */ });
/* harmony import */ var _content_type_unsupported__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _request_pending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _session_description_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _session_terminated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _state_transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);







/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentTypeUnsupportedError": () => (/* binding */ ContentTypeUnsupportedError)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/**
 * An exception indicating an unsupported content type prevented execution.
 * @public
 */
class ContentTypeUnsupportedError extends _core__WEBPACK_IMPORTED_MODULE_0__.Exception {
    constructor(message) {
        super(message ? message : "Unsupported content type.");
    }
}


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Exception": () => (/* binding */ Exception)
/* harmony export */ });
/**
 * An Exception is considered a condition that a reasonable application may wish to catch.
 * An Error indicates serious problems that a reasonable application should not try to catch.
 * @public
 */
class Exception extends Error {
    constructor(message) {
        super(message); // 'Error' breaks prototype chain here
        Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
    }
}


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestPendingError": () => (/* binding */ RequestPendingError)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/**
 * An exception indicating an outstanding prior request prevented execution.
 * @public
 */
class RequestPendingError extends _core__WEBPACK_IMPORTED_MODULE_0__.Exception {
    /** @internal */
    constructor(message) {
        super(message ? message : "Request pending.");
    }
}


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionDescriptionHandlerError": () => (/* binding */ SessionDescriptionHandlerError)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/**
 * An exception indicating a session description handler error occured.
 * @public
 */
class SessionDescriptionHandlerError extends _core__WEBPACK_IMPORTED_MODULE_0__.Exception {
    constructor(message) {
        super(message ? message : "Unspecified session description handler error.");
    }
}


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionTerminatedError": () => (/* binding */ SessionTerminatedError)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/**
 * An exception indicating the session terminated before the action completed.
 * @public
 */
class SessionTerminatedError extends _core__WEBPACK_IMPORTED_MODULE_0__.Exception {
    constructor() {
        super("The session has terminated.");
    }
}


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateTransitionError": () => (/* binding */ StateTransitionError)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/**
 * An exception indicating an invalid state transition error occured.
 * @public
 */
class StateTransitionError extends _core__WEBPACK_IMPORTED_MODULE_0__.Exception {
    constructor(message) {
        super(message ? message : "An error occurred during state transition.");
    }
}


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ack": () => (/* binding */ Ack)
/* harmony export */ });
/**
 * A request to confirm a {@link Session} (incoming ACK).
 * @public
 */
class Ack {
    /** @internal */
    constructor(incomingAckRequest) {
        this.incomingAckRequest = incomingAckRequest;
    }
    /** Incoming ACK request message. */
    get request() {
        return this.incomingAckRequest.message;
    }
}


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bye": () => (/* binding */ Bye)
/* harmony export */ });
/**
 * A request to end a {@link Session} (incoming BYE).
 * @public
 */
class Bye {
    /** @internal */
    constructor(incomingByeRequest) {
        this.incomingByeRequest = incomingByeRequest;
    }
    /** Incoming BYE request message. */
    get request() {
        return this.incomingByeRequest.message;
    }
    /** Accept the request. */
    accept(options) {
        this.incomingByeRequest.accept(options);
        return Promise.resolve();
    }
    /** Reject the request. */
    reject(options) {
        this.incomingByeRequest.reject(options);
        return Promise.resolve();
    }
}


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmitterImpl": () => (/* binding */ EmitterImpl)
/* harmony export */ });
/**
 * An {@link Emitter} implementation.
 * @internal
 */
class EmitterImpl {
    constructor() {
        this.listeners = new Array();
    }
    /**
     * Sets up a function that will be called whenever the target changes.
     * @param listener - Callback function.
     * @param options - An options object that specifies characteristics about the listener.
     *                  If once true, indicates that the listener should be invoked at most once after being added.
     *                  If once true, the listener would be automatically removed when invoked.
     */
    addListener(listener, options) {
        const onceWrapper = (data) => {
            this.removeListener(onceWrapper);
            listener(data);
        };
        (options === null || options === void 0 ? void 0 : options.once) === true ? this.listeners.push(onceWrapper) : this.listeners.push(listener);
    }
    /**
     * Emit change.
     * @param data - Data to emit.
     */
    emit(data) {
        this.listeners.slice().forEach((listener) => listener(data));
    }
    /**
     * Removes all listeners previously registered with addListener.
     */
    removeAllListeners() {
        this.listeners = [];
    }
    /**
     * Removes a listener previously registered with addListener.
     * @param listener - Callback function.
     */
    removeListener(listener) {
        this.listeners = this.listeners.filter((l) => l !== listener);
    }
    /**
     * Registers a listener.
     * @param listener - Callback function.
     * @deprecated Use addListener.
     */
    on(listener) {
        return this.addListener(listener);
    }
    /**
     * Unregisters a listener.
     * @param listener - Callback function.
     * @deprecated Use removeListener.
     */
    off(listener) {
        return this.removeListener(listener);
    }
    /**
     * Registers a listener then unregisters the listener after one event emission.
     * @param listener - Callback function.
     * @deprecated Use addListener.
     */
    once(listener) {
        return this.addListener(listener, { once: true });
    }
}


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Info": () => (/* binding */ Info)
/* harmony export */ });
/**
 * An exchange of information (incoming INFO).
 * @public
 */
class Info {
    /** @internal */
    constructor(incomingInfoRequest) {
        this.incomingInfoRequest = incomingInfoRequest;
    }
    /** Incoming MESSAGE request message. */
    get request() {
        return this.incomingInfoRequest.message;
    }
    /** Accept the request. */
    accept(options) {
        this.incomingInfoRequest.accept(options);
        return Promise.resolve();
    }
    /** Reject the request. */
    reject(options) {
        this.incomingInfoRequest.reject(options);
        return Promise.resolve();
    }
}


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Invitation": () => (/* binding */ Invitation)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36);
/* harmony import */ var _core_messages_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var _exceptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4);
/* harmony import */ var _exceptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7);
/* harmony import */ var _exceptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8);
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _session_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _user_agent_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);






/**
 * An invitation is an offer to establish a {@link Session} (incoming INVITE).
 * @public
 */
class Invitation extends _session__WEBPACK_IMPORTED_MODULE_0__.Session {
    /** @internal */
    constructor(userAgent, incomingInviteRequest) {
        super(userAgent);
        this.incomingInviteRequest = incomingInviteRequest;
        /** True if dispose() has been called. */
        this.disposed = false;
        /** INVITE will be rejected if not accepted within a certain period time. */
        this.expiresTimer = undefined;
        /** True if this Session has been Terminated due to a CANCEL request. */
        this.isCanceled = false;
        /** Are reliable provisional responses required or supported. */
        this.rel100 = "none";
        /** The current RSeq header value. */
        this.rseq = Math.floor(Math.random() * 10000);
        /** INVITE will be rejected if final response not sent in a certain period time. */
        this.userNoAnswerTimer = undefined;
        /** True if waiting for a PRACK before sending a 200 Ok. */
        this.waitingForPrack = false;
        this.logger = userAgent.getLogger("sip.Invitation");
        const incomingRequestMessage = this.incomingInviteRequest.message;
        // Set 100rel if necessary
        const requireHeader = incomingRequestMessage.getHeader("require");
        if (requireHeader && requireHeader.toLowerCase().includes("100rel")) {
            this.rel100 = "required";
        }
        const supportedHeader = incomingRequestMessage.getHeader("supported");
        if (supportedHeader && supportedHeader.toLowerCase().includes("100rel")) {
            this.rel100 = "supported";
        }
        // FIXME: HACK: This is a hack to port an existing behavior.
        // Set the toTag on the incoming request message to the toTag which
        // will be used in the response to the incoming request!!!
        // The behavior being ported appears to be a hack itself,
        // so this is a hack to port a hack. At least one test spec
        // relies on it (which is yet another hack).
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        incomingRequestMessage.toTag = incomingInviteRequest.toTag;
        if (typeof incomingRequestMessage.toTag !== "string") {
            throw new TypeError("toTag should have been a string.");
        }
        // The following mapping values are RECOMMENDED:
        // ...
        // 19 no answer from the user              480 Temporarily unavailable
        // https://tools.ietf.org/html/rfc3398#section-7.2.4.1
        this.userNoAnswerTimer = setTimeout(() => {
            incomingInviteRequest.reject({ statusCode: 480 });
            this.stateTransition(_session_state__WEBPACK_IMPORTED_MODULE_1__.SessionState.Terminated);
        }, this.userAgent.configuration.noAnswerTimeout ? this.userAgent.configuration.noAnswerTimeout * 1000 : 60000);
        // 1. If the request is an INVITE that contains an Expires header
        // field, the UAS core sets a timer for the number of seconds
        // indicated in the header field value.  When the timer fires, the
        // invitation is considered to be expired.  If the invitation
        // expires before the UAS has generated a final response, a 487
        // (Request Terminated) response SHOULD be generated.
        // https://tools.ietf.org/html/rfc3261#section-13.3.1
        if (incomingRequestMessage.hasHeader("expires")) {
            const expires = Number(incomingRequestMessage.getHeader("expires") || 0) * 1000;
            this.expiresTimer = setTimeout(() => {
                if (this.state === _session_state__WEBPACK_IMPORTED_MODULE_1__.SessionState.Initial) {
                    incomingInviteRequest.reject({ statusCode: 487 });
                    this.stateTransition(_session_state__WEBPACK_IMPORTED_MODULE_1__.SessionState.Terminated);
                }
            }, expires);
        }
        // Session parent properties
        const assertedIdentity = this.request.getHeader("P-Asserted-Identity");
        if (assertedIdentity) {
            this._assertedIdentity = _core__WEBPACK_IMPORTED_MODULE_2__.Grammar.nameAddrHeaderParse(assertedIdentity);
        }
        this._contact = this.userAgent.contact.toString();
        const contentDisposition = incomingRequestMessage.parseHeader("Content-Disposition");
        if (contentDisposition && contentDisposition.type === "render") {
            this._renderbody = incomingRequestMessage.body;
            this._rendertype = incomingRequestMessage.getHeader("Content-Type");
        }
        // Identifier
        this._id = incomingRequestMessage.callId + incomingRequestMessage.fromTag;
        // Add to the user agent's session collection.
        this.userAgent._sessions[this._id] = this;
    }
    /**
     * Destructor.
     */
    dispose() {
        // Only run through this once. It can and does get called multiple times
        // depending on the what the sessions state is when first called.
        // For example, if called when "establishing" it will be called again
        // at least once when the session transitions to "terminated".
        // Regardless, running through this more than once is pointless.
        if (this.disposed) {
            return Promise.resolve();
        }
        this.disposed = true;
        // Clear timers
        if (this.expiresTimer) {
            clearTimeout(this.expiresTimer);
            this.expiresTimer = undefined;
        }
        if (this.userNoAnswerTimer) {
            clearTimeout(this.userNoAnswerTimer);
            this.userNoAnswerTimer = undefined;
        }
        // If accept() is still waiting for a PRACK, make sure it rejects
        this.prackNeverArrived();
        // If the final response for the initial INVITE not yet been sent, reject it
        switch (this.state) {
            case _session_state__WEBPACK_IMPORTED_MODULE_1__.SessionState.Initial:
                return this.reject().then(() => super.dispose());
            case _session_state__WEBPACK_IMPORTED_MODULE_1__.SessionState.Establishing:
                return this.reject().then(() => super.dispose());
            case _session_state__WEBPACK_IMPORTED_MODULE_1__.SessionState.Established:
                return super.dispose();
            case _session_state__WEBPACK_IMPORTED_MODULE_1__.SessionState.Terminating:
                return super.dispose();
            case _session_state__WEBPACK_IMPORTED_MODULE_1__.SessionState.Terminated:
                return super.dispose();
            default:
                throw new Error("Unknown state.");
        }
    }
    /**
     * If true, a first provisional response after the 100 Trying
     * will be sent automatically. This is false it the UAC required
     * reliable provisional responses (100rel in Require header) or
     * the user agent configuration has specified to not send an
     * initial response, otherwise it is true. The provisional is sent by
     * calling `progress()` without any options.
     */
    get autoSendAnInitialProvisionalResponse() {
        return this.rel100 !== "required" && this.userAgent.configuration.sendInitialProvisionalResponse;
    }
    /**
     * Initial incoming INVITE request message body.
     */
    get body() {
        return this.incomingInviteRequest.message.body;
    }
    /**
     * The identity of the local user.
     */
    get localIdentity() {
        return this.request.to;
    }
    /**
     * The identity of the remote user.
     */
    get remoteIdentity() {
        return this.request.from;
    }
    /**
     * Initial incoming INVITE request message.
     */
    get request() {
        return this.incomingInviteRequest.message;
    }
    /**
     * Accept the invitation.
     *
     * @remarks
     * Accept the incoming INVITE request to start a Session.
     * Replies to the INVITE request with a 200 Ok response.
     * Resolves once the response sent, otherwise rejects.
     *
     * This method may reject for a variety of reasons including
     * the receipt of a CANCEL request before `accept` is able
     * to construct a response.
     * @param options - Options bucket.
     */
    accept(options = {}) {
        this.logger.log("Invitation.accept");
        // validate state
        if (this.state !== _session_state__WEBPACK_IMPORTED_MODULE_1__.SessionState.Initial) {
            const error = new Error(`Invalid session state ${this.state}`);
            this.logger.error(error.message);
            return Promise.reject(error);
        }
        // Modifiers and options for initial INVITE transaction
        if (options.sessionDescriptionHandlerModifiers) {
            this.sessionDescriptionHandlerModifiers = options.sessionDescriptionHandlerModifiers;
        }
        if (options.sessionDescriptionHandlerOptions) {
            this.sessionDescriptionHandlerOptions = options.sessionDescriptionHandlerOptions;
        }
        // transition state
        this.stateTransition(_session_state__WEBPACK_IMPORTED_MODULE_1__.SessionState.Establishing);
        return (this.sendAccept(options)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .then(({ message, session }) => {
            session.delegate = {
                onAck: (ackRequest) => this.onAckRequest(ackRequest),
                onAckTimeout: () => this.onAckTimeout(),
                onBye: (byeRequest) => this.onByeRequest(byeRequest),
                onInfo: (infoRequest) => this.onInfoRequest(infoRequest),
                onInvite: (inviteRequest) => this.onInviteRequest(inviteRequest),
                onMessage: (messageRequest) => this.onMessageRequest(messageRequest),
                onNotify: (notifyRequest) => this.onNotifyRequest(notifyRequest),
                onPrack: (prackRequest) => this.onPrackRequest(prackRequest),
                onRefer: (referRequest) => this.onReferRequest(referRequest)
            };
            this._dialog = session;
            this.stateTransition(_session_state__WEBPACK_IMPORTED_MODULE_1__.SessionState.Established);
            // TODO: Reconsider this "automagic" send of a BYE to replacee behavior.
            // This behavior has been ported forward from legacy versions.
            if (this._replacee) {
                this._replacee._bye();
            }
        })
            .catch((error) => this.handleResponseError(error)));
    }
    /**
     * Indicate progress processing the invitation.
     *
     * @remarks
     * Report progress to the the caller.
     * Replies to the INVITE request with a 1xx provisional response.
     * Resolves once the response sent, otherwise rejects.
     * @param options - Options bucket.
     */
    progress(options = {}) {
        this.logger.log("Invitation.progress");
        // validate state
        if (this.state !== _session_state__WEBPACK_IMPORTED_MODULE_1__.SessionState.Initial) {
            const error = new Error(`Invalid session state ${this.state}`);
            this.logger.error(error.message);
            return Promise.reject(error);
        }
        // Ported
        const statusCode = options.statusCode || 180;
        if (statusCode < 100 || statusCode > 199) {
            throw new TypeError("Invalid statusCode: " + statusCode);
        }
        // Modifiers and options for initial INVITE transaction
        if (options.sessionDescriptionHandlerModifiers) {
            this.sessionDescriptionHandlerModifiers = options.sessionDescriptionHandlerModifiers;
        }
        if (options.sessionDescriptionHandlerOptions) {
            this.sessionDescriptionHandlerOptions = options.sessionDescriptionHandlerOptions;
        }
        // After the first reliable provisional response for a request has been
        // acknowledged, the UAS MAY send additional reliable provisional
        // responses.  The UAS MUST NOT send a second reliable provisional
        // response until the first is acknowledged.  After the first, it is
        // RECOMMENDED that the UAS not send an additional reliable provisional
        // response until the previous is acknowledged.  The first reliable
        // provisional response receives special treatment because it conveys
        // the initial sequence number.  If additional reliable provisional
        // responses were sent before the first was acknowledged, the UAS could
        // not be certain these were received in order.
        // https://tools.ietf.org/html/rfc3262#section-3
        if (this.waitingForPrack) {
            this.logger.warn("Unexpected call for progress while waiting for prack, ignoring");
            return Promise.resolve();
        }
        // Trying provisional response
        if (options.statusCode === 100) {
            return this.sendProgressTrying()
                .then(() => {
                return;
            })
                .catch((error) => this.handleResponseError(error));
        }
        // Standard provisional response
        if (!(this.rel100 === "required") &&
            !(this.rel100 === "supported" && options.rel100) &&
            !(this.rel100 === "supported" && this.userAgent.configuration.sipExtension100rel === _user_agent_options__WEBPACK_IMPORTED_MODULE_3__.SIPExtension.Required)) {
            return this.sendProgress(options)
                .then(() => {
                return;
            })
                .catch((error) => this.handleResponseError(error));
        }
        // Reliable provisional response
        return this.sendProgressReliableWaitForPrack(options)
            .then(() => {
            return;
        })
            .catch((error) => this.handleResponseError(error));
    }
    /**
     * Reject the invitation.
     *
     * @remarks
     * Replies to the INVITE request with a 4xx, 5xx, or 6xx final response.
     * Resolves once the response sent, otherwise rejects.
     *
     * The expectation is that this method is used to reject an INVITE request.
     * That is indeed the case - a call to `progress` followed by `reject` is
     * a typical way to "decline" an incoming INVITE request. However it may
     * also be called after calling `accept` (but only before it completes)
     * which will reject the call and cause `accept` to reject.
     * @param options - Options bucket.
     */
    reject(options = {}) {
        this.logger.log("Invitation.reject");
        // validate state
        if (this.state !== _session_state__WEBPACK_IMPORTED_MODULE_1__.SessionState.Initial && this.state !== _session_state__WEBPACK_IMPORTED_MODULE_1__.SessionState.Establishing) {
            const error = new Error(`Invalid session state ${this.state}`);
            this.logger.error(error.message);
            return Promise.reject(error);
        }
        const statusCode = options.statusCode || 480;
        const reasonPhrase = options.reasonPhrase ? options.reasonPhrase : (0,_core_messages_utils__WEBPACK_IMPORTED_MODULE_4__.getReasonPhrase)(statusCode);
        const extraHeaders = options.extraHeaders || [];
        if (statusCode < 300 || statusCode > 699) {
            throw new TypeError("Invalid statusCode: " + statusCode);
        }
        const body = options.body ? (0,_core__WEBPACK_IMPORTED_MODULE_5__.fromBodyLegacy)(options.body) : undefined;
        // FIXME: Need to redirect to someplace
        statusCode < 400
            ? this.incomingInviteRequest.redirect([], { statusCode, reasonPhrase, extraHeaders, body })
            : this.incomingInviteRequest.reject({ statusCode, reasonPhrase, extraHeaders, body });
        this.stateTransition(_session_state__WEBPACK_IMPORTED_MODULE_1__.SessionState.Terminated);
        return Promise.resolve();
    }
    /**
     * Handle CANCEL request.
     *
     * @param message - CANCEL message.
     * @internal
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _onCancel(message) {
        this.logger.log("Invitation._onCancel");
        // validate state
        if (this.state !== _session_state__WEBPACK_IMPORTED_MODULE_1__.SessionState.Initial && this.state !== _session_state__WEBPACK_IMPORTED_MODULE_1__.SessionState.Establishing) {
            this.logger.error(`CANCEL received while in state ${this.state}, dropping request`);
            return;
        }
        // flag canceled
        this.isCanceled = true;
        // reject INVITE with 487 status code
        this.incomingInviteRequest.reject({ statusCode: 487 });
        this.stateTransition(_session_state__WEBPACK_IMPORTED_MODULE_1__.SessionState.Terminated);
    }
    /**
     * Helper function to handle offer/answer in a PRACK.
     */
    handlePrackOfferAnswer(request) {
        if (!this.dialog) {
            throw new Error("Dialog undefined.");
        }
        // If the PRACK doesn't have an offer/answer, nothing to be done.
        const body = (0,_core__WEBPACK_IMPORTED_MODULE_5__.getBody)(request.message);
        if (!body || body.contentDisposition !== "session") {
            return Promise.resolve(undefined);
        }
        const options = {
            sessionDescriptionHandlerOptions: this.sessionDescriptionHandlerOptions,
            sessionDescriptionHandlerModifiers: this.sessionDescriptionHandlerModifiers
        };
        // If the UAC receives a reliable provisional response with an offer
        // (this would occur if the UAC sent an INVITE without an offer, in
        // which case the first reliable provisional response will contain the
        // offer), it MUST generate an answer in the PRACK.  If the UAC receives
        // a reliable provisional response with an answer, it MAY generate an
        // additional offer in the PRACK.  If the UAS receives a PRACK with an
        // offer, it MUST place the answer in the 2xx to the PRACK.
        // https://tools.ietf.org/html/rfc3262#section-5
        switch (this.dialog.signalingState) {
            case _core__WEBPACK_IMPORTED_MODULE_6__.SignalingState.Initial:
                // State should never be reached as first reliable provisional response must have answer/offer.
                throw new Error(`Invalid signaling state ${this.dialog.signalingState}.`);
            case _core__WEBPACK_IMPORTED_MODULE_6__.SignalingState.Stable:
                // Receved answer.
                return this.setAnswer(body, options).then(() => undefined);
            case _core__WEBPACK_IMPORTED_MODULE_6__.SignalingState.HaveLocalOffer:
                // State should never be reached as local offer would be answered by this PRACK
                throw new Error(`Invalid signaling state ${this.dialog.signalingState}.`);
            case _core__WEBPACK_IMPORTED_MODULE_6__.SignalingState.HaveRemoteOffer:
                // Received offer, generate answer.
                return this.setOfferAndGetAnswer(body, options);
            case _core__WEBPACK_IMPORTED_MODULE_6__.SignalingState.Closed:
                throw new Error(`Invalid signaling state ${this.dialog.signalingState}.`);
            default:
                throw new Error(`Invalid signaling state ${this.dialog.signalingState}.`);
        }
    }
    /**
     * A handler for errors which occur while attempting to send 1xx and 2xx responses.
     * In all cases, an attempt is made to reject the request if it is still outstanding.
     * And while there are a variety of things which can go wrong and we log something here
     * for all errors, there are a handful of common exceptions we pay some extra attention to.
     * @param error - The error which occurred.
     */
    handleResponseError(error) {
        let statusCode = 480; // "Temporarily Unavailable"
        // Log Error message
        if (error instanceof Error) {
            this.logger.error(error.message);
        }
        else {
            // We don't actually know what a session description handler implementation might throw our way,
            // and more generally as a last resort catch all, just assume we are getting an "unknown" and log it.
            this.logger.error(error);
        }
        // Log Exception message
        if (error instanceof _exceptions__WEBPACK_IMPORTED_MODULE_7__.ContentTypeUnsupportedError) {
            this.logger.error("A session description handler occurred while sending response (content type unsupported");
            statusCode = 415; // "Unsupported Media Type"
        }
        else if (error instanceof _exceptions__WEBPACK_IMPORTED_MODULE_8__.SessionDescriptionHandlerError) {
            this.logger.error("A session description handler occurred while sending response");
        }
        else if (error instanceof _exceptions__WEBPACK_IMPORTED_MODULE_9__.SessionTerminatedError) {
            this.logger.error("Session ended before response could be formulated and sent (while waiting for PRACK)");
        }
        else if (error instanceof _core__WEBPACK_IMPORTED_MODULE_10__.TransactionStateError) {
            this.logger.error("Session changed state before response could be formulated and sent");
        }
        // Reject if still in "initial" or "establishing" state.
        if (this.state === _session_state__WEBPACK_IMPORTED_MODULE_1__.SessionState.Initial || this.state === _session_state__WEBPACK_IMPORTED_MODULE_1__.SessionState.Establishing) {
            try {
                this.incomingInviteRequest.reject({ statusCode });
                this.stateTransition(_session_state__WEBPACK_IMPORTED_MODULE_1__.SessionState.Terminated);
            }
            catch (e) {
                this.logger.error("An error occurred attempting to reject the request while handling another error");
                throw e; // This is not a good place to be...
            }
        }
        // FIXME: TODO:
        // Here we are squelching the throwing of errors due to an race condition.
        // We have an internal race between calling `accept()` and handling an incoming
        // CANCEL request. As there is no good way currently to delegate the handling of
        // these race errors to the caller of `accept()`, we are squelching the throwing
        // of ALL errors when/if they occur after receiving a CANCEL to catch the ONE we know
        // is a "normal" exceptional condition. While this is a completely reasonable approach,
        // the decision should be left up to the library user. Furthermore, as we are eating
        // ALL errors in this case, we are potentially (likely) hiding "real" errors which occur.
        //
        // Only rethrow error if the session has not been canceled.
        if (this.isCanceled) {
            this.logger.warn("An error occurred while attempting to formulate and send a response to an incoming INVITE." +
                " However a CANCEL was received and processed while doing so which can (and often does) result" +
                " in errors occurring as the session terminates in the meantime. Said error is being ignored.");
            return;
        }
        throw error;
    }
    /**
     * Callback for when ACK for a 2xx response is never received.
     * @param session - Session the ACK never arrived for.
     */
    onAckTimeout() {
        this.logger.log("Invitation.onAckTimeout");
        if (!this.dialog) {
            throw new Error("Dialog undefined.");
        }
        this.logger.log("No ACK received for an extended period of time, terminating session");
        this.dialog.bye();
        this.stateTransition(_session_state__WEBPACK_IMPORTED_MODULE_1__.SessionState.Terminated);
    }
    /**
     * A version of `accept` which resolves a session when the 200 Ok response is sent.
     * @param options - Options bucket.
     */
    sendAccept(options = {}) {
        const responseOptions = {
            sessionDescriptionHandlerOptions: this.sessionDescriptionHandlerOptions,
            sessionDescriptionHandlerModifiers: this.sessionDescriptionHandlerModifiers
        };
        const extraHeaders = options.extraHeaders || [];
        // The UAS MAY send a final response to the initial request before
        // having received PRACKs for all unacknowledged reliable provisional
        // responses, unless the final response is 2xx and any of the
        // unacknowledged reliable provisional responses contained a session
        // description.  In that case, it MUST NOT send a final response until
        // those provisional responses are acknowledged.  If the UAS does send a
        // final response when reliable responses are still unacknowledged, it
        // SHOULD NOT continue to retransmit the unacknowledged reliable
        // provisional responses, but it MUST be prepared to process PRACK
        // requests for those outstanding responses.  A UAS MUST NOT send new
        // reliable provisional responses (as opposed to retransmissions of
        // unacknowledged ones) after sending a final response to a request.
        // https://tools.ietf.org/html/rfc3262#section-3
        if (this.waitingForPrack) {
            return this.waitForArrivalOfPrack()
                .then(() => clearTimeout(this.userNoAnswerTimer)) // Ported
                .then(() => this.generateResponseOfferAnswer(this.incomingInviteRequest, responseOptions))
                .then((body) => this.incomingInviteRequest.accept({ statusCode: 200, body, extraHeaders }));
        }
        clearTimeout(this.userNoAnswerTimer); // Ported
        return this.generateResponseOfferAnswer(this.incomingInviteRequest, responseOptions).then((body) => this.incomingInviteRequest.accept({ statusCode: 200, body, extraHeaders }));
    }
    /**
     * A version of `progress` which resolves when the provisional response is sent.
     * @param options - Options bucket.
     */
    sendProgress(options = {}) {
        const statusCode = options.statusCode || 180;
        const reasonPhrase = options.reasonPhrase;
        const extraHeaders = (options.extraHeaders || []).slice();
        const body = options.body ? (0,_core__WEBPACK_IMPORTED_MODULE_5__.fromBodyLegacy)(options.body) : undefined;
        // The 183 (Session Progress) response is used to convey information
        // about the progress of the call that is not otherwise classified.  The
        // Reason-Phrase, header fields, or message body MAY be used to convey
        // more details about the call progress.
        // https://tools.ietf.org/html/rfc3261#section-21.1.5
        // It is the de facto industry standard to utilize 183 with SDP to provide "early media".
        // While it is unlikely someone would want to send a 183 without SDP, so it should be an option.
        if (statusCode === 183 && !body) {
            return this.sendProgressWithSDP(options);
        }
        try {
            const progressResponse = this.incomingInviteRequest.progress({ statusCode, reasonPhrase, extraHeaders, body });
            this._dialog = progressResponse.session;
            return Promise.resolve(progressResponse);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    /**
     * A version of `progress` which resolves when the provisional response with sdp is sent.
     * @param options - Options bucket.
     */
    sendProgressWithSDP(options = {}) {
        const responseOptions = {
            sessionDescriptionHandlerOptions: this.sessionDescriptionHandlerOptions,
            sessionDescriptionHandlerModifiers: this.sessionDescriptionHandlerModifiers
        };
        const statusCode = options.statusCode || 183;
        const reasonPhrase = options.reasonPhrase;
        const extraHeaders = (options.extraHeaders || []).slice();
        // Get an offer/answer and send a reply.
        return this.generateResponseOfferAnswer(this.incomingInviteRequest, responseOptions)
            .then((body) => this.incomingInviteRequest.progress({ statusCode, reasonPhrase, extraHeaders, body }))
            .then((progressResponse) => {
            this._dialog = progressResponse.session;
            return progressResponse;
        });
    }
    /**
     * A version of `progress` which resolves when the reliable provisional response is sent.
     * @param options - Options bucket.
     */
    sendProgressReliable(options = {}) {
        options.extraHeaders = (options.extraHeaders || []).slice();
        options.extraHeaders.push("Require: 100rel");
        options.extraHeaders.push("RSeq: " + Math.floor(Math.random() * 10000));
        return this.sendProgressWithSDP(options);
    }
    /**
     * A version of `progress` which resolves when the reliable provisional response is acknowledged.
     * @param options - Options bucket.
     */
    sendProgressReliableWaitForPrack(options = {}) {
        const responseOptions = {
            sessionDescriptionHandlerOptions: this.sessionDescriptionHandlerOptions,
            sessionDescriptionHandlerModifiers: this.sessionDescriptionHandlerModifiers
        };
        const statusCode = options.statusCode || 183;
        const reasonPhrase = options.reasonPhrase;
        const extraHeaders = (options.extraHeaders || []).slice();
        extraHeaders.push("Require: 100rel");
        extraHeaders.push("RSeq: " + this.rseq++);
        let body;
        return new Promise((resolve, reject) => {
            this.waitingForPrack = true;
            this.generateResponseOfferAnswer(this.incomingInviteRequest, responseOptions)
                .then((offerAnswer) => {
                body = offerAnswer;
                return this.incomingInviteRequest.progress({ statusCode, reasonPhrase, extraHeaders, body });
            })
                .then((progressResponse) => {
                this._dialog = progressResponse.session;
                let prackRequest;
                let prackResponse;
                progressResponse.session.delegate = {
                    onPrack: (request) => {
                        prackRequest = request;
                        // eslint-disable-next-line @typescript-eslint/no-use-before-define
                        clearTimeout(prackWaitTimeoutTimer);
                        // eslint-disable-next-line @typescript-eslint/no-use-before-define
                        clearTimeout(rel1xxRetransmissionTimer);
                        if (!this.waitingForPrack) {
                            return;
                        }
                        this.waitingForPrack = false;
                        this.handlePrackOfferAnswer(prackRequest)
                            .then((prackResponseBody) => {
                            try {
                                prackResponse = prackRequest.accept({ statusCode: 200, body: prackResponseBody });
                                this.prackArrived();
                                resolve({ prackRequest, prackResponse, progressResponse });
                            }
                            catch (error) {
                                reject(error);
                            }
                        })
                            .catch((error) => reject(error));
                    }
                };
                // https://tools.ietf.org/html/rfc3262#section-3
                const prackWaitTimeout = () => {
                    if (!this.waitingForPrack) {
                        return;
                    }
                    this.waitingForPrack = false;
                    this.logger.warn("No PRACK received, rejecting INVITE.");
                    // eslint-disable-next-line @typescript-eslint/no-use-before-define
                    clearTimeout(rel1xxRetransmissionTimer);
                    this.reject({ statusCode: 504 })
                        .then(() => reject(new _exceptions__WEBPACK_IMPORTED_MODULE_9__.SessionTerminatedError()))
                        .catch((error) => reject(error));
                };
                const prackWaitTimeoutTimer = setTimeout(prackWaitTimeout, _core__WEBPACK_IMPORTED_MODULE_11__.Timers.T1 * 64);
                // https://tools.ietf.org/html/rfc3262#section-3
                const rel1xxRetransmission = () => {
                    try {
                        this.incomingInviteRequest.progress({ statusCode, reasonPhrase, extraHeaders, body });
                    }
                    catch (error) {
                        this.waitingForPrack = false;
                        reject(error);
                        return;
                    }
                    // eslint-disable-next-line @typescript-eslint/no-use-before-define
                    rel1xxRetransmissionTimer = setTimeout(rel1xxRetransmission, (timeout *= 2));
                };
                let timeout = _core__WEBPACK_IMPORTED_MODULE_11__.Timers.T1;
                let rel1xxRetransmissionTimer = setTimeout(rel1xxRetransmission, timeout);
            })
                .catch((error) => {
                this.waitingForPrack = false;
                reject(error);
            });
        });
    }
    /**
     * A version of `progress` which resolves when a 100 Trying provisional response is sent.
     */
    sendProgressTrying() {
        try {
            const progressResponse = this.incomingInviteRequest.trying();
            return Promise.resolve(progressResponse);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    /**
     * When attempting to accept the INVITE, an invitation waits
     * for any outstanding PRACK to arrive before sending the 200 Ok.
     * It will be waiting on this Promise to resolve which lets it know
     * the PRACK has arrived and it may proceed to send the 200 Ok.
     */
    waitForArrivalOfPrack() {
        if (this.waitingForPrackPromise) {
            throw new Error("Already waiting for PRACK");
        }
        this.waitingForPrackPromise = new Promise((resolve, reject) => {
            this.waitingForPrackResolve = resolve;
            this.waitingForPrackReject = reject;
        });
        return this.waitingForPrackPromise;
    }
    /**
     * Here we are resolving the promise which in turn will cause
     * the accept to proceed (it may still fail for other reasons, but...).
     */
    prackArrived() {
        if (this.waitingForPrackResolve) {
            this.waitingForPrackResolve();
        }
        this.waitingForPrackPromise = undefined;
        this.waitingForPrackResolve = undefined;
        this.waitingForPrackReject = undefined;
    }
    /**
     * Here we are rejecting the promise which in turn will cause
     * the accept to fail and the session to transition to "terminated".
     */
    prackNeverArrived() {
        if (this.waitingForPrackReject) {
            this.waitingForPrackReject(new _exceptions__WEBPACK_IMPORTED_MODULE_9__.SessionTerminatedError());
        }
        this.waitingForPrackPromise = undefined;
        this.waitingForPrackResolve = undefined;
        this.waitingForPrackReject = undefined;
    }
}


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Session": () => (/* binding */ Session)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(23);
/* harmony import */ var _core_messages_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20);
/* harmony import */ var _core_user_agent_core_allowed_methods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28);
/* harmony import */ var _ack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _bye__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _exceptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _exceptions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4);
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31);
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(32);
/* harmony import */ var _referral__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33);
/* harmony import */ var _session_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);












/**
 * A session provides real time communication between one or more participants.
 *
 * @remarks
 * The transport behaves in a deterministic manner according to the
 * the state defined in {@link SessionState}.
 * @public
 */
class Session {
    /**
     * Constructor.
     * @param userAgent - User agent. See {@link UserAgent} for details.
     * @internal
     */
    constructor(userAgent, options = {}) {
        /** True if there is an outgoing re-INVITE request outstanding. */
        this.pendingReinvite = false;
        /** True if there is an incoming re-INVITE ACK request outstanding. */
        this.pendingReinviteAck = false;
        /** Session state. */
        this._state = _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Initial;
        this.delegate = options.delegate;
        this._stateEventEmitter = new _emitter__WEBPACK_IMPORTED_MODULE_1__.EmitterImpl();
        this._userAgent = userAgent;
    }
    /**
     * Destructor.
     */
    dispose() {
        this.logger.log(`Session ${this.id} in state ${this._state} is being disposed`);
        // Remove from the user agent's session collection
        delete this.userAgent._sessions[this.id];
        // Dispose of dialog media
        if (this._sessionDescriptionHandler) {
            this._sessionDescriptionHandler.close();
            // TODO: The SDH needs to remain defined as it will be called after it is closed in cases
            // where an answer/offer arrives while the session is being torn down. There are a variety
            // of circumstances where this can happen - sending a BYE during a re-INVITE for example.
            // The code is currently written such that it lazily makes a new SDH when it needs one
            // and one is not yet defined. Thus if we undefined it here, it will currently make a
            // new one which is out of sync and then never gets cleaned up.
            //
            // The downside of leaving it defined are that calls this closed SDH will continue to be
            // made (think setDescription) and those should/will fail. These failures are handled, but
            // it would be nice to have it all coded up in a way where having an undefined SDH where
            // one is expected throws an error.
            //
            // this._sessionDescriptionHandler = undefined;
        }
        switch (this.state) {
            case _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Initial:
                break; // the Inviter/Invitation sub class dispose method handles this case
            case _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Establishing:
                break; // the Inviter/Invitation sub class dispose method handles this case
            case _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Established:
                return new Promise((resolve) => {
                    this._bye({
                        // wait for the response to the BYE before resolving
                        onAccept: () => resolve(),
                        onRedirect: () => resolve(),
                        onReject: () => resolve()
                    });
                });
            case _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminating:
                break; // nothing to be done
            case _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminated:
                break; // nothing to be done
            default:
                throw new Error("Unknown state.");
        }
        return Promise.resolve();
    }
    /**
     * The asserted identity of the remote user.
     */
    get assertedIdentity() {
        return this._assertedIdentity;
    }
    /**
     * The confirmed session dialog.
     */
    get dialog() {
        return this._dialog;
    }
    /**
     * A unique identifier for this session.
     */
    get id() {
        return this._id;
    }
    /**
     * The session being replace by this one.
     */
    get replacee() {
        return this._replacee;
    }
    /**
     * Session description handler.
     * @remarks
     * If `this` is an instance of `Invitation`,
     * `sessionDescriptionHandler` will be defined when the session state changes to "established".
     * If `this` is an instance of `Inviter` and an offer was sent in the INVITE,
     * `sessionDescriptionHandler` will be defined when the session state changes to "establishing".
     * If `this` is an instance of `Inviter` and an offer was not sent in the INVITE,
     * `sessionDescriptionHandler` will be defined when the session state changes to "established".
     * Otherwise `undefined`.
     */
    get sessionDescriptionHandler() {
        return this._sessionDescriptionHandler;
    }
    /**
     * Session description handler factory.
     */
    get sessionDescriptionHandlerFactory() {
        return this.userAgent.configuration.sessionDescriptionHandlerFactory;
    }
    /**
     * SDH modifiers for the initial INVITE transaction.
     * @remarks
     * Used in all cases when handling the initial INVITE transaction as either UAC or UAS.
     * May be set directly at anytime.
     * May optionally be set via constructor option.
     * May optionally be set via options passed to Inviter.invite() or Invitation.accept().
     */
    get sessionDescriptionHandlerModifiers() {
        return this._sessionDescriptionHandlerModifiers || [];
    }
    set sessionDescriptionHandlerModifiers(modifiers) {
        this._sessionDescriptionHandlerModifiers = modifiers.slice();
    }
    /**
     * SDH options for the initial INVITE transaction.
     * @remarks
     * Used in all cases when handling the initial INVITE transaction as either UAC or UAS.
     * May be set directly at anytime.
     * May optionally be set via constructor option.
     * May optionally be set via options passed to Inviter.invite() or Invitation.accept().
     */
    get sessionDescriptionHandlerOptions() {
        return this._sessionDescriptionHandlerOptions || {};
    }
    set sessionDescriptionHandlerOptions(options) {
        this._sessionDescriptionHandlerOptions = Object.assign({}, options);
    }
    /**
     * SDH modifiers for re-INVITE transactions.
     * @remarks
     * Used in all cases when handling a re-INVITE transaction as either UAC or UAS.
     * May be set directly at anytime.
     * May optionally be set via constructor option.
     * May optionally be set via options passed to Session.invite().
     */
    get sessionDescriptionHandlerModifiersReInvite() {
        return this._sessionDescriptionHandlerModifiersReInvite || [];
    }
    set sessionDescriptionHandlerModifiersReInvite(modifiers) {
        this._sessionDescriptionHandlerModifiersReInvite = modifiers.slice();
    }
    /**
     * SDH options for re-INVITE transactions.
     * @remarks
     * Used in all cases when handling a re-INVITE transaction as either UAC or UAS.
     * May be set directly at anytime.
     * May optionally be set via constructor option.
     * May optionally be set via options passed to Session.invite().
     */
    get sessionDescriptionHandlerOptionsReInvite() {
        return this._sessionDescriptionHandlerOptionsReInvite || {};
    }
    set sessionDescriptionHandlerOptionsReInvite(options) {
        this._sessionDescriptionHandlerOptionsReInvite = Object.assign({}, options);
    }
    /**
     * Session state.
     */
    get state() {
        return this._state;
    }
    /**
     * Session state change emitter.
     */
    get stateChange() {
        return this._stateEventEmitter;
    }
    /**
     * The user agent.
     */
    get userAgent() {
        return this._userAgent;
    }
    /**
     * End the {@link Session}. Sends a BYE.
     * @param options - Options bucket. See {@link SessionByeOptions} for details.
     */
    bye(options = {}) {
        let message = "Session.bye() may only be called if established session.";
        switch (this.state) {
            case _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Initial:
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (typeof this.cancel === "function") {
                    message += " However Inviter.invite() has not yet been called.";
                    message += " Perhaps you should have called Inviter.cancel()?";
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                }
                else if (typeof this.reject === "function") {
                    message += " However Invitation.accept() has not yet been called.";
                    message += " Perhaps you should have called Invitation.reject()?";
                }
                break;
            case _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Establishing:
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (typeof this.cancel === "function") {
                    message += " However a dialog does not yet exist.";
                    message += " Perhaps you should have called Inviter.cancel()?";
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                }
                else if (typeof this.reject === "function") {
                    message += " However Invitation.accept() has not yet been called (or not yet resolved).";
                    message += " Perhaps you should have called Invitation.reject()?";
                }
                break;
            case _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Established: {
                const requestDelegate = options.requestDelegate;
                const requestOptions = this.copyRequestOptions(options.requestOptions);
                return this._bye(requestDelegate, requestOptions);
            }
            case _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminating:
                message += " However this session is already terminating.";
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (typeof this.cancel === "function") {
                    message += " Perhaps you have already called Inviter.cancel()?";
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                }
                else if (typeof this.reject === "function") {
                    message += " Perhaps you have already called Session.bye()?";
                }
                break;
            case _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminated:
                message += " However this session is already terminated.";
                break;
            default:
                throw new Error("Unknown state");
        }
        this.logger.error(message);
        return Promise.reject(new Error(`Invalid session state ${this.state}`));
    }
    /**
     * Share {@link Info} with peer. Sends an INFO.
     * @param options - Options bucket. See {@link SessionInfoOptions} for details.
     */
    info(options = {}) {
        // guard session state
        if (this.state !== _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Established) {
            const message = "Session.info() may only be called if established session.";
            this.logger.error(message);
            return Promise.reject(new Error(`Invalid session state ${this.state}`));
        }
        const requestDelegate = options.requestDelegate;
        const requestOptions = this.copyRequestOptions(options.requestOptions);
        return this._info(requestDelegate, requestOptions);
    }
    /**
     * Renegotiate the session. Sends a re-INVITE.
     * @param options - Options bucket. See {@link SessionInviteOptions} for details.
     */
    invite(options = {}) {
        this.logger.log("Session.invite");
        if (this.state !== _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Established) {
            return Promise.reject(new Error(`Invalid session state ${this.state}`));
        }
        if (this.pendingReinvite) {
            return Promise.reject(new _exceptions__WEBPACK_IMPORTED_MODULE_2__.RequestPendingError("Reinvite in progress. Please wait until complete, then try again."));
        }
        this.pendingReinvite = true;
        // Modifiers and options for initial INVITE transaction
        if (options.sessionDescriptionHandlerModifiers) {
            this.sessionDescriptionHandlerModifiersReInvite = options.sessionDescriptionHandlerModifiers;
        }
        if (options.sessionDescriptionHandlerOptions) {
            this.sessionDescriptionHandlerOptionsReInvite = options.sessionDescriptionHandlerOptions;
        }
        const delegate = {
            onAccept: (response) => {
                // A re-INVITE transaction has an offer/answer [RFC3264] exchange
                // associated with it.  The UAC (User Agent Client) generating a given
                // re-INVITE can act as the offerer or as the answerer.  A UAC willing
                // to act as the offerer includes an offer in the re-INVITE.  The UAS
                // (User Agent Server) then provides an answer in a response to the
                // re-INVITE.  A UAC willing to act as answerer does not include an
                // offer in the re-INVITE.  The UAS then provides an offer in a response
                // to the re-INVITE becoming, thus, the offerer.
                // https://tools.ietf.org/html/rfc6141#section-1
                const body = (0,_core__WEBPACK_IMPORTED_MODULE_3__.getBody)(response.message);
                if (!body) {
                    // No way to recover, so terminate session and mark as failed.
                    this.logger.error("Received 2xx response to re-INVITE without a session description");
                    this.ackAndBye(response, 400, "Missing session description");
                    this.stateTransition(_session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminated);
                    this.pendingReinvite = false;
                    return;
                }
                if (options.withoutSdp) {
                    // INVITE without SDP - set remote offer and send an answer in the ACK
                    const answerOptions = {
                        sessionDescriptionHandlerOptions: this.sessionDescriptionHandlerOptionsReInvite,
                        sessionDescriptionHandlerModifiers: this.sessionDescriptionHandlerModifiersReInvite
                    };
                    this.setOfferAndGetAnswer(body, answerOptions)
                        .then((answerBody) => {
                        response.ack({ body: answerBody });
                    })
                        .catch((error) => {
                        // No way to recover, so terminate session and mark as failed.
                        this.logger.error("Failed to handle offer in 2xx response to re-INVITE");
                        this.logger.error(error.message);
                        if (this.state === _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminated) {
                            // A BYE should not be sent if already terminated.
                            // For example, a BYE may be sent/received while re-INVITE is outstanding.
                            response.ack();
                        }
                        else {
                            this.ackAndBye(response, 488, "Bad Media Description");
                            this.stateTransition(_session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminated);
                        }
                    })
                        .then(() => {
                        this.pendingReinvite = false;
                        if (options.requestDelegate && options.requestDelegate.onAccept) {
                            options.requestDelegate.onAccept(response);
                        }
                    });
                }
                else {
                    // INVITE with SDP - set remote answer and send an ACK
                    const answerOptions = {
                        sessionDescriptionHandlerOptions: this.sessionDescriptionHandlerOptionsReInvite,
                        sessionDescriptionHandlerModifiers: this.sessionDescriptionHandlerModifiersReInvite
                    };
                    this.setAnswer(body, answerOptions)
                        .then(() => {
                        response.ack();
                    })
                        .catch((error) => {
                        // No way to recover, so terminate session and mark as failed.
                        this.logger.error("Failed to handle answer in 2xx response to re-INVITE");
                        this.logger.error(error.message);
                        // A BYE should only be sent if session is not already terminated.
                        // For example, a BYE may be sent/received while re-INVITE is outstanding.
                        // The ACK needs to be sent regardless as it was not handled by the transaction.
                        if (this.state !== _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminated) {
                            this.ackAndBye(response, 488, "Bad Media Description");
                            this.stateTransition(_session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminated);
                        }
                        else {
                            response.ack();
                        }
                    })
                        .then(() => {
                        this.pendingReinvite = false;
                        if (options.requestDelegate && options.requestDelegate.onAccept) {
                            options.requestDelegate.onAccept(response);
                        }
                    });
                }
            },
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onProgress: (response) => {
                return;
            },
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onRedirect: (response) => {
                return;
            },
            onReject: (response) => {
                this.logger.warn("Received a non-2xx response to re-INVITE");
                this.pendingReinvite = false;
                if (options.withoutSdp) {
                    if (options.requestDelegate && options.requestDelegate.onReject) {
                        options.requestDelegate.onReject(response);
                    }
                }
                else {
                    this.rollbackOffer()
                        .catch((error) => {
                        // No way to recover, so terminate session and mark as failed.
                        this.logger.error("Failed to rollback offer on non-2xx response to re-INVITE");
                        this.logger.error(error.message);
                        // A BYE should only be sent if session is not already terminated.
                        // For example, a BYE may be sent/received while re-INVITE is outstanding.
                        // Note that the ACK was already sent by the transaction, so just need to send BYE.
                        if (this.state !== _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminated) {
                            if (!this.dialog) {
                                throw new Error("Dialog undefined.");
                            }
                            const extraHeaders = [];
                            extraHeaders.push("Reason: " + this.getReasonHeaderValue(500, "Internal Server Error"));
                            this.dialog.bye(undefined, { extraHeaders });
                            this.stateTransition(_session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminated);
                        }
                    })
                        .then(() => {
                        if (options.requestDelegate && options.requestDelegate.onReject) {
                            options.requestDelegate.onReject(response);
                        }
                    });
                }
            },
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onTrying: (response) => {
                return;
            }
        };
        const requestOptions = options.requestOptions || {};
        requestOptions.extraHeaders = (requestOptions.extraHeaders || []).slice();
        requestOptions.extraHeaders.push("Allow: " + _core_user_agent_core_allowed_methods__WEBPACK_IMPORTED_MODULE_4__.AllowedMethods.toString());
        requestOptions.extraHeaders.push("Contact: " + this._contact);
        // Just send an INVITE with no sdp...
        if (options.withoutSdp) {
            if (!this.dialog) {
                this.pendingReinvite = false;
                throw new Error("Dialog undefined.");
            }
            return Promise.resolve(this.dialog.invite(delegate, requestOptions));
        }
        // Get an offer and send it in an INVITE
        const offerOptions = {
            sessionDescriptionHandlerOptions: this.sessionDescriptionHandlerOptionsReInvite,
            sessionDescriptionHandlerModifiers: this.sessionDescriptionHandlerModifiersReInvite
        };
        return this.getOffer(offerOptions)
            .then((offerBody) => {
            if (!this.dialog) {
                this.pendingReinvite = false;
                throw new Error("Dialog undefined.");
            }
            requestOptions.body = offerBody;
            return this.dialog.invite(delegate, requestOptions);
        })
            .catch((error) => {
            this.logger.error(error.message);
            this.logger.error("Failed to send re-INVITE");
            this.pendingReinvite = false;
            throw error;
        });
    }
    /**
     * Deliver a {@link Message}. Sends a MESSAGE.
     * @param options - Options bucket. See {@link SessionMessageOptions} for details.
     */
    message(options = {}) {
        // guard session state
        if (this.state !== _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Established) {
            const message = "Session.message() may only be called if established session.";
            this.logger.error(message);
            return Promise.reject(new Error(`Invalid session state ${this.state}`));
        }
        const requestDelegate = options.requestDelegate;
        const requestOptions = this.copyRequestOptions(options.requestOptions);
        return this._message(requestDelegate, requestOptions);
    }
    /**
     * Proffer a {@link Referral}. Send a REFER.
     * @param referTo - The referral target. If a `Session`, a REFER w/Replaces is sent.
     * @param options - Options bucket. See {@link SessionReferOptions} for details.
     */
    refer(referTo, options = {}) {
        // guard session state
        if (this.state !== _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Established) {
            const message = "Session.refer() may only be called if established session.";
            this.logger.error(message);
            return Promise.reject(new Error(`Invalid session state ${this.state}`));
        }
        const requestDelegate = options.requestDelegate;
        const requestOptions = this.copyRequestOptions(options.requestOptions);
        requestOptions.extraHeaders = requestOptions.extraHeaders
            ? requestOptions.extraHeaders.concat(this.referExtraHeaders(this.referToString(referTo)))
            : this.referExtraHeaders(this.referToString(referTo));
        return this._refer(options.onNotify, requestDelegate, requestOptions);
    }
    /**
     * Send BYE.
     * @param delegate - Request delegate.
     * @param options - Request options bucket.
     * @internal
     */
    _bye(delegate, options) {
        // Using core session dialog
        if (!this.dialog) {
            return Promise.reject(new Error("Session dialog undefined."));
        }
        const dialog = this.dialog;
        // The caller's UA MAY send a BYE for either confirmed or early dialogs,
        // and the callee's UA MAY send a BYE on confirmed dialogs, but MUST NOT
        // send a BYE on early dialogs. However, the callee's UA MUST NOT send a
        // BYE on a confirmed dialog until it has received an ACK for its 2xx
        // response or until the server transaction times out.
        // https://tools.ietf.org/html/rfc3261#section-15
        switch (dialog.sessionState) {
            case _core__WEBPACK_IMPORTED_MODULE_5__.SessionState.Initial:
                throw new Error(`Invalid dialog state ${dialog.sessionState}`);
            case _core__WEBPACK_IMPORTED_MODULE_5__.SessionState.Early: // Implementation choice - not sending BYE for early dialogs.
                throw new Error(`Invalid dialog state ${dialog.sessionState}`);
            case _core__WEBPACK_IMPORTED_MODULE_5__.SessionState.AckWait: {
                // This state only occurs if we are the callee.
                this.stateTransition(_session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminating); // We're terminating
                return new Promise((resolve) => {
                    dialog.delegate = {
                        // When ACK shows up, say BYE.
                        onAck: () => {
                            const request = dialog.bye(delegate, options);
                            this.stateTransition(_session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminated);
                            resolve(request);
                            return Promise.resolve();
                        },
                        // Or the server transaction times out before the ACK arrives.
                        onAckTimeout: () => {
                            const request = dialog.bye(delegate, options);
                            this.stateTransition(_session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminated);
                            resolve(request);
                        }
                    };
                });
            }
            case _core__WEBPACK_IMPORTED_MODULE_5__.SessionState.Confirmed: {
                const request = dialog.bye(delegate, options);
                this.stateTransition(_session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminated);
                return Promise.resolve(request);
            }
            case _core__WEBPACK_IMPORTED_MODULE_5__.SessionState.Terminated:
                throw new Error(`Invalid dialog state ${dialog.sessionState}`);
            default:
                throw new Error("Unrecognized state.");
        }
    }
    /**
     * Send INFO.
     * @param delegate - Request delegate.
     * @param options - Request options bucket.
     * @internal
     */
    _info(delegate, options) {
        // Using core session dialog
        if (!this.dialog) {
            return Promise.reject(new Error("Session dialog undefined."));
        }
        return Promise.resolve(this.dialog.info(delegate, options));
    }
    /**
     * Send MESSAGE.
     * @param delegate - Request delegate.
     * @param options - Request options bucket.
     * @internal
     */
    _message(delegate, options) {
        // Using core session dialog
        if (!this.dialog) {
            return Promise.reject(new Error("Session dialog undefined."));
        }
        return Promise.resolve(this.dialog.message(delegate, options));
    }
    /**
     * Send REFER.
     * @param onNotify - Notification callback.
     * @param delegate - Request delegate.
     * @param options - Request options bucket.
     * @internal
     */
    _refer(onNotify, delegate, options) {
        // Using core session dialog
        if (!this.dialog) {
            return Promise.reject(new Error("Session dialog undefined."));
        }
        // If set, deliver any in-dialog NOTIFY requests here...
        this.onNotify = onNotify;
        return Promise.resolve(this.dialog.refer(delegate, options));
    }
    /**
     * Send ACK and then BYE. There are unrecoverable errors which can occur
     * while handling dialog forming and in-dialog INVITE responses and when
     * they occur we ACK the response and send a BYE.
     * Note that the BYE is sent in the dialog associated with the response
     * which is not necessarily `this.dialog`. And, accordingly, the
     * session state is not transitioned to terminated and session is not closed.
     * @param inviteResponse - The response causing the error.
     * @param statusCode - Status code for he reason phrase.
     * @param reasonPhrase - Reason phrase for the BYE.
     * @internal
     */
    ackAndBye(response, statusCode, reasonPhrase) {
        response.ack();
        const extraHeaders = [];
        if (statusCode) {
            extraHeaders.push("Reason: " + this.getReasonHeaderValue(statusCode, reasonPhrase));
        }
        // Using the dialog session associate with the response (which might not be this.dialog)
        response.session.bye(undefined, { extraHeaders });
    }
    /**
     * Handle in dialog ACK request.
     * @internal
     */
    onAckRequest(request) {
        this.logger.log("Session.onAckRequest");
        if (this.state !== _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Established && this.state !== _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminating) {
            this.logger.error(`ACK received while in state ${this.state}, dropping request`);
            return Promise.resolve();
        }
        const dialog = this.dialog;
        if (!dialog) {
            throw new Error("Dialog undefined.");
        }
        // if received answer in ACK.
        const answerOptions = {
            sessionDescriptionHandlerOptions: this.pendingReinviteAck
                ? this.sessionDescriptionHandlerOptionsReInvite
                : this.sessionDescriptionHandlerOptions,
            sessionDescriptionHandlerModifiers: this.pendingReinviteAck
                ? this._sessionDescriptionHandlerModifiersReInvite
                : this._sessionDescriptionHandlerModifiers
        };
        if (this.delegate && this.delegate.onAck) {
            const ack = new _ack__WEBPACK_IMPORTED_MODULE_6__.Ack(request);
            this.delegate.onAck(ack);
        }
        // reset pending ACK flag
        this.pendingReinviteAck = false;
        switch (dialog.signalingState) {
            case _core__WEBPACK_IMPORTED_MODULE_5__.SignalingState.Initial: {
                // State should never be reached as first reliable response must have answer/offer.
                // So we must have never has sent an offer.
                this.logger.error(`Invalid signaling state ${dialog.signalingState}.`);
                const extraHeaders = ["Reason: " + this.getReasonHeaderValue(488, "Bad Media Description")];
                dialog.bye(undefined, { extraHeaders });
                this.stateTransition(_session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminated);
                return Promise.resolve();
            }
            case _core__WEBPACK_IMPORTED_MODULE_5__.SignalingState.Stable: {
                // State we should be in.
                // Either the ACK has the answer that got us here, or we were in this state prior to the ACK.
                const body = (0,_core__WEBPACK_IMPORTED_MODULE_3__.getBody)(request.message);
                // If the ACK doesn't have an answer, nothing to be done.
                if (!body) {
                    return Promise.resolve();
                }
                if (body.contentDisposition === "render") {
                    this._renderbody = body.content;
                    this._rendertype = body.contentType;
                    return Promise.resolve();
                }
                if (body.contentDisposition !== "session") {
                    return Promise.resolve();
                }
                return this.setAnswer(body, answerOptions).catch((error) => {
                    this.logger.error(error.message);
                    const extraHeaders = ["Reason: " + this.getReasonHeaderValue(488, "Bad Media Description")];
                    dialog.bye(undefined, { extraHeaders });
                    this.stateTransition(_session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminated);
                });
            }
            case _core__WEBPACK_IMPORTED_MODULE_5__.SignalingState.HaveLocalOffer: {
                // State should never be reached as local offer would be answered by this ACK.
                // So we must have received an ACK without an answer.
                this.logger.error(`Invalid signaling state ${dialog.signalingState}.`);
                const extraHeaders = ["Reason: " + this.getReasonHeaderValue(488, "Bad Media Description")];
                dialog.bye(undefined, { extraHeaders });
                this.stateTransition(_session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminated);
                return Promise.resolve();
            }
            case _core__WEBPACK_IMPORTED_MODULE_5__.SignalingState.HaveRemoteOffer: {
                // State should never be reached as remote offer would be answered in first reliable response.
                // So we must have never has sent an answer.
                this.logger.error(`Invalid signaling state ${dialog.signalingState}.`);
                const extraHeaders = ["Reason: " + this.getReasonHeaderValue(488, "Bad Media Description")];
                dialog.bye(undefined, { extraHeaders });
                this.stateTransition(_session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminated);
                return Promise.resolve();
            }
            case _core__WEBPACK_IMPORTED_MODULE_5__.SignalingState.Closed:
                throw new Error(`Invalid signaling state ${dialog.signalingState}.`);
            default:
                throw new Error(`Invalid signaling state ${dialog.signalingState}.`);
        }
    }
    /**
     * Handle in dialog BYE request.
     * @internal
     */
    onByeRequest(request) {
        this.logger.log("Session.onByeRequest");
        if (this.state !== _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Established) {
            this.logger.error(`BYE received while in state ${this.state}, dropping request`);
            return;
        }
        if (this.delegate && this.delegate.onBye) {
            const bye = new _bye__WEBPACK_IMPORTED_MODULE_7__.Bye(request);
            this.delegate.onBye(bye);
        }
        else {
            request.accept();
        }
        this.stateTransition(_session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminated);
    }
    /**
     * Handle in dialog INFO request.
     * @internal
     */
    onInfoRequest(request) {
        this.logger.log("Session.onInfoRequest");
        if (this.state !== _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Established) {
            this.logger.error(`INFO received while in state ${this.state}, dropping request`);
            return;
        }
        if (this.delegate && this.delegate.onInfo) {
            const info = new _info__WEBPACK_IMPORTED_MODULE_8__.Info(request);
            this.delegate.onInfo(info);
        }
        else {
            // FIXME: TODO: We should reject request...
            //
            // If a UA receives an INFO request associated with an Info Package that
            // the UA has not indicated willingness to receive, the UA MUST send a
            // 469 (Bad Info Package) response (see Section 11.6), which contains a
            // Recv-Info header field with Info Packages for which the UA is willing
            // to receive INFO requests.
            // https://tools.ietf.org/html/rfc6086#section-4.2.2
            request.accept();
        }
    }
    /**
     * Handle in dialog INVITE request.
     * @internal
     */
    onInviteRequest(request) {
        this.logger.log("Session.onInviteRequest");
        if (this.state !== _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Established) {
            this.logger.error(`INVITE received while in state ${this.state}, dropping request`);
            return;
        }
        // set pending ACK flag
        this.pendingReinviteAck = true;
        // TODO: would be nice to have core track and set the Contact header,
        // but currently the session which is setting it is holding onto it.
        const extraHeaders = ["Contact: " + this._contact];
        // Handle P-Asserted-Identity
        if (request.message.hasHeader("P-Asserted-Identity")) {
            const header = request.message.getHeader("P-Asserted-Identity");
            if (!header) {
                throw new Error("Header undefined.");
            }
            this._assertedIdentity = _core__WEBPACK_IMPORTED_MODULE_9__.Grammar.nameAddrHeaderParse(header);
        }
        const options = {
            sessionDescriptionHandlerOptions: this.sessionDescriptionHandlerOptionsReInvite,
            sessionDescriptionHandlerModifiers: this.sessionDescriptionHandlerModifiersReInvite
        };
        this.generateResponseOfferAnswerInDialog(options)
            .then((body) => {
            const outgoingResponse = request.accept({ statusCode: 200, extraHeaders, body });
            if (this.delegate && this.delegate.onInvite) {
                this.delegate.onInvite(request.message, outgoingResponse.message, 200);
            }
        })
            .catch((error) => {
            this.logger.error(error.message);
            this.logger.error("Failed to handle to re-INVITE request");
            if (!this.dialog) {
                throw new Error("Dialog undefined.");
            }
            this.logger.error(this.dialog.signalingState);
            // If we don't have a local/remote offer...
            if (this.dialog.signalingState === _core__WEBPACK_IMPORTED_MODULE_5__.SignalingState.Stable) {
                const outgoingResponse = request.reject({ statusCode: 488 }); // Not Acceptable Here
                if (this.delegate && this.delegate.onInvite) {
                    this.delegate.onInvite(request.message, outgoingResponse.message, 488);
                }
                return;
            }
            // Otherwise rollback
            this.rollbackOffer()
                .then(() => {
                const outgoingResponse = request.reject({ statusCode: 488 }); // Not Acceptable Here
                if (this.delegate && this.delegate.onInvite) {
                    this.delegate.onInvite(request.message, outgoingResponse.message, 488);
                }
            })
                .catch((errorRollback) => {
                // No way to recover, so terminate session and mark as failed.
                this.logger.error(errorRollback.message);
                this.logger.error("Failed to rollback offer on re-INVITE request");
                const outgoingResponse = request.reject({ statusCode: 488 }); // Not Acceptable Here
                // A BYE should only be sent if session is not already terminated.
                // For example, a BYE may be sent/received while re-INVITE is outstanding.
                // Note that the ACK was already sent by the transaction, so just need to send BYE.
                if (this.state !== _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminated) {
                    if (!this.dialog) {
                        throw new Error("Dialog undefined.");
                    }
                    const extraHeadersBye = [];
                    extraHeadersBye.push("Reason: " + this.getReasonHeaderValue(500, "Internal Server Error"));
                    this.dialog.bye(undefined, { extraHeaders });
                    this.stateTransition(_session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminated);
                }
                if (this.delegate && this.delegate.onInvite) {
                    this.delegate.onInvite(request.message, outgoingResponse.message, 488);
                }
            });
        });
    }
    /**
     * Handle in dialog MESSAGE request.
     * @internal
     */
    onMessageRequest(request) {
        this.logger.log("Session.onMessageRequest");
        if (this.state !== _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Established) {
            this.logger.error(`MESSAGE received while in state ${this.state}, dropping request`);
            return;
        }
        if (this.delegate && this.delegate.onMessage) {
            const message = new _message__WEBPACK_IMPORTED_MODULE_10__.Message(request);
            this.delegate.onMessage(message);
        }
        else {
            request.accept();
        }
    }
    /**
     * Handle in dialog NOTIFY request.
     * @internal
     */
    onNotifyRequest(request) {
        this.logger.log("Session.onNotifyRequest");
        if (this.state !== _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Established) {
            this.logger.error(`NOTIFY received while in state ${this.state}, dropping request`);
            return;
        }
        // If this a NOTIFY associated with the progress of a REFER,
        // look to delegate handling to the associated callback.
        if (this.onNotify) {
            const notification = new _notification__WEBPACK_IMPORTED_MODULE_11__.Notification(request);
            this.onNotify(notification);
            return;
        }
        // Otherwise accept the NOTIFY.
        if (this.delegate && this.delegate.onNotify) {
            const notification = new _notification__WEBPACK_IMPORTED_MODULE_11__.Notification(request);
            this.delegate.onNotify(notification);
        }
        else {
            request.accept();
        }
    }
    /**
     * Handle in dialog PRACK request.
     * @internal
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onPrackRequest(request) {
        this.logger.log("Session.onPrackRequest");
        if (this.state !== _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Established) {
            this.logger.error(`PRACK received while in state ${this.state}, dropping request`);
            return;
        }
        throw new Error("Unimplemented.");
    }
    /**
     * Handle in dialog REFER request.
     * @internal
     */
    onReferRequest(request) {
        this.logger.log("Session.onReferRequest");
        if (this.state !== _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Established) {
            this.logger.error(`REFER received while in state ${this.state}, dropping request`);
            return;
        }
        // REFER is a SIP request and is constructed as defined in [1].  A REFER
        // request MUST contain exactly one Refer-To header field value.
        // https://tools.ietf.org/html/rfc3515#section-2.4.1
        if (!request.message.hasHeader("refer-to")) {
            this.logger.warn("Invalid REFER packet. A refer-to header is required. Rejecting.");
            request.reject();
            return;
        }
        const referral = new _referral__WEBPACK_IMPORTED_MODULE_12__.Referral(request, this);
        if (this.delegate && this.delegate.onRefer) {
            this.delegate.onRefer(referral);
        }
        else {
            this.logger.log("No delegate available to handle REFER, automatically accepting and following.");
            referral
                .accept()
                .then(() => referral.makeInviter(this._referralInviterOptions).invite())
                .catch((error) => {
                // FIXME: logging and eating error...
                this.logger.error(error.message);
            });
        }
    }
    /**
     * Generate an offer or answer for a response to an INVITE request.
     * If a remote offer was provided in the request, set the remote
     * description and get a local answer. If a remote offer was not
     * provided, generates a local offer.
     * @internal
     */
    generateResponseOfferAnswer(request, options) {
        if (this.dialog) {
            return this.generateResponseOfferAnswerInDialog(options);
        }
        const body = (0,_core__WEBPACK_IMPORTED_MODULE_3__.getBody)(request.message);
        if (!body || body.contentDisposition !== "session") {
            return this.getOffer(options);
        }
        else {
            return this.setOfferAndGetAnswer(body, options);
        }
    }
    /**
     * Generate an offer or answer for a response to an INVITE request
     * when a dialog (early or otherwise) has already been established.
     * This method may NOT be called if a dialog has yet to be established.
     * @internal
     */
    generateResponseOfferAnswerInDialog(options) {
        if (!this.dialog) {
            throw new Error("Dialog undefined.");
        }
        switch (this.dialog.signalingState) {
            case _core__WEBPACK_IMPORTED_MODULE_5__.SignalingState.Initial:
                return this.getOffer(options);
            case _core__WEBPACK_IMPORTED_MODULE_5__.SignalingState.HaveLocalOffer:
                // o  Once the UAS has sent or received an answer to the initial
                // offer, it MUST NOT generate subsequent offers in any responses
                // to the initial INVITE.  This means that a UAS based on this
                // specification alone can never generate subsequent offers until
                // completion of the initial transaction.
                // https://tools.ietf.org/html/rfc3261#section-13.2.1
                return Promise.resolve(undefined);
            case _core__WEBPACK_IMPORTED_MODULE_5__.SignalingState.HaveRemoteOffer:
                if (!this.dialog.offer) {
                    throw new Error(`Session offer undefined in signaling state ${this.dialog.signalingState}.`);
                }
                return this.setOfferAndGetAnswer(this.dialog.offer, options);
            case _core__WEBPACK_IMPORTED_MODULE_5__.SignalingState.Stable:
                // o  Once the UAS has sent or received an answer to the initial
                // offer, it MUST NOT generate subsequent offers in any responses
                // to the initial INVITE.  This means that a UAS based on this
                // specification alone can never generate subsequent offers until
                // completion of the initial transaction.
                // https://tools.ietf.org/html/rfc3261#section-13.2.1
                if (this.state !== _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Established) {
                    return Promise.resolve(undefined);
                }
                // In dialog INVITE without offer, get an offer for the response.
                return this.getOffer(options);
            case _core__WEBPACK_IMPORTED_MODULE_5__.SignalingState.Closed:
                throw new Error(`Invalid signaling state ${this.dialog.signalingState}.`);
            default:
                throw new Error(`Invalid signaling state ${this.dialog.signalingState}.`);
        }
    }
    /**
     * Get local offer.
     * @internal
     */
    getOffer(options) {
        const sdh = this.setupSessionDescriptionHandler();
        const sdhOptions = options.sessionDescriptionHandlerOptions;
        const sdhModifiers = options.sessionDescriptionHandlerModifiers;
        // This is intentionally written very defensively. Don't trust SDH to behave.
        try {
            return sdh
                .getDescription(sdhOptions, sdhModifiers)
                .then((bodyAndContentType) => (0,_core__WEBPACK_IMPORTED_MODULE_3__.fromBodyLegacy)(bodyAndContentType))
                .catch((error) => {
                // don't trust SDH to reject with Error
                this.logger.error("Session.getOffer: SDH getDescription rejected...");
                const e = error instanceof Error ? error : new Error("Session.getOffer unknown error.");
                this.logger.error(e.message);
                throw e;
            });
        }
        catch (error) {
            // don't trust SDH to throw an Error
            this.logger.error("Session.getOffer: SDH getDescription threw...");
            const e = error instanceof Error ? error : new Error(error);
            this.logger.error(e.message);
            return Promise.reject(e);
        }
    }
    /**
     * Rollback local/remote offer.
     * @internal
     */
    rollbackOffer() {
        const sdh = this.setupSessionDescriptionHandler();
        if (sdh.rollbackDescription === undefined) {
            return Promise.resolve();
        }
        // This is intentionally written very defensively. Don't trust SDH to behave.
        try {
            return sdh.rollbackDescription().catch((error) => {
                // don't trust SDH to reject with Error
                this.logger.error("Session.rollbackOffer: SDH rollbackDescription rejected...");
                const e = error instanceof Error ? error : new Error("Session.rollbackOffer unknown error.");
                this.logger.error(e.message);
                throw e;
            });
        }
        catch (error) {
            // don't trust SDH to throw an Error
            this.logger.error("Session.rollbackOffer: SDH rollbackDescription threw...");
            const e = error instanceof Error ? error : new Error(error);
            this.logger.error(e.message);
            return Promise.reject(e);
        }
    }
    /**
     * Set remote answer.
     * @internal
     */
    setAnswer(answer, options) {
        const sdh = this.setupSessionDescriptionHandler();
        const sdhOptions = options.sessionDescriptionHandlerOptions;
        const sdhModifiers = options.sessionDescriptionHandlerModifiers;
        // This is intentionally written very defensively. Don't trust SDH to behave.
        try {
            if (!sdh.hasDescription(answer.contentType)) {
                return Promise.reject(new _exceptions__WEBPACK_IMPORTED_MODULE_13__.ContentTypeUnsupportedError());
            }
        }
        catch (error) {
            this.logger.error("Session.setAnswer: SDH hasDescription threw...");
            const e = error instanceof Error ? error : new Error(error);
            this.logger.error(e.message);
            return Promise.reject(e);
        }
        try {
            return sdh.setDescription(answer.content, sdhOptions, sdhModifiers).catch((error) => {
                // don't trust SDH to reject with Error
                this.logger.error("Session.setAnswer: SDH setDescription rejected...");
                const e = error instanceof Error ? error : new Error("Session.setAnswer unknown error.");
                this.logger.error(e.message);
                throw e;
            });
        }
        catch (error) {
            // don't trust SDH to throw an Error
            this.logger.error("Session.setAnswer: SDH setDescription threw...");
            const e = error instanceof Error ? error : new Error(error);
            this.logger.error(e.message);
            return Promise.reject(e);
        }
    }
    /**
     * Set remote offer and get local answer.
     * @internal
     */
    setOfferAndGetAnswer(offer, options) {
        const sdh = this.setupSessionDescriptionHandler();
        const sdhOptions = options.sessionDescriptionHandlerOptions;
        const sdhModifiers = options.sessionDescriptionHandlerModifiers;
        // This is intentionally written very defensively. Don't trust SDH to behave.
        try {
            if (!sdh.hasDescription(offer.contentType)) {
                return Promise.reject(new _exceptions__WEBPACK_IMPORTED_MODULE_13__.ContentTypeUnsupportedError());
            }
        }
        catch (error) {
            this.logger.error("Session.setOfferAndGetAnswer: SDH hasDescription threw...");
            const e = error instanceof Error ? error : new Error(error);
            this.logger.error(e.message);
            return Promise.reject(e);
        }
        try {
            return sdh
                .setDescription(offer.content, sdhOptions, sdhModifiers)
                .then(() => sdh.getDescription(sdhOptions, sdhModifiers))
                .then((bodyAndContentType) => (0,_core__WEBPACK_IMPORTED_MODULE_3__.fromBodyLegacy)(bodyAndContentType))
                .catch((error) => {
                // don't trust SDH to reject with Error
                this.logger.error("Session.setOfferAndGetAnswer: SDH setDescription or getDescription rejected...");
                const e = error instanceof Error ? error : new Error("Session.setOfferAndGetAnswer unknown error.");
                this.logger.error(e.message);
                throw e;
            });
        }
        catch (error) {
            // don't trust SDH to throw an Error
            this.logger.error("Session.setOfferAndGetAnswer: SDH setDescription or getDescription threw...");
            const e = error instanceof Error ? error : new Error(error);
            this.logger.error(e.message);
            return Promise.reject(e);
        }
    }
    /**
     * SDH for confirmed dialog.
     * @internal
     */
    setSessionDescriptionHandler(sdh) {
        if (this._sessionDescriptionHandler) {
            throw new Error("Session description handler defined.");
        }
        this._sessionDescriptionHandler = sdh;
    }
    /**
     * SDH for confirmed dialog.
     * @internal
     */
    setupSessionDescriptionHandler() {
        var _a;
        if (this._sessionDescriptionHandler) {
            return this._sessionDescriptionHandler;
        }
        this._sessionDescriptionHandler = this.sessionDescriptionHandlerFactory(this, this.userAgent.configuration.sessionDescriptionHandlerFactoryOptions);
        if ((_a = this.delegate) === null || _a === void 0 ? void 0 : _a.onSessionDescriptionHandler) {
            this.delegate.onSessionDescriptionHandler(this._sessionDescriptionHandler, false);
        }
        return this._sessionDescriptionHandler;
    }
    /**
     * Transition session state.
     * @internal
     */
    stateTransition(newState) {
        const invalidTransition = () => {
            throw new Error(`Invalid state transition from ${this._state} to ${newState}`);
        };
        // Validate transition
        switch (this._state) {
            case _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Initial:
                if (newState !== _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Establishing &&
                    newState !== _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Established &&
                    newState !== _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminating &&
                    newState !== _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminated) {
                    invalidTransition();
                }
                break;
            case _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Establishing:
                if (newState !== _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Established &&
                    newState !== _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminating &&
                    newState !== _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminated) {
                    invalidTransition();
                }
                break;
            case _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Established:
                if (newState !== _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminating && newState !== _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminated) {
                    invalidTransition();
                }
                break;
            case _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminating:
                if (newState !== _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminated) {
                    invalidTransition();
                }
                break;
            case _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminated:
                invalidTransition();
                break;
            default:
                throw new Error("Unrecognized state.");
        }
        // Transition
        this._state = newState;
        this.logger.log(`Session ${this.id} transitioned to state ${this._state}`);
        this._stateEventEmitter.emit(this._state);
        // Dispose
        if (newState === _session_state__WEBPACK_IMPORTED_MODULE_0__.SessionState.Terminated) {
            this.dispose();
        }
    }
    copyRequestOptions(requestOptions = {}) {
        const extraHeaders = requestOptions.extraHeaders ? requestOptions.extraHeaders.slice() : undefined;
        const body = requestOptions.body
            ? {
                contentDisposition: requestOptions.body.contentDisposition || "render",
                contentType: requestOptions.body.contentType || "text/plain",
                content: requestOptions.body.content || ""
            }
            : undefined;
        return {
            extraHeaders,
            body
        };
    }
    getReasonHeaderValue(code, reason) {
        const cause = code;
        let text = (0,_core_messages_utils__WEBPACK_IMPORTED_MODULE_14__.getReasonPhrase)(code);
        if (!text && reason) {
            text = reason;
        }
        return "SIP;cause=" + cause + ';text="' + text + '"';
    }
    referExtraHeaders(referTo) {
        const extraHeaders = [];
        extraHeaders.push("Referred-By: <" + this.userAgent.configuration.uri + ">");
        extraHeaders.push("Contact: " + this._contact);
        extraHeaders.push("Allow: " + ["ACK", "CANCEL", "INVITE", "MESSAGE", "BYE", "OPTIONS", "INFO", "NOTIFY", "REFER"].toString());
        extraHeaders.push("Refer-To: " + referTo);
        return extraHeaders;
    }
    referToString(target) {
        let referTo;
        if (target instanceof _core__WEBPACK_IMPORTED_MODULE_15__.URI) {
            // REFER without Replaces (Blind Transfer)
            referTo = target.toString();
        }
        else {
            // REFER with Replaces (Attended Transfer)
            if (!target.dialog) {
                throw new Error("Dialog undefined.");
            }
            const displayName = target.remoteIdentity.friendlyName;
            const remoteTarget = target.dialog.remoteTarget.toString();
            const callId = target.dialog.callId;
            const remoteTag = target.dialog.remoteTag;
            const localTag = target.dialog.localTag;
            const replaces = encodeURIComponent(`${callId};to-tag=${remoteTag};from-tag=${localTag}`);
            referTo = `"${displayName}" <${remoteTarget}?Replaces=${replaces}>`;
        }
        return referTo;
    }
}


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionState": () => (/* binding */ SessionState)
/* harmony export */ });
/**
 * {@link Session} state.
 *
 * @remarks
 * The {@link Session} behaves in a deterministic manner according to the following
 * Finite State Machine (FSM).
 * ```txt
 *                   ___________________________________________________________
 *                  |  ____________________________________________             |
 *                  | |            ____________________________    |            |
 * Session          | |           |                            v   v            v
 * Constructed -> Initial -> Establishing -> Established -> Terminating -> Terminated
 *                                |               |___________________________^   ^
 *                                |_______________________________________________|
 * ```
 * @public
 */
var SessionState;
(function (SessionState) {
    /**
     * If `Inviter`, INVITE not sent yet.
     * If `Invitation`, received INVITE (but no final response sent yet).
     */
    SessionState["Initial"] = "Initial";
    /**
     * If `Inviter`, sent INVITE and waiting for a final response.
     * If `Invitation`, received INVITE and attempting to send 200 final response (but has not sent it yet).
     */
    SessionState["Establishing"] = "Establishing";
    /**
     * If `Inviter`, sent INVITE and received 200 final response and sent ACK.
     * If `Invitation`, received INVITE and sent 200 final response.
     */
    SessionState["Established"] = "Established";
    /**
     * If `Inviter`, sent INVITE, sent CANCEL and now waiting for 487 final response to ACK (or 200 to ACK & BYE).
     * If `Invitation`, received INVITE, sent 200 final response and now waiting on ACK and upon receipt will attempt BYE
     * (as the protocol specification requires, before sending a BYE we must receive the ACK - so we are waiting).
     */
    SessionState["Terminating"] = "Terminating";
    /**
     * If `Inviter`, sent INVITE and received non-200 final response (or sent/received BYE after receiving 200).
     * If `Invitation`, received INVITE and sent non-200 final response (or sent/received BYE after sending 200).
     */
    SessionState["Terminated"] = "Terminated";
})(SessionState || (SessionState = {}));


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromBodyLegacy": () => (/* binding */ fromBodyLegacy),
/* harmony export */   "isBody": () => (/* binding */ isBody),
/* harmony export */   "getBody": () => (/* binding */ getBody)
/* harmony export */ });
/* harmony import */ var _incoming_request_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _incoming_response_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _outgoing_request_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);



// If the Content-Disposition header field is missing, bodies of
// Content-Type application/sdp imply the disposition "session", while
// other content types imply "render".
// https://tools.ietf.org/html/rfc3261#section-13.2.1
function contentTypeToContentDisposition(contentType) {
    if (contentType === "application/sdp") {
        return "session";
    }
    else {
        return "render";
    }
}
/**
 * Create a Body given a legacy body type.
 * @param bodyLegacy - Body Object
 * @internal
 */
function fromBodyLegacy(bodyLegacy) {
    const content = typeof bodyLegacy === "string" ? bodyLegacy : bodyLegacy.body;
    const contentType = typeof bodyLegacy === "string" ? "application/sdp" : bodyLegacy.contentType;
    const contentDisposition = contentTypeToContentDisposition(contentType);
    const body = { contentDisposition, contentType, content };
    return body;
}
/**
 * User-Defined Type Guard for Body.
 * @param body - Body to check.
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isBody(body) {
    return body &&
        typeof body.content === "string" &&
        typeof body.contentType === "string" &&
        body.contentDisposition === undefined
        ? true
        : typeof body.contentDisposition === "string";
}
/**
 * Given a message, get a normalized body.
 * The content disposition is inferred if not set.
 * @param message - The message.
 * @internal
 */
function getBody(message) {
    let contentDisposition;
    let contentType;
    let content;
    // We're in UAS role, receiving incoming request
    if (message instanceof _incoming_request_message__WEBPACK_IMPORTED_MODULE_0__.IncomingRequestMessage) {
        if (message.body) {
            // FIXME: Parsing needs typing
            const parse = message.parseHeader("Content-Disposition");
            contentDisposition = parse ? parse.type : undefined;
            contentType = message.parseHeader("Content-Type");
            content = message.body;
        }
    }
    // We're in UAC role, receiving incoming response
    if (message instanceof _incoming_response_message__WEBPACK_IMPORTED_MODULE_1__.IncomingResponseMessage) {
        if (message.body) {
            // FIXME: Parsing needs typing
            const parse = message.parseHeader("Content-Disposition");
            contentDisposition = parse ? parse.type : undefined;
            contentType = message.parseHeader("Content-Type");
            content = message.body;
        }
    }
    // We're in UAC role, sending outgoing request
    if (message instanceof _outgoing_request_message__WEBPACK_IMPORTED_MODULE_2__.OutgoingRequestMessage) {
        if (message.body) {
            contentDisposition = message.getHeader("Content-Disposition");
            contentType = message.getHeader("Content-Type");
            if (typeof message.body === "string") {
                // FIXME: OutgoingRequest should not allow a "string" body without a "Content-Type" header.
                if (!contentType) {
                    throw new Error("Header content type header does not equal body content type.");
                }
                content = message.body;
            }
            else {
                // FIXME: OutgoingRequest should not allow the "Content-Type" header not to match th body content type
                if (contentType && contentType !== message.body.contentType) {
                    throw new Error("Header content type header does not equal body content type.");
                }
                contentType = message.body.contentType;
                content = message.body.body;
            }
        }
    }
    // We're in UAS role, sending outgoing response
    if (isBody(message)) {
        contentDisposition = message.contentDisposition;
        contentType = message.contentType;
        content = message.content;
    }
    // No content, no body.
    if (!content) {
        return undefined;
    }
    if (contentType && !contentDisposition) {
        contentDisposition = contentTypeToContentDisposition(contentType);
    }
    if (!contentDisposition) {
        throw new Error("Content disposition undefined.");
    }
    if (!contentType) {
        throw new Error("Content type undefined.");
    }
    return {
        contentDisposition,
        contentType,
        content
    };
}


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncomingRequestMessage": () => (/* binding */ IncomingRequestMessage)
/* harmony export */ });
/* harmony import */ var _incoming_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);

/**
 * Incoming request message.
 * @public
 */
class IncomingRequestMessage extends _incoming_message__WEBPACK_IMPORTED_MODULE_0__.IncomingMessage {
    constructor() {
        super();
    }
}


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncomingMessage": () => (/* binding */ IncomingMessage)
/* harmony export */ });
/* harmony import */ var _grammar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);


/**
 * Incoming message.
 * @public
 */
class IncomingMessage {
    constructor() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.headers = {};
    }
    /**
     * Insert a header of the given name and value into the last position of the
     * header array.
     * @param name - header name
     * @param value - header value
     */
    addHeader(name, value) {
        const header = { raw: value };
        name = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.headerize)(name);
        if (this.headers[name]) {
            this.headers[name].push(header);
        }
        else {
            this.headers[name] = [header];
        }
    }
    /**
     * Get the value of the given header name at the given position.
     * @param name - header name
     * @returns Returns the specified header, undefined if header doesn't exist.
     */
    getHeader(name) {
        const header = this.headers[(0,_utils__WEBPACK_IMPORTED_MODULE_0__.headerize)(name)];
        if (header) {
            if (header[0]) {
                return header[0].raw;
            }
        }
        else {
            return;
        }
    }
    /**
     * Get the header/s of the given name.
     * @param name - header name
     * @returns Array - with all the headers of the specified name.
     */
    getHeaders(name) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const header = this.headers[(0,_utils__WEBPACK_IMPORTED_MODULE_0__.headerize)(name)];
        const result = [];
        if (!header) {
            return [];
        }
        for (const headerPart of header) {
            result.push(headerPart.raw);
        }
        return result;
    }
    /**
     * Verify the existence of the given header.
     * @param name - header name
     * @returns true if header with given name exists, false otherwise
     */
    hasHeader(name) {
        return !!this.headers[(0,_utils__WEBPACK_IMPORTED_MODULE_0__.headerize)(name)];
    }
    /**
     * Parse the given header on the given index.
     * @param name - header name
     * @param idx - header index
     * @returns Parsed header object, undefined if the
     *   header is not present or in case of a parsing error.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parseHeader(name, idx = 0) {
        name = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.headerize)(name);
        if (!this.headers[name]) {
            // this.logger.log("header '" + name + "' not present");
            return;
        }
        else if (idx >= this.headers[name].length) {
            // this.logger.log("not so many '" + name + "' headers present");
            return;
        }
        const header = this.headers[name][idx];
        const value = header.raw;
        if (header.parsed) {
            return header.parsed;
        }
        // substitute '-' by '_' for grammar rule matching.
        const parsed = _grammar__WEBPACK_IMPORTED_MODULE_1__.Grammar.parse(value, name.replace(/-/g, "_"));
        if (parsed === -1) {
            this.headers[name].splice(idx, 1); // delete from headers
            // this.logger.warn('error parsing "' + name + '" header field with value "' + value + '"');
            return;
        }
        else {
            header.parsed = parsed;
            return parsed;
        }
    }
    /**
     * Message Header attribute selector. Alias of parseHeader.
     * @param name - header name
     * @param idx - header index
     * @returns Parsed header object, undefined if the
     *   header is not present or in case of a parsing error.
     *
     * @example
     * message.s('via',3).port
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    s(name, idx = 0) {
        return this.parseHeader(name, idx);
    }
    /**
     * Replace the value of the given header by the value.
     * @param name - header name
     * @param value - header value
     */
    setHeader(name, value) {
        this.headers[(0,_utils__WEBPACK_IMPORTED_MODULE_0__.headerize)(name)] = [{ raw: value }];
    }
    toString() {
        return this.data;
    }
}


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRandomToken": () => (/* binding */ createRandomToken),
/* harmony export */   "getReasonPhrase": () => (/* binding */ getReasonPhrase),
/* harmony export */   "newTag": () => (/* binding */ newTag),
/* harmony export */   "headerize": () => (/* binding */ headerize),
/* harmony export */   "utf8Length": () => (/* binding */ utf8Length)
/* harmony export */ });
/**
 * SIP Response Reasons
 * DOC: http://www.iana.org/assignments/sip-parameters
 * @internal
 */
const REASON_PHRASE = {
    100: "Trying",
    180: "Ringing",
    181: "Call Is Being Forwarded",
    182: "Queued",
    183: "Session Progress",
    199: "Early Dialog Terminated",
    200: "OK",
    202: "Accepted",
    204: "No Notification",
    300: "Multiple Choices",
    301: "Moved Permanently",
    302: "Moved Temporarily",
    305: "Use Proxy",
    380: "Alternative Service",
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    407: "Proxy Authentication Required",
    408: "Request Timeout",
    410: "Gone",
    412: "Conditional Request Failed",
    413: "Request Entity Too Large",
    414: "Request-URI Too Long",
    415: "Unsupported Media Type",
    416: "Unsupported URI Scheme",
    417: "Unknown Resource-Priority",
    420: "Bad Extension",
    421: "Extension Required",
    422: "Session Interval Too Small",
    423: "Interval Too Brief",
    428: "Use Identity Header",
    429: "Provide Referrer Identity",
    430: "Flow Failed",
    433: "Anonymity Disallowed",
    436: "Bad Identity-Info",
    437: "Unsupported Certificate",
    438: "Invalid Identity Header",
    439: "First Hop Lacks Outbound Support",
    440: "Max-Breadth Exceeded",
    469: "Bad Info Package",
    470: "Consent Needed",
    478: "Unresolvable Destination",
    480: "Temporarily Unavailable",
    481: "Call/Transaction Does Not Exist",
    482: "Loop Detected",
    483: "Too Many Hops",
    484: "Address Incomplete",
    485: "Ambiguous",
    486: "Busy Here",
    487: "Request Terminated",
    488: "Not Acceptable Here",
    489: "Bad Event",
    491: "Request Pending",
    493: "Undecipherable",
    494: "Security Agreement Required",
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Server Time-out",
    505: "Version Not Supported",
    513: "Message Too Large",
    580: "Precondition Failure",
    600: "Busy Everywhere",
    603: "Decline",
    604: "Does Not Exist Anywhere",
    606: "Not Acceptable"
};
/**
 * @param size -
 * @param base -
 * @internal
 */
function createRandomToken(size, base = 32) {
    let token = "";
    for (let i = 0; i < size; i++) {
        const r = Math.floor(Math.random() * base);
        token += r.toString(base);
    }
    return token;
}
/**
 * @internal
 */
function getReasonPhrase(code) {
    return REASON_PHRASE[code] || "";
}
/**
 * @internal
 */
function newTag() {
    return createRandomToken(10);
}
/**
 * @param str -
 * @internal
 */
function headerize(str) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const exceptions = {
        "Call-Id": "Call-ID",
        Cseq: "CSeq",
        "Min-Se": "Min-SE",
        Rack: "RAck",
        Rseq: "RSeq",
        "Www-Authenticate": "WWW-Authenticate"
    };
    const name = str.toLowerCase().replace(/_/g, "-").split("-");
    const parts = name.length;
    let hname = "";
    for (let part = 0; part < parts; part++) {
        if (part !== 0) {
            hname += "-";
        }
        hname += name[part].charAt(0).toUpperCase() + name[part].substring(1);
    }
    if (exceptions[hname]) {
        hname = exceptions[hname];
    }
    return hname;
}
/**
 * @param str -
 * @internal
 */
function utf8Length(str) {
    return encodeURIComponent(str).replace(/%[A-F\d]{2}/g, "U").length;
}


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Grammar": () => (/* binding */ Grammar)
/* harmony export */ });
/* harmony import */ var _pegjs_dist_grammar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-inner-declarations */

/**
 * Grammar.
 * @internal
 */
var Grammar;
(function (Grammar) {
    /**
     * Parse.
     * @param input -
     * @param startRule -
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function parse(input, startRule) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const options = { startRule };
        try {
            _pegjs_dist_grammar__WEBPACK_IMPORTED_MODULE_0__.parse(input, options);
        }
        catch (e) {
            options.data = -1;
        }
        return options.data;
    }
    Grammar.parse = parse;
    /**
     * Parse the given string and returns a SIP.NameAddrHeader instance or undefined if
     * it is an invalid NameAddrHeader.
     * @param name_addr_header -
     */
    function nameAddrHeaderParse(nameAddrHeader) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const parsedNameAddrHeader = Grammar.parse(nameAddrHeader, "Name_Addr_Header");
        return parsedNameAddrHeader !== -1 ? parsedNameAddrHeader : undefined;
    }
    Grammar.nameAddrHeaderParse = nameAddrHeaderParse;
    /**
     * Parse the given string and returns a SIP.URI instance or undefined if
     * it is an invalid URI.
     * @param uri -
     */
    function URIParse(uri) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const parsedUri = Grammar.parse(uri, "SIP_URI");
        return parsedUri !== -1 ? parsedUri : undefined;
    }
    Grammar.URIParse = URIParse;
})(Grammar || (Grammar = {}));


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SyntaxError": () => (/* binding */ SyntaxError),
/* harmony export */   "parse": () => (/* binding */ parse)
/* harmony export */ });
/* harmony import */ var _name_addr_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);


class SyntaxError extends Error {
    constructor(message, expected, found, location) {
        super();
        this.message = message;
        this.expected = expected;
        this.found = found;
        this.location = location;
        this.name = "SyntaxError";
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(this, SyntaxError);
        }
    }
    static buildMessage(expected, found) {
        function hex(ch) {
            return ch.charCodeAt(0).toString(16).toUpperCase();
        }
        function literalEscape(s) {
            return s
                .replace(/\\/g, "\\\\")
                .replace(/"/g, "\\\"")
                .replace(/\0/g, "\\0")
                .replace(/\t/g, "\\t")
                .replace(/\n/g, "\\n")
                .replace(/\r/g, "\\r")
                .replace(/[\x00-\x0F]/g, (ch) => "\\x0" + hex(ch))
                .replace(/[\x10-\x1F\x7F-\x9F]/g, (ch) => "\\x" + hex(ch));
        }
        function classEscape(s) {
            return s
                .replace(/\\/g, "\\\\")
                .replace(/\]/g, "\\]")
                .replace(/\^/g, "\\^")
                .replace(/-/g, "\\-")
                .replace(/\0/g, "\\0")
                .replace(/\t/g, "\\t")
                .replace(/\n/g, "\\n")
                .replace(/\r/g, "\\r")
                .replace(/[\x00-\x0F]/g, (ch) => "\\x0" + hex(ch))
                .replace(/[\x10-\x1F\x7F-\x9F]/g, (ch) => "\\x" + hex(ch));
        }
        function describeExpectation(expectation) {
            switch (expectation.type) {
                case "literal":
                    return "\"" + literalEscape(expectation.text) + "\"";
                case "class":
                    const escapedParts = expectation.parts.map((part) => {
                        return Array.isArray(part)
                            ? classEscape(part[0]) + "-" + classEscape(part[1])
                            : classEscape(part);
                    });
                    return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
                case "any":
                    return "any character";
                case "end":
                    return "end of input";
                case "other":
                    return expectation.description;
            }
        }
        function describeExpected(expected1) {
            const descriptions = expected1.map(describeExpectation);
            let i;
            let j;
            descriptions.sort();
            if (descriptions.length > 0) {
                for (i = 1, j = 1; i < descriptions.length; i++) {
                    if (descriptions[i - 1] !== descriptions[i]) {
                        descriptions[j] = descriptions[i];
                        j++;
                    }
                }
                descriptions.length = j;
            }
            switch (descriptions.length) {
                case 1:
                    return descriptions[0];
                case 2:
                    return descriptions[0] + " or " + descriptions[1];
                default:
                    return descriptions.slice(0, -1).join(", ")
                        + ", or "
                        + descriptions[descriptions.length - 1];
            }
        }
        function describeFound(found1) {
            return found1 ? "\"" + literalEscape(found1) + "\"" : "end of input";
        }
        return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
    }
}
function peg$parse(input, options) {
    options = options !== undefined ? options : {};
    const peg$FAILED = {};
    const peg$startRuleIndices = { Contact: 119, Name_Addr_Header: 156, Record_Route: 176, Request_Response: 81, SIP_URI: 45, Subscription_State: 186, Supported: 191, Require: 182, Via: 194, absoluteURI: 84, Call_ID: 118, Content_Disposition: 130, Content_Length: 135, Content_Type: 136, CSeq: 146, displayName: 122, Event: 149, From: 151, host: 52, Max_Forwards: 154, Min_SE: 213, Proxy_Authenticate: 157, quoted_string: 40, Refer_To: 178, Replaces: 179, Session_Expires: 210, stun_URI: 217, To: 192, turn_URI: 223, uuid: 226, WWW_Authenticate: 209, challenge: 158, sipfrag: 230, Referred_By: 231 };
    let peg$startRuleIndex = 119;
    const peg$consts = [
        "\r\n",
        peg$literalExpectation("\r\n", false),
        /^[0-9]/,
        peg$classExpectation([["0", "9"]], false, false),
        /^[a-zA-Z]/,
        peg$classExpectation([["a", "z"], ["A", "Z"]], false, false),
        /^[0-9a-fA-F]/,
        peg$classExpectation([["0", "9"], ["a", "f"], ["A", "F"]], false, false),
        /^[\0-\xFF]/,
        peg$classExpectation([["\0", "\xFF"]], false, false),
        /^["]/,
        peg$classExpectation(["\""], false, false),
        " ",
        peg$literalExpectation(" ", false),
        "\t",
        peg$literalExpectation("\t", false),
        /^[a-zA-Z0-9]/,
        peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"]], false, false),
        ";",
        peg$literalExpectation(";", false),
        "/",
        peg$literalExpectation("/", false),
        "?",
        peg$literalExpectation("?", false),
        ":",
        peg$literalExpectation(":", false),
        "@",
        peg$literalExpectation("@", false),
        "&",
        peg$literalExpectation("&", false),
        "=",
        peg$literalExpectation("=", false),
        "+",
        peg$literalExpectation("+", false),
        "$",
        peg$literalExpectation("$", false),
        ",",
        peg$literalExpectation(",", false),
        "-",
        peg$literalExpectation("-", false),
        "_",
        peg$literalExpectation("_", false),
        ".",
        peg$literalExpectation(".", false),
        "!",
        peg$literalExpectation("!", false),
        "~",
        peg$literalExpectation("~", false),
        "*",
        peg$literalExpectation("*", false),
        "'",
        peg$literalExpectation("'", false),
        "(",
        peg$literalExpectation("(", false),
        ")",
        peg$literalExpectation(")", false),
        "%",
        peg$literalExpectation("%", false),
        function () { return " "; },
        function () { return ':'; },
        /^[!-~]/,
        peg$classExpectation([["!", "~"]], false, false),
        /^[\x80-\uFFFF]/,
        peg$classExpectation([["\x80", "\uFFFF"]], false, false),
        /^[\x80-\xBF]/,
        peg$classExpectation([["\x80", "\xBF"]], false, false),
        /^[a-f]/,
        peg$classExpectation([["a", "f"]], false, false),
        "`",
        peg$literalExpectation("`", false),
        "<",
        peg$literalExpectation("<", false),
        ">",
        peg$literalExpectation(">", false),
        "\\",
        peg$literalExpectation("\\", false),
        "[",
        peg$literalExpectation("[", false),
        "]",
        peg$literalExpectation("]", false),
        "{",
        peg$literalExpectation("{", false),
        "}",
        peg$literalExpectation("}", false),
        function () { return "*"; },
        function () { return "/"; },
        function () { return "="; },
        function () { return "("; },
        function () { return ")"; },
        function () { return ">"; },
        function () { return "<"; },
        function () { return ","; },
        function () { return ";"; },
        function () { return ":"; },
        function () { return "\""; },
        /^[!-']/,
        peg$classExpectation([["!", "'"]], false, false),
        /^[*-[]/,
        peg$classExpectation([["*", "["]], false, false),
        /^[\]-~]/,
        peg$classExpectation([["]", "~"]], false, false),
        function (contents) {
            return contents;
        },
        /^[#-[]/,
        peg$classExpectation([["#", "["]], false, false),
        /^[\0-\t]/,
        peg$classExpectation([["\0", "\t"]], false, false),
        /^[\x0B-\f]/,
        peg$classExpectation([["\x0B", "\f"]], false, false),
        /^[\x0E-\x7F]/,
        peg$classExpectation([["\x0E", "\x7F"]], false, false),
        function () {
            options = options || { data: {} };
            options.data.uri = new _uri__WEBPACK_IMPORTED_MODULE_0__.URI(options.data.scheme, options.data.user, options.data.host, options.data.port);
            delete options.data.scheme;
            delete options.data.user;
            delete options.data.host;
            delete options.data.host_type;
            delete options.data.port;
        },
        function () {
            options = options || { data: {} };
            options.data.uri = new _uri__WEBPACK_IMPORTED_MODULE_0__.URI(options.data.scheme, options.data.user, options.data.host, options.data.port, options.data.uri_params, options.data.uri_headers);
            delete options.data.scheme;
            delete options.data.user;
            delete options.data.host;
            delete options.data.host_type;
            delete options.data.port;
            delete options.data.uri_params;
            if (options.startRule === 'SIP_URI') {
                options.data = options.data.uri;
            }
        },
        "sips",
        peg$literalExpectation("sips", true),
        "sip",
        peg$literalExpectation("sip", true),
        function (uri_scheme) {
            options = options || { data: {} };
            options.data.scheme = uri_scheme;
        },
        function () {
            options = options || { data: {} };
            options.data.user = decodeURIComponent(text().slice(0, -1));
        },
        function () {
            options = options || { data: {} };
            options.data.password = text();
        },
        function () {
            options = options || { data: {} };
            options.data.host = text();
            return options.data.host;
        },
        function () {
            options = options || { data: {} };
            options.data.host_type = 'domain';
            return text();
        },
        /^[a-zA-Z0-9_\-]/,
        peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"], "_", "-"], false, false),
        /^[a-zA-Z0-9\-]/,
        peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"], "-"], false, false),
        function () {
            options = options || { data: {} };
            options.data.host_type = 'IPv6';
            return text();
        },
        "::",
        peg$literalExpectation("::", false),
        function () {
            options = options || { data: {} };
            options.data.host_type = 'IPv6';
            return text();
        },
        function () {
            options = options || { data: {} };
            options.data.host_type = 'IPv4';
            return text();
        },
        "25",
        peg$literalExpectation("25", false),
        /^[0-5]/,
        peg$classExpectation([["0", "5"]], false, false),
        "2",
        peg$literalExpectation("2", false),
        /^[0-4]/,
        peg$classExpectation([["0", "4"]], false, false),
        "1",
        peg$literalExpectation("1", false),
        /^[1-9]/,
        peg$classExpectation([["1", "9"]], false, false),
        function (port) {
            options = options || { data: {} };
            port = parseInt(port.join(''));
            options.data.port = port;
            return port;
        },
        "transport=",
        peg$literalExpectation("transport=", true),
        "udp",
        peg$literalExpectation("udp", true),
        "tcp",
        peg$literalExpectation("tcp", true),
        "sctp",
        peg$literalExpectation("sctp", true),
        "tls",
        peg$literalExpectation("tls", true),
        function (transport) {
            options = options || { data: {} };
            if (!options.data.uri_params)
                options.data.uri_params = {};
            options.data.uri_params['transport'] = transport.toLowerCase();
        },
        "user=",
        peg$literalExpectation("user=", true),
        "phone",
        peg$literalExpectation("phone", true),
        "ip",
        peg$literalExpectation("ip", true),
        function (user) {
            options = options || { data: {} };
            if (!options.data.uri_params)
                options.data.uri_params = {};
            options.data.uri_params['user'] = user.toLowerCase();
        },
        "method=",
        peg$literalExpectation("method=", true),
        function (method) {
            options = options || { data: {} };
            if (!options.data.uri_params)
                options.data.uri_params = {};
            options.data.uri_params['method'] = method;
        },
        "ttl=",
        peg$literalExpectation("ttl=", true),
        function (ttl) {
            options = options || { data: {} };
            if (!options.data.params)
                options.data.params = {};
            options.data.params['ttl'] = ttl;
        },
        "maddr=",
        peg$literalExpectation("maddr=", true),
        function (maddr) {
            options = options || { data: {} };
            if (!options.data.uri_params)
                options.data.uri_params = {};
            options.data.uri_params['maddr'] = maddr;
        },
        "lr",
        peg$literalExpectation("lr", true),
        function () {
            options = options || { data: {} };
            if (!options.data.uri_params)
                options.data.uri_params = {};
            options.data.uri_params['lr'] = undefined;
        },
        function (param, value) {
            options = options || { data: {} };
            if (!options.data.uri_params)
                options.data.uri_params = {};
            if (value === null) {
                value = undefined;
            }
            else {
                value = value[1];
            }
            options.data.uri_params[param.toLowerCase()] = value;
        },
        function (hname, hvalue) {
            hname = hname.join('').toLowerCase();
            hvalue = hvalue.join('');
            options = options || { data: {} };
            if (!options.data.uri_headers)
                options.data.uri_headers = {};
            if (!options.data.uri_headers[hname]) {
                options.data.uri_headers[hname] = [hvalue];
            }
            else {
                options.data.uri_headers[hname].push(hvalue);
            }
        },
        function () {
            options = options || { data: {} };
            // lots of tests fail if this isn't guarded...
            if (options.startRule === 'Refer_To') {
                options.data.uri = new _uri__WEBPACK_IMPORTED_MODULE_0__.URI(options.data.scheme, options.data.user, options.data.host, options.data.port, options.data.uri_params, options.data.uri_headers);
                delete options.data.scheme;
                delete options.data.user;
                delete options.data.host;
                delete options.data.host_type;
                delete options.data.port;
                delete options.data.uri_params;
            }
        },
        "//",
        peg$literalExpectation("//", false),
        function () {
            options = options || { data: {} };
            options.data.scheme = text();
        },
        peg$literalExpectation("SIP", true),
        function () {
            options = options || { data: {} };
            options.data.sip_version = text();
        },
        "INVITE",
        peg$literalExpectation("INVITE", false),
        "ACK",
        peg$literalExpectation("ACK", false),
        "VXACH",
        peg$literalExpectation("VXACH", false),
        "OPTIONS",
        peg$literalExpectation("OPTIONS", false),
        "BYE",
        peg$literalExpectation("BYE", false),
        "CANCEL",
        peg$literalExpectation("CANCEL", false),
        "REGISTER",
        peg$literalExpectation("REGISTER", false),
        "SUBSCRIBE",
        peg$literalExpectation("SUBSCRIBE", false),
        "NOTIFY",
        peg$literalExpectation("NOTIFY", false),
        "REFER",
        peg$literalExpectation("REFER", false),
        "PUBLISH",
        peg$literalExpectation("PUBLISH", false),
        function () {
            options = options || { data: {} };
            options.data.method = text();
            return options.data.method;
        },
        function (status_code) {
            options = options || { data: {} };
            options.data.status_code = parseInt(status_code.join(''));
        },
        function () {
            options = options || { data: {} };
            options.data.reason_phrase = text();
        },
        function () {
            options = options || { data: {} };
            options.data = text();
        },
        function () {
            var idx, length;
            options = options || { data: {} };
            length = options.data.multi_header.length;
            for (idx = 0; idx < length; idx++) {
                if (options.data.multi_header[idx].parsed === null) {
                    options.data = null;
                    break;
                }
            }
            if (options.data !== null) {
                options.data = options.data.multi_header;
            }
            else {
                options.data = -1;
            }
        },
        function () {
            var header;
            options = options || { data: {} };
            if (!options.data.multi_header)
                options.data.multi_header = [];
            try {
                header = new _name_addr_header__WEBPACK_IMPORTED_MODULE_1__.NameAddrHeader(options.data.uri, options.data.displayName, options.data.params);
                delete options.data.uri;
                delete options.data.displayName;
                delete options.data.params;
            }
            catch (e) {
                header = null;
            }
            options.data.multi_header.push({ 'position': peg$currPos,
                'offset': location().start.offset,
                'parsed': header
            });
        },
        function (displayName) {
            displayName = text().trim();
            if (displayName[0] === '\"') {
                displayName = displayName.substring(1, displayName.length - 1);
            }
            options = options || { data: {} };
            options.data.displayName = displayName;
        },
        "q",
        peg$literalExpectation("q", true),
        function (q) {
            options = options || { data: {} };
            if (!options.data.params)
                options.data.params = {};
            options.data.params['q'] = q;
        },
        "expires",
        peg$literalExpectation("expires", true),
        function (expires) {
            options = options || { data: {} };
            if (!options.data.params)
                options.data.params = {};
            options.data.params['expires'] = expires;
        },
        function (delta_seconds) {
            return parseInt(delta_seconds.join(''));
        },
        "0",
        peg$literalExpectation("0", false),
        function () {
            return parseFloat(text());
        },
        function (param, value) {
            options = options || { data: {} };
            if (!options.data.params)
                options.data.params = {};
            if (value === null) {
                value = undefined;
            }
            else {
                value = value[1];
            }
            options.data.params[param.toLowerCase()] = value;
        },
        "render",
        peg$literalExpectation("render", true),
        "session",
        peg$literalExpectation("session", true),
        "icon",
        peg$literalExpectation("icon", true),
        "alert",
        peg$literalExpectation("alert", true),
        function () {
            options = options || { data: {} };
            if (options.startRule === 'Content_Disposition') {
                options.data.type = text().toLowerCase();
            }
        },
        "handling",
        peg$literalExpectation("handling", true),
        "optional",
        peg$literalExpectation("optional", true),
        "required",
        peg$literalExpectation("required", true),
        function (length) {
            options = options || { data: {} };
            options.data = parseInt(length.join(''));
        },
        function () {
            options = options || { data: {} };
            options.data = text();
        },
        "text",
        peg$literalExpectation("text", true),
        "image",
        peg$literalExpectation("image", true),
        "audio",
        peg$literalExpectation("audio", true),
        "video",
        peg$literalExpectation("video", true),
        "application",
        peg$literalExpectation("application", true),
        "message",
        peg$literalExpectation("message", true),
        "multipart",
        peg$literalExpectation("multipart", true),
        "x-",
        peg$literalExpectation("x-", true),
        function (cseq_value) {
            options = options || { data: {} };
            options.data.value = parseInt(cseq_value.join(''));
        },
        function (expires) { options = options || { data: {} }; options.data = expires; },
        function (event_type) {
            options = options || { data: {} };
            options.data.event = event_type.toLowerCase();
        },
        function () {
            options = options || { data: {} };
            var tag = options.data.tag;
            options.data = new _name_addr_header__WEBPACK_IMPORTED_MODULE_1__.NameAddrHeader(options.data.uri, options.data.displayName, options.data.params);
            if (tag) {
                options.data.setParam('tag', tag);
            }
        },
        "tag",
        peg$literalExpectation("tag", true),
        function (tag) { options = options || { data: {} }; options.data.tag = tag; },
        function (forwards) {
            options = options || { data: {} };
            options.data = parseInt(forwards.join(''));
        },
        function (min_expires) { options = options || { data: {} }; options.data = min_expires; },
        function () {
            options = options || { data: {} };
            options.data = new _name_addr_header__WEBPACK_IMPORTED_MODULE_1__.NameAddrHeader(options.data.uri, options.data.displayName, options.data.params);
        },
        "digest",
        peg$literalExpectation("Digest", true),
        "realm",
        peg$literalExpectation("realm", true),
        function (realm) { options = options || { data: {} }; options.data.realm = realm; },
        "domain",
        peg$literalExpectation("domain", true),
        "nonce",
        peg$literalExpectation("nonce", true),
        function (nonce) { options = options || { data: {} }; options.data.nonce = nonce; },
        "opaque",
        peg$literalExpectation("opaque", true),
        function (opaque) { options = options || { data: {} }; options.data.opaque = opaque; },
        "stale",
        peg$literalExpectation("stale", true),
        "true",
        peg$literalExpectation("true", true),
        function () { options = options || { data: {} }; options.data.stale = true; },
        "false",
        peg$literalExpectation("false", true),
        function () { options = options || { data: {} }; options.data.stale = false; },
        "algorithm",
        peg$literalExpectation("algorithm", true),
        "md5",
        peg$literalExpectation("MD5", true),
        "md5-sess",
        peg$literalExpectation("MD5-sess", true),
        function (algorithm) {
            options = options || { data: {} };
            options.data.algorithm = algorithm.toUpperCase();
        },
        "qop",
        peg$literalExpectation("qop", true),
        "auth-int",
        peg$literalExpectation("auth-int", true),
        "auth",
        peg$literalExpectation("auth", true),
        function (qop_value) {
            options = options || { data: {} };
            options.data.qop || (options.data.qop = []);
            options.data.qop.push(qop_value.toLowerCase());
        },
        function (rack_value) {
            options = options || { data: {} };
            options.data.value = parseInt(rack_value.join(''));
        },
        function () {
            var idx, length;
            options = options || { data: {} };
            length = options.data.multi_header.length;
            for (idx = 0; idx < length; idx++) {
                if (options.data.multi_header[idx].parsed === null) {
                    options.data = null;
                    break;
                }
            }
            if (options.data !== null) {
                options.data = options.data.multi_header;
            }
            else {
                options.data = -1;
            }
        },
        function () {
            var header;
            options = options || { data: {} };
            if (!options.data.multi_header)
                options.data.multi_header = [];
            try {
                header = new _name_addr_header__WEBPACK_IMPORTED_MODULE_1__.NameAddrHeader(options.data.uri, options.data.displayName, options.data.params);
                delete options.data.uri;
                delete options.data.displayName;
                delete options.data.params;
            }
            catch (e) {
                header = null;
            }
            options.data.multi_header.push({ 'position': peg$currPos,
                'offset': location().start.offset,
                'parsed': header
            });
        },
        function () {
            options = options || { data: {} };
            options.data = new _name_addr_header__WEBPACK_IMPORTED_MODULE_1__.NameAddrHeader(options.data.uri, options.data.displayName, options.data.params);
        },
        function () {
            options = options || { data: {} };
            if (!(options.data.replaces_from_tag && options.data.replaces_to_tag)) {
                options.data = -1;
            }
        },
        function () {
            options = options || { data: {} };
            options.data = {
                call_id: options.data
            };
        },
        "from-tag",
        peg$literalExpectation("from-tag", true),
        function (from_tag) {
            options = options || { data: {} };
            options.data.replaces_from_tag = from_tag;
        },
        "to-tag",
        peg$literalExpectation("to-tag", true),
        function (to_tag) {
            options = options || { data: {} };
            options.data.replaces_to_tag = to_tag;
        },
        "early-only",
        peg$literalExpectation("early-only", true),
        function () {
            options = options || { data: {} };
            options.data.early_only = true;
        },
        function (head, r) { return r; },
        function (head, tail) { return list(head, tail); },
        function (value) {
            options = options || { data: {} };
            if (options.startRule === 'Require') {
                options.data = value || [];
            }
        },
        function (rseq_value) {
            options = options || { data: {} };
            options.data.value = parseInt(rseq_value.join(''));
        },
        "active",
        peg$literalExpectation("active", true),
        "pending",
        peg$literalExpectation("pending", true),
        "terminated",
        peg$literalExpectation("terminated", true),
        function () {
            options = options || { data: {} };
            options.data.state = text();
        },
        "reason",
        peg$literalExpectation("reason", true),
        function (reason) {
            options = options || { data: {} };
            if (typeof reason !== 'undefined')
                options.data.reason = reason;
        },
        function (expires) {
            options = options || { data: {} };
            if (typeof expires !== 'undefined')
                options.data.expires = expires;
        },
        "retry_after",
        peg$literalExpectation("retry_after", true),
        function (retry_after) {
            options = options || { data: {} };
            if (typeof retry_after !== 'undefined')
                options.data.retry_after = retry_after;
        },
        "deactivated",
        peg$literalExpectation("deactivated", true),
        "probation",
        peg$literalExpectation("probation", true),
        "rejected",
        peg$literalExpectation("rejected", true),
        "timeout",
        peg$literalExpectation("timeout", true),
        "giveup",
        peg$literalExpectation("giveup", true),
        "noresource",
        peg$literalExpectation("noresource", true),
        "invariant",
        peg$literalExpectation("invariant", true),
        function (value) {
            options = options || { data: {} };
            if (options.startRule === 'Supported') {
                options.data = value || [];
            }
        },
        function () {
            options = options || { data: {} };
            var tag = options.data.tag;
            options.data = new _name_addr_header__WEBPACK_IMPORTED_MODULE_1__.NameAddrHeader(options.data.uri, options.data.displayName, options.data.params);
            if (tag) {
                options.data.setParam('tag', tag);
            }
        },
        "ttl",
        peg$literalExpectation("ttl", true),
        function (via_ttl_value) {
            options = options || { data: {} };
            options.data.ttl = via_ttl_value;
        },
        "maddr",
        peg$literalExpectation("maddr", true),
        function (via_maddr) {
            options = options || { data: {} };
            options.data.maddr = via_maddr;
        },
        "received",
        peg$literalExpectation("received", true),
        function (via_received) {
            options = options || { data: {} };
            options.data.received = via_received;
        },
        "branch",
        peg$literalExpectation("branch", true),
        function (via_branch) {
            options = options || { data: {} };
            options.data.branch = via_branch;
        },
        "rport",
        peg$literalExpectation("rport", true),
        function (response_port) {
            options = options || { data: {} };
            if (typeof response_port !== 'undefined')
                options.data.rport = response_port.join('');
        },
        function (via_protocol) {
            options = options || { data: {} };
            options.data.protocol = via_protocol;
        },
        peg$literalExpectation("UDP", true),
        peg$literalExpectation("TCP", true),
        peg$literalExpectation("TLS", true),
        peg$literalExpectation("SCTP", true),
        function (via_transport) {
            options = options || { data: {} };
            options.data.transport = via_transport;
        },
        function () {
            options = options || { data: {} };
            options.data.host = text();
        },
        function (via_sent_by_port) {
            options = options || { data: {} };
            options.data.port = parseInt(via_sent_by_port.join(''));
        },
        function (ttl) {
            return parseInt(ttl.join(''));
        },
        function (deltaSeconds) {
            options = options || { data: {} };
            if (options.startRule === 'Session_Expires') {
                options.data.deltaSeconds = deltaSeconds;
            }
        },
        "refresher",
        peg$literalExpectation("refresher", false),
        "uas",
        peg$literalExpectation("uas", false),
        "uac",
        peg$literalExpectation("uac", false),
        function (endpoint) {
            options = options || { data: {} };
            if (options.startRule === 'Session_Expires') {
                options.data.refresher = endpoint;
            }
        },
        function (deltaSeconds) {
            options = options || { data: {} };
            if (options.startRule === 'Min_SE') {
                options.data = deltaSeconds;
            }
        },
        "stuns",
        peg$literalExpectation("stuns", true),
        "stun",
        peg$literalExpectation("stun", true),
        function (scheme) {
            options = options || { data: {} };
            options.data.scheme = scheme;
        },
        function (host) {
            options = options || { data: {} };
            options.data.host = host;
        },
        "?transport=",
        peg$literalExpectation("?transport=", false),
        "turns",
        peg$literalExpectation("turns", true),
        "turn",
        peg$literalExpectation("turn", true),
        function (transport) {
            options = options || { data: {} };
            options.data.transport = transport;
        },
        function () {
            options = options || { data: {} };
            options.data = text();
        },
        "Referred-By",
        peg$literalExpectation("Referred-By", false),
        "b",
        peg$literalExpectation("b", false),
        "cid",
        peg$literalExpectation("cid", false)
    ];
    const peg$bytecode = [
        peg$decode("2 \"\"6 7!"),
        peg$decode("4\"\"\"5!7#"),
        peg$decode("4$\"\"5!7%"),
        peg$decode("4&\"\"5!7'"),
        peg$decode(";'.# &;("),
        peg$decode("4(\"\"5!7)"),
        peg$decode("4*\"\"5!7+"),
        peg$decode("2,\"\"6,7-"),
        peg$decode("2.\"\"6.7/"),
        peg$decode("40\"\"5!71"),
        peg$decode("22\"\"6273.\x89 &24\"\"6475.} &26\"\"6677.q &28\"\"6879.e &2:\"\"6:7;.Y &2<\"\"6<7=.M &2>\"\"6>7?.A &2@\"\"6@7A.5 &2B\"\"6B7C.) &2D\"\"6D7E"),
        peg$decode(";).# &;,"),
        peg$decode("2F\"\"6F7G.} &2H\"\"6H7I.q &2J\"\"6J7K.e &2L\"\"6L7M.Y &2N\"\"6N7O.M &2P\"\"6P7Q.A &2R\"\"6R7S.5 &2T\"\"6T7U.) &2V\"\"6V7W"),
        peg$decode("%%2X\"\"6X7Y/5#;#/,$;#/#$+#)(#'#(\"'#&'#/\"!&,)"),
        peg$decode("%%$;$0#*;$&/,#; /#$+\")(\"'#&'#.\" &\"/=#$;$/&#0#*;$&&&#/'$8\":Z\" )(\"'#&'#"),
        peg$decode(";..\" &\""),
        peg$decode("%$;'.# &;(0)*;'.# &;(&/?#28\"\"6879/0$;//'$8#:[# )(#'#(\"'#&'#"),
        peg$decode("%%$;2/&#0#*;2&&&#/g#$%$;.0#*;.&/,#;2/#$+\")(\"'#&'#0=*%$;.0#*;.&/,#;2/#$+\")(\"'#&'#&/#$+\")(\"'#&'#/\"!&,)"),
        peg$decode("4\\\"\"5!7].# &;3"),
        peg$decode("4^\"\"5!7_"),
        peg$decode("4`\"\"5!7a"),
        peg$decode(";!.) &4b\"\"5!7c"),
        peg$decode("%$;).\x95 &2F\"\"6F7G.\x89 &2J\"\"6J7K.} &2L\"\"6L7M.q &2X\"\"6X7Y.e &2P\"\"6P7Q.Y &2H\"\"6H7I.M &2@\"\"6@7A.A &2d\"\"6d7e.5 &2R\"\"6R7S.) &2N\"\"6N7O/\x9E#0\x9B*;).\x95 &2F\"\"6F7G.\x89 &2J\"\"6J7K.} &2L\"\"6L7M.q &2X\"\"6X7Y.e &2P\"\"6P7Q.Y &2H\"\"6H7I.M &2@\"\"6@7A.A &2d\"\"6d7e.5 &2R\"\"6R7S.) &2N\"\"6N7O&&&#/\"!&,)"),
        peg$decode("%$;).\x89 &2F\"\"6F7G.} &2L\"\"6L7M.q &2X\"\"6X7Y.e &2P\"\"6P7Q.Y &2H\"\"6H7I.M &2@\"\"6@7A.A &2d\"\"6d7e.5 &2R\"\"6R7S.) &2N\"\"6N7O/\x92#0\x8F*;).\x89 &2F\"\"6F7G.} &2L\"\"6L7M.q &2X\"\"6X7Y.e &2P\"\"6P7Q.Y &2H\"\"6H7I.M &2@\"\"6@7A.A &2d\"\"6d7e.5 &2R\"\"6R7S.) &2N\"\"6N7O&&&#/\"!&,)"),
        peg$decode("2T\"\"6T7U.\xE3 &2V\"\"6V7W.\xD7 &2f\"\"6f7g.\xCB &2h\"\"6h7i.\xBF &2:\"\"6:7;.\xB3 &2D\"\"6D7E.\xA7 &22\"\"6273.\x9B &28\"\"6879.\x8F &2j\"\"6j7k.\x83 &;&.} &24\"\"6475.q &2l\"\"6l7m.e &2n\"\"6n7o.Y &26\"\"6677.M &2>\"\"6>7?.A &2p\"\"6p7q.5 &2r\"\"6r7s.) &;'.# &;("),
        peg$decode("%$;).\u012B &2F\"\"6F7G.\u011F &2J\"\"6J7K.\u0113 &2L\"\"6L7M.\u0107 &2X\"\"6X7Y.\xFB &2P\"\"6P7Q.\xEF &2H\"\"6H7I.\xE3 &2@\"\"6@7A.\xD7 &2d\"\"6d7e.\xCB &2R\"\"6R7S.\xBF &2N\"\"6N7O.\xB3 &2T\"\"6T7U.\xA7 &2V\"\"6V7W.\x9B &2f\"\"6f7g.\x8F &2h\"\"6h7i.\x83 &28\"\"6879.w &2j\"\"6j7k.k &;&.e &24\"\"6475.Y &2l\"\"6l7m.M &2n\"\"6n7o.A &26\"\"6677.5 &2p\"\"6p7q.) &2r\"\"6r7s/\u0134#0\u0131*;).\u012B &2F\"\"6F7G.\u011F &2J\"\"6J7K.\u0113 &2L\"\"6L7M.\u0107 &2X\"\"6X7Y.\xFB &2P\"\"6P7Q.\xEF &2H\"\"6H7I.\xE3 &2@\"\"6@7A.\xD7 &2d\"\"6d7e.\xCB &2R\"\"6R7S.\xBF &2N\"\"6N7O.\xB3 &2T\"\"6T7U.\xA7 &2V\"\"6V7W.\x9B &2f\"\"6f7g.\x8F &2h\"\"6h7i.\x83 &28\"\"6879.w &2j\"\"6j7k.k &;&.e &24\"\"6475.Y &2l\"\"6l7m.M &2n\"\"6n7o.A &26\"\"6677.5 &2p\"\"6p7q.) &2r\"\"6r7s&&&#/\"!&,)"),
        peg$decode("%;//?#2P\"\"6P7Q/0$;//'$8#:t# )(#'#(\"'#&'#"),
        peg$decode("%;//?#24\"\"6475/0$;//'$8#:u# )(#'#(\"'#&'#"),
        peg$decode("%;//?#2>\"\"6>7?/0$;//'$8#:v# )(#'#(\"'#&'#"),
        peg$decode("%;//?#2T\"\"6T7U/0$;//'$8#:w# )(#'#(\"'#&'#"),
        peg$decode("%;//?#2V\"\"6V7W/0$;//'$8#:x# )(#'#(\"'#&'#"),
        peg$decode("%2h\"\"6h7i/0#;//'$8\":y\" )(\"'#&'#"),
        peg$decode("%;//6#2f\"\"6f7g/'$8\":z\" )(\"'#&'#"),
        peg$decode("%;//?#2D\"\"6D7E/0$;//'$8#:{# )(#'#(\"'#&'#"),
        peg$decode("%;//?#22\"\"6273/0$;//'$8#:|# )(#'#(\"'#&'#"),
        peg$decode("%;//?#28\"\"6879/0$;//'$8#:}# )(#'#(\"'#&'#"),
        peg$decode("%;//0#;&/'$8\":~\" )(\"'#&'#"),
        peg$decode("%;&/0#;//'$8\":~\" )(\"'#&'#"),
        peg$decode("%;=/T#$;G.) &;K.# &;F0/*;G.) &;K.# &;F&/,$;>/#$+#)(#'#(\"'#&'#"),
        peg$decode("4\x7F\"\"5!7\x80.A &4\x81\"\"5!7\x82.5 &4\x83\"\"5!7\x84.) &;3.# &;."),
        peg$decode("%%;//Q#;&/H$$;J.# &;K0)*;J.# &;K&/,$;&/#$+$)($'#(#'#(\"'#&'#/\"!&,)"),
        peg$decode("%;//]#;&/T$%$;J.# &;K0)*;J.# &;K&/\"!&,)/1$;&/($8$:\x85$!!)($'#(#'#(\"'#&'#"),
        peg$decode(";..G &2L\"\"6L7M.; &4\x86\"\"5!7\x87./ &4\x83\"\"5!7\x84.# &;3"),
        peg$decode("%2j\"\"6j7k/J#4\x88\"\"5!7\x89.5 &4\x8A\"\"5!7\x8B.) &4\x8C\"\"5!7\x8D/#$+\")(\"'#&'#"),
        peg$decode("%;N/M#28\"\"6879/>$;O.\" &\"/0$;S/'$8$:\x8E$ )($'#(#'#(\"'#&'#"),
        peg$decode("%;N/d#28\"\"6879/U$;O.\" &\"/G$;S/>$;_/5$;l.\" &\"/'$8&:\x8F& )(&'#(%'#($'#(#'#(\"'#&'#"),
        peg$decode("%3\x90\"\"5$7\x91.) &3\x92\"\"5#7\x93/' 8!:\x94!! )"),
        peg$decode("%;P/]#%28\"\"6879/,#;R/#$+\")(\"'#&'#.\" &\"/6$2:\"\"6:7;/'$8#:\x95# )(#'#(\"'#&'#"),
        peg$decode("$;+.) &;-.# &;Q/2#0/*;+.) &;-.# &;Q&&&#"),
        peg$decode("2<\"\"6<7=.q &2>\"\"6>7?.e &2@\"\"6@7A.Y &2B\"\"6B7C.M &2D\"\"6D7E.A &22\"\"6273.5 &26\"\"6677.) &24\"\"6475"),
        peg$decode("%$;+._ &;-.Y &2<\"\"6<7=.M &2>\"\"6>7?.A &2@\"\"6@7A.5 &2B\"\"6B7C.) &2D\"\"6D7E0e*;+._ &;-.Y &2<\"\"6<7=.M &2>\"\"6>7?.A &2@\"\"6@7A.5 &2B\"\"6B7C.) &2D\"\"6D7E&/& 8!:\x96! )"),
        peg$decode("%;T/J#%28\"\"6879/,#;^/#$+\")(\"'#&'#.\" &\"/#$+\")(\"'#&'#"),
        peg$decode("%;U.) &;\\.# &;X/& 8!:\x97! )"),
        peg$decode("%$%;V/2#2J\"\"6J7K/#$+\")(\"'#&'#0<*%;V/2#2J\"\"6J7K/#$+\")(\"'#&'#&/D#;W/;$2J\"\"6J7K.\" &\"/'$8#:\x98# )(#'#(\"'#&'#"),
        peg$decode("$4\x99\"\"5!7\x9A/,#0)*4\x99\"\"5!7\x9A&&&#"),
        peg$decode("%4$\"\"5!7%/?#$4\x9B\"\"5!7\x9C0)*4\x9B\"\"5!7\x9C&/#$+\")(\"'#&'#"),
        peg$decode("%2l\"\"6l7m/?#;Y/6$2n\"\"6n7o/'$8#:\x9D# )(#'#(\"'#&'#"),
        peg$decode("%%;Z/\xB3#28\"\"6879/\xA4$;Z/\x9B$28\"\"6879/\x8C$;Z/\x83$28\"\"6879/t$;Z/k$28\"\"6879/\\$;Z/S$28\"\"6879/D$;Z/;$28\"\"6879/,$;[/#$+-)(-'#(,'#(+'#(*'#()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#.\u0790 &%2\x9E\"\"6\x9E7\x9F/\xA4#;Z/\x9B$28\"\"6879/\x8C$;Z/\x83$28\"\"6879/t$;Z/k$28\"\"6879/\\$;Z/S$28\"\"6879/D$;Z/;$28\"\"6879/,$;[/#$+,)(,'#(+'#(*'#()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#.\u06F9 &%2\x9E\"\"6\x9E7\x9F/\x8C#;Z/\x83$28\"\"6879/t$;Z/k$28\"\"6879/\\$;Z/S$28\"\"6879/D$;Z/;$28\"\"6879/,$;[/#$+*)(*'#()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#.\u067A &%2\x9E\"\"6\x9E7\x9F/t#;Z/k$28\"\"6879/\\$;Z/S$28\"\"6879/D$;Z/;$28\"\"6879/,$;[/#$+()(('#(''#(&'#(%'#($'#(#'#(\"'#&'#.\u0613 &%2\x9E\"\"6\x9E7\x9F/\\#;Z/S$28\"\"6879/D$;Z/;$28\"\"6879/,$;[/#$+&)(&'#(%'#($'#(#'#(\"'#&'#.\u05C4 &%2\x9E\"\"6\x9E7\x9F/D#;Z/;$28\"\"6879/,$;[/#$+$)($'#(#'#(\"'#&'#.\u058D &%2\x9E\"\"6\x9E7\x9F/,#;[/#$+\")(\"'#&'#.\u056E &%2\x9E\"\"6\x9E7\x9F/,#;Z/#$+\")(\"'#&'#.\u054F &%;Z/\x9B#2\x9E\"\"6\x9E7\x9F/\x8C$;Z/\x83$28\"\"6879/t$;Z/k$28\"\"6879/\\$;Z/S$28\"\"6879/D$;Z/;$28\"\"6879/,$;[/#$++)(+'#(*'#()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#.\u04C7 &%;Z/\xAA#%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\x83$2\x9E\"\"6\x9E7\x9F/t$;Z/k$28\"\"6879/\\$;Z/S$28\"\"6879/D$;Z/;$28\"\"6879/,$;[/#$+*)(*'#()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#.\u0430 &%;Z/\xB9#%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\x92$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/k$2\x9E\"\"6\x9E7\x9F/\\$;Z/S$28\"\"6879/D$;Z/;$28\"\"6879/,$;[/#$+))()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#.\u038A &%;Z/\xC8#%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\xA1$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/z$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/S$2\x9E\"\"6\x9E7\x9F/D$;Z/;$28\"\"6879/,$;[/#$+()(('#(''#(&'#(%'#($'#(#'#(\"'#&'#.\u02D5 &%;Z/\xD7#%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\xB0$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\x89$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/b$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/;$2\x9E\"\"6\x9E7\x9F/,$;[/#$+')(''#(&'#(%'#($'#(#'#(\"'#&'#.\u0211 &%;Z/\xFE#%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\xD7$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\xB0$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\x89$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/b$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/;$2\x9E\"\"6\x9E7\x9F/,$;Z/#$+()(('#(''#(&'#(%'#($'#(#'#(\"'#&'#.\u0126 &%;Z/\u011C#%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\xF5$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\xCE$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\xA7$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\x80$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/Y$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/2$2\x9E\"\"6\x9E7\x9F/#$+()(('#(''#(&'#(%'#($'#(#'#(\"'#&'#/& 8!:\xA0! )"),
        peg$decode("%;#/M#;#.\" &\"/?$;#.\" &\"/1$;#.\" &\"/#$+$)($'#(#'#(\"'#&'#"),
        peg$decode("%;Z/;#28\"\"6879/,$;Z/#$+#)(#'#(\"'#&'#.# &;\\"),
        peg$decode("%;]/o#2J\"\"6J7K/`$;]/W$2J\"\"6J7K/H$;]/?$2J\"\"6J7K/0$;]/'$8':\xA1' )(''#(&'#(%'#($'#(#'#(\"'#&'#"),
        peg$decode("%2\xA2\"\"6\xA27\xA3/2#4\xA4\"\"5!7\xA5/#$+\")(\"'#&'#.\x98 &%2\xA6\"\"6\xA67\xA7/;#4\xA8\"\"5!7\xA9/,$;!/#$+#)(#'#(\"'#&'#.j &%2\xAA\"\"6\xAA7\xAB/5#;!/,$;!/#$+#)(#'#(\"'#&'#.B &%4\xAC\"\"5!7\xAD/,#;!/#$+\")(\"'#&'#.# &;!"),
        peg$decode("%%;!.\" &\"/[#;!.\" &\"/M$;!.\" &\"/?$;!.\" &\"/1$;!.\" &\"/#$+%)(%'#($'#(#'#(\"'#&'#/' 8!:\xAE!! )"),
        peg$decode("$%22\"\"6273/,#;`/#$+\")(\"'#&'#0<*%22\"\"6273/,#;`/#$+\")(\"'#&'#&"),
        peg$decode(";a.A &;b.; &;c.5 &;d./ &;e.) &;f.# &;g"),
        peg$decode("%3\xAF\"\"5*7\xB0/a#3\xB1\"\"5#7\xB2.G &3\xB3\"\"5#7\xB4.; &3\xB5\"\"5$7\xB6./ &3\xB7\"\"5#7\xB8.# &;6/($8\":\xB9\"! )(\"'#&'#"),
        peg$decode("%3\xBA\"\"5%7\xBB/I#3\xBC\"\"5%7\xBD./ &3\xBE\"\"5\"7\xBF.# &;6/($8\":\xC0\"! )(\"'#&'#"),
        peg$decode("%3\xC1\"\"5'7\xC2/1#;\x90/($8\":\xC3\"! )(\"'#&'#"),
        peg$decode("%3\xC4\"\"5$7\xC5/1#;\xF0/($8\":\xC6\"! )(\"'#&'#"),
        peg$decode("%3\xC7\"\"5&7\xC8/1#;T/($8\":\xC9\"! )(\"'#&'#"),
        peg$decode("%3\xCA\"\"5\"7\xCB/N#%2>\"\"6>7?/,#;6/#$+\")(\"'#&'#.\" &\"/'$8\":\xCC\" )(\"'#&'#"),
        peg$decode("%;h/P#%2>\"\"6>7?/,#;i/#$+\")(\"'#&'#.\" &\"/)$8\":\xCD\"\"! )(\"'#&'#"),
        peg$decode("%$;j/&#0#*;j&&&#/\"!&,)"),
        peg$decode("%$;j/&#0#*;j&&&#/\"!&,)"),
        peg$decode(";k.) &;+.# &;-"),
        peg$decode("2l\"\"6l7m.e &2n\"\"6n7o.Y &24\"\"6475.M &28\"\"6879.A &2<\"\"6<7=.5 &2@\"\"6@7A.) &2B\"\"6B7C"),
        peg$decode("%26\"\"6677/n#;m/e$$%2<\"\"6<7=/,#;m/#$+\")(\"'#&'#0<*%2<\"\"6<7=/,#;m/#$+\")(\"'#&'#&/#$+#)(#'#(\"'#&'#"),
        peg$decode("%;n/A#2>\"\"6>7?/2$;o/)$8#:\xCE#\"\" )(#'#(\"'#&'#"),
        peg$decode("$;p.) &;+.# &;-/2#0/*;p.) &;+.# &;-&&&#"),
        peg$decode("$;p.) &;+.# &;-0/*;p.) &;+.# &;-&"),
        peg$decode("2l\"\"6l7m.e &2n\"\"6n7o.Y &24\"\"6475.M &26\"\"6677.A &28\"\"6879.5 &2@\"\"6@7A.) &2B\"\"6B7C"),
        peg$decode(";\x91.# &;r"),
        peg$decode("%;\x90/G#;'/>$;s/5$;'/,$;\x84/#$+%)(%'#($'#(#'#(\"'#&'#"),
        peg$decode(";M.# &;t"),
        peg$decode("%;\x7F/E#28\"\"6879/6$;u.# &;x/'$8#:\xCF# )(#'#(\"'#&'#"),
        peg$decode("%;v.# &;w/J#%26\"\"6677/,#;\x83/#$+\")(\"'#&'#.\" &\"/#$+\")(\"'#&'#"),
        peg$decode("%2\xD0\"\"6\xD07\xD1/:#;\x80/1$;w.\" &\"/#$+#)(#'#(\"'#&'#"),
        peg$decode("%24\"\"6475/,#;{/#$+\")(\"'#&'#"),
        peg$decode("%;z/3#$;y0#*;y&/#$+\")(\"'#&'#"),
        peg$decode(";*.) &;+.# &;-"),
        peg$decode(";+.\x8F &;-.\x89 &22\"\"6273.} &26\"\"6677.q &28\"\"6879.e &2:\"\"6:7;.Y &2<\"\"6<7=.M &2>\"\"6>7?.A &2@\"\"6@7A.5 &2B\"\"6B7C.) &2D\"\"6D7E"),
        peg$decode("%;|/e#$%24\"\"6475/,#;|/#$+\")(\"'#&'#0<*%24\"\"6475/,#;|/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
        peg$decode("%$;~0#*;~&/e#$%22\"\"6273/,#;}/#$+\")(\"'#&'#0<*%22\"\"6273/,#;}/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
        peg$decode("$;~0#*;~&"),
        peg$decode(";+.w &;-.q &28\"\"6879.e &2:\"\"6:7;.Y &2<\"\"6<7=.M &2>\"\"6>7?.A &2@\"\"6@7A.5 &2B\"\"6B7C.) &2D\"\"6D7E"),
        peg$decode("%%;\"/\x87#$;\".G &;!.A &2@\"\"6@7A.5 &2F\"\"6F7G.) &2J\"\"6J7K0M*;\".G &;!.A &2@\"\"6@7A.5 &2F\"\"6F7G.) &2J\"\"6J7K&/#$+\")(\"'#&'#/& 8!:\xD2! )"),
        peg$decode(";\x81.# &;\x82"),
        peg$decode("%%;O/2#2:\"\"6:7;/#$+\")(\"'#&'#.\" &\"/,#;S/#$+\")(\"'#&'#.\" &\""),
        peg$decode("$;+.\x83 &;-.} &2B\"\"6B7C.q &2D\"\"6D7E.e &22\"\"6273.Y &28\"\"6879.M &2:\"\"6:7;.A &2<\"\"6<7=.5 &2>\"\"6>7?.) &2@\"\"6@7A/\x8C#0\x89*;+.\x83 &;-.} &2B\"\"6B7C.q &2D\"\"6D7E.e &22\"\"6273.Y &28\"\"6879.M &2:\"\"6:7;.A &2<\"\"6<7=.5 &2>\"\"6>7?.) &2@\"\"6@7A&&&#"),
        peg$decode("$;y0#*;y&"),
        peg$decode("%3\x92\"\"5#7\xD3/q#24\"\"6475/b$$;!/&#0#*;!&&&#/L$2J\"\"6J7K/=$$;!/&#0#*;!&&&#/'$8%:\xD4% )(%'#($'#(#'#(\"'#&'#"),
        peg$decode("2\xD5\"\"6\xD57\xD6"),
        peg$decode("2\xD7\"\"6\xD77\xD8"),
        peg$decode("2\xD9\"\"6\xD97\xDA"),
        peg$decode("2\xDB\"\"6\xDB7\xDC"),
        peg$decode("2\xDD\"\"6\xDD7\xDE"),
        peg$decode("2\xDF\"\"6\xDF7\xE0"),
        peg$decode("2\xE1\"\"6\xE17\xE2"),
        peg$decode("2\xE3\"\"6\xE37\xE4"),
        peg$decode("2\xE5\"\"6\xE57\xE6"),
        peg$decode("2\xE7\"\"6\xE77\xE8"),
        peg$decode("2\xE9\"\"6\xE97\xEA"),
        peg$decode("%;\x85.Y &;\x86.S &;\x88.M &;\x89.G &;\x8A.A &;\x8B.; &;\x8C.5 &;\x8F./ &;\x8D.) &;\x8E.# &;6/& 8!:\xEB! )"),
        peg$decode("%;\x84/G#;'/>$;\x92/5$;'/,$;\x94/#$+%)(%'#($'#(#'#(\"'#&'#"),
        peg$decode("%;\x93/' 8!:\xEC!! )"),
        peg$decode("%;!/5#;!/,$;!/#$+#)(#'#(\"'#&'#"),
        peg$decode("%$;*.A &;+.; &;-.5 &;3./ &;4.) &;'.# &;(0G*;*.A &;+.; &;-.5 &;3./ &;4.) &;'.# &;(&/& 8!:\xED! )"),
        peg$decode("%;\xB6/Y#$%;A/,#;\xB6/#$+\")(\"'#&'#06*%;A/,#;\xB6/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
        peg$decode("%;9/N#%2:\"\"6:7;/,#;9/#$+\")(\"'#&'#.\" &\"/'$8\":\xEE\" )(\"'#&'#"),
        peg$decode("%;:.c &%;\x98/Y#$%;A/,#;\x98/#$+\")(\"'#&'#06*%;A/,#;\x98/#$+\")(\"'#&'#&/#$+\")(\"'#&'#/& 8!:\xEF! )"),
        peg$decode("%;L.# &;\x99/]#$%;B/,#;\x9B/#$+\")(\"'#&'#06*%;B/,#;\x9B/#$+\")(\"'#&'#&/'$8\":\xF0\" )(\"'#&'#"),
        peg$decode("%;\x9A.\" &\"/>#;@/5$;M/,$;?/#$+$)($'#(#'#(\"'#&'#"),
        peg$decode("%%;6/Y#$%;./,#;6/#$+\")(\"'#&'#06*%;./,#;6/#$+\")(\"'#&'#&/#$+\")(\"'#&'#.# &;H/' 8!:\xF1!! )"),
        peg$decode(";\x9C.) &;\x9D.# &;\xA0"),
        peg$decode("%3\xF2\"\"5!7\xF3/:#;</1$;\x9F/($8#:\xF4#! )(#'#(\"'#&'#"),
        peg$decode("%3\xF5\"\"5'7\xF6/:#;</1$;\x9E/($8#:\xF7#! )(#'#(\"'#&'#"),
        peg$decode("%$;!/&#0#*;!&&&#/' 8!:\xF8!! )"),
        peg$decode("%2\xF9\"\"6\xF97\xFA/o#%2J\"\"6J7K/M#;!.\" &\"/?$;!.\" &\"/1$;!.\" &\"/#$+$)($'#(#'#(\"'#&'#.\" &\"/'$8\":\xFB\" )(\"'#&'#"),
        peg$decode("%;6/J#%;</,#;\xA1/#$+\")(\"'#&'#.\" &\"/)$8\":\xFC\"\"! )(\"'#&'#"),
        peg$decode(";6.) &;T.# &;H"),
        peg$decode("%;\xA3/Y#$%;B/,#;\xA4/#$+\")(\"'#&'#06*%;B/,#;\xA4/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
        peg$decode("%3\xFD\"\"5&7\xFE.G &3\xFF\"\"5'7\u0100.; &3\u0101\"\"5$7\u0102./ &3\u0103\"\"5%7\u0104.# &;6/& 8!:\u0105! )"),
        peg$decode(";\xA5.# &;\xA0"),
        peg$decode("%3\u0106\"\"5(7\u0107/M#;</D$3\u0108\"\"5(7\u0109./ &3\u010A\"\"5(7\u010B.# &;6/#$+#)(#'#(\"'#&'#"),
        peg$decode("%;6/Y#$%;A/,#;6/#$+\")(\"'#&'#06*%;A/,#;6/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
        peg$decode("%$;!/&#0#*;!&&&#/' 8!:\u010C!! )"),
        peg$decode("%;\xA9/& 8!:\u010D! )"),
        peg$decode("%;\xAA/k#;;/b$;\xAF/Y$$%;B/,#;\xB0/#$+\")(\"'#&'#06*%;B/,#;\xB0/#$+\")(\"'#&'#&/#$+$)($'#(#'#(\"'#&'#"),
        peg$decode(";\xAB.# &;\xAC"),
        peg$decode("3\u010E\"\"5$7\u010F.S &3\u0110\"\"5%7\u0111.G &3\u0112\"\"5%7\u0113.; &3\u0114\"\"5%7\u0115./ &3\u0116\"\"5+7\u0117.# &;\xAD"),
        peg$decode("3\u0118\"\"5'7\u0119./ &3\u011A\"\"5)7\u011B.# &;\xAD"),
        peg$decode(";6.# &;\xAE"),
        peg$decode("%3\u011C\"\"5\"7\u011D/,#;6/#$+\")(\"'#&'#"),
        peg$decode(";\xAD.# &;6"),
        peg$decode("%;6/5#;</,$;\xB1/#$+#)(#'#(\"'#&'#"),
        peg$decode(";6.# &;H"),
        peg$decode("%;\xB3/5#;./,$;\x90/#$+#)(#'#(\"'#&'#"),
        peg$decode("%$;!/&#0#*;!&&&#/' 8!:\u011E!! )"),
        peg$decode("%;\x9E/' 8!:\u011F!! )"),
        peg$decode("%;\xB6/^#$%;B/,#;\xA0/#$+\")(\"'#&'#06*%;B/,#;\xA0/#$+\")(\"'#&'#&/($8\":\u0120\"!!)(\"'#&'#"),
        peg$decode("%%;7/e#$%2J\"\"6J7K/,#;7/#$+\")(\"'#&'#0<*%2J\"\"6J7K/,#;7/#$+\")(\"'#&'#&/#$+\")(\"'#&'#/\"!&,)"),
        peg$decode("%;L.# &;\x99/]#$%;B/,#;\xB8/#$+\")(\"'#&'#06*%;B/,#;\xB8/#$+\")(\"'#&'#&/'$8\":\u0121\" )(\"'#&'#"),
        peg$decode(";\xB9.# &;\xA0"),
        peg$decode("%3\u0122\"\"5#7\u0123/:#;</1$;6/($8#:\u0124#! )(#'#(\"'#&'#"),
        peg$decode("%$;!/&#0#*;!&&&#/' 8!:\u0125!! )"),
        peg$decode("%;\x9E/' 8!:\u0126!! )"),
        peg$decode("%$;\x9A0#*;\x9A&/x#;@/o$;M/f$;?/]$$%;B/,#;\xA0/#$+\")(\"'#&'#06*%;B/,#;\xA0/#$+\")(\"'#&'#&/'$8%:\u0127% )(%'#($'#(#'#(\"'#&'#"),
        peg$decode(";\xBE"),
        peg$decode("%3\u0128\"\"5&7\u0129/k#;./b$;\xC1/Y$$%;A/,#;\xC1/#$+\")(\"'#&'#06*%;A/,#;\xC1/#$+\")(\"'#&'#&/#$+$)($'#(#'#(\"'#&'#.# &;\xBF"),
        peg$decode("%;6/k#;./b$;\xC0/Y$$%;A/,#;\xC0/#$+\")(\"'#&'#06*%;A/,#;\xC0/#$+\")(\"'#&'#&/#$+$)($'#(#'#(\"'#&'#"),
        peg$decode("%;6/;#;</2$;6.# &;H/#$+#)(#'#(\"'#&'#"),
        peg$decode(";\xC2.G &;\xC4.A &;\xC6.; &;\xC8.5 &;\xC9./ &;\xCA.) &;\xCB.# &;\xC0"),
        peg$decode("%3\u012A\"\"5%7\u012B/5#;</,$;\xC3/#$+#)(#'#(\"'#&'#"),
        peg$decode("%;I/' 8!:\u012C!! )"),
        peg$decode("%3\u012D\"\"5&7\u012E/\x97#;</\x8E$;D/\x85$;\xC5/|$$%$;'/&#0#*;'&&&#/,#;\xC5/#$+\")(\"'#&'#0C*%$;'/&#0#*;'&&&#/,#;\xC5/#$+\")(\"'#&'#&/,$;E/#$+&)(&'#(%'#($'#(#'#(\"'#&'#"),
        peg$decode(";t.# &;w"),
        peg$decode("%3\u012F\"\"5%7\u0130/5#;</,$;\xC7/#$+#)(#'#(\"'#&'#"),
        peg$decode("%;I/' 8!:\u0131!! )"),
        peg$decode("%3\u0132\"\"5&7\u0133/:#;</1$;I/($8#:\u0134#! )(#'#(\"'#&'#"),
        peg$decode("%3\u0135\"\"5%7\u0136/]#;</T$%3\u0137\"\"5$7\u0138/& 8!:\u0139! ).4 &%3\u013A\"\"5%7\u013B/& 8!:\u013C! )/#$+#)(#'#(\"'#&'#"),
        peg$decode("%3\u013D\"\"5)7\u013E/R#;</I$3\u013F\"\"5#7\u0140./ &3\u0141\"\"5(7\u0142.# &;6/($8#:\u0143#! )(#'#(\"'#&'#"),
        peg$decode("%3\u0144\"\"5#7\u0145/\x93#;</\x8A$;D/\x81$%;\xCC/e#$%2D\"\"6D7E/,#;\xCC/#$+\")(\"'#&'#0<*%2D\"\"6D7E/,#;\xCC/#$+\")(\"'#&'#&/#$+\")(\"'#&'#/,$;E/#$+%)(%'#($'#(#'#(\"'#&'#"),
        peg$decode("%3\u0146\"\"5(7\u0147./ &3\u0148\"\"5$7\u0149.# &;6/' 8!:\u014A!! )"),
        peg$decode("%;6/Y#$%;A/,#;6/#$+\")(\"'#&'#06*%;A/,#;6/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
        peg$decode("%;\xCF/G#;./>$;\xCF/5$;./,$;\x90/#$+%)(%'#($'#(#'#(\"'#&'#"),
        peg$decode("%$;!/&#0#*;!&&&#/' 8!:\u014B!! )"),
        peg$decode("%;\xD1/]#$%;A/,#;\xD1/#$+\")(\"'#&'#06*%;A/,#;\xD1/#$+\")(\"'#&'#&/'$8\":\u014C\" )(\"'#&'#"),
        peg$decode("%;\x99/]#$%;B/,#;\xA0/#$+\")(\"'#&'#06*%;B/,#;\xA0/#$+\")(\"'#&'#&/'$8\":\u014D\" )(\"'#&'#"),
        peg$decode("%;L.O &;\x99.I &%;@.\" &\"/:#;t/1$;?.\" &\"/#$+#)(#'#(\"'#&'#/]#$%;B/,#;\xA0/#$+\")(\"'#&'#06*%;B/,#;\xA0/#$+\")(\"'#&'#&/'$8\":\u014E\" )(\"'#&'#"),
        peg$decode("%;\xD4/]#$%;B/,#;\xD5/#$+\")(\"'#&'#06*%;B/,#;\xD5/#$+\")(\"'#&'#&/'$8\":\u014F\" )(\"'#&'#"),
        peg$decode("%;\x96/& 8!:\u0150! )"),
        peg$decode("%3\u0151\"\"5(7\u0152/:#;</1$;6/($8#:\u0153#! )(#'#(\"'#&'#.g &%3\u0154\"\"5&7\u0155/:#;</1$;6/($8#:\u0156#! )(#'#(\"'#&'#.: &%3\u0157\"\"5*7\u0158/& 8!:\u0159! ).# &;\xA0"),
        peg$decode("%%;6/k#$%;A/2#;6/)$8\":\u015A\"\"$ )(\"'#&'#0<*%;A/2#;6/)$8\":\u015A\"\"$ )(\"'#&'#&/)$8\":\u015B\"\"! )(\"'#&'#.\" &\"/' 8!:\u015C!! )"),
        peg$decode("%;\xD8/Y#$%;A/,#;\xD8/#$+\")(\"'#&'#06*%;A/,#;\xD8/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
        peg$decode("%;\x99/Y#$%;B/,#;\xA0/#$+\")(\"'#&'#06*%;B/,#;\xA0/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
        peg$decode("%$;!/&#0#*;!&&&#/' 8!:\u015D!! )"),
        peg$decode("%;\xDB/Y#$%;B/,#;\xDC/#$+\")(\"'#&'#06*%;B/,#;\xDC/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
        peg$decode("%3\u015E\"\"5&7\u015F.; &3\u0160\"\"5'7\u0161./ &3\u0162\"\"5*7\u0163.# &;6/& 8!:\u0164! )"),
        peg$decode("%3\u0165\"\"5&7\u0166/:#;</1$;\xDD/($8#:\u0167#! )(#'#(\"'#&'#.} &%3\xF5\"\"5'7\xF6/:#;</1$;\x9E/($8#:\u0168#! )(#'#(\"'#&'#.P &%3\u0169\"\"5+7\u016A/:#;</1$;\x9E/($8#:\u016B#! )(#'#(\"'#&'#.# &;\xA0"),
        peg$decode("3\u016C\"\"5+7\u016D.k &3\u016E\"\"5)7\u016F._ &3\u0170\"\"5(7\u0171.S &3\u0172\"\"5'7\u0173.G &3\u0174\"\"5&7\u0175.; &3\u0176\"\"5*7\u0177./ &3\u0178\"\"5)7\u0179.# &;6"),
        peg$decode(";1.\" &\""),
        peg$decode("%%;6/k#$%;A/2#;6/)$8\":\u015A\"\"$ )(\"'#&'#0<*%;A/2#;6/)$8\":\u015A\"\"$ )(\"'#&'#&/)$8\":\u015B\"\"! )(\"'#&'#.\" &\"/' 8!:\u017A!! )"),
        peg$decode("%;L.# &;\x99/]#$%;B/,#;\xE1/#$+\")(\"'#&'#06*%;B/,#;\xE1/#$+\")(\"'#&'#&/'$8\":\u017B\" )(\"'#&'#"),
        peg$decode(";\xB9.# &;\xA0"),
        peg$decode("%;\xE3/Y#$%;A/,#;\xE3/#$+\")(\"'#&'#06*%;A/,#;\xE3/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
        peg$decode("%;\xEA/k#;./b$;\xED/Y$$%;B/,#;\xE4/#$+\")(\"'#&'#06*%;B/,#;\xE4/#$+\")(\"'#&'#&/#$+$)($'#(#'#(\"'#&'#"),
        peg$decode(";\xE5.; &;\xE6.5 &;\xE7./ &;\xE8.) &;\xE9.# &;\xA0"),
        peg$decode("%3\u017C\"\"5#7\u017D/:#;</1$;\xF0/($8#:\u017E#! )(#'#(\"'#&'#"),
        peg$decode("%3\u017F\"\"5%7\u0180/:#;</1$;T/($8#:\u0181#! )(#'#(\"'#&'#"),
        peg$decode("%3\u0182\"\"5(7\u0183/F#;</=$;\\.) &;Y.# &;X/($8#:\u0184#! )(#'#(\"'#&'#"),
        peg$decode("%3\u0185\"\"5&7\u0186/:#;</1$;6/($8#:\u0187#! )(#'#(\"'#&'#"),
        peg$decode("%3\u0188\"\"5%7\u0189/A#;</8$$;!0#*;!&/($8#:\u018A#! )(#'#(\"'#&'#"),
        peg$decode("%;\xEB/G#;;/>$;6/5$;;/,$;\xEC/#$+%)(%'#($'#(#'#(\"'#&'#"),
        peg$decode("%3\x92\"\"5#7\xD3.# &;6/' 8!:\u018B!! )"),
        peg$decode("%3\xB1\"\"5#7\u018C.G &3\xB3\"\"5#7\u018D.; &3\xB7\"\"5#7\u018E./ &3\xB5\"\"5$7\u018F.# &;6/' 8!:\u0190!! )"),
        peg$decode("%;\xEE/D#%;C/,#;\xEF/#$+\")(\"'#&'#.\" &\"/#$+\")(\"'#&'#"),
        peg$decode("%;U.) &;\\.# &;X/& 8!:\u0191! )"),
        peg$decode("%%;!.\" &\"/[#;!.\" &\"/M$;!.\" &\"/?$;!.\" &\"/1$;!.\" &\"/#$+%)(%'#($'#(#'#(\"'#&'#/' 8!:\u0192!! )"),
        peg$decode("%%;!/?#;!.\" &\"/1$;!.\" &\"/#$+#)(#'#(\"'#&'#/' 8!:\u0193!! )"),
        peg$decode(";\xBE"),
        peg$decode("%;\x9E/^#$%;B/,#;\xF3/#$+\")(\"'#&'#06*%;B/,#;\xF3/#$+\")(\"'#&'#&/($8\":\u0194\"!!)(\"'#&'#"),
        peg$decode(";\xF4.# &;\xA0"),
        peg$decode("%2\u0195\"\"6\u01957\u0196/L#;</C$2\u0197\"\"6\u01977\u0198.) &2\u0199\"\"6\u01997\u019A/($8#:\u019B#! )(#'#(\"'#&'#"),
        peg$decode("%;\x9E/^#$%;B/,#;\xA0/#$+\")(\"'#&'#06*%;B/,#;\xA0/#$+\")(\"'#&'#&/($8\":\u019C\"!!)(\"'#&'#"),
        peg$decode("%;6/5#;0/,$;\xF7/#$+#)(#'#(\"'#&'#"),
        peg$decode("$;2.) &;4.# &;.0/*;2.) &;4.# &;.&"),
        peg$decode("$;%0#*;%&"),
        peg$decode("%;\xFA/;#28\"\"6879/,$;\xFB/#$+#)(#'#(\"'#&'#"),
        peg$decode("%3\u019D\"\"5%7\u019E.) &3\u019F\"\"5$7\u01A0/' 8!:\u01A1!! )"),
        peg$decode("%;\xFC/J#%28\"\"6879/,#;^/#$+\")(\"'#&'#.\" &\"/#$+\")(\"'#&'#"),
        peg$decode("%;\\.) &;X.# &;\x82/' 8!:\u01A2!! )"),
        peg$decode(";\".S &;!.M &2F\"\"6F7G.A &2J\"\"6J7K.5 &2H\"\"6H7I.) &2N\"\"6N7O"),
        peg$decode("2L\"\"6L7M.\x95 &2B\"\"6B7C.\x89 &2<\"\"6<7=.} &2R\"\"6R7S.q &2T\"\"6T7U.e &2V\"\"6V7W.Y &2P\"\"6P7Q.M &2@\"\"6@7A.A &2D\"\"6D7E.5 &22\"\"6273.) &2>\"\"6>7?"),
        peg$decode("%;\u0100/b#28\"\"6879/S$;\xFB/J$%2\u01A3\"\"6\u01A37\u01A4/,#;\xEC/#$+\")(\"'#&'#.\" &\"/#$+$)($'#(#'#(\"'#&'#"),
        peg$decode("%3\u01A5\"\"5%7\u01A6.) &3\u01A7\"\"5$7\u01A8/' 8!:\u01A1!! )"),
        peg$decode("%3\xB1\"\"5#7\xB2.6 &3\xB3\"\"5#7\xB4.* &$;+0#*;+&/' 8!:\u01A9!! )"),
        peg$decode("%;\u0104/\x87#2F\"\"6F7G/x$;\u0103/o$2F\"\"6F7G/`$;\u0103/W$2F\"\"6F7G/H$;\u0103/?$2F\"\"6F7G/0$;\u0105/'$8):\u01AA) )()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#"),
        peg$decode("%;#/>#;#/5$;#/,$;#/#$+$)($'#(#'#(\"'#&'#"),
        peg$decode("%;\u0103/,#;\u0103/#$+\")(\"'#&'#"),
        peg$decode("%;\u0103/5#;\u0103/,$;\u0103/#$+#)(#'#(\"'#&'#"),
        peg$decode("%;q/T#$;m0#*;m&/D$%; /,#;\xF8/#$+\")(\"'#&'#.\" &\"/#$+#)(#'#(\"'#&'#"),
        peg$decode("%2\u01AB\"\"6\u01AB7\u01AC.) &2\u01AD\"\"6\u01AD7\u01AE/w#;0/n$;\u0108/e$$%;B/2#;\u0109.# &;\xA0/#$+\")(\"'#&'#0<*%;B/2#;\u0109.# &;\xA0/#$+\")(\"'#&'#&/#$+$)($'#(#'#(\"'#&'#"),
        peg$decode(";\x99.# &;L"),
        peg$decode("%2\u01AF\"\"6\u01AF7\u01B0/5#;</,$;\u010A/#$+#)(#'#(\"'#&'#"),
        peg$decode("%;D/S#;,/J$2:\"\"6:7;/;$;,.# &;T/,$;E/#$+%)(%'#($'#(#'#(\"'#&'#")
    ];
    let peg$currPos = 0;
    let peg$savedPos = 0;
    const peg$posDetailsCache = [{ line: 1, column: 1 }];
    let peg$maxFailPos = 0;
    let peg$maxFailExpected = [];
    let peg$silentFails = 0;
    let peg$result;
    if (options.startRule !== undefined) {
        if (!(options.startRule in peg$startRuleIndices)) {
            throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
        }
        peg$startRuleIndex = peg$startRuleIndices[options.startRule];
    }
    function text() {
        return input.substring(peg$savedPos, peg$currPos);
    }
    function location() {
        return peg$computeLocation(peg$savedPos, peg$currPos);
    }
    function expected(description, location1) {
        location1 = location1 !== undefined
            ? location1
            : peg$computeLocation(peg$savedPos, peg$currPos);
        throw peg$buildStructuredError([peg$otherExpectation(description)], input.substring(peg$savedPos, peg$currPos), location1);
    }
    function error(message, location1) {
        location1 = location1 !== undefined
            ? location1
            : peg$computeLocation(peg$savedPos, peg$currPos);
        throw peg$buildSimpleError(message, location1);
    }
    function peg$literalExpectation(text1, ignoreCase) {
        return { type: "literal", text: text1, ignoreCase: ignoreCase };
    }
    function peg$classExpectation(parts, inverted, ignoreCase) {
        return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
    }
    function peg$anyExpectation() {
        return { type: "any" };
    }
    function peg$endExpectation() {
        return { type: "end" };
    }
    function peg$otherExpectation(description) {
        return { type: "other", description: description };
    }
    function peg$computePosDetails(pos) {
        let details = peg$posDetailsCache[pos];
        let p;
        if (details) {
            return details;
        }
        else {
            p = pos - 1;
            while (!peg$posDetailsCache[p]) {
                p--;
            }
            details = peg$posDetailsCache[p];
            details = {
                line: details.line,
                column: details.column
            };
            while (p < pos) {
                if (input.charCodeAt(p) === 10) {
                    details.line++;
                    details.column = 1;
                }
                else {
                    details.column++;
                }
                p++;
            }
            peg$posDetailsCache[pos] = details;
            return details;
        }
    }
    function peg$computeLocation(startPos, endPos) {
        const startPosDetails = peg$computePosDetails(startPos);
        const endPosDetails = peg$computePosDetails(endPos);
        return {
            start: {
                offset: startPos,
                line: startPosDetails.line,
                column: startPosDetails.column
            },
            end: {
                offset: endPos,
                line: endPosDetails.line,
                column: endPosDetails.column
            }
        };
    }
    function peg$fail(expected1) {
        if (peg$currPos < peg$maxFailPos) {
            return;
        }
        if (peg$currPos > peg$maxFailPos) {
            peg$maxFailPos = peg$currPos;
            peg$maxFailExpected = [];
        }
        peg$maxFailExpected.push(expected1);
    }
    function peg$buildSimpleError(message, location1) {
        return new SyntaxError(message, [], "", location1);
    }
    function peg$buildStructuredError(expected1, found, location1) {
        return new SyntaxError(SyntaxError.buildMessage(expected1, found), expected1, found, location1);
    }
    function peg$decode(s) {
        return s.split("").map((ch) => ch.charCodeAt(0) - 32);
    }
    function peg$parseRule(index) {
        const bc = peg$bytecode[index];
        let ip = 0;
        const ips = [];
        let end = bc.length;
        const ends = [];
        const stack = [];
        let params;
        while (true) {
            while (ip < end) {
                switch (bc[ip]) {
                    case 0:
                        stack.push(peg$consts[bc[ip + 1]]);
                        ip += 2;
                        break;
                    case 1:
                        stack.push(undefined);
                        ip++;
                        break;
                    case 2:
                        stack.push(null);
                        ip++;
                        break;
                    case 3:
                        stack.push(peg$FAILED);
                        ip++;
                        break;
                    case 4:
                        stack.push([]);
                        ip++;
                        break;
                    case 5:
                        stack.push(peg$currPos);
                        ip++;
                        break;
                    case 6:
                        stack.pop();
                        ip++;
                        break;
                    case 7:
                        peg$currPos = stack.pop();
                        ip++;
                        break;
                    case 8:
                        stack.length -= bc[ip + 1];
                        ip += 2;
                        break;
                    case 9:
                        stack.splice(-2, 1);
                        ip++;
                        break;
                    case 10:
                        stack[stack.length - 2].push(stack.pop());
                        ip++;
                        break;
                    case 11:
                        stack.push(stack.splice(stack.length - bc[ip + 1], bc[ip + 1]));
                        ip += 2;
                        break;
                    case 12:
                        stack.push(input.substring(stack.pop(), peg$currPos));
                        ip++;
                        break;
                    case 13:
                        ends.push(end);
                        ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);
                        if (stack[stack.length - 1]) {
                            end = ip + 3 + bc[ip + 1];
                            ip += 3;
                        }
                        else {
                            end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                            ip += 3 + bc[ip + 1];
                        }
                        break;
                    case 14:
                        ends.push(end);
                        ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);
                        if (stack[stack.length - 1] === peg$FAILED) {
                            end = ip + 3 + bc[ip + 1];
                            ip += 3;
                        }
                        else {
                            end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                            ip += 3 + bc[ip + 1];
                        }
                        break;
                    case 15:
                        ends.push(end);
                        ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);
                        if (stack[stack.length - 1] !== peg$FAILED) {
                            end = ip + 3 + bc[ip + 1];
                            ip += 3;
                        }
                        else {
                            end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                            ip += 3 + bc[ip + 1];
                        }
                        break;
                    case 16:
                        if (stack[stack.length - 1] !== peg$FAILED) {
                            ends.push(end);
                            ips.push(ip);
                            end = ip + 2 + bc[ip + 1];
                            ip += 2;
                        }
                        else {
                            ip += 2 + bc[ip + 1];
                        }
                        break;
                    case 17:
                        ends.push(end);
                        ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);
                        if (input.length > peg$currPos) {
                            end = ip + 3 + bc[ip + 1];
                            ip += 3;
                        }
                        else {
                            end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                            ip += 3 + bc[ip + 1];
                        }
                        break;
                    case 18:
                        ends.push(end);
                        ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);
                        if (input.substr(peg$currPos, peg$consts[bc[ip + 1]].length) === peg$consts[bc[ip + 1]]) {
                            end = ip + 4 + bc[ip + 2];
                            ip += 4;
                        }
                        else {
                            end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                            ip += 4 + bc[ip + 2];
                        }
                        break;
                    case 19:
                        ends.push(end);
                        ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);
                        if (input.substr(peg$currPos, peg$consts[bc[ip + 1]].length).toLowerCase() === peg$consts[bc[ip + 1]]) {
                            end = ip + 4 + bc[ip + 2];
                            ip += 4;
                        }
                        else {
                            end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                            ip += 4 + bc[ip + 2];
                        }
                        break;
                    case 20:
                        ends.push(end);
                        ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);
                        if (peg$consts[bc[ip + 1]].test(input.charAt(peg$currPos))) {
                            end = ip + 4 + bc[ip + 2];
                            ip += 4;
                        }
                        else {
                            end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                            ip += 4 + bc[ip + 2];
                        }
                        break;
                    case 21:
                        stack.push(input.substr(peg$currPos, bc[ip + 1]));
                        peg$currPos += bc[ip + 1];
                        ip += 2;
                        break;
                    case 22:
                        stack.push(peg$consts[bc[ip + 1]]);
                        peg$currPos += peg$consts[bc[ip + 1]].length;
                        ip += 2;
                        break;
                    case 23:
                        stack.push(peg$FAILED);
                        if (peg$silentFails === 0) {
                            peg$fail(peg$consts[bc[ip + 1]]);
                        }
                        ip += 2;
                        break;
                    case 24:
                        peg$savedPos = stack[stack.length - 1 - bc[ip + 1]];
                        ip += 2;
                        break;
                    case 25:
                        peg$savedPos = peg$currPos;
                        ip++;
                        break;
                    case 26:
                        params = bc.slice(ip + 4, ip + 4 + bc[ip + 3])
                            .map(function (p) { return stack[stack.length - 1 - p]; });
                        stack.splice(stack.length - bc[ip + 2], bc[ip + 2], peg$consts[bc[ip + 1]].apply(null, params));
                        ip += 4 + bc[ip + 3];
                        break;
                    case 27:
                        stack.push(peg$parseRule(bc[ip + 1]));
                        ip += 2;
                        break;
                    case 28:
                        peg$silentFails++;
                        ip++;
                        break;
                    case 29:
                        peg$silentFails--;
                        ip++;
                        break;
                    default:
                        throw new Error("Invalid opcode: " + bc[ip] + ".");
                }
            }
            if (ends.length > 0) {
                end = ends.pop();
                ip = ips.pop();
            }
            else {
                break;
            }
        }
        return stack[0];
    }
    options.data = {}; // Object to which header attributes will be assigned during parsing
    function list(head, tail) {
        return [head].concat(tail);
    }
    peg$result = peg$parseRule(peg$startRuleIndex);
    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
        return peg$result;
    }
    else {
        if (peg$result !== peg$FAILED && peg$currPos < input.length) {
            peg$fail(peg$endExpectation());
        }
        throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length
            ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
            : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
    }
}
const parse = peg$parse;


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "URI": () => (/* binding */ URI),
/* harmony export */   "equivalentURI": () => (/* binding */ equivalentURI)
/* harmony export */ });
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * URI.
 * @public
 */
class URI extends _parameters__WEBPACK_IMPORTED_MODULE_0__.Parameters {
    /**
     * Constructor
     * @param scheme -
     * @param user -
     * @param host -
     * @param port -
     * @param parameters -
     * @param headers -
     */
    constructor(scheme = "sip", user, host, port, parameters, headers) {
        super(parameters || {});
        this.headers = {};
        // Checks
        if (!host) {
            throw new TypeError('missing or invalid "host" parameter');
        }
        for (const header in headers) {
            // eslint-disable-next-line no-prototype-builtins
            if (headers.hasOwnProperty(header)) {
                this.setHeader(header, headers[header]);
            }
        }
        // Raw URI
        this.raw = {
            scheme,
            user,
            host,
            port
        };
        // Normalized URI
        this.normal = {
            scheme: scheme.toLowerCase(),
            user,
            host: host.toLowerCase(),
            port
        };
    }
    get scheme() { return this.normal.scheme; }
    set scheme(value) {
        this.raw.scheme = value;
        this.normal.scheme = value.toLowerCase();
    }
    get user() { return this.normal.user; }
    set user(value) {
        this.normal.user = this.raw.user = value;
    }
    get host() { return this.normal.host; }
    set host(value) {
        this.raw.host = value;
        this.normal.host = value.toLowerCase();
    }
    get aor() { return this.normal.user + "@" + this.normal.host; }
    get port() { return this.normal.port; }
    set port(value) {
        this.normal.port = this.raw.port = value === 0 ? value : value;
    }
    setHeader(name, value) {
        this.headers[this.headerize(name)] = (value instanceof Array) ? value : [value];
    }
    getHeader(name) {
        if (name) {
            return this.headers[this.headerize(name)];
        }
    }
    hasHeader(name) {
        // eslint-disable-next-line no-prototype-builtins
        return !!name && !!this.headers.hasOwnProperty(this.headerize(name));
    }
    deleteHeader(header) {
        header = this.headerize(header);
        // eslint-disable-next-line no-prototype-builtins
        if (this.headers.hasOwnProperty(header)) {
            const value = this.headers[header];
            delete this.headers[header];
            return value;
        }
    }
    clearHeaders() {
        this.headers = {};
    }
    clone() {
        return new URI(this._raw.scheme, this._raw.user || "", this._raw.host, this._raw.port, JSON.parse(JSON.stringify(this.parameters)), JSON.parse(JSON.stringify(this.headers)));
    }
    toRaw() {
        return this._toString(this._raw);
    }
    toString() {
        return this._toString(this._normal);
    }
    get _normal() { return this.normal; }
    get _raw() { return this.raw; }
    _toString(uri) {
        let uriString = uri.scheme + ":";
        // add slashes if it's not a sip(s) URI
        if (!uri.scheme.toLowerCase().match("^sips?$")) {
            uriString += "//";
        }
        if (uri.user) {
            uriString += this.escapeUser(uri.user) + "@";
        }
        uriString += uri.host;
        if (uri.port || uri.port === 0) {
            uriString += ":" + uri.port;
        }
        for (const parameter in this.parameters) {
            // eslint-disable-next-line no-prototype-builtins
            if (this.parameters.hasOwnProperty(parameter)) {
                uriString += ";" + parameter;
                if (this.parameters[parameter] !== null) {
                    uriString += "=" + this.parameters[parameter];
                }
            }
        }
        const headers = [];
        for (const header in this.headers) {
            // eslint-disable-next-line no-prototype-builtins
            if (this.headers.hasOwnProperty(header)) {
                // eslint-disable-next-line @typescript-eslint/no-for-in-array
                for (const idx in this.headers[header]) {
                    // eslint-disable-next-line no-prototype-builtins
                    if (this.headers[header].hasOwnProperty(idx)) {
                        headers.push(header + "=" + this.headers[header][idx]);
                    }
                }
            }
        }
        if (headers.length > 0) {
            uriString += "?" + headers.join("&");
        }
        return uriString;
    }
    /*
     * Hex-escape a SIP URI user.
     * @private
     * @param {String} user
     */
    escapeUser(user) {
        let decodedUser;
        // FIXME: This is called by toString above which should never throw, but
        // decodeURIComponent can throw and I've seen one case in production where
        // it did throw resulting in a cascading failure. This class should be
        // fixed so that decodeURIComponent is not called at this point (in toString).
        // The user should be decoded when the URI is constructor or some other
        // place where we can catch the error before the URI is created or somesuch.
        // eslint-disable-next-line no-useless-catch
        try {
            decodedUser = decodeURIComponent(user);
        }
        catch (error) {
            throw error;
        }
        // Don't hex-escape ':' (%3A), '+' (%2B), '?' (%3F"), '/' (%2F).
        return encodeURIComponent(decodedUser)
            .replace(/%3A/ig, ":")
            .replace(/%2B/ig, "+")
            .replace(/%3F/ig, "?")
            .replace(/%2F/ig, "/");
    }
    headerize(str) {
        const exceptions = {
            "Call-Id": "Call-ID",
            "Cseq": "CSeq",
            "Min-Se": "Min-SE",
            "Rack": "RAck",
            "Rseq": "RSeq",
            "Www-Authenticate": "WWW-Authenticate",
        };
        const name = str.toLowerCase().replace(/_/g, "-").split("-");
        const parts = name.length;
        let hname = "";
        for (let part = 0; part < parts; part++) {
            if (part !== 0) {
                hname += "-";
            }
            hname += name[part].charAt(0).toUpperCase() + name[part].substring(1);
        }
        if (exceptions[hname]) {
            hname = exceptions[hname];
        }
        return hname;
    }
}
/**
 * Returns true if URIs are equivalent per RFC 3261 Section 19.1.4.
 * @param a URI to compare
 * @param b URI to compare
 *
 * @remarks
 * 19.1.4 URI Comparison
 * Some operations in this specification require determining whether two
 * SIP or SIPS URIs are equivalent.
 *
 * https://tools.ietf.org/html/rfc3261#section-19.1.4
 * @internal
 */
function equivalentURI(a, b) {
    // o  A SIP and SIPS URI are never equivalent.
    if (a.scheme !== b.scheme) {
        return false;
    }
    // o  Comparison of the userinfo of SIP and SIPS URIs is case-
    //    sensitive.  This includes userinfo containing passwords or
    //    formatted as telephone-subscribers.  Comparison of all other
    //    components of the URI is case-insensitive unless explicitly
    //    defined otherwise.
    //
    // o  The ordering of parameters and header fields is not significant
    //    in comparing SIP and SIPS URIs.
    //
    // o  Characters other than those in the "reserved" set (see RFC 2396
    //    [5]) are equivalent to their ""%" HEX HEX" encoding.
    //
    // o  An IP address that is the result of a DNS lookup of a host name
    //    does not match that host name.
    //
    // o  For two URIs to be equal, the user, password, host, and port
    //    components must match.
    //
    // A URI omitting the user component will not match a URI that
    // includes one.  A URI omitting the password component will not
    // match a URI that includes one.
    //
    // A URI omitting any component with a default value will not
    // match a URI explicitly containing that component with its
    // default value.  For instance, a URI omitting the optional port
    // component will not match a URI explicitly declaring port 5060.
    // The same is true for the transport-parameter, ttl-parameter,
    // user-parameter, and method components.
    //
    // Defining sip:user@host to not be equivalent to
    // sip:user@host:5060 is a change from RFC 2543.  When deriving
    // addresses from URIs, equivalent addresses are expected from
    // equivalent URIs.  The URI sip:user@host:5060 will always
    // resolve to port 5060.  The URI sip:user@host may resolve to
    // other ports through the DNS SRV mechanisms detailed in [4].
    // FIXME: TODO:
    // - character compared to hex encoding is not handled
    // - password does not exist on URI currently
    if (a.user !== b.user || a.host !== b.host || a.port !== b.port) {
        return false;
    }
    // o  URI uri-parameter components are compared as follows:
    function compareParameters(a, b) {
        //  -  Any uri-parameter appearing in both URIs must match.
        const parameterKeysA = Object.keys(a.parameters);
        const parameterKeysB = Object.keys(b.parameters);
        const intersection = parameterKeysA.filter(x => parameterKeysB.includes(x));
        if (!intersection.every(key => a.parameters[key] === b.parameters[key])) {
            return false;
        }
        //  -  A user, ttl, or method uri-parameter appearing in only one
        //     URI never matches, even if it contains the default value.
        if (!["user", "ttl", "method", "transport"].every(key => a.hasParam(key) && b.hasParam(key) || !a.hasParam(key) && !b.hasParam(key))) {
            return false;
        }
        //  -  A URI that includes an maddr parameter will not match a URI
        //     that contains no maddr parameter.
        if (!["maddr"].every(key => a.hasParam(key) && b.hasParam(key) || !a.hasParam(key) && !b.hasParam(key))) {
            return false;
        }
        //  -  All other uri-parameters appearing in only one URI are
        //     ignored when comparing the URIs.
        return true;
    }
    if (!compareParameters(a, b)) {
        return false;
    }
    // o  URI header components are never ignored.  Any present header
    //    component MUST be present in both URIs and match for the URIs
    //    to match.  The matching rules are defined for each header field
    //    in Section 20.
    const headerKeysA = Object.keys(a.headers);
    const headerKeysB = Object.keys(b.headers);
    // No need to check if no headers
    if (headerKeysA.length !== 0 || headerKeysB.length !== 0) {
        // Must have same number of headers
        if (headerKeysA.length !== headerKeysB.length) {
            return false;
        }
        // Must have same headers
        const intersection = headerKeysA.filter(x => headerKeysB.includes(x));
        if (intersection.length !== headerKeysB.length) {
            return false;
        }
        // FIXME: Not to spec. But perhaps not worth fixing?
        // Must have same header values
        // It seems too much to consider multiple headers with same name.
        // It seems too much to compare two header params according to the rule of each header.
        // We'll assume a single header and compare them string to string...
        if (!intersection.every(key => a.headers[key].length && b.headers[key].length && a.headers[key][0] === b.headers[key][0])) {
            return false;
        }
    }
    return true;
}


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Parameters": () => (/* binding */ Parameters)
/* harmony export */ });
/**
 * @internal
 */
class Parameters {
    constructor(parameters) {
        this.parameters = {};
        // for in is required here as the Grammar parser is adding to the prototype chain
        for (const param in parameters) {
            // eslint-disable-next-line no-prototype-builtins
            if (parameters.hasOwnProperty(param)) {
                this.setParam(param, parameters[param]);
            }
        }
    }
    setParam(key, value) {
        if (key) {
            this.parameters[key.toLowerCase()] = (typeof value === "undefined" || value === null) ? null : value.toString();
        }
    }
    getParam(key) {
        if (key) {
            return this.parameters[key.toLowerCase()];
        }
    }
    hasParam(key) {
        return !!(key && this.parameters[key.toLowerCase()] !== undefined);
    }
    deleteParam(key) {
        key = key.toLowerCase();
        if (this.hasParam(key)) {
            const value = this.parameters[key];
            delete this.parameters[key];
            return value;
        }
    }
    clearParams() {
        this.parameters = {};
    }
}


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NameAddrHeader": () => (/* binding */ NameAddrHeader)
/* harmony export */ });
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);

/**
 * Name Address SIP header.
 * @public
 */
class NameAddrHeader extends _parameters__WEBPACK_IMPORTED_MODULE_0__.Parameters {
    /**
     * Constructor
     * @param uri -
     * @param displayName -
     * @param parameters -
     */
    constructor(uri, displayName, parameters) {
        super(parameters);
        this.uri = uri;
        this._displayName = displayName;
    }
    get friendlyName() {
        return this.displayName || this.uri.aor;
    }
    get displayName() { return this._displayName; }
    set displayName(value) {
        this._displayName = value;
    }
    clone() {
        return new NameAddrHeader(this.uri.clone(), this._displayName, JSON.parse(JSON.stringify(this.parameters)));
    }
    toString() {
        let body = (this.displayName || this.displayName === "0") ? '"' + this.displayName + '" ' : "";
        body += "<" + this.uri.toString() + ">";
        for (const parameter in this.parameters) {
            // eslint-disable-next-line no-prototype-builtins
            if (this.parameters.hasOwnProperty(parameter)) {
                body += ";" + parameter;
                if (this.parameters[parameter] !== null) {
                    body += "=" + this.parameters[parameter];
                }
            }
        }
        return body;
    }
}


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncomingResponseMessage": () => (/* binding */ IncomingResponseMessage)
/* harmony export */ });
/* harmony import */ var _incoming_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);

/**
 * Incoming response message.
 * @public
 */
class IncomingResponseMessage extends _incoming_message__WEBPACK_IMPORTED_MODULE_0__.IncomingMessage {
    constructor() {
        super();
    }
}


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutgoingRequestMessage": () => (/* binding */ OutgoingRequestMessage)
/* harmony export */ });
/* harmony import */ var _grammar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);


/**
 * Outgoing SIP request message.
 * @public
 */
class OutgoingRequestMessage {
    constructor(method, ruri, fromURI, toURI, options, extraHeaders, body) {
        this.headers = {};
        this.extraHeaders = [];
        // Initialize default options
        this.options = OutgoingRequestMessage.getDefaultOptions();
        // Options - merge a deep copy
        if (options) {
            this.options = Object.assign(Object.assign({}, this.options), options);
            if (this.options.optionTags && this.options.optionTags.length) {
                this.options.optionTags = this.options.optionTags.slice();
            }
            if (this.options.routeSet && this.options.routeSet.length) {
                this.options.routeSet = this.options.routeSet.slice();
            }
        }
        // Extra headers - deep copy
        if (extraHeaders && extraHeaders.length) {
            this.extraHeaders = extraHeaders.slice();
        }
        // Body - deep copy
        if (body) {
            // TODO: internal representation should be Body
            // this.body = { ...body };
            this.body = {
                body: body.content,
                contentType: body.contentType
            };
        }
        // Method
        this.method = method;
        // RURI
        this.ruri = ruri.clone();
        // From
        this.fromURI = fromURI.clone();
        this.fromTag = this.options.fromTag ? this.options.fromTag : (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newTag)();
        this.from = OutgoingRequestMessage.makeNameAddrHeader(this.fromURI, this.options.fromDisplayName, this.fromTag);
        // To
        this.toURI = toURI.clone();
        this.toTag = this.options.toTag;
        this.to = OutgoingRequestMessage.makeNameAddrHeader(this.toURI, this.options.toDisplayName, this.toTag);
        // Call-ID
        this.callId = this.options.callId ? this.options.callId : this.options.callIdPrefix + (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createRandomToken)(15);
        // CSeq
        this.cseq = this.options.cseq;
        // The relative order of header fields with different field names is not
        // significant.  However, it is RECOMMENDED that header fields which are
        // needed for proxy processing (Via, Route, Record-Route, Proxy-Require,
        // Max-Forwards, and Proxy-Authorization, for example) appear towards
        // the top of the message to facilitate rapid parsing.
        // https://tools.ietf.org/html/rfc3261#section-7.3.1
        this.setHeader("route", this.options.routeSet);
        this.setHeader("via", "");
        this.setHeader("to", this.to.toString());
        this.setHeader("from", this.from.toString());
        this.setHeader("cseq", this.cseq + " " + this.method);
        this.setHeader("call-id", this.callId);
        this.setHeader("max-forwards", "70");
    }
    /** Get a copy of the default options. */
    static getDefaultOptions() {
        return {
            callId: "",
            callIdPrefix: "",
            cseq: 1,
            toDisplayName: "",
            toTag: "",
            fromDisplayName: "",
            fromTag: "",
            forceRport: false,
            hackViaTcp: false,
            optionTags: ["outbound"],
            routeSet: [],
            userAgentString: "sip.js",
            viaHost: ""
        };
    }
    static makeNameAddrHeader(uri, displayName, tag) {
        const parameters = {};
        if (tag) {
            parameters.tag = tag;
        }
        return new _grammar__WEBPACK_IMPORTED_MODULE_1__.NameAddrHeader(uri, displayName, parameters);
    }
    /**
     * Get the value of the given header name at the given position.
     * @param name - header name
     * @returns Returns the specified header, undefined if header doesn't exist.
     */
    getHeader(name) {
        const header = this.headers[(0,_utils__WEBPACK_IMPORTED_MODULE_0__.headerize)(name)];
        if (header) {
            if (header[0]) {
                return header[0];
            }
        }
        else {
            const regexp = new RegExp("^\\s*" + name + "\\s*:", "i");
            for (const exHeader of this.extraHeaders) {
                if (regexp.test(exHeader)) {
                    return exHeader.substring(exHeader.indexOf(":") + 1).trim();
                }
            }
        }
        return;
    }
    /**
     * Get the header/s of the given name.
     * @param name - header name
     * @returns Array with all the headers of the specified name.
     */
    getHeaders(name) {
        const result = [];
        const headerArray = this.headers[(0,_utils__WEBPACK_IMPORTED_MODULE_0__.headerize)(name)];
        if (headerArray) {
            for (const headerPart of headerArray) {
                result.push(headerPart);
            }
        }
        else {
            const regexp = new RegExp("^\\s*" + name + "\\s*:", "i");
            for (const exHeader of this.extraHeaders) {
                if (regexp.test(exHeader)) {
                    result.push(exHeader.substring(exHeader.indexOf(":") + 1).trim());
                }
            }
        }
        return result;
    }
    /**
     * Verify the existence of the given header.
     * @param name - header name
     * @returns true if header with given name exists, false otherwise
     */
    hasHeader(name) {
        if (this.headers[(0,_utils__WEBPACK_IMPORTED_MODULE_0__.headerize)(name)]) {
            return true;
        }
        else {
            const regexp = new RegExp("^\\s*" + name + "\\s*:", "i");
            for (const extraHeader of this.extraHeaders) {
                if (regexp.test(extraHeader)) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * Replace the the given header by the given value.
     * @param name - header name
     * @param value - header value
     */
    setHeader(name, value) {
        this.headers[(0,_utils__WEBPACK_IMPORTED_MODULE_0__.headerize)(name)] = value instanceof Array ? value : [value];
    }
    /**
     * The Via header field indicates the transport used for the transaction
     * and identifies the location where the response is to be sent.  A Via
     * header field value is added only after the transport that will be
     * used to reach the next hop has been selected (which may involve the
     * usage of the procedures in [4]).
     *
     * When the UAC creates a request, it MUST insert a Via into that
     * request.  The protocol name and protocol version in the header field
     * MUST be SIP and 2.0, respectively.  The Via header field value MUST
     * contain a branch parameter.  This parameter is used to identify the
     * transaction created by that request.  This parameter is used by both
     * the client and the server.
     * https://tools.ietf.org/html/rfc3261#section-8.1.1.7
     * @param branchParameter - The branch parameter.
     * @param transport - The sent protocol transport.
     */
    setViaHeader(branch, transport) {
        // FIXME: Hack
        if (this.options.hackViaTcp) {
            transport = "TCP";
        }
        let via = "SIP/2.0/" + transport;
        via += " " + this.options.viaHost + ";branch=" + branch;
        if (this.options.forceRport) {
            via += ";rport";
        }
        this.setHeader("via", via);
        this.branch = branch;
    }
    toString() {
        let msg = "";
        msg += this.method + " " + this.ruri.toRaw() + " SIP/2.0\r\n";
        for (const header in this.headers) {
            if (this.headers[header]) {
                for (const headerPart of this.headers[header]) {
                    msg += header + ": " + headerPart + "\r\n";
                }
            }
        }
        for (const header of this.extraHeaders) {
            msg += header.trim() + "\r\n";
        }
        msg += "Supported: " + this.options.optionTags.join(", ") + "\r\n";
        msg += "User-Agent: " + this.options.userAgentString + "\r\n";
        if (this.body) {
            if (typeof this.body === "string") {
                msg += "Content-Length: " + (0,_utils__WEBPACK_IMPORTED_MODULE_0__.utf8Length)(this.body) + "\r\n\r\n";
                msg += this.body;
            }
            else {
                if (this.body.body && this.body.contentType) {
                    msg += "Content-Type: " + this.body.contentType + "\r\n";
                    msg += "Content-Length: " + (0,_utils__WEBPACK_IMPORTED_MODULE_0__.utf8Length)(this.body.body) + "\r\n\r\n";
                    msg += this.body.body;
                }
                else {
                    msg += "Content-Length: " + 0 + "\r\n\r\n";
                }
            }
        }
        else {
            msg += "Content-Length: " + 0 + "\r\n\r\n";
        }
        return msg;
    }
}


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllowedMethods": () => (/* binding */ AllowedMethods)
/* harmony export */ });
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);

/**
 * FIXME: TODO: Should be configurable/variable.
 */
const AllowedMethods = [
    _messages__WEBPACK_IMPORTED_MODULE_0__.C.ACK,
    _messages__WEBPACK_IMPORTED_MODULE_0__.C.BYE,
    _messages__WEBPACK_IMPORTED_MODULE_0__.C.CANCEL,
    _messages__WEBPACK_IMPORTED_MODULE_0__.C.INFO,
    _messages__WEBPACK_IMPORTED_MODULE_0__.C.INVITE,
    _messages__WEBPACK_IMPORTED_MODULE_0__.C.MESSAGE,
    _messages__WEBPACK_IMPORTED_MODULE_0__.C.NOTIFY,
    _messages__WEBPACK_IMPORTED_MODULE_0__.C.OPTIONS,
    _messages__WEBPACK_IMPORTED_MODULE_0__.C.PRACK,
    _messages__WEBPACK_IMPORTED_MODULE_0__.C.REFER,
    _messages__WEBPACK_IMPORTED_MODULE_0__.C.REGISTER,
    _messages__WEBPACK_IMPORTED_MODULE_0__.C.SUBSCRIBE
];


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ C)
/* harmony export */ });
/* eslint-disable @typescript-eslint/no-namespace */
/**
 * SIP Methods
 * @internal
 */
var C;
(function (C) {
    C.ACK = "ACK";
    C.BYE = "BYE";
    C.CANCEL = "CANCEL";
    C.INFO = "INFO";
    C.INVITE = "INVITE";
    C.MESSAGE = "MESSAGE";
    C.NOTIFY = "NOTIFY";
    C.OPTIONS = "OPTIONS";
    C.REGISTER = "REGISTER";
    C.UPDATE = "UPDATE";
    C.SUBSCRIBE = "SUBSCRIBE";
    C.PUBLISH = "PUBLISH";
    C.REFER = "REFER";
    C.PRACK = "PRACK";
})(C || (C = {}));


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionState": () => (/* binding */ SessionState),
/* harmony export */   "SignalingState": () => (/* binding */ SignalingState)
/* harmony export */ });
/**
 * Session state.
 * @remarks
 * https://tools.ietf.org/html/rfc3261#section-13
 * @public
 */
var SessionState;
(function (SessionState) {
    SessionState["Initial"] = "Initial";
    SessionState["Early"] = "Early";
    SessionState["AckWait"] = "AckWait";
    SessionState["Confirmed"] = "Confirmed";
    SessionState["Terminated"] = "Terminated";
})(SessionState || (SessionState = {}));
/**
 * Offer/Answer state.
 * @remarks
 * ```txt
 *         Offer                Answer             RFC    Ini Est Early
 *  -------------------------------------------------------------------
 *  1. INVITE Req.          2xx INVITE Resp.     RFC 3261  Y   Y    N
 *  2. 2xx INVITE Resp.     ACK Req.             RFC 3261  Y   Y    N
 *  3. INVITE Req.          1xx-rel INVITE Resp. RFC 3262  Y   Y    N
 *  4. 1xx-rel INVITE Resp. PRACK Req.           RFC 3262  Y   Y    N
 *  5. PRACK Req.           200 PRACK Resp.      RFC 3262  N   Y    Y
 *  6. UPDATE Req.          2xx UPDATE Resp.     RFC 3311  N   Y    Y
 *
 *       Table 1: Summary of SIP Usage of the Offer/Answer Model
 * ```
 * https://tools.ietf.org/html/rfc6337#section-2.2
 * @public
 */
var SignalingState;
(function (SignalingState) {
    SignalingState["Initial"] = "Initial";
    SignalingState["HaveLocalOffer"] = "HaveLocalOffer";
    SignalingState["HaveRemoteOffer"] = "HaveRemoteOffer";
    SignalingState["Stable"] = "Stable";
    SignalingState["Closed"] = "Closed";
})(SignalingState || (SignalingState = {}));


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Message": () => (/* binding */ Message)
/* harmony export */ });
/**
 * A received message (incoming MESSAGE).
 * @public
 */
class Message {
    /** @internal */
    constructor(incomingMessageRequest) {
        this.incomingMessageRequest = incomingMessageRequest;
    }
    /** Incoming MESSAGE request message. */
    get request() {
        return this.incomingMessageRequest.message;
    }
    /** Accept the request. */
    accept(options) {
        this.incomingMessageRequest.accept(options);
        return Promise.resolve();
    }
    /** Reject the request. */
    reject(options) {
        this.incomingMessageRequest.reject(options);
        return Promise.resolve();
    }
}


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Notification": () => (/* binding */ Notification)
/* harmony export */ });
/**
 * A notification of an event (incoming NOTIFY).
 * @public
 */
class Notification {
    /** @internal */
    constructor(incomingNotifyRequest) {
        this.incomingNotifyRequest = incomingNotifyRequest;
    }
    /** Incoming NOTIFY request message. */
    get request() {
        return this.incomingNotifyRequest.message;
    }
    /** Accept the request. */
    accept(options) {
        this.incomingNotifyRequest.accept(options);
        return Promise.resolve();
    }
    /** Reject the request. */
    reject(options) {
        this.incomingNotifyRequest.reject(options);
        return Promise.resolve();
    }
}


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Referral": () => (/* binding */ Referral)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);

/**
 * A request to establish a {@link Session} elsewhere (incoming REFER).
 * @public
 */
class Referral {
    /** @internal */
    constructor(incomingReferRequest, session) {
        this.incomingReferRequest = incomingReferRequest;
        this.session = session;
    }
    get referTo() {
        const referTo = this.incomingReferRequest.message.parseHeader("refer-to");
        if (!(referTo instanceof _core__WEBPACK_IMPORTED_MODULE_0__.NameAddrHeader)) {
            throw new Error("Failed to parse Refer-To header.");
        }
        return referTo;
    }
    get referredBy() {
        return this.incomingReferRequest.message.getHeader("referred-by");
    }
    get replaces() {
        const value = this.referTo.uri.getHeader("replaces");
        if (value instanceof Array) {
            return value[0];
        }
        return value;
    }
    /** Incoming REFER request message. */
    get request() {
        return this.incomingReferRequest.message;
    }
    /** Accept the request. */
    accept(options = { statusCode: 202 }) {
        this.incomingReferRequest.accept(options);
        return Promise.resolve();
    }
    /** Reject the request. */
    reject(options) {
        this.incomingReferRequest.reject(options);
        return Promise.resolve();
    }
    /**
     * Creates an inviter which may be used to send an out of dialog INVITE request.
     *
     * @remarks
     * This a helper method to create an Inviter which will execute the referral
     * of the `Session` which was referred. The appropriate headers are set and
     * the referred `Session` is linked to the new `Session`. Note that only a
     * single instance of the `Inviter` will be created and returned (if called
     * more than once a reference to the same `Inviter` will be returned every time).
     *
     * @param options - Options bucket.
     * @param modifiers - Session description handler modifiers.
     */
    makeInviter(options) {
        if (this.inviter) {
            return this.inviter;
        }
        const targetURI = this.referTo.uri.clone();
        targetURI.clearHeaders();
        options = options || {};
        const extraHeaders = (options.extraHeaders || []).slice();
        const replaces = this.replaces;
        if (replaces) {
            // decodeURIComponent is a holdover from 2c086eb4. Not sure that it is actually necessary
            extraHeaders.push("Replaces: " + decodeURIComponent(replaces));
        }
        const referredBy = this.referredBy;
        if (referredBy) {
            extraHeaders.push("Referred-By: " + referredBy);
        }
        options.extraHeaders = extraHeaders;
        this.inviter = this.session.userAgent._makeInviter(targetURI, options);
        this.inviter._referred = this.session;
        this.session._referral = this.inviter;
        return this.inviter;
    }
}


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SIPExtension": () => (/* binding */ SIPExtension),
/* harmony export */   "UserAgentRegisteredOptionTags": () => (/* binding */ UserAgentRegisteredOptionTags)
/* harmony export */ });
/**
 * SIP extension support level.
 * @public
 */
var SIPExtension;
(function (SIPExtension) {
    SIPExtension["Required"] = "Required";
    SIPExtension["Supported"] = "Supported";
    SIPExtension["Unsupported"] = "Unsupported";
})(SIPExtension || (SIPExtension = {}));
/**
 * SIP Option Tags
 * @remarks
 * http://www.iana.org/assignments/sip-parameters/sip-parameters.xhtml#sip-parameters-4
 * @public
 */
const UserAgentRegisteredOptionTags = {
    "100rel": true,
    "199": true,
    answermode: true,
    "early-session": true,
    eventlist: true,
    explicitsub: true,
    "from-change": true,
    "geolocation-http": true,
    "geolocation-sip": true,
    gin: true,
    gruu: true,
    histinfo: true,
    ice: true,
    join: true,
    "multiple-refer": true,
    norefersub: true,
    nosub: true,
    outbound: true,
    path: true,
    policy: true,
    precondition: true,
    pref: true,
    privacy: true,
    "recipient-list-invite": true,
    "recipient-list-message": true,
    "recipient-list-subscribe": true,
    replaces: true,
    "resource-priority": true,
    "sdp-anat": true,
    "sec-agree": true,
    tdialog: true,
    timer: true,
    uui: true // RFC 7433
};


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionStateError": () => (/* binding */ TransactionStateError)
/* harmony export */ });
/* harmony import */ var _exception__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/**
 * Indicates that the operation could not be completed given the current transaction state.
 * @public
 */
class TransactionStateError extends _exception__WEBPACK_IMPORTED_MODULE_0__.Exception {
    constructor(message) {
        super(message ? message : "Transaction state error.");
    }
}


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Timers": () => (/* binding */ Timers)
/* harmony export */ });
const T1 = 500;
const T2 = 4000;
const T4 = 5000;
/**
 * Timers.
 * @public
 */
const Timers = {
    T1,
    T2,
    T4,
    TIMER_B: 64 * T1,
    TIMER_D: 0 * T1,
    TIMER_F: 64 * T1,
    TIMER_H: 64 * T1,
    TIMER_I: 0 * T4,
    TIMER_J: 0 * T1,
    TIMER_K: 0 * T4,
    TIMER_L: 64 * T1,
    TIMER_M: 64 * T1,
    TIMER_N: 64 * T1,
    PROVISIONAL_RESPONSE_INTERVAL: 60000 // See RFC 3261 Section 13.3.1.1
};


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Inviter": () => (/* binding */ Inviter)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30);
/* harmony import */ var _core_messages_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _session_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var _user_agent_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);





/**
 * An inviter offers to establish a {@link Session} (outgoing INVITE).
 * @public
 */
class Inviter extends _session__WEBPACK_IMPORTED_MODULE_0__.Session {
    /**
     * Constructs a new instance of the `Inviter` class.
     * @param userAgent - User agent. See {@link UserAgent} for details.
     * @param targetURI - Request URI identifying the target of the message.
     * @param options - Options bucket. See {@link InviterOptions} for details.
     */
    constructor(userAgent, targetURI, options = {}) {
        super(userAgent, options);
        /** True if dispose() has been called. */
        this.disposed = false;
        /** True if early media use is enabled. */
        this.earlyMedia = false;
        /** The early media session description handlers. */
        this.earlyMediaSessionDescriptionHandlers = new Map();
        /** True if cancel() was called. */
        this.isCanceled = false;
        /** True if initial INVITE without SDP. */
        this.inviteWithoutSdp = false;
        this.logger = userAgent.getLogger("sip.Inviter");
        // Early media
        this.earlyMedia = options.earlyMedia !== undefined ? options.earlyMedia : this.earlyMedia;
        // From tag
        this.fromTag = (0,_core_messages_utils__WEBPACK_IMPORTED_MODULE_1__.newTag)();
        // Invite without SDP
        this.inviteWithoutSdp = options.inviteWithoutSdp !== undefined ? options.inviteWithoutSdp : this.inviteWithoutSdp;
        // Inviter options (could do better copying these options)
        const inviterOptions = Object.assign({}, options);
        inviterOptions.params = Object.assign({}, options.params);
        // Anonymous call
        const anonymous = options.anonymous || false;
        // Contact
        const contact = userAgent.contact.toString({
            anonymous,
            // Do not add ;ob in initial forming dialog requests if the
            // registration over the current connection got a GRUU URI.
            outbound: anonymous ? !userAgent.contact.tempGruu : !userAgent.contact.pubGruu
        });
        // FIXME: TODO: We should not be parsing URIs here as if it fails we have to throw an exception
        // which is not something we want our constructor to do. URIs should be passed in as params.
        // URIs
        if (anonymous && userAgent.configuration.uri) {
            inviterOptions.params.fromDisplayName = "Anonymous";
            inviterOptions.params.fromUri = "sip:anonymous@anonymous.invalid";
        }
        let fromURI = userAgent.userAgentCore.configuration.aor;
        if (inviterOptions.params.fromUri) {
            fromURI =
                typeof inviterOptions.params.fromUri === "string"
                    ? _core__WEBPACK_IMPORTED_MODULE_2__.Grammar.URIParse(inviterOptions.params.fromUri)
                    : inviterOptions.params.fromUri;
        }
        if (!fromURI) {
            throw new TypeError("Invalid from URI: " + inviterOptions.params.fromUri);
        }
        let toURI = targetURI;
        if (inviterOptions.params.toUri) {
            toURI =
                typeof inviterOptions.params.toUri === "string"
                    ? _core__WEBPACK_IMPORTED_MODULE_2__.Grammar.URIParse(inviterOptions.params.toUri)
                    : inviterOptions.params.toUri;
        }
        if (!toURI) {
            throw new TypeError("Invalid to URI: " + inviterOptions.params.toUri);
        }
        // Params
        const messageOptions = Object.assign({}, inviterOptions.params);
        messageOptions.fromTag = this.fromTag;
        // Extra headers
        const extraHeaders = (inviterOptions.extraHeaders || []).slice();
        if (anonymous && userAgent.configuration.uri) {
            extraHeaders.push("P-Preferred-Identity: " + userAgent.configuration.uri.toString());
            extraHeaders.push("Privacy: id");
        }
        extraHeaders.push("Contact: " + contact);
        extraHeaders.push("Allow: " + ["ACK", "CANCEL", "INVITE", "MESSAGE", "BYE", "OPTIONS", "INFO", "NOTIFY", "REFER"].toString());
        if (userAgent.configuration.sipExtension100rel === _user_agent_options__WEBPACK_IMPORTED_MODULE_3__.SIPExtension.Required) {
            extraHeaders.push("Require: 100rel");
        }
        if (userAgent.configuration.sipExtensionReplaces === _user_agent_options__WEBPACK_IMPORTED_MODULE_3__.SIPExtension.Required) {
            extraHeaders.push("Require: replaces");
        }
        inviterOptions.extraHeaders = extraHeaders;
        // Body
        const body = undefined;
        // Make initial outgoing request message
        this.outgoingRequestMessage = userAgent.userAgentCore.makeOutgoingRequestMessage(_core__WEBPACK_IMPORTED_MODULE_4__.C.INVITE, targetURI, fromURI, toURI, messageOptions, extraHeaders, body);
        // Session parent properties
        this._contact = contact;
        this._referralInviterOptions = inviterOptions;
        this._renderbody = options.renderbody;
        this._rendertype = options.rendertype;
        // Modifiers and options for initial INVITE transaction
        if (options.sessionDescriptionHandlerModifiers) {
            this.sessionDescriptionHandlerModifiers = options.sessionDescriptionHandlerModifiers;
        }
        if (options.sessionDescriptionHandlerOptions) {
            this.sessionDescriptionHandlerOptions = options.sessionDescriptionHandlerOptions;
        }
        // Modifiers and options for re-INVITE transactions
        if (options.sessionDescriptionHandlerModifiersReInvite) {
            this.sessionDescriptionHandlerModifiersReInvite = options.sessionDescriptionHandlerModifiersReInvite;
        }
        if (options.sessionDescriptionHandlerOptionsReInvite) {
            this.sessionDescriptionHandlerOptionsReInvite = options.sessionDescriptionHandlerOptionsReInvite;
        }
        // Identifier
        this._id = this.outgoingRequestMessage.callId + this.fromTag;
        // Add to the user agent's session collection.
        this.userAgent._sessions[this._id] = this;
    }
    /**
     * Destructor.
     */
    dispose() {
        // Only run through this once. It can and does get called multiple times
        // depending on the what the sessions state is when first called.
        // For example, if called when "establishing" it will be called again
        // at least once when the session transitions to "terminated".
        // Regardless, running through this more than once is pointless.
        if (this.disposed) {
            return Promise.resolve();
        }
        this.disposed = true;
        // Dispose of early dialog media
        this.disposeEarlyMedia();
        // If the final response for the initial INVITE not yet been received, cancel it
        switch (this.state) {
            case _session_state__WEBPACK_IMPORTED_MODULE_5__.SessionState.Initial:
                return this.cancel().then(() => super.dispose());
            case _session_state__WEBPACK_IMPORTED_MODULE_5__.SessionState.Establishing:
                return this.cancel().then(() => super.dispose());
            case _session_state__WEBPACK_IMPORTED_MODULE_5__.SessionState.Established:
                return super.dispose();
            case _session_state__WEBPACK_IMPORTED_MODULE_5__.SessionState.Terminating:
                return super.dispose();
            case _session_state__WEBPACK_IMPORTED_MODULE_5__.SessionState.Terminated:
                return super.dispose();
            default:
                throw new Error("Unknown state.");
        }
    }
    /**
     * Initial outgoing INVITE request message body.
     */
    get body() {
        return this.outgoingRequestMessage.body;
    }
    /**
     * The identity of the local user.
     */
    get localIdentity() {
        return this.outgoingRequestMessage.from;
    }
    /**
     * The identity of the remote user.
     */
    get remoteIdentity() {
        return this.outgoingRequestMessage.to;
    }
    /**
     * Initial outgoing INVITE request message.
     */
    get request() {
        return this.outgoingRequestMessage;
    }
    /**
     * Cancels the INVITE request.
     *
     * @remarks
     * Sends a CANCEL request.
     * Resolves once the response sent, otherwise rejects.
     *
     * After sending a CANCEL request the expectation is that a 487 final response
     * will be received for the INVITE. However a 200 final response to the INVITE
     * may nonetheless arrive (it's a race between the CANCEL reaching the UAS before
     * the UAS sends a 200) in which case an ACK & BYE will be sent. The net effect
     * is that this method will terminate the session regardless of the race.
     * @param options - Options bucket.
     */
    cancel(options = {}) {
        this.logger.log("Inviter.cancel");
        // validate state
        if (this.state !== _session_state__WEBPACK_IMPORTED_MODULE_5__.SessionState.Initial && this.state !== _session_state__WEBPACK_IMPORTED_MODULE_5__.SessionState.Establishing) {
            const error = new Error(`Invalid session state ${this.state}`);
            this.logger.error(error.message);
            return Promise.reject(error);
        }
        // flag canceled
        this.isCanceled = true;
        // transition state
        this.stateTransition(_session_state__WEBPACK_IMPORTED_MODULE_5__.SessionState.Terminating);
        // helper function
        function getCancelReason(code, reason) {
            if ((code && code < 200) || code > 699) {
                throw new TypeError("Invalid statusCode: " + code);
            }
            else if (code) {
                const cause = code;
                const text = (0,_core_messages_utils__WEBPACK_IMPORTED_MODULE_1__.getReasonPhrase)(code) || reason;
                return "SIP;cause=" + cause + ';text="' + text + '"';
            }
        }
        if (this.outgoingInviteRequest) {
            // the CANCEL may not be respected by peer(s), so don't transition to terminated
            let cancelReason;
            if (options.statusCode && options.reasonPhrase) {
                cancelReason = getCancelReason(options.statusCode, options.reasonPhrase);
            }
            this.outgoingInviteRequest.cancel(cancelReason, options);
        }
        else {
            this.logger.warn("Canceled session before INVITE was sent");
            this.stateTransition(_session_state__WEBPACK_IMPORTED_MODULE_5__.SessionState.Terminated);
        }
        return Promise.resolve();
    }
    /**
     * Sends the INVITE request.
     *
     * @remarks
     * TLDR...
     *  1) Only one offer/answer exchange permitted during initial INVITE.
     *  2) No "early media" if the initial offer is in an INVITE (default behavior).
     *  3) If "early media" and the initial offer is in an INVITE, no INVITE forking.
     *
     * 1) Only one offer/answer exchange permitted during initial INVITE.
     *
     * Our implementation replaces the following bullet point...
     *
     * o  After having sent or received an answer to the first offer, the
     *    UAC MAY generate subsequent offers in requests based on rules
     *    specified for that method, but only if it has received answers
     *    to any previous offers, and has not sent any offers to which it
     *    hasn't gotten an answer.
     * https://tools.ietf.org/html/rfc3261#section-13.2.1
     *
     * ...with...
     *
     * o  After having sent or received an answer to the first offer, the
     *    UAC MUST NOT generate subsequent offers in requests based on rules
     *    specified for that method.
     *
     * ...which in combination with this bullet point...
     *
     * o  Once the UAS has sent or received an answer to the initial
     *    offer, it MUST NOT generate subsequent offers in any responses
     *    to the initial INVITE.  This means that a UAS based on this
     *    specification alone can never generate subsequent offers until
     *    completion of the initial transaction.
     * https://tools.ietf.org/html/rfc3261#section-13.2.1
     *
     * ...ensures that EXACTLY ONE offer/answer exchange will occur
     * during an initial out of dialog INVITE request made by our UAC.
     *
     *
     * 2) No "early media" if the initial offer is in an INVITE (default behavior).
     *
     * While our implementation adheres to the following bullet point...
     *
     * o  If the initial offer is in an INVITE, the answer MUST be in a
     *    reliable non-failure message from UAS back to UAC which is
     *    correlated to that INVITE.  For this specification, that is
     *    only the final 2xx response to that INVITE.  That same exact
     *    answer MAY also be placed in any provisional responses sent
     *    prior to the answer.  The UAC MUST treat the first session
     *    description it receives as the answer, and MUST ignore any
     *    session descriptions in subsequent responses to the initial
     *    INVITE.
     * https://tools.ietf.org/html/rfc3261#section-13.2.1
     *
     * We have made the following implementation decision with regard to early media...
     *
     * o  If the initial offer is in the INVITE, the answer from the
     *    UAS back to the UAC will establish a media session only
     *    only after the final 2xx response to that INVITE is received.
     *
     * The reason for this decision is rooted in a restriction currently
     * inherent in WebRTC. Specifically, while a SIP INVITE request with an
     * initial offer may fork resulting in more than one provisional answer,
     * there is currently no easy/good way to to "fork" an offer generated
     * by a peer connection. In particular, a WebRTC offer currently may only
     * be matched with one answer and we have no good way to know which
     * "provisional answer" is going to be the "final answer". So we have
     * decided to punt and not create any "early media" sessions in this case.
     *
     * The upshot is that if you want "early media", you must not put the
     * initial offer in the INVITE. Instead, force the UAS to provide the
     * initial offer by sending an INVITE without an offer. In the WebRTC
     * case this allows us to create a unique peer connection with a unique
     * answer for every provisional offer with "early media" on all of them.
     *
     *
     * 3) If "early media" and the initial offer is in an INVITE, no INVITE forking.
     *
     * The default behavior may be altered and "early media" utilized if the
     * initial offer is in the an INVITE by setting the `earlyMedia` options.
     * However in that case the INVITE request MUST NOT fork. This allows for
     * "early media" in environments where the forking behavior of the SIP
     * servers being utilized is configured to disallow forking.
     */
    invite(options = {}) {
        this.logger.log("Inviter.invite");
        // validate state
        if (this.state !== _session_state__WEBPACK_IMPORTED_MODULE_5__.SessionState.Initial) {
            // re-invite
            return super.invite(options);
        }
        // Modifiers and options for initial INVITE transaction
        if (options.sessionDescriptionHandlerModifiers) {
            this.sessionDescriptionHandlerModifiers = options.sessionDescriptionHandlerModifiers;
        }
        if (options.sessionDescriptionHandlerOptions) {
            this.sessionDescriptionHandlerOptions = options.sessionDescriptionHandlerOptions;
        }
        // just send an INVITE with no sdp...
        if (options.withoutSdp || this.inviteWithoutSdp) {
            if (this._renderbody && this._rendertype) {
                this.outgoingRequestMessage.body = { contentType: this._rendertype, body: this._renderbody };
            }
            // transition state
            this.stateTransition(_session_state__WEBPACK_IMPORTED_MODULE_5__.SessionState.Establishing);
            return Promise.resolve(this.sendInvite(options));
        }
        // get an offer and send it in an INVITE
        const offerOptions = {
            sessionDescriptionHandlerModifiers: this.sessionDescriptionHandlerModifiers,
            sessionDescriptionHandlerOptions: this.sessionDescriptionHandlerOptions
        };
        return this.getOffer(offerOptions)
            .then((body) => {
            this.outgoingRequestMessage.body = { body: body.content, contentType: body.contentType };
            // transition state
            this.stateTransition(_session_state__WEBPACK_IMPORTED_MODULE_5__.SessionState.Establishing);
            return this.sendInvite(options);
        })
            .catch((error) => {
            this.logger.log(error.message);
            // apply fix from https://github.com/onsip/SIP.js/commit/f06939c119149a3e00ad8acf69f37360d3331a62
            // It's possible we are already terminated,
            // so don't throw trying to transition again.
            if (this.state !== _session_state__WEBPACK_IMPORTED_MODULE_5__.SessionState.Terminated) {
                this.stateTransition(_session_state__WEBPACK_IMPORTED_MODULE_5__.SessionState.Terminated);
            }
            throw error;
        });
    }
    /**
     * 13.2.1 Creating the Initial INVITE
     *
     * Since the initial INVITE represents a request outside of a dialog,
     * its construction follows the procedures of Section 8.1.1.  Additional
     * processing is required for the specific case of INVITE.
     *
     * An Allow header field (Section 20.5) SHOULD be present in the INVITE.
     * It indicates what methods can be invoked within a dialog, on the UA
     * sending the INVITE, for the duration of the dialog.  For example, a
     * UA capable of receiving INFO requests within a dialog [34] SHOULD
     * include an Allow header field listing the INFO method.
     *
     * A Supported header field (Section 20.37) SHOULD be present in the
     * IN