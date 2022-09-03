"use strict";

const products = [
    {
        isname: "Samsung A73",
        color: "silver",
        price: 3121000,
        company: 'Samsung',
        getMonth: 323000,
        month: true,
        quantity: 40,
        productImage: "https://olcha.uz/image/425x425/products/5TH1CmMiY3kB81RxjPejEkNQLP65m2CXx6CSH4rTmOvBCSo1pEYriE0zjN2s.",
        category: "Smartfonlar",
        description: "Smartfonlar Xiaomi Redmi Note"
    },
    {
        isname: "Iphone 13 pro",
        color: "blue",
        price: 13121000,
        company: 'Apple',
        getMonth: 1323000,
        month: true,
        quantity: 20,
        productImage: "https://olcha.uz/image/425x425/products/MKROaaBinWPECxLwu7LrgUzJ8CsYkAiPrC8IfTIojLBTsE0n3TT7jqdUNI0E.jpeg",
        category: "Smartfonlar",
        description: "Smartfonlar Xiaomi Redmi Note"

    },
    {
        isname: "Nokia 1202",
        color: "black",
        price: 20000000,
        company: 'Nokia',
        getMonth: 190000,
        month: false,
        quantity: 0,
        productImage: "https://olcha.uz/image/425x425/products/mBoPKy2sAut4zHA5Nu2XYt0Zo2pdjM0SzgdBmFQ3kdx6wobBSQOW0kT9d2Ob.jpeg",
        category: "Smartfonlar",
        description: "Smartfonlar Xiaomi Redmi Note"

    },
    {
        isname: "Samsung A73",
        color: "silver",
        price: 3121000,
        company: 'Samsung',
        getMonth: 323000,
        month: true,
        quantity: 40,
        productImage: "https://olcha.uz/image/425x425/products/N1DxxsmytbcBSfHaRNR70QZ5aEZzUR0pzsYjEKQ2dcsJAtaoZX8tgHLSMa1N.",
        category: "Smartfonlar",
        description: "Smartfonlar Xiaomi Redmi Note"
    },
    {
        isname: "Vivo Y20",
        color: "gold",
        price: 4121000,
        company: 'Samsung',
        getMonth: 602000,
        month: true,
        quantity: 90,
        productImage: "https://olcha.uz/image/425x425/products/JEUPx8kAvMfOeVHCK83CCooRYZtUGxtpt1TjMfg73nXVnXj2Sx3RBEQ9GDf2.jpeg",
        category: "Smartfonlar",
        description: "Smartfonlar Xiaomi Redmi Note"

    },
    {
        isname: "Techno Spark Y20",
        color: "gold",
        price: 2121000,
        company: 'Samsung',
        getMonth: 202000,
        month: true,
        quantity: 120,
        productImage: "https://olcha.uz/image/425x425/products/7Qgf7E4E3TIDgQ1gOH2uHPZqKZ7u66DPLzRi1nRzPolNzQWDxM2M9LpN9wZQ.",
        category: "Smartfonlar",
        description: "Smartfonlar Xiaomi Redmi Note"
    },

    {
        isname: "Nokia 1202",
        color: "black",
        price: 20000000,
        company: 'Nokia',
        getMonth: 190000,
        month: false,
        quantity: 0,
        productImage: "https://olcha.uz/image/425x425/products/mBoPKy2sAut4zHA5Nu2XYt0Zo2pdjM0SzgdBmFQ3kdx6wobBSQOW0kT9d2Ob.jpeg",
        category: "Smartfonlar",
        description: "Smartfonlar Xiaomi Redmi Note"

    },
    {
        isname: "Samsung A73",
        color: "silver",
        price: 3121000,
        company: 'Samsung',
        getMonth: 323000,
        month: true,
        quantity: 40,
        productImage: "https://olcha.uz/image/425x425/products/N1DxxsmytbcBSfHaRNR70QZ5aEZzUR0pzsYjEKQ2dcsJAtaoZX8tgHLSMa1N.",
        category: "Smartfonlar",
        description: "Smartfonlar Xiaomi Redmi Note"
    },
    {
        isname: "Realme GT Master",
        color: "gold",
        price: 3969000,
        company: 'Samsung',
        getMonth: 794000,
        month: true,
        quantity: 90,
        productImage: "https://olcha.uz/image/425x425/products/vytFDY8xTJ2xMTfon3rtaRRA9WYdGo87B5WFpegZYquJi3dcPCtkGS5OgiGY.",
        category: "Smartfonlar",
        description: "Smartfonlar Xiaomi Redmi Note"

    },
    {
        isname: "Galaxy A32",
        color: "black",
        price: 2695000,
        company: 'Samsung',
        getMonth: 202000,
        month: true,
        quantity: 100,
        productImage: "https://olcha.uz/image/425x425/products/YqLPUnnHd4PKlO3vEbCXpcvDSo3cMoxpNoQeVpaASr6HLOyh7QxVs1ewDzhQ.jpeg",
        category: "Smartfonlar",
        description: "Smartfonlar Xiaomi Redmi Note"
    },
    {
        isname: "Samsung HM2",
        color: "blue",
        price: 3121000,
        company: 'Samsung',
        getMonth: 300000,
        month: false,
        quantity: 120,
        productImage: "https://olcha.uz/image/425x425/products/s2RSMGvk6EGqRgpuzSkjiJ7KUOmQn5HPqCZKalzaWPIkKwbPpiUx5hrpB4ey.",
        category: "Smartfonlar",
        description: "Smartfonlar Xiaomi Redmi Note"
    },
    {
        isname: "Samsung A73",
        color: "silver",
        price: 3121000,
        company: 'Samsung',
        getMonth: 323000,
        month: true,
        quantity: 40,
        productImage: "https://olcha.uz/image/425x425/products/5TH1CmMiY3kB81RxjPejEkNQLP65m2CXx6CSH4rTmOvBCSo1pEYriE0zjN2s.",
        category: "Smartfonlar",
        description: "Smartfonlar Xiaomi Redmi Note"
    },
    {
        isname: "Iphone 13 pro",
        color: "blue",
        price: 13121000,
        company: 'Apple',
        getMonth: 1323000,
        month: true,
        quantity: 20,
        productImage: "https://olcha.uz/image/425x425/products/MKROaaBinWPECxLwu7LrgUzJ8CsYkAiPrC8IfTIojLBTsE0n3TT7jqdUNI0E.jpeg",
        category: "Smartfonlar",
        description: "Smartfonlar Xiaomi Redmi Note"

    },
    {
        isname: "Nokia 1202",
        color: "black",
        price: 20000000,
        company: 'Nokia',
        getMonth: 190000,
        month: false,
        quantity: 0,
        productImage: "https://olcha.uz/image/425x425/products/mBoPKy2sAut4zHA5Nu2XYt0Zo2pdjM0SzgdBmFQ3kdx6wobBSQOW0kT9d2Ob.jpeg",
        category: "Smartfonlar",
        description: "Smartfonlar Xiaomi Redmi Note"

    },
    {
        isname: "Samsung A73",
        color: "silver",
        price: 3121000,
        company: 'Samsung',
        getMonth: 323000,
        month: true,
        quantity: 40,
        productImage: "https://olcha.uz/image/425x425/products/N1DxxsmytbcBSfHaRNR70QZ5aEZzUR0pzsYjEKQ2dcsJAtaoZX8tgHLSMa1N.",
        category: "Smartfonlar",
        description: "Smartfonlar Xiaomi Redmi Note"
    },
    {
        isname: "Vivo Y20",
        color: "gold",
        price: 4121000,
        company: 'Samsung',
        getMonth: 602000,
        month: true,
        quantity: 90,
        productImage: "https://olcha.uz/image/425x425/products/JEUPx8kAvMfOeVHCK83CCooRYZtUGxtpt1TjMfg73nXVnXj2Sx3RBEQ9GDf2.jpeg",
        category: "Smartfonlar",
        description: "Smartfonlar Xiaomi Redmi Note"

    },
    {
        isname: "Techno Spark Y20",
        color: "gold",
        price: 2121000,
        company: 'Samsung',
        getMonth: 202000,
        month: true,
        quantity: 120,
        productImage: "https://olcha.uz/image/425x425/products/7Qgf7E4E3TIDgQ1gOH2uHPZqKZ7u66DPLzRi1nRzPolNzQWDxM2M9LpN9wZQ.",
        category: "Smartfonlar",
        description: "Smartfonlar Xiaomi Redmi Note"
    },

    {
        isname: "Nokia 1202",
        color: "black",
        price: 20000000,
        company: 'Nokia',
        getMonth: 190000,
        month: false,
        quantity: 0,
        productImage: "https://olcha.uz/image/425x425/products/mBoPKy2sAut4zHA5Nu2XYt0Zo2pdjM0SzgdBmFQ3kdx6wobBSQOW0kT9d2Ob.jpeg",
        category: "Smartfonlar",
        description: "Smartfonlar Xiaomi Redmi Note"

    },
    {
        isname: "Samsung A73",
        color: "silver",
        price: 3121000,
        company: 'Samsung',
        getMonth: 323000,
        month: true,
        quantity: 40,
        productImage: "https://olcha.uz/image/425x425/products/N1DxxsmytbcBSfHaRNR70QZ5aEZzUR0pzsYjEKQ2dcsJAtaoZX8tgHLSMa1N.",
        category: "Smartfonlar",
        description: "Smartfonlar Xiaomi Redmi Note"
    },
    {
        isname: "Realme GT Master",
        color: "gold",
        price: 3969000,
        company: 'Samsung',
        getMonth: 794000,
        month: true,
        quantity: 90,
        productImage: "https://olcha.uz/image/425x425/products/vytFDY8xTJ2xMTfon3rtaRRA9WYdGo87B5WFpegZYquJi3dcPCtkGS5OgiGY.",
        category: "Smartfonlar",
        description: "Smartfonlar Xiaomi Redmi Note"

    },
    {
        isname: "Galaxy A32",
        color: "black",
        price: 2695000,
        company: 'Samsung',
        getMonth: 202000,
        month: true,
        quantity: 100,
        productImage: "https://olcha.uz/image/425x425/products/YqLPUnnHd4PKlO3vEbCXpcvDSo3cMoxpNoQeVpaASr6HLOyh7QxVs1ewDzhQ.jpeg",
        category: "Smartfonlar",
        description: "Smartfonlar Xiaomi Redmi Note"
    },
    {
        isname: "Samsung HM2",
        color: "blue",
        price: 3121000,
        company: 'Samsung',
        getMonth: 300000,
        month: false,
        quantity: 120,
        productImage: "https://olcha.uz/image/425x425/products/s2RSMGvk6EGqRgpuzSkjiJ7KUOmQn5HPqCZKalzaWPIkKwbPpiUx5hrpB4ey.",
        category: "Smartfonlar",
        description: "Smartfonlar Xiaomi Redmi Note"
    },
];




const wrapperCard = document.querySelector('.card-wrapper'),
    rating = document.querySelector('#rating');


rating.addEventListener('change', () => {
    console.log(rating.value);
    const datas = products.sort((a, b) => {
        return a.price - b.price
    })
  
    if(rating.value!=0){
        getData(datas.reverse())
    } else {
        getData(datas)
    }


})




function getData(datas){

    // for (let i = 0; i < products.length; i++) {
    //     const div = document.createElement('div');
    //     div.setAttribute('class', 'card');
    //     div.innerHTML = ` <img src="${products[i].productImage}" alt="${products[i].isname}" class="card-image">
    //     <div class="card-body">
    //         <p class="card-category">
    //             ${products[i].category}
    //         </p>
    //         <p class="card-price">
    //             ${products[i].price} so'm
    //         </p>
    //         <span class="card-date rounded-pill">
    //             ${products[i].getMonth} so'mdan / oyiga
    //         </span>
    //         <p class="card-description">
    //             ${products[i].description}
    //         </p>
    //         <div class="card-btn">
    //             Xarid qilish
    //         </div>`;  
    // } 


    wrapperCard.innerHTML="";


    datas.forEach((products) => {

        const div = document.createElement('div');

        div.setAttribute('class', 'card');

        div.innerHTML = ` <img src="${products.productImage}" alt="${products.isname}
        " class="card-image">
         <div class="card-body">
        <p class="card-category">
            ${products.category}
        </p>
        <p class="card-price">
            ${products.price} so'm
        </p>
        <span class="card-date rounded-pill">
            ${products.month ? products.getMonth + "so'mdan / oyiga" : "Bo'lib to'lashga yo'q"} 
        </span>
        <h2>${products.isname}</h2>
        <p class="card-description">
            ${products.description}
        </p>
        <div class="card-btn">
            Xarid qilish
        </div>`;

        if (products.quantity !== 0) {

            wrapperCard.appendChild(div)

        }


    })
}

getData()



