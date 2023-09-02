"use client";
import ForceRefresh from "@/components/force-refresh";
import { Button } from "@/components/ui/button";
import { buttonFilters } from "@/app/edit";
import { CldImage } from "next-cloudinary";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function EditPage({
	searchParams: { publicId },
}: {
	searchParams: { publicId: string };
}) {
	const [transformation, setTransformation] = useState("");
	const [prompt, setPrompt] = useState("");
	const [pendingPrompt, setPendingPrompt] = useState("");
	const [isInput, setIsInput] = useState(false);

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
					<div className="flex flex-col gap-4">
						<Button
							onClick={() => setIsInput(!isInput)}
							className="bg-cyan-300 text-black"
						>
							Generative Fill
						</Button>
						{isInput && (
							<>
								<Label htmlFor="prompt">Prompt</Label>
								<Input
									id="prompt"
									autoComplete="off"
									placeholder="What do you want to see?"
									value={pendingPrompt}
									onChange={(e) => setPendingPrompt(e.target.value)}
								/>
								<Button
									onClick={() => {
										setTransformation("generative-fill");
										setIsInput(false);
										setPrompt(pendingPrompt);
										setPendingPrompt("");
									}}
								>
									Generate
								</Button>
							</>
						)}
					</div>
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
							width="2400"
							height="2400"
							crop="pad"
							fillBackground={{ prompt }}
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
