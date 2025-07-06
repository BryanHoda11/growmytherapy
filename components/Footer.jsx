"use client"

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-100 text-gray-800 py-10">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
                
                    <div>
                        <h2 className="text-lg font-semibold">Dr. Serena Blake, PsyD (Clinical Psychologist)</h2>
                    </div>

                    <div>
                        <p><strong>Clinic :</strong></p>
                        <p className="text-sm">1287 Maplewood Drive, Los Angeles, CA 90026</p>
                    </div>

                    <div className="text-sm space-y-1">
                        <p>Phone: (323) 555-0192</p>
                        <p>Email: <a href="mailto:serena@blakepsychology.com" className="text-blue-600 underline">serena@blakepsychology.com</a></p>
                    </div>

                    <div className="text-sm space-y-1">
                        <p><strong>Office Hours :</strong></p>
                        <p>In-person: Tue & Thu, 10 AM – 6 PM</p>
                        <p>Virtual via Zoom: Mon, Wed & Fri, 1 PM – 5 PM</p>
                    </div>

                    <div className="text-sm space-y-1">
                        <p><strong>Session Fees :</strong></p>
                        <p>$200 / Individual session</p>
                        <p>$240 / Couples session</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
