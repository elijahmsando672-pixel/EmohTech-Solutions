export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && (
        <p className="eyebrow">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">{description}</p>}
    </div>
  );
}