function createSosmed(){
    const sosmed = document.getElementById("sectionSosmed");

    const sectionCard = document.createElement("div");
    sectionCard.className ="max-w-phone mx-auto grid grid-cols-2 gap-2 lg:max-w-tablet md:grid-cols-6 xl:max-w-desktop";

    sectionCard.innerHTML =`
        <button class="bg-card py-[14px] text-white font-medium text-lg lg:text-xl xl:text-2xl rounded-[40px]">Linkedin</button>
        <button class="bg-card py-[14px] text-white font-medium text-lg lg:text-xl xl:text-2xl rounded-[40px]">dribbble.</button>
        <button class="bg-card py-[14px] text-white font-medium text-lg lg:text-xl xl:text-2xl rounded-[40px]">behance.</button>
        <button class="bg-card py-[14px] text-white font-medium text-lg lg:text-xl xl:text-2xl rounded-[40px]">uplabs.</button>
        <button class="bg-card py-[14px] text-white font-medium text-lg lg:text-xl xl:text-2xl rounded-[40px]">unsplash.</button>
        <button class="bg-card py-[14px] text-white font-medium text-lg lg:text-xl xl:text-2xl rounded-[40px]">instagram.</button>
    `;
    sosmed.appendChild(sectionCard);
}