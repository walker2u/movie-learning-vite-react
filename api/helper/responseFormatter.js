export const responseFormatter = (success, statusCode, message, data) => ({
    success: success || false,
    statusCode: statusCode || 500,
    message: message || "",
    data: data || {},
});