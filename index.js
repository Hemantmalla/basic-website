const dashboard = document.getElementById("dashboard");

$("nav a").on('click', function (e) {

    e.preventDefault();

    const targetPage = $(this).data("page-src");

    if (targetPage) {
        $('#dashboard').attr('src', targetPage);
        $('nav a').removeClass('active');
        $(this).addClass('active');
    }
});


/* logout function */
function logOut() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
}