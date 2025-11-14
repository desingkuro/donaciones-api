import { AppError } from '../errors/AppError.js';
export function errorHandler(err, req, res, next) {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            error: err.name,
            message: err.message,
            details: err.details ?? null,
        });
    }
    console.error(err);
    return res.status(500).json({ error: 'InternalServerError', message: 'Unexpected error' });
}
//# sourceMappingURL=errorHandler.js.map