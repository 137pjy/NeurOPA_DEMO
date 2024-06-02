$(document).ready(function() {
    
    
    function updateProgressBar(duration, progressBar,num) {
        var interval = 100; // 업데이트 간격 (100ms)
        var progressValue = 0;
        var increment = (interval / duration) * 100; // 각 업데이트마다 증가할 값
    
        var intervalId = setInterval(function() {
            progressValue += increment;
            if (progressValue >= 100) {
                progressValue = 100;
                clearInterval(intervalId);
            }
            progressBar.css("width", progressValue + "%");
        }, interval);
    
        let attacked_img_src='';

        if(num==2){
            if(selectedAttackType=='SA'){
                contrastAttackType='Su';
            }
            attacked_img_src='images/Attacked_images/'+img_id+'_'+selectedModel+'_'+contrastAttackType+'.png';
        }   
        else{
            attacked_img_src='images/Attacked_images/'+img_id+'_'+selectedModel+'_'+selectedAttackType+'.png';
        }
    
   
        console.log(attacked_img_src)
        
        // 모델과 공격 유형 출력
        $('#model-info'+num).text(`Selected Model: ${selectedModel}`);
        $('#attack-info'+num).text(`Selected Attack Type: ${selectedAttackType}`);
    
        // 이미지 출력
        $('#image-info'+num).attr('src', attacked_img_src);
        console.log(`Image Path for progress bar ${num}: ${attacked_img_src}`);
    
        // progress bar 완료 후에 정보를 표시
        setTimeout(function() {
            $('#info-container').css('display', 'block');
        }, duration);
    }

    function extractDuration(img_id,selectedModel,AttackType,num){

        // File path to your CSV file
        const filePath = 'images/Attacked_datas/'+img_id+'_'+selectedModel+'_'+AttackType+'.csv';

        var duration;
        $.ajax({
            async: false,
            url:filePath,
            dataType:'text',
            success: function(data) {
                const csvArray =data.split(',');

                // Get the last element of the array
                const lastElement = csvArray[csvArray.length - 1];
        
                console.log(lastElement); // Output: 6.325098037719727

                const number = parseFloat(lastElement); // Parse the string as a floating-point number
                const result = Math.floor(number * 1000); // Remove the decimal part and multiply by 100
                console.log(result); // Output: 3649
                duration=result;

                // if(num==1){
                //     var progressBar1 = $("#progressbar1");
                //     updateProgressBar(duration, progressBar1,1);
                // }else{
                //     var progressBar2 = $("#progressbar2");
                //     updateProgressBar(duration, progressBar2,2);
                // }
                
            }
        });
        
        return duration;

       
    }

    // URL 파싱
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const selectedModel = urlParams.get('model');
    const selectedAttackType = urlParams.get('attack');
    const selectedImage = urlParams.get('image');
    
    const url = new URL(selectedImage);
    const imagePath = url.pathname;

    const filenameWithExtension = imagePath.split('/').pop(); // "213.png"
    const img_id = filenameWithExtension.split('.')[0]; // "213"

    let contrastAttackType='Su';



    var duration1=extractDuration(img_id,selectedModel,selectedAttackType,1);
    var duration2=extractDuration(img_id,selectedModel,contrastAttackType,2);



    console.log('duration1'+duration1);
    console.log('duration2'+duration2);

    // 호출 예시:
    //var duration1 = 2000; // 2초 동안 진행
    var progressBar1 = $("#progressbar1");
    updateProgressBar(duration1, progressBar1,1);

    //var duration2 = 10000; // 2초 동안 진행
    var progressBar2 = $("#progressbar2");
    updateProgressBar(duration2, progressBar2,2);




});
