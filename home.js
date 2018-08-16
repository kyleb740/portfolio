//Print out comment upon load of page
        function printLetterByLetter(destination, message, speed){
            var i = 0;
            var interval = setInterval(function(){
                document.getElementById(destination).innerHTML += message.charAt(i);
                i++;
                if (i > message.length){
                    clearInterval(interval);
                }
            }, speed);
        }


        printLetterByLetter("writeOut", "And now for my least favorite thing... talking about myself!", 100);



// Toggle Nav through hamburger
        const showNav = document.querySelector(".navState");
        const trigger = document.querySelector(".hamburger");

        function toggleNav() {
            showNav.classList.toggle("show-mobileNav");
          }

        trigger.addEventListener("click", toggleNav);


// Toggle Contact form
        const modal = document.querySelector(".formState");
        const trigForm = document.querySelector(".trigForm");
        const form = document.querySelector('.form');

        function toggleForm() {
            modal.classList.toggle("show-formState");
          }

        function windowOnClick(event) {
            if (event.target === modal) {
                toggleForm();
            }
          }

        trigForm.addEventListener("click", toggleForm);
        window.addEventListener("click", windowOnClick);


// Toogle Resume
        const showRes = document.querySelector(".resState");
        const trigResume = document.querySelector(".trigResume");

        function toggleResume(){
            showRes.classList.toggle("resShow");
          }

        trigResume.addEventListener("click", toggleResume);
