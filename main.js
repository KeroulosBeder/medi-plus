const menu = document.getElementById("menu");
menu.addEventListener("click",function (){
    this.classList.toggle("close");
});
let mainBtns = document.querySelectorAll(".btn");

    for(let btn of mainBtns){
        btn.addEventListener("click",function (){
    
                btn.classList.remove("clicked");
                setTimeout(()=>{
                    this.classList.add("clicked");
                },50)
                // console.log(this);

    
        });
    
    }




// mainBtns[2].classList.add("clicked")
// mainBtns[2].classList.remove("clicked")
// console.log(mainBtns[2])


// ******************************************** Slider ********************************************
const nextBtn = document.getElementById('next')
const prevtBtn = document.getElementById('prev')
let slides = document.querySelectorAll(".slide")
let sliderHeadings = document.querySelectorAll(".slide h1")
let sliderps = document.querySelectorAll(".slide p")
let sliderBtns = document.querySelectorAll(".slide .inner")
var counter = 0; 
introAnimation(sliderHeadings[0])
introAnimation(sliderps[0])
introAnimation(sliderBtns[0])

function introAnimation(element){
    element.classList.add("intro-animation");
}
function advancedSlider (){
    counter++ 
    if(counter > 2){
        counter = 0; 
        addAnimation(sliderHeadings,counter,"intro-animation","add") 
        addAnimation(sliderHeadings,(2),"intro-animation","remove")
        addAnimation(sliderps,counter,"intro-animation","add") 
        addAnimation(sliderps,(2),"intro-animation","remove")
        addAnimation(sliderBtns,counter,"intro-animation","add") 
        addAnimation(sliderBtns,(2),"intro-animation","remove")
    
    for(let slide of slides){
        slide.style.transform = `translateX(${counter * 100}%)`
       
    }
    }else{

            // sliderHeadings[counter].classList.add("slide-animation-heading")
            // sliderHeadings[counter-1].classList.remove("slide-animation-heading")

            addAnimation(sliderHeadings,counter,"intro-animation","add") 
            addAnimation(sliderHeadings,(counter - 1),"intro-animation","remove")
            addAnimation(sliderps,counter,"intro-animation","add") 
            addAnimation(sliderps,(counter - 1),"intro-animation","remove")
            addAnimation(sliderBtns,counter,"intro-animation","add") 
            addAnimation(sliderBtns,(counter - 1),"intro-animation","remove")
        

        for(let slide of slides){
            slide.style.transform = `translateX(-${counter * 100}%)`
           
        }


    }
}
var sliderInterval = setInterval(() => {
    advancedSlider();
}, 3000);
nextBtn.addEventListener('click',function (){
    clearInterval(sliderInterval)
    sliderInterval = setInterval(advancedSlider,3000)
    advancedSlider();
})




prevtBtn.addEventListener('click',function (){
    clearInterval(sliderInterval)
    sliderInterval = setInterval(advancedSlider,3000)
    counter--
    if(counter < 0){
        counter = 2; 
        addAnimation(sliderHeadings,counter,"intro-animation","add") 
        addAnimation(sliderHeadings,(0),"intro-animation","remove")
        addAnimation(sliderps,counter,"intro-animation","add") 
        addAnimation(sliderps,(0),"intro-animation","remove")
        addAnimation(sliderBtns,counter,"intro-animation","add") 
        addAnimation(sliderBtns,(0),"intro-animation","remove")
    
    for(let slide of slides){
        slide.style.transform = `translateX(-${counter * 100}%)`
       
    }
    }else{
        // sliderHeadings[counter].classList.add("slide-animation-heading") 
        // sliderHeadings[counter + 1].classList.remove("slide-animation-heading")

        addAnimation(sliderHeadings,counter,"intro-animation","add") 
        addAnimation(sliderHeadings,(counter + 1),"intro-animation","remove")
        addAnimation(sliderps,counter,"intro-animation","add") 
        addAnimation(sliderps,(counter + 1),"intro-animation","remove")
        addAnimation(sliderBtns,counter,"intro-animation","add") 
        addAnimation(sliderBtns,(counter + 1),"intro-animation","remove")
        for(let slide of slides){
            slide.style.transform = `translateX(-${counter * 100}%)`
           
        }
        
    }


})

function addAnimation(nodes, number, classname,option){
    if(option == "add"){
        nodes[number].classList.add(`${classname}`)
    }else{
        nodes[number].classList.remove(`${classname}`)
    }
}

// slider ends finally i should to make it a inifite loop and only i will not make it for mobile surly
// Video overlay Logic 

const videoClose = document.getElementById("closeVideo")
const videoContainer = document.getElementById("videoContainer")
const playVideo = document.getElementById("play-video")
const iframVideo = document.querySelector("#videoContainer iframe")

videoClose.addEventListener('click',function (){
    videoContainer.classList.add("hide");
    videoContainer.classList.remove("show")
    document.body.style.overflow = "auto"; 
    setTimeout(() => {
        iframVideo.setAttribute("src","https://www.youtube.com/embed/bK91vC3gYt0?si=uAdeF7Jmqs4dY5Zq")
    }, 500);

});
playVideo.addEventListener('click',function (){
    videoContainer.classList.add("show")
    videoContainer.classList.remove("hide")
    document.body.style.overflow = "hidden"; 

})

// Sticky header 
const mainHeader = document.querySelector(".main-bar")
if(window.scrollY > 120){
    mainHeader.classList.add("bar-hide")
    setTimeout(() => {
        mainHeader.style.top = "-1px" 
        mainHeader.classList.add("bar-show")
    }, 150);
}
window.addEventListener("scroll", function (){
    if(this.scrollY > 120){
        mainHeader.classList.add("bar-hide")
        setTimeout(() => {
            mainHeader.style.top = "-1px" 
            mainHeader.classList.add("bar-show")
        }, 150);
    }
    else{
        mainHeader.style.top = "-100px"; 
        mainHeader.classList.remove("bar-hide")
        mainHeader.classList.remove("bar-show")
        // mainHeader.classList.remove("animation-header")

    }

})

// Departments Logic 

let departmentNavLis = document.querySelectorAll(".department nav ul li")
let depratments = document.querySelectorAll(".department [class^='d']")
let indexOfD = -1; 



for (let li of departmentNavLis) {
    indexOfD++ 
    li.addEventListener("click",function(){
        for(let e of departmentNavLis){
            e.classList.remove("active")
        }
        this.classList.add("active");
        if(li == departmentNavLis[0]){
            for(let element of depratments){
                element.style.display ="none" 
                depratments[0].style.opacity ="0"; 
                depratments[0].style.transform ="translateY(50px)"; 
            }
            depratments[0].style.display ="flex"; 
            setTimeout(() => {
                depratments[0].style.opacity ="1";
                depratments[0].style.transform ="translateY(0px)"; 
                }, 1); 
        }
        if(li == departmentNavLis[1]){
            for(let element of depratments){
                element.style.display ="none" 
            depratments[1].style.opacity ="0"; 
            depratments[1].style.transform ="translateY(50px)"; 
            }
            depratments[1].style.display ="flex"; 
            setTimeout(() => {
                depratments[1].style.opacity ="1";
                depratments[1].style.transform ="translateY(0px)"; 
                }, 1); 
        }
        if(li == departmentNavLis[2]){
            for(let element of depratments){
                element.style.display ="none" 
            depratments[2].style.opacity ="0"; 
            depratments[2].style.transform ="translateY(50px)"; 
            }
            depratments[2].style.display ="flex"; 
            setTimeout(() => {
                depratments[2].style.opacity ="1";
                depratments[2].style.transform ="translateY(0px)"; 
                }, 1); 
        }
        if(li == departmentNavLis[3]){
            for(let element of depratments){
                element.style.display ="none" 
                depratments[3].style.opacity ="0";
                depratments[3].style.transform ="translateY(50px)"; 
            }
            depratments[3].style.display ="flex"; 
            setTimeout(() => {
            depratments[3].style.opacity ="1";
            depratments[3].style.transform ="translateY(0px)"; 
            }, 1); 
        }
    })
        
    
}



// // teamBoxes[0].getBoundingClientRect()
// //  clientInformation
// for(let box of teamBoxes){
//     box.addEventListener("mousemove",function(e){
//         box.style.transition = "none"
//         const boxDimentions = this.getBoundingClientRect(); 
//           let x = (e.clientX - boxDimentions.left) / boxDimentions.width;  
//           let y = (e.clientY - boxDimentions.top) / boxDimentions.height; 
//           const digx = 5 - 10 * y; 
//           const digy = 10 * x  - 5 ; 
//          console.log("x = " + digx)
//          console.log("Y = " +y)
//          this.style.transform = `rotateY(${digy}deg) rotateX(${digx}deg) perspective(300px) scale3d(1,1,1)`
         
        
//     })
//     box.addEventListener("mouseleave",function(e){
//          box.style.transform = `rotateY(0deg) rotateX(0deg)`
//          box.style.transition = ".4s ease all"
         
        
//     })
// }
function throttle(fn, limit) {
    let lastCall = 0;
    return function(...args) {
        const now = (new Date()).getTime();
        if (now - lastCall >= limit) {
            lastCall = now;
            fn(...args);
        }
    };
}
// there is a difference between mouseover and mouse move how i was thinking two is the same one 
// Team Box Animation 
let teamBoxes = document.querySelectorAll(".team .box")
// console.log(ax)
// teamBoxes[0].style
// console.log(teamBoxes[0].style)
for(let Tbox of teamBoxes){
    Tbox.addEventListener("mousemove",function(e){
        this.style.transition = "transform 100ms, scale .7s";
        let rect = this.getBoundingClientRect()
        let mouseLocationY = (((e.y - rect.top)/rect.height) - .46) * 50
        let mouseLocationX = ( .5 -((e.x - rect.left)/rect.width) ) * 35
        // console.log("rotate X " + mouseLocationY + " deg")
        // console.log(mouseLocationY)
        this.style.transform = `rotateX(${mouseLocationY}deg) rotateY(${mouseLocationX}deg) `
        this.style.scale = "1.1 1.1"
    })
    
    
}//transition:;
for(let Tbox of teamBoxes){
    Tbox.addEventListener("mouseleave", function(){
        this.style.transition = "transform 1s, scale .7s";
        this.style.transform = "none" ; 
        this.style.scale = "none" ; 
    })
}





// Main Select Compononet 
const mainSelect = document.querySelectorAll(".main-select")
const submitbtn = document.getElementById("submit")
const selectMessage = document.querySelector(".message")
for(let box of mainSelect){
    const selectLis = box.querySelectorAll("li")
    box.addEventListener("click",function(){
        this.classList.toggle("box-clicked")
    })
    for(let li of selectLis){
        li.addEventListener("click",function(){
            box.querySelector("span").textContent = li.textContent 
             if(li.textContent == "Cardiac Clinc"){
                mainSelect[1].querySelector("span").textContent = "Doctor";
                for(let anotherLi of mainSelect[1].querySelectorAll("li")){
                    anotherLi.style.display = "none"; 
                }
                mainSelect[1].querySelector(".heart").style.display = "block"; 
             }
             if(li.textContent == "Neurology"){
                mainSelect[1].querySelector("span").textContent = "Doctor";
                for(let anotherLi of mainSelect[1].querySelectorAll("li")){
                    anotherLi.style.display = "none"; 
                }
                
                for(let brain of mainSelect[1].querySelectorAll(".brain")){
                 brain.style.display = "block";    
                } 
             }
            if(li.textContent == "Dentistry"){
                mainSelect[1].querySelector("span").textContent = "Doctor";
                for(let anotherLi of mainSelect[1].querySelectorAll("li")){
                    anotherLi.style.display = "none"; 
                }
                
                for(let brain of mainSelect[1].querySelectorAll(".dentist")){
                 brain.style.display = "block";    
                } 
            }
            if(mainSelect[0].contains(li)){
                document.getElementById("dep").value = li.textContent
                document.getElementById("doc").value =""; 
            }

            if(mainSelect[1].contains(li)){
                if(li.textContent != "Doctor"){
                    document.getElementById("doc").value = li.textContent
                }
                
            }


        })

    }
}
submitbtn.addEventListener("click",function(){
    if( document.getElementById("dep").value == ""){
        selectMessage.textContent = "Please Select Department"
        selectMessage.classList.add("on")
        setTimeout(() => {
        selectMessage.classList.remove("on")
        }, 2000);
    }
    else if(document.getElementById("doc").value == ""){
        selectMessage.textContent = "Please Select Doctor"
        selectMessage.classList.add("on")
        setTimeout(() => {
        selectMessage.classList.remove("on")
        }, 2000);
    }

})
let preserveColor = localStorage.getItem("colorMethod")

if(preserveColor == "mycyan"){
    document.body.className = "mycyan"
}
else if(preserveColor == "myred"){
    document.body.className = "myred"
}
else if(preserveColor == "myblue"){
    document.body.className = "myblue"
}
else if(preserveColor == "mysubred"){
    document.body.className = "mysubred"
}
else if(preserveColor == "myteal"){
    document.body.className = "myteal"
}
else if(preserveColor == "mysubteal"){
    document.body.className = "mysubteal"
}
else if(preserveColor == "mypurple"){
    document.body.className = "mypurple"
}
else if(preserveColor == "myorange"){
    document.body.className = "myorange"
}
else if(preserveColor == "mysubblue"){
    document.body.className = "mysubblue"
}

// color palite 
const gear = document.querySelector(".gear")
const parentOfGear = document.querySelector(".color-changer")
gear.addEventListener("click",function(){
    parentOfGear.classList.toggle("active-gear")
})
const colors = document.querySelectorAll(".color-changer .box .color")
for (const el of colors) {
        el.addEventListener("click",function(){
            for(const anotherel of colors){
                anotherel.querySelector(".selected").style.display = "none"; 
            }
            el.querySelector(".selected").style.display ="block" 
            document.body.className = el.getAttribute("data-color")
            localStorage.setItem("colorMethod",el.getAttribute("data-color"))
        })
}
// var startY = 0, newY = 0; 
// gear.addEventListener("mousedown",function(e){

//         console.log(e.y)
//         parentOfGear.style.top = e.y + "px"; 
 

// })

// gear.addEventListener("mouseup",function(){
//     clearInterval(moveinterval)
// })


    var GearSavedTop = localStorage.getItem("mouseTop");
    // parentOfGear.style.top = `${GearSavedTop}px`
    parentOfGear.style.top =  GearSavedTop + "px"; 
    gear.addEventListener("mousedown", function(){
        document.body.style.cursor = "grabbing"
        gear.style.cursor = "grabbing"
        document.addEventListener("mousemove",mousemoving)
        document.addEventListener("mouseup",function(e){
            localStorage.setItem("mouseTop", e.y.toString())
            document.removeEventListener("mousemove",mousemoving)
            document.body.style.userSelect = "auto" 
            document.body.style.cursor = "auto" 
            gear.style.cursor = "grab"

        })
    })


function mousemoving(ee){
    parentOfGear.style.top = ee.y + "px"
    document.body.style.userSelect = "none"
}
// gear.addEventListener("mouseleave",function(){

// })



// Reaveal animation 
function revealAnimation (arry,delaytime = 150,distance = window.innerHeight / 1){
    for(let i = 0; i < arry.length; i++){
        
        if (arry[i].getBoundingClientRect().top < distance){
                setTimeout(() => {
                arry[i].classList.add("animation-reveal"); 
                }, i * delaytime);

        }
    }
}
// var num = 0; 
var hasBeenCalled = false; 
function counterup (arry){
    if(hasBeenCalled) return; 
    hasBeenCalled = true; 
            for(let i = 0; i < arry.length; i++){
                let num = parseInt(arry[i].querySelector("h3").getAttribute("data-num"))
            for(let j = 0; j <= arry[i].querySelector("h3").getAttribute("data-num"); j++){
                setTimeout(() => {
                    arry[i].querySelector("h3").textContent = `${j}`;
                },(3000 / num) * j);
               
            }
        }
        // setTimeout(() => {
        //     arry[i].classList.add("animation-reveal"); 
        //     }, num);
        // num += (parseInt(arry[i].querySelector("h3").getAttribute("data-num"))) * 2;

}
   

let infoBoxs = document.querySelectorAll(".info-cards .box");
let featuresboxs = document.querySelectorAll(".features .card"); 
let funfactsBoxs = document.querySelectorAll(".funfacts .box");
let whyChooseBoxs = document.querySelectorAll(".why-choose .container > *:not(.video)")
let servicesBoxs = document.querySelectorAll(".services .box")
let departmentBoxs = document.querySelectorAll(".department .d1 > *")
let depratmentLinks = document.querySelectorAll(".department nav ul li"); 
let pricingBoxs = document.querySelectorAll(".pricing .box"); 
let teamBoxsanimation = document.querySelectorAll(".team .box")
let blogs = document.querySelectorAll(".blogs .box")
let contactUsBoxs = document.querySelectorAll(".contact-us .container > *")
let callBoxs = document.querySelectorAll(".call > *:not(.overlay)")
let portfolioBoxs = document.querySelectorAll(".portfolio .card")
let testimonialsBoxs = document.querySelectorAll(".testimonials  .box")

revealAnimation(infoBoxs,150); 
revealAnimation(featuresboxs,400,this.innerHeight / 1.3)
revealAnimation(funfactsBoxs, 10, this.innerHeight / 1.3) 
revealAnimation(whyChooseBoxs, 10, this.innerHeight / 1.5) 
revealAnimation(servicesBoxs, 150, this.innerHeight / 1.4) 
revealAnimation(departmentBoxs, 10, this.innerHeight / 1.4) 
revealAnimation(depratmentLinks, 250, this.innerHeight / 1.4) 
revealAnimation(pricingBoxs, 250, this.innerHeight / 1.4) 
revealAnimation(teamBoxsanimation, 150, this.innerHeight / 1.6) 
revealAnimation(blogs, 250, this.innerHeight / 1.4) 
revealAnimation(contactUsBoxs, 10, this.innerHeight / 1.8) 
revealAnimation(callBoxs, 150, this.innerHeight / 1.4) 
revealAnimation(portfolioBoxs, 50, this.innerHeight / 1.1) 
revealAnimation(testimonialsBoxs, 50, this.innerHeight / 1.1) 

if(funfactsBoxs[0].getBoundingClientRect().top < window.innerHeight / 1.3){
    counterup(funfactsBoxs)
}
window.addEventListener("scroll", function(){
        revealAnimation(infoBoxs,150)
        revealAnimation(featuresboxs,400,this.innerHeight / 1.4)
        revealAnimation(funfactsBoxs, 10, this.innerHeight / 1.3) 
        if(funfactsBoxs[0].getBoundingClientRect().top < window.innerHeight / 1.3){
            counterup(funfactsBoxs)
        }
        revealAnimation(whyChooseBoxs, 10, this.innerHeight / 1.5) 
        revealAnimation(servicesBoxs, 150, this.innerHeight / 1.4) 
        revealAnimation(departmentBoxs, 10, this.innerHeight / 1.4) 
        revealAnimation(depratmentLinks, 250, this.innerHeight / 1.4) 
        revealAnimation(pricingBoxs, 250, this.innerHeight / 1.4) 
        revealAnimation(teamBoxsanimation, 150, this.innerHeight / 1.6) 
        revealAnimation(blogs, 250, this.innerHeight / 1.4) 
        revealAnimation(contactUsBoxs, 10, this.innerHeight / 1.8) 
        revealAnimation(callBoxs, 150, this.innerHeight / 1.4) 
        revealAnimation(portfolioBoxs, 100, this.innerHeight / 1.2) 
        revealAnimation(testimonialsBoxs, 100, this.innerHeight / 1.1) 


})  


