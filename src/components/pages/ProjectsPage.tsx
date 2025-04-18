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
              <Title type="subtitle">Javascript</Title>
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
              <Title type="subtitle">Rust</Title>
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
              <Title type="subtitle">Memento mori</Title>
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
      {/* <Section sector={1} stage={{
				cameraPosition: new Vector3(-20.682863524309127, -55.18117379344369, 99.92869441631366),
				orbitTarget: new Vector3(4.4004047117881395, 18.450501591932124, -33.87926015725064),
				isLocked: false,
				engineSpeed: .1,
				splitFactor: 0,
				shakeStrength: 0,
				light: 1,
				opacity: .35
			}}>
				<FlexRow>
					<div>
						<ScopeAnimation>
							<Title>
								Configurateur
							</Title>
							<Title type='subtitle'>
								de tiroirs
							</Title>
							<ParagraphsContainer>
								<DiscreteHeading>TL;DR</DiscreteHeading>
								<Paragraph>
									Afin de remplacer un processus obsolète de commande tiroirs sur-mesure, une application web a vu le jour. Ce nouvel outil, plus moderne et plus efficace, a augmenté les ventes de 150% !
								</Paragraph>
							</ParagraphsContainer>
							<ParagraphsContainer>
								<DiscreteHeading>Technologies & fonctionnalités</DiscreteHeading>
								<NativeList>
									<NativeListEntry>Affichage 3D en temps réel du tiroir</NativeListEntry>
									<NativeListEntry>Animations fluides avec Anime.js</NativeListEntry>
									<NativeListEntry>Gestion de panier virtuel</NativeListEntry>
									<NativeListEntry>Génération de bon de commande en PDF</NativeListEntry>
									<NativeListEntry>Envoi d'emails grâce à Selligent</NativeListEntry>
								</NativeList>
							</ParagraphsContainer>
						</ScopeAnimation>
					</div>
					<div>
						<Parallax>
							<Video source='videos/astucio.mp4' />
						</Parallax>
					</div>
				</FlexRow>				
			</Section>
			<Section sector={2} stage={{
				cameraPosition: new Vector3(-23.577257683055677, -103.14376051549235, 100.35711469758304),
				orbitTarget: new Vector3(22.649089171384773, 32.48059195364129, -9.44915022333991),
				isLocked: false,
				engineSpeed: .1,
				splitFactor: 0,
				shakeStrength: 0,
				light: 1,
				opacity: .35
			}}>
				<FlexRow>
					<div>
						<ScopeAnimation>
							<Title>
								Guide de choix
							</Title>
							<Title type='subtitle'>
								gants de travail
							</Title>
							<ParagraphsContainer>
								<DiscreteHeading>TL;DR</DiscreteHeading>
								<Paragraph>
									Outil permettant d'améliorer l'expérience des utilisateurs en guidant le choix à travers divers critères. Ces outils sont très utiles lorsque le nombre de références disponibles est très important.
								</Paragraph>
							</ParagraphsContainer>
							<ParagraphsContainer>
								<DiscreteHeading>Technologies & fonctionnalités</DiscreteHeading>
								<NativeList>
									<NativeListEntry>Arbre de choix dynamique</NativeListEntry>
									<NativeListEntry>Animations fluides avec Anime.js</NativeListEntry>
									<NativeListEntry>Sélection de produit par métiers ou secteur d'activité</NativeListEntry>
									<NativeListEntry>Sélection de produit par matière, norme ou épaisseur</NativeListEntry>
								</NativeList>
							</ParagraphsContainer>
						</ScopeAnimation>
					</div>
					<div>
						<Parallax>
							<Video source='videos/gloves.mp4' />
						</Parallax>
					</div>
				</FlexRow>				
			</Section> */}
    </>
  );
}
