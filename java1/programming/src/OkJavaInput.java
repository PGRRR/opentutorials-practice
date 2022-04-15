import javax.swing.JOptionPane;

import org.opentutorials.iot.DimmingLights;
import org.opentutorials.iot.Elevator;
import org.opentutorials.iot.Lighting;
import org.opentutorials.iot.Security;

public class OkJavaInput {
	// parameter, 매개변수 입력 값을 받는 가장 표준적인 방법
	public static void main(String[] args) {
		
//		String id = JOptionPane.showInputDialog("Enter a ID");
//		String bright = JOptionPane.showInputDialog("Enter a Bright level");
		
		// Arguments 인자
		String id = args[0];
		String bright = args[1];
		
		// Elevator call
		Elevator myElevator = new Elevator(id);
		// Data type //variable
		myElevator.callForUp(1);
		
		// Security off
		Security mySecurity = new Security(id);
		mySecurity.off();
		
		// Light on
		Lighting hallLamp = new Lighting(id + " / Hall Lamp");
		hallLamp.on();
		
		Lighting floorLamp = new Lighting(id + " / Hall Lamp");
		floorLamp.on();
		
		DimmingLights moodLamp = new DimmingLights(id + " moodLamp");
		moodLamp.setBright(Double.parseDouble(bright));
		moodLamp.on();
		
		}

}
