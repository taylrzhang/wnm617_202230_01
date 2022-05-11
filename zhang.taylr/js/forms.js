

const submitAnimalAdd = async () => {
   let name = $("#animal-add-name").val();
   let type = $("#animal-add-type").val();
   let description = $("#animal-add-description").val();


   console.log({name,type,description});

   if(name!="" && type!="" && description!="") {
      let {id,error} = await query({
         type: 'insert_animal',
         params: [sessionStorage.userId,name,type,description]
      });

      if(error) throw(error);

      sessionStorage.animalId = id;
      history.go(-2);

   } else {
      throw("Not all data present");
   }
}

const submitAnimalEdit = async () => {
   let name = $("#animal-edit-name").val();
   let type = $("#animal-edit-type").val();
   let description = $("#animal-edit-description").val();

   let {result,error} = await query({
      type: 'update_animal',
      params: [name,type,description,sessionStorage.animalId]
   });

   if(error) throw(error);

   history.go(-1);
}

const submitDeleteAnimal = async () => {
   let {result,error} = await query({
      type: 'delete_animal',
      params: [sessionStorage.animalId]
   });

   if(error) throw(error);
   history.go(-2);
}



const submitUserSignup = async () => {
   let username = $("#signup-username").val();
   let email = $("#signup-email").val();
   let password = $("#signup-password").val();
   let password2 = $("#signup-password2").val();

   if(password2!=password) {
      throw("Passwords don't match");
   } else
   if(username!="" && email!="" && password!="") {
      let {id,error} = await query({
         type: 'insert_user',
         params: [username,email,password]
      });

      if(error) throw(error);

      sessionStorage.userId = id;
      $.mobile.navigate("#list-page");
   } else {
      throw("Not all data present");
   }
}

const submitUserEdit = async () => {
   let name = $("#user-edit-name").val();
   let username = $("#user-edit-username").val();
   let email = $("#user-edit-email").val();

   console.log({name,username,email})

   let r = await query({
      type:'update_user',
      params:[name,username,email,sessionStorage.userId]
   });

   if(r.error) throw(r.error);

   history.go(-1);
}


const submitLocationAdd = async () => {
   let animal = $("#location-animal").val();
   let lat = $("#location-lat").val();
   let lng = $("#location-lng").val();
   let description = $("#location-description").val();

   let {result,error} = await query({
      type: 'insert_location',
      params: [animal,lat,lng,description]
   });

   if(error) throw(error);

   history.go(-2);
}
