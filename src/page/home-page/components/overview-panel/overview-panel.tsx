const OverViewPanel = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Overview</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Example cards, replace with actual data */}
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-sm font-medium">Active Players</h3>
          <p className="text-xl font-bold">152</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-sm font-medium">Games This Week</h3>
          <p className="text-xl font-bold">84</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-sm font-medium">Pending Challenges</h3>
          <p className="text-xl font-bold">5</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-sm font-medium">Active Matches</h3>
          <p className="text-xl font-bold">2</p>
        </div>
      </div>
    </div>
  );
};

export default OverViewPanel;
