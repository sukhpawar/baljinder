 
//  main div
 let name =`
 <div id="main-wrapper">
     <div class="main" id="main">
 
        <div class="main-top-bar">
 
         </div>
        <div class="main-text">
         <span>BALJINDER</span>
        </div>
       <div class="main-bottom-bar">
 
        </div>
  </div>
 </div>
     
    `;


    //study div
    let study= `
    <div class="container-fluid">
<div class="study">
<div class="degree">
<div class="degree-name"> 
 Master of Computer Applications
</div>
<div class="college-name">
Thapar Institute of Engineering & Technology
Punjab India
</div>
<div class="passout-year">
Passout Year 2016
</div>
</div>
</div>

<div class="study">
<div class="degree">
<div class="degree-name"> 
 Bachelor of Computer Science
</div>
<div class="college-name">
Baring Union Christian College Batala
Punjab India
</div>
<div class="passout-year">
Passout Year 2013
</div>
</div>
</div>
</div>
`

//skills div
let skills= `
<div className="skills">
<div class="java">
<h3>Java</h3>
<img class="skill-img-height" src="https://image.flaticon.com/icons/svg/226/226777.svg" alt="java-img">
<p> I am an experience Java Programmer and worked on many projects where Java was the main langauage used.<p>
 <hr>
</div>

<div class="java">
<h3>Swift</h3>
<img class="skill-img-height" src="https://image.flaticon.com/icons/svg/919/919833.svg">
<p>I used swift to design a plugin for client application.<p>
 <hr>
</div>
</div>
`

//experience div

let experience =`
<div class="experience">
<h3> MSB DOCS</h3>
<span>Designation</span><p>Senior Programmer</p>
<span>Location</span><p>Chandigarh India</p>
<span>Time Period</span><p>Mar-2019 to present date
<div class="horizontal-break">
<div></div>

<div></div>
<div></div>
</div
<div class="experience">
<h3> Acentrix</h3>
<span>Designation</span><p>Developer Programmer</p>
<span>Location</span><p>Chandigarh India</p>
<span>Time Period</span><p>Mar-2016 to Mar-2019

</div




</div>`

//hobbies
let hobbies= `
<div class="hobbies container-fluid">
 <div class="row">
  <div class="col-md-6">
  <div class="hobby">
   <img src="/img/cricket.jpg">
   <div class="description">
   I love playing cricket. Playing with
   friends makes me so energetic and afresh
   that I wish we could play a lot more time
   we normally do.
  
   </div>
   </div>
   
  </div>
  
  <div class="col-md-6">
  <div class="hobby">
   <img src="/img/reading.jpg" alt="reading-img">
   <div class="description">
   I often falls in reading whenever I have 
    free time.Reading about new technologies is
      my main focus.
      </div> 
    
   </div>
  </div>
 </div>
</div>
`

let contactMe=`
<div class="container-fluid">
   <div class="first-contact">
    <img class="img-dim" src="https://image.flaticon.com/icons/svg/552/552489.svg" alt="contact-img">
     <h3>+91 9855291366            </h3>
     </div>
    <div class="second-contact"> 
     <img class="img-dim" src="https://image.flaticon.com/icons/svg/201/201566.svg" alt="email-img">
     <h3>balpawar91@gmail.com</h3>
     </div>
     <div class="second-contact"> 
     <img class="img-dim" src="https://image.flaticon.com/icons/svg/145/145802.svg" alt="email-img">
     <h3>Facebook</h3>
     </div>
</div>
`



  
  
   function changeMain(event){
    document.getElementById('main-section').innerHTML= name;

      switch(event.innerHTML)
      {
        case 'Name':
             
                document.getElementById('main-section').innerHTML= name;
                break;
        case 'Study':
             console.log("study")
                document.getElementById('main-section').innerHTML=study;
                break;
        case 'Experience':
            document.getElementById('main-section').innerHTML=experience;
            break;      

        case 'Skills' :       
                document.getElementById('main-section').innerHTML=skills;
                break;
        case 'Hobbies':
            document.getElementById('main-section').innerHTML= hobbies;
            break;
        case 'Contact Me' :
            document.getElementById('main-section').innerHTML=contactMe;
            break;            
          default:
             
                document.getElementById('main-section').innerHTML= name;
      }
    

       
       

   }
