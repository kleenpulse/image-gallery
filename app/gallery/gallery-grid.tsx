"use client";

import { CloudImages } from "../../components/cloud-images";
import { ImageGrid } from "@/components/image-grid";
import { SearchResult } from "./page";

export default function GalleryGrid({ images }: { images: SearchResult[] }) {
	return (
		<ImageGrid
			images={images}
			getImage={(imageData: SearchResult) => {
				return (
					<CloudImages
						width="400"
						height="300"
						alt="Image"
						src={imageData.public_id}
						className="rounded-2xl"
						imageData={imageData}
					/>
				);
			}}
		/>
	);
}
