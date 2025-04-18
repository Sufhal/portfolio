import { Vector3 } from 'three';
import Section from "#/components/section/Section";
import Title from "#/components/text/Title";
import Paragraph from "#/components/text/Paragraph";
import ParagraphsContainer from "#/components/text/ParagraphsContainer";
import LargeLink from "#/components/buttons/LargeLink";
import Live from '#/components/live/Live';
import Link from 'next/link';
import ButtonRework from '../buttons/ButtonRework';
import ScopeAnimation from '../text/ScopeAnimation';

export default function IndexPage() {

	return (
		<>
			<Section sector={0} stage={{
				cameraPosition: new Vector3(7.4668225797872125, -79.88206756431306, 77.77178624219724),
				orbitTarget: new Vector3(-21.056906066605706, 3.248772140866152, 5.549262327113785),
				isLocked: false,
				engineSpeed: .5,
				splitFactor: 0,
				shakeStrength: 0,
				light: 1
			}}>
				<ScopeAnimation>
					<Title>
						Jules Girold
					</Title>
					<ParagraphsContainer>
						<Paragraph>
							Développeur Typescript fullstack à la recherche continue de nouvelles connaissances. 
							Également intéressé par la 3D, l&apos;UI/UX, le DevOps et l&apos;administration système. 
							J'effectue actuellement des expérimentations en Rust, WebAssembly et WebGPU.
						</Paragraph>
					</ParagraphsContainer>
					<LargeLink href='https://www.linkedin.com/in/jules-girold-b03428b0'>
						<Live /> Ouvert aux opportunités
					</LargeLink>
				</ScopeAnimation>
			</Section>
			<Section sector={1} stage={{
				cameraPosition: new Vector3(-39.01422131225591, -96.39636679957349, 153.1123312301982),
				orbitTarget: new Vector3( -28.21519386658531, -1.608911317272038, -0.10868647770816402),
				isLocked: false,
				engineSpeed: 15,
				splitFactor: 0,
				shakeStrength: .4,
				light: 1
			}}>
				<ScopeAnimation>
					<Title>
						Une obsession
					</Title>
					<Title type={'subtitle'}>
						pour les performances.
					</Title>
					<ParagraphsContainer>
						<Paragraph>
							Il est crucial d'accorder une attention toute particulière aux performances pour certains projets, notamment lorsqu'il s'agit de développer un jeu en 3D, de gérer de grandes quantités de données ou assurer une rapidité d'exécution optimale.
						</Paragraph>
					</ParagraphsContainer>
				</ScopeAnimation>
			</Section>
			<Section sector={2} stage={{
				cameraPosition: new Vector3(131.3588184123952, -155.6958228181702, 247.22076187268226),
				orbitTarget: new Vector3(-74.37613356981396, 30.890182619309567, -26.068778178441153),
				isLocked: false,
				engineSpeed: 0,
				splitFactor: 1,
				shakeStrength: 0,
				light: 1
			}}>
				<ScopeAnimation>
					<Title>
						Comprendre comment
					</Title>
					<Title type={'subtitle'}>
						les choses fonctionnent.
					</Title>
					<ParagraphsContainer>
						<Paragraph>
							Chercher à comprendre le "Pourquoi ?" est un élément fondamental pour moi. C’est à travers cette question que de nombreuses réponses se dévoilent et que les compétences se forgent. Par exemple, pourquoi ne pas développer un jeu en ligne sur navigateur ?
						</Paragraph>
					</ParagraphsContainer>
				</ScopeAnimation>
			</Section>
			<Section sector={3} stage={{
				cameraPosition: new Vector3(7.4668225797872125, -79.88206756431306, 77.77178624219724),
				orbitTarget: new Vector3(-21.056906066605706, 3.248772140866152, 5.549262327113785),
				isLocked: false,
				engineSpeed: .5,
				splitFactor: 0,
				shakeStrength: 0,
				light: 1
			}}>
				<ScopeAnimation>
					<Title>
						Et pourquoi pas ?
					</Title>
					<Title type={'subtitle'}>
						Nous devrions l&apos;expérimenter.
					</Title>
					<ParagraphsContainer>
						<Paragraph>
							Mettons de côté les normes un instant et réfléchissons en dehors des sentiers battus. Allons au-delà des obstacles ou des idées reçues, c’est ainsi que nous ferons la différence.
						</Paragraph>
						<Paragraph>
							Tenez par exemple, un jour je me suis levé en décidant de créer un jeu 3D en ligne massivement multijoueur, mais sur navigateur. Pourquoi ? Vous savez déjà ce que je vous répondrai. Jetez un oeil au projet !
						</Paragraph>
					</ParagraphsContainer>
					<LargeLink href='/projects'>
						Mes projets
					</LargeLink>
				</ScopeAnimation>
			</Section>
			<Section sector={4} stage={{
				cameraPosition: new Vector3(0, -26.412461089816528, 217.541258941833523),
				orbitTarget: new Vector3(0, 0, 0),
				isLocked: false,
				engineSpeed: 2,
				splitFactor: 0,
				shakeStrength: 0,
				light: 1
			}}>
				<ScopeAnimation>
					<Title>
						Une idée en tête ?
					</Title>
					<Title type={'subtitle'}>
						Discutons de votre projet.
					</Title>
					<ParagraphsContainer>
						<Paragraph>
							Nous pourrions faire de belles choses ensemble. Que vous ayez une idée précise de ce que vous souhaitez faire ou non, je n'ai aucun doute sur le fait que nous saurons répondre à toutes les problématiques.
						</Paragraph>
					</ParagraphsContainer>
					<ParagraphsContainer>
						<Link href={'/contact'}>
							<ButtonRework>Contact</ButtonRework>
						</Link>
					</ParagraphsContainer>
				</ScopeAnimation>
			</Section>
		</>
	)
}
