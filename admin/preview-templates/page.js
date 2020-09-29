import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for a Page
const Page = ({ entry, widgetFor, getAsset }) => {
  const data = entry.get('data').toJS();
  const { title, page_layout } = data;

  return <ProductPageTemplate
    title={title}
    pageLayout={page_layout}
  />;
}

export default Page;


