const html = `
    <nav id="my-navbar">
        <a href="https://timhuebener.com">
            <h1>timhuebener</h1>
        </a>
    </nav>`
customElements.define(
    "my-navbar",
    class extends HTMLElement {
        constructor() {
            super();
            const template = document.createElement('template');
            template.innerHTML = html;

            const shadowRoot = this.attachShadow({ mode: "open" });
            shadowRoot.appendChild(template.content.cloneNode(true));
        }
    },
);
