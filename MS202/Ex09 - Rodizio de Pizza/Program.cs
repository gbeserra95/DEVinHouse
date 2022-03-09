using System;

class Pizza
{
  static void Main()
  {
    int slices = 0;
    string input;

    do
    {
      Console.WriteLine(
        "Qual pizza você deseja?\n 0: Estou satisfeito\n 1: Calabreza\n 2: Muçarela \n 3: Portuguesa"
      );
      input = Console.ReadLine();

      if (input == "1" || input == "2" || input == "3")
      {
        slices++;
      }
    } while (input == "1" || input == "2" || input == "3");

    Console.WriteLine($"Você comeu {slices} pedaço(s).");
  }
}