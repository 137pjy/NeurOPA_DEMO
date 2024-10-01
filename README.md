# 💻 데모 프로젝트
"RISOPA: Rapid Imperceptible Strong One-Pixel Attacks in Deep Neural Networks" 
논문의 연구 결과를 가시적으로 보여주는 데모 프로젝트입니다.  
📎 https://137pjy.github.io/NeurOPA_DEMO/  



✏️ https://www.mdpi.com/2227-7390/12/7/1083


## 논문 요약
최근 연구에 따르면, 미세한 변형으로도 신경망 모델을 속여 잘못된 결과를 유도할 수 있으며, 이를 adversarial examples라고 합니다. 이 중 하나인 One Pixel Attack은 한 픽셀만으로 모델을 혼란에 빠뜨릴 수 있는 공격입니다. 기존 방법들은 differential evolution 기법을 사용해 무작위 선택으로 최적해를 찾지만, 이는 시간이 많이 소요되고 좋은 해를 놓칠 가능성이 큽니다. 본 논문에서는 이를 개선하기 위해 gradient ascent with momentum을 제안합니다. 이 방법은 목표에 더 직접적으로 접근해 효율적으로 One Pixel Attack을 탐지하며, 실험 결과 기존 방법보다 훨씬 빠르게 공격을 찾아낼 수 있음을 보여줍니다.

## 연구 프로젝트 Organization
📎 https://github.com/Konkuk-fvlab

## 실행 화면 
### 1. 다른 Attack Type에 따라 달라지는 이미지
  ![image](https://github.com/user-attachments/assets/ea38d726-a9e3-4f4c-948a-99171cad54de)
### 2. 다른 모델을 선택함에 따라 달라지는 이미지
  ![image](https://github.com/user-attachments/assets/bb752ddf-8ad6-4668-b1ba-dd133df4caa9)
### 3. 실행 버튼을 눌렀을 시 결과
- Score Attack 실행 화면
 <img width="452" alt="image" src="https://github.com/user-attachments/assets/afe5efa7-ad92-44c8-866f-58135704319b">
 <img width="452" alt="image" src="https://github.com/user-attachments/assets/c9c2da4b-95af-4429-b6ad-0a9e00f2431b">
 
-	Distance Attack 실행 화면
  <img width="434" alt="image" src="https://github.com/user-attachments/assets/c47ee710-0518-44fc-8168-8eec3fa7a7fd">
 
-	Rapid Attack 실행 화면
 <img width="452" alt="image" src="https://github.com/user-attachments/assets/28b82068-120c-4064-95fa-b5687ebb1028">

## 실행 결과
화면을 2분할 했을 때 왼쪽이 NeurOPA 모델의 세 가지 Attack Type(Score Attack, Distance Attack, Rapid Attack)에 따른 결과이다. 오른쪽은 Su 모델 또는 OPA2D 모델의 결과이다. 실행화면 상단의 Progress Bar에서 확인할 수 있듯이 왼쪽의 NeurOPA 모델의 실행 시간이 Su 모델 또는 OPA2D 모델과 비교했을 때 월등히 빠른 것을 가시적으로 알 수 있다. 이외에도 , Confidence Score 또는 Distance등 Attack 목적에 맞는 결과 값들이 기존의 모델인 Su 모델과 OPA2D 모델과 비교했을 때 성능이 뛰어남을 확인할 수 있다.![image](https://github.com/user-attachments/assets/569921c0-116d-4b1d-af4e-e39267b691d2)

