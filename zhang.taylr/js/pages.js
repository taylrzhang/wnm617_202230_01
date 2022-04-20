const ExplorePage = async() => { 

}


const ListPage = async() => {
   // destructuring
   let {result:animals} = await query({
    type:'animals_by_user_id',
    params:[sessionStorage.userId]
 })
 
 console.log(animals)

 $("#list-page .animal-list").html(makeAnimalList(animals));
}



const UserProfilePage = async() => {
    let {result:users} = await query({
       type:'user_by_id',
       params:[sessionStorage.userId]
    })
    let [user] = users;
 
    console.log(user)
 
    $("#user-profile-page [data-role='main']").html(makeUserProfilePage(user));
 }
 
 


 const AnimalProfilePage = async() => {
    let {result:animals} = await query({
       type:'animal_by_id',
       params:[sessionStorage.animalId]
    })
    let [animal] = animals;
    // $(".modal-img").css({"background-image":`url(${animal.img})`})
    $(".modal-name").html(animal.name)
    $(".modal-container").html(makeAnimalProfileDescription(animal));
 
    let {result:locations} = await query({
       type:'locations_by_animal_id',
       params:[sessionStorage.animalId]
    })
    console.log(locations)
 }