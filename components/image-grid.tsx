"use client";
import { SearchResult } from "@/app/gallery/page";

const MAX_COLS = 4;
export function ImageGrid({
	images,
	getImage,
}: {
	images: SearchResult[];
	getImage: (imageData: SearchResult) => React.ReactNode;
}) {
	function getColumns(colIndex: number) {
		return images.filter((resource, idX) => idX % MAX_COLS === colIndex);
	}

	return (
		<div className="grid grid-cols-3 gap-4 ">
			{[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
				(results, idx) => (
					<div className="flex flex-col gap-4" key={results.length + idx}>
						{results.map(getImage)}
					</div>
				)
			)}
		</div>
	);
}
