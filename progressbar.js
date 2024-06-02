$(document).ready(function() {
    function updateProgressBar(duration, progressBar) {
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
    
        // URL 파싱
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const selectedModel = urlParams.get('model');
        const selectedAttackType = urlParams.get('attack');
        const selectedImage = urlParams.get('image');
        
        const url = new URL(selectedImage);
        const imagePath = url.pathname;
    
        // 모델과 공격 유형 출력
        $('#model-info').text(`Selected Model: ${selectedModel}`);
        $('#attack-info').text(`Selected Attack Type: ${selectedAttackType}`);
    
        // 이미지 출력
        $('#image-info').attr('src', imagePath);
    
        // progress bar 완료 후에 정보를 표시
        setTimeout(function() {
            $('#info-container').css('display', 'block');
        }, duration);
    }

    // 호출 예시:
    var duration1 = 2000; // 2초 동안 진행
    var progressBar1 = $("#progressbar1");
    updateProgressBar(duration1, progressBar1);

    var duration2 = 10000; // 2초 동안 진행
    var progressBar2 = $("#progressbar2");
    updateProgressBar(duration2, progressBar2);




});
