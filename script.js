$(document).ready(()=>{
  $(".wrap-img").on("mouseenter",(e)=>{
    $(e.currentTarget).find("div").fadeIn(240)
    $(e.currentTarget).find("div").find("i").animate({
      marginTop: "38%"}, 400)

  }).on("mouseleave", e=>{
      $(e.currentTarget).find("div").fadeOut(240)
      $(e.currentTarget).find("div").find("i").animate({
        marginTop:"0%"}, 400)
  })
  
})
