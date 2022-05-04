
$(() => {
    checkUserId();
 
    // EVENT DELEGATION
    $(document)

    //console log page id(name)
    .on("pagecontainerbeforeshow", function(event, ui){
      console.log(ui.toPage[0].id)

      // PAGE ROUTING
      switch(ui.toPage[0].id) {
         case "explore-page": ExplorePage(); break;
         case "list-page": ListPage(); break;
         case "user-profile-page": UserProfilePage(); break;
         case "user-edit-page": UserEditPage(); break;
         case "animal-profile-page": AnimalProfilePage(); break;
         case "animal-edit-page": AnimalEditPage(); break;
         case "add-animal-description-page": AnimalAddPage(); break;
      }
   })

   
 
    // FORM SUBMISSIONS
    .on("submit", "#signin-form", function(e) {
       e.preventDefault();
       checkLoginForm();
    })
 
    
    // FORM SUBMISSION CLICKS
   .on("click", ".js-submit-animal-add", function() {
      submitAnimalAdd();
     
   })

   .on("click", ".js-submit-animal-edit", function() {
      submitAnimalAdd();
     
   })

   



    // CLICKS
    .on("click", ".js-logout", function() {
       sessionStorage.removeItem("userId");
       checkUserId();
    })
 
    .on("click", ".js-animal-jump", function(e) {
      try {
         e.preventDefault();
         sessionStorage.animalId = $(this).data('id');
         $.mobile.navigate("#animal-profile-page");
      } catch(e) {
         throw("No id detected");
      }
   })



  
 
    // ACTIVATE TOOLS
    .on("click", "[data-activate]", function() {
        let target = $(this).data("activate");
        $(target).addClass("active")
     })
     .on("click", "[data-deactivate]", function() {
        let target = $(this).data("deactivate");
        $(target).removeClass("active")
     })
     .on("click", "[data-toggle]", function() {
        let target = $(this).data("toggle");
        $(target).toggleClass("active")
     })
     .on("click", "[data-activateone]", function() {
        let target = $(this).data("activateone");
        $(target).addClass("active")
           .siblings().removeClass("active")
     });


     $("[data-template]").each(function(){
      let target = $(this).data("template");
      $(this).html($(target).html())
   });

   [,"#explore-page","#list-page","#user-profile-page"].forEach((p,i)=>{
      if(window.location.hash === p) {
         console.log($(".nav-icon-set li"))
         $(`.nav-icon-set li:nth-child(${i})`).addClass("active");
      }
   });

 });

  //TOGGLE BUTTON
  window.onload = function(){ 
  const toggle = document.getElementById('toggle');
  toggle.onclick = function(){
     toggle.classList.toggle('active')
  }};
 