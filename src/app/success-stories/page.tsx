import type { Metadata } from "next";
import "./page.css";
import SharedHeader from "../../components/shared/SharedHeader";
import SharedFooter from "../../components/shared/SharedFooter";
import ScriptRunner from "../../components/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../components/shared/siteScript";
import Hero from "../../components/success-stories-comps/Hero";
import CaseFiles from "../../components/success-stories-comps/CaseFiles";
import CommonThread from "../../components/success-stories-comps/CommonThread";
import FinalCta from "../../components/success-stories-comps/FinalCta";

export const metadata: Metadata = {
  title: "Success Stories — OpsLogic",
  description: "OpsLogic success stories — proof, not promises, from growth-minded teams.",
};

export default function SuccessStoriesPage() {
  return (
  <>
    <SharedHeader active="success-stories" />
    <main>
      <Hero />
      <CaseFiles />
      <CommonThread />
      <FinalCta />
    </main>
    <SharedFooter showEmail={false} />
    <ScriptRunner script={SITE_SCRIPT} />
  </>

  );
}
