import react from "react"


function DropDownMenu(props) {
  const { mapSizeChange } = props;

  return (
    <div className="flex items-center">
      <select
        onChange={mapSizeChange}
        id="mapSzie"
        className="text-center bg-gray-50 my-5 bg-green-200 border border-gray-300\
         text-gray-900 text-sm rounded focus:ring-blue-500\
          focus:border-blue-500 block p-2.5 dark:bg-gray-700\
           dark:border-gray-600 dark:placeholder-gray-400\
            dark:text-white dark:focus:ring-blue-500\
             dark:focus:border-blue-500 w-full"
        defaultValue="3"
      >
        <option>Map size</option>
        <option value="3">3/3</option>
        <option value="4">4/4</option>
        <option value="5">5/5</option>
        <option value="6">6/6</option>
        <option value="7">7/7</option>
      </select>
    </div>
  );
}

export default DropDownMenu;