

const makeAnimalList = templater(o=>`
<li class="animal-list-item">
   <a href="#animal-profile-page" class="js-animal-jump" data-id="${o.id}">
      <div class="animal-list-img"><img src="${o.img}" alt=""></div>
      <div class="animal-list-body">
         <div class="animal-list-name">${o.name}</div>
         <div class="animal-list-type"> ${o.type}</div>
      </div>
   </a>
</li>

`);


const makeUserProfilePage = o => `

<div class="user-profile display-none">
            <div class="edit-user-img">
               <img src="${o.img}" alt="">
               <a href="#user-edit-photo-page" class="image-overlay"><i class="fa-solid fa-pen-to-square"></i></a>
            </div>
                <p class="username">@${o.name}</p>
                <a href="#user-edit-page"><div class="edit-profile-button">Edit Profile</div></a>
                <div class="user-profile-info ">
                    <div class="display-flex flex-align-center">
                        <div class="flex-none info-icon"><i class="fa-solid fa-user"></i></div>
                        <div class="flex-none">
                            <h6>Username</h6>
                            <p>${o.username}</p>
                        </div>
                    </div>
                    <div class="display-flex flex-align-center">
                        <div class="flex-none info-icon"><i class="fa-solid fa-envelope"></i></div>
                        <div class="flex-none">
                            <h6>Email</h6>
                    <p>${o.email}</p>
                        </div>
                    </div>
                    
                </div>
            </div>
`;



const makeAnimalProfileDescription = o => `

    <h6>Type</h6>
    <p>${o.type}</p>
    <h6>Description</h6>
    <p>${o.description}</p>

`;

const makeAnimalProfileImage = o => `
    <img src="${o.img}" alt="">

`;

const makeAnimalPopupModal = o => `

<div class="modal-body overscroll display-flex js-animal-jump noclick-children" data-id="${o.id}">
    <div class="flex-none">
        <div class="modalpopup-img"><img src="${o.img}" alt=""></div>
    </div>
    
    
        <div class="popup-container flex-none">
        <h1>${o.name}</h1>
        
        <p>${o.type}</p>
        </div>
    

</div>
`;






const FormControlInput = ({namespace,name,displayname,type,placeholder,value=""}) => {
    return `<div class="form-control">
       <label class="form-label" for="#${namespace}-${name}">${displayname}</label>
       <input data-role="none" class="form-input" type="${type}" placeholder="${placeholder}" id="${namespace}-${name}" value="${value}">
    </div>`;
 }
 const FormControlTextarea = ({namespace,name,displayname,placeholder,value=""}) => {
    return `<div class="form-control">
       <label class="form-label" for="#${namespace}-${name}">${displayname}</label>
       <textarea data-role="none" class="form-input" placeholder="${placeholder}" id="${namespace}-${name}">${value}</textarea>
    </div>`;
 }
 
 
 const makeAnimalForm = (animal,namespace = "animal-add") => {
    return `
    ${FormControlInput({
       namespace,
       name:"name",
       displayname:"Name",
       type:"text",
       placeholder:"What did you see?",
       value:animal.name,
    })}
    ${FormControlInput({
       namespace,
       name:"type",
       displayname:"Type",
       type:"text",
       placeholder:"Add the animal type",
       value:animal.type,
    })}
    ${FormControlTextarea({
       namespace,
       name:"description",
       displayname:"Description",
       placeholder:"Add the animal description",
       value:animal.description,
    })}
    `;
    }
 
   
    const makeUserForm = (user,namespace = "user-edit") => {
        return `
        ${FormControlInput({
           namespace,
           name:"name",
           displayname:"Name",
           type:"text",
           placeholder:"Type a Name",
           value:user.name,
        })}
        ${FormControlInput({
           namespace,
           name:"username",
           displayname:"Username",
           type:"text",
           placeholder:"Type a Username",
           value:user.username,
        })}
        ${FormControlInput({
           namespace,
           name:"email",
           displayname:"Email",
           type:"text",
           placeholder:"Type an Email",
           value:user.email,
        })}
        `;
        } 