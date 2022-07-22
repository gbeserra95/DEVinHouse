using System;
class Hello
{
  static void Main()
  {
    int fact = 1;
    int input = 0;
    do
    {
      Console.Write("Enter an integer between 0 and 10: ");
      input = Int32.Parse(Console.ReadLine());
    } while (input < 0 && input > 10);

    for (int i = input; i > 0; i--)
    {
      fact *= i;
    }

    Console.WriteLine(fact);
  }
}