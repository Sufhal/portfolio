import { Vector3 } from "three";
import Section from "#/components/section/Section";
import Title from "#/components/text/Title";
import Paragraph from "#/components/text/Paragraph";
import ParagraphsContainer from "#/components/text/ParagraphsContainer";
import LargeLink from "#/components/buttons/LargeLink";
import Cards from "../cards/Cards";
import Card from "../cards/Card";
import DiscreteHeading from "../text/DiscreteHeading";
import List from "../list/List";
import ListEntry from "../list/ListEntry";
import Skill from "../text/Skill";
import ScopeAnimation from "../text/ScopeAnimation";

export default function SkillsPage() {
  return (
    <>
      <Section
        sector={0}
        stage={{
          cameraPosition: new Vector3(
            131.3588184123952,
            -155.6958228181702,
            247.22076187268226
          ),
          orbitTarget: new Vector3(
            -74.37613356981396,
            30.890182619309567,
            -26.068778178441153
          ),
          isLocked: false,
          engineSpeed: 0,
          splitFactor: 1,
          shakeStrength: 0,
          light: 1,
        }}
      >
        <ScopeAnimation>
          <Title>Compétences</Title>
          <Title type="subtitle">et technologies.</Title>
          <ParagraphsContainer>
            <Paragraph> </Paragraph>
            <List horizontal>
              <ListEntry>
                <DiscreteHeading noSpacing>Confirmé</DiscreteHeading>
                <Skill lv={3} />
              </ListEntry>
              <ListEntry>
                <DiscreteHeading noSpacing>Intermédiaire</DiscreteHeading>
                <Skill lv={2} />
              </ListEntry>
              <ListEntry>
                <DiscreteHeading noSpacing>Notions</DiscreteHeading>
                <Skill lv={1} />
              </ListEntry>
            </List>
          </ParagraphsContainer>
        </ScopeAnimation>
        <Cards>
          <Card noAnimation>
            <ScopeAnimation>
              <DiscreteHeading>Langages</DiscreteHeading>
              <List>
                <ListEntry>
                  <LargeLink href={"https://fr.wikipedia.org/wiki/HTML5"}>
                    HTML
                  </LargeLink>
                  <Skill lv={3} />
                </ListEntry>
                <ListEntry>
                  <LargeLink
                    href={
                      "https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade"
                    }
                  >
                    CSS
                  </LargeLink>
                  <Skill lv={3} />
                </ListEntry>
                <ListEntry>
                  <LargeLink
                    href={"https://fr.wikipedia.org/wiki/Sass_(langage)"}
                  >
                    SCSS
                  </LargeLink>
                  <Skill lv={2} />
                </ListEntry>
                <ListEntry>
                  <LargeLink href={"https://fr.wikipedia.org/wiki/TypeScript"}>
                    Typescript
                  </LargeLink>
                  <Skill lv={3} />
                </ListEntry>
                <ListEntry>
                  <LargeLink href={"https://fr.wikipedia.org/wiki/JavaScript"}>
                    Javascript
                  </LargeLink>
                  <Skill lv={3} />
                </ListEntry>
                <ListEntry>
                  <LargeLink
                    href={"https://fr.wikipedia.org/wiki/Rust_(langage)"}
                  >
                    Rust
                  </LargeLink>
                  <Skill lv={2} />
                </ListEntry>
                <ListEntry>
                  <LargeLink
                    href={
                      "https://fr.wikipedia.org/wiki/OpenGL_Shading_Language"
                    }
                  >
                    WGSL
                  </LargeLink>
                  <Skill lv={2} />
                </ListEntry>
                <ListEntry>
                  <LargeLink
                    href={
                      "https://fr.wikipedia.org/wiki/OpenGL_Shading_Language"
                    }
                  >
                    GLSL
                  </LargeLink>
                  <Skill lv={2} />
                </ListEntry>
                <ListEntry>
                  <LargeLink href={"https://fr.wikipedia.org/wiki/PHP"}>
                    PHP
                  </LargeLink>
                  <Skill lv={2} />
                </ListEntry>
                <ListEntry>
                  <LargeLink href={"https://fr.wikipedia.org/wiki/Lua"}>
                    Lua
                  </LargeLink>
                  <Skill lv={2} />
                </ListEntry>
                <ListEntry>
                  <LargeLink href={"https://fr.wikipedia.org/wiki/Brainfuck"}>
                    Brainfuck
                  </LargeLink>
                  <Skill lv={1} />
                </ListEntry>
              </List>
            </ScopeAnimation>
          </Card>
          <Card noAnimation>
            <ScopeAnimation>
              <DiscreteHeading>Frontend</DiscreteHeading>
              <List>
                <ListEntry>
                  <LargeLink href={"https://react.dev/"}>React</LargeLink>
                  <Skill lv={3} />
                </ListEntry>
                <ListEntry>
                  <LargeLink href={"https://nextjs.org/"}>Next</LargeLink>
                  <Skill lv={2} />
                </ListEntry>
                <ListEntry>
                  <LargeLink href={"https://www.solidjs.com/"}>Solid</LargeLink>
                  <Skill lv={3} />
                </ListEntry>
                <ListEntry>
                  <LargeLink href={"https://start.solidjs.com/"}>
                    Solidstart
                  </LargeLink>
                  <Skill lv={3} />
                </ListEntry>
                <ListEntry>
                  <LargeLink href={"https://lit.dev/"}>Lit</LargeLink>
                  <Skill lv={3} />
                </ListEntry>
                <ListEntry>
                  <LargeLink href={"https://v2.vuejs.org/"}>Vue</LargeLink>
                  <Skill lv={2} />
                </ListEntry>
                <ListEntry>
                  <LargeLink href={"https://threejs.org/"}>THREE</LargeLink>
                  <Skill lv={3} />
                </ListEntry>
                <ListEntry>
                  <LargeLink href={"https://animejs.com/"}>Anime</LargeLink>
                  <Skill lv={3} />
                </ListEntry>
                <ListEntry>
                  <LargeLink href={"https://www.electronjs.org/"}>
                    Electron
                  </LargeLink>
                  <Skill lv={2} />
                </ListEntry>
                <ListEntry>
                  <LargeLink href={"https://v2.tauri.app/fr/"}>Tauri</LargeLink>
                  <Skill lv={1} />
                </ListEntry>
              </List>
            </ScopeAnimation>
          </Card>
          <Card noAnimation>
            <ScopeAnimation>
              <DiscreteHeading>Backend</DiscreteHeading>
              <List>
                <ListEntry>
                  <LargeLink href={"https://nodejs.org/en"}>Node</LargeLink>
                  <Skill lv={3} />
                </ListEntry>
                <ListEntry>
                  <LargeLink href={"https://www.mongodb.com/fr-fr"}>
                    MongoDB
                  </LargeLink>
                  <Skill lv={3} />
                </ListEntry>
                <ListEntry>
                  <LargeLink href={"https://socket.io/"}>Socket.io</LargeLink>
                  <Skill lv={3} />
                </ListEntry>
                <ListEntry>
                  <LargeLink href={"https://adonisjs.com/"}>Adonis</LargeLink>
                  <Skill lv={3} />
                </ListEntry>
                <ListEntry>
                  <LargeLink href={"https://expressjs.com/fr/"}>
                    Express
                  </LargeLink>
                  <Skill lv={3} />
                </ListEntry>
                <ListEntry>
                  <LargeLink href={"https://github.com/tokio-rs/axum"}>
                    Axum
                  </LargeLink>
                  <Skill lv={3} />
                </ListEntry>
                <ListEntry>
                  <LargeLink href={"https://redis.io/"}>Redis</LargeLink>
                  <Skill lv={2} />
                </ListEntry>
                <ListEntry>
                  <LargeLink href={"https://www.mysql.com/fr/"}>
                    MySQL
                  </LargeLink>
                  <Skill lv={2} />
                </ListEntry>
                <ListEntry>
                  <LargeLink href={"https://www.postgresql.org/"}>
                    PostgresSQL
                  </LargeLink>
                  <Skill lv={2} />
                </ListEntry>
              </List>
            </ScopeAnimation>
          </Card>
          <Card noAnimation>
            <ScopeAnimation>
              <DiscreteHeading>Design</DiscreteHeading>
              <List>
                <ListEntry>
                  <LargeLink href={"https://www.figma.com/fr/"}>
                    Figma
                  </LargeLink>
                  <Skill lv={3} />
                </ListEntry>
                <ListEntry>
                  <LargeLink
                    href={"https://www.adobe.com/fr/products/photoshop.html"}
                  >
                    Photosop
                  </LargeLink>
                  <Skill lv={2} />
                </ListEntry>
                <ListEntry>
                  <LargeLink
                    href={"https://www.adobe.com/fr/products/illustrator.html"}
                  >
                    Illustrator
                  </LargeLink>
                  <Skill lv={3} />
                </ListEntry>
                <ListEntry>
                  <LargeLink
                    href={"https://www.adobe.com/fr/products/indesign.html"}
                  >
                    Indesign
                  </LargeLink>
                  <Skill lv={3} />
                </ListEntry>
              </List>
            </ScopeAnimation>
          </Card>
          <Card noAnimation>
            <ScopeAnimation>
              <DiscreteHeading>Outils & techniques</DiscreteHeading>
              <List>
                <ListEntry>
                  <LargeLink href={"https://www.docker.com/"}>Docker</LargeLink>
                  <Skill lv={3} />
                </ListEntry>
                <ListEntry>
                  <LargeLink href={"https://fr.wikipedia.org/wiki/CI/CD"}>
                    CI/CD
                  </LargeLink>
                  <Skill lv={2} />
                </ListEntry>
                <ListEntry>
                  <LargeLink href={"https://kubernetes.io/fr/"}>
                    Kubernetes
                  </LargeLink>
                  <Skill lv={2} />
                </ListEntry>
                <ListEntry>
                  <LargeLink href={"https://pnpm.io/fr/"}>pnpm</LargeLink>
                  <Skill lv={3} />
                </ListEntry>
                <ListEntry>
                  <LargeLink
                    href={
                      "https://fr.wikipedia.org/wiki/General-purpose_processing_on_graphics_processing_units"
                    }
                  >
                    gpgpu
                  </LargeLink>
                  <Skill lv={3} />
                </ListEntry>
                <ListEntry>
                  <LargeLink href={"https://storybook.js.org/"}>
                    Storybook
                  </LargeLink>
                  <Skill lv={3} />
                </ListEntry>
                <ListEntry>
                  <LargeLink href={"https://jestjs.io/fr/"}>Jest</LargeLink>
                  <Skill lv={3} />
                </ListEntry>
              </List>
            </ScopeAnimation>
          </Card>
          <Card noAnimation>
            <ScopeAnimation>
              <DiscreteHeading>Systèmes d'exploitation</DiscreteHeading>
              <List>
                <ListEntry>
                  <LargeLink
                    href={"https://fr.wikipedia.org/wiki/Microsoft_Windows"}
                  >
                    Windows
                  </LargeLink>
                  <Skill lv={3} />
                </ListEntry>
                <ListEntry>
                  <LargeLink href={"https://fr.wikipedia.org/wiki/MacOS"}>
                    macOS
                  </LargeLink>
                  <Skill lv={3} />
                </ListEntry>
                <ListEntry>
                  <LargeLink href={"https://fr.wikipedia.org/wiki/Linux"}>
                    Linux
                  </LargeLink>
                  <Skill lv={2} />
                </ListEntry>
              </List>
            </ScopeAnimation>
          </Card>
        </Cards>
      </Section>
    </>
  );
}
