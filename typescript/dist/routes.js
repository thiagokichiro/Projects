"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var express_1 = require("express");
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(request, reponse) {
    var user = CreateUser_1.default({
        name: "Thiago Kichiro",
        email: "kichiro.88@gmail.com",
        password: "132456",
        techs: ["ReactJS", "Javascript", "HTML", { title: "Java", experience: 50 }],
    });
    console.log(user);
    return express_1.response.json({ message: "VAI CORINTHIANS" });
}
exports.helloWorld = helloWorld;
