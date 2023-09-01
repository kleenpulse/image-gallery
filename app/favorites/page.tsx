import cloudinary from "cloudinary";

import FavoriteList from "./favorite-list";
import ForceRefresh from "@/components/force-refresh";

export default async function Favorite() {
	const results = await cloudinary.v2.search
		.expression("resource_type:image AND tags:favorite")
		.sort_by("created_at", "desc")
		.with_field("tags")
		.max_results(30)
		.execute();
	console.log(results);

	return (
		<section>
			<ForceRefresh />
			<div className="flex justify-between mb-4">
				<h1 className="text-3xl font-bold">Favorite Images</h1>
			</div>
			<FavoriteList initialResources={results?.resources} />
		</section>
	);
}
