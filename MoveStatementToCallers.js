function renderPerson(outStream, person) {
    outStream.write(`<p>${person.name}</p>\n`);
    renderPhoto(outStream, person.photo);
    emitPhotoData(outStream, person.photo);
}

function renderPhoto(outStream, photo) {
    console.log("rendering photo");
}
function listRecentPhotos(outStream, photos) {
    photos
        .filter(p => p.date > recentDateCutoff())
        .forEach(p => {
            outStream.write("<div>\n");
            emitPhotoData(outStream, p);
            outStream.write("</div>\n");
        });
}
function emitPhotoData(outStream, photo) {
    outStream.write(`<p>title: ${photo.title}</p>\n`);
    outStream.write(`<p>date: ${photo.date.toDateString()}</p>\n`);
    outStream.write(`<p>location: ${photo.location}</p>\n`);
}

const person = {
    'name': "Mg Mg"
}

const photo = {
    'title': "Pofile",
    'location': 'mandalay',
    'date': new Date,
}

person.photo = photo;



let write = (data) => console.log(data)

let outStream = {write}

renderPerson(outStream, person)