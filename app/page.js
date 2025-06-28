import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Services from "@/components/Services";


export default function Home() {
  return (
    <>
      {/* Header Section */}
      <div className="header text-center flex flex-col items-center m-5">
        <h2 className="text-xl font-semibold">Dr. Serena Blake, Ph.D.</h2>
        <p>Psychological Services & Stress Management</p>
      </div>

      <Hero />
      <About />
      <Services />
      <FAQ />
    </>
  );
}

export const metadata = {
  title: "Dr. Serena Blake - Professional Therapist",
  description: "I am a professional therapist and I'm here to help with your life problems.",
};