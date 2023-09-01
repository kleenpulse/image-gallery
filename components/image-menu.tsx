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
import Link from "next/link";
import { PencilIcon } from "lucide-react";

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
						<AddToAlbumModal onClose={() => setOpen(false)} image={image} />
					</DropdownMenuItem>

					<DropdownMenuItem asChild>
						<Link
							className="cursor-pointer hover:bg-secondary/80 rounded-xl "
							href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}
						>
							<PencilIcon className="pl-1 ml-1 w-6 h-6 mr-3" /> Edit Image
						</Link>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
