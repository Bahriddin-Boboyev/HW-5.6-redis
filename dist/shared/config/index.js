"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    db: {
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10) || 5432,
        name: process.env.DB_NAME,
    },
    jwt: {
        secret: process.env.JWT_SECRET,
    },
});
//# sourceMappingURL=index.js.map