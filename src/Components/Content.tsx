import { observer } from "mobx-react";
import {
	DocumentCard, DocumentCardPreview, DocumentCardTitle, IDocumentCardPreviewProps,
	ImageFit, Label,
} from "office-ui-fabric-react";
import * as React from "react";

/**
 * View for the object that represents the top level of the entire layout.
 */
@observer
export class Content extends React.Component {
	public render() {
		const sampleOneProps: IDocumentCardPreviewProps = {
			previewImages: [
				{
					previewImageSrc: "/samples/images/Bokeh_2k.jpg",
					imageFit: ImageFit.cover,
					width: 318,
					height: 196,
				},
			],
		};

		const sampleTwoProps: IDocumentCardPreviewProps = {
			previewImages: [
				{
					previewImageSrc: "/samples/images/Midtown_2k.jpg",
					imageFit: ImageFit.cover,
					width: 318,
					height: 196,
				},
			],
		};

		return (
			<div>
				<div>
					<DocumentCard>
						<DocumentCardPreview {...sampleOneProps} />
						<DocumentCardTitle title="Sample One" />
					</DocumentCard>
					<DocumentCard>
						<DocumentCardPreview {...sampleTwoProps} />
						<DocumentCardTitle title="Sample Two" />
					</DocumentCard>
				</div>
			</div>
		);
	}
}
