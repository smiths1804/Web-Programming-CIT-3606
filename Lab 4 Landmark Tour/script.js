
    // Select all radio buttons with name "landmark"

    const radios = document.querySelectorAll('input[name="landmark"]');
    const landmarkImage = document.getElementById("landmark");

    // Loop through radio buttons with an event listener
    radios.forEach(radio => {
        radio.addEventListener("click", () => {
            landmarkImage.src = radio.value; // Changes the image source
        });
    });

    // Resize image functionality

    function resizeImage(){
        const size = document.getElementById("sizeSelect").value;
        const img = document.getElementById("landmarkImage");
        if(size === "small") img.width = 100;
        else if(size === "medium") img.width = 200;
        else if(size === "large") img.width = 400;
    }
