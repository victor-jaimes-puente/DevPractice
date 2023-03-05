import java.util.Scanner;

public class DiceRoll {
    // Create an application that simulates dice rolling.
    // Ask the user to enter the number of sides for a pair of dice.
    // Prompt the user to roll the dice.
    // "Roll" two n-sided dice, display the results of each, and then ask the user
    // if he/she wants to roll the dice again.
    // Use static methods to implement the method(s) that generate the random
    // numbers.
    // Use the .random method of the java.lang.Math class to generate random
    // numbers.
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int sides;

        do {
            System.out.println("How many sides?");
            sides = scanner.nextInt();

            int roll1 = rollDice(sides);
            int roll2 = rollDice(sides);

            System.out.println("Roll Dice 1: " + roll1);
            System.out.println("Roll Dice 2: " + roll2);
            System.out.println("Roll Totla: " + (roll1 + roll2));
            System.out.println("Would you like to roll again? (y/n) ");
        } while (scanner.next().equalsIgnoreCase("y"));

    }

    public static int rollDice(int sides) {
        return (int) (Math.random() * sides) + 1;
    }
}