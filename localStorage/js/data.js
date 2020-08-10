
// 데이터 입력하면 일차적으로 저장할 변수!
let userData = [];

$(document).ready(function(){
  
  // '입력' 버튼 클릭 시 동작!
  $('form').submit(function(e){
    e.preventDefault();
    // 입력창에 쓰여있는 데이터 읽기!
    const name = $("#name").val();
    const nickname = $("#nickname").val();
    // 읽어들인 데이터로 객체 만들기!
    const userObj = {
      name: name,
      nickname: nickname
    };
    // 위에서 만든 객체를 배열에다 추가!
    userData.push(userObj);
    
    // 로컬스토리지 객체를 활용!
    // setItem 인자 2개 : 아이템의 이름, 실제 데이터
    localStorage.setItem("userData", 
                        JSON.stringify(userData));
    
  })
  
  
  
  $("#read").click(function(){
    
    // 로컬스토리지의 데이터 가져오기!
    const loadedData = localStorage.getItem("userData");
    
    // 데이터가 있다면 읽는다!
    if(loadedData !== null){
      const parseData = JSON.parse(loadedData)
      for(let i = 0; i < parseData.length; i++){
        console.log(parseData[i].name, 
                   parseData[i].nickname)
      }
    }
  })
  
})













