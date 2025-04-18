import React from "react";
import Container from "../container/Container";
import Section, { SectionProps } from "../section/Section";
import Mono from "../text/Mono";
import Paragraph from "../text/Paragraph";
import ParagraphsContainer from "../text/ParagraphsContainer";
import scss from "./footer.module.scss";
import Logo from "../logo/Logo";
import ScopeAnimation from "../text/ScopeAnimation";

export default function Footer(props: React.PropsWithoutRef<SectionProps>) {
  return (
    <Section
      sector={props.sector}
      stage={props.stage}
      className={scss.footerBackground}
      unsetMinHeight
    >
      <ScopeAnimation>
        <footer className={scss.footer}>
          <Logo />
          <ParagraphsContainer>
            <Paragraph>Jules Girold • 2025</Paragraph>
            <Paragraph level="tertiary">
              Conçu avec passion et (anciennement) déployé automatiquement à
              partir de mon cluster Kubernetes auto-hébergé.
            </Paragraph>
            <Paragraph level="tertiary" disableLineSplit>
              Build version <Mono>v1.5.0-live</Mono>
            </Paragraph>
          </ParagraphsContainer>
        </footer>
      </ScopeAnimation>
    </Section>
  );
}
