import java.util.Scanner;
public class InOut {
    public static void main(String[] args){
        getNextLine();
    }
    public static void getNextLine(){
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter Something please");
        String userInput = scanner.next();
        System.out.println(" You entered: " + userInput);
    }

}
