namespace Medias
{
  class Program
  {
    static void Main()
    {
      int i = 0;
      double soma = 0;


      Console.WriteLine("Insira suas três notas: ");

      while (i < 3)
      {
        soma += Convert.ToDouble(Console.ReadLine());
        i++;
      }

      Console.WriteLine("Sua média final é: " + (double)Math.Round(soma / 3, 2));

    }
  }
}