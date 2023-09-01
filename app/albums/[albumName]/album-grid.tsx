"use client";

import { ImageGrid } from "@/components/image-grid";

import { CloudImages } from "@/components/cloud-images";
import { SearchResult } from "@/app/gallery/page";

export default function AlbumGrid({ images }: { images: SearchResult[] }) {
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
