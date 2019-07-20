"use strict";
exports.__esModule = true;
var __timeid_start__ = Date.now();
exports.timeid = function () {
    return String(Date.now() - __timeid_start__) + String(Math.random());
};
exports["default"] = exports.timeid;
