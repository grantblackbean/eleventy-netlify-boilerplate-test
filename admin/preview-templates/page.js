import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for a Page
const Page = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <main>
        <h1>${entry.getIn(["data", "title"], null)}</h1>
        <p>${entry.getIn(["data", "page_layout"], null)}</p>
      </main>
    `;
  }
});

export default Page;