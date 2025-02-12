import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
	return (
		<footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 ">
			<div className="max-w-screen-lg mx-auto flex items-center justify-between h-full">
				<Button size={"lg"} variant={"ghost"} className="w-full ">
					<Image src="/hr.svg" height={32} width={32} className="mr-4 rounded-md"  />
					Croatian
				</Button>
				<Button variant={"ghost"} className="w-full ">
					<Image src="/fr.svg" height={32} width={32} className="mr-4 rounded-md" />
					French
				</Button>
				<Button variant={"ghost"} className="w-full ">
					<Image src="/jp.svg" height={32} width={32} className="mr-4 rounded-md" />
					Japanese
				</Button>
				<Button variant={"ghost"} className="w-full ">
					<Image src="/it.svg" height={32} width={32} className="mr-4 rounded-md" />
					Italian
				</Button>
				<Button variant={"ghost"} className="w-full ">
					<Image src="/es.svg" height={32} width={32} className="mr-4 rounded-md" />
					German
				</Button>
			</div>
		</footer>
	);
};
