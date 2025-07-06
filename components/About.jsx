"use client"
import Image from "next/image"

const About = () => {
    return (
        <>
            <div className="about my-10 w-[85%] mx-auto h-auto flex flex-col xl:flex-row justify-center gap-5">
                <div className="info w-full xl:w-[60%]">
                    <h3 className="text-lg sm:text-2xl pb-5 font-semibold">About Dr. Serena Blake</h3>

                    <div className="paras flex flex-col gap-4">
                        <p className="max-sm:text-sm">Hello! Welcome to my page, I am Dr. Serena. I treat people with therapy going through hardships like depression, relationship issues & stress. I have 8+ years of experience in this field and have consulted 500+ patients. I have been quiet successful and helped people cure / heal from the problems they go through. In this website you'll know me very well but still if you have queries feel free to contact me!</p>
                        <p className="max-sm:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate culpa ut distinctio nam laudantium reiciendis, harum aliquid ipsam dolorum? Consequuntur magnam reiciendis exercitationem vel consectetur asperiores veritatis quasi corrupti voluptatem, fugit hic similique. Aspernatur pariatur quos aut nam rerum quidem assumenda quisquam molestiae dicta, repellendus est recusandae fugiat eaque nobis. Provident distinctio ipsa obcaecati, voluptates libero voluptas aliquam! Voluptatum quisquam quidem sit, eum, eius placeat ipsum qui nemo id, necessitatibus cum dolorem voluptas harum commodi explicabo cupiditate numquam saepe tenetur nobis atque ullam ipsa. Accusamus ipsum expedita omnis. Omnis fugiat hic ipsa maiores ab odio aliquam deserunt placeat soluta praesentium.</p>
                        <p className="max-sm:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corrupti recusandae corporis quas consequuntur quidem, libero ipsum repudiandae vero! Animi velit eveniet ad dicta expedita. Ipsam ab repudiandae eos, aut aspernatur neque nostrum quibusdam quod non expedita sed doloremque vero maxime minima labore accusantium explicabo fugiat sit iste provident molestias.</p>
                    </div>
                </div>

                <div className="image w-full xl:w-[40%]">
                    <Image width={1080} height={1080} className="rounded-xl" src="/images/serena.webp" alt="serena" />
                </div>
            </div>
        </>
    )
}

export default About
