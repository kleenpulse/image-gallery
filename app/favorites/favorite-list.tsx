"use client";
import { CloudImages } from "@/components/cloud-images";
import { SearchResult } from "../gallery/page";
import { useState, useEffect } from "react";
import { ImageGrid } from "@/components/image-grid";

export default function FavoriteList({
	initialResources,
}: {
	initialResources: SearchResult[];
}) {
	const [resources, setResources] = useState(initialResources);

	useEffect(() => {
		setResources(initialResources);
	}, [initialResources]);

	return (
		<ImageGrid
			images={resources}
			getImage={(imageData: SearchResult) => {
				return (
					<CloudImages
						width="400"
						height="300"
						alt="Image"
						src={imageData.public_id}
						className="rounded-2xl"
						imageData={imageData}
						onUnLiked={(unheartedResources: any) =>
							setResources((currResources) =>
								currResources.filter(
									(resource) =>
										resource.public_id !== unheartedResources.public_id
								)
							)
						}
					/>
				);
			}}
		/>
	);
}
