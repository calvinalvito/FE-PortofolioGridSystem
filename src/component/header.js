function createHeader(){
    const header = document.getElementById("headerSection");

    const sectionHeader= document.createElement("div");
    sectionHeader.className = "max-w-phone mx-auto bg-card flex flex-row justify-between p-5 rounded-full lg:max-w-tablet md:px-10 xl:max-w-desktop"

    sectionHeader.innerHTML=`
            <h2 class="text-white text-xl font-semibold">budi santoso</h2>
            <button id="hamburger" name="hamburger" type="button" class="md:hidden lg:hidden text-white">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.83325 19.8333H22.1666M5.83325 14H22.1666M5.83325 8.16666H22.1666" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>    
            </button>
            <nav class="hidden lg:block">
                <ul class="flex flex-row gap-x-20">
                    <li class="text-white text-lg hover:text-grey">
                        <a href="">home.</a>
                    </li>
                    <li class="text-white text-lg hover:text-grey">
                        <a href="">project.</a>
                    </li>
                    <li class="text-white text-lg hover:text-grey">
                        <a href="">contact.</a>
                    </li>
                </ul>
            </nav>             
    `;
    header.appendChild(sectionHeader);
}