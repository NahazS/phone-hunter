const loadData = async (search_item) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${search_item}`);
    const data = await res.json();
    const phone = data.data;
    console.log(phone);
    display(phone);
}
const display = phone => {
    const show_phone = document.getElementById('show_phone');
    show_phone.textContent = '';
    phone.forEach(phone => {
        show_phone.innerHTML += `
        <div class="flex flex-col text-center items-center p-[25px] border-[1px] border-[#CFCFCF] max-w-[364px] rounded-lg">
            <div class="w-[314px] h-[300px] bg-[#0d6efd] bg-opacity-5 rounded-lg flex flex-col items-center justify-center">
                <img class=" h-[244px]" src="${phone.image}" alt="">
            </div>
            <h4 class="font-bold mt-[25px]">${phone.phone_name}</h4>
            <h5 class="text-[#706F6F] text-center mt-[25px]">There are many variations of passages of available, but the majority have suffered</h5>
            <h4 class="font-bold mt-[8px]">$999</h4>
            <button onclick="my_modal_1.showModal(); modal('${phone.slug}')" class="mt-[16px] btn-primary">Show Details</button>
        </div>
        `
    });
}
const search = () => {
    const search_text = document.getElementById('search_text');
    loadData(search_text.value);
    search_text.value = '';
}

const modal =  async (id) => {
    const res = await fetch(` https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json();
    const phone = data.data;
    console.log(phone);
    const modal_phone = document.getElementById('modal_phone');
    modal_phone.innerHTML = 
    
    `
        <div class="w-[672px] h-[483px] bg-[#0d6efd] bg-opacity-5 rounded-lg flex flex-col items-center justify-center">
        <img class=" h-[381px] p-[40px]" src="${phone.image}" alt="">
        </div>
        <div class="text-left  p-[40px]">
            <h3 class="font-bold mt-[25px] mb-6">${phone.phone_name}</h3>
            <h6 class="text-[#706F6F] mb-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h6>
            <h6>Storage : <span>${phone.mainFeatures.storage}</span></h6>
            <h6>Display Size : <span>${phone.mainFeatures.displaySize}</span></h6>
            <h6>Chipset : <span>${phone.mainFeatures.chipSet}</span></h6>
            <h6>Memory : <span>${phone.mainFeatures.memory}</span></h6>
            <h6>Slug : <span>${phone.slug}</span></h6>
            <h6>Release data : <span>${phone.releaseDate}</span></h6>
            <h6>Brand : <span>${phone.brand}</span></h6>
            <h6>GPS : <span>${phone.others?.GPS ? phone.others.GPS : "NO GPS"}</span></h6>
        </div>
        <div class="">
            <form method="">
              <!-- if there is a button in form, it will close the modal -->
              <button onclick="modal_empty(); my_modal_1.close();" class="mt-[16px] btn-primary">close</button>
            </form>
        </div>
    `
}
const modal_empty = () => 
{
    const modal_phone = document.getElementById('modal_phone');
    modal_phone.textContent = '';
}