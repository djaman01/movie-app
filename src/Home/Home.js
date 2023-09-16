import ListButton from "../ListButton/ListButton"

export default function Home() {
  return (
    <>
      <img src="/Jaafar.jpg" alt="Photo Jaafar Bendahou" style={{ width: 300, height: 300, marginTop: 180 }} />
      <div>
        {<ListButton />}
      </div>
    </>
  )
}
