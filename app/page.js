import FeatureStrip from "../components/FeatureStrip";
import PhotoShowcase from "../components/PhotoShowcase";
import { homeFeatureStrip, splitLeadSection } from "../lib/page-frames";
import { getSourcePage } from "../lib/source-pages";

export async function generateMetadata() {
  const page = await getSourcePage("");

  return {
    title: page.title,
    description: page.description
  };
}

export default async function HomePage() {
  const page = await getSourcePage("");
  const { lead, remainder } = splitLeadSection(page.main);

  return (
    <>
      <div className="source-page source-page--home source-page--lead" dangerouslySetInnerHTML={{ __html: lead }} />
      <FeatureStrip {...homeFeatureStrip} className="feature-strip--home" />
      <PhotoShowcase />
      <div
        className="source-page source-page--home source-page--body"
        dangerouslySetInnerHTML={{ __html: remainder }}
      />
    </>
  );
}
