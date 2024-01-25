
const navLinks = [
    { name: "Home", to: "/" },
    {
        name:"Products" ,
        to: "/Products" ,
        options:[
            {name : "Product 1", to: "/Destination"},
            {name : "Product 2", to: "/Destination2"}
        ]
    },
    { name : "About" , to: "/about" },
    { name : "Contact Us" , to: "/contact-us " }
]

export default navLinks;
