import { CoreConcept } from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem, index) => (
          <CoreConcept key={index} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}

export default CoreConcepts;