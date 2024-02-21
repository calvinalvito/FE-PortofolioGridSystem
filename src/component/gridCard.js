function gridCard(){
    const gridCard = document.getElementById("gridCard");

    const Card = document.createElement("div");
    Card.className="bg-card rounded-[30px]";

    Card.innerHTML=`
                <div class="mx-[9px] mb-[9px]">
                    <div class="flex flex-row justify-between px-[20px] items-center my-5 lg:my-10">
                        <p class="text-white text-[28px] lg:text-4xl xl:text-5xl font-medium">Feature Project</p>
                        <a href="" class="hidden md:block">
                            <svg class="w-[70px] group" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.25" y="0.25" width="70" height="70" rx="34.75" class="stroke-1 stroke-white group-hover:fill-white"/>
                                <path d="M26.1457 41.7708L38.2144 29.7021L28.8394 29.7021L28.8394 26.7562L43.2436 26.7562L43.2436 41.1604L40.2978 41.1604L40.2978 31.7854L28.229 43.8541L26.1457 41.7708Z" class="fill-white group-hover:fill-black"/>
                            </svg>    
                        </a>                                                           
                    </div>
                    <div class="grid grid-rows-2 md:grid-flow-col gap-[9px]">
                        <div class="overflow-hidden rounded-[30px] shadow-lg">
                            <img src="../img/CozyHous.webp" alt="" class="w-full h-full lg:h-[300px] lg:w-[646px] object-cover transition-transform transform hover:scale-105 duration-300">
                        </div>
                        <div class="overflow-hidden rounded-[30px] shadow-lg">
                            <img src="../img/WeServe.webp" alt="" class="w-full h-full lg:h-[300px] lg:w-[646px] object-cover transition-transform transform hover:scale-105 duration-300">
                        </div>
                        <div class="md:row-span-2 lg:order-first overflow-hidden rounded-[30px] shadow-lg">
                            <img src="../img/Indopay.webp" alt="" class="w-full h-full lg:h-[609px] lg:w-[646px] object-cover transition-transform transform hover:scale-105 duration-300">
                        </div>
                    </div>
                </div>
    `;
    gridCard.appendChild(Card);
}