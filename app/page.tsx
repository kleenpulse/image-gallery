"use client";
import { CldImage, CldUploadButton } from "next-cloudinary";
import { useState } from "react";

export type UploadResult = {
	info: {
		public_id: string;
	};
	event: "success";
};

export default function Home() {
	const [imageId, setImageId] = useState("");
	return (
		<main className="flex min-h-screen items-center justify-between p-24">
			{imageId && (
				<CldImage
					width={"960"}
					height={"540"}
					src={imageId}
					sizes="100vw"
					alt="Image"
				/>
			)}
		</main>
	);
}
