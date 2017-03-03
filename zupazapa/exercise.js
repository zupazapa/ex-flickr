var exercise = {};

// Adds markers to the map and into array
exercise.addMarkers = function(data){
    data.photos.photo.forEach(function(photo){
        exercise.addMarker(photo);
    });
};

exercise.addMarker = function(photo){
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(photo.latitude,photo.longitude),
        icon: {
            path:google.maps.SymbolPath.CIRCLE,
            fillColor: 'red',
            fillOpacity: 0.5,
            scale:7,
            strokeWeight:1
        },
        map: map,
        title: photo.title
    });
    markers.push(marker);
};

exercise.addPhotos = function(data){
    var html = exercise.buildHtmlForImages(data);
    document.getElementById('images').innerHTML = html;
};

exercise.buildHtmlForImages = function(data){

    var imageTags = '';

    data.photos.photo.forEach(function(abc){
        imageTags += ' <img src =' +abc.url_s+ '> ';
    });
    console.log(imageTags);

    return imageTags;
};

