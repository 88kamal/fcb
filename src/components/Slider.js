import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Slider.css'


function Slider() {
  const [popup, setPopup] = React.useState(false);
  const handleDragStart = (e) => e.preventDefault();


  const responsive = {
    0: { items: 1 },
    1024: { items: 3 },
  };

  const items = [

    // <div className="modal_action flex justify-center">
    //   <img className=' ' style={{ width: '', borderRadius: "" }} src="https://images.news18.com/ibnlive/uploads/2018/04/Indian-Railways-new-makeover-13.jpg?im=Resize,width=360,aspect=fit,type=normal?im=Resize,width=320,aspect=fit,type=normal" role="presentation" onClick={() => setPopup(true)} /></div>,
    // <img src="https://images.unsplash.com/photo-1514828260103-1e9bf9a58446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" style={{ width: '', borderRadius: "" }} role="presentation" />,
    // <img src="https://images.unsplash.com/photo-1582538883674-a7f8bf900004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" role="presentation" />,
    // <img src="https://images.pexels.com/photos/325200/pexels-photo-325200.jpeg?auto=compress&cs=tinysrgb&w=800" role="presentation" />,
    <img src="https://images.pexels.com/photos/325200/pexels-photo-325200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" role="presentation" />,
    <img src="https://images.pexels.com/photos/912617/pexels-photo-912617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" role="presentation" />,
    <img src="https://images.pexels.com/photos/1448899/pexels-photo-1448899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" role="presentation" />,
    <img src="./Img/s8.png" role="presentation" />,
    <img src="./Img/s9.png" role="presentation" />,

  ];
  return (
    <>
      {popup && (
        <div className="popup">
          <div className="popup_in">
            <div className="popup_in_in" onClick={() => setPopup(false)}>
              X
            </div>

            {/* <Form /> */}
          </div>
        </div>
      )}
      <div className=" ">
        <AliceCarousel mouseTracking items={items}
          autoPlay
          // infinite
          autoPlayInterval="3000"
          autoPlayStrategy="none"
          disableButtonsControls
          // disableDotsControls
          responsive={responsive} />
      </div>
    </>
  )

}

export default Slider