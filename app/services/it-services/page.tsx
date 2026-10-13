import type { Metadata } from "next";
import "../page.css";
import "../category.css";
import CategoryPage from "../../../comps/services-comps/CategoryPage";
import { CATEGORIES } from "../../../comps/shared/servicesData";

export const metadata: Metadata = {
  title: "IT Services — OpsLogic",
  description: "SAP services and service migrations that keep your technology aligned with the business.",
};

export default function Page() {
  return <CategoryPage cat={CATEGORIES[2]} />;
}
