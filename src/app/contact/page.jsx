'use client'

export default function contact() {

    const handleClick = () =>{
        const input = document.querySelectorAll('input')
        const textarea = document.querySelector('textarea')
        const flashContact = document.querySelector('#flashContact')

        let compteur = 0 

        input.forEach(input=>{
            if(input.value == "")
            {
                input.classList.add('inputNotValid')
            }else{
                input.classList.remove('inputNotValid')
                compteur++
            }
        })

        if(textarea.value == "")
        {
            textarea.classList.add('inputNotValid')
        }else{
            textarea.classList.remove('inputNotValid')
            compteur++
        }

        if(compteur==4){
            textarea.value = ""

            input.forEach(input=>{
                input.value = ""
            })
            
            flashContact.classList.remove('invisible')

        }
    }


    return(
        <>
           <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px]">
                <div id="flashContact" className="mb-5 w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#22c55e] outline-none focus:border-[#6A64F1] focus:shadow-md invisible">
                    Votre message a bien été envoyé !
                </div>
                <div className="mb-5">
                    <label
                    htmlFor="name"
                    className="mb-3 block text-base font-medium text-white"
                    >
                    Nom et Prénom
                    </label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                    htmlFor="email"
                    className="mb-3 block text-base font-medium text-white"
                    >
                    Adresse Email
                    </label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@domain.com"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                    htmlFor="subject"
                    className="mb-3 block text-base font-medium text-white"
                    >
                    Le film en question
                    </label>
                    <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Film"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                    htmlFor="message"
                    className="mb-3 block text-base font-medium text-white"
                    >
                    Message
                    </label>
                    <textarea
                    rows="4"
                    name="message"
                    id="message"
                    placeholder="Type your message"
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    ></textarea>
                </div>
                <div>
                    <button 
                    className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                    onClick={handleClick}
                    >
                    Envoyer
                    </button>
                </div>

            </div>
            </div>
        </>
    )
}