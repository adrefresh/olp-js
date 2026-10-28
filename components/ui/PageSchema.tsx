import JsonLd from "./JsonLd";
import { pageSchema, type PageType } from "../../lib/seo";

/** Page-level structured data (About, Contact, Collection...). */
export default function PageSchema({ type, title, description, path }: { type: PageType; title: string; description: string; path: string }) {
  return <JsonLd data={pageSchema(type, title, description, path)} />;
}
