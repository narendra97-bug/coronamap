function updatemap(){
      fetch("/DATA.json")
      .then(response =>response.json())
      .then(AWB.data =>{
          console.log(AWB.data)
          AWB.data.forEach(element =>{
              latitude= element.latitude;
              longitude= element.longitude;

              cases=element.data.total_cases;

              if(cases>255){
                  color="rgb(255,0,0)";
              }
              else{
                  color="rgb(#{cases},0,0)";
              }

              new mapboxgl.Marker({
                draggable: false,
                color: "red"
                })
                .setLngLat([longitude, latitude])
                .addTo(map);
          })
      })
}

let interval=200;
setInterval(updatemap,interval);