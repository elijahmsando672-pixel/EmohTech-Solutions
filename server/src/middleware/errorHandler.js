/** Central error handler — return consistent JSON, never leak stack traces. */
export function errorHandler(err, req, res, next) {
  console.error(`[error] ${req.method} ${req.url}:`, err.message);
  if (res.headersSent) return next(err);
  return res.status(500).json({ error: "Something went wrong on our side. Please try again." });
}

export function notFound(_req, res) {
  return res.status(404).json({ error: "Not found." });
}

export default errorHandler;