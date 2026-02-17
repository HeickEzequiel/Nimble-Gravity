import Positions from '../positions/Positions.jsx'

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6">
      <div className="max-w-5xl mx-auto space-y-8">

        <h1 className="text-3xl font-bold text-center bg-linear-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
          Welcome to Nimble Gravity
        </h1>

        <Positions />

      </div>
    </div>
  )
}

export default Home