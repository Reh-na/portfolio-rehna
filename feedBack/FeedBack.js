import React, { useEffect,useState } from "react";

const FeedBack = () => {
    const [rating, setRating] = useState(0);

    const handleRatingChange = (value) => {
        setRating(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can submit the review and rating data
        console.log('Submitted Rating:', rating);
     
        // Reset form fields
        setRating(0);
       
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Scroll to the top smoothly when the FeedBack component mounts
        });
    }, []);

    return (
        <div className="flex justify-center items-center">
            <div className="gap-5 flex max-md:flex-col mt-32 max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
                    <div className="flex flex-col px-5 items-start max-md:max-w-full max-md:mt-10">
                        <div className="text-primary1 text-5xl font-bold leading-[56.16px] self-stretch max-md:max-w-full max-md:text-4xl">
                            Want to Submit Feedback?
                        </div>
                        <div className="text-slate-900 text-lg mr-5 leading-6 self-stretch mt-4 max-md:max-w-full">
                            We’d love to hear from you.
                        </div>
                        <img
                            loading="lazy"
                            src="/img/review.svg"
                            className="aspect-[1.95] object-contain object-center w-[467px] overflow-hidden max-w-full mt-16 max-md:mt-10"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-start bg-stone-50 flex grow flex-col w-full p-6 rounded-lg max-md:max-w-full max-md:mt-10 max-md:px-5">
                        <div className="text-slate-900 text-2xl font-bold leading-8 self-stretch max-md:max-w-full">
                            Fill out the form!
                        </div>
                        <div className="text-slate-500 text-lg leading-6 self-stretch mt-2.5 max-md:max-w-full">
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="items-stretch self-stretch flex justify-between gap-1 mt-6 max-md:max-w-full max-md:flex-wrap">
                                <div className="items-stretch flex grow basis-[0%] flex-col">
                                    <label htmlFor="firstname" className="text-slate-900 text-base leading-6">First name</label>
                                    <input type="text" id="firstname" name="firstname" placeholder="Enter your first name" className=" text-base border  border-gray-300 p-2 leading-6 whitespace-nowrap justify-center bg-white mt-2.5 w-full md:max-w-72 pr-16 py-3 rounded-lg items-start max-md:pr-5"></input>
                                </div>
                                <div className="items-stretch flex grow basis-[0%] flex-col">
                                    <label htmlFor="lastname" className="text-slate-900 text-base leading-6">Location</label>
                                    <input type="text" id="lastname" name="lastname" placeholder="Enter your city, state.." className=" text-base border   border-gray-300  p-2 leading-6 whitespace-nowrap justify-center bg-white mt-2.5  w-full md:max-w-72 pr-16 py-3 rounded-lg items-start max-md:pr-5"></input>
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-slate-900 text-base p-2 leading-6">Email</label>
                                <input type="mail" id="email" name="email" placeholder="Enter your email address" className="mt-1 p-3 border w-full  border-gray-300 rounded-md"></input>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-slate-900 text-base leading-6">Message</label>
                                <textarea id="message" name="message" placeholder="Enter your message" className="mt-1 p-3 w-full md:max-w-full border border-gray-300 rounded-md"></textarea>
                            </div>
                            <div>
                                {[1, 2, 3, 4, 5].map((value) => (
                                    <span
                                        key={value}
                                        style={{ margin:30, cursor: 'pointer', fontSize: 35 , color: value <= rating ? 'gold' : 'gray' }}
                                        onClick={() => handleRatingChange(value)}
                                    >
                                        &#9733;
                                    </span>
                                ))}
                            </div>
                            <button type="submit" className="text-zinc-50 text-base ml-40 leading-6 whitespace-nowrap justify-center items-stretch bg-primary1 hover:bg-secondary1 mt-6 px-6 py-4 rounded-[30px] self-start max-md:px-5">
                                Submit Review
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedBack;
