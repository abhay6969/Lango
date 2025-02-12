type Props = {
	children: React.ReactNode;
};

import {Header} from "./header";
import  {Footer} from "./footer";

const MarketingLayout = ({ children }: Props) => {
	return (
		<div className="flex min-h-screen flex-col">
            <Header/>
			<main className="flex-1  flex flex-col  items-center justify-center">
				{children}
			</main>
            <Footer/>
		</div>
	);
};

export default MarketingLayout;
