/** Legacy URL, kept so old links keep working. */
export default function Page() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/services/it-services/" />
      <link rel="canonical" href="https://www.opslogic.team/services/it-services" />
      <p style={{ padding: "2rem" }}>
        This page has moved. <a href="/services/it-services/">Continue to the new page</a>.
      </p>
    </>
  );
}
