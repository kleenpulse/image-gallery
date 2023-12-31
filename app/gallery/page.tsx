import { UploadBtn } from "../../components/upload-btn";
import cloudinary from "cloudinary";

import GalleryGrid from "./gallery-grid";
import ForceRefresh from "@/components/force-refresh";
import { SearchBox } from "@/components/SearchBox";

export type SearchResult = {
	public_id: string;
	tags: string[];
};

export default async function Gallery({
	searchParams: { search },
}: {
	searchParams: { search: string };
}) {
	const results = (await cloudinary.v2.search
		.expression(`resource_type:image ${search ? ` AND tags=${search}` : ""}`)
		.sort_by("created_at", "desc")
		.with_field("tags")
		.max_results(30)
		.execute()) as { resources: SearchResult[] };
	console.log(results);

	return (
		<section>
			<ForceRefresh />
			<div className="flex flex-col gap-8 pb-8">
				<div className="flex justify-between">
					<h1 className="text-3xl font-bold">Gallery</h1>

					<UploadBtn />
				</div>
				<SearchBox initailSearch={search} />
				<GalleryGrid images={results?.resources} />
			</div>
		</section>
	);
}
