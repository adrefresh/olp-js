import type { Metadata } from "next";
import "../page.css";
import "../category.css";
import CategoryPage from "../../../comps/services-comps/CategoryPage";
import { CATEGORIES } from "../../../comps/shared/servicesData";

export const metadata: Metadata = {
  title: "Business Operations — OpsLogic",
  description: "Business setup, process and workflow operations, and shared workspaces for growing businesses.",
};

export default function Page() {
  return <CategoryPage cat={CATEGORIES[1]} />;
}
