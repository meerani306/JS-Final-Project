function showhome() {
    var home = document.getElementById('home');
    if (home.style.display = "none") {
        home.style.display = "block";
    }

    var about = document.getElementById('aboutus_container');
    about.style.display = "none";
    var contact = document.getElementById('contactus_container');
    contact.style.display = "none";
    document.getElementsByClassName('search')[0].style.display="block";


}

function showabout() {
    var about = document.getElementById('aboutus_container');
    about.style.display = "block";
    var home = document.getElementById('home');
    home.style.display = "none";
    var contact = document.getElementById('contactus_container');
    contact.style.display = "none";
    document.getElementsByClassName('search')[0].style.display="none";

}

function showcontact() {
    var contact = document.getElementById('contactus_container');
    contact.style.display = "flex";
    var home = document.getElementById('home');
    home.style.display = "none";
    var about = document.getElementById('aboutus_container');
    about.style.display = "none";
    document.getElementsByClassName('search')[0].style.display="none";
}


function search_func() {
    document.getElementById('search_res_container').style.display="block";
    fetch('travel_recommendation.json')
        .then(response => response.json())  // Parse JSON response
        .then(data => {
            //To Display Search Result Container
            document.getElementById('search_res_container').style.display="block";

            var search_value = document.getElementById('search_val').value;
            let res_img1=document.getElementById('res_img1');
            let res_title1=document.getElementById('res_title1');
            let res_para1=document.getElementById('res_para1');
            
            let res_img2=document.getElementById('res_img2');
            let res_title2=document.getElementById('res_title2');
            let res_para2=document.getElementById('res_para2');

            if (search_value.toLowerCase() == "beach" || search_value.toLowerCase() == "beaches") 
                { 
                    res_img1.src=(data.beaches[0].imageUrl); 
                    res_title1.innerHTML=(data.beaches[0].name);
                    res_para1.innerHTML=(data.beaches[0].description);
                
                    res_img2.src=(data.beaches[1].imageUrl); 
                    res_title2.innerHTML=(data.beaches[1].name);
                    res_para2.innerHTML=(data.beaches[1].description);}

                    else if(search_value.toLowerCase() == "country" || search_value.toLowerCase() == "countries")
                    { 
                        res_img1.src=(data.countries[0].cities[0].imageUrl); 
                        res_title1.innerHTML=(data.countries[0].cities[0].name);
                        res_para1.innerHTML=(data.countries[0].cities[0].description);
                    
                        res_img2.src=(data.countries[1].cities[1].imageUrl); 
                        res_title2.innerHTML=(data.countries[1].cities[1].name);
                        res_para2.innerHTML=(data.countries[1].cities[1].description);}

                        else if(search_value.toLowerCase() == "temple" || search_value.toLowerCase() == "temples" || search_value.toLowerCase() == "TEMPLE")
                            { 
                                res_img1.src=(data.temples[0].imageUrl); 
                                res_title1.innerHTML=(data.temples[0].name);
                                res_para1.innerHTML=(data.temples[0].description);
                            
                                res_img2.src=(data.temples[1].imageUrl); 
                                res_title2.innerHTML=(data.temples[1].name);
                                res_para2.innerHTML=(data.temples[1].description);}

        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function reset() {
    document.getElementById('search_res_container').style.display="none";
    
}

