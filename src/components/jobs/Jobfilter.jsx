const jobfilters = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        <div className="space-y-4">
          <inputfield placeholder="Location" className="w-full" />
          <inputfield placeholder="Salary Range" className="w-full" />
          <button text="Apply Filters" className="w-full" />
        </div>
      </div>
    );
  };
  
  export default jobfilters;