
    // Landmark data (with the embed map links for locations from google maps)
    
    const landmarks = [
     {
      id: 'sydney',
      name: 'Sydney Opera House',
      lat: -33.8567844, lon: 151.2152967,
      img: 'images/sydneyoperahouse.jpg',
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.3415606435987!2d151.213107!3d-33.856784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae5d78b4c77f%3A0xd638f42d45c4c1fd!2sSydney%20Opera%20House!5e0!3m2!1sen!2sau!4v1700000000000"
     },
     {
      id: 'liberty',
      name: 'Statue of Liberty',
      lat: -33.8567844, lon: 151.2152967,
      img: 'images/statueofliberty.jpg',
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8757618011323!2d-74.046689!3d40.689249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b62e1f24cb%3A0xdea2b89c65f2a92f!2sStatue%20of%20Liberty!5e0!3m2!1sen!2sus!4v1700000000001"
     },
     {
      id: 'edinburgh',
      name: 'Edinburgh Castle',
      lat: -33.8567844, lon: 151.2152967,
      img: 'images/edinburghcastle.webp',
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.0446702169706!2d-3.202488422826115!3d55.94859767689296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c79a2099c0f7%3A0x469a1eebe54c0a58!2sEdinburgh%20Castle!5e0!3m2!1sen!2sus!4v1759274775536!5m2!1sen!2sus" 
     }, 
    ];

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
