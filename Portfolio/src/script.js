let isFooterOpen = false;
export function TopFunction() {
  // alert("Hello");

  const footer = document.getElementsByClassName("MainBackground")[0];
  const arrow = document.getElementsByClassName("slider1")[0];
  const footerText = document.getElementById("MainBackgroundText");


  
 // Add transitions
  footer.style.transition = "height 0.1s ease";
  arrow.style.transition = "transform 0.9s ease";


  if (!isFooterOpen) {
    const mediaQueryNew = window.matchMedia("(max-width: 910px)");
    console.log(mediaQueryNew.matches);

    //smaller screen size
    if(mediaQueryNew.matches){
      footer.style.height = "990px";

    }else{
      footer.style.height = "700px";
      
      footerText.style.display = "block"; // Show text
    }
    arrow.style.transform = "rotate(0deg)";
    footerText.style.display = "block";
  } else {
    footer.style.height = "30px";
    arrow.style.transform = "rotate(0deg)";
    footerText.style.display = "none"; // Hide text
    arrow.style.height = "20px";
  }

  arrow.style.transition = "transform 0.6s ease";
  isFooterOpen = !isFooterOpen;
}
function toggleFooter() {

  const footer = document.getElementsByClassName("rectangle")[0];
  const arrow = document.getElementsByClassName("arrowup")[0];
  const footerText = document.getElementById("footerText");

  const mediaQueryNew = window.matchMedia("(max-width: 1031px)");
  console.log(mediaQueryNew.matches);


  
 // Add transitions
  footer.style.transition = "height 0.6s ease";
  arrow.style.transition = "transform 0.6s ease";


  if (!isFooterOpen) {
     if(mediaQueryNew.matches){
      footer.style.height = "630px";
      arrow.style.transform = "rotate(180deg)";
      footerText.style.display = "block"; 
     }else{
    footer.style.height = "400px";
    arrow.style.transform = "rotate(180deg)";
    footerText.style.display = "block"; 
     }
  } else {
    footer.style.height = "30px";
    arrow.style.transform = "rotate(0deg)";
    footerText.style.display = "none"; 
  }

  arrow.style.transition = "transform 0.6s ease";
  isFooterOpen = !isFooterOpen;
  console.log(isFooterOpen);
}



const SelectedDomains = ['All'];
export function handleDomainClick(event) {
    // selected div element by id
  const domain = event.currentTarget.id;

  // selected div block by id
  const domainElement = document.getElementById(domain);

  
    console.log(SelectedDomains);
    const lastElement = SelectedDomains[SelectedDomains.length-1]
    const firstElement =SelectedDomains[0]

    console.log("-------")
    console.log(domain)
     console.log("-------")

    // document.getElementById('web-developmentProject').style.display = 'none';
    // document.getElementById('designsProject').style.display = 'block';
    // document.getElementById('case-studiesProject').style.display = 'block';
    
    // ...existing code...
    // map domain IDs to project class names
    const domainToClass = {
      'web-development': 'web-developmentProject',
      'designs': 'designsProject',
      'case-studies': 'case-studiesProject'
    };

    // hide all project items
    const projectItems = document.querySelectorAll('.projects > div');
    projectItems.forEach(el => el.style.display = 'none');

    if (domain === 'All') {
      // show everything
      projectItems.forEach(el => el.style.display = 'block');
    } else {
      const cls = domainToClass[domain];
      if (cls) {
        // show all elements that have the matching class
        const matches = document.getElementsByClassName(cls); // HTMLCollection
        for (let i = 0; i < matches.length; i++) {
          matches[i].style.display = 'block';
        }
      } else {
        console.warn('Unknown domain:', domain);
      }
    }
// ...existing code...
  

    if(SelectedDomains.length > 0){
      // if(domain){}

      document.getElementById(lastElement).style.backgroundColor = 'white';
      document.getElementById(lastElement).style.color = 'black';
      // firstElement.style.backgroundColor = 'orange';
      domainElement.style.backgroundColor = 'orange';
      domainElement.style.color = 'white';
      SelectedDomains.pop();
      SelectedDomains.push(domain);
     
    }else{
      console.log('first ' + firstElement)
      console.log('last ' + lastElement)
      domainElement.style.backgroundColor = 'orange';
      domainElement.style.color = 'white';
      SelectedDomains.push(domain);

      

    } 
    
    // console.log(SelectedDomains);
  

}




export function showsidebar(){
  const sidebar = document.getElementsByClassName("sidebar")[0];
  sidebar.style.display = "block";
}

export function closesidebar(){
  const sidebar = document.getElementsByClassName("sidebar")[0];
  sidebar.style.display = "none";
}