import Header from "../components/header/Header";

const StatisticPage = () => {
  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Statistics</h1>
        <div className="statistic-section">
          <h2 className="text-lg">
            Welcome{" "}
            <span className="text-green-700 font-bold text-xl">Admin</span>
          </h2>
          <div className="statistic-cards flex my-10">
            <div className="card-item bg-gray-800 p-8 rounded-lg">
              <div className="flex gap-x-4">
                <div className="rounded-full bg-white w-16 h-16 p-3">
                  <img src="images/user.png" alt="user" />
                </div>
                <div className="text-white">
                  <p className="mb-2 text-lg font-medium text-gray-400">Total Customers</p>
                  <p className="text-xl font-semibold text-gray-200">6</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticPage;
