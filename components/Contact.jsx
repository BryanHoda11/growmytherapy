"use client"

const Contact = () => {
    return (
        <>
        
            <form className="max-w-md mx-auto p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg space-y-5 my-10">
                <h1 className="text-2xl text-center font-semibold pb-3">Contact Me</h1>

                <div className="flex flex-col">
                    <label htmlFor="name" className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-200"> Name </label>
                    <input id="name" type="text" className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2 text-sm focus:border-red-500 focus:ring-red-500 outline-none" placeholder="Your full name" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="phone" className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-200"> Phone </label>
                    <input id="phone" type="tel" className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2 text-sm focus:border-red-500 focus:ring-red-500 outline-none" placeholder="+91‑9876543210" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-200"> Email </label>
                    <input id="email" type="email" className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2 text-sm focus:border-red-500 focus:ring-red-500 outline-none" placeholder="name@example.com" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="message" className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-200"> What brings you here? </label>
                    <textarea id="message" rows="4" className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2 text-sm focus:border-red-500 focus:ring-red-500 outline-none resize-none" placeholder="Tell us a little about your goals…" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="time" className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-200"> Preferred time to reach you </label>
                    <input id="time" type="text" className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2 text-sm focus:border-red-500 focus:ring-red-500 outline-none" placeholder="e.g., 10 AM – 1 PM IST" />
                </div>

                <div className="flex items-center">
                    <input id="consent" type="checkbox" className="h-4 w-4 rounded border-gray-300 dark:border-gray-700 text-red-600 focus:ring-red-500" />
                    <label htmlFor="consent" className="ml-2 text-sm text-gray-700 dark:text-gray-200"> I agree to be contacted </label>
                </div>

                <button type="submit" className="w-full cursor-pointer rounded-lg bg-red-600 py-2 text-white text-sm font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"> Submit </button>
            </form>

        </>
    )
}

export default Contact
