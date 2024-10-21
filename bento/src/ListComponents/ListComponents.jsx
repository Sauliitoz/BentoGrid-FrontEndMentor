import CreatePost from "../components/CreatePost/CreatePost.jsx";
import FasterAudience from "../components/FasterAudience/FasterAudience.jsx";
import GrowFollowers from "../components/Grow/Grow.jsx";
import MainTainConsistent from "../components/MainTainConsistent/MainTainConsistent.jsx";
import ManageMultiple from "../components/ManageMultiple/ManageMultiple.jsx";
import Schedule from "../components/Schedule/Schedule.jsx";
import SocialMedia from "../components/SocialMedia/SocialMedia.jsx";
import WriteYourContent from "../components/WriteYourContent/WriteYourContent.jsx";

const ListComponents = () => {
	return (
		<>
			<SocialMedia />
			<ManageMultiple />
			<MainTainConsistent />
			<Schedule />
			<GrowFollowers />
			<FasterAudience />
			<CreatePost />
			<WriteYourContent />
		</>
	);
};

export { ListComponents };
