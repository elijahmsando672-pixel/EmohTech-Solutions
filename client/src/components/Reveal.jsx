import useReveal from "../hooks/useReveal.js";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}) {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={className} style={{ transitionDelay: delay ? `${delay}ms` : undefined }}>
      {children}
    </Tag>
  );
}