import React from "react";
import FirstTimeSetup from "@/components/FirstTimeSetup";
import RecentSpaces from "@/components/RecentSpaces";

const Home = () => {
  const [first, setfirst] = React.useState(false);
  React.useEffect(() => {
    const IsUserEsixt = window.localStorage.getItem("client");
    if (IsUserEsixt === null || IsUserEsixt === undefined) {
      setfirst(false);
    }
    setfirst(true);
  }, [first]);

  return (
    <>
      {first ? (
        <RecentSpaces />
      ) : (
        <>
          <div
            className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
            role="alert"
          >
            <span className="font-medium">Info!</span> Adding Username will help
            you to communitcate with others people ,<br /> This name is also use
            Join Personal Space
          </div>
          <FirstTimeSetup />
        </>
      )}
    </>
  );
};
export default Home;
