



const submitAnimalAdd = () => {
    let name = $("#animal-add-name").val();
    let type = $("#animal-add-type").val();
    let description = $("#animal-add-description").val();
 
    console.log({name,type,description})
 }

 const userEditForm = async () => {
    let username = $("#user-edit-username").val();
    let name = $("#user-edit-name").val();
    let email = $("#user-edit-email").val();
 
    let r = await query({
       type:'update_user',
       params:[username,name,email,sessionStorage.userId]
    });
 
    if(r.error) throw(r.error);
 
    history.go(-1);
 }