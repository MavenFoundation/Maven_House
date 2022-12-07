import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'



const ArtistDetail = () => {
  const [locked, setLocked] = useState("pending");



  const unlockHandler = (e) => {
    console.log('event', e);
    setLocked(e.detail);
  }

  const checkOut = (e) => {
    e.preventDefault();
    window.unlockProtocol && window.unlockProtocol.loadCheckoutModal();
  }

  const { id } = useParams();
  const history = useHistory();
  const [image, setImage] = useState();

  let bg, title, profile;

  const setBg = () => {
    if (Number(id) === 1) {
      profile = "/images/login/Kendrick.png";
      bg = '/images/creaters-name/kendrick.png';
      title = 'KENDRICK LAMAR KENDRICK LAMAR KENDRICK LAMAR';
    }
    if (Number(id) === 2) {
      profile = "/images/login/Lil-Nas-x.png";
      bg = '/images/creaters-name/lil.png';
      title = 'LIL NAS X LIL NAS X LIL NAS X';
    }
    if (Number(id) === 3) {
      profile = "/images/login/DRAKE.png";
      bg = '/images/creaters-name/drake.png';
      title = 'DRAKE DRAKE DRAKE DRAKE DRAKE';
    }
    if (Number(id) === 4) {
      profile = "/images/login/DOJA-CAT.png";
      bg = '/images/creaters-name/doja.png';
      title = 'DOJA CAT DOJA CAT DOJA CAT DOJA CAT';
    }
    if (Number(id) === 5) {
      profile = "/images/login/Emiway-Bantai.png";
      bg = '/images/creaters-name/emiway.png';
      title = 'EMIWAY EMIWAY EMIWAY EMIWAY EMIWAY';
    }
  }

  setBg();

  useEffect(() => {
    window.addEventListener('unlockProtocol', unlockHandler);
  }, [])

  return (
    <div>
      <div>
        <header className={
          ` px-4  h_creater flex object-cover bg-[75%_17%] bg-no-repeat flex-col place-content-around text-white`}
          style={{ backgroundImage: `url(${bg})` }}>
          <div className="header-wrapper">
            <marquee direction="left" scrollamount="12" loop="1">
              <h1 className="text-4xl tablet:text-[90px] md:text-[100px] font-semibold text-center ">{title}</h1>
            </marquee>
          </div>
          <div className="header-wrapper-2 relative md:flex md:justify-between">
            <div className="left-side backdrop-blur-md bg-[#00000059] items-center  md:flex gap-4 w-[500px] md:w-[573px] rounded-2xl p-3">
              <div className=" bhuvam-radius-image overflow-hidden border-4 border-[#707070]">
                <img className="object-cover w-full h-full object-top rounded-full" src={profile} alt="" />
              </div>
              <div className=" md:w-[24rem]">
                <h6 className="text-xs">DIGITAL WORLDWIDE MOMENT - OCTOBER 6TH, 2022 6:30AM IST</h6>
                <h5 className="font-semibold text-[#E8952F] text-xl mt-1">Above It All</h5>
                <p className="text-xs mt-1">Join Dane Cook on October 5th for his latest stand-up comedy event ‘Above It All’ filmed from his
                  front porch overlooking Los Angeles. This all new comedy routine is his third w/ director
                  Mart...</p>
                <button className="mt-3 font-bold text-black py-1 px-3 rounded-md bg-white" type="submit" onClick={checkOut}>Buy Ticket Now</button>
              </div>
            </div>
            <div className="right-side  w-72 mt-16 md:mt-0 md:absolute -bottom-3 right-0 ">
              <div className="flex gap-2 relative">
                <div className=" w-6 rounded-full absolute bottom-0  h-6 text-[#137B88] flex items-center justify-center  bg-[#A5EFF8] text-xs" >j</div>
                <div className="w-64 absolute right-0 bottom-0 backdrop-blur-md text-sm rounded-2xl p-2 bg-[#57506928]"><span className="text-[#A5EFF8] font-semibold">just:</span> Hello everyone,hope everyone's ready for the show!!</div>
              </div>
              <div className="relative w-72 py-4 flex items-center">
                <div className="w-6 h-6 bg-[#9B9B9B] rounded-full z-10 text-sm flex justify-center items-center absolute left-1">M</div>
                <input className="w-full outline-none focus:border-none border-none backdrop-blur-md pl-8 bg-[#6e658c1c] rounded-3xl placeholder:text-[#808891]" type="text" placeholder="Message" name="" id="" />
                <div className="cursor-pointer   w-6 bg-[#E8952F] flex items-center justify-center h-6 rounded-full absolute right-1"><i className="fa fa-arrow-right" aria-hidden="true"></i></div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div >
  )
}

export default ArtistDetail;