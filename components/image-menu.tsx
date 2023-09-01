"use client";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MenuIcon from "./icons/MenuIcon";

import { AddToAlbumModal } from "./add-to-album-modal";
import { SearchResult } from "@/app/gallery/page";
import { useState } from "react";

export function ImageMenu({ image }: { image: SearchResult }) {
	const [open, setOpen] = useState(false);
	return (
		<div className="absolute top-2 right-2">
			<DropdownMenu open={open} onOpenChange={setOpen}>
				<DropdownMenuTrigger asChild>
					<Button variant="secondary" className="w-8 h-8 p-0">
						<MenuIcon />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-[165px] rounded-xl">
					<DropdownMenuItem asChild>
						{/* <FolderPlus />
							<span>Add to Album</span> */}
						<AddToAlbumModal onClose={() => setOpen(false)} image={image} />
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
