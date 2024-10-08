import { MainTainConsistent } from "./components/MainTainConsistent/MainTainConsistent";
import { ManageMultiple } from "./components/ManageMultiple/ManageMultiple";
import { Schedule } from "./components/Schedule/Schedule";
import { SocialMedia } from "./components/SocialMedia/SocialMedia";




function App() {
	return (
		<>
			<SocialMedia />
			<ManageMultiple />
			<MainTainConsistent />
			<Schedule/>
		</>
	);
}

export default App;
