import FeatureStrip from "../../components/FeatureStrip";
import { notFound } from "next/navigation";
import { routeFeatureStrips, splitLeadSection } from "../../lib/page-frames";
import { getSourcePage, staticRouteKeys } from "../../lib/source-pages";

export function generateStaticParams() {
  return staticRouteKeys.map((routeKey) => ({
    slug: routeKey.split("/")
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const routeKey = slug.join("/");
  const page = await getSourcePage(routeKey);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description
  };
}

export default async function StaticSourcePage({ params }) {
  const { slug } = await params;
  const routeKey = slug.join("/");
  const page = await getSourcePage(routeKey);

  if (!page) {
    notFound();
  }

  const pageClassName = `source-page source-page--${routeKey.replace(/[^a-z0-9-]/gi, "-")}`;
  const { lead, remainder } = splitLeadSection(page.main);
  const featureStrip = routeFeatureStrips[routeKey];

  return (
    <>
      <div className={`${pageClassName} source-page--lead`} dangerouslySetInnerHTML={{ __html: lead }} />
      {featureStrip ? <FeatureStrip {...featureStrip} className={`feature-strip--${routeKey}`} /> : null}
      <div className={`${pageClassName} source-page--body`} dangerouslySetInnerHTML={{ __html: remainder }} />
    </>
  );
}
