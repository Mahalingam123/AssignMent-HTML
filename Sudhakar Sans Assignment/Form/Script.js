document.addEventListener("DOMContentLoaded", function(){

  const form = document.getElementById("form");

  form.addEventListener("submit", (e) => {
    let valid = true;

   
    const email = document.getElementById("email");
    if (!email.value.includes("@") || email.value.trim() === "") {
      setInvalid(email);
      valid = false;
    } else {
      setValid(email);
    }

    
    const phone = document.getElementById("phone");
    if (phone.value.length < 10) {
      setInvalid(phone);
      valid = false;
    } else {
      setValid(phone);
    }


    const gender=document.getElementById("genderF");

      const gender1=document.getElementById("genderM");
    if(gender.checked||gender1.checked){
       valid=true;
    }
    else{
        valid = false;
    }


    const phoneEmer = document.getElementById("emn");
    if (phoneEmer.value.length < 10) {
      setInvalid(phoneEmer);
      valid = false;
    } else {
      setValid(phoneEmer);
    }

   
    const name = document.getElementById("name");
    if (name.value.trim() === "") {
      setInvalid(name);
      valid = false;
    } else {
      setValid(name);
    }

  
    const dob = document.getElementById("dob");
    if (dob.value === "") {
      setInvalid(dob);
      valid = false;
    } else {
      setValid(dob);
    }

   

      const fname = document.getElementById("fname");
    if (fname.value === "") {
      setInvalid(fname);
      valid = false;
    } else {
      setValid(fname);
    }
    
       const Address = document.getElementById("add");
    if (Address.value === "") {
      setInvalid(Address);
      valid = false;
    } else {
      setValid(Address);
    }

    
      const mname = document.getElementById("mname");
    if (mname.value === "") {
      setInvalid(mname);
      valid = false;
    } else {
      setValid(mname);
    }

      const pan = document.getElementById("pan");
    if (pan.value === "") {
      setInvalid(pan);
      valid = false;
    } else {
      setValid(pan);
    }

      const acc = document.getElementById("acc");
    if (acc.value === "") {
      setInvalid(acc);
      valid = false;
    } else {
      setValid(acc);
    }

       const ifc = document.getElementById("ifc");
    if (ifc.value === "") {
      setInvalid(ifc);
      valid = false;
    } else {
      setValid(ifc);
    }

     const resume=document.getElementById("res");
    
     const fileRes= resume.files[0];

     if(!fileRes){
        valid=false;
        setInvalid(resume);
     }

     const photo=document.getElementById("photo");
    
     const photoFile= photo.files[0];

     if(!photoFile){
        valid=false;
        setInvalid(photo);
     }
     else if(photoFile.type!="image/jpeg"){
        valid=false;
        alert("Only  jpeg format Allowed");
     }
     
     

    
    const Deg = document.getElementById("deg");
    if (Deg.selected) 
        {
      setInvalid(Deg);
      valid = false;
    } else 
        {
      setValid(Deg);
    }
    
    


    
    const aadhar = document.getElementById("ahar");
    if (aadhar.value.length !== 12) {
      setInvalid(aadhar);
      valid = false;
    } else {
      setValid(aadhar);
    }

    if (!valid) {
      alert("Please fill all required fields correctly!");
      e.preventDefault(); 
    }
  });

  function setValid(input) {
    input.style.border = "2px solid green";
  }

  function setInvalid(input) {
    input.style.border = "2px solid red";
  }
});
