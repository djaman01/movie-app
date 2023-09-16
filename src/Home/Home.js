import NewButton from "../NewButton/NewButton"

export default function Home() {
  return (
    <>
      <img src="/jaafar.jpg" alt="Photo Jaafar Bendahou" style={{ width: 300, height: 300, marginTop: 180 }} />
      <div>
        {<NewButton />}
      </div>
    </>
  )
}
