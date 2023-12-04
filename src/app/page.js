import Installation from "./components/installation"
import Building from "./components/building"
import Difficulties from "./components/difficulties"
import Solve from "./components/solve"

export default function Home() {
  return (
    <main className="container mx-auto">
        <Installation />
        <Building />
        <Difficulties />
        <Solve />
    </main>
  )
  }