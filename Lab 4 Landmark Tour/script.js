
    // Landmark data (with the embed map links for locations from google maps)
    
    function changeLandmark(value) {
      const img = document.getElementById("landmarkImage");
      const map = document.getElementById("landmarkMap");
    


    if (value === "sydney"){
      img.src = 'images/sydneyoperahouse.jpg';
      map.src = 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.3415606435987!2d151.213107!3d-33.856784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae5d78b4c77f%3A0xd638f42d45c4c1fd!2sSydney%20Opera%20House!5e0!3m2!1sen!2sau!4v1700000000000";
        desc.textContent =
            "The Sydney Opera House is an iconic performing art center.";
    } else if (value === "liberty") {
      img.src = 'images/statueofliberty.jpg';
      map.src = 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8757618011323!2d-74.046689!3d40.689249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b62e1f24cb%3A0xdea2b89c65f2a92f!2sStatue%20of%20Liberty!5e0!3m2!1sen!2sus!4v1700000000001";
        desc.textContent =
            "The statue of liberty in 1866 was used as a symbol of freedom and democracy.";
    } else if (value === "edinburgh") {
      img.src = 'images/edinburghcastle.webp';
      map.src = 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.0446702169706!2d-3.202488422826115!3d55.94859767689296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c79a2099c0f7%3A0x469a1eebe54c0a58!2sEdinburgh%20Castle!5e0!3m2!1sen!2sus!4v1759274775536!5m2!1sen!2sus";
        desc.textContent =
            "Edinburgh Castle is a historic fortress in Scotland.";
    }
}

    // Resize image functionality

    function resizeImage(){
        const imgEl = document.getElementById("landmarkImage");
        const mapEl = document.getElementById("landmarkMap");
        const sizeSelect = document.getElementById("sizeSelect");

        const size = sizeSelect.value;
         const widths = { small: 100, medium: 200, large: 400 };
         const newWidth = widths[size] || widths.medium;

        imgEl.width = newWidth;
        mapEl.width = Math.max(300, newWidth);
        console.log("resize ->", size, newWidth);
    }

