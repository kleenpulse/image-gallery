import cloudinary from "cloudinary";
import { SearchResult } from "@/app/gallery/page";
import AlbumGrid from "./album-grid";

export default async function AlbumName({
	params: { albumName },
}: {
	params: { albumName: string };
}) {
	const results = (await cloudinary.v2.search
		.expression(`resource_type:image  AND folder=${albumName}`)
		.sort_by("created_at", "desc")
		.with_field("tags")
		.max_results(30)
		.execute()) as { resources: SearchResult[] };
	console.log(results);

	return (
		<section>
			<div className="flex flex-col gap-8 pb-8">
				<div className="flex justify-between">
					<h1 className="text-3xl font-bold uppercase">
						Album | {decodeURI(albumName)} art
					</h1>
				</div>

				<AlbumGrid images={results?.resources} />
			</div>
		</section>
	);
}
