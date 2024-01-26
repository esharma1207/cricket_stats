import { Outlet } from "react-router-dom"

export default function StatsLayout() {
  return (
    <div className="careers-layout">
      <h2>India's Upcoming Matches!</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>
      
      <Outlet />
    </div>
  )
}