"use client"
import Image from "next/image"

const About = () => {
    return (
        <>
            <div className="about my-10 w-[80%] mx-auto h-auto flex justify-center gap-5">
                <div className="info w-1/2">
                    <h3 className="text-2xl pb-3 font-semibold">About Dr. Serena Blake</h3>

                    <div className="paras flex flex-col gap-4">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate culpa ut distinctio nam laudantium reiciendis, harum aliquid ipsam dolorum? Consequunturmagnam reiciendis exercitationem vel consectetur asperiores veritatis quasi corrupti voluptatem, fugit hic similique. Aspernatur pariatur quos aut nam rerum quidem assumenda quisquam molestiae dicta, repellendus est recusandae fugiat eaque nobis. Provident distinctio ipsa obcaecati, voluptates libero voluptas aliquam! Voluptatum quisquam quidem sit, eum, eius placeat ipsum qui nemo id, necessitatibus cum dolorem voluptas harum commodi explicabo cupiditate numquam saepe tenetur nobis atque ullam ipsa. Accusamus ipsum expedita omnis. Omnis fugiat hic ipsa maiores ab odio aliquam deserunt placeat soluta praesentium.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate culpa ut distinctio nam laudantium reiciendis, harum aliquid ipsam dolorum? Consequuntur magnam reiciendis exercitationem vel consectetur asperiores veritatis quasi corrupti voluptatem, fugit hic similique. Aspernatur pariatur quos aut nam rerum quidem assumenda quisquam molestiae dicta, repellendus est recusandae fugiat eaque nobis. Provident distinctio ipsa obcaecati, voluptates libero voluptas aliquam! Voluptatum quisquam quidem sit, eum, eius placeat ipsum qui nemo id, necessitatibus cum dolorem voluptas harum commodi explicabo cupiditate numquam saepe tenetur nobis atque ullam ipsa. Accusamus ipsum expedita omnis. Omnis fugiat hic ipsa maiores ab odio aliquam deserunt placeat soluta praesentium.</p>
                    </div>
                </div>

                <div className="image w-1/2">
                    <Image width={1080} height={1080} className="rounded-xl" src="/images/serena.webp" alt="serena" />
                </div>
            </div>
        </>
    )
}

export default About
