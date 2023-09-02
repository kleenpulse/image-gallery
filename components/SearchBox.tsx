"use client";

import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";

export const SearchBox = ({ initailSearch }: { initailSearch: string }) => {
	const [tagName, setTagName] = useState(initailSearch ?? "");

	const path = usePathname();
	console.log(path);
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		router.replace(`${path}?search=${encodeURIComponent(tagName)}`);

		router.refresh();
	};

	useEffect(() => {
		setTagName(initailSearch);
	}, [initailSearch]);

	return (
		<form onSubmit={handleSubmit}>
			<Label htmlFor="tag-name" className="text-right">
				Search By Tag
			</Label>
			<div className="flex gap-2">
				<Input
					id="tag-name"
					value={tagName}
					autoComplete="off"
					onChange={(e) => setTagName(e.target.value)}
				/>

				<Button type="submit">Search</Button>
			</div>
		</form>
	);
};
