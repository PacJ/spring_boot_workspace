package com.example.demo;

public class LombokTest {
	
	public static void main(String[] args) {
		MemDTO dto = new MemDTO();
		dto.setName("홍길동");
		dto.setAge(500);
		dto.setLoc("블라디보스톡");
		
		System.out.printf("%s %d %s\n", dto.getName(), dto.getAge(), dto.getLoc());
		
		MemDTO dto2 = new MemDTO("고수", 25, "경기");
		System.out.printf("%s %d %s\n", dto2.getName(), dto2.getAge(), dto2.getLoc());
	}

}
