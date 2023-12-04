export default function Installation() {
    return (
        <>
            <div className="bg-blue-400 p-8 rounded-md mb-8">
                <h1 className="text-xl font-bold mb-4">Installation</h1>

                <p className="text-md mb-4">
                    Installing Next.js is a straightforward process. I followed these steps:
                </p>

                <p className="mb-4">
                    <strong className="text-lg">Prerequisites:</strong> Ensured I have Node.js and npm installed on my machine. *You can download them from the official website*
                </p>

                <p className="mb-4">
                    <strong className="text-lg">Create a Next.js App:</strong> I ran the following command in the terminal to create a new Next.js app:
                </p>

                <p className="bg-gray-300 p-2 rounded-md my-2">
                    <code>npx create-next-app my-next-app</code>
                </p>

                <p className="mb-4">
                    <strong className="text-lg">Navigate to the Project Directory:</strong> I moved into the newly created project directory:
                </p>

                <p className="bg-gray-300 p-2 rounded-md my-2">
                    <code>cd my-next-app</code>
                </p>

                <p className="mb-4">
                    <strong className="text-lg">Run the Development Server:</strong> Start the development server to preview your app locally:
                </p>

                <p className="bg-gray-300 p-2 rounded-md my-2">
                        <code>npm run dev</code>
                </p>
                
                <p className="mb-4">
                    This launched my Next.js app at <code className="bg-gray-200 p-1 rounded-md">http://localhost:3000</code>.
                </p>

                <p className="mb-4">
                    <strong className="text-lg">Explore and Customize:</strong> I opened the project in my preferred code editor, Visual Studio Code, and started building my Next.js webpage.
                </p>
            </div>
        </>
    )
}