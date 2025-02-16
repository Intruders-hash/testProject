let results = {
    data: [
        {
            TeacherName: "Charles Leclerc",
            category: "Engineering",
            designation: "UG",  
            experience: "6 years experience",
            rate: "$xx/hr",
            image: "https://previews.123rf.com/images/dolgachov/dolgachov1603/dolgachov160306114/54057828-business-people-and-portrait-concept-smiling-businessman-face-or-portrait.jpg"
        },
        {
            TeacherName: "Meryl Streep",
            category: "Science",
            designation: "PG",  
            experience: "4 years experience",
            rate: "$xx/hr",
            image: "https://previews.123rf.com/images/dolgachov/dolgachov1603/dolgachov160306114/54057828-business-people-and-portrait-concept-smiling-businessman-face-or-portrait.jpg"
        },
        {
            TeacherName: "Peter Parker",
            category: "Arts",
            designation: "10+2",  
            experience: "3 years experience",
            rate: "$xx/hr",
            image: "https://previews.123rf.com/images/dolgachov/dolgachov1603/dolgachov160306114/54057828-business-people-and-portrait-concept-smiling-businessman-face-or-portrait.jpg"
        },
        {
            TeacherName: "Ryan Spencer",
            category: "Science",
            designation: "UG",  
            experience: "7 years experience",
            rate: "$xx/hr",
            image: "https://previews.123rf.com/images/dolgachov/dolgachov1603/dolgachov160306114/54057828-business-people-and-portrait-concept-smiling-businessman-face-or-portrait.jpg"
        },
        {
            TeacherName: "William Smith",
            category: "Commerce",
            designation: "PG",  
            experience: "8 years experience",
            rate: "$xx/hr",
            image: "https://previews.123rf.com/images/dolgachov/dolgachov1603/dolgachov160306114/54057828-business-people-and-portrait-concept-smiling-businessman-face-or-portrait.jpg"
        },
        {
            TeacherName: "Paul Jackson",
            category: "Dance",
            designation: "10+2",  
            experience: "6 years experience",
            rate: "$xx/hr",
            image: "https://previews.123rf.com/images/dolgachov/dolgachov1603/dolgachov160306114/54057828-business-people-and-portrait-concept-smiling-businessman-face-or-portrait.jpg"
        },
        {
            TeacherName: "Alexander Taylor",
            category: "Music",
            experience: "9 years experience",
            rate: "$xx/hr",
            image: "https://previews.123rf.com/images/dolgachov/dolgachov1603/dolgachov160306114/54057828-business-people-and-portrait-concept-smiling-businessman-face-or-portrait.jpg"
        },
        {
            TeacherName: "Kevin Spacey",
            category: "Engineering",
            designation: "PG",  
            experience: "10 years experience",
            rate: "$xx/hr",
            image: "https://previews.123rf.com/images/dolgachov/dolgachov1603/dolgachov160306114/54057828-business-people-and-portrait-concept-smiling-businessman-face-or-portrait.jpg"
        },
        {
            TeacherName: "Catherine Jons",
            category: "Dance",
            experience: "2 years experience",
            rate: "$xx/hr",
            image: "https://previews.123rf.com/images/dolgachov/dolgachov1603/dolgachov160306114/54057828-business-people-and-portrait-concept-smiling-businessman-face-or-portrait.jpg"
        }
    ]
};


for (let i of results.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.category); 

    
    let imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", i.image);  
    image.setAttribute("alt", i.TeacherName);  
    imageContainer.appendChild(image);
    card.appendChild(imageContainer);
    imageContainer.style.marginBottom = "20px"; 

    let nameContainer = document.createElement("div");
    nameContainer.classList.add("result-name");
    let name = document.createElement("h2");
    name.innerText = i.TeacherName;
    nameContainer.appendChild(name);
    card.appendChild(nameContainer);

    let categoryContainer = document.createElement("div");
    categoryContainer.classList.add("result-category");
    let category = document.createElement("p");
    category.innerText = `Category: ${i.category}`;
    categoryContainer.appendChild(category);
    card.appendChild(categoryContainer);

   
    let experienceContainer = document.createElement("div");
    experienceContainer.classList.add("result-experience");
    let experience = document.createElement("p");
    experience.innerText = `Experience: ${i.experience}`;
    experienceContainer.appendChild(experience);
    card.appendChild(experienceContainer);

    
    let rateContainer = document.createElement("div");
    rateContainer.classList.add("result-rate");
    let rate = document.createElement("p");
    rate.innerText = `Rate: ${i.rate}`;
    rateContainer.appendChild(rate);
    card.appendChild(rateContainer);

    
    let designationContainer = document.createElement("div");
    designationContainer.classList.add("result-designation");
    let designation = document.createElement("p");
    designation.innerText = `Designation: ${i.designation}`;
    designationContainer.appendChild(designation);
    card.appendChild(designationContainer);

    document.getElementById("results").appendChild(card);
}


function filterResult(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card");

    elements.forEach(element => {
        if (value == "All") {
            element.classList.remove("hide");
        } else if (value == "10+2" || value == "UG" || value == "PG") {
            
            if (element.querySelector(".result-designation").innerText.includes(value)) {
                element.classList.remove("hide");
            } else {
                element.classList.add("hide");
            }
        }
    });
}
document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value.trim().toLowerCase(); 
    let cards = document.querySelectorAll(".card");
    
    cards.forEach(card => {
        let categoryElement = card.querySelector(".result-category p");
        if (categoryElement) {
            let categoryText = categoryElement.innerText.toLowerCase(); 
            if (categoryText.includes(searchInput)) {
                card.classList.remove("hide"); 
            } else {
                card.classList.add("hide"); 
            }
        }
    });
});



// Initially
window.onload = () => {
    filterResult("All");
};

