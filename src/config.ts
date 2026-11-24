export const SITE_CONFIG = {
    title: "Galaxy",
    logoSrc: "/favicon.svg",
    description: "A student in Universitas Cenderawasih.",
    author: "Meky Kwak",
    signature: "MK",
    site: "https://galaxy.ceda.is",
    imageServer: ["https://images.pexels.com"],
    postsPerPage: 6,
    projectsPerPage: 12,
    defaultImage: "/blog-placeholder-1.png",
    nav: [
        { text: "Projects", href: "/blog" },
        {
            text: "Image",
            href: "/gallery",
            children: [
                { text: "2025", href: "/gallery/2025/shinjukugyoencherryblossoms" }
            ]
        },
        { text: "Cities", href: "/traces" },
    ],
    homepage: {
        harmonicSystem: {
            seed: 2026,
            speed: 0.0042
        },
        links: [
            { text: "Get to know meq", href: "/blog" },
            { text: "Explore more about me", href: "/traces" }
        ]
    },
    footer: {
        social: [
            { text: "Work Experience", href: "/projects" },
            { text: "Social", href: "/elsewhere" }
        ],
        copyright: "Meky Kwak."
    },
    elsewhere: [
        {/*
            name: "X",
            handle: "@OwenCedaric",
            url: "https://x.com/OwenCedaric",
        */},
        {
            name: "GitHub",
            handle: "Meky Kwak",
            url: "https://github.com/meky0014",
        },
        {
            name: "Instagram",
            handle: "@mekymarley",
            url: "https://instagram.com/mekymarley",
        },
        {
            name: "Mail",
            handle: "kwakmeky@gmail.com",
            url: "kwakmeky@gmail.com",
        }
    ],
    articleCopyright: {
        enabled: true,
        declaration: "No part of this article may be reproduced, distributed, or transmitted in any form or by any means without the prior written permission of the author."
    }
};
