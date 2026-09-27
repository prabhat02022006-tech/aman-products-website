/* ==========================================
   PRODUCT DATA
========================================== */

const products = [

    {
        id: "01",
        name: "Premium Table Lamp",
        category: "tech",
        badge: "Editor's Pick",
        image: "assets/product1.jpg",
        description:
            "A clean and stylish addition for your desk or room.",
        link:
            "https://dl.flipkart.com/s/Mcoc0ZNNNN"
    },


    {
    id: "02",
    name: "Hand Blender",
    category: "tech",
    badge: "top pick",
    image: "assets/product2.jpg",

    description:
        "Inalsa 450 W Black Hand Blender TurboBlend 450W Powerful Motor 2 Speed Control",

    link:
        "https://dl.flipkart.com/s/jf9jMMuuuN"
},

    {
        id: "03",
        name: "Mini Ac Fan",
        category: "tech",
        badge: "Editor's Pick",
        image: "assets/product3.jpg",
        description:
            "Mini fan for home and office.",
        link:
            "https://www.wishlink.com/share/nzw79m"
    },


    {
        id: "04",
        name: " Stainless Steel Bottle ",
        category: "lifestyle",
        badge: "DAILY PICK",
        image: "assets/product4.jpg",
        description:
            "SLOVIC Durable & Stylish Leak-Proof 1000 ml Stainless Steel Bottle (Pack of 1, Black).",
        link:
            "https://dl.flipkart.com/dl/slovic-durable-stylish-leak-proof-1000-ml-stainless-steel-bottle/p/itm38d386696b452?pid=BOTHCSS67KXUF8TX&lid=LSTBOTHCSS67KXUF8TX2WBES7&hl_lid=&marketplace=FLIPKART&fm=eyJ3dHAiOiJwbXVfdjIiLCJwcnB0IjoiaHAiLCJtaWQiOiJjb250aW51dW0vaHAifQ==&affid=inf_51472092-e183-460d-9a50-d50bccce0103&_refId=&_appId=CL"
    },


    {
        id: "05",
        name: "Foldable Leg Camping Stool",
        category: "Lifestyle",
        badge: "STYLE",
        image: "assets/product5.jpg",
        description:
            "KASHTHBHANJAN Foldable Leg Camping Stool Travelling Fishing Hiking Beach Garden Stool Chair (Multicolor).",
        link:
            "https://dl.flipkart.com/dl/kashthbhanjan-foldable-leg-camping-stool-travelling-fishing-hiking-beach-garden-chair/p/itm13dd8dcf69873?pid=CHAHE4H6PUMTHKZT&lid=LSTCHAHE4H6PUMTHKZTORSLYJ&hl_lid=&marketplace=FLIPKART&fm=eyJ3dHAiOiJwbXVfdjIiLCJwcnB0IjoiaHAiLCJtaWQiOiJjb250aW51dW0vaHAifQ==&affid=inf_51472092-e183-460d-9a50-d50bccce0103&_refId=&_appId=CL"
    },


    { 
        id: "06",
        name: "Mini DoorBell",
        category: "tech",
        badge: "NEW",
        image: "assets/product6.jpg",
        description: "SKagro Wireless Doorbell Wireless Door Chime (36 Tunes)",
        link: "https://dl.flipkart.com/s/vvF2RGNNNN"
    },
   
   {
    id: "07",
    name: " Keypad Lock",
    category: "tech",
    badge: "NEW",
    image: "assets/product7.jpg",
    description: "SUNNIFA Bike Brake Keypad Lock Locking System By Holding Handle Bar With Brake Lever Motorcycle Safety Lock Pad Lock (Multicolor)",
    link: "https://dl.flipkart.com/s/6IL2ZjNNNN"
 },
   
   {
    id: "08",
    name: "Anti Theft Disc Brake Lock",
    category: "tech",
    badge: "NEW",
    image: "assets/product8.jpg",
    description: "CROXIV Anti Theft Disc Brake Security Universal For All Bikes and Scooter Disc Lock (Black)",
    link: "https://dl.flipkart.com/s/6!0ox9NNNN"
}
];


/* ==========================================
   ELEMENTS
========================================== */

const productContainer =
    document.getElementById("productContainer");

const searchInput =
    document.getElementById("searchInput");

const emptyMessage =
    document.getElementById("emptyMessage");

const categoryButtons =
    document.querySelectorAll(".category");

const topButton =
    document.getElementById("topButton");


/* ==========================================
   DISPLAY PRODUCTS
========================================== */

function displayProducts(list) {

    productContainer.innerHTML = "";


    if (list.length === 0) {

        emptyMessage.style.display = "block";

        return;

    }


    emptyMessage.style.display = "none";


    list.forEach((product, index) => {

        const card =
            document.createElement("article");


        card.className =
            "product-card";


        card.style.animationDelay =
            `${index * 70}ms`;


        /*
            IMPORTANT:
            The View Product button is a
            normal <a> element.

            JavaScript does NOT intercept it.
        */

        card.innerHTML = `

            <div class="product-top">

                <span class="product-number">
                    #${product.id}
                </span>

                <span class="product-badge">
                    ${product.badge}
                </span>

            </div>


            <div class="product-image-wrap">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="product-image"
                    loading="lazy"
                >

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>


                <h3>
                    ${product.name}
                </h3>


                <p class="product-description">
                    ${product.description}
                </p>


                <a
                    href="${product.link}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="product-button"
                >

                    <span>
                        View Product
                    </span>

                    <span>
                        ↗
                    </span>

                </a>

            </div>

        `;


        productContainer.appendChild(card);


        add3DEffect(card);

    });

}


/* ==========================================
   3D CARD EFFECT
========================================== */

function add3DEffect(card) {

    card.addEventListener("mousemove", (event) => {

        if (window.innerWidth <= 800) {
            return;
        }


        const rect =
            card.getBoundingClientRect();


        const x =
            event.clientX - rect.left;


        const y =
            event.clientY - rect.top;


        const centerX =
            rect.width / 2;


        const centerY =
            rect.height / 2;


        const rotateY =
            ((x - centerX) / centerX) * 6;


        const rotateX =
            ((centerY - y) / centerY) * 6;


        card.style.transform = `
            perspective(900px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-7px)
            scale(1.01)
        `;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

}


/* ==========================================
   INITIAL PRODUCTS
========================================== */

displayProducts(products);


/* ==========================================
   SEARCH
========================================== */

searchInput.addEventListener("input", () => {

    const query =
        searchInput.value
            .toLowerCase()
            .trim();


    const activeButton =
        document.querySelector(
            ".category.active"
        );


    const activeCategory =
        activeButton
            ? activeButton.dataset.category
            : "all";


    filterProducts(
        query,
        activeCategory
    );

});


/* ==========================================
   CATEGORY FILTER
========================================== */

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const query =
            searchInput.value
                .toLowerCase()
                .trim();


        filterProducts(
            query,
            button.dataset.category
        );

    });

});


/* ==========================================
   FILTER FUNCTION
========================================== */

function filterProducts(query, category) {

    const filtered =
        products.filter(product => {

            const matchesCategory =
                category === "all" ||
                product.category === category;


            const searchableText =
                `
                ${product.name}
                ${product.category}
                ${product.description}
                ${product.badge}
                `.toLowerCase();


            const matchesSearch =
                searchableText.includes(query);


            return (
                matchesCategory &&
                matchesSearch
            );

        });


    displayProducts(filtered);

}


/* ==========================================
   BACK TO TOP
========================================== */

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});


topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
