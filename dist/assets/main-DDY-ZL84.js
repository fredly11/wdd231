(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const s={images:[{credit:"NPS/Jim Peaco",title:"Grand Prismatic Spring",altText:"Brilliant blues and greens of a hot spring ringed by oranges, yellows, reds, and browns.",caption:"The bright colors found in Grand Prismatic Spring come from thermophiles—microorganisms that thrive in hot temperatures",url:"https://www.nps.gov/common/uploads/structured_data/3C7D5920-1DD8-B71B-0B83F012ED802CEA.jpg"},{credit:"NPS/Jim Peaco",title:"Aurum Geyser",altText:"A crowd of people standing along a wooden boardwalk watches a geyser erupt.",caption:"Aurum Geyser erupting",url:"https://www.nps.gov/common/uploads/structured_data/3C7D2FBB-1DD8-B71B-0BED99731011CFCE.jpg"},{credit:"NPS/Diane Renkin",title:"Black Pool",altText:"A visitor stands on a boardwalk near a hot spring and a lake.",caption:"Black Pool at the West Thumb Geyser Basin",url:"https://www.nps.gov/common/uploads/structured_data/3C7D383B-1DD8-B71B-0BEC4A4D6BDF7CAD.jpg"},{credit:"NPS/Jim Peaco",title:"Beehive Geyser",altText:"People on a wooden boardwalk watch a geyser erupt.",caption:"Visitors to the Upper Geyser Basin watch Beehive Geyser erupt.",url:"https://www.nps.gov/common/uploads/structured_data/3C7D334F-1DD8-B71B-0B108C7771F4E854.jpg"},{credit:"NPS/Jim Peaco",title:"Wolf howling",altText:"A wolf howls while standing on a snowy field.",caption:"Alpha male of the Canyon wolf pack",url:"https://www.nps.gov/common/uploads/structured_data/3C7D3BD3-1DD8-B71B-0BB607F9BAAE1271.jpg"},{credit:"NPS/Jim Peaco",title:"Fishing Bridge Trailside Museum",altText:"Visitors walk into a rustic, log and stone building.",caption:"The stone-and-log architecture of Fishing Bridge Trailside Museum became a prototype for park buildings all around the country",url:"https://www.nps.gov/common/uploads/structured_data/3C7D573E-1DD8-B71B-0B5C0DF5BB91D043.jpg"},{credit:"NPS/Diane Renkin",title:"Great Fountain Geyser",altText:"A geyser erupting in the middle of a large pool.",caption:"Great Fountain Geyser erupts against a blue summer sky",url:"https://www.nps.gov/common/uploads/structured_data/3C7D5AB4-1DD8-B71B-0BF91CF45345ED16.jpg"},{credit:"NPS/Jim Peaco",title:"Old Faithful Geyser in winter",altText:"A crowd in front of an erupting geyser during a snowy winter day.",caption:"Winter is a magical time to watch Old Faithful Geyser erupt",url:"https://www.nps.gov/common/uploads/structured_data/3C7D610A-1DD8-B71B-0BEF676112007818.jpg"},{credit:"NPS/Jim Peaco",title:"Palette Spring",altText:"Visitors walk in front of a brightly colored, terraced landscape.",caption:"The vibrant colors of Palette Springs are formed by thermophiles—heat-loving organisms",url:"https://www.nps.gov/common/uploads/structured_data/3C7D8903-1DD8-B71B-0BA8669AEEF74379.jpg"},{credit:"NPS/Peggy Olliff",title:"Bighorn sheep",altText:"Two bighorn sheep laying on the ground.",caption:"Two bighorn rams rest and chew their cud",url:"https://www.nps.gov/common/uploads/structured_data/3C7D95DD-1DD8-B71B-0BC4FA19BD72F0EC.jpg"},{credit:"NPS/Diane Renkin",title:"Lower Falls from Artist Point",altText:"A river plunges into a steep, barren canyon.",caption:"Lower Falls from Artist Point",url:"https://www.nps.gov/common/uploads/structured_data/8A729E5B-B263-9C49-7AD4C4B8E70064E0.jpg"},{credit:"NPS/Diane Renkin",title:"Bison herd in a thermal area",altText:"A herd of bison grazing through a barren and steaming thermal area.",caption:"Bison near Mud Volcano",url:"https://www.nps.gov/common/uploads/structured_data/8A869F85-FB2E-5EAF-11367EB2DB75963D.jpg"},{credit:"NPS/Jim Peaco",title:"Grizzly bear",altText:"A grizzly bear standing on a fallen tree.",caption:"Grizzly bear in the woods",url:"https://www.nps.gov/common/uploads/structured_data/8A902498-9D11-D06D-E352C073E3E85A58.jpg"},{credit:"NPS/Dave Krueger",title:"Yellowstone River",altText:"A greenish river meanders through a hilly river valley.",caption:"The Yellowstone River near Tower Fall",url:"https://www.nps.gov/common/uploads/structured_data/8AB8F1A3-D1A0-A6FB-E8E5CAA8B2937264.jpeg"}]},l=[{name:"Current Conditions &#x203A;",link:"conditions.html",image:s.images[2].url,description:"See what conditions to expect in the park before leaving on your trip!"},{name:"Fees and Passes &#x203A;",link:"fees.html",image:s.images[3].url,description:"Learn about the fees and passes that are available."},{name:"Visitor Centers &#x203A;",link:"visitor_centers.html",image:s.images[9].url,description:"Learn about the visitor centers in the park."}],c="https://developer.nps.gov/api/v1/",u="ZAUHQvZGJHCLzV4UGKBcD95TWnqWQ6ZRD8wbNkCD";async function d(e){const t={method:"GET",headers:{"X-Api-Key":u}};let r={};const a=await fetch(c+e,t);if(a.ok)r=await a.json();else throw new Error("response not ok");return r}function p(e){return l.map((r,a)=>(r.image=e[a+2].url,r))}async function g(){return(await d("parks?parkCode=yell ")).data[0]}function m(e){return`<a href="/" class="hero-banner__title">${e.name}</a>
    <p class="hero-banner__subtitle">
      <span>${e.designation}</span>
      <span>${e.states}</span>
    </p>`}function h(e){return`<div class="media-card">
    <a href="${e.link}">
    <img src="${e.image}" alt="${e.name}" class="media-card__img">
    <h3 class="media-card__title">${e.name}</h3>
    </a>
   <p>${e.description}</p>
     </div>`}function f(e){return e.find(r=>r.type==="Mailing")}function w(e){return e.find(r=>r.type==="Voice").phoneNumber}function B(e){const t=f(e.addresses),r=w(e.contacts.phoneNumbers);return`<section class="contact">
    <h3>Contact Info</h3>
    <h4>Mailing Address:</h4>
    <div><p>${t.line1}<p>
    <p>${t.city}, ${t.stateCode} ${t.postalCode}</p></div>
    <h4>Phone:</h4>
    <p>${r}</p>
  </section>
    `}function y(e){const t=document.querySelector(".disclaimer > a");t.href=e.url,t.innerHTML=e.fullName,document.querySelector("head > title").textContent=e.fullName,document.querySelector(".hero-banner > img").src=e.images[0].url,document.querySelector(".hero-banner__content").innerHTML=m(e)}function D(e){document.querySelector("#park-footer").insertAdjacentHTML("afterbegin",B(e))}function b(e){y(e),D(e)}function v(e){const t=document.querySelector(".intro");t.innerHTML=`<h1>${e.fullName}</h1>
  <p>${e.description}</p>`}function A(e){const t=document.querySelector(".info"),r=e.map(h);t.insertAdjacentHTML("afterbegin",r.join(""))}async function P(){const e=await g(),t=p(e.images);b(e),v(e),A(t)}function C(){const e=document.querySelector("#global-nav-toggle");document.querySelectorAll(".global-nav__split-button__toggle"),e.addEventListener("click",t=>{let r=t.target;document.querySelector(".global-nav").classList.toggle("show"),r.tagName!="BUTTON"&&(r=r.closest("button")),document.querySelector(".global-nav").classList.contains("show")?r.setAttribute("aria-expanded",!0):r.setAttribute("aria-expanded",!1),console.log("toggle")})}P();C();
