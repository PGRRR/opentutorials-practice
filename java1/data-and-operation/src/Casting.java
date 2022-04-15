
public class Casting {

	public static void main(String[] args) {
		
		double a = 1.1;
		double b = 1; // 손실이 없으므로 자동 캐스팅
		double b2 = (double)1; // 명시적 수동 캐스팅 
		System.out.println(b);
		
//		int c = 1.1; // 손실이 있으므로 자동 캐스팅 불가
		double d = 1.1;
		int e = (int) 1.1; // 손실이 있으므로 수동 캐스팅 손실
		System.out.println(e);
		
		// 1 to String
		String f = Integer.toString(1);
		System.out.println(f.getClass());
		

	}

}
