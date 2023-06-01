import React from 'react'

const ShowCard = ({ cardTitle, cardSubtitle, tarjeta }) => {
    // console.log(useParams())
   
    return (
        <div className="bg-blue-200 rounded-lg overflow-hidden shadow-lg my-5">
            <div className="flex items-center p-4">
                <div className="mr-4">
                    <img src={tarjeta} alt="imagen de perfil" />
                </div>
                <div className="flex-1">
                    <h3 className=" text-left font-light text-2xl">
                        {cardTitle}
                    </h3>
                    <h3 className=" text-left font-light text-2xl ">
                        {cardSubtitle}
                    </h3>
                </div>
            </div>
        </div>
    );
};


export default ShowCard