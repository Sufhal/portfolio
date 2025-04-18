import { Vector3 } from "three";
import Section from "#/components/section/Section";
import Title from "#/components/text/Title";
import Paragraph from "#/components/text/Paragraph";
import ParagraphsContainer from "#/components/text/ParagraphsContainer";
import LargeLink from "#/components/buttons/LargeLink";
import List from "../list/List";
import ListEntry from "../list/ListEntry";
import ScopeAnimation from "../text/ScopeAnimation";

export default function ContactPage() {
  return (
    <>
      <Section
        sector={0}
        stage={{
          cameraPosition: new Vector3(
            31.611104486612454,
            -58.497231197086705,
            70.93060082759385
          ),
          orbitTarget: new Vector3(
            -15.352938941998566,
            19.663967949762057,
            -16.11928492028761
          ),
          isLocked: false,
          engineSpeed: 0.5,
          splitFactor: 0,
          shakeStrength: 0,
          light: 1,
          opacity: 0.5,
        }}
      >
        <ScopeAnimation>
          <Title>Contact</Title>
          <ParagraphsContainer>
            <Paragraph>
              Choisissez votre canal de communication préféré.
            </Paragraph>
          </ParagraphsContainer>
          <List>
            <ListEntry>
              <LargeLink href="https://www.linkedin.com/in/jules-girold-b03428b0">
                LinkedIn
              </LargeLink>
            </ListEntry>
            <ListEntry>
              <LargeLink href="https://twitter.com/_Sufhal">Twitter</LargeLink>
            </ListEntry>
            <ListEntry>
              <LargeLink href="https://discord.com/users/354234490572505088">
                Discord
              </LargeLink>
            </ListEntry>
            <ListEntry>
              <LargeLink href="https://github.com/Sufhal">Github</LargeLink>
            </ListEntry>
            <ListEntry>
              <LargeLink href="https://gitlab.com/_sufhal">GitLab</LargeLink>
            </ListEntry>
            <ListEntry>
              <LargeLink href="https://github.com/Sufhal/portfolio">
                Sources du Portfolio
              </LargeLink>
            </ListEntry>
          </List>
        </ScopeAnimation>
      </Section>
    </>
  );
}
