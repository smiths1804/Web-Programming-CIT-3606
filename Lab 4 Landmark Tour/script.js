
<script>
    // Select all radio buttons with name "landmark"

    const radios = document.querySelectorAll('input[name="landmark"]');
    const landmarkImage = document.getElementById("landmark");

    // Loop through radio buttons with an event listener
    radios.forEach(radio => {
        radio.addEventListener("click", () => {
            landmarkImage.src = radio.value; // Changes the image source
        });
    });

</script>