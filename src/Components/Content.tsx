import { observer } from "mobx-react";
import { DocumentCard, DocumentCardPreview, DocumentCardTitle, IDocumentCardPreviewProps, ImageFit, } from "office-ui-fabric-react";
import * as React from "react";

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

		return (
			<div>
				<div>
					<DocumentCard>
						<DocumentCardPreview {...sampleOneProps} />
						<DocumentCardTitle title="Sample One" />
					</DocumentCard>
				</div>
			</div>
		);
	}
}
