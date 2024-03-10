import headImg from '../assets/investment-calculator-logo.png';

export default function Header() {
  return (
    <header id='header'>
        <img src={headImg} alt="Investment Logo" />
        <h1>Investment Calculator</h1>
    </header>
  )
}
