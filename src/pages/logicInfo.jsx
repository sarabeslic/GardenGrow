import React from 'react';
import { MdWaterDrop, MdSunny } from 'react-icons/md';
import { BsCloudSunFill } from "react-icons/bs";
import { TiWeatherCloudy } from "react-icons/ti";

function Logic(props) {

  const waterDrops = [];
  const suns = [];
  
  // Check if props.water and props.light are defined
  if (typeof props.water !== 'undefined' && typeof props.light !== 'undefined') {

    if (props.water === 'daily') {
        waterDrops.push(<MdWaterDrop key={1} className="water-drop" />);
        waterDrops.push(<MdWaterDrop key={2} className="water-drop" />);
        waterDrops.push(<MdWaterDrop key={3} className="water-drop" />);
      } else if (props.water === 'few days') {
        waterDrops.push(<MdWaterDrop key={1} className="water-drop" />);
        waterDrops.push(<MdWaterDrop key={2} className="water-drop" />);
      } else if (props.water === 'weekly') {
        waterDrops.push(<MdWaterDrop key={1} className="water-drop" />);
      }
    }

    // Sunlight icons
    if (props.light === 'full sun') {
      suns.push(<MdSunny className='text-3xl text-yellow-400' key={1} />);
    } else if (props.light === 'partial shade') {
      suns.push(<BsCloudSunFill className='text-3xl text-blue-400'key={1} />);
    } else if (props.light === 'shade') {
      suns.push(<TiWeatherCloudy className='text-3xl text-blue-700' key={1} />);
    }


  return (
    <div className="flex flex-col ">
      <div className="flex flex-row py-6">
        {waterDrops.map(drop => drop)}
      </div>
      <div className='flex flex-row'>
        {suns.map(sun => sun)}
      </div>
    </div>
  );
}
export default Logic;


// Explanation of scales used:
// For water: daily, few days, weekly
// For light: full sun, partial shade, shade
// For season: spring, summer, fall 