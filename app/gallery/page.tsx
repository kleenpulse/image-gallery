import { CldImage } from "next-cloudinary";
import { UploadBtn } from "./upload-btn";
import cloudinary from "cloudinary";
import { CloudImages } from "./cloud-images";

export type SearchResult = {
	public_id: string;
};

export default async function Gallery() {
	const results = (await cloudinary.v2.search
		.expression("resource_type:image")
		.sort_by("created_at", "desc")
		.max_results(30)
		.execute()) as { resources: SearchResult[] };
	console.log(results);

	return (
		<section>
			<div className="flex justify-between mb-4">
				<h1 className="text-3xl font-bold">Gallery</h1>
				<UploadBtn />
			</div>
			<CloudImages results={results} />
		</section>
	);
}
