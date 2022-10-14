import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[90vh] w-full">
            <h1 className='text-4xl text-center tracking-tight font-bold text-slate-800 max-w-7xl sm:text-5xl md:text-6xl lg:text-8xl'>
            The React Framework for Production
            </h1>
            <p className='text-center max-w-4xl mt-4'>
            Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.
            This template will help you jump-start any project.
            </p>

            {/* CTA buttons */}
            <div className='flex flex-col sm:flex-row gap-4 mt-8 px-4 w-full justify-center'>
                <Link
                    to='/'
                    className='inline-flex items-center justify-center w-full sm:w-fit px-10 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-600 hover:bg-slate-700'
                >
                    Get started
                </Link>
                < Link
                    href="/"
                    className='inline-flex items-center justify-center w-full sm:w-fit px-10 py-3 border border-transparent text-base font-medium rounded-md text-slate-700 bg-slate-200 hover:bg-slate-300'
                >
                    Learn more
                </Link>
                </div>
        </div>
    )
}

export default Home
