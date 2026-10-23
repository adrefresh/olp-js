/** Renders trusted inline HTML from the content file (bold text, placeholder spans). */
export default function H({ html, as: T = "span", className }: { html: string; as?: "span" | "p" | "div" | "h3"; className?: string }) {
  return <T className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
