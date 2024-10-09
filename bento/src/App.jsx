import { CreatePost } from "./components/CreatePost/CreatePost";
import { FasterAudience } from "./components/FasterAudience/FasterAudience";
import { GrowFollowers } from "./components/Grow/Grow";
import { MainTainConsistent } from "./components/MainTainConsistent/MainTainConsistent";
import { ManageMultiple } from "./components/ManageMultiple/ManageMultiple";
import { Schedule } from "./components/Schedule/Schedule";
import { SocialMedia } from "./components/SocialMedia/SocialMedia";

function App() {
	return (
		<>
			{/* <SocialMedia />
			<ManageMultiple />
			<MainTainConsistent />
			<Schedule />
			<GrowFollowers />
			<FasterAudience /> */}
			<CreatePost />
		</>
	);
}

export default App;
