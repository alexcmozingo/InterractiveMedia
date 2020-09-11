var first = d3.select(".top");
    first.on("click",function () {
        first.text("Thank You");
    })
    
var second = d3.select("img");
    second.on("mouseenter",function()
             {
        second.attr("src","https://www.si.edu/sites/default/files/styles/main_image/public/page_banner/values-banner-oa.jpg?itok=RqOllkTk&timestamp=1582736711")
    })
    second.on("mouseleave",function()
             {
        second.attr("src","https://www.si.edu/sites/default/files/styles/main_image/public/page_banner/chsdm-69709bfcb9432-000001hr.jpg?itok=pe8VU-v9&timestamp=1582670953")
    })

var third = d3.select(".alert");
    third.on("click",function()
            {
        alert("You shouldn't have clicked")
    })