import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for a Page
const Page = ({ entry, widgetFor, getAsset }) => {
  const data = entry.get('data').toJS();
  const { body_updated, title } = data;

  return <ProductPageTemplate
    title={title}
    body_updated={body_updated}
    description={description}
    intro={intro.blurbs}
    main={main}
    fullImage={full_image}
    testimonials={testimonials}
    pricing={pricing}
  />;
}

export default Page;