

const makeAnimalList = templater(o=>`
<li class="animal-list-item">
   <a href="#animal-profile-page" class="js-animal-jump" data-id="${o.id}">
      <div class="animal-list-img"><img src="${o.img}" alt=""></div>
      <div class="animal-list-body">
         <div class="animal-list-name">${o.name}</div>
         <div class="animal-list-type">Type: ${o.type}</div>
      </div>
   </a>
</li>

`);


const makeUserProfilePage = o => `

<div class="user-profile display-none">
                <img src="${o.img}" alt="" >
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