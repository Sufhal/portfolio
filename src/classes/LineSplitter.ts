import { ReactNode } from 'react';

export default class LineSplitter {

	public static split(textElement: TextElement): string[] {
		let textNode: Node | null = textElement.firstChild;
		if (!textNode || textNode.nodeType !== 3) {
			if (textNode instanceof Element) {
				if (textNode.hasAttribute('data-line')) { // is already splitted
					textNode = this._fromLinesToParagraph(textElement);
				} 
			} else {
				throw new Error(`LineSlitter.constructor() :: cannot split element node of type ${textNode?.nodeType}`);
			}
		}
		const lines = this._getLinesFromTextNode(textNode);
		return lines;
	}

	private static _getLinesFromTextNode(textNode: Node): string[] {
		const textContent = textNode.textContent;
		if (!textContent) return []; 
		const range = document.createRange(); 
		const lines: string[][] = [];
		let lineCharacters: string[] = [];
		for (let i=0; i<textContent.length; i++) {
			range.setStart(textNode, 0);
			range.setEnd(textNode, i + 1);
			const lineIndex = range.getClientRects().length - 1;
			if (!lines[lineIndex]) {
				lines.push(lineCharacters = []);
			}
			lineCharacters.push(textContent.charAt(i));
		}
		return lines.map(line => line.join(''));
	}

	private static _fromLinesToParagraph(textElement: TextElement) {
		const childrens = textElement.childNodes;
		for (let i=0; i<childrens.length; i++) {
			if (i === 0) continue;
			childrens[0].textContent += childrens[i].textContent || '';
			childrens[i].textContent = '';
		}
		return childrens[0].firstChild as Node;	
	}
}

export type TextElement = HTMLParagraphElement | HTMLTitleElement | HTMLSpanElement;