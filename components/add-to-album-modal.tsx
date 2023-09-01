"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FolderPlus from "./icons/FolderPlus";
import { SearchResult } from "@/app/gallery/page";
import { AddImgToAlbum } from "@/actions/actions";

export function AddToAlbumModal({
	image,
	onClose,
}: {
	image: SearchResult;
	onClose: () => void;
}) {
	const [albumName, setAlbumName] = useState("");
	const [open, setOpen] = useState(false);

	return (
		<Dialog
			open={open}
			onOpenChange={(newOpenState) => {
				setOpen(newOpenState);
				if (!newOpenState) {
					onClose();
				}
			}}
		>
			<DialogTrigger>
				<Button variant="ghost">
					<FolderPlus />
					<span>Add to Album</span>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px] ">
				<DialogHeader>
					<DialogTitle>Add to Album</DialogTitle>
					<DialogDescription>Type an album name to add Image</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Album
						</Label>
						<Input
							id="album-name"
							value={albumName}
							className="col-span-3"
							onChange={(e) => setAlbumName(e.target.value.toLowerCase())}
						/>
					</div>
				</div>
				<DialogFooter>
					<Button
						onClick={async () => {
							onClose();
							setOpen(false);
							await AddImgToAlbum(albumName, image);
						}}
						type="submit"
					>
						Add to Album
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
