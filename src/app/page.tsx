import Image from 'next/image'
import Link from 'next/link'

function HomePage() {
  return (
    <main>
      <div>
        Hello! I am a software developer, currently based in Glasgow, Scotland.
      </div>
      <div>
        <Image src="/images/fun-libby.png" alt="me" width="64" height="64" />
      </div>
    </main>
  )
}

export default HomePage
