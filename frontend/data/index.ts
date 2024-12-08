import { Event } from "@/state/types";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
      id: 1,
      title: "Employee salary details stay confidential using Zero-Knowledge Proofs (ZKP).",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Seamless cross-border payroll handling in any currency.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Secure, permanent blockchain ledger",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center ",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Instant, secure transfers without third-party delays.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Effortless, trustless audits with verifiable blockchain transactions.",
      description: "",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
    },
    {
        id: 2,
        img: "/twit.svg",
    },
    {
        id: 3,
        img: "/link.svg",
    },
];

export const paymentHistory = [
    {
      date: "February 2022",
      title: "Application UI code in Tailwind CSS",
      description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages."
    },
    {
      date: "February 2022",
      title: "Application UI code in Tailwind CSS",
      description: "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project."
    },
    {
      date: "April 2022",
      title: "E-Commerce UI code in Tailwind CSS",
      description: "Get started with dozens of web components and interactive elements built on top of Tailwind CSS."
    }
];

export const companies = [
  {
    id: 1,
    name: "NODIT",
    img: "/nodit.jpg",
  },
  {
    id: 2,
    name: "APTOS",
    img: "/aptos-white.png",
  },
  {
    id: 3,
    name: "PETRA WALLET",
    img: "/petra.jpeg",
  },
  {
    id: 4,
    name: "MIZU WALLET",
    img: "/mizu.jpg",
  },
  {
    id: 5,
    name: "NEXT.js",
    img: "/nextjs.webp",
  },
];

export const events:Event[] = [
  {
    transactionId: "0xc15f066b82d219e37a31e0ea6f106cbc429133e4e4f00f838f839675b002a43d",
    eventName: "Employee Added",
    eventTime: "1730652600",
    status: "Success",
    type: "order1"
  },
  {
    transactionId: "0xfc60e8063971b10d5047d4e57c5c5cbe3b333eb58a03b1dfb0061c1c860989d3",
    eventName: "Organization Treasury Funded",
    eventTime: "1730652600",
    status: "Success",
    type: "order1"
  },
  {
    transactionId: "0x2b6b92066700227af25bd753b52074826c08ba625003e6e3997d7b79128304df",
    eventName: "Organization Treasury Funded",
    eventTime: "1730652600",
    status: "Success",
    type: "order1"
  },
  {
    transactionId: "0xbee4b9c19f467ad0930f45d1b02b25cbba18fcb412d5c611f7cec8c5eb76bb6a",
    eventName: "Organization Added",
    eventTime: "1730652600",
    status: "Success",
    type: "order1"
  },
]

export const payments:Event[]=[
  {
    transactionId: "0xe198a135d365835be660f718a172e142833fadea2dbfaeea2cc354508bb48ec5",
    eventName: "Payment Made",
    eventTime: "1730652600",
    status: "Success",
    type: "order1"
  }
]