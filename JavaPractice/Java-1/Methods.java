public class Methods {
    public static void main(String[] args){
        //addition
        System.out.println("Addition: " + addition(6,2));
        System.out.println("Subtraction: " + subtraction(6,2));
        System.out.println("Division: " + division(6,2));
        System.out.println("Multiplication: " + multiplication(6,2));
    }
    //addition
    public static int addition(int num1, int num2){
        return num1+num2;
    }
    //subtraction
    public static int subtraction(int num1, int num2){
        return num1-num2;
    }
    //division
    public static int division(int a, int b ){
        return a/b;
    }
    //multiplication
    public static int multiplication(int a, int b ){
        return a*b;
    }
}
