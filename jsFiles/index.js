let image;
document.getElementsByTagName('form')[0].onsubmit = async function (e) {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const response = await fetch('http://localhost:5000/vendor', {
        method: 'post',
        body: formdata
    });
    const data = await response.json();
    console.log(data);
    if (data) {
        for (let i = 0; i < 7; i++) {
            document.getElementsByTagName('input')[i].value = ''
        }

    }
};

document.getElementById('productImg').onchange = function (e) {
    const pic = e.target.files[0]
    if (pic.type === 'image/png' || 'image/jpeg') {
        document.getElementById('submit').disabled = 'true'
        const imgData = new FormData();
        imgData.append('file', pic)
        imgData.append('upload_preset', 'ChatApp')
        imgData.append('cloud_name', 'do8whoupu')
        fetch("https://api.cloudinary.com/v1_1/do8whoupu/image/upload", {
            method: 'POST',
            body: imgData,
        }).then(response => response.json())
            .then((data) => {
                console.log(data.url)
                image = data.url
            })
    }
    document.getElementById('submit').disabled = 'false'
}