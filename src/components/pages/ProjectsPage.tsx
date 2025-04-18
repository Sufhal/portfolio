import { Vector3 } from "three";
import Section from "#/components/section/Section";
import Title from "#/components/text/Title";
import Paragraph from "#/components/text/Paragraph";
import ParagraphsContainer from "#/components/text/ParagraphsContainer";
import LargeLink from "#/components/buttons/LargeLink";
import DiscreteHeading from "../text/DiscreteHeading";
import FlexRow from "../layout/FlexRow";
import Video from "../video/Video";
import Parallax from "../scroll/Parallax";
import ScopeAnimation from "../text/ScopeAnimation";
import List from "../list/List";
import ListEntry from "../list/ListEntry";
import NativeList from "../list/NativeList";
import NativeListEntry from "../list/NativeListEntry";
import videoClasses from "../video/video.module.scss";
import { Gallery } from "../gallery/Gallery";

export default function ProjectsPage() {
  return (
    <>
      <Section
        sector={0}
        stage={{
          cameraPosition: new Vector3(
            -24.722341944706358,
            -95.03559922380308,
            86.82532499721374
          ),
          orbitTarget: new Vector3(
            5.351257227228121,
            17.546029287454207,
            -15.03888965750754
          ),
          isLocked: false,
          engineSpeed: 0.1,
          splitFactor: 0,
          shakeStrength: 0,
          light: 1,
          opacity: 0.35,
        }}
      >
        <FlexRow>
          <div>
            <ScopeAnimation>
              <Title>Metin2</Title>
              <Title type="subtitle">Javascript (2021-2023)</Title>
              <ParagraphsContainer>
                <DiscreteHeading>TL;DR</DiscreteHeading>
                <Paragraph>
                  Le projet M2JS vise à réécrire complètement le MMORPG coréen
                  Metin2 pour qu’il puisse être joué depuis un navigateur ou un
                  mobile.
                </Paragraph>
                <LargeLink href="https://twitter.com/_Sufhal">
                  Suivre le développement
                </LargeLink>
              </ParagraphsContainer>
              <ParagraphsContainer>
                <DiscreteHeading>
                  Technologies & fonctionnalités
                </DiscreteHeading>
                <NativeList>
                  <NativeListEntry>
                    Générateur de particules calculé sur le GPU avec GPGPU
                  </NativeListEntry>
                  <NativeListEntry>
                    Toutes les textures réalisés avec des shaders GLSL custom
                  </NativeListEntry>
                  <NativeListEntry>
                    Instanciation de tous les modèles
                  </NativeListEntry>
                  <NativeListEntry>
                    Indexation spatiale des objets pour les collisions
                  </NativeListEntry>
                  <NativeListEntry>
                    Utilisation des WebWorkers pour le calcul des matrices
                  </NativeListEntry>
                  <NativeListEntry>
                    Utilisation d'IndexedDB pour la mise en cache des modèles
                  </NativeListEntry>
                </NativeList>
              </ParagraphsContainer>
            </ScopeAnimation>
          </div>
          <div className={videoClasses.playerProportion}>
            <Video source="videos/hls/m2js.m3u8" hls={true} />
          </div>
        </FlexRow>
        <Gallery
          content={[
            "gallery/m2js/1.png",
            "gallery/m2js/2.png",
            "gallery/m2js/3.png",
            "gallery/m2js/4.png",
            "gallery/m2js/5.png",
            "gallery/m2js/6.png",
            "gallery/m2js/7.png",
            "gallery/m2js/8.png",
            "gallery/m2js/9.png",
            "gallery/m2js/10.png",
            "gallery/m2js/11.png",
            "gallery/m2js/12.png",
            "gallery/m2js/13.gif",
            "gallery/m2js/14.png",
            "gallery/m2js/15.png",
            "gallery/m2js/16.png",
            "gallery/m2js/17.png",
            "gallery/m2js/18.png",
            "gallery/m2js/19.png",
            "gallery/m2js/20.png",
            "gallery/m2js/21.png",
            "gallery/m2js/22.png",
            "gallery/m2js/23.png",
            "gallery/m2js/24.png",
            "gallery/m2js/25.png",
            "gallery/m2js/26.gif",
            "gallery/m2js/27.gif",
            "gallery/m2js/28.png",
            "gallery/m2js/29.gif",
            "gallery/m2js/30.gif",
            "gallery/m2js/31.gif",
            "gallery/m2js/32.gif",
            "gallery/m2js/33.m3u8",
            "gallery/m2js/34.m3u8",
            "gallery/m2js/35.gif",
            "gallery/m2js/36.png",
            "gallery/m2js/37.m3u8",
            "gallery/m2js/38.m3u8",
          ]}
        />
      </Section>
      <Section
        sector={1}
        stage={{
          cameraPosition: new Vector3(
            -20.682863524309127,
            -55.18117379344369,
            99.92869441631366
          ),
          orbitTarget: new Vector3(
            4.4004047117881395,
            18.450501591932124,
            -33.87926015725064
          ),
          isLocked: false,
          engineSpeed: 0.1,
          splitFactor: 0,
          shakeStrength: 0,
          light: 1,
          opacity: 0.35,
        }}
      >
        <FlexRow>
          <div>
            <ScopeAnimation>
              <Title>Metin2</Title>
              <Title type="subtitle">Rust (2024)</Title>
              <ParagraphsContainer>
                <DiscreteHeading>TL;DR</DiscreteHeading>
                <Paragraph>
                  Il s'agit d'une réécriture complète de Metin2 Javascript en
                  Rust. L'idée ici est d'en apprendre plus sur le fonctionnement
                  à bas niveau d'un moteur graphique et de WebAssembly.
                </Paragraph>
                <LargeLink href="https://github.com/Sufhal/m2rs">
                  Voir le Git
                </LargeLink>
              </ParagraphsContainer>
              <ParagraphsContainer>
                <DiscreteHeading>
                  Technologies & fonctionnalités
                </DiscreteHeading>
                <NativeList>
                  <NativeListEntry>
                    Écriture d'un moteur graphique from scratch
                  </NativeListEntry>
                  <NativeListEntry>
                    Parsing et rendu des modèles GLTF
                  </NativeListEntry>
                  <NativeListEntry>
                    Instanciation de tous les modèles
                  </NativeListEntry>
                  <NativeListEntry>
                    Parsing et rendu des squelettes et des animations
                  </NativeListEntry>
                  <NativeListEntry>Génération des ombres</NativeListEntry>
                  <NativeListEntry>
                    Raycast pour la gestion des collisions
                  </NativeListEntry>
                  <NativeListEntry>
                    Environnement dynamique: nuages, brouillard, ciel et
                    lumières
                  </NativeListEntry>
                </NativeList>
              </ParagraphsContainer>
            </ScopeAnimation>
          </div>
          <div className={videoClasses.playerProportion}>
            <Video source="videos/hls/m2rs-environment.m3u8" hls={true} />
          </div>
        </FlexRow>
        <Gallery
          content={[
            "gallery/m2rs/1_.m3u8",
            "gallery/m2rs/2_.m3u8",
            "gallery/m2rs/3_.m3u8",
            "gallery/m2rs/4_.m3u8",
            "gallery/m2rs/5_.m3u8",
            "gallery/m2rs/6_.m3u8",
            "gallery/m2rs/7.png",
            "gallery/m2rs/8.png",
            "gallery/m2rs/9.png",
            "gallery/m2rs/10.png",
            "gallery/m2rs/11.png",
            "gallery/m2rs/12.png",
            "gallery/m2rs/13.png",
            "gallery/m2rs/14.png",
            "gallery/m2rs/15.png",
            "gallery/m2rs/16_.m3u8",
            "gallery/m2rs/17.png",
            "gallery/m2rs/18_.m3u8",
            "gallery/m2rs/19_.m3u8",
            "gallery/m2rs/20_.m3u8",
            "gallery/m2rs/21.png",
            "gallery/m2rs/22.png",
            "gallery/m2rs/23.png",
            "gallery/m2rs/24_.m3u8",
            "gallery/m2rs/25.png",
            "gallery/m2rs/26.png",
            "gallery/m2rs/27.png",
            "gallery/m2rs/28.png",
            "gallery/m2rs/29_.m3u8",
            "gallery/m2rs/30_.m3u8",
            "gallery/m2rs/31_.m3u8",
            "gallery/m2rs/32_.m3u8",
            "gallery/m2rs/33.png",
            "gallery/m2rs/34.png",
            "gallery/m2rs/35_.m3u8",
            "gallery/m2rs/36_.m3u8",
            "gallery/m2rs/37.png",
            "gallery/m2rs/38.png",
            "gallery/m2rs/39_.m3u8",
            "gallery/m2rs/40_.m3u8",
            "gallery/m2rs/41_.m3u8",
            "gallery/m2rs/42_.m3u8",
            "gallery/m2rs/43_.m3u8",
            "gallery/m2rs/44_.m3u8",
            "gallery/m2rs/45_.m3u8",
            "gallery/m2rs/46_.m3u8",
            "gallery/m2rs/47.png",
          ]}
        />
      </Section>
      <Section
        sector={2}
        stage={{
          cameraPosition: new Vector3(
            -24.722341944706358,
            -95.03559922380308,
            86.82532499721374
          ),
          orbitTarget: new Vector3(
            5.351257227228121,
            17.546029287454207,
            -15.03888965750754
          ),
          isLocked: false,
          engineSpeed: 0.1,
          splitFactor: 0,
          shakeStrength: 0,
          light: 1,
          opacity: 0.35,
        }}
      >
        <FlexRow>
          <div>
            <ScopeAnimation>
              <Title>Rememora</Title>
              <Title type="subtitle">Memento mori (current)</Title>
              <ParagraphsContainer>
                <DiscreteHeading>TL;DR</DiscreteHeading>
                <Paragraph>
                  Rememora est une solution de stockage et d'exposition sur le
                  très long terme. Elle permet d'enregister textes, images,
                  vidéos et autres fichiers privés, publics ou encore
                  post-mortem.
                </Paragraph>
              </ParagraphsContainer>
              <ParagraphsContainer>
                <DiscreteHeading>
                  Technologies & fonctionnalités
                </DiscreteHeading>
                <NativeList>
                  <NativeListEntry>Rust</NativeListEntry>
                  <NativeListEntry>Solidstart</NativeListEntry>
                  <NativeListEntry>Capacitor</NativeListEntry>
                </NativeList>
              </ParagraphsContainer>
            </ScopeAnimation>
          </div>
        </FlexRow>
      </Section>
    </>
  );
}
