let url = "https://kontests.net/api/v1/all"
fetch(url).then((res) => {return res.json()}).then((val)=>{
  console.log(val)
  let ran1 = Math.floor(Math.random() * 47);
  let ran2 =  Math.floor(Math.random() * 47);
  let ran3 =  Math.floor(Math.random() * 47);
  let ran4 =  Math.floor(Math.random() * 47);
  let ran5 =  Math.floor(Math.random() * 47);
  let ran6 =  Math.floor(Math.random() * 47);



  const Recurence= async (name,site,start,end,status,url,ran)=>{
    name.innerHTML=val[ran].name
    site.innerHTML=val[ran].site
    start.innerHTML=val[ran].start_time
    end.innerHTML=val[ran].end_time
    status.innerHTML=val[ran].status
    url.href=val[ran].url
  }
  Recurence(firstC,SiteName1,Start1,End1,Status1,url1,ran1)
  Recurence(secondC,SiteName2,Start2,End2,Status2,url2,ran2)
  Recurence(thirdC,SiteName3,Start3,End3,Status3,url3,ran3)
  Recurence(fourthC,SiteName4,Start4,End4,Status4,url4,ran4)
  Recurence(fiveC,SiteName5,Start5,End5,Status5,url5,ran5)
  Recurence(sixC,SiteName6,Start6,End6,Status6,url6,ran6)
})

