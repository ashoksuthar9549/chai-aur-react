import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/ashoksuthar9549')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 flex items-center gap-10 justify-around max-w-lg rounded-3xl mx-auto py-8'>
        <img className='rounded-full' src={data.avatar_url} alt="Git picture" width={100} />
        <div>
            <h2 className='text-xl font-normal'>Github User: {data.name}</h2>
            <h4 className='text-md font-normal'>Username: {data.login}</h4>
            <h4 className='text-md font-normal'>Following: {data.following}</h4>
            <h4 className='text-md font-normal'>Followers: {data.followers}</h4>
            <Link to={data.html_url} className="text-gray-500 text-center inline-block">
                            <svg
                                className="w-8 h-8"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
            </Link>
        </div>
    </div>
  )
}

export default Github

export const gitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ashoksuthar9549')
    return response.json();
}
