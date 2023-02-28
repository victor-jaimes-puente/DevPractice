import java.util.Scanner;

public class StringBasics {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Something please");

        String userInput = scanner.nextLine();

        if (userInput.endsWith("?")){
            System.out.println("Huh?");
        } else {
            System.out.println("Intersting");
        }
    }

}
