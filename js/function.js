const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

function sendEmail() {
    sendEmail.send({
        Host: "smtp.gmail.com",
        Usernamer: "prospernkausu@gmail.com",
        Password: "password",
        To: "prospernkausu@gmail.com",
        From: document.getElementById("email").value,
        Subject: "New Enquiry",
        Body: "Name: " + document.getElementById("email").value
            + "<br> Phone no: " + document.getElementById("phonenumber").value
        + "<br> Message" + document.getElementById("message").value
    }).then(
        message => alert("Message sent Succefully")
    );
}

function Myfunction() {
    window.open("https://www.linkedin.com/in/prosper-nkausu/")
}

function Mygit() {
    window.open("https://github.com/ProsperNkausu/Portfolio.git")
}

function Mysource() {
    window.open("https://github.com/ProsperNkausu/Swimming.com/blob/main/index.html")
}

function Mysource() {
    window.open("https://github.com/ProsperNkausu/FevenSalon.git")
}