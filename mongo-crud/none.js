/*
데이터베이스를 통한 동작들!
데이터베이스의 데이터 관리를 CRUD라 한다!

Create(생성) : 데이터를 만들기 or 삽입하기
Read(읽기) : 데이터베이스로부터 데이터 조회하기/읽어들이기
Update(변경) : 기존의 데이터를 다른 값으로 변경하기
Delete(삭제) : 데이터 삭제하기

== 몽고디비 스키마 객체의 CRUD 함수 ==

save() : 데이터 넣기~!
=> zoo.save() // 개별 데이터의 함수

find() : 데이터 보기~!
=> Zoo.find({}) // 스키마의 함수

remove() : 데이터 삭제하기~!
=> Zoo.remove({key: 지우고자하는 value})
=> Zoo.remove({number: 1}) // 넘버가 1인 동물 삭제!

update() : 기존 데이터 변경하기~!
=> Zoo.update({key:value}, {key:value})
=> Zoo.update({number: 1}, {animal: {
    name: '토끼'
    habitat: '산골짜기'
}})
// 1번 동물을 산골짜기에 사는 토끼로 변경!


*/