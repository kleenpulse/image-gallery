"use client";

import Heart from "@/components/icons/Heart";
import { CldImage } from "next-cloudinary";
import { setAsFavoriteAction } from "../app/gallery/actions";
import { useState, useTransition } from "react";
import { SearchResult } from "../app/gallery/page";
import FullHeart from "@/components/icons/FullHeart";
import { ImageMenu } from "./image-menu";

export const CloudImages = (
	props: {
		imageData: SearchResult;
		onUnLiked?: (unheartedResources: SearchResult) => void;
	} & React.ComponentProps<typeof CldImage>
) => {
	const [, startTransition] = useTransition();

	const { imageData, onUnLiked } = props;
	const [liked, setLiked] = useState(imageData.tags.includes("favorite"));

	return (
		<div className="relative">
			<CldImage {...props} />

			{liked ? (
				<div
					className={`absolute top-2 left-2 cursor-pointer hover:text-white text-red-500 transition-all duration-300`}
					onClick={() => {
						onUnLiked?.(imageData);
						setLiked(false);
						startTransition(() => {
							setAsFavoriteAction(imageData.public_id, false);
						});
					}}
				>
					<FullHeart />
				</div>
			) : (
				<div
					className="absolute top-2 left-2 cursor-pointer hover:text-red-500 transition-all duration-300"
					onClick={() => {
						setLiked(true);
						startTransition(() => {
							setAsFavoriteAction(imageData.public_id, true);
						});
					}}
				>
					<Heart />
				</div>
			)}
			<ImageMenu image={imageData} />
		</div>
	);
};
