export default function Header({ image }) {
  return (
    <div id="header">
      <img src={image} alt="A bag of cash with USD sign" />
      <h1>Investment Calculator</h1>
    </div>
  )
}
