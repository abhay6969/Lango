import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
	ClerkLoaded,
	ClerkLoading,
	SignedIn,
	SignedOut,
	SignInButton,
	SignOutButton,
	SignUpButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";

const page = () => {
	return (
		<div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
			<div className="relative w-[240px] h-[240px] lg:w-[400px] lg:h-[400px] mb-8 lg:mb-0">
				<Image src="/hero.svg" fill alt="Hero" />
			</div>
			<div className="flex flex-col items-center gap-y-8">
				<h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
					Learn, Practice and Master new Languages with LingoTwin.
				</h1>
				<div className="flex  flex-col items-center gap-y-3 max-w-[330px] w-full">
					<ClerkLoading>
						<Loader
							className="
        h-5 w-5 text-muted-foreground animate-spin"
						></Loader>
					</ClerkLoading>
					<ClerkLoaded>
						<SignedOut>
							<SignUpButton
								mode="modal"
								afterSignUpUrl="/learn"
								afterSignInUrl="/learn"
							>
								<Button size="lg" variant={"secondary"}>
									Get Started
								</Button>
							</SignUpButton>

							<SignInButton
								mode="modal"
								afterSignUpUrl="/learn"
								afterSignInUrl="/learn"
							>
								<Button size="lg" variant={"primaryOutline"}>
									I Already Have An Account
								</Button>
							</SignInButton>
						</SignedOut>
						<SignedIn>
              <Link href="/learn">
              <Button size ="lg" variant={"secondary"} className="w-full">Continue Learning</Button>
              </Link> 
            </SignedIn>
					</ClerkLoaded>
				</div>
			</div>
		</div>
	);
};

export default page;
