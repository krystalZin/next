import Image from 'next/image'

export default function Header() {
    return (
        <header className="bg-blue-500 text-white p-2 mb-8">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Webpage Using NextJS</h1>
                <Image src="/images/nextjs.png" className="p-3" width={100} height={100} alt="Next.js Logo" />
            </div>
        </header>
    )
}