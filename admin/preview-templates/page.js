import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for a Page
const Page = ({ entry, widgetFor, getAsset }) => {
  const data = entry.get('data').toJS();
  const { body_updated, title } = data;

  return <ProductPageTemplate
    title={title}
    bodyUpdated={body_updated}
  />;
}

export default Page;