public class Loops {
    public static void main(String[] args) {
        forLoop();
        forLoopBreak();
        forLoopSkip();
        compareStrings();
    }
    public static void forLoop(){
        for(int i = 0; i <= 10; i++){
            System.out.println("index is : " + i);
        }
    }
    public static void forLoopBreak(){
        for(int i = 0; i <= 100; i++){
            if(i == 15){
                break;
            }
            System.out.println("inex is : " + i);
            
        }
    }
    public static void forLoopSkip(){
        for(int i = 0; i <= 100; i++){
            if(i % 2 == 1){
                continue;
            }
            System.out.println("inex is : " + i);
            
        }
    }
    public static void compareStrings(){
        String input = "Codeup Rocks!";
        System.out.println(
            input.equals("codeup rocks!")
        );
        System.out.println(
            input.equals("Codeup Rocks!")
        );
        System.out.println(
            input.equalsIgnoreCase("codeup rocks!") // true
            );
        System.out.println(
            input.startsWith("codeup") // false
            );
    }
}
