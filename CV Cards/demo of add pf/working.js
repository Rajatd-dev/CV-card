function upload() {
    const fileUploadInput =document.querySelector('.file-uploader');
    const image = fileUploadInput.files[0];

    if(!image){
        return alert('Please select an image first.');
    
    }
    if (image.type.includes('image')){
        return alert('only images are allowed');
    }

    if(image.size > 10_000_000){
      return alert('Maximum Upload size is 10MB!')
    }

    constfileReader = new FileReader();
    fileReader.readAsDataURL(image);

    fileReader.onload = (fileReaderEvent) => {

        const profilePicture = document.querySelector('.profile-picture');
    
        profilePicture.style.backgroundImage = `url(${fileReaderEvent.target.result})`;
    };
    fileReader.readAsDataURL(image);
}