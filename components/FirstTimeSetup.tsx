import instance from "@/helpers/instance";
import useDebounce from "@/helpers/useDebounce";
import React from "react";

export default function FirstTimeSetup() {
  const [client, setClient] = React.useState<string>("");
  const [err, setErr] = React.useState<string>("");
  const [available, setAvailable] = React.useState<boolean>(false);
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const debounceValue = useDebounce<string>(client, 1200);

  let className =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClient(event.target.value);
    setErr("Checking Username Exist or not");
  };
  const CheckUsername = async () => {
    const url = `/server/check-username?username=${debounceValue}`;
    const { data } = await instance.get(url);
    if (data.success) {
      setErr("");
      setAvailable(true);
      className =
        "bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400";
      return;
    }
    setErr(data.message);
    setAvailable(false);
    className =
      "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400";
    return;
  };

  const SetUserName = () => {
    window.localStorage.setItem("client", debounceValue);
    window.localStorage.setItem(
      "userId",
      `${Math.floor(Math.random() * 9000000000) + 1}`
    );
    setDisabled(true);
  };
  React.useEffect(() => {
    if (debounceValue) {
      CheckUsername();
    }
  }, [debounceValue]);
  React.useEffect(() => {
    if (client === "") {
      setErr("Please enter a username");
      setAvailable(false);
    }
  }, [client]);
  React.useEffect(() => {
    const username = window.localStorage.getItem("client");
    setTimeout(() => {
      if (username !== null) {
        setErr("You already have a username");
        setClient(username);
        setAvailable(false);
        setDisabled(true);
      }
    }, 2000);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-full  overflow-hidden">
      <div className="mb-6">
        <label
          htmlFor="username-success"
          className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
        >
          Your name
        </label>
        <input
          type="text"
          id="username-success"
          className={className}
          onChange={handleChange}
          defaultValue={client}
          readOnly={disabled}
        />

        {available ? (
          <p className="mt-2 text-sm text-green-600 dark:text-green-500">
            <span className="font-medium">Alright!</span> Username available!
          </p>
        ) : (
          <p
            className={`mt-2 text-sm ${
              err !== "Username available!"
                ? "text-orange-400 dark:text-amber-500"
                : "text-red-400 dark:text-red-500"
            }`}
          >
            <span className="font-medium">{err}</span>
          </p>
        )}

        {available && (
          <button
            disabled={disabled}
            className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 disabled:bg-gray-500 disabled:cursor-not-allowed"
            onClick={SetUserName}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
