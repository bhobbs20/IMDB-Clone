import React from 'react';
import Image from "next/image";
import movieRequests from "../utils/movieRequests";
import {useRouter} from "next/router"

function Header() {
    const router = useRouter()
    return (
        <div className="bg-gray-800 text-gray-200 flex flex-col items-center p-6 select-none sm:flex-row justify-between">
            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                width={85}
                height={75}
                className="cursor-pointer active:brightness-110"
            />
            <ul className="flex flex-row">
            {Object.entries(movieRequests).map(([key, { title, url }]) => (
                <li className="mx-2" key={key}>
                    <h2 
                        onClick={()=>(router.push(`?genre=${key}`))} 
                        className="m-6 cursor-pointer hover:text-white active:text-red-400" 
                    >
                        {title}
                    </h2>
                </li>
            ))}
            </ul>
        </div>
    );
}

export default Header;
