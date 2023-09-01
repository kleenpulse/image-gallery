"use client";
import ForceRefresh from "@/components/force-refresh";
import { Button } from "@/components/ui/button";
import { buttonFilters } from "@/app/edit";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditPage({
	searchParams: { publicId },
}: {
	searchParams: { publicId: string };
}) {
	const [transformation, setTransformation] = useState("");
	console.log(transformation);

	return (
		<section>
			<ForceRefresh />
			<div className="flex flex-col gap-8 pb-8">
				<div className="flex justify-between">
					<h1 className="text-3xl font-bold uppercase bg-ye">
						Edit {publicId.replace(/\/.*/, "")}
					</h1>
				</div>
				<div className="flex gap-4">
					{buttonFilters.map((btn) => (
						<Button
							onClick={() => setTransformation(btn.action)}
							className={`text-black ${btn.bgColor}`}
							key={btn.label}
						>
							{btn.label}
						</Button>
					))}
				</div>
				<div className="grid grid-cols-2 gap-12">
					<CldImage
						src={publicId}
						alt="Image"
						className="rounded-2xl"
						width="500"
						height="500"
					/>

					{transformation === "generative-fill" && (
						<CldImage
							src={publicId}
							alt="Image"
							className="rounded-2xl"
							width="500"
							height="500"
							crop="pad"
							fillBackground
						/>
					)}
					{transformation === "blur" && (
						<CldImage
							src={publicId}
							alt="Image"
							className="rounded-2xl"
							width="500"
							height="500"
							blur="800"
						/>
					)}
					{transformation === "grayscale" && (
						<CldImage
							src={publicId}
							alt="Image"
							className="rounded-2xl"
							width="500"
							height="500"
							grayscale
						/>
					)}
					{transformation === "zoom" && (
						<CldImage
							src={publicId}
							alt="Image"
							className="rounded-2xl"
							width="500"
							height="500"
							zoompan
						/>
					)}

					{transformation === "removeBackground" && (
						<CldImage
							src={publicId}
							alt="Image"
							className="rounded-2xl"
							width="500"
							height="500"
							removeBackground
						/>
					)}
				</div>
			</div>
		</section>
	);
}
