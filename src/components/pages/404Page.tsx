import { Vector3 } from 'three';
import Section from "#/components/section/Section";
import Title from "#/components/text/Title";
import Paragraph from "#/components/text/Paragraph";
import ParagraphsContainer from "#/components/text/ParagraphsContainer";
import Link from 'next/link';
import ButtonRework from '../buttons/ButtonRework';

export default function IndexPage() {

	return (
		<>
			<Section sector={0} stage={{
				cameraPosition: new Vector3(7.4668225797872125, -79.88206756431306, 77.77178624219724),
				orbitTarget: new Vector3(-21.056906066605706, 3.248772140866152, 5.549262327113785),
				isLocked: false,
				engineSpeed: 0,
				splitFactor: .5,
				shakeStrength: 0,
				light: 1
			}}>
				<Title>
					404 ⎯
				</Title>
				<Title type={'subtitle'}>
					Not found.
				</Title>
				<ParagraphsContainer>
					<Paragraph>
						Il semblerait que le page à laquelle vous essayez d'accéder n'existe pas ou plus. Il serait plus sage de retourner en lieux sûrs, je vous y amène ?
					</Paragraph>
				</ParagraphsContainer>
				<ParagraphsContainer>
					<Link href={'/'}>
						<ButtonRework>Aller en lieux sûrs</ButtonRework>
					</Link>
				</ParagraphsContainer>
			</Section>
		</>
	)
}
