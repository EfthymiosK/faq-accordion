const accordionBtns = document.querySelectorAll(".btn");

accordionBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        const accordionDescription = this.querySelector(".accordion-description");
        const plusIcon = this.querySelector(".plus-icon");
        const minusIcon = this.querySelector(".minus-icon");
        console.log(accordionDescription)

        if(accordionDescription.style.maxHeight) {
            accordionDescription.style.maxHeight = null
            plusIcon.style.display = "block"
            minusIcon.style.display = "none"
        } else {
            accordionDescription.style.maxHeight = "200px"
            //accordionDescription.style.scrollHeight + "px";
            console.log(accordionDescription.style.scrollHeight)
            plusIcon.style.display = "none"
            minusIcon.style.display = "block"
        }
    })
})