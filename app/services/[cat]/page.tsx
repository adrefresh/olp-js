import type { Metadata } from "next";
import "../page.css";
import { notFound } from "next/navigation";
import CategoryPage from "../../../components/services/CategoryPage";
import { CATS } from "../../../lib/services";

export const dynamicParams = false;
export function generateStaticParams() {
  return CATS.map((c) => ({ cat: c.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ cat: string }> }): Promise<Metadata> {
  const { cat } = await params;
  const c = CATS.find((x) => x.slug === cat);
  return c ? { title: `${c.title} — OpsLogic`, description: c.p } : {};
}
export default async function Page({ params }: { params: Promise<{ cat: string }> }) {
  const { cat } = await params;
  if (!CATS.find((x) => x.slug === cat)) notFound();
  return <CategoryPage slug={cat} />;
}
