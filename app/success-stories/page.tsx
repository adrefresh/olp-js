import type { Metadata } from "next";
import "./page.css";
import SharedHeader from "../../comps/shared/SharedHeader";
import SharedFooter from "../../comps/shared/SharedFooter";
import ScriptRunner from "../../comps/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../comps/shared/siteScript";
import Hero from "../../comps/success-stories-comps/Hero";
import CaseFiles from "../../comps/success-stories-comps/CaseFiles";
import CommonThread from "../../comps/success-stories-comps/CommonThread";
import FinalCta from "../../comps/success-stories-comps/FinalCta";

export const metadata: Metadata = {
  title: "Success Stories — OpsLogic",
  description:
    "OpsLogic success stories — proof, not promises, from growth-minded teams.",
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
