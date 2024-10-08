new gridjs.Grid({
  columns: ["Key Functional Requirements", "Details / Rationale"],
  data: [
    ["Controllable and known light intensities", "The device must provide controlled and variable light intensities to assess the eye’s response and discomfort levels at different intensities. This will help determine the threshold at which light triggers photophobia."],
    ["Varying features of light stimulus ", "The light stimulus needs to be controlled to vary the frequency and wavelengths (colours)"],
    ["Real-time Data Analysis:", "The device should be capable of detecting and measuring physiological responses (e.g., pupil dilation, Blinking frequency) "],
    ["Mobile App Integration", "Integrating the device with a mobile app will allow for easy data collection, storage, and visualization. The app will provide an interface for ophthalmologists control the different light stimulus they want to emit into the patients eye "],
    ["Ease of Use:", "The device must be user-friendly for both patients and healthcare providers, with intuitive controls and minimal setup required "],
    ['Safety Features','Since the device will emit light directly into patients’ eyes. The device must not exceed certain intensity safety levels'],
  ],
}).render(document.getElementById("table-1"));

class TableComponent extends HTMLElement {
  static get observedAttributes() {
    return ["subtitle"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, _, newValue) {
    this[name] = newValue;
  }

  render() {
    const div = document.createElement("div");
    div.innerHTML = `
    <slot></slot>
    <sub>${this.subtitle}</sub>
    <style>
      :host {
        display: block;
        text-align: center;
      }

      sub {
        font-size: 1rem;
        font-style: italic;
      }
    </style>
  `;

    this.shadowRoot.appendChild(div);
  }
}

customElements.define("table-component", TableComponent);
