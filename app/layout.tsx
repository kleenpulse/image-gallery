import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";

import Heart from "@/components/icons/Heart";
import Link from "next/link";
import cloudinary from "cloudinary";
import GalleryIcon from "@/components/icons/GalleryIcon";
import AlbumIcon from "@/components/icons/AlbumIcon";
import { Folder } from "./albums/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "AI ART",
	description: "Generated by create next app",
};
/**
 * Renders the side menu component.
 *
 * @return {JSX.Element} The rendered side menu.
 */

async function SideMenu() {
	const { folders } = (await cloudinary.v2.api.root_folders()) as {
		folders: Folder[];
	};
	return (
		<div className="pb-12 w-1/5">
			<div className="space-y-4 py-4">
				<div className="px-3 py-2">
					<h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
						Manage
					</h2>
					<div className="space-y-1">
						<Button asChild variant="ghost" className="w-full justify-start">
							<Link href="/gallery">
								<GalleryIcon />
								Gallery
							</Link>
						</Button>
						<Button asChild variant="ghost" className="w-full justify-start">
							<Link href="/albums">
								<AlbumIcon />
								Albums
							</Link>
						</Button>
						{folders.map((folder) => (
							<Button
								asChild
								key={folder.name}
								className="w-full justify-start"
								variant={"ghost"}
							>
								<Link className="pl-10" href={`/albums/${folder.path}`}>
									{folder.name}
								</Link>
							</Button>
						))}
						<Button
							asChild
							variant="ghost"
							className="w-full justify-start gap-2"
						>
							<Link href="/favorites">
								<Heart />
								Favorites
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark">
			<body className={inter.className}>
				<div className="border-b ">
					<div className="flex h-16 items-center px-4 container mx-auto">
						AI ART
						<div className="ml-auto flex items-center space-x-4">
							<Avatar>
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</div>
					</div>
				</div>
				<div className="flex">
					<SideMenu />

					<div className="px-4 w-full pt-8">{children}</div>
				</div>
			</body>
		</html>
	);
}
