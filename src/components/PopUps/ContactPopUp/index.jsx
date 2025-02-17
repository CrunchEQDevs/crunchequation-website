
import { FiX } from 'react-icons/fi';
import { FaRegCircleCheck } from "react-icons/fa6";

export default function ContactPopUp({ closeModal }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
            <div className="w-[340px] h-[242px] bg-custom-gradient p-8 rounded-md relative max-w-sm text-center text-white">
                <button 
                    onClick={closeModal} 
                    className="absolute top-4 right-4 text-white"
                >
                    <FiX size={24} />
                </button>
                <FaRegCircleCheck size={70} className="mx-auto mb-4" />
                <h2 className="text-xl font-bold mb-2 text-black">Sent Successfully</h2>
                <p className="text-sm">
                    Your message was sent successfully. We will contact you as soon as possible.
                </p>
            </div>
        </div>
    );
}
