document.addEventListener('DOMContentLoaded', function() {
    const imagePaths = [
        'images/original_images/213.png',
        'images/original_images/1022.png',
        'images/original_images/1109.png',
    ];

    let selectedImage = '';

    function addImages() {
        const imageContainer = document.querySelector('.image-container');
        imagePaths.forEach(path => {
            const img = document.createElement('img');
            img.src = path;
            img.alt = 'Image';
            img.addEventListener('click', function() {
                selectedImage = this.src;
                console.log('Selected Image:', selectedImage);
                alert(`Selected Image: ${selectedImage}`);
            });
            imageContainer.appendChild(img);
        });
    }

    addImages();

    document.getElementById('model-select').addEventListener('change', function() {
        const selectedModel = this.value;
        console.log('Selected Model:', selectedModel);
    });

    document.getElementById('attack-type-select').addEventListener('change', function() {
        const selectedAttackType = this.value;
        console.log('Selected Attack Type:', selectedAttackType);
    });

    document.getElementById('execute-button').addEventListener('click', function() {
        const selectedModel = document.getElementById('model-select').value;
        const selectedAttackType = document.getElementById('attack-type-select').value;
        
        // 선택된 값들과 이미지 경로를 progressbar.html 페이지로 전달
        window.location.href = `progressbar.html?model=${selectedModel}&attack=${selectedAttackType}&image=${selectedImage}`;
    });


});
