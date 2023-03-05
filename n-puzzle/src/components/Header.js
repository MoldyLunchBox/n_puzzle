import react from "react"


export default function Header({ title }) {
    return (
        <div className="flex mb-4">
            <div className="w-1/3 bg-gray-400 h-12"></div>
            <h1 className="w-1/3 bg-gray-500 h-12 text-3xl text-white font-bold"> {title} </h1>
            <div className="w-1/3 bg-gray-400 h-12"></div>
        </div>
    )
}