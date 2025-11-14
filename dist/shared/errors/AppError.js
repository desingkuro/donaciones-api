export class AppError extends Error {
    statusCode;
    details;
    constructor(message, statusCode = 400, details = undefined) {
        super(message);
        this.name = 'AppError';
        this.statusCode = statusCode;
        this.details = details;
    }
}
//# sourceMappingURL=AppError.js.map