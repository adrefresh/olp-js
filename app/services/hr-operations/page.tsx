import type { Metadata } from "next";
import "../page.css";
import "../category.css";
import CategoryPage from "../../../comps/services-comps/CategoryPage";
import { CATEGORIES } from "../../../comps/shared/servicesData";

export const metadata: Metadata = {
  title: "HR Operations — OpsLogic",
  description: "EOR, payroll and recruitment & staffing — hire, employ and pay your people with one partner.",
};

export default function Page() {
  return <CategoryPage cat={CATEGORIES[0]} />;
}
