var images = [
    "https://i.pinimg.com/originals/61/b2/d3/61b2d33f39927afa72e5f57a28cc7c83.gif",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW-1wWfW1o0mDKfGCry6-acpOM0CzNhsMjQdjGyo3Sleb-SGa3HZVfhPFIlgNwCgXmG3M&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWG4nQciSSvwSYxptkQ7AnPhoN30dJfSv77A&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfe3_jj3GS_HFUY6Po0mSSGTNQmtSlaCPF3A&usqp=CAU",
    "https://png.pngtree.com/png-clipart/20190920/original/pngtree-cartoon-grandmother-and-grandson-park-walking-png-transparent-bottom-png-image_4624173.jpg"
];

var names = [
    "Family book", "Anuradha N", "Shishira Pillai", "Arun Kumar", "Saroja Pillai"
];

var i = 0;
function update()
{
        i++;
        var numbers_of_family_members = 4
        if(i > numbers_of_family_members )
        {
           i = 0;
        }
        var updatedimage = images[i];
        var updatedname  = names[i];
        document.getElementById("family_member_image").src = updatedimage;
        document.getElementById("family_member_name").innerHTML = updatedname;

}