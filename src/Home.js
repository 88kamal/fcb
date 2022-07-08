import React from 'react'
import { All } from "./components/All";
import { Search } from "./components/Search";
import { Update } from "./components/Update";
import { Footer } from "./components/Footer";
import { Font } from './Font';

export const Home = () => {
  return (
    <div>
        {/* <Search /> */}
        <Font/>
        <h1 className='text-center my-3 text-2xl'>Online Form Fill कराने के लिए <a className=' text-blue-500' href="/form">click</a> करे</h1>
      <Update />
      <All />
      <Footer/>
    </div>
  )
}
