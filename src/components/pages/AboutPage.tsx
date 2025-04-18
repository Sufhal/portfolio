import { Vector3 } from 'three';
import Section from "#/components/section/Section";
import Title from "#/components/text/Title";
import Paragraph from "#/components/text/Paragraph";
import ParagraphsContainer from "#/components/text/ParagraphsContainer";
import LargeLink from "#/components/buttons/LargeLink";
import Cards from '../cards/Cards';
import Card from '../cards/Card';
import DiscreteHeading from '../text/DiscreteHeading';
import Quote from '../text/Quote';
import FlexRow from '../layout/FlexRow';
import ScopeAnimation from '../text/ScopeAnimation';

export default function AboutPage() {

	return (
		<>
			<Section sector={0} stage={{
				cameraPosition: new Vector3(131.3588184123952, -155.6958228181702, 247.22076187268226),
				orbitTarget: new Vector3(-74.37613356981396, 30.890182619309567, -26.068778178441153),
				isLocked: false,
				engineSpeed: 0,
				splitFactor: 0,
				shakeStrength: 0,
				light: 1
			}}>
				<ScopeAnimation>
					<FlexRow>
						<Title>
							À propos de moi
						</Title>
						<Cards>
							<Card>
								<DiscreteHeading>MBTI</DiscreteHeading>
								<LargeLink href='https://fr.wikipedia.org/wiki/INTP'>INTP</LargeLink>
							</Card>
							<Card>
								<DiscreteHeading>Énnéagramme</DiscreteHeading>
								<LargeLink href='https://www.crystalknows.com/enneagram/type-5/wing-6'>5W6</LargeLink>
							</Card>
						</Cards>
					</FlexRow>
				</ScopeAnimation>
				<ScopeAnimation>
					<ParagraphsContainer>
						<DiscreteHeading>TL;DR</DiscreteHeading>
						<Paragraph>
							Localisé en Alsace, je suis un développeur absolument passionné par mon métier avec une soif inextinguible de connaissances et débordant de nouvelles idées. 
						</Paragraph>
						<Paragraph>
							À travers mon quotidien je cherche à étendre mon expertise à un maximum de domaines et souhaite comprendre comment tout fonctionne, dans leur globalité comme dans le détail.
						</Paragraph>
					</ParagraphsContainer>
					<Quote 
						from='Alan Watts' 
						content="It's absolutely stupid to spend your time doing things you don't like."
						link='https://fr.wikipedia.org/wiki/Alan_Watts' 
					/>
				</ScopeAnimation>
				<ScopeAnimation>
					<ParagraphsContainer>
						<DiscreteHeading>Design</DiscreteHeading>
						<Paragraph>
							D’un intérêt fort pour le design UI/UX, il m’est important de tenter rendre les choses visuellement cohérentes et agréables à regarder. J’espère réussir à vous le démontrer à travers ce portfolio.
						</Paragraph>
					</ParagraphsContainer>
				</ScopeAnimation>
				<ScopeAnimation>
					<ParagraphsContainer>
						<DiscreteHeading>DevOps</DiscreteHeading>
						<Paragraph>
							Quitte à être capable de concevoir ses propres maquettes et de développer ses applications from scratch, il me fallait un moyen élégant, efficace et fiable de déployer mes applications.
						</Paragraph>
						<Paragraph>
							C’est pourquoi j'ai pris la décision d'investir dans mon propre cluster Kubernetes à 3 noeuds : ça s'est révélé extrêmement pédagogique.
						</Paragraph>
					</ParagraphsContainer>
				</ScopeAnimation>
				<ScopeAnimation>
					<ParagraphsContainer>
						<DiscreteHeading>Side projects</DiscreteHeading>
						<Paragraph>
							Être autonome dans les différentes étapes de conception et de déploiement d’un projet, c'est bien. Avoir soi-même un terrain de jeu c'est encore mieux ! 
						</Paragraph>
						<Paragraph>
							Le mien, et celui qui me passionne le plus, est une réécriture complète d’un jeu 3D en ligne massivement multijoueur sur navigateur.
						</Paragraph>
						<LargeLink href='https://twitter.com/_Sufhal'>Suivre le développement</LargeLink>
					</ParagraphsContainer>
				</ScopeAnimation>
				<ScopeAnimation>
					<ParagraphsContainer>
						<DiscreteHeading>Automobile</DiscreteHeading>
						<Paragraph>
							Pourrais-je me présenter sans vous parler (un peu) d’automobile ?
							En effet, depuis le début de votre navigation sur ce portfolio, vous voyez cette pièce de métal en arrière plan tourner encore et encore.
							Si vous vous demandez de quoi il s’agit, c’est la démonstration du fonctionnement du moteur à piston rotatif imaginé par Félix Wankel.
							J’admire l’inventivité et l’originalité de ce principe lorsqu’il est comparé au fonctionnement des moteurs à pistons classiques.
						</Paragraph>
						<Paragraph>
							Ne trouvez-vous pas ce mouvement fascinant ?
						</Paragraph>
						<LargeLink href='https://fr.wikipedia.org/wiki/Moteur_Wankel'>Moteur Wankel</LargeLink>
					</ParagraphsContainer>
				</ScopeAnimation>
			</Section>
		</>
	)
}
