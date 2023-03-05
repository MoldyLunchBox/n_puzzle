import react from "react"
import Grid from "./Grid"
import DropDownMenu from "./DropDownMenu"
export default function Puzzle({onSubmit, values, mapSize, mapSizeChange}){
    return (
        <form onSubmit={onSubmit}>
        <div className="w-full max-w-screen-lg mx-auto flex">
          <div className="w-2/3">
            <div className="grid-Container">

               <Grid values={values} mapSize={mapSize} /> 
            </div>
          </div>
          <div className="w-1/3 bg-gray-100 flex items-center">
            <div className="h-full flex flex-col justify-center border-4 border-indigo-200 border-r-indigo-500">
              <div className=" w-24 mx-5">
                <DropDownMenu className="my-5 py-2" mapSizeChange={mapSizeChange} />
                <button type="submit" className="my-5 py-2  w-full rounded bg-blue-400 text-white">Submit</button>
                {/* <EditMap mapEdit={mapEdit} /> */}

              </div>


            </div>
          </div>
        </div>
      </form>
    )
}