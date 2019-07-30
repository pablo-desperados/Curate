  let changePicture =(event) =>{

    button = document.getElementById('customer_profile_picture')
    var fileReader = new FileReader()
    fileReader.onload = ((event)=>{
      document.getElementById("profile-pic").src = fileReader.result
    })
    fileReader.readAsDataURL(button.files[0])

  }
