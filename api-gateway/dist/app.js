"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const trips_1 = require("./services/trips");
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)());
exports.app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
exports.app.use('/api', trips_1.router);
//# sourceMappingURL=app.js.map