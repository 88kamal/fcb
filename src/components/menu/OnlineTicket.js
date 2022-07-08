import React from 'react'
import Slider from '../Slider'
// import '../Slider.css'

export const OnlineTicket = () => {
  return (
    <div className=''>
      {/* <img className='object-contain ' src="https://webneel.net/file/images/2-18/10-long-way-indian-railways-photography-by-mohammed-anzar-nabi.jpg" alt=""/> */}
      <div className=' container mx-auto px-4 my-4'>
        {/* <Slider/> */}
      </div>
      {/* <a href="https://erail.in/">Official web site</a> */}





      <div className=' p-6'>
        <div className=' lg:p-10 lg:my-[-52px] grid lg:grid-rows-3 lg:grid-flow-col lg:gap-8 gap-2 ' >
          <div className=' flex justify-center   box1 bg-purple-700  transition duration-500 rounded-md hover:outline outline-2  outline-offset-2 hover:scale-110  ' style={{ padding: '9px' }}>
          <i className="fa fa-home text-5xl text-white mx-2 " aria-hidden="true"></i>
            <a className=' text-center text-white font-bold font-sans ' href="https://erail.in/">
              Home <br /> All</a>
          </div>

          <div className=' flex justify-center  box1 bg-sky-500  transition duration-500 rounded-md hover:outline outline-2  outline-offset-2 hover:scale-110' style={{ padding: '9px' }}>
          <i className="fas fa-train text-5xl text-white mx-2"></i>
            <a className=' text-center text-white font-bold font-sans ' href="https://erail.in/train-running-status">Spot Train <br /> train-running-status </a>
          </div>

          <div className=' flex justify-center  box1 bg-lime-600  transition duration-500 rounded-md hover:outline outline-2  outline-offset-2 hover:scale-110' style={{ padding: '9px' }}>
          <i className="fa fa-barcode text-5xl text-white mx-2"></i>
            <a className=' text-center text-white font-bold font-sans' href="https://erail.in/pnr-status">PNR <br /> Check PNR status</a>
          </div>
          <div className=' flex justify-center  box1 bg-emerald-600  transition duration-500 rounded-md hover:outline outline-2  outline-offset-2 hover:scale-110' style={{ padding: '9px' }}>
          <i className="fas fa-train text-5xl text-white mx-2"></i>
            <a className=' text-center text-white font-bold font-sans' href="https://erail.in/trains-between-stations">Train/Seat <br /> Trains-Between-Stations</a>
          </div>
          <div className=' flex justify-center  box1 bg-cyan-600  transition duration-500 rounded-md hover:outline outline-2  outline-offset-2 hover:scale-110' style={{ padding: '9px' }}>
          <i class="fa text-5xl text-white mx-2 fa-route"></i>
            <a className=' text-center text-white font-bold font-sans' href="https://erail.in/train-enquiry">Route <br />Train Enquiry</a>
          </div>
          <div className=' flex justify-center  box1 bg-indigo-700  transition duration-500 rounded-md hover:outline outline-2  outline-offset-2 hover:scale-110' style={{ padding: '9px' }}>
          <i class='fas text-5xl text-white mx-2 fa-users'></i>
          <a className=' text-center text-white font-bold font-sans' href="https://erail.in/train-seats?from=&to=&date=&quota=">Seat<br />Train Seat</a>
          </div>
          <div className=' flex justify-center  box1 bg-orange-400  transition duration-500 rounded-md hover:outline outline-2  outline-offset-2 hover:scale-110' style={{ padding: '9px' }}>
          <i className="fas fa-train text-5xl text-white mx-2"></i>

            <a className=' text-center text-white font-bold font-sans' href="https://erail.in/station-live">Station <br />Station Live</a>
          </div>
          <div className=' flex justify-center  box1 bg-rose-700  transition duration-500 rounded-md hover:outline outline-2  outline-offset-2 hover:scale-110' style={{ padding: '9px' }}>
          <i className="fa fa-rotate-right text-5xl text-white mx-2 "></i>
                      <a className=' text-center text-white font-bold font-sans' href="https://erail.in/railway-ticket-cancellation-charges">Refund <br />Railway Ticket cancelletion charge</a>
          </div>
          <div className=' flex justify-center  box1 bg-pink-500  transition duration-500 rounded-md hover:outline outline-2  outline-offset-2 hover:scale-110' style={{ padding: '9px' }}>
          <i class="fa fa-ticket text-5xl text-white mx-2"></i>
            <a className=' text-center text-white font-bold font-sans' href="https://erail.in/train-fare">Fare <br />Train Fare</a>
          </div>
          {/* <div className=' flex justify-center  box1 bg-pink-500  transition duration-500 rounded-md hover:outline outline-2  outline-offset-2 hover:scale-110' style={{ padding: '9px' }}>
            <a className=' text-center text-white font-bold font-sans' href="https://erail.in/train-enquiry">Route <br />Train Enquiry</a>
          </div> */}
        </div>
      </div>
    </div>
  )
}
