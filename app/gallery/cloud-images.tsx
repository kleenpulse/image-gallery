"use client";

import { CldImage } from "next-cloudinary";

export const CloudImages = ({ results }: { results: any }) => {
	return (
		<div className="grid grid-cols-3 gap-4">
			{results?.resources.map((result: any) => (
				<CldImage
					key={result.public_id}
					width={"960"}
					height={"540"}
					src={result.public_id}
					alt="Image"
				/>
			))}
		</div>
	);
};
