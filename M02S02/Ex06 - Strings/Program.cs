namespace myStrings
{
  class Program
  {
    static void Main()
    {
      Console.Write("Digite seu nome: ");

      var name = Console.ReadLine();

      for (int i = name.Length - 1; i >= 0; i--)
      {
        Console.Write(name[i]);
        if (i == 0)
        {
          Console.Write("\n");
        }
      }

      Console.WriteLine(name.Length);
    }
  }
}