import JsonLd from "./JsonLd";
import { webPageSchema, type PageType } from "../../libraries/schema/webPageSchema";

/** Page-level structured data (About, Contact, Collection...). */
export default function PageSchema({ type, title, description, path }: { type: PageType; title: string; description: string; path: string }) {
  return <JsonLd data={webPageSchema(type, title, description, path)} />;
}
