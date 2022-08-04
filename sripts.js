const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll("nav-link").forEach(n => n.
  addEventListener("click", () => {
    hamburger.classList.remove("active");
    navContent.classList.remove("active");
  }))



  var acc = document.getElementsByClassName("accordion");
                    var i;
                    
                    for (i = 0; i < acc.length; i++) {
                      acc[i].addEventListener("click", function() {
                        this.classList.toggle("active");
                        var panel = this.nextElementSibling;
                        if (panel.style.display === "block") {
                          panel.style.display = "none";
                        } else {
                          panel.style.display = "block";
                        }
                      });
                    }



                    var acc = document.getElementsByClassName("accord");
                    var i;
    
                     for (i = 0; i < acc.length; i++) {
                        acc[i].addEventListener("click", function() {
                        this.classList.toggle("active");
                        var panel = this.nextElementSibling;
                        if (panel.style.display === "block") {
                            panel.style.display = "none";
                        } else {
                          panel.style.display = "block";
                        }
                        });
                    }