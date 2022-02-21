namespace Rounding
{
  class Program
  {
    static void Main()
    {
      Console.Write("Entre com um número de 2 casas decimais: ");

      var n = Console.ReadLine();

      Console.WriteLine(Math.Round(Convert.ToDouble(n), 0));
    }
  }
}