// See https://aka.ms/new-console-template for more information
namespace HelloWorld
{
  class Program
  {
    static void Main()
    {
      Console.Write("First name: ");
      var name = Console.ReadLine();

      Console.Write("Last name: ");
      var lastname = Console.ReadLine();

      Console.WriteLine($"Hello, {name} {lastname}!");
    }
  }
}