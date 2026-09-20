function FieldLabel({ htmlFor, children, required }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200">
      {children}
      {required && <span className="ml-0.5 text-rose-500" aria-hidden="true">*</span>}
    </label>
  );
}

function baseClass(error) {
  return `w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 dark:bg-slate-950 dark:text-white ${
    error
      ? "border-rose-400 focus:border-rose-500 focus:ring-rose-500/20"
      : "border-slate-300 focus:border-brand-500 focus:ring-brand-500/20 dark:border-slate-700 dark:focus:border-accent-400"
  }`;
}

export function FieldError({ id, message }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-xs font-medium text-rose-500" role="alert">
      {message}
    </p>
  );
}

export function TextInput({ label, id, required, error, className = "", ...props }) {
  return (
    <div className={className}>
      <FieldLabel htmlFor={id} required={required}>{label}</FieldLabel>
      <input id={id} required={required} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined} className={baseClass(error)} {...props} />
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}

export function TextArea({ label, id, required, error, className = "", rows = 5, ...props }) {
  return (
    <div className={className}>
      <FieldLabel htmlFor={id} required={required}>{label}</FieldLabel>
      <textarea id={id} rows={rows} required={required} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined} className={`${baseClass(error)} resize-y`} {...props} />
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}

export function Select({ label, id, required, error, children, className = "", ...props }) {
  return (
    <div className={className}>
      <FieldLabel htmlFor={id} required={required}>{label}</FieldLabel>
      <select id={id} required={required} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined} className={baseClass(error)} {...props}>
        {children}
      </select>
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}