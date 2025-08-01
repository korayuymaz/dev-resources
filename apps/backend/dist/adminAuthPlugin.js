"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminAuthPlugin = void 0;
exports.adminAuthPlugin = {
    async requestDidStart() {
        return {
            async didResolveOperation(ctx) {
                var _a, _b, _c;
                const { request } = ctx;
                const contextValue = (_c = (_a = ctx.contextValue) !== null && _a !== void 0 ? _a : (_b = ctx.context) === null || _b === void 0 ? void 0 : _b.contextValue) !== null && _c !== void 0 ? _c : ctx.context;
                // Sadece mutation'larda kontrol yap
                if (request.query && request.query.includes("mutation")) {
                    if (!contextValue.isAdmin) {
                        throw new Error("Unauthorized");
                    }
                }
            },
        };
    },
};
