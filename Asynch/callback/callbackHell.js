login(function () {

    getProfile(function () {

        getPosts(function () {

            getComments(function () {

                console.log("Donee");

            });

        });

    });

});