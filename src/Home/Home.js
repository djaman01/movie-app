import ListButton from "../ListButton/ListButton"

import './home.css'

export default function Home() {
  return (
    <div className="all-home-page">
      <h1 className='hello'>Welcome Jaafar </h1>
      <div className="all-home-page">
        <img src="/Jaafar.jpg" alt="Photo Jaafar Bendahou" style={{ width: 300, height: 300, marginTop: 180 }} />
        <div>
          <ListButton />
        </div>
      </div>
    </div>
  )
}
