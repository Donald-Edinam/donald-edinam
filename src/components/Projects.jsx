import React from "react"
import Vacation from "../../src/assets/vacation.jpg"
import { motion } from "framer-motion"

// const callouts = [
//     {
//         name: 'Built with react and commerce.js',
//         description: 'Ecommerce website',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
//         imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
//         href: '#',
//     },
//     {
//         name: 'Unlimited movies at your fingertips',
//         description: 'Movie Streaming Webapp',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
//         imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
//         href: '#',
//     },
//     {
//         name: 'Showcase your branding with top-notch langding page',
//         description: "Dave's landing Page",
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
//         imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
//         href: '#',
//     },
// ]

export default function Projects() {
    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-3xl font-bold text-gray-900">Latest Project From ALX AiCE Course</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">

                        {/* New Demo project */}
                        <div key={""} className="group relative">
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                    <img
                                        src={Vacation}
                                        alt={"Holiday"}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-2xl text-white-500">
                                    <a href={"https://drive.google.com/file/d/1hqyHAGLurWGU7aycpuISMLjSUZhmdlRd/view?usp=sharing"}>
                                        <span className="absolute inset-0" />
                                        VacAI presentation and prototype
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-gray-900">
                                    <a href="https://drive.google.com/file/d/1hqyHAGLurWGU7aycpuISMLjSUZhmdlRd/view?usp=sharing">Learn more</a>
                                </p>
                            </div>

                        {/* {callouts.map((callout) => (
                            <div key={callout.name} className="group relative">
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                    <img
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500">
                                    <a href={callout.href}>
                                        <span className="absolute inset-0" />
                                        {callout.name}
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                            </div>
                        ))} */}
                    </div>
                </div>
            </div>
        </div>
    )
}
