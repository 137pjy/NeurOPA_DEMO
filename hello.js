document.addEventListener('DOMContentLoaded', function() {
    // Variables to store selected values
    let selectedModel = $('#model-select').val();
    let selectedAttackType = $('#attack-type-select').val();

    // // Event listener for model select
    // $('#model-select').change(function() {
    //     selectedModel = $(this).val();
    //     console.log('Selected Model:', selectedModel);
    // });

    // // Event listener for attack type select
    // $('#attack-type-select').change(function() {
    //     selectedAttackType = $(this).val();
    //     console.log('Selected Attack Type:', selectedAttackType);
    // });

    let img_id_arr;
    let imagePaths=[];
    
    function set_imagePaths(selectedModel,selectedAttackType){
        if(selectedModel=='lenet'){
            if(selectedAttackType=='RA'){
                img_id_arr=[213,934,1022,1109,1127,1328,1379,1719,1844,2003];
            }else{
                img_id_arr=[213,1022,1109,1127,1328,2003,2646,2727,2945];
            }
            
        }else if(selectedModel=='resnet'){
    
        }else if(selectedModel=='net_int_net'){
            
        }else{//selectedModel=='wide_resnet'
    
        }
        imagePaths=[];
        for (let i = 0; i < img_id_arr.length; i++) {
            imagePaths.push(`images/original_images/${img_id_arr[i]}_${selectedModel}_${selectedAttackType}.png`);
        }
        console.log(imagePaths);
    }
   

    // const imagePaths = [
    //     'images/original_images/213.png',
    //     'images/original_images/1022.png',
    //     'images/original_images/1109.png',
    // ];

    let selectedImage = '';
    let img_id;

    function addImages() {
        set_imagePaths(selectedModel,selectedAttackType);
        const imageContainer = document.querySelector('.image-container');
        imageContainer.innerHTML = ''; // Clear existing images
        imagePaths.forEach(path => {
            const img = document.createElement('img');
            img.src = path;
            img.alt = 'Image';
            img.addEventListener('click', function() {
                selectedImage = this.src;
                img_id = selectedImage.split('/').pop().split('.')[0].split('_')[0];//213
                console.log('Selected Image img_id:', img_id);
                alert(`Selected Image ID : ${img_id}`);
            });
            imageContainer.appendChild(img);
        });
    }



    document.getElementById('model-select').addEventListener('change', function() {
        selectedModel = this.value;
        console.log('Selected Model:', selectedModel);
        
        
    });

    document.getElementById('attack-type-select').addEventListener('change', function() {
        selectedAttackType = this.value;
        console.log('Selected Attack Type:', selectedAttackType);
        addImages();
        
    });

    document.getElementById('execute-button').addEventListener('click', function() {
        const selectedModel = document.getElementById('model-select').value;
        const selectedAttackType = document.getElementById('attack-type-select').value;
        
        // 선택된 값들과 이미지 경로를 progressbar.html 페이지로 전달
        window.location.href = `progressbar.html?model=${selectedModel}&attack=${selectedAttackType}&image=${img_id}`;
    });

    


});
