import React from 'react';
import { Header03 } from "../../src/components/Header/header";
import { SegundaHeader02 } from "../../src/components/AnotherHeader/anotherHeader";
import Footer from "../../src/components/Footer/Footer";

function TemplateSecretario({ children }) {
  return (
    <>
      <header>
        < Header03 />
        < SegundaHeader02 />
      </header>

      <main>
        {children}
      </main>

      <footer> < Footer /> </footer>
    </>
  );
}

export default TemplateSecretario
