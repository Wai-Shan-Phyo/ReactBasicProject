import React from 'react'

const Buttons = ({caculate}) => {
    return (
        <div className='w-full grid grid-cols-4 bg-gray-800 '>
            <button onClick={e=>caculate(e.target.innerText)} className="hover:bg-gray-500  bold text-white  p-4  border border-gray-500 transition duration-300">C</button>
            <button onClick={e=>caculate(e.target.innerText)} className="hover:bg-gray-500  bold text-white  p-4  border border-gray-500 transition duration-300">(</button>
            <button onClick={e=>caculate(e.target.innerText)} className="hover:bg-gray-500  bold text-white  p-4  border border-gray-500 transition duration-300">)</button>
            <button onClick={e=>caculate(e.target.innerText)} className="hover:bg-gray-500  bold text-white  p-4  border border-gray-500 transition duration-300">AC</button>

            <button onClick={e=>caculate(e.target.innerText)} className="hover:bg-gray-500  bold text-white   p-4 border border-gray-500 transition duration-300">1</button>
            <button onClick={e=>caculate(e.target.innerText)} className="hover:bg-gray-500  bold text-white   p-4 border border-gray-500 transition duration-300">2</button>
            <button onClick={e=>caculate(e.target.innerText)} className="hover:bg-gray-500  bold text-white   p-4 border border-gray-500 transition duration-300">3</button>
            <button onClick={e=>caculate(e.target.innerText)} className="hover:bg-gray-500  bold text-white   p-4 border border-gray-500 transition duration-300">+</button>

            <button onClick={e=>caculate(e.target.innerText)} className="hover:bg-gray-500  bold text-white   p-4 border border-gray-500 transition duration-300">4</button>
            <button onClick={e=>caculate(e.target.innerText)} className="hover:bg-gray-500  bold text-white   p-4 border border-gray-500 transition duration-300">5</button>
            <button onClick={e=>caculate(e.target.innerText)} className="hover:bg-gray-500  bold text-white   p-4 border border-gray-500 transition duration-300">6</button>
            <button onClick={e=>caculate(e.target.innerText)} className="hover:bg-gray-500  bold text-white   p-4 border border-gray-500 transition duration-300">-</button>

            <button onClick={e=>caculate(e.target.innerText)} className="hover:bg-gray-500  bold text-white   p-4 border border-gray-500 transition duration-300">7</button>
            <button onClick={e=>caculate(e.target.innerText)} className="hover:bg-gray-500  bold text-white   p-4 border border-gray-500 transition duration-300">8</button>
            <button onClick={e=>caculate(e.target.innerText)} className="hover:bg-gray-500  bold text-white   p-4 border border-gray-500 transition duration-300">9</button>
            <button onClick={e=>caculate(e.target.innerText)} className="hover:bg-gray-500  bold text-white   p-4 border border-gray-500 transition duration-300">*</button>

            <button onClick={e=>caculate(e.target.innerText)} className="hover:bg-gray-500  bold text-white   p-4 border border-gray-500 transition duration-300">.</button>
            <button onClick={e=>caculate(e.target.innerText)} className="hover:bg-gray-500  bold text-white   p-4 border border-gray-500 transition duration-300">0</button>
            <button onClick={e=>caculate(e.target.innerText)} className="hover:bg-gray-500  bold text-white   p-4 border border-gray-500 transition duration-300">00</button>
            <button onClick={e=>caculate(e.target.innerText)} className="hover:bg-gray-500  bold text-white   p-4 border border-gray-500 transition duration-300">/</button>

            <button onClick={e=>caculate(e.target.innerText)} className="hover:bg-gray-500  bold text-white   p-4 border border-gray-500 transition duration-300">%</button>
            <button onClick={e=>caculate(e.target.innerText)} className="hover:bg-gray-500  bold text-white   p-4 border border-gray-500 bg-amber-700 transition duration-300 col-span-3">=</button>
        </div>
    )
}

export default Buttons