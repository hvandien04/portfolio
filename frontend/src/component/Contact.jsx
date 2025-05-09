import { Mail, Phone, MapPin} from "lucide-react";
import Button from "./ui/Button";

const Contact = () => {
    const Contact = [
        { name: "Email", value: "Hoangvandien051004@gmail.com", icon: <Mail className="h-5 w-5 text-cyan-400" /> },
        { name: "Phone", value: "+84 123 456 789", icon: <Phone className="h-5 w-5 text-cyan-400" /> },
        { name: "Location", value: "TP.HCM, Vietnam", icon: <MapPin className="h-5 w-5 text-cyan-400" /> },
    ]

    return (
        <section id="contact" className="py-24 min-h-screen md:min-h-[620px] w-full">
            <div className="container mx-auto p-4">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className=" mb-4 relative font-bold text-black text-2xl md:text-4xl after:content-[''] after:w-24 after:h-1 after:mt-4 after:bg-cyan-400 after:block after:mx-auto" >Get In Touch</h2>
                    <p className="text-gray-500">Feel free to reach out if you want to collaborate with me, or simply have a chat</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <div className="text-left">
                        <h3 className="text-2xl font-bold mb-8 text-black">Contact Information</h3>
                        <div className="space-y-6 my-12">
                            {Contact.map((contact, index) => (
                                <div key={index} className="flex items-center space-x-4">
                                    <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center">
                                        {contact.icon}
                                    </div>
                                    <div className="">
                                        <h4 className="font-medium text-black font-sans">{contact.name}</h4>
                                        <p className="text-gray-500 font-sans">{contact.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <h3 className="text-2xl font-bold mb-8 text-black">Connect with me</h3>
                        <div className="flex space-x-4">
                            <a className="h-12 w-12 rounded-full bg-black flex items-center justify-center hover:bg-cyan-400" href="https://www.facebook.com/HoangVanDien.profile" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                                </svg>
                            </a>
                            <a className="h-12 w-12 rounded-full bg-black flex items-center justify-center hover:bg-cyan-400" href="https://github.com/hvandien04/" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github">
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="">
      
                        <form className="space-y-4 bg-white p-4 rounded-lg shadow-md text-left" action="https://formspree.io/f/xjvowzqk" method="POST">
                            <h1 className="text-2xl font-bold text-black mb-6 text-center">Send Me a Message</h1>
                            
                            <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                required
                            />
                            </div>
                            
                            <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                required
                            />
                            </div>
                            
                            <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                required
                            />
                            </div>
                            
                            <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">Message</label>
                            <textarea
                                name="message"
                                rows="4"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                required
                            />
                            </div>
                            <Button className="w-full">Send Message</Button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;