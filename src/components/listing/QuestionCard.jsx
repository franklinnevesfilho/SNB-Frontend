import React from 'react';

const QuestionCard = ({user, question, answer, date}) => {
    return (
        <div className="border-b-[1px] border-black flex flex-col gap-[1vmax] p-[1vmax]">
            <div className="flex gap-[1vmax] py-[1vmax] ">
                <img
                    src="https://ecdn.teacherspayteachers.com/thumbuserhome/Bodenkelly-Science-1696850712/9144029.jpg"
                    alt=""
                    className="h-[4vmax] rounded-full"
                />
                <div className="flex flex-col gap-[1vmin] text-[1vmax]">
                    <div className="font-bold">BodenKelly Science</div>
                    <div>April 24, 2023 </div>
                </div>
            </div>
            <div className="text-yellow-300 text-[1.5vmax] flex items-center">
                <div className="text-black ml-2 font-bold text-[1.2vmax]">
                    Question
                </div>
            </div>
            <p className="text-[1vmax]">
                answer
            </p>
        </div>
    );
}

export default QuestionCard;